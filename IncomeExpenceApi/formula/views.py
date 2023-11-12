from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
# from .serializer import FormulaSerializer
# import formula.FormulaFuntions as f
from .FormulaFuntions import *

class FormulaView(APIView):
    def post(self, request):
        print(request.data)
        if "formula" in request.data:
            if request.data["formula"] == "cost_of_living":
                res = cost_of_living(request.data)
                return Response(res)
            if request.data["formula"] == "creditcard_interest":
                res = creditcard_interest(request.data)
                return Response(res)
            else: 
                return Response({"msg":"Sorry! Currently formula is not present in over list"}) 
        else: return Response({"msg":"Please Provide formula name"}) 
        
        
