from django.db import models

class Article(models.Model):
    name=models.CharField(max_length=50)
    age=models.IntegerField()
    vote=models.IntegerField()

    def __str__(self):
        return self.name