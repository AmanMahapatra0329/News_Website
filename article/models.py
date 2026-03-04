from django.db import models
from datetime import datetime
from django.utils.text import slugify
from django.utils import timezone   

class Herosection(models.Model):
    title=models.CharField(max_length=100)
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
    odia_title=models.CharField(max_length=100,blank=True)
    news_author=models.CharField(max_length=20,default="Bureau Report")
    published_date=models.DateTimeField(default=datetime.now)
    description=models.TextField(default="No description provided")
    content=models.TextField(default='No news yet.')
    video_link=models.URLField(blank=True, null=True)
    reporter_image=models.ImageField(upload_to='reporterimage/',default='image not provided.')
    reporter_name=models.CharField(max_length=100,blank=True)
    reporter_position=models.CharField(max_length=100,blank=True)
    reporter_area=models.CharField(max_length=100,blank=True)
    reporter_phno=models.IntegerField(default=0)
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

class authorpage(models.Model):
    title=models.CharField(max_length=100)
    position=models.CharField(max_length=1000)
    description=models.TextField()
    mail=models.EmailField()
    image=models.ImageField(upload_to='authorpage/')

    def __str__(self):
        return self.title

class Comment(models.Model):
    key=models.ForeignKey(homepagearticle,on_delete=models.CASCADE,null=True,blank=True)
    name=models.CharField(max_length=100)
    comment=models.TextField()
    commented_at=models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name
    
class Carrer(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    profile = models.URLField(null=True, blank=True)
    skills = models.TextField()  # ✅ changed back to skills

    def __str__(self):
        return self.name