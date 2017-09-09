from django.db import models


# Create your models here.
class News(models.Model):
    title = models.CharField('título', max_length=50, blank=False)
    description = models.CharField('descripción', max_length=100, blank=True)
    link = models.CharField('enlace', max_length=50, blank=True)
    pubdate = models.DateTimeField(null=True, blank=True)
    category = models.CharField('categoría', max_length=50, blank=True)
    source = models.CharField('fuente', max_length=50, blank=True)

    class Meta:
        verbose_name_plural = '01. Noticias'

    def __str__(self):
        return self.name
