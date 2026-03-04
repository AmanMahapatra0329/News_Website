from django.contrib import admin
from .models import Herosection,breakingnews,homepagearticle,contactus,authorpage,Comment,Carrer
from django.contrib import admin

admin.site.site_header = "Ganjam Today Admin"
admin.site.site_title = "HELLO"
admin.site.index_title = "Manage Articles & Videos of Ganjam Today"
# Register your models here.
admin.site.register(Herosection)
admin.site.register(breakingnews)
admin.site.register(homepagearticle)
admin.site.register(contactus)
admin.site.register(authorpage)
admin.site.register(Carrer)