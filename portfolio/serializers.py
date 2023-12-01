from .models import Project
from rest_framework import serializers

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'title', 'short_desc', 'long_desc', 'repo_url', 'position']