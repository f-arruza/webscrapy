# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-10 19:08
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('professor', '0005_auto_20170910_1828'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='name',
            field=models.CharField(max_length=100, verbose_name='nombre'),
        ),
    ]
