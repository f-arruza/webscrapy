migrate:
	docker-compose run django ./manage.py makemigrations
	docker-compose run django ./manage.py migrate
requirements:
	docker-compose run django pip install -r requirements.txt
	docker-compose run celery pip install -r requirements.txt
statics:
	docker-compose run django ./manage.py collectstatic
superuser:
	docker-compose run django ./manage.py createsuperuser
