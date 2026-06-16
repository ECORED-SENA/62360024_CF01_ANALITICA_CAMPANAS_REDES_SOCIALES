<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Métricas digitales y KPI en redes sociales
      p.mb-5 Las métricas en redes sociales corresponden a #[b datos cuantificables] utilizados para evaluar el rendimiento de contenidos, publicaciones y campañas digitales desarrolladas en plataformas sociales. Estas métricas permiten analizar el comportamiento de las audiencias y medir resultados relacionados con #[b alcance, interacción, tráfico y conversión].
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t6/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Las organizaciones utilizan métricas para realizar seguimiento a #[b las estrategias implementadas, evaluar el cumplimiento de objetivos comerciales y fortalecer los procesos de análisis digital]. La información obtenida facilita la identificación de fortalezas, oportunidades de mejora y tendencias relacionadas con la interacción de los usuarios dentro de los entornos digitales.
      p.mb-5 Las métricas pueden asociarse con diferentes variables, como #[b alcance, impresiones, clics, comentarios, compartidos y conversiones]. Su selección depende de los objetivos establecidos y de las características de las campañas desarrolladas en redes sociales. La utilidad de las métricas digitales puede comprenderse a partir de los siguientes aspectos:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t6/img2.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Evaluación del rendimiento
                p.mb-0.text-center Permite analizar el desempeño de contenidos, publicaciones y campañas desarrolladas en plataformas digitales.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t6/img3.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Análisis del comportamiento de las audiencias
                p.mb-0.text-center Facilita la identificación de patrones de interacción, intereses y acciones realizadas por los usuarios.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t6/img4.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Medición del cumplimiento de objetivos
                p.mb-0.text-center Permite verificar si las estrategias implementadas contribuyen al logro de metas comerciales y de comunicación.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t6/img5.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Identificación de oportunidades de mejora
                p.mb-0.text-center Facilita la detección de fortalezas y aspectos susceptibles de optimización dentro de las campañas digitales.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t6/img6.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Toma de decisiones basada en datos
                p.mb-0.text-center Proporciona información objetiva para ajustar estrategias, contenidos y recursos de acuerdo con los resultados obtenidos. 
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t6/img7.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Optimización continua
                p.mb-0.text-center Favorece el mejoramiento permanente del rendimiento de campañas mediante el seguimiento y análisis de resultados.
          p.mb-0 La adecuada interpretación de las métricas digitales constituye un elemento fundamental para el desarrollo de estrategias efectivas en redes sociales, ya que permite comprender el comportamiento de las audiencias y fortalecer el cumplimiento de los objetivos organizacionales.
          Separador
          #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 6.1 Tipos de métricas en redes sociales
          p Las métricas en redes sociales pueden clasificarse según el tipo de información que proporcionan y los objetivos de las campañas digitales. Cada métrica permite analizar aspectos específicos relacionados con visibilidad, interacción, tráfico, conversión, crecimiento y rendimiento de las estrategias implementadas.
          p.mb-5 La selección adecuada de métricas facilita el seguimiento del rendimiento de contenidos y campañas desarrolladas en plataformas sociales. Asimismo, proporciona información relevante para la optimización de estrategias y la toma de decisiones basada en datos.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Métricas de alcance
                  p.mb-0 Permiten medir la cantidad de usuarios que visualizan los contenidos publicados en redes sociales. Entre las principales métricas se encuentran el alcance, las impresiones, las visualizaciones, la cobertura de publicaciones y los usuarios únicos alcanzados. Su objetivo es evaluar la visibilidad y exposición de contenidos y campañas digitales.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 2.
                    span Métricas de alcance
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t6/img8.png', alt='Panel de métricas de alcance en campañas digitales con indicadores de impresiones, alcance, visualizaciones, frecuencia, compartidos y guardados, junto con gráfico de tendencia temporal. ').m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Métricas de interacción
                  p.mb-0 Analizan la participación de los usuarios dentro de las publicaciones y campañas desarrolladas en plataformas digitales. Incluyen métricas como reacciones, comentarios, compartidos, guardados y clics en publicaciones. Su finalidad es medir el compromiso y la participación de las audiencias digitales.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 3.
                    span Métricas de interacción
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t6/img9.png', alt='Panel de métricas de interacción con indicadores de me gusta, comentarios, compartidos, guardados y tasa de interacción, acompañado de gráfico de evolución. ').m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Métricas de tráfico
                  p.mb-0 Permiten analizar la cantidad de usuarios que acceden a sitios web, formularios o plataformas externas mediante enlaces compartidos en redes sociales. Entre las más utilizadas se encuentran los clics en enlaces, las visitas al sitio web, las sesiones generadas, el tiempo de permanencia y la tasa de rebote. Su objetivo es evaluar el flujo de usuarios dirigido hacia plataformas externas.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 4.
                    span Métricas de tráfico
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t6/img10.png', alt='Panel de métricas de tráfico con indicadores de clics en enlaces, visitas al perfil, visitas al sitio web, visitas a la página y nuevos seguidores, junto con gráfico de tendencia. ').m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Métricas de conversión
                  p.mb-0 Miden acciones específicas realizadas por los usuarios como resultado de las campañas digitales. Incluyen compras realizadas, registros, descargas, formularios completados y suscripciones. Su propósito es evaluar el cumplimiento de objetivos comerciales y los resultados obtenidos mediante las campañas implementadas.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 5.
                    span Métricas de conversión
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t6/img11.png', alt='Panel de métricas de conversión con indicadores de conversiones, tasa de conversión, costo por conversión, valor de conversión y desempeño del embudo, acompañado de gráfico temporal. ').m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Métricas de crecimiento
                  p.mb-0 Permiten analizar el desarrollo y aumento de las comunidades digitales dentro de las plataformas sociales. Consideran indicadores como nuevos seguidores, crecimiento de audiencia, incremento de suscriptores, variación de la comunidad digital y retención de seguidores. Su objetivo es evaluar el fortalecimiento de la presencia digital de la organización.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 6.
                    span Métricas de crecimiento
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t6/img12.png', alt='Panel de métricas de crecimiento con indicadores de nuevos seguidores, seguidores totales, crecimiento de audiencia, usuarios que dejaron de seguir y tasa de crecimiento, junto con gráfico de barras. ').m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Métricas de rendimiento
                  p.mb-0 Analizan la efectividad general de campañas y estrategias digitales implementadas en redes sociales. Incluyen indicadores como el retorno de la inversión (#[i Return on Investment] - ROI), el costo por clic (CPC), el costo por adquisición (CPA), la tasa de conversión y el rendimiento de anuncios. Su finalidad es evaluar la efectividad y rentabilidad de las campañas digitales.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 7.
                    span Métricas de rendimiento
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t6/img13.png', alt='Panel de métricas de rendimiento con indicadores de engagement rate, ROI, CPC, CTR y CPM, acompañado de gráficos de evolución y resumen de resultados. ').m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Métricas de fidelización
                  p.mb-0 Permiten analizar el nivel de permanencia y compromiso de las audiencias con la marca. Entre las principales métricas se encuentran la recurrencia de interacción, la participación constante, la retención de usuarios, las recompras y el nivel de satisfacción. Su objetivo es medir la relación y permanencia de los usuarios dentro de las comunidades digitales.
                .col-xl-6
                  .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                    h5 Figura 8.
                    span Métricas de fidelización
                  figure(data-aos="zoom-in")
                    img(src='@/assets/curso/temas/t6/img14.png', alt='Panel de métricas de fidelización con indicadores de retención, clientes recurrentes, valor del cliente, Net Promoter Score y tasa de recompra, junto con gráficos de retención y cohortes. ').m-auto
      p.mb-5 La interpretación conjunta de estas métricas proporciona una visión integral del comportamiento de las audiencias y del rendimiento de las campañas digitales. Su análisis facilita la identificación de oportunidades de mejora, la optimización de contenidos y el fortalecimiento de las estrategias orientadas al cumplimiento de los objetivos organizacionales.
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-10
          .caja-5.p-5(data-aos="flip-down")
            p En el caso de las métricas de rendimiento, uno de los indicadores más utilizados es el retorno de la inversión (#[i Return on Investment] - ROI), el cual permite determinar la rentabilidad de una campaña digital:
            .caja-6.p-2.text-center.mb-3(data-aos="zoom-in")
              p.mb-0 #[b ROI] = (Ganancia − Inversión) / Inversión × 100
            p.mb-0 Este indicador facilita la evaluación de los beneficios obtenidos en relación con los recursos invertidos en las estrategias de #[i marketing] digital.
      Separador
      #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.2 Interpretación de métricas digitales
      p La interpretación de métricas digitales consiste en #[b analizar los datos] obtenidos mediante #[b herramientas analíticas] para comprender el comportamiento de las audiencias y evaluar el rendimiento de contenidos, campañas y estrategias implementadas en plataformas digitales.
      p.mb-5 Las organizaciones utilizan procesos de interpretación para #[b identificar patrones de interacción, medir resultados y establecer acciones de mejora] orientadas al cumplimiento de objetivos comerciales. Este análisis facilita la toma de decisiones basada en datos y fortalece el desarrollo de estrategias digitales efectivas. La interpretación de métricas puede abordarse a partir de diferentes procesos relacionados con el análisis de resultados y el comportamiento de las audiencias: 
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t6/img15.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Lectura de resultados en plataformas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Consiste en analizar la información proporcionada por paneles analíticos y reportes de rendimiento. Permite interpretar métricas relacionadas con alcance, interacción, clics y conversiones para evaluar el comportamiento de los usuarios y el desempeño de las campañas.
            .row(titulo="Análisis del comportamiento de campañas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Facilita la identificación de tendencias y patrones asociados con la interacción de los usuarios dentro de las plataformas digitales. Su propósito es determinar los factores que influyen en el alcance, la interacción y las conversiones.
            .row(titulo="Identificación de oportunidades de mejora").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite reconocer fortalezas y aspectos susceptibles de optimización a partir de los resultados obtenidos mediante las métricas digitales.
            .row(titulo="Toma de decisiones basada en datos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Proporciona información objetiva para ajustar contenidos, campañas, segmentaciones y estrategias de acuerdo con el comportamiento de las audiencias.
      p.mb-5 La selección de métricas debe realizarse de acuerdo con los objetivos comerciales y el tipo de estrategia implementada en redes sociales, ya que cada objetivo requiere indicadores específicos para evaluar el rendimiento de las acciones desarrolladas.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 3.
            span Relación entre objetivos comerciales y métricas
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Objetivo comercial
                  th.texto-left Métricas recomendadas
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Reconocimiento de marca
                  td.texto-left Alcance, impresiones y visualizaciones.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Interacción con audiencias
                  td.texto-left Reacciones, comentarios y compartidos.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Generación de tráfico
                  td.texto-left Clics en enlaces, visitas y sesiones.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Conversión
                  td.texto-left CTR, conversiones, registros y compras.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Fidelización
                  td.texto-left Retención, recurrencia de interacción y participación constante.
      .bg-2
        .px-5
          p.mb-5 La adecuada #[b selección de métricas] facilita la interpretación de resultados y contribuye a la optimización de campañas en redes sociales. 
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img5.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo de aplicación del embudo de conversión
          .caja-2.mb-5(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t6/img16.png', alt='').m-auto
              .col-xl.fit___box_container
                p.mb-0 Una tienda virtual de calzado deportivo publica una campaña en Instagram para promocionar una nueva colección de tenis. Como resultado, la publicación alcanza a 10.000 usuarios, genera 1.500 interacciones y dirige a 500 personas hacia el sitio web. Posteriormente, 80 usuarios realizan una compra y 30 continúan interactuando con la marca mediante nuevas compras o recomendaciones. Estos resultados son analizados mediante un #[i dashboard] de redes sociales, el cual permite interpretar el comportamiento de las audiencias en cada etapa del embudo de conversión y evaluar el rendimiento de la campaña.
          .row.justify-content-center.mb-0
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 9.
                span #[i Dashboard] de métricas de una campaña en Instagram
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/t6/img17.png', alt='Captura de panel analítico de Instagram con métricas de alcance, impresiones, interacciones, clics, conversiones, audiencia, actividad del perfil y contenido destacado.').m-auto

</template>

<script>
export default {
  name: 'Tema6',
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
