from scrapy_djangoitem import DjangoItem
from .models import Employee


class EmployeeItem(DjangoItem):
    django_model = Employee
