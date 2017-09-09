from django.test import TestCase
from worker import RSSParser


# Create your tests here.
srv = RSSParser()
rs = srv.getNews('papa')
print(rs)
print(len(rs))
