export default {
  global: {
    Name: 'Interpretación financiera para la toma de decisiones',
    Description:
      'Como continuidad del análisis financiero, la interpretación financiera para la toma de decisiones desarrolla herramientas para comprender los resultados de los indicadores financieros y analizar sus implicaciones en la gestión empresarial. Aborda la interpretación de liquidez, actividad, endeudamiento y rentabilidad, el cálculo del punto de equilibrio, el apalancamiento operativo y financiero, el uso de hoja electrónica para escenarios y la elaboración de informes con recomendaciones de mejora, correctivas y preventivas.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Interpretación de indicadores para la gestión empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'De los resultados numéricos a la interpretación financiera',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Interpretación de indicadores de liquidez',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Interpretación de indicadores de actividad o gestión',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Interpretación de indicadores de endeudamiento',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Interpretación de indicadores de rentabilidad',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Relación entre indicadores y decisiones empresariales',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Alertas financieras derivadas de los indicadores',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Punto de equilibrio para decisiones operativas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto e importancia del punto de equilibrio',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Costos fijos, costos variables y costos mixtos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Margen de contribución unitario y porcentual',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Punto de equilibrio en unidades',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Punto de equilibrio en ventas',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Punto de equilibrio con utilidad esperada',
            hash: 't_2_6',
          },
          {
            numero: '2.7',
            titulo: 'Interpretación del punto de equilibrio',
            hash: 't_2_7',
          },
          {
            numero: '2.8',
            titulo: 'Decisiones sobre precios, costos, volumen y utilidad',
            hash: 't_2_8',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Apalancamiento operativo y financiero',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Concepto de apalancamiento en la empresa',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Estructura de costos y riesgo operativo',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Apalancamiento operativo',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Grado de apalancamiento operativo por variación porcentual',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Estructura de financiación y riesgo financiero',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Apalancamiento financiero',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo:
              'Grado de apalancamiento financiero por variación porcentual',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo: 'Apalancamiento total',
            hash: 't_3_8',
          },
          {
            numero: '3.9',
            titulo: 'Interpretación de resultados y decisiones asociadas',
            hash: 't_3_9',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Hoja electrónica para escenarios financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Organización de datos para interpretar indicadores',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Construcción de escenarios con cambios en ventas, costos y gastos',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Escenarios de liquidez, endeudamiento y rentabilidad',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Escenarios de punto de equilibrio',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Escenarios de apalancamiento operativo y financiero',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Validación de fórmulas y resultados',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Presentación de resultados para la toma de decisiones',
            hash: 't_4_7',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Informe financiero y recomendaciones para la toma de decisiones',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Estructura del informe financiero',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Integración de indicadores, punto de equilibrio y apalancamiento',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Diagnóstico financiero para la toma de decisiones',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Conclusiones del análisis financiero',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Recomendaciones de mejora',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Acciones correctivas',
            hash: 't_5_6',
          },
          {
            numero: '5.7',
            titulo: 'Acciones preventivas',
            hash: 't_5_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
