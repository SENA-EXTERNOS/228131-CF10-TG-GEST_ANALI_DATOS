<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Generalidades: herramienta inteligencia de negocio
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema4/1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En términos generales, la inteligencia de negocio no es una tecnología o una serie de herramientas ya establecidas; es decir, todo depende de qué tan grande y compleja sea la organización y qué cantidad de datos fluyen en los sistemas.
              br
              br
              | Por lo que la inteligencia de negocio podría gestionarse desde la aplicación de Excel u Hojas de cálculo de Google, hasta usar herramientas especializadas con proveedores, como Amazon Web, Services o Microsoft con sus opciones de Azure, que incluso podrían ser tan sencillas, como complejas y costosas, según la organización.
    p.mb-5(data-aos='fade-right') Existen variadas herramientas para la inteligencia de negocios, en este componente formativo se trabajará en una de las más populares de la marca Microsoft, denominada <i>Power BI</i>.
    
    h2.mb-5 Instalación
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.bg-white.p-4(style='border: 5px solid #f6f6f6')
          .row.justify-content-center.align-items-center
            .col-lg-3.col-6: img(src='@/assets/curso/temas/tema4/2.png', alt='')
            .col-lg-9
              p Microsoft distribuye de manera gratuita la aplicación para conectar datos y generar reportes, esta aplicación se encuentra bajo el ecosistema de productividad Microsoft 365, la cual, se cobra solamente para algunas características extras, pero para efectos del aprendizaje, la versión descargable es suficiente y muy completa.
                br
                br
                |Para su descarga se debe abrir en el navegador el centro de descarga de Microsoft,
              a.anexo.mb-5.mb-lg-0(href="https://www.microsoft.com/es-ES/download" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p #[b Enlace web.] https://www.microsoft.com/es-ES/download  
              p.mt-4 Luego dar clic en la opción Office, y luego en Microsoft Power BI Desktop.
    p.mb-5(data-aos='fade-right') En el siguiente video podrá aprender cómo se realiza la instalación del componente.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    h2.mb-5 Reportes #[em (Data Source)]
    .row.justify-content-center.mb-5
      .col-lg-2.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema4/2.svg', alt='')
      .col-lg-10(data-aos="fade-left"): p Este tipo de aplicaciones pueden ser muy fáciles y básicas, aunque también se podrán desarrollar dashboard tan complejos y robustos según el nivel de conocimiento de las herramientas. 
        br
        br
        |En este apartado, se tratarán los reportes de manera resumida:
    .tarjeta.p-5(style="background-color: #fffcf2").mb-5
      LineaTiempoC.color-acento-botones(text-small)
        .row(titulo="Aplicaciones")
          .col-md-6.mb-4.mb-md-0
            p Las aplicaciones de visualización de datos profesionales, por lo general no hacen todo en una misma aplicación, sino que trabajan varios programas que se pueden conectar entre sí. 
          .col-md-6: img(src='@/assets/curso/temas/tema4/3.svg', alt='').m-auto(style="width: 457px")
        .row(titulo="Power BI")
          .col-md-6.mb-4.mb-md-0
            p Las fuentes de datos de Power BI, son diversas; de manera nativa, el programa tiene decenas de opciones que son las más comunes, incluso es tan compatible que, si existiera una fuente a partir de un desarrollo no comercial o poco común, daría la posibilidad de programarlas y crearlas.
              br
              br
              |Existen diversas fuentes, desde archivos, pasando por múltiples motores de bases de datos, plataformas, marcas, servicios en línea, etc.
          .col-md-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              span Fuente de datos Power BI
            img(src='@/assets/curso/temas/tema4/4.png', alt='').m-auto(style="width: 457px")
        .row(titulo="Microsoft Excel")
          .col-md-6.mb-4.mb-md-0
            p Entre las opciones de fuentes de datos, está MS-Excel.
              br
              br
              | Cada archivo es un libro y cada hoja del libro se toma como una tabla, de tal modo que si hay un conjunto de datos dentro de Excel, el programa lo asume como tablas independientes.
          .col-md-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              span Hoja de Excel como tabla
            img(src='@/assets/curso/temas/tema4/5.png', alt='').m-auto(style="width: 457px")
        .row(titulo="Implementación")
          .col-md-6.mb-4.mb-md-0
            p Cuando se elige la tabla, se da clic en cargar y ya los datos estarán disponibles para empezar a desarrollar los reportes.
              br
              br
              |En el área de trabajo se visualizarán las columnas o campos del archivo fuente.
          .col-md-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              span Área de trabajo
            img(src='@/assets/curso/temas/tema4/6.png', alt='').m-auto(style="width: 457px")

    h2.mb-5 Desarrollo y representación gráfica de datos
    p.mb-5(data-aos='fade-right') Luego de tener la aplicación instalada y con la fuente de datos clara, lo que sigue es crear informes:
    .tarjeta.p-4(style="background-color: #f5fafe").mb-5
      SlyderA(tipo='b')
        .row
            .col-md-6.mb-4.mb-md-0
              p Suponiendo que ya se han cargado datos, la tabla cargada contiene campos, por ejemplo, ciudades; se arrastra entonces el campo al área de trabajo.
            .col-md-6
              .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                  span Campos de la tabla
              img(src='@/assets/curso/temas/tema4/7.png', alt='').m-auto(style="width: 200px")
        .row
          .col-md-6.mb-4.mb-md-0
            p Se visualizan entonces los datos del campo arrastrado.
          .col-md-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                span Datos del campo ciudad
            img(src='@/assets/curso/temas/tema4/8.png', alt='').m-auto(style="width: 200px")
        .row
          .col-md-6.mb-4.mb-md-0
            p Ahora bien si la tabla tiene la producción por año en cada ciudad es interesante visualizar dichos datos, para diferentes años, por ejemplo, en este caso, se puede acceder a los datos de producción de los años 2018 y 2019.
          .col-md-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                span Producción de los años 2018-2019
            img(src='@/assets/curso/temas/tema4/9.png', alt='').m-auto(style="width: 200px")
        .row
          .col-md-6.mb-4.mb-md-0
            p Los datos para los años 2018 y 2019 en cada ciudad, se observan así:
          .col-md-6
            img(src='@/assets/curso/temas/tema4/10.png', alt='').m-auto(style="width: 200px")
        .row
          .col-md-6.mb-4.mb-md-0
            p Ahora, si bien para algunos datos las tablas son difíciles de sustituir, sería más amigable usar otros recursos gráficos. Power BI cuenta con muchos tipos de visualizaciones.
          .col-md-6
            img(src='@/assets/curso/temas/tema4/11.png', alt='').m-auto(style="width: 200px")
        .row
          .col-md-6.mb-4.mb-md-0
            p Para el ejemplo de las ciudades, se seleccionó “gráfico de barras agrupadas”  
              br
              |El resultado es la visualización más óptima para revisar la productividad por ciudades de cada año, según se observa en la imagen:
          .col-md-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                span Gráfico de barras agrupadas
            img(src='@/assets/curso/temas/tema4/12.png', alt='').m-auto(style="width: 300px")
        .row
          .col-md-6.mb-4.mb-md-0
            p También usando otros campos de datos se pueden combinar con otras visualizaciones, en este caso al tratarse de ciudades, se puede implementar la visualización de mapas.
          .col-md-6
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                span Gráfico de barras agrupadas con mapas.
            img(src='@/assets/curso/temas/tema4/13.png', alt='').m-auto(style="width: 300px")
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4(data-aos="fade-right")
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #fff2ca")
          p.mb-0 Los reportes tienen muchas posibilidades adicionales, con conjuntos de datos y otras tablas relacionadas, con filtros y configuración de condiciones, colores, formatos, etc., lo que hace de Power BI una herramienta muy poderosa.
      .col-lg-3(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema4/14.svg', alt='').m-auto(style="width: 200px")
    
    p.mb-5 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.        
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
