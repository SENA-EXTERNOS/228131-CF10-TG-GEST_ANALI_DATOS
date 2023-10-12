<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Los datos
    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right")
        p Cuando el ser humano empezó a diferenciarse de las demás especies, una de sus características más importantes fue y es, la manera de comportarse socialmente; es decir, cuando en las relaciones sociales y comportamentales entre manadas los integrantes empezaron a cuidarse, a comunicarse, etc. Desde ese momento la información y, la manera en que la misma configura los datos a través del proceso comunicativo, generó las diversas maneras de comunicarse e incluso miles de mensajes de las primeras civilizaciones han quedado guardados por miles de años hasta nuestros días a través de pinturas, esculturas y símbolos.
      .col-lg-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/1.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema1/2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Bajo este contexto es importante recordar la diferencia entre datos e información.
              br
              br
              |Para entender esta diferencia, se puede partir del ejemplo de cuando las civilizaciones descubren mensajes de humanos antiguos y no tienen ninguna forma de interpretar los mensajes; ante ojos no entrenados, lo encontrado no son mas que símbolos con valor artístico y, a pesar de tener la cognición antropológica respecto a que los mensajes representan cosas, estos realmente serían solo datos (símbolos) sin información (no interpretados).
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      span Evolución de los datos e información. 
    ImagenInfografica.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/tema1/3.png', alt='Texto que describa la imagen')
      .tarjeta.bg-white.overflow-hidden.d-flex(x="6%" y="80%" numero="1")
        .contenedor-numero.d-block.p-2.h-100.me-3(style="background-color: #feca2e")
          .h2 1
        p.text-center.mx-5.p-2.mb-0 Pintura 
          br
          |Rupestre
      .tarjeta.bg-white.overflow-hidden.d-flex(x="19%" y="80%" numero="2")
        .contenedor-numero.d-block.p-2.h-100.me-3(style="background-color: #feca2e")
          .h2 2
        p.text-center.mx-5.p-2.mb-0 Tabla 
          br
          | cuneiforme
      .tarjeta.bg-white.overflow-hidden.d-flex(x="31.5%" y="80%" numero="3")
        .contenedor-numero.d-block.p-2.h-100.me-3(style="background-color: #feca2e")
          .h2 3
        p.text-center.mx-5.p-2.mb-0 Jeroglíficos
      .tarjeta.bg-white.overflow-hidden.d-flex(x="44%" y="80%" numero="4")
        .contenedor-numero.d-block.p-2.h-100.me-3(style="background-color: #feca2e")
          .h2 4
        p.text-center.mx-5.p-2.mb-0  Papiros
      .tarjeta.bg-white.overflow-hidden.d-flex(x="56.5%" y="80%" numero="5")
        .contenedor-numero.d-block.p-2.h-100.me-3(style="background-color: #feca2e")
          .h2 5
        p.text-center.mx-5.p-2.mb-0 Libros
      .tarjeta.bg-white.overflow-hidden.d-flex(x="69.5%" y="80%" numero="6")
        .contenedor-numero.d-block.p-2.h-100.me-3(style="background-color: #feca2e")
          .h2 6
        p.text-center.mx-5.p-2.mb-0 Dispositivos de 
          br
          | almacenamiento
      .tarjeta.bg-white.overflow-hidden.d-flex(x="82%" y="80%" numero="7")
        .contenedor-numero.d-block.p-2.h-100.me-3(style="background-color: #feca2e")
          .h2 7
        p.text-center.mx-5.p-2.mb-0 Almacenamiento de
          br
          | datos en la nube
      .tarjeta.bg-white.overflow-hidden.d-flex(x="94.5%" y="80%" numero="8")
        .contenedor-numero.d-block.p-2.h-100.me-3(style="background-color: #feca2e")
          .h2 8
        p.text-center.mx-5.p-2.mb-0 Inteligencia 
          br
          | artificial
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #fff2ca ")
          p.mb-0 En conclusión, los datos no son un asunto nuevo, sino que surgen a partir de la misma evolución humana, en donde se van volviendo complejos y amplios, conforme avanzan las civilizaciones. Es por esto por lo que en el ámbito digital y tecnológico actual, se convierten en un asunto de estudio profundo y técnico, pues el desarrollo humano y productivo tiene como plataforma principal el uso de los datos que constituyen la información; así mismo esta se convierte en conocimiento, el cual es el componente principal para la toma acciones, las cuales a su vez, generan nueva información.

    h2 Tipos de datos
    .row.justify-content-center.mb-5
      .col-lg-2.col-7(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/4.svg', alt='')
      .col-lg-10(data-aos="fade-left")
        p Los datos se pueden clasificar según su formato o el tipo de información que contienen, lo que sirve específicamente para la estructuración de arreglos de los mismos o la creación de bases de datos. 
          br
          br
          |En este sentido, cada lenguaje de programación y motor de base de datos puede tener sus propios tipos de datos; sus características se muestran a continuación de manera general, resaltando solo las más comunes.
    .tarjeta.p-4.mb-5(style="background-color: #f5fafe")
      SlyderA(tipo='b')
        .row
          .col-md-6.mb-4.mb-md-0
            p En un nivel inferior de la máquina los compiladores o procesamientos de datos se reservan una cantidad de <i>bits</i>, según el tipo de datos que se seleccionen; por esto, no solo es importante identificar la naturaleza de los datos a almacenar, sean números, fechas, texto, etc., sino también determinar qué tantos recursos emplea cada tipo de datos desde el punto de vista de memoria, pues de esto también depende la velocidad y agilidad de procesamiento.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/5.png', alt='Texto que describa la imagen')
        div
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            span Tipos de datos
          .flex-wrap.d-flex.justify-content-center
            .tarjeta-titulo(style="background-color: #fff7e0").m-2
              .tarjeta-titulo__titulo(style="background-color: #feca2e")
                h4.text-center.mb-0 Enteros
              .tarjeta-titulo__contenido.p-3
                ul.lista-ul
                  li
                    i.fas.fa-angle-right
                    p.mb-0 #[em BIT:] Ocupan un Bit (0 ó 1).

                  li
                    i.fas.fa-angle-right
                    p.mb-0 #[em TinyInt:] Datos de 1 Byte 
                      br
                      | (8bits).

                  li
                    i.fas.fa-angle-right
                    p.mb-0 #[em Amall-Int:] Dos bytes.
                  li
                    i.fas.fa-angle-right
                    p.mb-0 #[em INT:] 4 Bytes.
                  li
                    i.fas.fa-angle-right
                    p.mb-0 #[em Binglint:] 8 Bytes.
            .tarjeta-titulo(style="background-color: #fff7e0").m-2
              .tarjeta-titulo__titulo(style="background-color: #feca2e")
                h4.text-center.mb-0 Punto flotante
              .tarjeta-titulo__contenido.p-3
                ul.lista-ul
                  li
                    i.fas.fa-angle-right
                    p.mb-0 Decimal o numérico.
                  li
                    i.fas.fa-angle-right
                    p.mb-0 #[em Real:] Bytes.
                  li
                    i.fas.fa-angle-right
                    p.mb-0 #[em Float:] de 4 a 8 bytes.
            .tarjeta-titulo(style="background-color: #fff7e0").m-2
              .tarjeta-titulo__titulo(style="background-color: #feca2e")
                h4.text-center.mb-0 Moneda
              .tarjeta-titulo__contenido.p-3
                ul.lista-ul
                  li
                    i.fas.fa-angle-right
                    p.mb-0 #[em Smallmoney:] 4 bytes.
                  li
                    i.fas.fa-angle-right
                    p.mb-0 #[em Money:] 8 bytes.
            .tarjeta-titulo(style="background-color: #fff7e0").m-2
              .tarjeta-titulo__titulo(style="background-color: #feca2e")
                h4.text-center.mb-0 Cadenas de texto
              .tarjeta-titulo__contenido.p-3
                ul.lista-ul
                  li
                    i.fas.fa-angle-right
                    p.mb-0 Alfanumérico (texto).
            .tarjeta-titulo(style="background-color: #fff7e0").m-2
              .tarjeta-titulo__titulo(style="background-color: #feca2e")
                h4.text-center.mb-0 Hora y Fecha
              .tarjeta-titulo__contenido.p-3
                ul.lista-ul
                  li
                    i.fas.fa-angle-right
                    p.mb-0 #[em Time:] 3 a 5 bytes.

                  li
                    i.fas.fa-angle-right
                    p.mb-0 #[em Date:] 3 byte.
                  li
                    i.fas.fa-angle-right
                    p.mb-0 #[em Smalldatetime:] 4 bytes.
                  li
                    i.fas.fa-angle-right
                    p.mb-0 #[em Datetime:] 8 byte.
        div
          h4 Tabla tipos de datos
          img(src='@/assets/curso/temas/tema1/6.svg', alt='')
        .row
          .col-md-6.mb-4.mb-md-0
            p Si bien este componente formativo no está orientado al diseño de base de datos o programación, se debe tener claridad acerca de los tipos de datos, sus rangos y usos; esto es fundamental al momento de planificar la gestión de datos y la modelación de la información orientada a la analítica.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/7.png', alt='Texto que describa la imagen')
        .row
          .col-md-6.mb-4.mb-md-0
            p En síntesis, la analítica de datos responde a preguntas de hechos del negocio, tales como;
            ul.lista-ul
              li
                i.fas.fa-angle-right
                | ¿Qué se hizo (filtros)?
              li
                i.fas.fa-angle-right
                | ¿Cuánto se hizo (operaciones matemáticas con campos numéricos)?
              li
                i.fas.fa-angle-right
                | ¿Cuándo (fechas y tiempos)?
            p En este orden los cálculos, filtros y medidas se realizan según el tipo de datos. 
              br
              br
              |Posteriormente se detallarán algunas de estas operaciones enfocadas a la analítica.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema1/8.png', alt='Texto que describa la imagen')
    
    h2.mb-5 Ecosistemas de datos

    .row.justify-content-center.mb-5
      .col-lg-2.col-7(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/9.svg', alt='')
      .col-lg-10(data-aos="fade-left")
        p Se refiere a un conjunto de infraestructura de sistemas de información de varias áreas de una organización; en este ecosistema se incluyen todas y cada una de las diferentes interacciones que se dan, tanto entre los colaboradores y procesos como, entre estos y el entorno en que se encuentran (clientes proveedores, sedes, etc.).
    .row.justify-content-center.mb-5
      .col-lg-4.col-7(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema1/10.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          div(titulo="Implican")
            p.mb-0 Los ecosistemas recogen interacciones entre procesos y colaboradores, lo que implica tener datos y políticas tecnológicas integradas. Incluso toma elementos e interacciones externas para ampliarse a los ecosistemas compartidos y así mejorar la productividad y conexión con otras fuentes pertinentes.
          div(titulo="Cubren")
            p.mb-0 En otras palabras, no solo abarca la integración de aplicaciones sino lo más importante, la integración de la organización; existe una única opinión en relación con que las empresas necesitan realizar prácticas de integración para tener éxito. Sin embargo, pocas empresas logran con eficacia obtener estas integraciones.
          div(titulo="Utilidad")
            p.mb-0 Los ecosistemas de datos o ecosistemas digitales conectados, son necesarios para construir conexiones, impulsar la transformación y mejorar los resultados. Una empresa que tiene todos sus procesos funcionando de manera articulada es aquella que aprovechará todo lo que la transformación digital tiene para ofrecer. (RSM, 2020)
    h3.mb-4(data-aos="fade-right") Ventajas de los ecosistemas de datos
    p.mb-5(data-aos='fade-right') Un ecosistema de datos permite a las organizaciones compartir datos y conocimientos relevantes dentro de las regulaciones locales aplicables, creando un nuevo valor para todos los participantes. Esto brinda beneficios a las empresas en cuanto a ahorros de costos, nuevas fuentes de ingresos y mayor productividad. A continuación, se conocen más beneficios de estos ecosistemas.
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Mejoramiento de los procesos" :icono="require('@/assets/curso/temas/tema1/12.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Mayores ingresos al mejorar
            ul.lista-ul
              li
                i.fas.fa-angle-right
                | La agilidad en los procesos ahorrándose el tiempo y trabajo de registrar los datos más de una vez.
              li
                i.fas.fa-angle-right
                | La experiencia de usuarios, pues en sistemas ya no se trabajará por área, sino como empresa integrada. En este sentido, cuando el cliente se acerque a realizar solicitudes o compras, los datos básicos se tendrán, independiente del área; esto representa más dinero y la posibilidad de atender más clientes con los mismos o menos recursos.
              li
                i.fas.fa-angle-right
                | El flujo de trabajo empleado, medios y datos digitales, que ayuda a suprimir errores ahorrando tiempo y haciendo las tareas de manera más eficaz y eficiente, lo que se traduce en ahorro de dinero.
              li
                i.fas.fa-angle-right
                | Los canales de comunicación y las relaciones laborales con los clientes y socios, reducen los costos operativos, debido a los procesos de datos automatizados y a la eficiencia en toda la empresa.
          .col-md-4: img(src='@/assets/curso/temas/tema1/11.png', alt='')
      .py-4.py-md-5(titulo="Crea nuevas oportunidades de negocio" :icono="require('@/assets/curso/temas/tema1/12.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Servicio de valor agregado
            p Cuando la información está al alcance y hay una interpretación juiciosa se pueden observar y analizar los datos completos que fluyen a través de la organización y aprovecharlos para crear nuevos productos o servicios.
              br
              br
              |Los ecosistemas de datos y ecosistemas tecnológicos no solo mejoran los procesos actuales de generación de ingresos, sino que también crean servicios de valor agregado para nuevas oportunidades de ingresos. 
          .col-md-4: img(src='@/assets/curso/temas/tema1/15.png', alt='')
      .py-4.py-md-5(titulo="Aumentan la velocidad de innovación y tecnología" :icono="require('@/assets/curso/temas/tema1/12.svg')")
        .row
          .col-md-8.mb-4.mb-md-0
            h4 Adopción de nuevas tecnologías
            p Una estrategia de integración de ecosistemas permite a las organizaciones adoptar completamente las nuevas tecnologías de manera que se minimicen los procesos de curvas de aprendizaje y se materialice la verificación y contrastación con el mercado de manera ágil; además permite tomar decisiones con mayor agilidad. (RSM, 2020).
          .col-md-4: img(src='@/assets/curso/temas/tema1/16.png', alt='')
    h3(data-aos="fade-right") Aspectos a tener en cuenta en los ecosistemas de datos
    p.mb-5(data-aos='fade-right') En general la implementación de una estrategia de transformación digital implica tener ecosistemas digitales y de datos y además requiere de varios aspectos a tener en cuenta:
    .row.justify-content-center.mb-5
      .col-lg-4.col-7(data-aos="fade-right"): img(src='@/assets/curso/temas/tema1/17.png', alt='')
      .col-lg-8(data-aos="fade-left")
        LineaTiempoD.color-acento-contenido
          p.text-small(numero="1" titulo="La naturaleza del negocio") Ocasionalmente es importante definir si la organización hace parte directa de la industria tecnológica o se dedica a producir o comercializar productos físicos o de transformación; en caso de que sea una empresa manufacturera, por ejemplo, se debe diseñar la manera en que cada proceso pueda generar datos. En este sentido, lo ideal es la implementación de un software, sin embargo, no siempre es posible, así que si se modelan procesos donde los hechos se puedan registrar en hojas de Excel u otros recursos informáticos disponibles estaría bien; lo importante es garantizar estructura y calidad de la información.
          p.text-small(numero="2" titulo="Tamaño de la empresa ") No es igual el proceso para grandes corporaciones que por lo general ya tienen una experiencia y avance importante en su transformación digital y cuentan con un ecosistema digital y de datos muy avanzado.
            br
            br
            |Lo importante es definir la necesidad para saber si lo que se requiere es modelar procesos en áreas que aún no se integran al ecosistema o definir qué otros procesos de reportes faltan, por ejemplo, los que se deben generar para aprovechar mejor el flujo de datos disponibles en las bodegas de datos.
          p.text-small(numero="3" titulo="Recursos económicos disponibles ") Si bien la transformación digital implica una ganancia de dinero, esta curva no se empieza a ver de manera inmediata. Es importante tener mediciones claras de indicadores concretos y recursos invertidos a lo largo del tiempo; solo de esta manera es posible visualizar el ahorro y ganancias que las empresas experimentan. En este sentido, aunque la inversión inicial es alta luego se compensa con la línea de costos hasta sobrepasarla y generar más ganancias.
          p.text-small(numero="4" titulo="Conocimiento técnico y apoyo en estrategias de transformación digital ") En el caso de que no sea una empresa relacionada con las tecnologías, no es rentable contratar un equipo de trabajo en tecnología, la mejor alternativa es contratar una empresa que realice estos desarrollos en modalidad #[em outsourcing], sin embargo, es muy importante que desde la empresa se cuente con un experto en tecnología y que represente los intereses de la organización; este profesional, debe describir clara y técnicamente los requisitos y el apoyo de desarrollo que demandan las necesidades de la empresa.
          p.text-small(numero="5" titulo="Definir infraestructura digital actual y acceder a los datos que se generan ") Un aspecto muy importante, es evaluar y entender la infraestructura tecnológica que se ha venido usando, se deben realizar las gestiones administrativas y técnicas para tener acceso a los datos generados. Si es un proveedor de #[em software], realizar las gestiones ante terceros, como revisión de contratos y normatividad vigente para exigirle a estos que faciliten los datos de la organización.
          p.text-small(numero="6" titulo="Definir arquitectura local, nube o híbrida") Este es un aspecto importante ya que en él se define la arquitectura tecnológica y de esto dependen los recursos requeridos para su desarrollo. 
            br
            br
            |La tendencia actual para la gestión de datos e infraestructura tecnológica es emplear servicios en la nube y por lo general los proveedores actuales tienen muy buenas capacidades y presentan confiabilidad en los aspectos de seguridad, disponibilidad y confidencialidad. Sin embargo, este análisis depende de cada empresa; ocasionalmente cuando ya tienen sistemas de información propios lo mejor es mantenerlos de esa manera, pero tener siempre en mente hacia el futuro hacer la migración a arquitecturas de nube.
          div.text-small(numero="7" titulo="Definir proveedor y ecosistema tecnológico")
            p Cuando se establece la arquitectura, seleccionar el proveedor y el entorno digital y tecnológico es una tarea que se debe realizar teniendo en cuenta:
            ul.lista-ul
              li
                i.fas.fa-angle-right
                | Soporte técnico.

              li
                i.fas.fa-angle-right
                | Costos.

              li
                i.fas.fa-angle-right
                | Conocimiento de las herramientas. 
            p Los entornos de productividad empresarial más populares y que aplican desde pequeñas empresas hasta grandes corporaciones son: Microsoft 360, Google Workspace, Amazon Web Service, IBM Services.
          p.text-small(numero="8" titulo="Cultura y educación hacia la transformación digital ") Lo más importante para la transformación digital e integración de los sistemas de datos son las personas; de nada sirve invertir en alta tecnología o pagar a los mejores expertos técnicos, si los colaboradores, clientes y demás personas que hacen parte del ecosistema empresarial no tienen la educación y la cultura del cambio, induciendo a que las cosas se sigan haciendo de forma tradicional, aunque se tengan nuevas herramientas para registrar, optimizar y mejorar los procesos. La actitud de los colaboradores es un elemento fundamental para que la integración y cultura digital sea exitosa.
            
        
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
