import feedparser
import re
from urllib import request, parse, error


class RSSParser():
    # eltiempo.com
    rss_eltiempo = ["http://www.eltiempo.com/rss/opinion.xml",
                    "http://www.eltiempo.com/rss/editorial.xml",
                    "http://www.eltiempo.com/rss/colombia.xml",
                    "http://www.eltiempo.com/rss/mas-opinion.xml",
                    "http://www.eltiempo.com/rss/colombia.xml",
                    "http://www.eltiempo.com/contenido/barranquilla/rss.xml",
                    "http://www.eltiempo.com/rss/medellin.xml",
                    "http://www.eltiempo.com/rss/cali.xml",
                    "http://www.eltiempo.com/rss/otras-ciudades.xml",
                    "http://www.eltiempo.com/rss/bogota.xml",
                    "http://www.eltiempo.com/rss/mundo.xml",
                    "http://www.eltiempo.com/rss/latinoamerica.xml",
                    "http://www.eltiempo.com/rss/eeuu-y-canada.xml",
                    "http://www.eltiempo.com/rss/europa.xml",
                    "http://www.eltiempo.com/rss/medio-oriente.xml",
                    "http://www.eltiempo.com/rss/asia.xml",
                    "http://www.eltiempo.com/rss/africa.xml",
                    "http://www.eltiempo.com/rss/mas-regiones.xml",
                    "http://www.eltiempo.com/rss/politica.xml",
                    "http://www.eltiempo.com/rss/gobierno.xml",
                    "http://www.eltiempo.com/rss/congreso.xml",
                    "http://www.eltiempo.com/rss/proceso-de-paz.xml",
                    "http://www.eltiempo.com/rss/partidos-politicos.xml",
                    "http://www.eltiempo.com/rss/justicia.xml",
                    "http://www.eltiempo.com/rss/cortes.xml",
                    "http://www.eltiempo.com/rss/conflicto-y-narcotrafico.xml",
                    "http://www.eltiempo.com/rss/servicios.xml",
                    "http://www.eltiempo.com/rss/delitos.xml"
                    "http://www.eltiempo.com/rss/economia.xml",
                    "http://www.eltiempo.com/rss/finanzas-personales.xml",
                    "http://www.eltiempo.com/rss/empresas.xml",
                    "http://www.eltiempo.com/rss/sectores.xml",
                    "http://www.eltiempo.com/rss/sector-financiero.xml",
                    "http://www.eltiempo.com/rss/deportes.xml",
                    "http://www.eltiempo.com/rss/futbol-internacional.xml",
                    "http://www.eltiempo.com/rss/futbol-colombiano.xml",
                    "http://www.eltiempo.com/rss/tenis.xml",
                    "http://www.eltiempo.com/rss/ciclismo.xml",
                    "http://www.eltiempo.com/rss/automovilismo.xml",
                    "http://www.eltiempo.com/rss/otros-deportes.xml",
                    "http://www.eltiempo.com/rss/cultura.xml",
                    "http://www.eltiempo.com/rss/cine-y-tv.xml",
                    "http://www.eltiempo.com/rss/musica-y-libros.xml",
                    "http://www.eltiempo.com/rss/arte-y-teatro.xml",
                    "http://www.eltiempo.com/rss/gastronomia.xml",
                    "http://www.eltiempo.com/rss/entretenimiento.xml",
                    "http://www.eltiempo.com/rss/gente.xml",
                    "http://www.eltiempo.com/rss/tecnosfera.xml",
                    "http://www.eltiempo.com/rss/novedades-tecnologia.xml",
                    "http://www.eltiempo.com/rss/apps.xml",
                    "http://www.eltiempo.com/rss/dispositivos.xml",
                    "http://www.eltiempo.com/rss/tutoriales-tecnologia.xml",
                    "http://www.eltiempo.com/rss/videojuegos.xml"
                    "http://www.eltiempo.com/rss/vida.xml",
                    "http://www.eltiempo.com/rss/salud.xml",
                    "http://www.eltiempo.com/rss/ciencia.xml",
                    "http://www.eltiempo.com/rss/viajar.xml",
                    "http://www.eltiempo.com/rss/medio-ambiente.xml"]

    # rss_elmundo
    rss_elmundo = ["http://www.elmundo.com/images/rss/opinion.xml",
                   "http://www.elmundo.com/images/rss/opinion_editorial.xml",
                   "http://www.elmundo.com/images/rss/opinion_columnistas.xml",
                   "http://www.elmundo.com/images/rss/opinion_caricatura.xml",
                   "http://www.elmundo.com/images/rss/noticias.xml",
                   "http://www.elmundo.com/images/rss/noticias_economia.xml",
                   "http://www.elmundo.com/images/rss/noticias_politica.xml",
                   "http://www.elmundo.com/images/rss/noticias_antioquia.xml",
                   "http://www.elmundo.com/images/rss/noticias_seguridad.xml",
                   "http://www.elmundo.com/images/rss/noticias_nacional.xml",
                   "http://www.elmundo.com/images/rss/noticias_justicia.xml",
                   "http://www.elmundo.com/images/rss/noticias_internacional.xml",
                   "http://www.elmundo.com/images/rss/noticias_poblacion.xml",
                   "http://www.elmundo.com/images/rss/noticias_votaciones_9_marzo_2014.xml",
                   "http://www.elmundo.com/images/rss/noticias_votaciones_presidencia_2014.xml",
                   "http://www.elmundo.com/images/rss/noticias_territorio.xml",
                   "http://www.elmundo.com/images/rss/noticias_infraestructura.xml",
                   "http://www.elmundo.com/images/rss/noticias_gobierno.xml",
                   "http://www.elmundo.com/images/rss/noticias_obras.xml",
                   "http://www.elmundo.com/images/rss/noticias_movilidad.xml",
                   "http://www.elmundo.com/images/rss/noticias_derechos_humanos.xml",
                   "http://www.elmundo.com/images/rss/noticias_elecciones_2014.xml",
                   "http://www.elmundo.com/images/rss/deportes.xml",
                   "http://www.elmundo.com/images/rss/deportes_futbol_colombiano.xml",
                   "http://www.elmundo.com/images/rss/deportes_futbol_en_el_mundo.xml",
                   "http://www.elmundo.com/images/rss/deportes_por_las_ligas.xml",
                   "http://www.elmundo.com/images/rss/deportes_mundo_deportivo.xml",
                   "http://www.elmundo.com/images/rss/deportes_clasico_nacional_de_ciclismo_infantil.xml",
                   "http://www.elmundo.com/images/rss/deportes_brasil2014.xml",
                   "http://www.elmundo.com/images/rss/vida.xml",
                   "http://www.elmundo.com/images/rss/vida_entretenimiento.xml",
                   "http://www.elmundo.com/images/rss/vida_salud.xml",
                   "http://www.elmundo.com/images/rss/vida_feria_de_las_flores_2014.xml",
                   "http://www.elmundo.com/images/rss/vida__feria_de_las_flores.xml",
                   "http://www.elmundo.com/images/rss/vida_moda.xml",
                   "http://www.elmundo.com/images/rss/vida_educacion.xml",
                   "http://www.elmundo.com/images/rss/vida_tecnologia.xml",
                   "http://www.elmundo.com/images/rss/vida_gente.xml",
                   "http://www.elmundo.com/images/rss/vida_medio_ambiente.xml",
                   "http://www.elmundo.com/images/rss/vida_tu_mundo.xml",
                   "http://www.elmundo.com/images/rss/vida_gastronomia.xml",
                   "http://www.elmundo.com/images/rss/vida_turismo.xml",
                   "http://www.elmundo.com/images/rss/vida_colombiatex_2014.xml",
                   "http://www.elmundo.com/images/rss/vida_estilos_de_vida.xml",
                   "http://www.elmundo.com/images/rss/vida_religion.xml",
                   "http://www.elmundo.com/images/rss/vida_ciencia.xml",
                   "http://www.elmundo.com/images/rss/vida_en_fuera_de_lugar.xml",
                   "http://www.elmundo.com/images/rss/cultura.xml",
                   "http://www.elmundo.com/images/rss/cultura_cultural.xml",
                   "http://www.elmundo.com/images/rss/cultura_versos_y_canciones_de_siempre.xml",
                   "http://www.elmundo.com/images/rss/cultura_toros.xml",
                   "http://www.elmundo.com/images/rss/cultura_bicentenario_de_antioquia.xml",
                   "http://www.elmundo.com/images/rss/agenda_cine.xml",
                   "http://www.elmundo.com/images/rss/agenda_varios.xml",
                   "http://www.elmundo.com/images/rss/especiales.xml",
                   "http://www.elmundo.com/images/rss/especiales_personitas_de_colores.xml",
                   "http://www.elmundo.com/images/rss/especiales_clasico_de_ciclismo_infantil.xml",
                   "http://www.eltiempo.com/rss/opinion.xml",
                   "http://www.elmundo.com/images/rss/opinion.xml"]

    # rss_wradio
    rss_wradio = ["http://www.wradio.com.co/feed.aspx?id=INICIO"]

    def __init__(self):
        pass

    def getNewsElTiempo(self, filter=''):
        news = []
        for url in self.rss_eltiempo:
            feed = feedparser.parse(url)
            for entry in feed.entries:
                if re.search(filter, entry.title,
                             flags=re.IGNORECASE) is not None:
                    ref = {
                        'source': 'eltiempo.com',
                        'category': entry.category,
                        'title': entry.title,
                        'pubdate': entry.published,
                        'link': entry.link,
                    }
                    news.append(ref)
        return news

    def getNewsElMundo(self, filter=''):
        news = []
        for url in self.rss_elmundo:
            feed = feedparser.parse(url)
            for entry in feed.entries:
                if re.search(filter, entry.title,
                             flags=re.IGNORECASE) is not None:
                    ref = {
                        'source': 'elmundo.com',
                        'category': self.readCategory(url),
                        'title': entry.title,
                        'pubdate': entry.published,
                        'link': entry.link,
                    }
                    news.append(ref)
        return news

    def getNewsWRadio(self, filter=''):
        news = []
        for url in self.rss_wradio:
            feed = feedparser.parse(url)
            for entry in feed.entries:
                if re.search(filter, entry.title,
                             flags=re.IGNORECASE) is not None:
                    ref = {
                        'source': 'wradio.com.co',
                        'category': entry.category,
                        'title': entry.title,
                        'pubdate': entry.published,
                        'link': entry.link,
                    }
                    news.append(ref)
        return news

    def readCategory(self, url):
        str = url[(url.rindex('/') + 1):url.index('.xml')]
        str = str.replace('_', ' ').title()
        return str

    def getNews(self, filter=''):
        news = self.getNewsElTiempo(filter) + self.getNewsElMundo(filter)
        news = news + self.getNewsWRadio(filter)
        return news
