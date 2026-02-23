from django.shortcuts import render
from .models import Herosection,breakingnews,homepagearticle,homepagevideo

# Create your views here.
def homepage(request):
    hero=Herosection.objects.all()
    breaking=breakingnews.objects.all()
    articles=homepagearticle.objects.all()
    videos=homepagevideo.objects.all()
    return render(request,'article/newslist.html',{"hero":hero,"breaking":breaking,"articles":articles,"videos":videos})

def temp(request):
    return render(request,"article/article.html")
# def breakingnews_text(request):
#     breaking=breakingnews.objects.all()
#     return render(request,'article/newscard.html',{"breaking":breaking})