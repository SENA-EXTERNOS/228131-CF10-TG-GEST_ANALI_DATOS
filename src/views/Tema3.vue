<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Arquitectura analítica de datos
    p.mb-5(data-aos='fade-right') Desde el enfoque técnico y el punto de vista estratégico existen diferencias marcadas entre el desarrollo de <i>software</i> y la analítica de datos.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      span Desarrollo de #[em software] Vs. analítica de datos
    .row.justify-content-center.mb-5
      .col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/1.png', alt='')
      .col-lg-6
        p Si bien se habla de tecnología y datos, el primero (el desarrollo de software) se enfoca en solucionar tareas de los procesos del negocio, es un sistema transaccional y la arquitectura tanto de procesos como de almacenamiento y diseño de las colecciones de datos, enmarca una diferencia. Esta situación ha provocado en algunos casos un divorcio entre los programas de cómputo ya desarrollados y los sistemas de inteligencia de negocio y analítica, implicando gastos adicionales para las empresas en la integración, corrección y convalidación de datos entre varios sistemas de cómputo.
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #fff2ca")
          p.mb-0 Antes de entrar a la explicación técnica es importante mencionar algunos conceptos teóricos, fundamentados en la estadística y las matemáticas, para luego aplicar la analítica de datos.
    
    h2.mb-5 Conceptos básicos estadísticos
    .row.justify-content-center.mb-5
      .col-lg-2.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/2.svg', alt='')
      .col-lg-10(data-aos="fade-left"): p Generalmente en los materiales de estudio se insiste en que una buena decisión está basada en datos; efectivamente, en todas las áreas de las organizaciones se toman decisiones y por ello se requiere información de muchos tipos: finanzas, recursos humanos, mercadeo, clientes, logística, etc.
        br
        br
        | Para esto es necesario tener unos elementos básicos de estadística que se trabajarán a continuación:
    .tarjeta.p-5.mb-5(style="background-color: #f5fafe")
      SlyderA(tipo='b')
        .row.px-3
          .col-md-6.mb-4.mb-md-0
            h4 Cuenta de datos financieros y de consumo
            p Para todo negocio es importante tener en cuenta datos financieros y de consumo.
              br
              br
              | Por ejemplo, en la siguiente imagen se aprecian los índices de precios, en los cuales se observa la inflación y consumo de la población en Colombia. Se nota que las bebidas alcohólicas y tabaco tuvieron estabilidad de precios a lo largo del mes de julio, siendo el calzado y las prendas de vestir, aquellas con más variación en sus precios, seguidos de los alimentos.
              br
              br
              |Con esta información el negocio podría ir tomando decisiones y estableciendo enfoques comerciales; mirar cómo está su sector en el país y de esa manera ir orientando su análisis de negocio.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/3.svg', alt='Texto que describa la imagen')
        .row.px-3
          .col-md-6.mb-4.mb-md-0
            h4 Otro ejemplo de la utilidad de la estadística
            p Otro tema que podría interesar a los negocios, por ejemplo, es el uso de la tecnología y redes sociales de los colombianos.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/4-.svg', alt='Texto que describa la imagen')
        .row.px-3
          .col-md-6.mb-4.mb-md-0
            p Si el negocio emplea la tecnología se podría verificar si en el país hay buena oportunidad en este aspecto y si se desea especificar más; por ejemplo, sobre los usuarios de redes sociales se podría revisar qué red social utilizan con mayor frecuencia.
              br
              br
              |Así, a partir de estos datos se decide qué redes sociales emplear más, adicional se evalúa el riesgo y oportunidad de invertir en negocios que usen la tecnología.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/5-.svg', alt='Texto que describa la imagen')
        .row.px-3
          .col-md-6.mb-4.mb-md-0
            h4 Características de la Estadística
            p Además, existen indicadores propios de las organizaciones, tales como la medición de desempeño de los colaboradores en áreas específicas, validación de datos financieros, análisis de los tiempos de procesos, comparación de sedes, definición de conocimiento específico y general del negocio.
              br
              br
              | Es por esto que la estadística toma un papel muy importante, para ello se mencionan sus principales características:
            ul.lista-ul
              li.mb-0
                i.fas.fa-angle-right
                | Objetivo y pregunta.
              li.mb-0
                i.fas.fa-angle-right
                | Recopilación de los datos.
              li.mb-0
                i.fas.fa-angle-right
                | Procesar los datos.
              li.mb-0
                i.fas.fa-angle-right
                | Presentar los datos.
              li.mb-0
                i.fas.fa-angle-right
                | Analizar los datos.
              li.mb-0
                i.fas.fa-angle-right
                | Conclusiones y acciones.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/6.png', alt='Texto que describa la imagen')
    p.mb-5(data-aos='fade-right') Como principio fundamental la estadística trata con datos, donde se establecen:
    .row.justify-content-center.mb-5
      .col-lg-4.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/7.png', alt='')
      .col-lg-8(data-aos="fade-left")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
          div(titulo="Objetivo y preguntas")
            p Para empezar a hacer uso de la estadística, es fundamental definir la intencionalidad de lo que se desea saber, comprobar o medir. En otras palabras, definir con claridad las preguntas que se desean responder.
          div(titulo="Recopilación de los datos")
            p Según la necesidad objetivo del ejercicio estadístico, es necesario identificar si existe o diseñar, la herramienta o instrumento para la recopilación De los datos. Verificar si los sistemas de información tienen los datos requeridos, implementar encuestas, o métodos de observación sistemática.
          div(titulo="Procesar los datos")
            p Cuándo se tenga los datos recopilados de manera sistemática, es importante tener claridad de qué hacer con ellos. Tener los datos no responde las preguntas requeridas si el proceso no está claro. Es fundamental interpretar y entender los datos para definir las fórmulas matemáticas y las mediciones para aplicar las operaciones a  estos datos. Siendo las operaciones estadísticas más comunes y simples: Promedios, sumas, conteos, segmentación, porcentajes, variables, tiempo, etc.
          div(titulo="Procesar los datos")
            p Cuándo se tenga los datos recopilados de manera sistemática, es importante tener claridad de qué hacer con ellos. Tener los datos no responde las preguntas requeridas si el proceso no está claro. Es fundamental interpretar y entender los datos para definir las fórmulas matemáticas y las mediciones para aplicar las operaciones a  estos datos. Siendo las operaciones estadísticas más comunes y simples: Promedios, sumas, conteos, segmentación, porcentajes, variables, tiempo, etc.
          div(titulo="Presentar los datos")
            p Presentar la información de manera amigable y fácil de entender, qué muestre con claridad las dimensiones de las medidas y las comparaciones, así como los puntos de referencia para poder determinar con claridad las cifras y su significado. La presentación de los datos se realiza a través de gráficos, tablas con varias dimensiones, medidas y segmentación.
          div(titulo="Analizar los datos")
            p Este análisis que presenta junto con la presentación de datos, está basado en la interpretación y comprensión de la información que hay en los datos presentados. Se definen también con medidas como desviaciones, comprobaciones estadísticas, proyecciones futuras, entre otras operaciones, para determinar el estado de lo que se ha atrasado desde los objetivos y preguntas.
          div(titulo="Conclusiones y acciones")
            p Si bien la estadística no se centra en las acciones, el fin es dar un conocimiento del negocio para que se use como insumo en la toma acertada decisiones.
    p.mb-5(data-aos='fade-right') La estadística es entonces, un conjunto de métodos y teorías aplicadas a la recolección, descripción y análisis de datos, los cuales constituyen evidencia numérica para la toma de decisiones en condiciones de incertidumbre.
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 9
          br
          span Componentes de la estadística 
        img(src='@/assets/curso/temas/tema3/8.svg', alt='')
    h3 Tipos de estadística
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-primario.p-4(titulo="Estadística <br>descriptiva")

            p Hace referencia a los datos que se pueden representar a partir de tablas o gráficos. 
              br
              |En general describe fenómenos, por ejemplo, cuando se pregunta la edad a un grupo de personas; se podría realizar una tabla o un gráfico con estos resultados y definir medidas descriptivas como edad promedio, edades más frecuentes, etc.
          .tarjeta.color-primario.p-4(titulo="Estadística<br> inferencial ")

            p Es la que se trabaja a partir de métodos a fin de sacar conclusiones, tomar decisiones, estimaciones o predicciones sobre una población o universo con base a datos de una muestra.
      .col-lg-5.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema3/9.png', alt='')
    
    h2 Modelos matemáticos
    p.mb-5(data-aos='fade-right') Para la aplicación de estadística inferencial, se tratarán a continuación algunos parámetros matemáticos que permiten la aplicación de este modelo estadístico.
    .tarjeta.p-5.mb-5(style="background-color: #f5fafe")
      SlyderA(tipo='b')
        .row.px-3
          .col-md-6.mb-4.mb-md-0
            h4 Muestra Adecuada:
            p Este tipo de estadística se aplica cuando la población o el universo objeto de estudio es muy grande e imposible de aplicar estadística descriptiva o aplicar instrumento a todo, o cuando no hay exactitud del número de población o universo. 
              br
              br
              |Para estos casos se deberá aplicar la estadística inferencial donde se pueden realizar afirmaciones sobre una población basado en los resultados de una muestra.
              br
              br
              |Es importante no establecer divorcios entre la estadística descriptiva y la inferencial, pues la inferencial usa los datos descriptivos para llevar a conclusiones generales.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/10.svg', alt='Texto que describa la imagen')
        .row.px-3
          .col-md-6.mb-4.mb-md-0
            h4 Ejemplos de algunos usos de la estadística inferencial
            p #[b Análisis de mercado:] existen empresas especializadas en <i>marketing</i>, las cuales realizan estudios mediante la recolección de datos relevantes a través de encuestas, <i>focus groups</i>, o de otros estudios previos y obtienen deducciones tales como: productos que prefiere la gente y los segmentos más sobresalientes.
              br
              br
              |#[b Epidemiología:] a partir de la toma de datos de ciertas zonas y patologías determinadas, los especialistas en epidemiología y saneamiento público, pueden llegar a conclusiones acerca de qué medidas de sanidad pública son necesarias para evitar que las enfermedades se expandan y cuidar más a la población. Las principales decisiones de los gobiernos en la crisis COVID-19, fueron producto de la aplicación de tendencias, tanto de estadística descriptiva, como de estadística inferencial.  
              br
              br
              |Para iniciar un proceso de estadística inferencial, se debe partir de un supuesto u otro estudio como base para definir la hipótesis.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/11.png', alt='Texto que describa la imagen')
        .row.px-3
          .col-md-6.mb-4.mb-md-0
            h4 Ejemplo de inferencia estadística
            p Conocer la estatura media en Colombia sería una labor muy difícil de realizar en una encuesta a muchos participantes; por lo tanto, se emplea la estadística inferencial:
            ol.lista-ol--cuadro
              li
                .lista-ol--cuadro__vineta(style="background-color: #feca2e ")
                  span(style='color: #12263f') 1
                | Lo primero es que de todos los colombianos (μ) se saca una muestra y una media de esa estatura (▁x).
              li
                .lista-ol--cuadro__vineta(style="background-color: #feca2e ")
                  span(style='color: #12263f') 2
                | Para sacar la muestra, no se puede ir simplemente a un colegio y tomar la medida a los jóvenes del equipo de voleibol, pues este segmento de personas será más alto que el promedio de la población. Además, la edad no sería tampoco representativa para todos.
              li
                .lista-ol--cuadro__vineta(style="background-color: #feca2e ")
                  span(style='color: #12263f') 3
                | Es importante que la muestra respete la diversidad de toda la población (todas las edades, distribución genérica casi por igual, estrato social, tipo de comunidad, etc.).
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/12.png', alt='Texto que describa la imagen')
        .row.px-3
          .col-md-6.mb-4.mb-md-0
            h4 Método para obtener la muestra representativa
            p Para obtener la muestra de la población colombiana a fin de conocer la estatura media en Colombia, se procede a realizar un:
              br
              br
              |#[em Muestreo aleatorio simple.] 
              br
              br
              |Cuando se aplica el instrumento para recoger datos a una muestra aleatoria se asume, por ejemplo, que se conoce de antemano que la media del tamaño de personas en Colombia es 170 cm con una desviación típica de 12.
            .row.mb-3
              .col-lg-4
                ul.lista-ul
                  li
                    i.fas.fa-angle-right
                    | μ=170
                  li
                    i.fas.fa-angle-right
                    | σ=12
              .col-lg-4
                ul.lista-ul
                  li
                    i.fas.fa-angle-right
                    | N(μ,σ)
                  li
                    i.fas.fa-angle-right
                    | N (170,12)
            p Lo anterior se puede representar en una curva como lo muestra la imagen; en la imagen, la curva representa que el máximo de personas tiene 170 cm. y de ahí, tanto los más altos (de 170 a la derecha) como los más bajos (de 170 hacia la izquierda) la población disminuye. Es decir, personas que midan 200 cm son pocas así como las que miden 140.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/13-.svg', alt='Texto que describa la imagen')
        .row.px-3
          .col-md-6.mb-4.mb-md-0
            p Ahora, se supondrá que se han tomado muestras de N personas. 
              br
              br
              |Supóngase que N=225 personas
              br
              |La media de esa muestra da la siguiente tabla:
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/14-.svg', alt='Texto que describa la imagen')
        .row.px-3
          .col-md-6.mb-4.mb-md-0
            p El gráfico resultante es el que se aprecia en la imagen. Como se puede notar es muy similar a la gráfica poblacional, por lo que las medias de las muestras escogidas forman una nueva distribución normal.
            img(src='@/assets/curso/temas/tema3/16.svg', alt='' style='width: 238px')
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema3/15-.svg', alt='Texto que describa la imagen')
    
    h2.mb-5 Gestión de datos
    .row.justify-content-center.mb-5
      .col-lg-2.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/17.svg', alt='')
      .col-lg-10(data-aos="fade-left"): p Las estadísticas desde el entorno digital y tecnológico han apalancado términos como analítica <em>(analytics) y Big data</em>. En estas áreas se toman datos, se obtienen resultados y se visualizan los datos.
        br
        br
        |Para gestionar los datos lo primero es saber desde qué enfoque se desea realizar esta gestión. A continuación, se describe el proceso:

    h3(data-aos="fade-right") Obtención de datos de los procesos
    .row.justify-content-center.mb-3
      .col-lg-5.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema3/18.png', alt='')
      .col-lg-7(data-aos="fade-left")
        ul.lista-ul
          li
            i.fas.fa-angle-right
            | Las organizaciones actuales, tienen enfoques hacia los procesos, y todos estos deberían de ir asociados de manera directa o indirecta, a los clientes; por lo que se dice que las organizaciones no dependen de personas, sino de procesos y, adicionalmente, tienen un enfoque hacia el cliente.
          li
            i.fas.fa-angle-right
            | En este sentido cada proceso o área de la organización, debe tener claridad no solo de sus funciones, sino, además de los objetivos y las metas, según las funciones en toda la cadena general de la empresa.
          li
            i.fas.fa-angle-right
            | Si bien algunas pymes con un enfoque tradicional consideran que no tienen necesidad de capturar datos de sus procesos, pues cada área tiene un responsable y basta con que la gerencia les consulte para saber cómo va el negocio; esto no es lo más adecuado; y menos cuando existen las posibilidades de utilizar la analítica y la inteligencia de negocios al alcance de todos.
    .row.justify-content-center.mb-5
      .col-lg-9(data-aos="fade-right")
        ul.lista-ul
          li
            i.fas.fa-angle-right
            | Otro caso particular entre muchas empresas es que usan los programas informáticos en algunas áreas, pero no se encuentran integrados o relacionados. Si bien usan tecnología digital para mejorar y optimizar tareas y procesos, ante los ojos de la gerencia y desde la mirada holística corporativa podría existir carencia de sinergia; aquí también en caso de que la gerencia requiera información sobre su negocio, deberá llamar o solicitar informes a cada líder para saber cómo marcha la organización.
          li
            i.fas.fa-angle-right
            | Un elemento indispensable para la gestión de los datos en las organizaciones es determinar área por área los métodos y tecnologías que usan para la captura de los registros o de los procesos o sucesos de cada departamento.
      .col-lg-3.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema3/19.svg', alt='')
    h3(data-aos="fade-right") Requisitos captura de datos
    p.mb-5(data-aos='fade-right') Algunos requisitos de captura de datos de todas las áreas deberán cumplir con los siguientes parámetros:
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
          div(titulo="<em>[Qué] registrar hechos.</em>")
            p.mb-0 Todas las áreas deben registrar las tareas o acciones (compras, terminación de tareas, visitas, publicación de anuncios, etc.).
          div(titulo="<em>[Cuándo] registrar momentos.</em>")
            p.mb-0 Una de las características de la analítica es llevar una historia, no es posible que exista una historia si no hay fechas. Es importante determinar las fechas de cada hecho.
          div(titulo="<em>[Quién] Registrar responsable.</em>")
            p.mb-0 Cada tarea deberá tener un responsable, más cuando hay tareas entre diferentes áreas, de esta manera es posible identificar quién o en dónde se encuentran los embudos en los diferentes procesos del negocio.
          div(titulo="<em>[Cuánto] Registrar cantidades.</em>")
            p.mb-0 La mayoría de los hechos, contienen un número que acompaña las características; ejemplo, una venta tiene detalles como cantidad de elementos y un monto de dinero, estas cifras siempre deberán registrarse; en otras tareas, como por ejemplo aprobar una solicitud, donde no hay un monto numérico sí contiene un estado, por lo que también se deben registrar los estados de estas tareas.
          div(titulo="<em>[A quien o de quién] registrar clientes o proveedores</em>")
            p.mb-0 Cada hecho o acción debe tener un cliente como si bien puede ser externo como a las ventas también podría ser interno, por ejemplo, la aprobación de presupuesto, el cliente interno sería la dirección responsable de lo financiero; todos los hechos deben tener a quien o para quien se le hace la acción.
      .col-lg-4.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema3/20.png', alt='')
    p.mb-5(data-aos='fade-right') No basta con tener registrados estos cinco mínimos componentes de las tareas más relevantes para que los datos muestren una radiografía clara sobre cada proceso. Además, es importante tener claridad sobre la calidad de los datos para que se puedan integrar y tener plena confianza. 
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/21.jpg')})`}"
          )
          .bloque-texto-g__texto.flex-column.p-4
            h3.mb-3 Integración de datos
            br 
            br 
            p.mb-0 Ocasionalmente no existe un sistema que sirva para todo cuando se tienen identificadas las fuentes de datos de cada área se procede a extraer estos datos. 
              br
              br
              |Existen diversidad de fuentes de datos; se deben diseñar metodologías para que los datos tengan una copia óptima en sistemas de almacenamiento centralizados que garanticen la calidad de estos y estén disponibles para la realización de reportes de todas las áreas. 
    h3(data-aos="fade-right") Diseño de reportes
    .row.justify-content-center.mb-5
      .col-lg-4.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema3/22.svg', alt='')
      .col-lg-8(data-aos="fade-left")
        p El objetivo es que todos los datos recolectados, copiados y optimizados, sean consumidos por el nivel de decisión, que no necesariamente son los gerentes, los empleados también deben acceder a sus gestiones y resultados en gráficos y dashboards que den cuenta de su propio rendimiento; esto permite una autoevaluación y la toma de decisiones sobre sus propias funciones en la empresa.
          br
          br
          |En términos generales, la gerencia ya no tendrá que llamar a los líderes de cada proceso para que le den explicación sobre diferentes situaciones ya que tendrá acceso a las cifras en sus teléfonos celulares, en cualquier lugar y a cualquier hora. Lo que permite tener empresas más eficientes, con capacidad de reaccionar más pronto y tomar mejores decisiones.

</template>

<script>
export default {
  name: 'Tema3',
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
