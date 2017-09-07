from __future__ import absolute_import
import os
from celery import Celery
from django.conf import settings

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'webscrapy.settings')

app = Celery('webscrapy')

app.config_from_object('django.conf:settings')
app.autodiscover_tasks(lambda: settings.INSTALLED_APPS)

# Iniciar Celery
# celery -A iotServer worker -l info

# Iniciar Celery-Beats
# celery -A iotServer beat -S djcelery.schedulers.DatabaseScheduler
