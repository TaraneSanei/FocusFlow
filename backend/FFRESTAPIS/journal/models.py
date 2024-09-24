from django.db import models
from datetime import date
from users import User

# Create your models here.

class journal(models.Model):
    Date = models.DateField(default=date.today)
    Note = models.TextField()
    Time = models.TimeField()
    Owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='journal')
