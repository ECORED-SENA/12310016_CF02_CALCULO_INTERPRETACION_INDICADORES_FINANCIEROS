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
      tema: 'Cuestionario de verificación sobre interpretación financiera para la toma de decisiones',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión e interpretación de los resultados financieros para relacionarlos con decisiones empresariales sobre liquidez, cartera, inventarios, endeudamiento, rentabilidad, punto de equilibrio, apalancamiento operativo, apalancamiento financiero y escenarios financieros.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de la interpretación financiera?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Presentar los indicadores financieros en tablas sin relacionarlos con otros resultados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comprender los resultados financieros y relacionarlos con decisiones empresariales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Calcular nuevamente los estados financieros para verificar saldos contables.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Comparar únicamente las ventas de un periodo frente al periodo anterior.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La interpretación financiera permite pasar del dato numérico a una lectura útil para la toma de decisiones.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Una empresa presenta razón corriente aceptable, pero prueba ácida menor que 1. ¿Cuál interpretación es más adecuada?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La empresa tiene liquidez sólida porque el activo corriente supera el pasivo corriente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La empresa no tiene obligaciones de corto plazo que afecten su operación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La empresa debe concentrarse solo en aumentar ventas para mejorar su rentabilidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La empresa debe revisar si su liquidez depende demasiado de inventarios o cartera.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La prueba ácida excluye inventarios y muestra una lectura más exigente de la capacidad de pago inmediata.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Si los días de cartera superan la política de crédito definida por la empresa, ¿qué decisión inicial es más pertinente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Revisar la gestión de cobro, los vencimientos y las condiciones de crédito otorgadas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Aumentar los inventarios para compensar la demora en los recaudos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Interpretar que la empresa tiene mayor rentabilidad por vender a crédito.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Reducir el análisis de liquidez porque la venta ya fue registrada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Una cartera lenta puede afectar el flujo de caja y la capacidad de pago.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál situación representa una alerta de actividad o gestión?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La empresa mantiene una razón corriente superior a 1 durante dos periodos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El patrimonio aumenta por capitalización de utilidades.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los inventarios permanecen más tiempo del esperado antes de venderse.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El margen bruto se mantiene estable frente al periodo anterior.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Inventarios con baja rotación pueden inmovilizar recursos y afectar la liquidez.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Una empresa aumenta su endeudamiento y disminuye su margen neto. ¿Cuál lectura es más prudente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La empresa puede estar enfrentando mayor presión financiera y menor capacidad de generar utilidad final.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Aumentar ventas a crédito para mejorar el volumen comercial y elevar los activos corrientes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Incrementar costos fijos para ampliar la operación y compensar la baja rentabilidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evaluar únicamente el margen bruto porque resume la situación financiera completa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Más deuda y menor rentabilidad pueden afectar la capacidad de pago y la sostenibilidad financiera.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué indica un margen neto bajo en una empresa con ventas crecientes?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que las ventas están generando suficiente utilidad final sin necesidad de revisión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que se deben revisar costos, gastos, descuentos, intereses o impuestos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Que la empresa necesariamente tiene problemas de cartera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que el activo corriente es insuficiente para cubrir deudas de corto plazo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta Un margen neto bajo indica que una pequeña parte de las ventas queda como utilidad final.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es la utilidad del punto de equilibrio en la toma de decisiones?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Calcular la proporción de deuda frente al total de activos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Medir la rentabilidad obtenida sobre el patrimonio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Evaluar la recuperación de cartera frente a la política de crédito.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Determinar el nivel mínimo de ventas necesario para cubrir costos.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El punto de equilibrio permite establecer la meta mínima de operación para no generar pérdida.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Si las ventas reales están apenas por encima del punto de equilibrio, ¿qué interpretación es más adecuada?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La empresa presenta alta rentabilidad porque ya superó el punto de equilibrio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La empresa no necesita revisar costos fijos porque ya no tiene riesgo operativo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La empresa tiene un margen de seguridad reducido y debe vigilar sus ventas y costos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La empresa debe aumentar deuda para mejorar automáticamente su utilidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Estar cerca del punto de equilibrio indica que una caída en ventas puede afectar rápidamente la utilidad.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué efecto tendría un aumento de costos fijos, si el precio y el costo variable no cambian?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Disminuye el punto de equilibrio porque la empresa requiere menos ventas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aumenta el punto de equilibrio porque se necesita cubrir una estructura fija mayor.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'No afecta el punto de equilibrio porque solo cambian los costos variables.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Mejora el margen de contribución porque los costos fijos se distribuyen mejor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta Al aumentar los costos fijos, la empresa necesita vender más para cubrir su operación.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué representa el margen de contribución en el análisis del punto de equilibrio?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La utilidad neta después de descontar gastos financieros e impuestos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El porcentaje de deuda que financia los activos de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El valor disponible después de cubrir costos variables para atender costos fijos y utilidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El efectivo disponible después de pagar obligaciones corrientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El margen de contribución es la base para calcular el punto de equilibrio.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué mide el apalancamiento operativo?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La sensibilidad de la utilidad operacional frente a cambios en las ventas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La capacidad de pago de corto plazo frente a obligaciones corrientes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La participación de los pasivos dentro del total de activos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El rendimiento obtenido por los propietarios sobre el patrimonio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta El apalancamiento operativo muestra el efecto de los costos fijos sobre la utilidad operacional.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Una empresa tiene apalancamiento operativo alto. ¿Cuál decisión debe analizar con mayor cuidado?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Clasificar cartera por edades para mejorar recaudo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Aumentar costos fijos sin verificar estabilidad de ventas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Comparar el margen neto con el periodo anterior.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Revisar la presentación de notas a los estados financieros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Con alto apalancamiento operativo, una caída en ventas puede afectar con fuerza la utilidad operacional.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué mide el apalancamiento financiero?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El tiempo promedio que tardan los inventarios en venderse.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La participación de los costos variables dentro de las ventas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La diferencia entre activo corriente y pasivo corriente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El efecto de los gastos financieros sobre la utilidad antes de impuestos o utilidad final.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El apalancamiento financiero permite analizar el impacto de la deuda y los intereses en los resultados.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Si la cobertura de intereses disminuye, ¿qué situación debe revisarse?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La participación de inventarios dentro del activo corriente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El tiempo promedio de recuperación de cartera.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La capacidad de la utilidad operacional para cubrir los gastos financieros.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La composición del patrimonio frente al capital social.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Una menor cobertura de intereses indica menor margen para atender gastos financieros.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué expresa el apalancamiento total?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La capacidad de la empresa para pagar obligaciones corrientes con efectivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El porcentaje de utilidad neta generado por cada peso vendido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La relación entre inventarios, cartera y proveedores dentro de la operación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El efecto conjunto de los costos fijos operativos y los gastos financieros sobre los resultados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El apalancamiento total integra el riesgo operativo y financiero.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            '¿Para qué sirve construir escenarios financieros en hoja electrónica?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Para reemplazar la interpretación financiera por cálculos automáticos sin revisión.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Para analizar cómo cambian los resultados al modificar variables como ventas, costos, gastos o deuda.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Para presentar únicamente los estados financieros en un formato visual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Para eliminar la necesidad de comparar resultados entre periodos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. Los escenarios permiten anticipar efectos financieros antes de tomar decisiones.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es una buena práctica al trabajar escenarios financieros?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Organizar resultados, interpretarlos y presentar conclusiones y recomendaciones para decidir.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Mostrar todas las fórmulas utilizadas sin necesidad de explicar los resultados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Sustituir los estados financieros por una tabla de indicadores.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Presentar solo los resultados favorables para respaldar la gestión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El informe financiero convierte los cálculos en información comprensible y útil para la gestión.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Cuál es el propósito del informe financiero?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sustituir los estados financieros por una tabla de indicadores.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mostrar todas las fórmulas utilizadas sin necesidad de explicar los resultados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Organizar resultados, interpretarlos y presentar conclusiones y recomendaciones para decidir.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Presentar solo los resultados favorables para respaldar la gestión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. El informe financiero convierte los cálculos en información comprensible y útil para la gestión.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Cuál recomendación corresponde a una acción correctiva?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Hacer seguimiento mensual a indicadores para evitar deterioro futuro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Analizar rentabilidad por producto aunque no exista una alerta específica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Comparar escenarios antes de adquirir nueva deuda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Recuperar cartera vencida cuando los días de cartera superan ampliamente la política de crédito.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta.   Una acción correctiva atiende un problema financiero ya identificado.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'Si una empresa presenta baja prueba ácida, cartera lenta, endeudamiento alto y margen neto reducido, ¿cuál decisión integral es más adecuada?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Aumentar ventas a crédito para mejorar el volumen comercial y elevar los activos corrientes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Revisar recaudo, inventarios, deuda, costos, gastos y flujo de caja antes de asumir nuevas obligaciones.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Incrementar costos fijos para ampliar la operación y compensar la baja rentabilidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Evaluar únicamente el margen bruto porque resume la situación financiera completa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Muy bien! Ha acertado la respuesta. La combinación de baja liquidez, cartera lenta, deuda alta y baja rentabilidad exige una revisión integral antes de tomar decisiones financieras.',
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
