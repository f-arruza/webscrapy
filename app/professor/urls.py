from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from .views import EmployeeViewSet


router = DefaultRouter()
router.register(r'employees', EmployeeViewSet,
                base_name='employee')
urlpatterns = router.urls
