from django.urls import path,include
from . import views

urlpatterns = [
   path('',views.HFpage,name='HFpage')
]
