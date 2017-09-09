# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-09 16:19
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='News',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, verbose_name='título')),
                ('description', models.CharField(blank=True, max_length=100, verbose_name='descripción')),
                ('link', models.CharField(blank=True, max_length=50, verbose_name='enlace')),
                ('pubdate', models.DateTimeField(blank=True, null=True)),
                ('category', models.CharField(blank=True, max_length=50, verbose_name='enlace')),
                ('author', models.CharField(max_length=50, verbose_name='enlace')),
            ],
            options={
                'verbose_name_plural': '01. Noticias',
            },
        ),
    ]
