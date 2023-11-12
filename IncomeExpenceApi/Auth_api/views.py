from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .serializer import UserRegistrationSerializer, LoginSerializer, ProfileSerializer, PasswordChangeSerializer, Set_Password_Email, ResetPasswordSerializer
from django.contrib.auth import authenticate
from Auth_api.renderers import UserRenderer
from rest_framework.permissions import IsAuthenticated




# Create your views here.
from rest_framework_simplejwt.tokens import RefreshToken

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

class UserRegistration(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request, format=None):
        serializer = UserRegistrationSerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            token = get_tokens_for_user(user)
            return Response({"tokens":token,"msg": "Success"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserLogin(APIView):
    renderer_classes=[UserRenderer]
    def post(self, request, format = None ):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            user = authenticate(email=email, password=password)
            if user is not None:
                token = get_tokens_for_user(user)
                return Response({"tokens":token,"msg":"Login Success"}, status=status.HTTP_202_ACCEPTED)

            else: 
                return Response({"error":{"non_field_errors":"email or password is not valid"}}, status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class ProfileView(APIView):
    permission_classes = [IsAuthenticated]
    renderer_classes = [UserRenderer]
    def get(self, request, format = None):
        serializer = ProfileSerializer(request.user)
        
        return Response(serializer.data, status=status.HTTP_200_OK)

class PasswordChangeView(APIView):
    permission_classes = [IsAuthenticated]
    renderer_classes = [UserRenderer]
    def post(self, request, format =None):
        serializer = PasswordChangeSerializer(data = request.data, context = {'user':request.user}) 
        if serializer.is_valid(raise_exception=True):
            
            return Response("success!, password changed")
        return Response(serializer.errors)

class Set_password_by_email(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request):
        serializer = Set_Password_Email(data=request.data)
        if serializer.is_valid():
            print(serializer.data)
            
            return Response({"msg":"Password reset link is send ,please check your email"},status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

class Reset_password_view(APIView):
    renderer_classes = [UserRenderer]
    def post(self, request, uid, token):
        serializer = ResetPasswordSerializer(data= request.data, context = {"user":request.user, "uid":uid, "token":token} )
        if serializer.is_valid():
            
            return Response({"msg":"New password set successfully"}, status=status.HTTP_202_ACCEPTED)            
        return Response(serializer.errors)


