# -*- coding: utf-8 -*-
import scrapy
from crawler.items import AcademicUnit, EmployeeItem

# RUN
# scrapy crawl --nolog uniandes

class UniandesSpider(scrapy.Spider):
    # Fields
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
                                     callback=self.spfac_ingenieria)

    def spfac_ingenieria(self, response):
        sites = response.xpath('//*[@id="ctl00_ctl42_g_b8f6cab0_c235_4d7d_8247_a14ae9d615a8"]/nav/a')

        for site in sites:
            name = site.xpath('p/text()').extract_first() + " :: Fac.Ingenieria"
            unit = AcademicUnit(name=name,
                                webpage=site.xpath('@href').extract_first())
            print(unit.get('name') + " [" + unit.get('webpage') + "]")
            if "sistemas.uniandes.edu.co" in unit.get('webpage'):
                request = scrapy.Request(url=unit.get('webpage'),
                                         callback=self.spfac_ingenieria_dptos)
                request.meta['unit'] = unit
                yield request

    def spfac_ingenieria_dptos(self, response):
        menus = response.xpath('//*[@id="sp-main-menu"]/ul/li[5]/div/div/div/div[1]/ul/li/div/div[2]/ul/li')
        unit = response.meta['unit']

        for menu in menus:
            categ = menu.xpath('a/@href').extract_first()
            url = unit.get('webpage')[:unit.get('webpage').index('/es/')]
            url = url + categ

            request = None
            if "planta" in url:
                request = scrapy.Request(url=url,
                                         callback=self.spfac_ingenieria_trab01)
            if "coordinadores-programa" in url:
                request = scrapy.Request(url=url,
                                         callback=self.spfac_ingenieria_trab02)
            if "coordinadores-generales" in url:
                request = scrapy.Request(url=url,
                                         callback=self.spfac_ingenieria_trab03)
            if "apoyo" in url:
                request = scrapy.Request(url=url,
                                         callback=self.spfac_ingenieria_trab04)
            if "catedra" in url:
                request = scrapy.Request(url=url,
                                         callback=self.spfac_ingenieria_trab05)
            if request:
                request.meta['unit'] = unit
                yield request

    def spfac_ingenieria_trab01(self, response):
        empls = response.xpath('//*[@id="coordprograma"]/ul/li')
        unit = response.meta['unit']

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

            empl = EmployeeItem(academic_unit=unit.get('name'),
                                academic_unit_webpage=unit.get('webpage'),
                                name=name.strip(),
                                role=position.strip(),
                                extension=extension.strip(),
                                grade=grade.strip(),
                                webpage=webpage.strip(),
                                local='',
                                curriculum=webpage.strip(),
                                category='Profesor de Planta')
            if empl.get('webpage') and empl.get('webpage') != '':
                request = scrapy.Request(empl.get('webpage'),
                                         callback=self.find_local_info)
                request.meta['empl'] = empl
                yield request

    def find_local_info(self, response):
        empl = response.meta['empl']
        data = response.xpath('/html/body/div[2]/div/div/div[1]/p[1]/text()').extract()
        empl['local'] = data[1].strip()

        '''print('Tipo: ' + empl.get('category'))
        print('Nombre: ' + empl.get('name'))
        print('Cargo: ' + empl.get('role'))
        print('Titulo: ' + empl.get('grade'))
        print('Sitio Web personal: ' + empl.get('webpage'))
        print('Extension: ' + empl.get('extension'))
        print('Local: ' + empl.get('local'))
        print('Unidad académica: ' + empl.get('academic_unit'))
        print('Sitio Web Unidad académica: ' + empl.get('academic_unit_webpage'))
        print("=================")'''
        return empl

    def spfac_ingenieria_trab02(self, response):
        empls = response.xpath('//*[@id="coordprograma"]/ul/li')
        unit = response.meta['unit']
        for emp in empls:
            name = emp.xpath('div/div[2]/div/h3/text()').extract_first()
            prog = emp.xpath('div/div[2]/h4/text()').extract()[1]
            ext = emp.xpath('div/div[2]/p[2]/text()').extract()[1]
            empl = EmployeeItem(academic_unit=unit.get('name'),
                                academic_unit_webpage=unit.get('webpage'),
                                name=name.strip(),
                                program=prog.strip(),
                                extension=ext.strip(),
                                role='Coordinador de Programa',
                                category='Coordinador de Programa')
            '''print('Tipo: Coordinador Programa')
            print('Nombre: ' + name.strip())
            print('Programa: ' + prog.strip())
            print("=================")'''
            empl.save()

    def spfac_ingenieria_trab03(self, response):
        empls = response.xpath('//*[@id="coordgenerales"]/ul/li')
        unit = response.meta['unit']
        for emp in empls:
            name = emp.xpath('div/div[2]/div/h3/text()').extract_first()
            role = emp.xpath('div/div[2]/h4/text()').extract()[1]
            ext = emp.xpath('div/div[2]/p[2]/text()').extract()[1]
            empl = EmployeeItem(academic_unit=unit.get('name'),
                                academic_unit_webpage=unit.get('webpage'),
                                name=name.strip(),
                                role=role.strip(),
                                extension=ext.strip(),
                                category='Coordinador General')
            '''print('Tipo: Coordinador General')
            print('Nombre: ' + name.strip())
            print('Cargo: ' + role.strip())
            print("=================")'''
            empl.save()

    def spfac_ingenieria_trab04(self, response):
        empls = response.xpath('//*[@id="apoyo"]/ul/li')
        unit = response.meta['unit']

        for emp in empls:
            name = emp.xpath('div/div[2]/div/h3/text()').extract_first()
            role = emp.xpath('div/div[2]/h4/text()').extract()[1]
            ext = emp.xpath('div/div[2]/p[2]/text()').extract()[1]
            empl = EmployeeItem(academic_unit=unit.get('name'),
                                academic_unit_webpage=unit.get('webpage'),
                                name=name.strip(),
                                role=role.strip(),
                                extension=ext.strip(),
                                category='Personal de Apoyo')
            '''print('Tipo: Personal Apoyo')
            print('Nombre: ' + name.strip())
            print('Cargo: ' + role.strip())
            print('Extension: ' + ext.strip())
            print("=================")'''
            empl.save()

    def spfac_ingenieria_trab05(self, response):
        empls = response.xpath('//*[@id="tab-pregrado"]/table/tbody/tr')
        unit = response.meta['unit']

        for emp in empls:
            name = emp.xpath('td[1]/text()').extract_first()
            if name != 'Nombre':
                prog = emp.xpath('td[2]/text()').extract_first()
                empl = EmployeeItem(academic_unit=unit.get('name'),
                                    academic_unit_webpage=unit.get('webpage'),
                                    name=name.strip(),
                                    course=prog.strip(),
                                    role='Profesor de Cátedra',
                                    category='Profesor de Cátedra')
                '''print('Tipo: C')
                print('Nombre: ' + name.strip())
                print('Programa: ' + prog.strip())
                print("=================")'''
                empl.save()

        empls = response.xpath('//*[@id="tab-escuela-de-postgrados"]/table/tbody/tr')
        for emp in empls:
            name = emp.xpath('td[1]/text()').extract_first()
            if name != 'Nombre':
                prog = emp.xpath('td[2]/text()').extract_first()
                empl = EmployeeItem(academic_unit=unit.get('name'),
                                    academic_unit_webpage=unit.get('webpage'),
                                    name=name.strip(),
                                    course=prog.strip(),
                                    role='Profesor de Cátedra',
                                    category='Profesor de Cátedra')
                '''print('Tipo: Profesor de Cátedra')
                print('Nombre: ' + name.strip())
                print('Programa: ' + prog.strip())
                print("=================")'''
                empl.save()
