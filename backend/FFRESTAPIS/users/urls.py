from django.urls import path
from. import views



urlpatterns = [path("login", views.login_view),
               path("csrf_token", views.get_csrf_token),
               ]