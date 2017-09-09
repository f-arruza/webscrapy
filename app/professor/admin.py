from django.contrib import admin
from .models import *


# Register your models here.
@admin.register(AcademicUnit)
class AcademicUnitAdmin(admin.ModelAdmin):
    list_display = ('name', 'webpage')
    search_fields = ('name', 'webpage', )


@admin.register(Employee)
class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'position', 'local', 'extension')
    search_fields = ('name', 'email', 'position', 'local', 'extension',
                     'extension', 'webpage', 'gscholar', 'facebook',
                     'twitter', 'academicunit',)


@admin.register(Professor)
class ProfessorAdmin(admin.ModelAdmin):
    list_display = ('employee', 'curriculum', 'grade', 'course', 'category')
    search_fields = ('employee', 'curriculum', 'grade', 'course', 'category',)


@admin.register(Coordinator)
class CoordinatorAdmin(admin.ModelAdmin):
    list_display = ('professor', 'program', 'snies', 'description')
    search_fields = ('professor', 'program', 'snies', 'description',)
