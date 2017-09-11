from django.contrib import admin
from .models import News


# Register your models here.
@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('academic_unit', 'title')
    search_fields = ('academic_unit', 'title', 'description', )
