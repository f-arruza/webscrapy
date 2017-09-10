from django.db import models


# Create your models here.
class Employee(models.Model):
    # Academic unit data
    academic_unit = models.CharField('nombre unidad académica',
                                     max_length=50, blank=True)
    academic_unit_webpage = models.CharField('unidad académica - página web',
                                             max_length=50, blank=True)

    # Employee data
    name = models.CharField('nombre', max_length=50, blank=False, unique=True)
    email = models.CharField('correo', max_length=50, blank=True)
    role = models.CharField('cargo', max_length=50, blank=True)
    local = models.CharField('oficina', max_length=20, blank=True)
    extension = models.CharField('extension', max_length=10, blank=True)
    webpage = models.CharField('página Web', max_length=50, blank=True)
    gscholar = models.CharField('google scholar', max_length=50, blank=True)
    facebook = models.CharField('facebook', max_length=20, blank=True)
    twitter = models.CharField('twitter', max_length=20, blank=True)

    # Professor data
    curriculum = models.CharField('currículo', max_length=50, blank=True)
    grade = models.CharField('título', max_length=20, blank=True)
    course = models.CharField('curso', max_length=20, blank=True)
    category = models.CharField('categoría', max_length=50, blank=True)

    # Coordinator data
    program = models.CharField('programa', max_length=50, blank=True)
    snies = models.CharField('snies', max_length=20, blank=True)
    program_description = models.CharField('descripción',
                                           max_length=20, blank=True)

    class Meta:
        verbose_name_plural = 'Empleados'

    def __str__(self):
        return self.name
