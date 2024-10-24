from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login
from rest_framework.parsers import JSONParser 
from rest_framework import status
from rest_framework.generics import ListCreateAPIView
from .serializers import JournalSerializer
from .models import journal
from rest_framework.permissions import IsAuthenticated
from django.views.decorators.csrf import csrf_exempt
from rest_framework_simplejwt.authentication import JWTAuthentication


# Create your views here.



# @csrf_exempt
class JournalListAPIView(ListCreateAPIView):
    serializer_class = JournalSerializer
    permission_classes=[IsAuthenticated]
    authentication_classes = [JWTAuthentication]  # Add this line

    def get_queryset(self):
        owner = self.request.user
        return journal.objects.filter(Owner = owner)
    # lookup_field = 'Owner'
    # def get(self, request):
    #     owner = request.user
    #     journal_lists = journal.objects.filter(Owner = owner)
