<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 7
        h1 KPI en redes sociales
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.mb-3(data-aos="fade-right")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t7/img1.jpg', alt='').m-auto
              .col-xl.fit___box_container
                p.mb-0 Los KPI (#[i Key Performance Indicators] o indicadores clave de desempeño) corresponden a indicadores utilizados para evaluar #[b el cumplimiento de objetivos] dentro de campañas y estrategias desarrolladas en redes sociales. A diferencia de las métricas generales, los KPI se enfocan en resultados estratégicos relacionados con el alcance de metas comerciales, de #[i marketing] y de comunicación.
          p.mb-0 La utilización de KPI permite transformar los datos generados por las plataformas digitales en información útil para #[b el seguimiento, análisis y optimización de campañas]. Gracias a estos indicadores, las organizaciones pueden evaluar el rendimiento de sus acciones, identificar oportunidades de mejora y tomar decisiones basadas en evidencia. Los KPI cumplen diferentes funciones dentro de la gestión de redes sociales:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t7/img2.png', alt='').m-auto
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-0
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t7/img3.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t7/img4.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Medición de objetivos
                  p.mb-0 Permite evaluar el nivel de cumplimiento de las metas establecidas por la organización.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t7/img5.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Seguimiento de campañas
                  p.mb-0 Facilita el monitoreo continuo del rendimiento de contenidos, publicaciones y estrategias digitales.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t7/img6.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Evaluación de resultados
                  p.mb-0 Proporciona información para analizar los resultados obtenidos mediante las acciones implementadas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t7/img7.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Identificación de oportunidades de mejora
                  p.mb-0 Permite detectar fortalezas y aspectos susceptibles de optimización dentro de las campañas digitales.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t7/img8.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Toma de decisiones
                  p.mb-0 Facilita la definición de acciones estratégicas basadas en datos obtenidos mediante herramientas analíticas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t7/img9.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Optimización del rendimiento
                  p.mb-0 Contribuye al mejoramiento continuo de campañas y estrategias orientadas al cumplimiento de objetivos organizacionales.
          Separador
          #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 7.1 Concepto de KPI
          p Los KPI (#[i Key Performance Indicators]) son #[b indicadores estratégicos] utilizados para #[b medir el rendimiento y los resultados] obtenidos frente a objetivos específicos. Su finalidad consiste en determinar si las acciones desarrolladas dentro de una campaña digital están contribuyendo al logro de las metas establecidas por la organización.
          p.mb-5 Mientras #[b las métricas] proporcionan datos sobre actividades o comportamientos específicos de los usuarios, los KPI permiten interpretar dichos datos desde una perspectiva estratégica para evaluar el impacto de las acciones implementadas. Por esta razón, la selección de KPI debe estar alineada con los objetivos de #[i marketing] y comunicación definidos para cada campaña.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 4.
            span Diferencias entre métricas y KPI
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Métricas
                  th.texto-left KPI
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Representan datos generales relacionados con el comportamiento digital de los usuarios.
                  td.texto-left Representan indicadores estratégicos orientados al cumplimiento de objetivos comerciales y de #[i marketing].
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Permiten medir acciones específicas dentro de las plataformas digitales.
                  td.texto-left Permiten evaluar el nivel de cumplimiento de metas organizacionales.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Se enfocan en actividades individuales o resultados puntuales.
                  td.texto-left Se enfocan en el rendimiento general y los resultados estratégicos de las campañas.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Proporcionan información cuantitativa sobre una acción determinada.
                  td.texto-left Facilitan la toma de decisiones mediante la interpretación estratégica de los resultados.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Puede existir un gran número de métricas dentro de una campaña.
                  td.texto-left Se seleccionan únicamente los indicadores más relevantes para evaluar el desempeño.
      p.mb-5 La relación entre métricas y KPI permite transformar datos operativos en información estratégica para la evaluación y optimización de campañas digitales:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t7/img10.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Cantidad de clics
              p.mb-0.text-center Tasa de conversión.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t7/img11.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Número de comentarios
              p.mb-0.text-center Retorno de la inversión (#[i Return on Investment] - ROI).
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t7/img12.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Visualizaciones de videos
              p.mb-0.text-center Costo por adquisición (CPA).
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t7/img13.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Alcance de publicaciones
              p.mb-0.text-center Tasa de interacción.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t7/img14.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Cantidad de seguidores
              p.mb-0.text-center Rendimiento de campañas publicitarias.
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-10
              .caja-5.p-5(data-aos="flip-down")
                p Uno de los KPI más utilizados en #[i marketing] digital es el retorno de la inversión (#[i Return on Investment] - ROI), indicador que permite evaluar la rentabilidad de una campaña digital:
                .row.align-items-center
                  .col-lg.p-0
                    p.mb-0.texto-right ROI =
                  .col-lg-3.col-sm-12
                    .text-center
                      p.mb-0.line--bottom Ganancia - Inversión
                      p.mb-0 Inversión
                  .col-lg.p-0
                    p.mb-0.texto-left X 100
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img5.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ejemplo
      .caja-2.mb-0(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t7/img15.png', alt='').m-auto
          .col-xl.fit___box_container
            p Una empresa invierte $1.000.000 en una campaña publicitaria en redes sociales y obtiene ventas por valor de $1.500.000. En este caso, la ganancia corresponde a $500.000.
            p.text-center #[b ROI] = (500.000 ÷ 1.000.000) × 100 = 50 %
            p.mb-0 Esto significa que por #[b cada peso invertido en la campaña se obtuvo un retorno equivalente al 50 %] de la inversión realizada. La adecuada selección y análisis de KPI permite evaluar el cumplimiento de los objetivos establecidos, optimizar estrategias digitales y fortalecer la toma de decisiones dentro de los procesos de #[i marketing] en redes sociales.
      Separador
      #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.2 Tipos de KPI en campañas digitales
      p Los KPI pueden clasificarse según el objetivo estratégico que buscan evaluar dentro de las campañas digitales. Cada #[b tipo de KPI] permite medir aspectos específicos relacionados con #[b alcance, interacción, tráfico, conversión, crecimiento, rentabilidad y fidelización de audiencias].
      p.mb-5 La correcta selección de KPI facilita el análisis del rendimiento de las estrategias implementadas en redes sociales y contribuye a la toma de decisiones basada en datos analíticos. Asimismo, permite identificar el nivel de cumplimiento de los objetivos comerciales y de #[i marketing] establecidos para cada campaña.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 KPI de alcance
                  p.mb-0 Permiten medir la visibilidad y exposición de los contenidos publicados en redes sociales. Entre los principales indicadores se encuentran el alcance total, las impresiones, los usuarios únicos alcanzados, las visualizaciones de contenido y la cobertura de publicaciones. Su objetivo es evaluar el nivel de exposición de las campañas digitales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t7/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 KPI de interacción
                  p.mb-0 Analizan el nivel de participación y compromiso generado por las audiencias dentro de las plataformas digitales. Incluyen indicadores como la tasa de interacción, la cantidad de comentarios, las reacciones, los compartidos, los guardados y la participación de usuarios. Su finalidad es medir el interés generado por los contenidos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t7/img17.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 KPI de tráfico
                  p.mb-0 Permiten evaluar la cantidad de usuarios dirigidos desde redes sociales hacia sitios web, formularios o plataformas externas. Entre los indicadores más utilizados se encuentran los clics en enlaces, las visitas al sitio web, las sesiones generadas, el tiempo de permanencia y la tasa de rebote. Su objetivo es analizar el flujo de usuarios proveniente de las campañas digitales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t7/img18.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 KPI de conversión
                  p.mb-0 Miden acciones específicas realizadas por los usuarios como resultado de las campañas implementadas. Incluyen indicadores como la tasa de conversión, los registros realizados, los formularios completados, las descargas y las compras generadas. Su propósito es evaluar el cumplimiento de los objetivos comerciales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t7/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 KPI de crecimiento
                  p.mb-0 Permiten analizar el desarrollo de comunidades digitales y el aumento de audiencias dentro de las plataformas sociales. Consideran indicadores como el crecimiento de seguidores, los nuevos suscriptores, el incremento de audiencia, la retención de seguidores y la variación de la comunidad digital. Su finalidad es medir el fortalecimiento de la presencia digital de la organización.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t7/img20.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 KPI de rendimiento y rentabilidad
                  p.mb-0 Evalúan la efectividad económica y comercial de las campañas digitales. Incluyen indicadores como el retorno de la inversión (Return on Investment - ROI), el costo por clic (CPC), el costo por adquisición (CPA), el rendimiento de anuncios y el retorno sobre la inversión publicitaria. Su objetivo es determinar la rentabilidad y efectividad de las estrategias implementadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t7/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 KPI de fidelización
                  p.mb-0 Permiten medir el nivel de permanencia, compromiso y relación de las audiencias con la marca. Entre los indicadores más utilizados se encuentran las recompras, la participación recurrente, la retención de usuarios, el nivel de satisfacción y la interacción constante. Su objetivo es analizar la fidelidad y permanencia de los usuarios dentro de las comunidades digitales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t7/img22.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La utilización de diferentes tipos de KPI permite obtener una visión integral del rendimiento de las campañas digitales. Su análisis facilita la evaluación de resultados, la optimización de estrategias y el fortalecimiento de la toma de decisiones orientada al cumplimiento de los objetivos organizacionales.
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10
          .caja-5.p-5(data-aos="flip-down")
            p En los KPI de rendimiento y rentabilidad, uno de los indicadores más utilizados es el #[b retorno de la inversión] (#[i Return on Investment] - ROI), el cual permite determinar la rentabilidad de una campaña digital:
            p.text-center ROI = (Ganancia − Inversión) / Inversión × 100
      p.mb-0 Este indicador facilita la evaluación de los beneficios obtenidos en relación con los recursos invertidos en las estrategias de #[i marketing] digital.
      Separador
      #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 7.3 Interpretación de KPI en redes sociales
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La interpretación de KPI consiste en #[b analizar los resultados] obtenidos mediante indicadores clave de desempeño para evaluar el cumplimiento de objetivos dentro de campañas digitales. Este proceso permite comprender el rendimiento de las estrategias implementadas y determinar su contribución al logro de las metas comerciales y de #[i marketing].
          p Las organizaciones utilizan herramientas analíticas para interpretar KPI relacionados con #[b alcance, interacción, tráfico, conversión, crecimiento y fidelización]. La información obtenida facilita la identificación de fortalezas, oportunidades de mejora y factores que influyen en el comportamiento de las audiencias digitales. La adecuada interpretación de KPI contribuye a la optimización de campañas y fortalece la toma de decisiones basada en datos obtenidos mediante herramientas de análisis digital.
          p.mb-0 La interpretación de KPI puede desarrollarse mediante diferentes procesos orientados a la evaluación del rendimiento de campañas digitales:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t7/img23.png', alt='').m-auto
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t7/img3.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t7/img24.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Análisis de resultados
                  p.mb-0 Permite evaluar el rendimiento de campañas digitales mediante indicadores relacionados con alcance, interacción, conversión y retorno de la inversión.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t7/img25.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Seguimiento de objetivos
                  p.mb-0 Facilita el monitoreo continuo de los KPI para verificar el cumplimiento de las metas establecidas dentro de las estrategias digitales.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t7/img26.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Comparación de resultados
                  p.mb-0 Permite analizar el comportamiento de campañas en diferentes periodos de tiempo y evaluar la evolución de los indicadores de desempeño.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t7/img27.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Identificación de oportunidades de mejora
                  p.mb-0 Facilita el reconocimiento de fortalezas y aspectos susceptibles de optimización dentro de las campañas digitales.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t7/img28.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Toma de decisiones
                  p.mb-0 Proporciona información relevante para ajustar contenidos, segmentaciones y estrategias de acuerdo con los resultados obtenidos.
          p.mb-5 La interpretación de los KPI depende de los objetivos definidos para cada campaña. Por esta razón, un mismo indicador puede tener significados diferentes según la estrategia implementada y los resultados esperados por la organización.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t7/img29.jpg')})` }")
        .bloque-texto-g__texto.p-4
          ul.fa-ul.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Alcance:] permite identificar el nivel de difusión de los contenidos y determinar si la estrategia está llegando a la audiencia prevista.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Interacción:] refleja el grado de participación de los usuarios mediante comentarios, reacciones, compartidos y otras acciones dentro de la plataforma.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b CTR (#[i Click Through Rate]):] mide la proporción de usuarios que hacen clic en un enlace o anuncio respecto al número total de impresiones.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Conversión:] evalúa la cantidad de usuarios que completan una acción específica, como registros, compras o diligenciamiento de formularios.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Retención:] permite analizar la permanencia de los usuarios y su nivel de fidelización frente a la marca, producto o servicio.
          br
      p.mb-5 La interpretación de los indicadores clave de desempeño permite identificar fortalezas y oportunidades de mejora en las campañas digitales. A partir del análisis de métricas como alcance, interacción y conversión, es posible reconocer situaciones que requieren ajustes para optimizar los resultados de las estrategias implementadas.
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Alto alcance y baja interacción")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 10.
                span Alto alcance y baja interacción
              figure
                img(src='@/assets/curso/temas/t7/img30.png', alt="Panel comparativo de campaña digital con indicadores de clics en el enlace, conversiones y tasa de conversión asociados a un escenario de baja conversión. " ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Alto alcance y baja interacción
              p.mb-0 Los contenidos llegan a un número significativo de usuarios, pero generan una participación limitada dentro de las plataformas digitales. Esta situación puede indicar la necesidad de ajustar los formatos, los mensajes o los llamados a la acción para incrementar la interacción.
        .py-3.py-md-4(titulo="Baja tasa de conversión")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 11.
                span Baja tasa de conversión
              figure
                img(src='@/assets/curso/temas/t7/img31.png', alt="Panel comparativo de campaña digital con indicadores de alcance, interacciones y tasa de interacción correspondientes a un escenario de alto alcance y baja participación. " ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Baja tasa de conversión
              p.mb-0 Puede evidenciar oportunidades de mejora relacionadas con la segmentación de audiencias, la pertinencia de los contenidos o la experiencia del usuario durante el proceso de conversión.
      p.mb-0 La adecuada interpretación de KPI permite fortalecer los procesos de análisis digital, optimizar el rendimiento de las campañas y contribuir al cumplimiento de los objetivos comerciales establecidos por la organización.

</template>

<script>
export default {
  name: 'Tema7',
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
