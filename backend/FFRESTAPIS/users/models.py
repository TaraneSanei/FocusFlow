from datetime import date
from django.db import models
from django.contrib.auth.base_user import BaseUserManager, AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin


# Create your models here.
class CustomUserManager(BaseUserManager):
    def _create_user(self, username, email, password, **extrafields):
        if not email:
            raise ValueError("please provide a valid email address")
        email = self.normalize_email(email)
        user = self.model(username=username, email=email, **extrafields)
        user.set_password(password)
        user.save()
        return user
    def create_user(self, username=None, email=None, password=None, **extrafields):
        extrafields.setdefault('is_staff', False)
        extrafields.setdefault('is_superuser', False)
        return self._create_user(username, email, password, **extrafields)
    
    def create_superuser(self, username=None, email=None, password=None, **extrafields):
        extrafields.setdefault('is_staff', True)
        extrafields.setdefault('is_superuser', True)
        return self._create_user(username, email,password, **extrafields)
    
class User(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=64, unique=True, primary_key=False)
    email = models.EmailField(unique=True)
    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateField(default=date.today)
    last_login = models.DateField(default=date.today)


    objects = CustomUserManager()

    USERNAME_FIELD = 'username'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return (self.username)