from django.urls import path,include
from . import views

urlpatterns = [
   path('',views.homepage,name='HFpage'),
   path('articles/<slug:slug>/',views.temp,name='articlerender'),
   path('aboutpage',views.aboutpagerender,name='aboutpage'),
   path('contactpage',views.contactpagerender,name='contactpage'),
   path('carrerspage',views.careerspagerender,name='careerspage'),
   path('authorpage',views.authorspagerender,name='authorpage'),
   
]
