from rest_framework import serializers
from Auth_api.models import User
from django.utils.encoding import smart_str, force_bytes, DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode


from django.contrib.auth.tokens import PasswordResetTokenGenerator
from .utils import Util
from django.contrib.auth.hashers import make_password
class UserRegistrationSerializer(serializers.ModelSerializer):
    password2= serializers.CharField(style = {'input_type':'password'}, write_only =True, max_length =25 )
    class Meta:
     model = User
     fields =['email', 'name','password','password2', 'tc']
     extra_kwargs ={
        'password':{'write_only':True}
     }

     # validating password and confirm password
    def validate(self, data):
        password = data.get('password')
        password2 = data.get('password2')
        
        if password != password2:
            raise serializers.ValidationError("Sorry !! 'password and confirm password not match'")
        return data
    
    def create(self, validate_data):
        validate_data['password'] = make_password(
                validate_data.get('password')
            )
        validate_data.pop('password2', None)
        password = make_password(validate_data['password'])
        return User.objects.create(**validate_data) 

class LoginSerializer(serializers.ModelSerializer):
    email = serializers.CharField(max_length = 200)
    class Meta:
        model=User
        fields =['email', 'password']


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['id', 'name','email']

class PasswordChangeSerializer(serializers.Serializer):
    password = serializers.CharField(max_length =50, style={"inputtype":"password"}, write_only = True)
    password2 = serializers.CharField(max_length =50, style={"inputtype":"password"}, write_only = True)

    class Meta:
        
        fields = ['password','password2']
        
    def validate(self, data):
        user = self.context.get('user')
        password = data.get('password')
        password2 = data.get('password2')
       
        if password !=password2:
            raise serializers.ValidationError("Sorry !! 'password and confirm password not match'")
        
        user.set_password(password)
        user.save()
        return data


class Set_Password_Email(serializers.Serializer):
    email = serializers.EmailField(max_length =50)
    
    class Meta:
        fields = ['email']

    def validate(self, attrs): 
        email = attrs.get("email")
        if User.objects.filter(email = email).exists():
            user = User.objects.get(email=email)
            uid = urlsafe_base64_encode(force_bytes(user.id))
            print("user id ",uid)
            token = PasswordResetTokenGenerator().make_token(user)
            print("Password token generator ",token)
            link = f"http://127.0.0.1:8000/api/user/set_password/{uid}/{token}/"

            print("link ",link)
            email_body = f'👋 Hi \nUse link below to reset your password\n\n{link}'
            data ={
                'email_body':email_body,
                 'to_email':user.email, 
                 'email_subject':f'Password Reset link'}
        
            Util.send_email(data)
            return attrs
            
        else:
            raise serializers.ValidationError("Your are not register")

class ResetPasswordSerializer(serializers.Serializer):
    password = serializers.CharField(max_length=50, write_only =True)
    password2 = serializers.CharField(max_length=50, write_only =True)

    class Meta:
        fields=['password','password2']

    def validate(self, attrs):
        try:
            password = attrs.get("password")
            password2 = attrs.get("password2")
            uid = self.context.get("uid")
            token = self.context.get("token") 
            
            if password != password2:
                raise serializers.ValidationError("Password not match")
            
            id = urlsafe_base64_decode(uid)
            user = User.objects.get(id = id)

            if not PasswordResetTokenGenerator().check_token(user, token):
                raise serializers.ValidationError("Token is not valid or expired")
            
            user.set_password(password)
            user.save()
            return attrs
        except DjangoUnicodeDecodeError as e:
            PasswordResetTokenGenerator().check_token(user, token)
            raise serializers.ValidationError("Token is not valid or expired")


            
                    
