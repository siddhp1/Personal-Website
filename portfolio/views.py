from django.shortcuts import render
from .models import Project
from .serializers import ProjectSerializer
from rest_framework import generics

bio_text = """Welcome to my developer portfolio website! I'm Siddh Patel, a driven Grade 12 student hailing from the vibrant tech landscape of Canada. Immersed in the dynamic realm of programming, I find joy in crafting innovative projects while continually expanding my repertoire of languages, frameworks, and libraries. Below, you'll discover a curated selection of my favourite projects. Don't forget to explore my LinkedIn and GitHub profiles for more insights into my journey. Thank you for stopping by!"""

def index(request):
    projects = Project.objects.values('id', 'position', 'title', 'short_desc', 'thumbnail', 'repo_url')
    context = {'projects': projects, 'bio_text': bio_text} 
    return render(request, 'portfolio/index.html', context)

class ProjectListView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer