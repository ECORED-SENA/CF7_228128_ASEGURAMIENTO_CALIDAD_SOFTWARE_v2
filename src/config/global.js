export default {
  global: {
    componenteFormativo: 'Conceptos generales de bases de datos',
    descripcionCurso:
      'En la sociedad de la información es imprescindible el empleo de tecnología, técnicas y procedimientos que, a lo largo de las últimas décadas, han consolidado un marco conceptual importante y necesario en todo proceso de administración de datos, por eso, este componente acerca estos conceptos de manera estructurada para avanzar en los procesos de gestión de la información.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.png'),
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
        titulo: 'Conceptos generales de bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de datos y restricción de no nulidad',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Tipos de bases de datos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Clasificación de bases de datos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Sistema de gestión de bases de datos',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Modelo entidad relación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Relaciones entre entidades',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Relaciones de uno a muchos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Relaciones de un uno a muchos',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Relaciones de uno a uno',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Normalización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Dependencias funcionales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Diseño relacional',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Reglas de integridad',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Lenguajes de los sistemas administradores de bases de datos',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Sistema gestor de base de datos',
        desarrolloContenidos: true,
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228128_CF07_DU.pdf',
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
  complementario: [
    {
      tema: 'Conceptos generales de bases de datos',
      referencia:
        'Espinosa, A. P. 2014. L6 1 Nociones y modelos de bases de datos. [Video] ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=pPATLxijDfw',
    },
  ],
  glosario: [
    {
      termino: 'Base datos',
      significado:
        'conjunto ordenado y finito de operaciones que permite hallar la solución de un problema.',
    },
    {
      termino: 'Metadatos',
      significado:
        'conjunto unitario de instrucciones que permite a una computadora realizar funciones diversas, como el tratamiento de textos, el diseño de gráficos, la resolución de problemas matemáticos, el manejo de bancos de datos.',
    },
    {
      termino: 'Diccionario de datos',
      significado:
        'conjunto de programas, instrucciones y reglas informáticas para ejecutar ciertas tareas en una computadora.',
    },
  ],
  referencias: [
    {
      referencia: 'Asale y RAE. (2021). Diccionario de la lengua española. ',
      link: 'https://dle.rae.es/base#CiiosqO',
    },
    {
      referencia:
        'Kyocera. (2021). Conceptos sobre base de datos orientada a objetos. Kyocera. ',
      link:
        'https://www.kyoceradocumentsolutions.es/es/smarter-workspaces/business-challenges/paperless/conceptos-sobre-base-de-datos-orientada-a-objetos.html#:~:text=Una%20base%20de%20datos%20orientada%20a%20objetos%20es%20un%20sistema,en%20programaci%C3%B3n%20orient',
    },
    {
      referencia:
        'López, J. C. (2009). Algoritmos y programación (guía para docentes). Eduteka',
      link: 'http://www.eduteka.org/pdfdir/AlgoritmosProgramacion.pdf',
    },
    {
      referencia:
        'Microsoft. (2021). Descripción de normalización de base de datos. Microsoft.  ',
      link:
        'https://docs.microsoft.com/es-es/office/troubleshoot/access/database-normalization-description',
    },
    {
      referencia:
        'Resnick, M. (2007). Sembrando las semillas para una sociedad más creativa. Laboratorio de medios de MIT, Massachussets. Eduteka. ',
      link: 'http://www.eduteka.org/ScratchResnickCreatividad.php',
    },
    {
      referencia:
        'Silberschatz, A., Korth, H. F., Sudarshan, S., Pérez, F. S., Santiago, A. I., y Sánchez, A. V. (2006). Fundamentos de bases de datos. McGrawHill.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Henry Eduardo Bastidas Paruma',
          cargo: 'Experto temático',
          centro:
            'Regional Cauca, Centro de teleinformática y producción industrial',
        },
        {
          nombre: 'Peter Emerson Pinchao Solís',
          cargo: 'Experto temático',
          centro:
            'Regional Cauca, Centro de teleinformática y producción industrial',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora Instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos Julian Ramirez Benitez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Edgar Mauricio Cortes Garcia',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animador y Productor Multimedia',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
