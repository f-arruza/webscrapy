from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^', admin.site.urls),
    url(r'^api/v1/', include('professor.urls', namespace='professors')),
    url(r'^api/v1/', include('news.urls', namespace='news')),
]
