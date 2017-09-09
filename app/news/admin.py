from django.contrib import admin
from .models import News


# Register your models here.
@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('source', 'pubdate', 'title', 'link')
    search_fields = ('source', 'title', 'description', 'category', )
