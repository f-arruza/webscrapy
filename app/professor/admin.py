from django.contrib import admin
from .models import Employee


# Register your models here.
@admin.register(Employee)
class EmployeeAdmin(admin.ModelAdmin):
    list_display = ('name', 'category', 'role', 'grade', 'academic_unit')
    search_fields = ('name', 'email', 'role', 'local', 'extension',
                     'extension', 'webpage', 'gscholar', 'facebook',
                     'twitter', 'academic_unit', 'academic_unit_webpage',
                     'curriculum', 'grade', 'course', 'category', 'program',
                     'snies', 'program_description',)
