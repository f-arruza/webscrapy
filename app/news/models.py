from django.db import models


# Create your models here.
class News(models.Model):
    # Academic unit data
    academic_unit = models.CharField('nombre unidad académica',
                                     max_length=100, blank=True)

    title = models.CharField('título', max_length=100, blank=False)
    description = models.TextField('descripción', blank=True)
    link = models.TextField('enlace', blank=True)

    class Meta:
        verbose_name_plural = 'Noticias'

    def __str__(self):
        return self.name
