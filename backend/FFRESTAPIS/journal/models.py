from django.db import models
from datetime import date
from users.models import User
from django.utils import timezone


# Create your models here.

class journal(models.Model):
    DateTime = models.DateTimeField(default=timezone.now)
    Note = models.TextField()
    Owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='journal')

