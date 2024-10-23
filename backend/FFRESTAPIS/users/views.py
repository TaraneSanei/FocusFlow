from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login
from rest_framework.parsers import JSONParser 
from rest_framework import status
from django.middleware.csrf import get_token
from django.views.decorators.csrf import ensure_csrf_cookie
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response


def get_csrf_token(request):
    token = get_token(request)
    return JsonResponse({'csrftoken': token})

@api_view(['POST'])
def login_view(request):
    
    email = request.data.get('email')
    password = request.data.get('password')
    user = authenticate(email=email, password=password)

    if user is not None:
        login(request, user)
        return JsonResponse({'message': 'Login successful'}, status=status.HTTP_200_OK)
    else:
        return JsonResponse({'error': 'Invalid credentials'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def protected_view(request):
    return Response({"message": "This is protected data."})