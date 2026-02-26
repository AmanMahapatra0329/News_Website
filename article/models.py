from django.db import models
from datetime import datetime

class Herosection(models.Model):
    title=models.CharField(max_length=1000)
    description=models.TextField()
    image=models.ImageField(upload_to='Heropage')

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
    news_catagory=models.CharField(max_length=10,default="Odisha")
    image=models.ImageField(upload_to='articles/')
    title=models.CharField(max_length=100)
    news_author=models.CharField(max_length=20,default="Bureau Report")
    published_date=models.DateTimeField(default=datetime.now)
    description=models.TextField(default="No description provided")

    def __str__(self):
        return self.title
    