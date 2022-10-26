export default {
  global: {
    componenteFormativo:
      'Análisis y conocimiento de datos enfocado a la analítica.',
    descripcionCurso:
      'El recurso educativo presenta una introducción amplia y técnica sobre conceptos, teorías y herramientas empleadas en sistematización de datos. Se dan las pautas de las metodologías y paradigmas usados para la gestión de información, y la transformación y carga que deben realizarse con las tecnologías disponibles.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/a2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/a3.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Los datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de datos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Ecosistemas de datos',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Calidad de los datos <em> (Quality data)</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Dimensiones de la calidad de los datos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Datos maestros <em>(Master Data)</em>',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Arquitectura analítica de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Conceptos básicos estadísticos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Modelos matemáticos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Gestión de datos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Generalidades: Herramienta inteligencia de negocio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Instalación',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Reportes <em> (Data Source)</em>',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Desarrollo y representación gráfica de datos',
            hash: 't_4_3',
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
      tema: 'Aspectos a tener en cuenta sobre los ecosistemas de datos.',
      referencia:
        'IBM Services (2022). <em>Servicios y consultoría.</em> IBM Services.',
      tipo: 'Servicios empresariales',
      link: 'https://www.ibm.com/co-es/services',
    },
    {
      tema: 'Aspectos a tener en cuenta sobre los ecosistemas de datos.',
      referencia:
        'Microsoft 365 (2021). <em> Portafolio de servicios de Microsoft 365</em>. Microsoft.',
      tipo: 'Portafolio de servicios',
      link: 'https://goo.su/rfbWJ',
    },
    {
      tema: 'Aspectos a tener en cuenta sobre los ecosistemas de datos.',
      referencia:
        'AWS Educación (2020) <em>Informática en la nube con AWS.</em> AWS.',
      tipo: 'Manual Computación en la nube de AWS',
      link: 'https://aws.amazon.com/es/what-is-aws/?nc2=h_ql_le_int',
    },
    {
      tema: 'Aspectos a tener en cuenta sobre los ecosistemas de datos.',
      referencia:
        'Google (2022) <em> Google Workspace. Características Google Workspace.</em> Google Workspace.',
      tipo: 'Portafolio de servicios',
      link: 'https://workspace.google.com/intl/es-419/features/',
    },
    {
      tema: 'Inconvenientes derivados de mala calidad de los datos.',
      referencia:
        'Greenfield, D. (2022) Cinco causas de la mala calidad de los datos. Boletín Mundo PMMI.',
      tipo: 'Documento web',
      link:
        'https://www.mundopmmi.com/automatizacion/adquisicion-de-datos/article/22018270/cinco-causas-de-la-mala-calidad-de-los-datos',
    },
    {
      tema: 'Conceptos básicos estadísticos.',
      referencia:
        'SENA. [Ecosistema de Recursos Educativos Digitales SENA] (2022). <em>Herramientas de información estadística básica</em> [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://youtu.be/AW1LM-d0YWE',
    },
    {
      tema: 'Generalidades: Herramientas de inteligencia de negocio',
      referencia:
        'Makesoft Technologies (2017) <em> Power BI Desktop: Tutoriales y Manuales en español.</em> Makesoft Technologies.',
      tipo: 'Tutorial Power BI',
      link:
        'https://www.makesoft.es/power-bi-desktop-tutoriales-y-manuales-en-espanol/',
    },
  ],
  glosario: [
    {
      termino: 'Atributos de entidades',
      significado:
        'las entidades se refieren a los objetos o hechos de datos en un sistema (ejemplo, clientes, ventas, etc.) y los atributos a sus características (ejemplo, edad, nombre, fecha)',
    },
    {
      termino: '<em>Bits</em> ',
      significado:
        'es la unidad mínima de información, desde el punto de vista digital, es lo equivalente al átomo en la biología. Solo puede albergar dos datos posibles: 0 o 1',
    },
    {
      termino: '<em>Bytes</em>',
      significado:
        'es el equivalente a una palabra, en términos digitales un byte equivale a 8 bits.',
    },
    {
      termino: 'Convalidación de datos      ',
      significado:
        'ocasionalmente en los procesos ETL se deben unificar datos que, aunque estén de manera distinta significan lo mismo, por ejemplo, el campo sexo, para algunos sistemas se denomina género, por lo tanto, se debe convalidar y dejar un solo nombre, igual ocurre con los registros, para masculino es igual hombre, M, masculino, etc.',
    },
    {
      termino: '<em>Dashboards</em>',
      significado:
        'tableros que representan datos e informes. Representan en una sola vista simple una cantidad importante de datos; la idea es visualizar de manera fácil datos complejos que vienen desde los sistemas de información.',
    },
    {
      termino: '<em>Focus groups</em>',
      significado:
        'método para la investigación o estadística cualitativa, que consiste en reunir un grupo de personas para una entrevista, donde se expresan percepciones y opiniones de productos o servicios. Esto sirve como estudio para las marcas y productos.',
    },
    {
      termino: '<em>Granularidad</em>',
      significado:
        'se refiere a la resolución o detalle de los datos, el mejor ejemplo de granularidad es la referencia a los datos; se puede granular por año, por semestre, trimestre, mes, semana, día u horas.',
    },
    {
      termino: 'Reglas de negocio ',
      significado:
        'en el desarrollo de sistemas de información se refiere a las condiciones particulares y el comportamiento que deben asumir los algoritmos programados, para que los resultados sean los esperados por el proceso o negocio.',
    },
    {
      termino: 'Silos de datos',
      significado:
        'es el almacenamiento de grandes cantidades de datos que por lo general son diversos; se usan para proteger los datos, pueden contener datos procesados o simplemente datos registrados como respaldo.',
    },
    {
      termino: 'Validación',
      significado:
        'es la revisión de un dato para que cumpla con reglas o restricciones, así como para garantizar que los formatos de los datos sean los correctos y mejorar la calidad de los mismos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Banco de la República de Colombia. (julio de 2022). Inflación total y meta. Estadísticas Banco de la República.',
      link: 'https://www.banrep.gov.co/es/estadisticas/inflacion-total-y-meta',
    },
    {
      referencia:
        'Gawande, S. (2020). 6 Dimensions of Data Quality, Examples, and Measurement. iCEDQ Torana INC.',
      link: 'https://icedq.com/6-data-quality-dimensions',
    },
    {
      referencia:
        'Greenfield, D. (25 de enero de 2022). Cinco causas de la mala calidad de los datos. Mundo PMMI.',
      link:
        'https://www.mundopmmi.com/automatizacion/adquisicion-de-datos/article/22018270/cinco-causas-de-la-mala-calidad-de-los-datos',
    },
    {
      referencia:
        'Microsoft. (2022). Tipos de datos y funciones. Documentación de SQL.',
      link:
        'https://docs.microsoft.com/es-es/sql/t-sql/functions/date-and-time-data-types-and-functions-transact-sql?view=sql-server-ver16 ',
    },
    {
      referencia:
        'RSM. (11 de agosto de 2020). Generación de valor desde los ecosistemas digitales. RSM Global.',
      link:
        'https://www.rsm.global/colombia/es/ideas/consulting-insights/generacion-de-valor-desde-los-ecosistemas-digitales ',
    },
    {
      referencia:
        'Stibo Systems. (octubre de 2019). ¿Qué es la gestión de datos? Stibo Systems Master Data Management.',
      link: 'https://www.stibosystems.com/es/what-is-master-data-management ',
    },
    {
      referencia: 'Velthuis, M. P. (2019). Calidad de datos. Ediciones de la U',
      link: 'https://www-ebooks7-24-com.bdigital.sena.edu.co/?il=9094 ',
    },
    {
      referencia:
        'Way2net. (13 de noviembre de 2021). Estadísticas de Redes Sociales en Colombia 2021. Agencia de Marketing Digital Way2net.',
      link:
        'https://www.way2net.com/2021/11/estadisticas-de-redes-sociales-en-colombia-2021/ ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
