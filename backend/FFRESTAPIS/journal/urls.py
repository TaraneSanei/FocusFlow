from django.urls import path

from .serializers import JournalSerializer
from .views import JournalListAPIView
from rest_framework.generics import ListCreateAPIView

from .models import journal

urlpatterns = [
    path("", JournalListAPIView.as_view())
]