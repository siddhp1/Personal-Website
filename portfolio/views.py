from django.shortcuts import render
from .models import Project
from .serializers import ProjectSerializer
from rest_framework import generics

bio_text = """Hello there, and welcome to my personal website! My name is Siddh Patel and I am a grade 12 student from Canada. I am very passionate about programming and I love to make projects and learn different languages, frameworks, and libraries. Below are some of my favorite projects. Be sure to check out my LinkedIn and GitHub! Thank you for visiting!"""

def index(request):
    projects = Project.objects.values('id', 'position', 'title', 'short_desc', 'thumbnail', 'repo_url')
    context = {'projects': projects, 'bio_text': bio_text} 
    return render(request, 'portfolio/index.html', context)

class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer