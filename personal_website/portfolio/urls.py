from django.urls import path
from . import views
from .views import ProjectListView

urlpatterns = [
    path("", views.index, name='index'),
    path('api/', ProjectListView.as_view(), name='project-list')
]