<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Campañas en redes sociales
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-3.ajuste-1(data-aos="fade-right")
            p.mb-0 Las campañas en redes sociales corresponden al conjunto de acciones estratégicas desarrolladas en plataformas digitales con el propósito de alcanzar objetivos de #[b comunicación, posicionamiento, interacción o conversión]. Estas permiten a las organizaciones promocionar #[b productos, servicios o contenidos] mediante publicaciones dirigidas a audiencias específicas.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img1.jpg', alt='').m-auto
        .col-xl
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t2/img2.svg', alt='' style="width: 70px")
          p.mb-0 Su desarrollo requiere procesos de planificación que incluyen la definición de #[b objetivos, la segmentación de audiencias, la selección de plataformas y la elección de formatos] adecuados según las características de cada canal digital. La articulación de estos elementos contribuye al cumplimiento de las metas comerciales y comunicativas establecidas por la organización.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img3.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Entre sus principales aportes se encuentran:
          br
          ul.fa-ul.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Incrementar el reconocimiento y posicionamiento de marca. 
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Promocionar productos y servicios a públicos específicos. 
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Generar interacción y participación de los usuarios. 
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Dirigir tráfico hacia sitios web y plataformas digitales. 
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Favorecer la captación de clientes potenciales. 
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 Apoyar el cumplimiento de objetivos comerciales y de #[i marketing].
          br
      .row.justify-content-center.align-items-center
        .col-xl.mb-4.mb-lg-0
          p Además de su función promocional, las campañas en redes sociales facilitan la #[b recopilación de información] sobre el comportamiento de las audiencias mediante #[b herramientas de análisis] incorporadas en las plataformas digitales. Estas permiten evaluar variables relacionadas con #[b alcance, interacción, tráfico y conversiones generadas] por contenidos orgánicos y anuncios publicitarios.
          p.mb-0 La información obtenida mediante métricas e indicadores clave de desempeño (#[i Key Performance Indicators] - KPI) permite evaluar el cumplimiento de los objetivos establecidos, identificar oportunidades de mejora y optimizar las estrategias implementadas. De esta manera, las organizaciones fortalecen la toma de decisiones basada en datos y mejoran el rendimiento de sus campañas.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img4.png', alt='').m-auto
      Separador
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Características y beneficios de las campañas digitales
      p.mb-5 Las campañas digitales integran herramientas, contenidos y recursos tecnológicos que facilitan la gestión de estrategias de comunicación y marketing en entornos digitales. Sus principales características son las siguientes:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Uso de plataformas digitales
                  p.mb-0 Se desarrollan a través de redes sociales, motores de búsqueda, sitios web y otros canales digitales que facilitan la distribución de contenidos y la comunicación con las audiencias.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Segmentación de audiencias
                  p.mb-0 Permiten dirigir mensajes a públicos específicos de acuerdo con variables demográficas, intereses, ubicación geográfica y comportamiento digital.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Personalización de contenidos
                  p.mb-0 Facilitan la adaptación de mensajes y formatos según las características y necesidades de cada segmento de audiencia.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Interacción con los usuarios
                  p.mb-0 Favorecen la comunicación bidireccional mediante comentarios, reacciones, mensajes y otras formas de participación digital.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Medición en tiempo real
                  p.mb-0 Incorporan herramientas analíticas para evaluar continuamente el rendimiento de las campañas mediante métricas e indicadores de desempeño.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Optimización continua
                  p.mb-0 Permiten realizar ajustes estratégicos a partir de los resultados obtenidos y del comportamiento de las audiencias.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img10.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Estas características generan beneficios que fortalecen la gestión de las organizaciones en los entornos digitales:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img11.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Visibilidad digital
              p.mb-0.text-center Contribuye a fortalecer la presencia de la organización en medios digitales.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img12.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Promoción de productos y servicios
              p.mb-0.text-center Facilita la difusión de ofertas comerciales mediante contenidos adaptados a diferentes audiencias.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img13.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Relación con las audiencias
              p.mb-0.text-center Fortalece la comunicación y la participación de los usuarios.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img14.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Generación de comunidades digitales
              p.mb-0.text-center Favorece la fidelización y el compromiso con la organización.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img15.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Obtención de información
              p.mb-0.text-center Permite recopilar datos relacionados con preferencias e intereses de las audiencias.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img16.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Evaluación de resultados
              p.mb-0.text-center Facilita el análisis del desempeño de las estrategias implementadas.
          p.mb-0 En conjunto, estas características y beneficios convierten las campañas digitales en un componente fundamental para la gestión de estrategias de comunicación y #[i marketing] en entornos digitales.
          Separador
          #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 2.2 Tipos de campañas en redes sociales
          p.mb-5 Las campañas en redes sociales pueden clasificarse según sus #[b objetivos, formatos y métodos de difusión]. La selección del tipo de campaña depende de factores como el público objetivo, el presupuesto disponible, las metas comerciales y los resultados esperados dentro de la estrategia digital. Entre las modalidades más utilizadas se encuentran las campañas orgánicas y las campañas pagas, cada una con características, alcances y formas de implementación particulares.
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Campañas orgánicas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img17.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Campañas orgánicas
              p.mb-0 Corresponden a estrategias desarrolladas #[b sin inversión publicitaria directa] dentro de las plataformas digitales. Su alcance depende de factores como la calidad del contenido, la frecuencia de publicación, el uso de tendencias y el nivel de interacción generado por las audiencias. Se utilizan para fortalecer la relación con las comunidades digitales, mejorar el posicionamiento de marca y fomentar la construcción de audiencias fieles mediante la participación natural de los usuarios.
        .py-3.py-md-4(titulo="Campañas pagas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img18.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Campañas pagas
              p.mb-0 Son estrategias publicitarias que requieren #[b inversión económica] para promocionar contenidos dentro de las plataformas digitales. Permiten aumentar el alcance de las publicaciones y dirigir mensajes a audiencias específicas mediante herramientas de segmentación. Incluyen formatos como publicaciones patrocinadas, anuncios en historias, videos promocionales y campañas de conversión. Además, facilitan la obtención de resultados más rápidos y proporcionan métricas detalladas para evaluar el rendimiento de las acciones publicitarias.
      p.mb-0 La combinación de campañas orgánicas y pagas permite a las organizaciones ampliar el alcance de sus contenidos, fortalecer la interacción con las audiencias y optimizar los resultados obtenidos en redes sociales. La elección de una u otra modalidad dependerá de los objetivos estratégicos, los recursos disponibles y las necesidades de comunicación de cada organización.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Objetivos de campañas digitales
      p Los objetivos de las campañas digitales corresponden a los resultados que las organizaciones esperan alcanzar mediante la implementación de estrategias de marketing en redes sociales. Estos objetivos orientan #[b el desarrollo de contenidos, la segmentación de audiencias y la selección de métricas e indicadores] para evaluar el rendimiento de las campañas.
      p.mb-5 La definición de objetivos claros permite establecer #[b acciones estratégicas] alineadas con #[b las necesidades comerciales y comunicativas de la organización]. Asimismo, facilita la medición de resultados, la optimización de las campañas y la toma de decisiones basada en datos. Los objetivos más utilizados en campañas digitales se relacionan con el posicionamiento, la interacción y la obtención de resultados comerciales.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Reconocimiento de marca
                  p.mb-0 Busca aumentar la visibilidad y recordación de una empresa, producto o servicio dentro de las plataformas digitales. Para ello, se utilizan contenidos visuales, videos, historias y estrategias de difusión orientadas a fortalecer la identidad de marca y ampliar su alcance entre las audiencias.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img19.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Interacción con las audiencias
                  p.mb-0 Promueve la participación de los usuarios mediante comentarios, reacciones, mensajes, compartidos y otras acciones que fortalecen la comunicación entre la organización y sus comunidades digitales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img20.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Generación de tráfico web
                  p.mb-0 Tiene como propósito dirigir usuarios hacia sitios web, blogs, tiendas virtuales o páginas de destino, incrementando las oportunidades de contacto y conversión.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img21.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Captación de clientes potenciales
                  p.mb-0 Busca identificar usuarios interesados en los productos o servicios de la organización mediante formularios, contenidos especializados y campañas segmentadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img22.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Conversión
                  p.mb-0 Se orienta a lograr acciones específicas por parte de los usuarios, como compras, registros, descargas, clics o solicitudes de información, transformando la interacción digital en resultados medibles.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img23.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Fidelización
                  p.mb-0 Pretende fortalecer las relaciones con los usuarios mediante contenidos relevantes y experiencias positivas que favorezcan el compromiso y la permanencia de las audiencias.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img24.png', alt='' style="max-width: 500px").m-auto
      p Cada objetivo requiere métricas e indicadores específicos para evaluar su nivel de cumplimiento. Por esta razón, las organizaciones seleccionan indicadores relacionados con alcance, interacción, tráfico, generación de clientes potenciales y conversiones, de acuerdo con las metas definidas para cada campaña.
      p.mb-0 La adecuada relación entre objetivos, estrategias y métricas permite evaluar el rendimiento de las campañas digitales, optimizar los recursos disponibles y fortalecer los resultados obtenidos en las plataformas sociales.
              
</template>

<script>
export default {
  name: 'Tema2',
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
