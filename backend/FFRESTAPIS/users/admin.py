from django.contrib import admin

from journal.models import journal
from users.models import User

# Register your models here.
admin.site.register(User)
admin.site.register(journal)