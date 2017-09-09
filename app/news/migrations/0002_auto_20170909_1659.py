# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-09 16:59
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('news', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='news',
            name='author',
        ),
        migrations.AddField(
            model_name='news',
            name='source',
            field=models.CharField(blank=True, max_length=50, verbose_name='fuente'),
        ),
        migrations.AlterField(
            model_name='news',
            name='category',
            field=models.CharField(blank=True, max_length=50, verbose_name='categoría'),
        ),
    ]