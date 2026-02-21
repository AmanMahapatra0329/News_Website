from django.db import models

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