import feedparser
import re
import urllib.request, urllib.parse, urllib.error

'''Variables iniciales a mano'''
filtro_ini = 'todo'
expresion_ini = 'colombia'
expresion_ini = expresion_ini.rstrip()
lista_url = ["http://www.eltiempo.com/rss/opinion.xml",
             #"http://www.elmundo.com/images/rss/opinion.xml",
             "http://www.eltiempo.com/rss/editorial.xml",
             #"http://www.elmundo.com/images/rss/opinion_editorial.xml",
             "http://www.eltiempo.com/rss/colombia.xml",
             #"http://www.elmundo.com/images/rss/noticias_nacional.xml",
             "http://www.eltiempo.com/rss/mundo.xml",
             #"http://www.elmundo.com/images/rss/noticias_internacional.xml",
             "http://www.eltiempo.com/rss/politica.xml",
             #"http://www.elmundo.com/images/rss/noticias_politica.xml",
             "http://www.eltiempo.com/rss/deportes.xml",
             #"http://www.elmundo.com/images/rss/deportes.xml",
             "http://www.eltiempo.com/rss/cultura.xml",
             #"http://www.elmundo.com/images/rss/deportes.xml",
             "http://www.eltiempo.com/rss/tecnosfera.xml"]
             #"http://www.elmundo.com/images/rss/vida_tecnologia.xml"]
'''fin variables iniciales'''


'''variables globales las que retornaria la aplicacion al web por ahora retorna las lista titulos y descripcion'''
titulos = []
descripciones =[]
categorias=[]
'''fin variables globales'''

def filtro_noticia(item_s,filtr_o,expresio_n):
    file_t = open('filtrado_RegExp.txt','a')
    retorna = ''
    lista_titulo = []
    lista_descripcion = []
    lista_categoria = []
    global titulos
    global descripciones
    global categorias
    patron =''

    if filtr_o == 'titulo':
        patron ='<title>.*' + expresio_n + '.*</title>'
    elif filtr_o == 'descripcion':
        patron ='<description>.*' + expresio_n + '.*</description>'
    elif filtr_o == 'categoria':
        patron ='<category>.*' + expresio_n + '.*</category>'
    if patron != '':
        for item in item_s:
            print(str(item))
            encuentra =   re.search(patron,str(item),flags=re.IGNORECASE)
            if encuentra:
                titulos.append(re.search(r'<title>(.*?)</title>', str(item),flags=re.IGNORECASE).group())
                descripciones.append(re.search(r'<description>(.*?)</description>', str(item),flags=re.IGNORECASE).group())
                if re.search(r'<category>(.*?)</category>', str(item),flags=re.IGNORECASE) is not None:
                    categorias.append(re.search(r'<category>(.*?)</category>', str(item),flags=re.IGNORECASE).group())
    else:
        if filtr_o =='todo':
            for item in item_s:
                titulos.append(re.search(r'<title>(.*?)</title>', str(item)).group())
                descripciones.append(re.search(r'<description>(.*?)</description>', str(item)).group())
                if re.search(r'<category>(.*?)</category>', str(item),flags=re.IGNORECASE) is not None:
                    categorias.append(re.search(r'<category>(.*?)</category>', str(item)).group())

    '''PERSISTENCIA'''
    for ti in titulos:
        file_t.write(ti)
    for ti in descripciones:
        file_t.write(ti)
    for ti in categorias:
        file_t.write(ti)
    file_t.close()


# implementacion parse RegExp
def lee_xml(urls, filtro, expresion):
    # file_items = open('items_RegExp.txt', 'w+')
    # file_t = open('filtrado_RegExp.txt', 'w')
    # file_t.close()
    for url in urls:
        data = urllib.request.urlopen(url).read()
        items = re.findall(r'<item>(.*?)</item>', str(data))
        print(str(items))
        # file_items.write(str(items))
        # filtro_noticia(items,filtro,expresion)
    # file_items.close()
'''fin implementacion parseRegExp'''

'''Inicia funcion parse RSS '''
def lee_rss(urls, filtro, expresion):
    global titulos
    global descripciones
    global categorias
    for url in urls:
        feed = feedparser.parse(url)
        i=0
        for post in feed.entries:
            '''print(post.category)
            print(post.title)
            print(post.description)
            print(post.published)
            print(post.link)'''



            if filtro == 'titulo':
                titulo = feed.entries[i].title
                i=i+1
                if re.search(expresion, titulo, flags=re.IGNORECASE) is not None:
                    print(titulo)
                    print("========================")
                    titulos.append(post.title.rstrip())
                    descripciones.append(post.description.rstrip())
                    if 'category' in post:
                        categorias.append(post.category.rstrip())
            if filtro == 'descripcion':
                descripcion = feed.entries[i].description
                i=i+1
                if re.search(expresion, descripcion,flags=re.IGNORECASE) is not None:
                    titulos.append(post.title.rstrip())
                    descripciones.append(post.description.rstrip())
                    if 'category' in post:
                        categorias.append(post.category.rstrip())
            if filtro == 'categoria':
                if 'category' in post:
                    categoria = feed.entries[i].category
                    i = i+1
                    if re.search(expresion, categoria,flags=re.IGNORECASE) is not None:
                        titulos.append(post.title.rstrip())
                        descripciones.append(post.description.rstrip())
                        categorias.append(post.category.rstrip())
            if filtro == 'todo':
                titulos.append(post.title.rstrip())
                descripciones.append(post.description.rstrip())
                if 'category' in post:
                    categorias.append(post.category.rstrip())


''' Inicia parse'''
# lee_xml(lista_url, filtro_ini, expresion_ini)
lee_rss(lista_url, 'titulo', 'colombia')
