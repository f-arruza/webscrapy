from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from .view import NewsViewSet, NewsView


router = DefaultRouter()
router.register(r'news', NewsViewSet,
                base_name='news')
router.register(r'^news/(?P<filter>\w+)/$', NewsView.as_view(), name='news'),
urlpatterns = router.urls
