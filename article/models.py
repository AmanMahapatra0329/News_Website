from django.db import models

class Herosection(models.Model):
    title=models.CharField(max_length=1000)
    description=models.TextField()
    image=models.ImageField()
