<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.mb-5
      .col-lg-9(data-aos="fade-right")
        .cajon-b.color-primario.p-3.mb-5.abajo-derecha
          p.mb-0 Estimado aprendiz, reciba una cordial bienvenida a este recurso de aprendizaje orientado al análisis y conocimiento de datos enfocado a la analítica. Durante su desarrollo se abordarán los ejes temáticos datos, calidad de los datos, arquitectura de los datos y herramientas para la inteligencia de negocios. Al finalizar estará en capacidad de implementar pequeños proyectos de inteligencia de negocios conforme a los requerimientos. Antes de empezar, se sugiere revisar el siguiente video para identificar el contexto de aprendizaje:
            br
            br
            |#[b ¡Le deseamos una experiencia de aprendizaje significativa y memorable!]
      .col-lg-3.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/intro/1.svg', alt='')
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
