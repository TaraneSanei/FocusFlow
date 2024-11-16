from rest_framework import serializers
from journal.models import *
class JournalSerializer(serializers.ModelSerializer):
    class Meta:
        model = journal
        fields = ['id','Note', 'DateTime']

    def create(self, validated_data):
        return journal.objects.create(**validated_data)