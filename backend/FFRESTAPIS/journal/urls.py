from django.urls import path

from .serializers import JournalSerializer
from . import views
from rest_framework.generics import ListCreateAPIView

from .models import journal

urlpatterns = [
    path("", ListCreateAPIView.as_view(queryset=journal.objects.all(), serializer_class = JournalSerializer))
]