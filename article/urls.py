from django.urls import path,include
from . import views

urlpatterns = [
   path('',views.homepage,name='HFpage'),
   path('abcd',views.temp,name='temporarypath'),
]
