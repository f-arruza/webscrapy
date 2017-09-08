from django.shortcuts import render
from rest_framework import viewsets
from .models import AcademicUnit, Employee, Professor, Coordinator
from .serializers import (AcademicUnitSerializer, EmployeeSerializer,
                          ProfessorSerializer, CoordinatorSerializer)


# Create your views here.
class AcademicUnitViewSet(viewsets.ModelViewSet):
    serializer_class = AcademicUnitSerializer
    queryset = AcademicUnit.objects.all()


class EmployeeViewSet(viewsets.ModelViewSet):
    serializer_class = EmployeeSerializer
    queryset = Employee.objects.all()


class ProfessorViewSet(viewsets.ModelViewSet):
    serializer_class = ProfessorSerializer
    queryset = Professor.objects.all()


class CoordinatorViewSet(viewsets.ModelViewSet):
    serializer_class = CoordinatorSerializer
    queryset = Coordinator.objects.all()
