<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Microcontroladore sensores',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar comprensión el uso adecuado de las herramientas básicas en la ventana <em>Board</em> del <em>software</em> EAGLE.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es una característica que diferencia al marketing en redes sociales del marketing tradicional?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utiliza principalmente medios físicos para la difusión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Se orienta exclusivamente a campañas publicitarias pagas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Permite una interacción directa entre marcas y usuarios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Depende únicamente de contenidos audiovisuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Una organización desea aumentar el reconocimiento de su marca en redes sociales. ¿Cuál objetivo está persiguiendo principalmente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Optimizar los procesos administrativos internos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar la notoriedad y presencia de la marca.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el tiempo de producción de contenidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Fortalecer la gestión documental de la organización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes acciones corresponde a una estrategia de interacción en redes sociales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar el presupuesto publicitario mensual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Programar publicaciones sin analizar respuestas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Realizar encuestas y responder comentarios.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Modificar el diseño visual del sitio web.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué elemento es indispensable para desarrollar una campaña digital efectiva?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener una frecuencia alta de publicaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Definir un presupuesto fijo mensual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Definir objetivos claros y medibles.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Utilizar varias plataformas digitales al mismo tiempo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la principal diferencia entre una campaña orgánica y una campaña paga?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La campaña orgánica genera más conversiones que la paga.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La campaña paga utiliza únicamente contenido audiovisual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La campaña orgánica requiere menor planeación estratégica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La campaña paga implica inversión publicitaria directa.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'Una campaña orientada a obtener registros de usuarios o ventas está enfocada principalmente en:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Conversión y generación de resultados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Posicionamiento institucional de largo plazo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incremento del reconocimiento de marca.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Expansión de canales de comunicación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué relación existe entre los objetivos comerciales y las campañas digitales?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Las campañas sustituyen los objetivos comerciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los objetivos se establecen después de finalizar la campaña.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los objetivos y las campañas son independientes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los objetivos orientan las estrategias y acciones de la campaña.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Dentro del embudo de conversión, la etapa en la que el usuario realiza la acción esperada corresponde a:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Atracción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fidelización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Conversión.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Consideración.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de los siguientes criterios se utiliza para segmentar audiencias digitales?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Edad, intereses y comportamiento digital.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cantidad de productos disponibles en inventario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Número de sedes operativas de la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tamaño de las instalaciones de la empresa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Cuál de las siguientes métricas permite conocer cuántas personas únicas visualizaron un contenido?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Alcance.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Frecuencia.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Retención.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Conversión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué diferencia principalmente a una métrica de un KPI dentro de una campaña digital?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ambos conceptos representan exactamente la misma información.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una métrica mide resultados y un KPI evalúa indicadores vinculados a objetivos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un KPI se utiliza únicamente en campañas pagas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Las métricas solo pueden aplicarse en redes sociales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            '¿Cuál de los siguientes KPI está más relacionado con el objetivo de generar interacción en redes sociales?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Costo por adquisición.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tasa de rebote.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Engagement.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Retorno de inversión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            '¿Qué elemento debe considerarse primero al elaborar un plan de medición para una campaña digital?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de publicaciones programadas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los objetivos que se desean alcanzar.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El presupuesto destinado al diseño gráfico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La duración de los videos promocionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Cuál de las siguientes opciones corresponde a una herramienta externa de análisis digital?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Google Analytics.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Instagram Stories.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Facebook Feed.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'TikTok Creator Center.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es el propósito principal de segmentar una audiencia en una campaña digital?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir la cantidad de contenido publicado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Dirigir mensajes a grupos con características similares.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar la frecuencia de publicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Optimizar la comunicación con públicos específicos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'Una empresa desea mostrar anuncios únicamente a personas interesadas en deportes y actividad física. ¿Qué tipo de segmentación está utilizando?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Segmentación geográfica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Segmentación temporal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Segmentación organizacional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Segmentación por intereses.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué herramienta integrada permite consultar métricas directamente dentro de una red social?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Procesador de texto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Panel de análisis de la plataforma.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Editor de imágenes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sistema de almacenamiento digital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es una ventaja de utilizar herramientas analíticas en campañas digitales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Permiten comprender el comportamiento de los usuarios.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Facilitan la creación automática de contenido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Sustituyen los objetivos de la campaña.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Garantizan el éxito comercial de la estrategia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué información aporta una métrica de conversión?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cantidad de seguidores obtenidos durante un periodo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Nivel de interacción con las publicaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Usuarios que completaron una acción definida.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Número de contenidos publicados en la campaña.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Por qué es importante relacionar las métricas con los objetivos comerciales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque mejora automáticamente la segmentación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Porque facilita la programación de contenidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque incrementa el alcance de las campañas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque permite evaluar el cumplimiento de las metas establecidas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
