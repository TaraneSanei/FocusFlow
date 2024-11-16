from django.urls import path

from .serializers import JournalSerializer
from .views import JournalListAPIView, EditDeleteJournal
from rest_framework.generics import ListCreateAPIView

from .models import journal

urlpatterns = [
    path("", JournalListAPIView.as_view()),
    path("<int:pk>", EditDeleteJournal.as_view())
]