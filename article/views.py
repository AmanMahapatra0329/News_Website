from django.core.paginator import Paginator
from django.shortcuts import render
from .models import Herosection,breakingnews,homepagearticle,homepagevideo

# Create your views here.
def homepage(request):
    hero=Herosection.objects.all()
    breaking=breakingnews.objects.all()
   # articles=homepagearticle.objects.all()
    videos=homepagevideo.objects.all()
    article_list = homepagearticle.objects.all()
    paginator = Paginator(article_list, 8)

    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    return render(request,'article/newslist.html',{"hero":hero,"breaking":breaking,"page_obj":page_obj,"videos":videos})

def temp(request):
    return render(request,"article/article.html")
# def breakingnews_text(request):
#     breaking=breakingnews.objects.all()
#     return render(request,'article/newscard.html',{"breaking":breaking})

def listing(request):
    article_list=homepagearticle.objects.all()
    paginator=Paginator(article_list,2)
    page_number=request.GET.get('page')
    page_obj=paginator.get_page(page_number)
    return render(request,'article/newslist.html',{'page_obj':page_obj})