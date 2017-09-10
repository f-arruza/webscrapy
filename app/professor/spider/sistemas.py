# -*- coding: utf-8 -*-
import scrapy


class AcademicUnit(scrapy.Item):
    name = scrapy.Field()
    webpage = scrapy.Field()


class Person(scrapy.Item):
    name = scrapy.Field()
    email = scrapy.Field()
    position = scrapy.Field()
    local = scrapy.Field()
    extension = scrapy.Field()
    webpage = scrapy.Field()
    gscholar = scrapy.Field()
    facebook = scrapy.Field()
    twitter = scrapy.Field()
    curriculum = scrapy.Field()
    grade = scrapy.Field()
    course = scrapy.Field()
    category = scrapy.Field()
    program = scrapy.Field()
    snies = scrapy.Field()
    description = scrapy.Field()


class UniandesSpider(scrapy.Spider):
    # Fields
    webpage = ''

    name = 'uniandes'
    allowed_domains = ['uniandes.edu.co']
    start_urls = [
        'https://uniandes.edu.co/es/programas-facultades/lista-facultades/'
    ]

    def parse(self, response):
        for facultad in response.css('div.views-field-field-url-caja-list1'):
            url = facultad.css('a::attr(href)').extract_first()
            # Facultad de Ingenieria
            if "ingenieria.uniandes.edu.co" in url:
                print("FACULTAD DE INGENIERIA: " + url)
                yield scrapy.Request(url=url,
                                     callback=self.spider_facultad_ingenieria)

    def spider_facultad_ingenieria(self, response):
        sites = response.xpath('//*[@id="ctl00_ctl42_g_b8f6cab0_c235_4d7d_8247_a14ae9d615a8"]/nav/a')

        for site in sites:
            name = site.xpath('p/text()').extract_first() + " :: Fac.Ingenieria"
            unit = AcademicUnit(name=name,
                                webpage=site.xpath('@href').extract_first())
            print(unit.get('name') + " [" + unit.get('webpage') + "]")
            if "sistemas.uniandes.edu.co" in unit.get('webpage'):
                self.webpage = unit.get('webpage')
                yield scrapy.Request(url=unit.get('webpage'),
                                     callback=self.spider_facultad_ingenieria_dptos)

    def spider_facultad_ingenieria_dptos(self, response):
        menus = response.xpath('//*[@id="sp-main-menu"]/ul/li[5]/div/div/div/div[1]/ul/li/div/div[2]/ul/li')

        for menu in menus:
            categ = menu.xpath('a/@href').extract_first()
            url = self.webpage[:self.webpage.index('/es/')] + categ
            if "planta" in url:
                yield scrapy.Request(url=url,
                                     callback=self.spider_facultad_ingenieria_trab01)
            if "coordinadores-programa" in url:
                yield scrapy.Request(url=url,
                                     callback=self.spider_facultad_ingenieria_trab02)
            if "coordinadores-generales" in url:
                yield scrapy.Request(url=url,
                                     callback=self.spider_facultad_ingenieria_trab03)
            if "apoyo" in url:
                yield scrapy.Request(url=url,
                                     callback=self.spider_facultad_ingenieria_trab04)
            if "catedra" in url:
                yield scrapy.Request(url=url,
                                     callback=self.spider_facultad_ingenieria_trab05)

    def spider_facultad_ingenieria_trab01(self, response):
        empls = response.xpath('//*[@id="coordprograma"]/ul/li')

        for emp in empls:
            name = emp.xpath('div/div[2]/div[1]/h3/a/text()').extract_first()
            temp = emp.xpath('div/div[2]/div[2]/div/div/div/h4/text()').extract()
            position = temp[0]
            if len(temp) > 2:
                position = temp[1]
            temp = emp.xpath('div/div[2]/div[2]/div/div/div/p/text()').extract()
            grade = temp[1]

            flag = emp.xpath('div/div[2]/div[2]/div/div/div/p[5]/a/@href').extract_first()
            if not flag:
                webpage = emp.xpath('div/div[2]/div[2]/div/div/div/p[4]/a/@href').extract_first()
                temp = emp.xpath('div/div[2]/div[2]/div/div/div/p[3]/text()').extract()
            else:
                webpage = emp.xpath('div/div[2]/div[2]/div/div/div/p[5]/a/@href').extract_first()
                temp = emp.xpath('div/div[2]/div[2]/div/div/div/p[4]/text()').extract()
            extension = temp[0]
            if len(temp) > 1:
                extension = temp[1]

            empl = Person(name=name.strip(),
                          position=position.strip(),
                          extension=extension.strip(),
                          grade=grade.strip(),
                          webpage=webpage.strip(),
                          local='',
                          category='P')
            if empl.get('webpage') and empl.get('webpage') != '':
                request = scrapy.Request(empl.get('webpage'),
                                         callback=self.find_local_info)
                request.meta['empl'] = empl
                yield request

    def find_local_info(self, response):
        empl = response.meta['empl']

        data = response.xpath('/html/body/div[2]/div/div/div[1]/p[1]/text()').extract()
        empl['local'] = data[1].strip()

        print('Tipo: ' + empl.get('category'))
        print('Nombre: ' + empl.get('name'))
        print('Cargo: ' + empl.get('position'))
        print('Titulo: ' + empl.get('grade'))
        print('Sitio: ' + empl.get('webpage'))
        print('Extension: ' + empl.get('extension'))
        print('Local: ' + empl.get('local'))
        print("=================")
        yield item

    def spider_facultad_ingenieria_trab02(self, response):
        empls = response.xpath('//*[@id="coordprograma"]/ul/li')

        for emp in empls:
            name = emp.xpath('div/div[2]/div/h3/text()').extract_first()
            prog = emp.xpath('div/div[2]/h4/text()').extract()[1]

            print('Tipo: Coordinador Programa')
            print('Nombre: ' + name.strip())
            print('Programa: ' + prog.strip())
            print("=================")

    def spider_facultad_ingenieria_trab03(self, response):
        empls = response.xpath('//*[@id="coordgenerales"]/ul/li')

        for emp in empls:
            name = emp.xpath('div/div[2]/div/h3/text()').extract_first()
            prog = emp.xpath('div/div[2]/h4/text()').extract()[1]

            print('Tipo: Coordinador General')
            print('Nombre: ' + name.strip())
            print('Cargo: ' + prog.strip())
            print("=================")

    def spider_facultad_ingenieria_trab04(self, response):
        empls = response.xpath('//*[@id="apoyo"]/ul/li')

        for emp in empls:
            name = emp.xpath('div/div[2]/div/h3/text()').extract_first()
            prog = emp.xpath('div/div[2]/h4/text()').extract()[1]

            print('Tipo: Personal Apoyo')
            print('Nombre: ' + name.strip())
            print('Cargo: ' + prog.strip())
            print("=================")

    def spider_facultad_ingenieria_trab05(self, response):
        empls = response.xpath('//*[@id="tab-pregrado"]/table/tbody/tr')
        for emp in empls:
            name = emp.xpath('td[1]/text()').extract_first()
            if name != 'Nombre':
                prog = emp.xpath('td[2]/text()').extract_first()

                print('Tipo: C')
                print('Nombre: ' + name.strip())
                print('Cargo: ' + prog.strip())
                print("=================")

        empls = response.xpath('//*[@id="tab-escuela-de-postgrados"]/table/tbody/tr')
        for emp in empls:
            name = emp.xpath('td[1]/text()').extract_first()
            if name != 'Nombre':
                prog = emp.xpath('td[2]/text()').extract_first()

                print('Tipo: Profesor de Cátedra')
                print('Nombre: ' + name.strip())
                print('Cargo: ' + prog.strip())
                print("=================")
