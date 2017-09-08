from .models import (AcademicUnit, Employee, Professor, Coordinator)
from rest_framework import serializers


class AcademicUnitSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcademicUnit
        fields = (
            'id',
            'name',
            'webpage',
        )


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = (
            'id',
            'name',
            'email',
            'position',
            'local',
            'extension',
            'webpage',
            'gscholar',
            'facebook',
            'twitter',
            'academicunit',
        )


class ProfessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professor
        fields = (
            'id',
            'employee',
            'curriculum',
            'grade',
            'course',
            'category',
        )


class CoordinatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coordinator
        fields = (
            'id',
            'professor',
            'program',
            'snies',
            'description',
        )
