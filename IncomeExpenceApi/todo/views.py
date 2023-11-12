from django.shortcuts import render
from rest_framework import viewsets


from rest_framework.response import Response
from .serializer import TodoSerializer
from .models import Todo
from rest_framework import status
from rest_framework.views import APIView

from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

from rest_framework.generics import ListAPIView
from Auth_api.renderers import UserRenderer
# Create your views here.

class TodoViewSet(viewsets.ViewSet, ListAPIView):

    # authentication_classes = [JWTAuthentication]
    # permission_classes = [IsAuthenticated]

    # queryset = Income.objects.all()
    serializer_class = TodoSerializer


    renderer_classes=[UserRenderer]
    def get_queryset(self) :
        user = self.request.user
        return Todo.objects.filter(owner=user)[::-1]

    

    
    def list(self, request): 
        
        exp = Todo.objects.filter(owner= request.user)
        serializer = TodoSerializer(exp, many = True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def retrieve(self, request, pk=None):
        if pk is not None:
            do = Todo.objects.get( id = pk )
            serializer = TodoSerializer(do)
            return Response(serializer.data, status=status.HTTP_200_OK)
    
    def create(self, request):
        
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response({'msg':"success data created"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def update(self, request, pk=None):
        if pk is not None:
            do = Todo.objects.get(id=pk)
            serializer = TodoSerializer(do, data=request.data)
            if serializer.is_valid():
                serializer.save(owner=request.user)
                return Response({'msg':"success data updated"}, status=status.HTTP_200_OK)
            return Response(serializer.errors, status=status.HTTP_200_OK)

    def partial_update(self, request, pk):
    
        do = Todo.objects.get(id=pk)
        serializer = TodoSerializer(do, data=request.data, partial= True)
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response(serializer.data, status=status.HTTP_200_OK)  
        return Response(serializer.errors ,status=status.HTTP_400_BAD_REQUEST)
    
  
    def destroy(self, request, pk=None):
        if pk is not None:
            do = Todo.objects.get(id=pk)
            do.delete()
            return Response({"msg":"data deleted"}, status=status.HTTP_200_OK)
        else:
            do = Todo.objects.filter(owner=request.user)
            do.delete()
            return Response({"msg":"all data deleted"}, status=status.HTTP_200_OK)

class ClearTodo(APIView):
    def delete(self, request):
        try:
            Todo.objects.filter(owner=request.user).delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
   