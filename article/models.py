from django.db import models
from datetime import datetime

class Herosection(models.Model):
    title=models.CharField(max_length=1000)
    description=models.TextField()
    image=models.CharField(max_length=10)

    def __str__(self):
        return self.title

class breakingnews(models.Model):
    title=models.TextField()

    def save(self, *args , **kwargs):
        self.pk=1
        super().save(*args,**kwargs)

    def __str__(self):
        return self.title

class homepagearticle(models.Model):
    image=models.CharField(max_length=10)
    title=models.CharField(max_length=100)
    published_date=models.DateTimeField(default=datetime.now)
    # description=models.TextField()

    def __str__(self):
        return self.title