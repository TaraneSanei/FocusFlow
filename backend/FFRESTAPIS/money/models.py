from datetime import datetime, timedelta
from django.db import models
from users.models import User

# Create your models here.

class payment(models.Model):
    Owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='Payment')
    Title = models.CharField(max_length=256)
    Amount = models.DecimalField(max_digits=10, decimal_places=2)
    Date = models.DateField()
    Recurring = models.BooleanField(default=False)
    NextDate = models.DateField(null=True, blank=True)
    RecurrenceRule = models.JSONField(blank=True, null=True)
    CreatedAt = models.DateTimeField(auto_now_add=True)
    UpdatedAt = models.DateTimeField(auto_now=True)

    
    def __str__(self):
        return f"{self.Title} - {self.Amount}"


class budget(models.Model):
    Owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='Budget')
    Title = models.CharField(max_length=256)
    Color = models.CharField(max_length=6)
    Amount = models.DecimalField(max_digits=10, decimal_places=2)
    
    def __str__(self):
        return f"{self.Title} - {self.Amount}"

class income (models.Model):
    Owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='Income')
    Title = models.CharField(max_length=256)
    Amount = models.DecimalField(max_digits=10, decimal_places=2)
    Date = models.DateField()
    Recurring = models.BooleanField(default=False)
    NextDate = models.DateField(blank=True, null=True)
    RecurrenceRule = models.JSONField(blank=True, null=True)
    CreatedAt = models.DateTimeField(auto_now_add=True)
    UpdatedAt = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.Title} - {self.Amount}"


    

