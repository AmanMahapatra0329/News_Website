from django.shortcuts import render

# Create your views here.
def HFpage(request):
    return render(request,'article/mainpage.html')