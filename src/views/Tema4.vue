<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Hoja electrónica para escenarios financieros
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 La hoja electrónica permite calcular indicadores y simular cambios en variables financieras para comparar alternativas, anticipar riesgos y apoyar la toma de decisiones (Office, s. f.).
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Organización de datos para interpretar indicadores
      p.mb-5 La organización de datos es esencial para construir escenarios financieros. La hoja electrónica debe separar entradas, supuestos, fórmulas, resultados, interpretación y decisiones mediante los siguientes pasos:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Registrar datos de entrada
                p.mb-0 Ingrese la información financiera necesaria, como ventas, costos, gastos, activos, pasivos, patrimonio y demás datos requeridos para el análisis. Ejemplo: ventas, costos, gastos, activos, pasivos.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img2.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img3.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Definir supuestos
                p.mb-0 Establezca las condiciones del análisis, como periodo, porcentajes de variación, metas, políticas internas o escenarios que se van a comparar. Ejemplo: aumento de ventas del 10 %, reducción de costos del 5 %.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Construir fórmulas
                p.mb-0 Use fórmulas en la hoja electrónica para calcular indicadores, punto de equilibrio, apalancamientos y demás resultados financieros. Ejemplo: razón corriente, margen neto, punto de equilibrio.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img4.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img5.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Obtener resultados
                p.mb-0 Revise los valores calculados y verifique que correspondan con los datos ingresados y las fórmulas aplicadas. Ejemplo: nueva utilidad, nuevo margen, nuevo nivel de endeudamiento.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Interpretar información
                p.mb-0 Analice qué significan los resultados obtenidos y qué alertas, fortalezas o riesgos financieros pueden indicar. Ejemplo: mejora de liquidez, aumento del riesgo, reducción del margen.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img6.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img7.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Asociar decisiones
                p.mb-0 Relacione los resultados con posibles decisiones sobre liquidez, endeudamiento, rentabilidad, costos, ventas o financiación. Ejemplo: ajustar precios, controlar gastos, revisar deuda.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p Este ejemplo compara un escenario actual con uno proyectado mediante una hoja organizada:
          .caja-3(data-aos="fade-right")
            h5 Ejemplo aplicado
            p Una empresa desea analizar qué ocurriría si sus ventas aumentan 12 %, pero sus costos variables también crecen 8 %. Para ello, debe organizar una hoja con ventas actuales, costos actuales, porcentaje de cambio, ventas proyectadas, costos proyectados y utilidad esperada.
            p.mb-0 La organización de los datos permite comparar escenarios y evaluar cómo los cambios afectan la utilidad.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img8.png', alt='').m-auto
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Construcción de escenarios con cambios en ventas, costos y gastos
      p.mb-5 Un escenario financiero simula cómo los cambios en ventas, costos, gastos o financiación afectan los resultados de la empresa. Los escenarios pueden basarse en condiciones actuales, favorables, conservadoras o combinadas.
      .bg-1
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img9.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Escenario base
              p.mb-0.text-center Mantiene la situación actual.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img10.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Escenario optimista
              p.mb-0.text-center Supone condiciones favorables.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img11.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Escenario conservador
              p.mb-0.text-center Plantea condiciones de riesgo.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img12.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Escenario de costos
              p.mb-0.text-center Evalúa cambios en costos o gastos.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img13.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Escenario de financiación
              p.mb-0.text-center Analiza cambios por deuda o intereses.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img14.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Escenario combinado
              p.mb-0.text-center Integra varias variables al mismo tiempo.
          p.mb-5 Este caso analiza si el aumento en ventas mejora la utilidad cuando también varían los costos variables:
          .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img15.jpg')})` }")
            .bloque-texto-g__texto.p-4
              h5 Ejemplo aplicado
              br
              br
              p Una empresa presenta ventas actuales de $ 500.000.000, costos variables de $ 300.000.000 y gastos fijos de $ 120.000.000. Si se proyecta un aumento de ventas del 10 %, las ventas pasarían a $ 550.000.000. Sin embargo, si los costos variables también aumentan proporcionalmente, no toda la variación en ventas se convierte en utilidad.
              br
              br
              p.mb-0 La hoja electrónica permite proyectar la utilidad y orientar decisiones sobre ventas, costos, gastos y precios.
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Escenarios de liquidez, endeudamiento y rentabilidad
      p.mb-5 Los escenarios financieros permiten anticipar decisiones al analizar cómo los cambios en las condiciones de la empresa afectan la liquidez, el endeudamiento y la rentabilidad. Estos son:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img16.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Aumento de cuentas por cobrar").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Afecta liquidez y actividad; se recomienda fortalecer cobro.
            .row(titulo="Aumento de inventarios").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Afecta prueba ácida y rotación; se deben revisar compras y productos lentos.
            .row(titulo="Nuevo crédito bancario").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Afecta endeudamiento y cobertura de intereses; se deben evaluar tasas, plazos y capacidad de pago.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Aumento de costos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Reduce márgenes; se recomienda revisar proveedores, precios y descuentos.
            .row(titulo="Aumento de gastos fijos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Reduce utilidad operativa; se deben controlar gastos y presupuestos.
            .row(titulo="Disminución de ventas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Afecta rentabilidad y liquidez; se recomienda ajustar metas, costos y flujo de caja.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img17.png", alt="" ).m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t4/img18.png', alt='').m-auto
        .col-xl
          p Este ejemplo analiza cómo una nueva obligación afecta la liquidez y puede generar una alerta financiera.
          .caja-3(data-aos="fade-left")
            h5 Ejemplo aplicado
            p Una empresa tiene una razón corriente de 1,5. Si adquiere una nueva obligación de corto plazo sin aumentar sus activos corrientes, la razón corriente puede disminuir. La hoja electrónica permite simular ese nuevo pasivo y observar si la liquidez se mantiene en un nivel aceptable o si se genera una alerta.
            p.mb-0 La simulación permite evaluar cómo la reducción de gastos financieros mejora la utilidad neta y el margen neto antes de modificar la estructura financiera.
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 Escenarios de punto de equilibrio
      p.mb-5 Los escenarios de punto de equilibrio permiten analizar cómo cambia el nivel mínimo de ventas cuando se modifican el precio de venta, el costo variable o los costos fijos. Los escenarios posibles son:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img19.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Aumento de precio").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Puede disminuir el punto de equilibrio si no cae la demanda.
            .row(titulo="Reducción de precio").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Aumenta el punto de equilibrio al reducir el margen.
            .row(titulo="Aumento de costo variable").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Aumenta el punto de equilibrio.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Reducción de costo variable").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Disminuye el punto de equilibrio.
            .row(titulo="Aumento de costos fijos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Aumenta la meta mínima de ventas.
            .row(titulo="Reducción de costos fijos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Disminuye la presión sobre las ventas mínimas.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img20.png", alt="" ).m-auto
      p.mb-5 El siguiente caso permite analizar el tema abordado:
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img21.jpg')})` }")
        .bloque-texto-g__texto.p-4
          h5 Ejemplo aplicado
          br
          br
          p Una empresa vende un producto a $ 80.000, con costo variable de $ 50.000 y costos fijos de $ 18.000.000. Su margen de contribución unitario es de $ 30.000 y su punto de equilibrio es de 600 unidades. Si el costo variable sube a $ 55.000, el margen baja a $ 25.000 y el nuevo punto de equilibrio será de 720 unidades.
          br
          br
          p.mb-0 El aumento del costo variable eleva las unidades necesarias para cubrir los costos fijos, por lo que la empresa debe revisar proveedores, precios, descuentos y eficiencia operativa.
      Separador
      #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.5 Escenarios de apalancamiento operativo y financiero
      p.mb-5 Los escenarios de apalancamiento permiten evaluar cómo los cambios en ventas afectan la utilidad operacional y la utilidad antes de impuestos. Su análisis es útil cuando existen costos fijos o gastos financieros relevantes. Estos son:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aumento de ventas
                  p.mb-0 Puede mejorar la utilidad operacional más que proporcionalmente si existen costos fijos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img22.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Disminución de ventas
                  p.mb-0 Puede reducir la utilidad operacional en mayor proporción por efecto de costos fijos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img23.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aumento de costos fijos
                  p.mb-0 Incrementa la sensibilidad frente a cambios en ventas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img24.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Aumento de gastos financieros
                  p.mb-0 Aumenta la presión sobre la utilidad antes de impuestos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img25.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Disminución de gastos financieros
                  p.mb-0 Reduce el riesgo financiero.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img26.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Cambio en margen de contribución
                  p.mb-0 Modifica la capacidad para cubrir costos fijos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t4/img27.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Este caso simula cómo una disminución en las ventas afecta la utilidad operacional y la utilidad antes de impuestos:
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img28.jpg')})` }")
        .bloque-texto-g__texto.p-4
          h5 Ejemplo aplicado
          br
          br
          p Una empresa tiene ventas por $ 100.000.000, margen de contribución de $ 40.000.000, costos fijos de $ 25.000.000 y gastos financieros de $ 5.000.000. Si las ventas disminuyen 10 %, los costos variables también bajan, pero los costos fijos y gastos financieros permanecen.
          br
          br
          p.mb-0 La simulación permite evaluar cómo los costos fijos y la deuda amplifican la disminución de las utilidades cuando caen las ventas.
      Separador
      #t_4_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.6 Validación de fórmulas y resultados
      p.mb-5 Antes de interpretar escenarios, se deben validar las fórmulas y comprobar la coherencia de los resultados para evitar conclusiones equivocadas. La siguiente tabla presenta criterios de revisión:
      .row.justify-content-center.mb-5
        .col-xl-8
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 18.
            span Lista de verificación para escenarios financieros
          .tabla-a(data-aos="zoom-in")
            table
              caption Tabla con fines didácticos para validar cálculos y escenarios antes de presentar resultados financieros.
              thead
                tr
                  th.ajuste-border-tabla.texto-left Aspecto por revisar
                  th.ajuste-border-tabla.texto-left Pregunta de control
                  th.texto-left Cumple
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Datos base
                  td.ajuste-border-tabla.texto-left ¿Los valores corresponden al periodo analizado?
                  td.texto-left Sí / No
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Fórmulas
                  td.ajuste-border-tabla.texto-left ¿Las fórmulas toman las celdas correctas?
                  td.texto-left Sí / No
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Supuestos
                  td.ajuste-border-tabla.texto-left ¿Los porcentajes de cambio son razonables?
                  td.texto-left Sí / No
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Periodicidad
                  td.ajuste-border-tabla.texto-left ¿Las cifras tienen la misma unidad de tiempo?
                  td.texto-left Sí / No
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Indicadores
                  td.ajuste-border-tabla.texto-left ¿Cada indicador usa las cuentas adecuadas?
                  td.texto-left Sí / No
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Escenarios
                  td.ajuste-border-tabla.texto-left ¿El escenario cambia solo las variables definidas?
                  td.texto-left Sí / No
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Coherencia
                  td.ajuste-border-tabla.texto-left ¿El resultado tiene sentido financiero?
                  td.texto-left Sí / No
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Interpretación
                  td.ajuste-border-tabla.texto-left ¿La lectura corresponde al resultado obtenido?
                  td.texto-left Sí / No
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p El siguiente caso evidencia cómo un supuesto incompleto puede sobreestimar la utilidad proyectada:
          .caja-3(data-aos="fade-right")
            h5 Ejemplo aplicado
            p Si una empresa proyecta un aumento de ventas del 20 %, pero mantiene iguales los costos variables, el escenario puede estar incompleto. En la mayoría de los casos, los costos variables crecen cuando aumentan las unidades vendidas. Si no se ajusta esta relación, la utilidad proyectada puede verse artificialmente alta.
            p.mb-0 La validación de fórmulas permite detectar este tipo de errores. Antes de presentar resultados, se debe revisar si las relaciones entre ventas, costos, gastos, activos y pasivos son coherentes con el comportamiento esperado de la empresa.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img29.png', alt='').m-auto
      Separador
      #t_4_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.7 Presentación de resultados para la toma de decisiones
      p.mb-5 La presentación financiera debe resumir los escenarios, explicar los principales cambios y señalar sus implicaciones para apoyar la toma de decisiones. Para ello, debe incluir los siguientes elementos:
      SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t4/img30.svg' style="max-width: 90px").m-auto
          h4.mb-3.estilo-text Escenario base
          p.mb-0.text-center Indica el punto de partida de la empresa.
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t4/img31.svg' style="max-width: 90px").m-auto
          h4.mb-3.estilo-text Escenario proyectado
          p.mb-0.text-center Presenta el resultado con el cambio aplicado.
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t4/img32.svg' style="max-width: 90px").m-auto
          h4.mb-3.estilo-text Variación
          p.mb-0.text-center Mide la diferencia entre el escenario base y el proyectado.
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t4/img33.svg' style="max-width: 90px").m-auto
          h4.mb-3.estilo-text Indicador afectado
          p.mb-0.text-center Identifica si el cambio impacta liquidez, rentabilidad, endeudamiento, equilibrio o apalancamiento.
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t4/img34.svg' style="max-width: 90px").m-auto
          h4.mb-3.estilo-text Interpretación
          p.mb-0.text-center Explica el significado financiero del resultado.
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t4/img35.svg' style="max-width: 90px").m-auto
          h4.mb-3.estilo-text Decisión sugerida
          p.mb-0.text-center Orienta la acción posible.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t4/img36.png', alt='').m-auto
        .col-xl
          p Este caso permite integrar escenarios financieros en hoja electrónica para analizar cómo los cambios en ventas, costos y gastos financieros afectan los resultados.
          .caja-3(data-aos="fade-left")
            h5 Ejemplo aplicado
            p Si el escenario proyectado señala que una reducción del 10 % en ventas disminuye la utilidad antes de impuestos en 30 %, la presentación debe explicar que la empresa tiene sensibilidad importante frente a las ventas. También debe indicar si esa sensibilidad se debe a costos fijos, gastos financieros o ambos.
            p.mb-0 La decisión sugerida podría ser revisar costos fijos, fortalecer metas comerciales, evitar nuevas deudas o construir un plan de contingencia para periodos de menor demanda.
      p.mb-5 El siguiente ejemplo integra la construcción de escenarios financieros en una hoja electrónica:
      .caja-5.mb-5(data-aos="zoom-in")
        h5 Caso aplicado: construcción de escenarios financieros para la toma de decisiones
        p La empresa Comercial Avance S.A.S. presenta la siguiente información mensual:
        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 19.
              span Datos base para construir escenarios financieros
            .tabla-a(data-aos="zoom-in")
              table
                caption Tabla con fines didácticos para organizar datos de entrada antes de construir escenarios.
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Dato
                    th.texto-left Valor
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Precio de venta unitario
                    td.texto-left $ 80.000
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Costo variable unitario
                    td.texto-left $ 50.000
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Unidades vendidas
                    td.texto-left 1.000
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Costos fijos
                    td.texto-left $ 18.000.000
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Gastos financieros
                    td.texto-left $ 2.000.000
        p.mb-5 La siguiente tabla presenta los resultados actuales de la empresa antes de aplicar cambios.
        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 20.
              span Escenario base
            .tabla-a(data-aos="zoom-in")
              table
                caption Nota. Tabla con fines didácticos para presentar el escenario base de la empresa.
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Concepto
                    th.ajuste-border-tabla.texto-left Cálculo
                    th.texto-left Resultado
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Ventas
                    td.ajuste-border-tabla.texto-left 1.000 × $ 80.000
                    td.texto-left $ 80.000.000
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Costos variables
                    td.ajuste-border-tabla.texto-left 1.000 × $ 50.000
                    td.texto-left $ 50.000.000
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Margen de contribución
                    td.ajuste-border-tabla.texto-left $ 80.000.000 - $ 50.000.000
                    td.texto-left $ 30.000.000
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad operacional
                    td.ajuste-border-tabla.texto-left $ 30.000.000 - $ 18.000.000
                    td.texto-left $ 12.000.000
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad antes de impuestos
                    td.ajuste-border-tabla.texto-left $ 12.000.000 - $ 2.000.000
                    td.texto-left $ 10.000.000
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Punto de equilibrio
                    td.ajuste-border-tabla.texto-left $ 18.000.000 / $ 30.000
                    td.texto-left 600 unidades
        p.mb-5 A continuación, se presenta el efecto de una reducción del 10 % en unidades vendidas, manteniendo costos fijos y gastos financieros.
        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 21.
              span Escenario proyectado con disminución del 10 % en ventas
            .tabla-a(data-aos="zoom-in")
              table
                caption Tabla con fines didácticos para analizar un escenario de reducción en ventas.
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Concepto
                    th.ajuste-border-tabla.texto-left Cálculo
                    th.texto-left Resultado
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Unidades vendidas
                    td.ajuste-border-tabla.texto-left 1.000 × 90 %
                    td.texto-left 900 unidades
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Ventas
                    td.ajuste-border-tabla.texto-left 900 × $ 80.000
                    td.texto-left $ 72.000.000
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Costos variables
                    td.ajuste-border-tabla.texto-left 900 × $ 50.000
                    td.texto-left $ 45.000.000
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Margen de contribución
                    td.ajuste-border-tabla.texto-left $ 72.000.000 - $ 45.000.000
                    td.texto-left $ 27.000.000
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad operacional
                    td.ajuste-border-tabla.texto-left $ 27.000.000 - $ 18.000.000
                    td.texto-left $ 9.000.000
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad antes de impuestos
                    td.ajuste-border-tabla.texto-left $ 9.000.000 - $ 2.000.000
                    td.texto-left $ 7.000.000
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Punto de equilibrio
                    td.ajuste-border-tabla.texto-left $ 18.000.000 / $ 30.000
                    td.texto-left 600 unidades
        .caja-6(data-aos="zoom-in")
          p La interpretación del caso es la siguiente:
          p #[b Interpretación:] en el escenario proyectado, una disminución del 10 % en las ventas genera una caída del 30 % en la utilidad antes de impuestos, lo que refleja sensibilidad frente al volumen vendido. Aunque el punto de equilibrio permanece en 600 unidades, el margen de seguridad se reduce y aumenta el riesgo operativo.
          p.mb-0 La hoja electrónica facilita la simulación de estos cambios, la comparación de alternativas y el análisis de decisiones relacionadas con ventas, costos, gastos y deuda. Para obtener resultados confiables, los datos deben estar organizados y las fórmulas correctamente verificadas.
      p.mb-0 La hoja electrónica permite comparar escenarios, anticipar riesgos y sustentar decisiones financieras.

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
