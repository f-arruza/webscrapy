# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy
from scrapy_djangoitem import DjangoItem
from professor.models import Employee


class EmployeeItem(DjangoItem):
    django_model = Employee


class AcademicUnit(scrapy.Item):
    name = scrapy.Field()
    webpage = scrapy.Field()
