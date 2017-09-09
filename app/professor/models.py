from django.db import models


# Create your models here.
class AcademicUnit(models.Model):
    name = models.CharField('nombre', max_length=50, blank=False)
    webpage = models.CharField('página web', max_length=50, blank=False)

    class Meta:
        verbose_name_plural = '01. Unidades Académicas'

    def __str__(self):
        return self.name


class Employee(models.Model):
    name = models.CharField('nombre', max_length=50, blank=False)
    email = models.CharField('correo', max_length=50, blank=True)
    position = models.CharField('cargo', max_length=50, blank=True)
    local = models.CharField('oficina', max_length=20, blank=True)
    extension = models.CharField('extension', max_length=10, blank=True)
    webpage = models.CharField('página Web', max_length=50, blank=True)
    gscholar = models.CharField('google scholar', max_length=50, blank=True)
    facebook = models.CharField('facebook', max_length=20, blank=True)
    twitter = models.CharField('twitter', max_length=20, blank=True)

    academicunit = models.ForeignKey(AcademicUnit, on_delete=models.CASCADE,
                                     related_name='employees')

    class Meta:
        verbose_name_plural = '02. Empleados'

    def __str__(self):
        return self.name


class Professor(models.Model):
    employee = models.OneToOneField(
        Employee,
        on_delete=models.CASCADE,
        related_name='professor'
    )
    curriculum = models.CharField('currículo', max_length=50, blank=True)
    grade = models.CharField('título', max_length=20, blank=True)
    course = models.CharField('título', max_length=20, blank=True)
    categories = (
        ('P', 'PLANTA'),
        ('C', 'CATEDRA'),
    )
    category = models.CharField('categoría', max_length=1, blank=True,
                                choices=categories,
                                default='C')

    class Meta:
        verbose_name_plural = '03. Profesores'

    def __str__(self):
        return self.employee + '(' + self.grade + ')'


class Coordinator(models.Model):
    professor = models.OneToOneField(
        Professor,
        on_delete=models.CASCADE,
        related_name='coordinator'
    )
    program = models.CharField('Programa', max_length=50, blank=True)
    snies = models.CharField('snies', max_length=20, blank=True)
    description = models.CharField('descripción', max_length=20, blank=True)

    class Meta:
        verbose_name_plural = '04. Coordinadores'

    def __str__(self):
        return self.professor + ' ' + self.program
