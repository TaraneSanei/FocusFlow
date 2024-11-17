from django.db import models

# Create your models here.

class category(models.Model):
    Name = models.CharField(max_length=256)


class task(models.Model):
    Task = models.CharField(max_length=512)
    Done = models.BooleanField(default=False)
    deadline = models.DateField()


class project(models.Model):
    pass
