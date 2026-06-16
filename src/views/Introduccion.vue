<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p.mb-3 Las redes sociales y las tecnologías digitales han transformado la forma en que las organizaciones se comunican con sus audiencias y desarrollan estrategias de marketing. Plataformas como #[b Facebook, Instagram, TikTok, LinkedIn y YouTube] permiten fortalecer el posicionamiento de marca, difundir contenidos e interactuar con los usuarios. En este contexto, la analítica digital se convierte en una herramienta clave para comprender el comportamiento de las audiencias y evaluar el rendimiento de las campañas.
      .row.justify-content-center.align-items-center
        .col-xl.mb-4.mb-lg-0
          .caja-1.mb-3(data-aos="fade-right")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/intro/img1.jpg', alt='').m-auto
              .col-xl.fit___box_container
                p.mb-0 #[b La analítica de campañas en redes sociales] permite recopilar y analizar datos relacionados con #[b alcance, interacción, tráfico, conversiones y otros indicadores de desempeño]. Esta información facilita la segmentación de audiencias, la personalización de contenidos y la optimización de estrategias orientadas al cumplimiento de objetivos comerciales y comunicativos. Asimismo, respalda la toma de decisiones mediante evidencia obtenida de los entornos digitales.
          p.mb-0 Este componente formativo aborda los fundamentos de la analítica de campañas en redes sociales, incluyendo #[b métricas, KPI, herramientas de análisis y procesos de medición]. Además, promueve el desarrollo de habilidades para interpretar información, identificar oportunidades de mejora y utilizar los datos de manera estratégica. De esta forma, contribuye al fortalecimiento de las acciones de marketing digital y al logro de los objetivos organizacionales.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='').m-auto

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
