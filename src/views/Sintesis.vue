<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p A continuación, se presenta una síntesis de la temática estudiada en el componente formativo:
      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="Diagrama conceptual sobre fundamentos de métricas y configuración de campañas digitales que integra marketing digital, herramientas analíticas, audiencias digitales, campañas digitales, embudo de conversión y métricas KPI. Incluye elementos como redes sociales, contenido digital, publicidad digital, plataformas de análisis y visualización de datos, Meta, Instagram, TikTok, YouTube, segmentación de audiencias, campañas orgánicas, pagas y mixtas, etapas de atracción, consideración, conversión y fidelización, y métricas de alcance, engagement, tasa de conversión y valor del cliente.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
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
