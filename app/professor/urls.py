from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter
from .views import (AcademicUnitViewSet, EmployeeViewSet, ProfessorViewSet,
                    CoordinatorViewSet)


router = DefaultRouter()
router.register(r'academicunits', AcademicUnitViewSet,
                base_name='academicunit')
router.register(r'employees', EmployeeViewSet,
                base_name='employee')
router.register(r'professors', ProfessorViewSet,
                base_name='professor')
router.register(r'coordinators', CoordinatorViewSet,
                base_name='coordinator')
urlpatterns = router.urls
