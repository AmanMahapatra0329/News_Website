from django.shortcuts import render
from .models import Herosection,breakingnews,homepagearticle

# Create your views here.
def homepage(request):
    hero=Herosection.objects.all()
    breaking=breakingnews.objects.all()
    articles=homepagearticle.objects.all()
    return render(request,'article/newslist.html',{"hero":hero,"breaking":breaking,"articles":articles})

# def breakingnews_text(request):
#     breaking=breakingnews.objects.all()
#     return render(request,'article/newscard.html',{"breaking":breaking})