from rest_framework import serializers
from journal.models import *
class JournalSerializer(serializers.ModelSerializer):
    class Meta:
        model = journal
        fields = '__all__'