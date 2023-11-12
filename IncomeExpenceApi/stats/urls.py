from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ExpenseStats, IncomeStats, IncomeExpenseStats, DashboardStat, CustomDashboardStat, TodoStats


# router = DefaultRouter()
# router.register('', ExpenseStats.as_view(), basename='exp_stats')

urlpatterns = [
    # path('',include(router.urls)),
    path('exp_stats/<int:pk>', ExpenseStats.as_view(), name ='exp_stats'),
    path('inc_stats/<int:pk>', IncomeStats.as_view(), name ='inc_stats'),
    path('calender/', IncomeExpenseStats.as_view(), name='cal'),
    path('dash/<int:pk>', DashboardStat.as_view(), name='dash'),
    path('dash/', CustomDashboardStat.as_view(), name='dash2'),
    path('todo-stats/', TodoStats.as_view(), name='todo-stats'),
]

