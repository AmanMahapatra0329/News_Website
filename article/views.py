from django.shortcuts import render
from .models import Herosection,breakingnews

# Create your views here.
def homepage(request):
    hero=Herosection.objects.all()
    breaking=breakingnews.objects.all()
    return render(request,'article/mainpage.html',{"hero":hero,"breaking":breaking})

# def breakingnews_text(request):
#     breaking=breakingnews.objects.all()
#     return render(request,'article/newscard.html',{"breaking":breaking})