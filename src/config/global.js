export default {
  global: {
    Name: 'Fundamentos de métricas y configuración de campañas digitales',
    Description:
      'Este componente formativo aborda los fundamentos de métricas y configuración de campañas digitales en redes sociales, permitiendo identificar objetivos comerciales, métricas, KPI, segmentación de audiencias y herramientas de análisis. Además, fortalece la comprensión del embudo de conversión y la planificación estratégica para la medición de resultados en campañas digitales.',
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
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-4.png',
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
        titulo: '<em>Marketing</em> en redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de <em>marketing</em> en redes sociales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Objetivos del <em>marketing</em> en redes sociales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Estrategias aplicadas al <em>marketing</em> digital',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Campañas en redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Características y beneficios de las campañas digitales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de campañas en redes sociales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Objetivos de campañas digitales',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Objetivos comerciales y campañas digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Relación entre objetivos y campañas digitales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Aplicación de objetivos comerciales en redes sociales',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Anatomía de contenidos en redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Características y aportes de los contenidos digitales',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Formatos de contenido en redes sociales',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Propósitos según formato de contenido',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Embudo de conversión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Fases del embudo de conversión',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Aplicabilidad en campañas digitales',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Métricas digitales y KPI en redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Tipos de métricas en redes sociales',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Interpretación de métricas digitales',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'KPI en redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Concepto de KPI',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Tipos de KPI en campañas digitales',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Interpretación de KPI en redes sociales',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Plan de medición para redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Planificación analítica',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Objetivos del plan de medición',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Alistamiento del plan de medición',
            hash: 't_8_3',
          },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Audiencias en campañas digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '9.1',
            titulo: 'Tipos de audiencias digitales',
            hash: 't_9_1',
          },
          {
            numero: '9.2',
            titulo: 'Segmentación de audiencias',
            hash: 't_9_2',
          },
          {
            numero: '9.3',
            titulo: 'Parametrización según objetivos de campaña',
            hash: 't_9_3',
          },
        ],
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Herramientas integradas de análisis en redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '10.1',
            titulo: 'Concepto de herramientas de análisis',
            hash: 't_10_1',
          },
          {
            numero: '10.2',
            titulo: 'Tipos de herramientas analíticas',
            hash: 't_10_2',
          },
          {
            numero: '10.3',
            titulo: 'Navegación en herramientas de análisis',
            hash: 't_10_3',
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
      termino: 'Alcance',
      significado: 'En el ámbito del marketing, el alcance se refiere a la cantidad de personas o usuarios únicos que han visto o han sido expuestos a un determinado contenido o mensaje publicitario en un período de tiempo determinado.',
    },
    {
      termino: 'Campaña digital',
      significado: 'Las campañas digitales son acciones de marketing diseñadas para promocionar productos, servicios o marcas utilizando medios digitales, como internet, redes sociales, correos electrónicos y otros canales en línea.',
    },
    {
      termino: 'Contenido audiovisual',
      significado: 'El contenido audiovisual hace referencia a cualquier tipo de material que emplea tanto elementos visuales como auditivos para comunicar un mensaje.',
    },
    {
      termino: 'Embudo de conversión',
      significado: 'También llamado funnel de conversión, es una metodología y al mismo tiempo una herramienta guía que permite analizar y optimizar las conversiones de los usuarios durante su jornada de compra.',
    },
    {
      termino: 'ROI',
      significado: 'El ROI es una métrica que mide el rendimiento de una inversión comparando la ganancia obtenida con el costo inicial de la inversión.',
    },
  ],
  referencias: [
    {
      referencia: 'Blanco, E. (2023, febrero 10). Embudo de conversión: Qué es, etapas, tipos y diferencias. RD Station.',
      link: '',
    },
    {
      referencia: 'García, P. (2014, agosto 21). ROI: Definición, fórmulas y ejemplos. Clientify.',
      link: 'https://clientify.com/blog/marketing/roi-definicion-formulas-ejemplos',
    },
    {
      referencia: 'Mansilla, J. (2024, julio 23). Tipos e importancia del contenido audiovisual. Jamil Mansilla.',
      link: 'https://jamilmansilla.com/contenido-audiovisual/',
    },
    {
      referencia: 'MSMK. (2024, septiembre 11). ¿Qué es el alcance? MSMK University.',
      link: 'https://msmk.university/que-es-el-alcance/',
    },
    {
      referencia: 'Santander Open Academy. (2021, mayo 26). Campañas digitales: Qué son y cómo lograr que funcionen.',
      link: 'https://www.santanderopenacademy.com/es/blog/campanas-digitales.html',
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
