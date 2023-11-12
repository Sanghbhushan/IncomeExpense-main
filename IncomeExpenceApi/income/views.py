from django.shortcuts import render
from rest_framework import viewsets


from rest_framework.response import Response
from .serializer import IncomeSerializer
from .models import Income
from rest_framework import status

from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication
from income.mypagination import Mypagination
from rest_framework.generics import ListAPIView
from Auth_api.renderers import UserRenderer
# Create your views here.

class IncomeViewSet(viewsets.ViewSet, ListAPIView):

    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    # queryset = Income.objects.all()
    serializer_class = IncomeSerializer
    pagination_class = Mypagination

    renderer_classes=[UserRenderer]
    def get_queryset(self) :
        user = self.request.user
        return Income.objects.filter(owner=user)[::-1]


  

    
    # def list(self, request): 
        
    #     exp = Income.objects.filter(owner= request.user)
    #     serializer = IncomeSerializer(exp, many = True)
    #     return Response(serializer.data, status=status.HTTP_200_OK)
    
    def retrieve(self, request, pk=None):
        if pk is not None:
            inc = Income.objects.get( id = pk )
            serializer = IncomeSerializer(inc)
            return Response(serializer.data, status=status.HTTP_200_OK)
    
    def create(self, request):
        
        serializer = IncomeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response({'msg':"success data created"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def update(self, request, pk=None):
        if pk is not None:
            inc = Income.objects.get(id=pk)
            serializer = IncomeSerializer(inc, data=request.data)
            if serializer.is_valid():
                serializer.save(owner=request.user)
                return Response({'msg':"success data updated"}, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_200_OK)

    def partial_update(self, request, pk):
    
        inc = Income.objects.get(id=pk)
        serializer = IncomeSerializer(inc, data=request.data, partial= True)
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response(serializer.data, status=status.HTTP_200_OK)  
        return Response(serializer.errors ,status=status.HTTP_400_BAD_REQUEST)
    
  
    def destroy(self, request, pk=None):
        if pk is not None:
            inc = Income.objects.get(id=pk)
            inc.delete()
            return Response({"msg":"data deleted"}, status=status.HTTP_200_OK)

   