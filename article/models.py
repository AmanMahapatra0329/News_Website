from django.db import models

class Herosection(models.Model):
    title=models.CharField(max_length=1000)
    description=models.TextField()
    image=models.CharField(max_length=10)

    def __str__(self):
        return self.title
