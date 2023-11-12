from django.urls import path, include
from rest_framework.routers import DefaultRouter
from expenses import views


router = DefaultRouter()
router.register('', views.ExpenseViewSet, basename='expense')

urlpatterns = [
    path('',include(router.urls))
]

