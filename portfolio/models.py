from django.db import models

class Project(models.Model):
    position = models.IntegerField()
    title = models.CharField(max_length=100)
    short_desc = models.CharField(max_length=100)
    long_desc = models.CharField(max_length=300)
    thumbnail = models.CharField(max_length=100)
    demo_url = models.URLField(null=True, default=None)
    repo_url = models.URLField()
    
    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['position']