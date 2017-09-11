# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy
from scrapy_djangoitem import DjangoItem
from professor.models import Employee
from news.models import News


class EmployeeItem(DjangoItem):
    django_model = Employee


class NewsItem(DjangoItem):
    django_model = News


class AcademicUnit(scrapy.Item):
    name = scrapy.Field()
    webpage = scrapy.Field()
