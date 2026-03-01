from django.contrib import admin
from .models import Herosection,breakingnews,homepagearticle,contactus

# Register your models here.
admin.site.register(Herosection)
admin.site.register(breakingnews)
admin.site.register(homepagearticle)
admin.site.register(contactus)