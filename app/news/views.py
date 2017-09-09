import json
from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
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


class RSSView(GenericAPIView, ListModelMixin):
    def get(self, request, *args, **kwargs):
        srv = RSSParser()
        data = srv.getNews(self.kwargs['filter'])

        dump = json.dumps(data, ensure_ascii=False)
        return HttpResponse(dump, content_type='application/json')
