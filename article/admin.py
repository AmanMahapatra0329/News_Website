from django.contrib import admin
from .models import Herosection,breakingnews,homepagearticle,contactus,authorpage,Comment,Carrer

# Register your models here.
admin.site.register(Herosection)
admin.site.register(breakingnews)
admin.site.register(homepagearticle)
admin.site.register(contactus)
admin.site.register(authorpage)
admin.site.register(Comment)
admin.site.register(Carrer)