from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.generics import GenericAPIView
from rest_framework.mixins import ListModelMixin
from .models import News
from .serializers import NewsSerializer
from .worker import RSSParser


# Create your views here.
class NewsViewSet(viewsets.ModelViewSet):
    serializer_class = NewsSerializer
    queryset = News.objects.all()


class NewsView(GenericAPIView, ListModelMixin):
    def get(self, request, *args, **kwargs):
        srv = RSSParser()
        rs = srv.getNews(self.kwargs['filter'])
        return JsonResponse(rs, safe=False)
