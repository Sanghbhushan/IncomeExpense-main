from django.shortcuts import render
from rest_framework import viewsets

from rest_framework.response import Response
from .serializer import ExpenseSerializer
from .models import Expense
from rest_framework import status

from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from expenses.mypagination import Mypagination
from rest_framework.generics import ListAPIView
from Auth_api.renderers import UserRenderer

# Create your views here.

class ExpenseViewSet(viewsets.ViewSet, ListAPIView):
    
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]
    
    def get_queryset(self) :
        user = self.request.user
        return Expense.objects.filter(owner=user)[::-1]

  

    serializer_class = ExpenseSerializer
    pagination_class = Mypagination

    renderer_classes=[UserRenderer]



    
    
    # def list(self, request): 
        
    #     exp = Expense.objects.filter(owner= request.user)
    #     serializer = ExpenseSerializer(exp, many = True)
    #     return Response(serializer.data, status=status.HTTP_200_OK)
    
    def retrieve(self, request, pk=None):
        if pk is not None:
            exp = Expense.objects.get( id = pk )
            serializer = ExpenseSerializer(exp)
            return Response(serializer.data, status=status.HTTP_200_OK)
    
    def create(self, request):
        
        serializer = ExpenseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response({'msg':"success data created"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def update(self, request, pk=None):
        if pk is not None:
            exp = Expense.objects.get(id=pk)
            serializer = ExpenseSerializer(exp, data=request.data)
            if serializer.is_valid():
                serializer.save(owner=request.user)
                return Response({'msg':"success data updated"}, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_200_OK)

    def partial_update(self, request, pk):
    
        exp = Expense.objects.get(id=pk)
        serializer = ExpenseSerializer(exp, data=request.data, partial= True)
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response(serializer.data, status=status.HTTP_200_OK)  
        return Response(serializer.errors ,status=status.HTTP_400_BAD_REQUEST)
    


    def destroy(self, request, pk=None):
        if pk is not None:
            exp = Expense.objects.get(id=pk)
            exp.delete()
            return Response({"msg":"data deleted"}, status=status.HTTP_200_OK)

   