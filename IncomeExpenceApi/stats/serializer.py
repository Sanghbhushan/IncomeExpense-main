from rest_framework import serializers
from income.models import Income
from expenses.models import Expense


class StatIncomeSerializer(serializers.ModelSerializer):
  
    class Meta:
        model = Income
        fields = [ 'id',  'amount', 'date' ]

class StatExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = [ 'id',  'amount', 'date' ]


