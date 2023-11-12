from django.urls import path, include
from rest_framework.routers import DefaultRouter
from income import views


router = DefaultRouter()
router.register('', views.IncomeViewSet, basename='income')

urlpatterns = [
    path('',include(router.urls))
]

