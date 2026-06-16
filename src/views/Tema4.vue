<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Anatomía de contenidos en redes sociales
      p Los contenidos digitales constituyen uno de los #[b componentes fundamentales de las publicaciones en redes sociales]. Su anatomía hace referencia a la estructura y composición de los elementos que integran una pieza de contenido digital. Estos elementos incluyen #[b imágenes, videos, textos, llamados a la acción, etiquetas y recursos interactivos] que se combinan para transmitir mensajes de manera organizada y coherente.
      p.mb-5 La adecuada integración de estos componentes favorece la claridad de la información, la coherencia con la identidad organizacional y el cumplimiento de los objetivos definidos para cada publicación.
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Características y aportes de los contenidos digitales
      p.mb-5 Los contenidos digitales poseen características que facilitan su creación, distribución y gestión en entornos digitales.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Dinamismo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite la actualización constante de contenidos y su adaptación a tendencias y cambios del entorno digital.
            .row(titulo="Interactividad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Favorece la participación de los usuarios mediante comentarios, reacciones, compartidos y otras dinámicas digitales.
            .row(titulo="Adaptabilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Facilita la adecuación de los contenidos a diferentes plataformas, formatos y dispositivos tecnológicos.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img1.png", alt="" ).m-auto
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img2.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Medición y análisis").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permite obtener métricas relacionadas con alcance, interacción, clics y conversiones.
            .row(titulo="Personalización").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Posibilita diseñar contenidos ajustados a las características de distintos segmentos de audiencia.
            .row(titulo="Accesibilidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Facilita el acceso a la información desde diversos dispositivos y contextos de uso.
      p.mb-5 Estas características aportan valor a la gestión de contenidos en redes sociales:
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img3.jpg')})` }")
        .bloque-texto-g__texto.p-4
          ul.fa-ul.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Posicionamiento de marca:] fortalece la identidad y el reconocimiento de la organización dentro de los entornos digitales.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Captación de atención:] incrementa el interés de las audiencias hacia contenidos, productos, servicios o iniciativas institucionales.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Construcción de comunidades digitales:] fomenta la participación continua de los usuarios y fortalece los vínculos con la organización.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Apoyo a objetivos comerciales:] respalda el logro de metas relacionadas con visibilidad, generación de oportunidades de negocio y crecimiento organizacional.
          br
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Formatos de contenido en redes sociales
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-3(data-aos="fade-right")
            p.mb-0 Los formatos de contenido corresponden a las diferentes maneras en que la información puede presentarse dentro de #[b las plataformas digitales]. Cada formato posee características específicas relacionadas con #[b alcance, interacción, visibilidad y objetivos de comunicación], lo que permite a las organizaciones adaptar sus estrategias según las necesidades de las audiencias y los propósitos de cada campaña.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t4/img4.jpg', alt='').m-auto
        .col-xl
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/t4/img5.svg', alt='' style="width: 70px")
          p.mb-0 La selección adecuada de formatos contribuye al fortalecimiento de #[b la presencia digital] y al #[b mejoramiento del rendimiento de las campañas en redes sociales]. Además, facilita la transmisión de mensajes de manera clara, dinámica y atractiva para los usuarios.
      p.mb-5 Las plataformas digitales ofrecen diversos formatos orientados a promover #[b experiencias visuales, audiovisuales e interactivas] que favorecen el consumo de información y la participación de las audiencias: 
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Imágenes y fotografías
                  p.mb-0 Permiten transmitir información de manera rápida y atractiva. Se utilizan para promocionar productos, fortalecer la identidad de marca y aumentar el reconocimiento entre las audiencias digitales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Videos y #[i reels]
                  p.mb-0 Facilitan la presentación de contenidos dinámicos mediante recursos audiovisuales de corta o larga duración. Favorecen el alcance y la interacción debido a sus altos niveles de consumo y participación.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Historias digitales
                  p.mb-0 Corresponden a publicaciones temporales que permanecen visibles durante un periodo determinado. Se utilizan para compartir contenido promocional, informativo e interactivo relacionado con campañas y actividades organizacionales.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Infografías y contenido gráfico
                  p.mb-0 Integran elementos visuales y textuales para presentar información de manera organizada. Facilitan la explicación de conceptos, estadísticas, procesos y resultados.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Transmisiones en vivo
                  p.mb-0 Permiten la interacción en tiempo real con las audiencias mediante eventos, lanzamientos, demostraciones y actividades de comunicación directa.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img10.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Antes de abordar los formatos orientados a #[b la promoción y la participación], es importante destacar que estos recursos permiten fortalecer la interacción con las audiencias y potenciar el alcance de las estrategias digitales.
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Contenido interactivo")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img11.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Contenido interactivo
              p.mb-0 Incluye encuestas, preguntas, concursos, formularios y dinámicas diseñadas para incentivar la participación de los usuarios y fortalecer el vínculo con las comunidades digitales.
        .py-3.py-md-4(titulo="Publicaciones patrocinadas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img12.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Publicaciones patrocinadas
              p.mb-0 Corresponden a contenidos promocionados mediante inversión publicitaria dentro de las plataformas digitales para ampliar el alcance y llegar a audiencias específicas.
        .py-3.py-md-4(titulo="Anuncios digitales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img13.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Anuncios digitales
              p.mb-0 Son piezas publicitarias orientadas a promocionar productos, servicios o campañas mediante formatos visuales y audiovisuales configurados según objetivos de reconocimiento, tráfico, interacción o conversión.
        .py-3.py-md-4(titulo="Llamados a la acción")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img14.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Llamados a la acción
              p.mb-0 Son elementos que incentivan respuestas específicas por parte de los usuarios, como registrarse, comprar, descargar información o interactuar con una publicación.
        .py-3.py-md-4(titulo="Formularios de captación")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img15.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Formularios de captación
              p.mb-0 Facilitan la recopilación de información de usuarios interesados en productos, servicios o campañas, apoyando procesos de generación de clientes potenciales.
      p.mb-0 La combinación adecuada de formatos visuales, audiovisuales, interactivos y publicitarios permite desarrollar estrategias de contenido más efectivas, fortalecer la comunicación con las audiencias y contribuir al cumplimiento de los objetivos de #[i marketing] en redes sociales.
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Propósitos según formato de contenido
      p Cada formato de contenido en redes sociales cumple funciones específicas relacionadas con #[b la comunicación, el posicionamiento, la interacción y la conversión]. La selección adecuada de formatos permite fortalecer las estrategias digitales, mejorar el rendimiento de las campañas y optimizar la comunicación con las audiencias.
      p.mb-5 Las organizaciones seleccionan los formatos de contenido de acuerdo con los objetivos comerciales definidos y las características de los usuarios a quienes se dirigen las publicaciones. Esta relación facilita el desarrollo de estrategias alineadas con las necesidades de #[i marketing] y comunicación. Los formatos digitales pueden utilizarse con diferentes propósitos dentro de las estrategias desarrolladas en redes sociales: 
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t4/img16.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img17.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Reconocimiento de marca
                  p.mb-0 Busca aumentar la visibilidad y recordación de la organización mediante contenidos visuales y audiovisuales orientados al alcance masivo y al fortalecimiento de la identidad corporativa.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img18.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Interacción con las audiencias
                  p.mb-0 Promueve la participación de los usuarios mediante publicaciones interactivas, encuestas, preguntas, concursos y dinámicas digitales.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img19.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Generación de tráfico
                  p.mb-0 Dirige usuarios hacia sitios web, blogs, tiendas virtuales o páginas de destino mediante enlaces y contenidos estratégicos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img20.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Conversión
                  p.mb-0 Incentiva acciones específicas como compras, registros, descargas o solicitudes de información mediante llamados a la acción y contenidos persuasivos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t4/img21.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Fidelización
                  p.mb-0 Fortalece la relación con las audiencias a través de contenidos relevantes y experiencias que promueven el compromiso y la permanencia de los usuarios.
          p.mb-5 La efectividad de cada formato puede evaluarse mediante #[b métricas e indicadores] que permiten analizar el comportamiento de las audiencias y el cumplimiento de los objetivos establecidos.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 1.
            span Relación entre formatos de contenido, métricas y objetivos
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Formato de contenido
                  th.ajuste-border-tabla.texto-left Métricas relacionadas
                  th.texto-left Objetivo principal
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Imágenes y publicaciones
                  td.ajuste-border-tabla.texto-left Alcance, reacciones y comentarios.
                  td.texto-left Reconocimiento e interacción.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Videos y #[i reels]
                  td.ajuste-border-tabla.texto-left Reproducciones, tiempo de visualización y compartidos.
                  td.texto-left Alcance y participación.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Historias digitales
                  td.ajuste-border-tabla.texto-left Visualizaciones, respuestas y clics.
                  td.texto-left Interacción rápida.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Contenido interactivo
                  td.ajuste-border-tabla.texto-left Participación, respuestas y clics.
                  td.texto-left Compromiso de usuarios.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Anuncios digitales
                  td.ajuste-border-tabla.texto-left CTR, conversiones y CPC.
                  td.texto-left Resultados comerciales.
      p.mb-5 La interpretación de estas métricas permite identificar el nivel de efectividad de cada formato dentro de las campañas digitales. 
      .caja-2.mb-0(data-aos="zoom-in")
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t4/img22.png', alt='').m-auto
          .col-xl.fit___box_container
            p.mb-0 #[b Por ejemplo,] un video con un alto número de reproducciones y compartidos puede indicar un adecuado alcance e interés por parte de las audiencias, mientras que las publicaciones interactivas facilitan el análisis de la participación y el compromiso de los usuarios. La relación entre formatos de contenido, objetivos y métricas contribuye a la optimización de las estrategias digitales y al mejoramiento continuo del rendimiento de las campañas desarrolladas en redes sociales.

</template>

<script>
export default {
  name: 'Tema4',
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
