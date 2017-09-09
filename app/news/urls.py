from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from .views import NewsViewSet, RSSView


urlpatterns = [
    url(r'^gnews/(?P<filter>[\w|\W]+)/$', RSSView.as_view()),
]
router = DefaultRouter()
router.register(r'news', NewsViewSet, base_name='news')
urlpatterns += router.urls
