from django.db import models
from datetime import datetime
from django.utils.text import slugify

class Herosection(models.Model):
    title=models.CharField(max_length=100)
    description=models.TextField()
    image=models.ImageField(upload_to='Heropage')
    slug=models.SlugField(blank=True)
    
    def save(self,*args,**kwargs):
        if not self.slug:
            base_slug=slugify(self.title)
            slug=base_slug
            counter=1
            while Herosection.objects.filter(slug=slug).exists():
                slug=f"{base_slug}-{counter}"
                counter+=1
            self.slug=slug
        super().save(*args,**kwargs)

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
    odia_title=models.CharField(max_length=100,blank=True)
    news_author=models.CharField(max_length=20,default="Bureau Report")
    published_date=models.DateTimeField(default=datetime.now)
    description=models.TextField(default="No description provided")
    content=models.TextField(default='No news yet.')
    video_link=models.URLField(blank=True, null=True)
    slug=models.SlugField(unique=True,blank=True)

    def save(self,*args,**kwargs):
        if not self.slug:
          base_slug=slugify(self.title)
          slug=base_slug
          counter=1
          while homepagearticle.objects.filter(slug=slug).exists():
              slug=f"{base_slug}-{counter}"
              counter+=1
          self.slug=slug
        super().save(*args,**kwargs)

    def __str__(self):
        return self.title
    
class contactus(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField()
    inquiry=models.CharField(max_length=100,default='Inquiry type not specified')
    feedback=models.TextField()

    def __str__(self):
        return self.name