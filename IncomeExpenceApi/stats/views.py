from django.shortcuts import render
import math
import pandas as pd
# Create your views here.
from rest_framework.views import APIView
import datetime

from income.models import Income
from expenses.models import Expense
from todo.models import Todo
from rest_framework.response import Response
from rest_framework import status
from .serializer import StatIncomeSerializer, StatExpenseSerializer

from .month_stat import filterMonth
from .year_stat import filterYear
from .day_stat import filterDay

class ExpenseStats(APIView):

    def get_amount_for_category(self, expense_list, category):
        expenses = expense_list.filter(category = category)
        print("get amount cat ")
        amount = 0
        
        for expense in expenses:
            amount += expense.amount
        return str(amount)
        
    def get_category(self, expense):
        return expense.category

    def get(self, request,pk):
        days = 365
        todaysdate =datetime.date.today()
        if todaysdate.year % 4 == 0 :
            days = 366
        
        year_ago = todaysdate - datetime.timedelta(days)
        today_date =datetime.date.today()

        exps = Expense.objects.filter(owner= request.user, date__gte = year_ago, date__lte =today_date)
        print("the expense :",exps)

        final = {}
        categories = list( set( map(self.get_category, exps)) )

        print("the categories :", categories)

        for exp in exps:
            for category in categories:
                final[category]=self.get_amount_for_category(exps, category)
        
        total = 0
        for amount in final.values():
            total+=float(amount)
        
        
        percent =[]
        for i in final.values():
            
            per = ((float(i)/total)*100)
            print(per)
            percent.append(round(per,2))
        
     
        return Response({'category': final, "percent":percent,"total":total })
        



class IncomeStats(APIView):

    def get_amount_for_source(self, source_list, source):
        sources = source_list.filter(source = source)
        amount = 0
        print("get amount cat ", source)
        
        for source in sources:
            amount += source.amount
        return str(amount)
        
    def get_source(self, income):
        return income.source

    def get(self, request,pk):
        days = pk
        todaysdate =datetime.date.today()
        
        
        year_ago = todaysdate - datetime.timedelta(days)
        today_date =datetime.date.today()

        incom = Income.objects.filter(owner= request.user, date__gte = year_ago, date__lte =today_date)
        print("the income :",incom)

        final = {}
        incom_sources = list( set( map(self.get_source, incom )) )
        
        
        for i in incom :
            for source in incom_sources:
                
                final[source] = self.get_amount_for_source(incom, source)
                
        total = 0
        for amount in final.values():
            total+=float(amount)
       
        
        percent =[]
        for i in final.values():
            
            per = ((float(i)/total)*100)
            print(per)
            percent.append(round(per,2))
        
        
        return Response({'source': final,"percent":percent,"total":total})
        
        

class IncomeExpenseStats(APIView):
   
   def post(self, request):
        print(request.data)

        database = Expense
        if request.data["name"] =="Income":
            database = Income
            
    
        incom = database.objects.filter(owner= request.user)
        serializer = StatIncomeSerializer(incom, many=True )
        df= pd.DataFrame(serializer.data)
       
        df['date'] = pd.to_datetime(df.date)
        df['amount'] = df['amount'].astype(float)
        df['year'] = pd.DatetimeIndex(df.date).year
        df['month'] = pd.DatetimeIndex(df.date).month
        df['day'] = pd.DatetimeIndex(df.date).day
        
        
        
    

        yearWise = df.groupby(['year']).aggregate(
    {"amount": ["mean", "max", "min", "sum", "count"]})
        
        monthWise = df.groupby(['year','month']).aggregate(
    {'amount': ["mean", "max", "min", "sum", "count"]})
        
        dayWise = df.groupby(['year','month','day']).aggregate(
    {'amount': ["mean", "max", "min", "sum", "count"]})
        
        
        
        heading = ["mean", "max", "min", "sum", "count"]   

        yfinal = filterYear(yearWise, heading)
        mfinal=filterMonth(monthWise, heading)
        dfinal=filterDay(dayWise, heading)
        
        print(dayWise)
        res = { 
                "year":yfinal,
                "month":mfinal,
                "day":dfinal
               }
        
        
        return Response(res)


