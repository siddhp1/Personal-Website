# Generated by Django 4.2.7 on 2024-02-11 17:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0003_project_demo_url'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='demo_type',
            field=models.IntegerField(default=1),
        ),
    ]
