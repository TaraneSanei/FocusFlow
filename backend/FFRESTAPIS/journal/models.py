from django.db import models
from datetime import date
from users.models import User

# Create your models here.

class journal(models.Model):
    Datetime = models.DateTimeField()
    Note = models.TextField()
    Owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='journal')
