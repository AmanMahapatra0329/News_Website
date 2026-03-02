from django.core.paginator import Paginator
from django.shortcuts import render,redirect
from django.contrib import messages
from .models import Herosection,breakingnews,homepagearticle,contactus,authorpage

# Create your views here.
def homepage(request):
    hero=Herosection.objects.all()
    breaking=breakingnews.objects.all()
    article_list = homepagearticle.objects.all()
    paginator = Paginator(article_list, 8)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)
    return render(request,'article/newslist.html',{"hero":hero,"breaking":breaking,"page_obj":page_obj})

def temp(request,slug):
    article=homepagearticle.objects.get(slug=slug)
    return render(request,"article/article.html",{"article":article})

# def breakingnews_text(request):
#     breaking=breakingnews.objects.all()
#     return render(request,'article/newscard.html',{"breaking":breaking})



# def article_detail(request, id):
#     article = get_object_or_404(homepagearticle, id=id)
#     return render(request, "article/article_detail.html", {"article": article})

def listing(request):
    article_list=homepagearticle.objects.all()
    paginator=Paginator(article_list,2)
    page_number=request.GET.get('page')
    page_obj=paginator.get_page(page_number)
    return render(request,'article/newslist.html',{'page_obj':page_obj})

def aboutpagerender(request):
    return render(request,'article/about.html')
def contactpagerender(request):
    if request.method == 'POST':
        name=request.POST.get('name')
        email=request.POST.get('email')
        inquiry=request.POST.get('inquiry')
        feedback=request.POST.get('feedback')
        contactus.objects.create(name=name,email=email,feedback=feedback)
        messages.success(request,'Feedback submitted successfully.')
        return redirect('contactpagefeedback') 
    return render(request,'article/contact.html')

def authorspagerender(request):
    authors=authorpage.objects.all()
    return render(request,'article/authors.html',{"authors":authors})
def careerspagerender(request):
    return render(request,'article/careers.html')