class DashboardStat(APIView):
    def get(self, request, pk=28):
        days = pk
        todaysdate =datetime.date.today()

        year_ago = todaysdate - datetime.timedelta(days)
        today_date =datetime.date.today()
       
        if request.data:
            print("Yes you are in post")
            From = request.data["From"] 
            To = request.data["To"] 
       
            incom = Income.objects.filter(owner= request.user, date__gte = From, date__lte = To )
            exp = Expense.objects.filter(owner= request.user,  date__gte = From, date__lte = To)
        else:
            incom = Income.objects.filter(owner= request.user, date__gte = year_ago, date__lte = today_date )
            exp = Expense.objects.filter(owner= request.user,  date__gte = year_ago, date__lte = today_date)

        income_transations = len(incom)
        expense_transations = len(exp)
        if incom:
          inc_serializer = StatIncomeSerializer(incom, many=True )
          df= pd.DataFrame(inc_serializer.data)
          df['amount'] = df['amount'].astype(float)
          
        if exp:
          exp_serializer = StatExpenseSerializer(exp, many=True )
          df2= pd.DataFrame(exp_serializer.data)
          df2['amount'] = df2['amount'].astype(float)

        
        if incom:
          income = df.amount.sum() 
          income_max = df.amount.max()
          income_min = df.amount.min()
          income_avg = df.amount.mean()
          print(df)
          print(income_max)
        else: 
          income = 0
          income_max = 0
          income_min = 0
          income_avg = 0
          
        expense = 0
        if exp:
          expense = df2.amount.sum()
          expense_max = df2.amount.max()
          expense_min = df2.amount.min()
          expense_avg = df2.amount.mean()
        else: 
          expense = 0
          expense_max = 0
          expense_min = 0
          expense_avg = 0
         
        
        saving = 0 if float(income) < float(expense) else float(income) - float(expense)
        flow = float(income)+ float(expense)
        if income > 0:
          savePercent = float((saving/income) * 100) 
          expPercent = float((expense/income) * 100)
        else :
          savePercent = 0
          expPercent = 0

        res ={
            "income":{
              "total":income,
              "max":income_max,
              "min":income_min,
              "avg":income_avg,
              "transations":income_transations,
            },

            "expense":{
              "total":expense,
              "max":expense_max,
              "min":expense_min,
              "avg":expense_avg,
              "expPercent":round(expPercent, 2),
              "transations":expense_transations,
            },
            
            "saving":saving,
            "flow":flow,
            "savePercent":round(savePercent,2),
           
            
            
            
            
        }
        
        
        return Response(res)



# ----------------------------------------------------------------------------------------------
class CustomDashboardStat(APIView):
    def post(self, request, pk=28):
        days = pk
        
        serial = StatExpenseSerializer(request.data)

        if request.data:
            if "From" in request.data and "To" in request.data :
           
                
                From = request.data["From"] 
                To = request.data["To"] 
            
                incom = Income.objects.filter(owner= request.user, date__gte = From, date__lte = To )
                exp = Expense.objects.filter(owner= request.user,  date__gte = From, date__lte = To)
            
                income_transations = len(incom)
                expense_transations = len(exp)
                if incom:
                    inc_serializer = StatIncomeSerializer(incom, many=True )
                    df= pd.DataFrame(inc_serializer.data)
                    df['amount'] = df['amount'].astype(float)
                
                if exp:
                    exp_serializer = StatExpenseSerializer(exp, many=True )
                    df2= pd.DataFrame(exp_serializer.data)
                    df2['amount'] = df2['amount'].astype(float)
        
                
                if incom:
                    income = df.amount.sum() 
                    income_max = df.amount.max()
                    income_min = df.amount.min()
                    income_avg = df.amount.mean()
                    print(df)
                    print(income_max)
                else: 
                    income = 0
                    income_max = 0
                    income_min = 0
                    income_avg = 0
                    
                expense = 0
                if exp:
                    expense = df2.amount.sum()
                    expense_max = df2.amount.max()
                    expense_min = df2.amount.min()
                    expense_avg = df2.amount.mean()
                else: 
                    expense = 0
                    expense_max = 0
                    expense_min = 0
                    expense_avg = 0
                
                
                saving = 0 if float(income) < float(expense) else float(income) - float(expense)
                flow = float(income)+ float(expense)
                if income > 0:
                    savePercent = float((saving/income) * 100) 
                    expPercent = float((expense/income) * 100)
                else :
                    savePercent = 0
                    expPercent = 0
        
                res ={
                    "income":{
                    "total":income,
                    "max":income_max,
                    "min":income_min,
                    "avg":income_avg,
                    "transations":income_transations,
                    },
        
                    "expense":{
                    "total":expense,
                    "max":expense_max,
                    "min":expense_min,
                    "avg":expense_avg,
                    "expPercent":round(expPercent, 2),
                    "transations":expense_transations,
                    },
                    
                    "saving":saving,
                    "flow":flow,
                    "savePercent":round(savePercent,2),
                
                    
                    
                    
                    
                }
                
                
            
                return Response(res)
            else:
                return Response({"msg":"From and To both Fields required"})
        else:
          return Response({"msg":"Please Provide Credentials"})
        

## Todo Stats


class TodoStats(APIView):
    def get(self, request):
        do = Todo.objects.filter(owner= request.user)
        complete = do.filter(is_completed = True)
        incomplete = do.filter(is_completed = False)
        inprocess = do.filter(in_process = True)

        res ={
            "completed":len(complete),
            "incompleted":len(incomplete),
            "inprocess":len(inprocess),
        }
        return Response(res)
    
