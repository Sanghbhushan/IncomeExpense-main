
from django.urls import path, include
from Auth_api.views import UserRegistration, UserLogin,ProfileView,PasswordChangeView, Set_password_by_email,Reset_password_view
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', UserRegistration.as_view(), name='register'),
    path('login/', UserLogin.as_view(), name='login'),
    path('profile/', ProfileView.as_view(), name='profile'),
    path('reset_password/', PasswordChangeView.as_view(), name='reset_password'),
    path('set_password/', Set_password_by_email.as_view(), name='set_password'),
    path('set_password/<uid>/<token>/', Reset_password_view.as_view(), name='reset'),
 
   

]
