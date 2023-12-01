from django.db import models

# Create your models here.
class Project(models.Model):
    position = models.IntegerField()
    title = models.CharField(max_length=100)
    short_desc = models.CharField(max_length=100)
    long_desc = models.CharField(max_length=300)
    thumbnail = models.CharField(max_length=100)
    repo_url = models.URLField()
    
    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['position']