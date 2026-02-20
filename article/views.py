from django.shortcuts import render

# Create your views here.
def HFpage(request):
    return render(request,'article/HF.html')