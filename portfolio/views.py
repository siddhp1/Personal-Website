from django.shortcuts import render
from django.http import HttpResponse, Http404
from .models import Project
from .serializers import ProjectSerializer
from rest_framework import status, permissions
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
def index(request):
    projects = Project.objects.values('position', 'title', 'short_desc', 'thumbnail', 'repo_url')
    context = {'projects': projects} 
    return render(request, 'portfolio/index.html', context)
