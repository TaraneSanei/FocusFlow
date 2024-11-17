from django.contrib import admin

from money.models import budget, income, payment
from journal.models import journal
from users.models import User

# Register your models here.
admin.site.register(User)
admin.site.register(journal)
# admin.site.register(budget)
# admin.site.register(income)
# admin.site.register(payment)
