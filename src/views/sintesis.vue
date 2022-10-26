<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.justify-content-between.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-botones(data-aos='fade-right')
          h3.mb-0 Gestión de analítica de datos
          br
          span Síntesis: análisis y conocimiento de datos enfocada a la analítica
      .col-lg-1: img(src='@/assets/curso/temas/sintesis/sena.svg', alt='')
    p.mb-5(data-aos='fade-right') En el siguiente mapa conceptual se podrán visualizar los principales conceptos trabajados con respecto al análisis de datos para analítica:
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
