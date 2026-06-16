<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Embudo de conversión
      p.mb-5 El embudo de conversión es una herramienta utilizada en #[i marketing] digital para representar #[b el recorrido que realiza un usuario] desde el primer contacto con una marca hasta la ejecución de una acción de valor para la organización, como una compra, un registro o una interacción.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-3.ajuste-3(data-aos="fade-right")
            p.mb-0 Este modelo permite #[b analizar el comportamiento de las audiencias] durante las diferentes etapas de relación con una organización y comprender cómo evolucionan los usuarios dentro de las campañas digitales hasta alcanzar los objetivos definidos.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t5/img1.jpg', alt='').m-auto
        .col-xl
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t5/img2.svg', alt='' style="width: 70px")
          p.mb-0 Las organizaciones utilizan #[b el embudo de conversión para estructurar estrategias orientadas al cumplimiento de objetivos comerciales], identificar el nivel de interacción de los usuarios en cada etapa y evaluar el rendimiento de las acciones implementadas mediante métricas relacionadas con alcance, interacción, tráfico y conversiones.
      p.mb-0 El embudo de conversión se representa mediante una secuencia de fases que refleja la #[b disminución progresiva del número de usuarios a medida que avanzan] hacia el resultado esperado. Su aplicación facilita la segmentación de audiencias, la planificación de contenidos y el análisis de resultados dentro de las estrategias de #[i marketing] digital.
      Separador
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Fases del embudo de conversión
      .bg-1
        .px-5
          p.mb-5 Las fases del embudo de conversión representan los diferentes niveles de relación e interacción entre los usuarios y las campañas digitales. Cada etapa posee objetivos específicos y requiere estrategias diferenciadas para acompañar a las audiencias durante su recorrido hacia la conversión. 
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 1.
                span Embudo de conversión
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/t5/img3.png', alt='Diagrama de embudo de conversión con cinco etapas: reconocimiento, interés, consideración, conversión y fidelización, acompañadas por íconos representativos de cada fase. ').m-auto
          .row.justify-content-center.mb-5
            .col-lg-10
              AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in").mb-3
                .row(titulo="Reconocimiento").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 El usuario identifica por primera vez la marca, producto o servicio mediante contenidos, anuncios o publicaciones en plataformas digitales. El objetivo consiste en generar visibilidad y alcance entre las audiencias.
                .row(titulo="Interés").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 El usuario manifiesta curiosidad por la organización e interactúa con la información disponible. En esta fase se busca captar la atención y promover una mayor aproximación a la marca.
                .row(titulo="Consideración").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 El usuario analiza alternativas, consulta información adicional y compara opciones antes de tomar una decisión. Las estrategias se orientan a fortalecer la confianza y el interés por la oferta presentada.
                .row(titulo="Conversión").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 El usuario realiza la acción esperada por la organización, como una compra, registro, descarga o solicitud de información. Esta etapa refleja el cumplimiento del objetivo principal de la campaña digital.
                .row(titulo="Fidelización").ajuste-cajaAcordion.ajuste-vineta
                  p.mb-3 El usuario mantiene una relación continua con la organización mediante nuevas interacciones, recomendaciones o compras posteriores. El propósito es fortalecer el compromiso y la permanencia de la audiencia.
      p.mb-0 La adecuada gestión de cada fase permite acompañar a los usuarios durante todo su recorrido digital, fortaleciendo la relación con las audiencias y aumentando las posibilidades de alcanzar los objetivos estratégicos definidos por la organización.
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Aplicabilidad en campañas digitales
      p.mb-5 El embudo de conversión puede aplicarse en diferentes #[b tipos de campañas digitales] para analizar el comportamiento de las audiencias y evaluar el rendimiento de las estrategias implementadas en redes sociales. Su utilización permite #[b identificar la etapa] en la que se encuentran los usuarios y desarrollar acciones orientadas a fortalecer la interacción, aumentar las conversiones y optimizar los resultados de las campañas. La aplicación del embudo de conversión facilita la organización de estrategias de contenido, segmentación y seguimiento de acuerdo con las características de cada fase del proceso de interacción con las audiencias: 
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t5/img4.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img5.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Planeación de contenidos
                  p.mb-0 Permite diseñar contenidos alineados con las necesidades de los usuarios en cada etapa del embudo de conversión.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img6.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Segmentación de audiencias
                  p.mb-0 Facilita la identificación de grupos de usuarios según su nivel de interés, interacción o intención de conversión.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img7.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Diseño de campañas
                  p.mb-0 Contribuye a estructurar campañas orientadas a reconocimiento, consideración, conversión o fidelización.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img8.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Seguimiento del comportamiento de usuarios
                  p.mb-0 Permite analizar acciones como clics, interacciones, tiempo de permanencia, registros y conversiones realizadas dentro de las plataformas digitales.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img9.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Optimización de estrategias
                  p.mb-0 Facilita la identificación de oportunidades de mejora mediante el análisis de resultados y el comportamiento de las audiencias.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img10.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Toma de decisiones
                  p.mb-0 Proporciona información relevante para ajustar contenidos, campañas y recursos de acuerdo con los resultados obtenidos.
          p.mb-5 El seguimiento del comportamiento de los usuarios constituye uno de los principales beneficios del embudo de conversión, ya que permite comprender el recorrido realizado por las audiencias dentro de las campañas digitales y evaluar la efectividad de las estrategias implementadas.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 2.
            span Relación entre fases del embudo y métricas digitales
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Fase del embudo
                  th.texto-left Métricas relacionadas
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Atracción
                  td.texto-left Alcance, impresiones y visualizaciones.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Consideración
                  td.texto-left Comentarios, compartidos, clics e interacciones.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Conversión
                  td.texto-left CTR, conversiones, registros, descargas y compras.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Fidelización
                  td.texto-left Retención, recurrencia, participación constante y nivel de compromiso de los usuarios.
      p.mb-5 La adecuada relación entre #[b las fases del embudo y las métricas digitales] facilita la interpretación de resultados y fortalece los procesos de análisis de campañas en redes sociales. 
      .caja-2.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t5/img11.png', alt='').m-auto
          .col-xl.fit___box_container
            p.mb-0 #[b Por ejemplo], durante la fase de atracción se utilizan métricas relacionadas con alcance y visualizaciones para determinar cuántos usuarios interactúan inicialmente con los contenidos publicados, mientras que en la fase de conversión se analizan indicadores asociados a registros, clics o compras realizadas como resultado de las estrategias implementadas.
      p.mb-0 La utilización de métricas alineadas con cada fase del embudo permite evaluar el comportamiento de las audiencias, optimizar las campañas digitales y fortalecer el cumplimiento de los objetivos comerciales establecidos por la organización.

</template>

<script>
export default {
  name: 'Tema5',
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
