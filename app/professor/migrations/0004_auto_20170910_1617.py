# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-10 16:17
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('professor', '0003_auto_20170910_1614'),
    ]

    operations = [
        migrations.RenameField(
            model_name='employee',
            old_name='position',
            new_name='role',
        ),
    ]
