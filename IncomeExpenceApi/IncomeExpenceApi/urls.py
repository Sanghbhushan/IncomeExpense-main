"""IncomeExpenceApi URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from todo.views import ClearTodo
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/', include('Auth_api.urls')),
    path('api/user/expense/', include('expenses.urls')),
    path('api/user/income/', include('income.urls')),
    path('api/user/stats/', include('stats.urls')),
    path('api/user/formula/', include('formula.urls')),
    path('api/user/todo/', include('todo.urls')),
    path('api/user/cleartodo/', ClearTodo.as_view(), name='clear'),

]

handler404 = 'utils.views.error_404'
# handler500 = 'utils.views.error_500'