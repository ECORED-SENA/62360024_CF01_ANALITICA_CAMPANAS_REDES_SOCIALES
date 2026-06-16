<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Objetivos comerciales y campañas digitales
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.mb-3(data-aos="fade-right")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t3/img1.jpg', alt='').m-auto
              .col-xl.fit___box_container
                p.mb-0 Los objetivos comerciales corresponden a los resultados que una organización busca alcanzar mediante la ejecución de #[b estrategias relacionadas] con #[b ventas, posicionamiento, crecimiento y comunicación] con clientes. Estos objetivos orientan las acciones de #[i marketing] digital, facilitan la asignación de recursos y permiten establecer mecanismos de seguimiento para evaluar el desempeño de las campañas implementadas.
          p.mb-0 La formulación de objetivos #[b claros y específicos] contribuye a la planificación estratégica y favorece la medición de resultados mediante indicadores relacionados con #[b alcance, interacción, tráfico, generación de clientes potenciales y conversión].
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img2.png', alt='').m-auto
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Relación entre objetivos y campañas digitales
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-3.ajuste-2(data-aos="fade-right")
            p.mb-0 Las campañas digitales deben diseñarse de acuerdo con los objetivos comerciales establecidos por la organización. Esta relación permite seleccionar formatos de #[b contenido, plataformas, estrategias] de segmentación y mecanismos de evaluación alineados con las necesidades de comunicación y #[i marketing].
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t3/img3.jpg', alt='').m-auto
        .col-xl
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t3/img4.svg', alt='' style="width: 70px")
          p.mb-0 Cada campaña debe responder a un propósito específico, ya sea aumentar el #[b reconocimiento de marca, generar interacción, captar clientes potenciales o incrementar las conversiones]. La definición clara de los objetivos facilita la organización de recursos, el seguimiento de resultados y la optimización de las estrategias implementadas. 
      p.mb-5 La articulación entre objetivos comerciales y campañas digitales puede comprenderse a partir de los siguientes elementos:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Objetivos comerciales
                  p.mb-0 Definen los resultados que la organización espera alcanzar y orientan la planificación de las acciones digitales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Estrategias de #[i marketing] digital
                  p.mb-0 Determinan las acciones necesarias para alcanzar los objetivos establecidos mediante contenidos, publicidad y actividades de interacción.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Plataformas digitales
                  p.mb-0 Se seleccionan de acuerdo con las características de las audiencias y las metas de la campaña.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Segmentación de audiencias
                  p.mb-0 Permite dirigir los mensajes a grupos específicos de usuarios para incrementar la relevancia y efectividad de las acciones implementadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Métricas e indicadores
                  p.mb-0 Facilitan la evaluación del rendimiento de las campañas y la medición del cumplimiento de los objetivos definidos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t3/img9.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 La planeación constituye una etapa fundamental dentro del proceso de diseño de campañas digitales, ya que permite organizar los recursos y las acciones necesarias para alcanzar los resultados esperados.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img10.jpg')})` }")
        .bloque-texto-g__texto.p-4
          ul.fa-ul.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Definición de objetivos:] establece las metas que orientarán el desarrollo de la campaña.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Selección de plataformas:] determina los canales digitales más adecuados para llegar a la audiencia objetivo.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Diseño de contenidos:] define los formatos y mensajes que serán utilizados durante la campaña.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Asignación de recursos:] organiza el presupuesto, el tiempo y los recursos necesarios para la ejecución de las acciones.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Seguimiento y evaluación:] permite medir resultados e identificar oportunidades de mejora mediante métricas e indicadores de desempeño.
          br
      p.mb-5 La efectividad de una campaña también depende del conocimiento de las audiencias a las cuales se dirigen las acciones de #[i marketing] digital.
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img11.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img12.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Características demográficas
                  p.mb-0.text-center Facilitan la segmentación según edad, género, nivel educativo u otras variables relevantes.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img13.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Intereses y preferencias
                  p.mb-0.text-center Permiten diseñar contenidos alineados con las necesidades y expectativas de los usuarios.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img14.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Ubicación geográfica
                  p.mb-0.text-center Favorece la orientación de campañas hacia mercados o regiones específicas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img15.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Comportamiento digital
                  p.mb-0.text-center Facilita la personalización de estrategias a partir de hábitos de navegación e interacción.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img16.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Nivel de interacción
                  p.mb-0.text-center Permite identificar oportunidades para fortalecer el compromiso y la conversión de los usuarios.
          p.mb-0 La adecuada relación entre objetivos comerciales, campañas digitales y audiencias contribuye al desarrollo de estrategias más efectivas, optimiza el uso de los recursos disponibles y fortalece el cumplimiento de las metas organizacionales.
          Separador
          #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 3.2 Aplicación de objetivos comerciales en redes sociales
          p La aplicación de objetivos comerciales en redes sociales consiste en implementar estrategias y acciones digitales orientadas al cumplimiento de metas organizacionales. Estas acciones incluyen #[b campañas publicitarias, publicaciones estratégicas, actividades de interacción y procesos de análisis] que permiten fortalecer la presencia digital y mejorar los resultados comerciales.
          p.mb-5 Las plataformas sociales ofrecen herramientas que facilitan la segmentación de audiencias, la configuración de campañas y el monitoreo del rendimiento mediante métricas e indicadores. Esto permite evaluar continuamente las acciones implementadas y realizar ajustes orientados al logro de los objetivos definidos. La aplicación de objetivos comerciales en redes sociales puede desarrollarse mediante diferentes procesos de gestión y ejecución de campañas:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t3/img17.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Segmentación de audiencias
                p.mb-0.text-center Permite dirigir campañas hacia grupos específicos de usuarios de acuerdo con sus características, intereses y comportamientos digitales.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t3/img18.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Desarrollo de contenidos
                p.mb-0.text-center Facilita la creación de publicaciones alineadas con los objetivos comerciales y las necesidades de las audiencias.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t3/img19.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Configuración de campañas
                p.mb-0.text-center Permite establecer objetivos, audiencias, presupuestos y formatos de contenido dentro de las plataformas digitales.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t3/img20.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Gestión de recursos
                p.mb-0.text-center Facilita la organización del presupuesto, el tiempo y los recursos necesarios para la ejecución de las estrategias.
            .tarjeta.color-acento-botones
              .row.justify-content-center.mb-3
                .col-12
                  img(src='@/assets/curso/temas/t3/img21.png' ).m-auto
              .box___card_sinbordes_p
                h4.mb-3.estilo-text Seguimiento de resultados
                p.mb-0.text-center Permite evaluar el rendimiento de las campañas mediante métricas, KPI e indicadores de desempeño.
          p.mb-5 A continuación, se presenta un pódcast  sobre la configuración y evaluación de campañas digitales, destacando los elementos fundamentales para la planificación estratégica, el seguimiento de resultados y la optimización del rendimiento en entornos digitales.
      .row.align-items-center.m-0.mb-0
        .col-xl
          .row.align-items-center.justify-content-center.caja-4(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t3/img22.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="Configuración y evaluación de campañas digitales"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t3/img23.jpg" ).m-auto

</template>

<script>
import audio1 from '@/assets/componentes/audios/audio-ej.mp3'
export default {
  name: 'Tema3',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
