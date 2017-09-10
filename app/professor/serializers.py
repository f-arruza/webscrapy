from .models import Employee
from rest_framework import serializers


class EmployeeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Employee
        fields = (
            'id',
            'name',
            'email',
            'role',
            'local',
            'extension',
            'webpage',
            'gscholar',
            'facebook',
            'twitter',
            'academic_unit',
            'academic_unit_webpage',
            'curriculum',
            'grade',
            'course',
            'category',
            'program',
            'snies',
            'program_description',
        )
