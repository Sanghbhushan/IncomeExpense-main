from django.urls import path, include

from formula import views



urlpatterns = [
    # path('',include(router.urls))
    path('', views.FormulaView.as_view(), name='formula')]