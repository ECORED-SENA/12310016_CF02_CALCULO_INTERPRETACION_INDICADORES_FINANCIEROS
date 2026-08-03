<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Interpretación de indicadores para la gestión empresarial
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 Los indicadores financieros permiten evaluar la liquidez, actividad, endeudamiento y rentabilidad de la empresa. Su interpretación ayuda a detectar riesgos y orientar decisiones sobre cobros, gastos, financiación, precios y operación (Martínez, 2008).
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 De los resultados numéricos a la interpretación financiera
      p.mb-5 El indicador financiero debe interpretarse y relacionarse con otros resultados, periodos anteriores, metas, políticas empresariales o referencias del sector. Este proceso permite convertir el dato calculado en información útil, como se presenta a continuación:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Resultado
                p.mb-0 Identificar el valor obtenido en el indicador.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img2.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img3.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Comparación
                p.mb-0 Contrastar el resultado con periodos, metas, políticas o referencias.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Causa posible
                p.mb-0 Reconocer qué pudo originar el comportamiento del indicador.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img4.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img5.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Efecto financiero
                p.mb-0 Analizar la consecuencia que puede generar el resultado.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Decisión
                p.mb-0 Definir qué acción puede revisarse desde la gestión empresarial.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t1/img6.png', alt='' style="width: 300px").m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p El siguiente ejemplo permite aplicar la ruta de interpretación a una situación de liquidez:
          .caja-3(data-aos="fade-right")
            h5 Ejemplo aplicado
            p Una empresa presenta razón corriente de 1,8. El resultado indica que tiene $1,8 de activo corriente por cada $1 de pasivo corriente. Sin embargo, al revisar la prueba ácida se obtiene 0,9. Esto significa que, al excluir inventarios, la capacidad de pago disminuye considerablemente.
            p.mb-0 La empresa depende parcialmente de los inventarios para cubrir sus obligaciones de corto plazo, por lo que debe revisar su rotación, la recuperación de cartera y la programación de pagos.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img7.png', alt='').m-auto
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Interpretación de indicadores de liquidez
      p.mb-5 Los indicadores de liquidez analizan la capacidad de pago de corto plazo, considerando la razón corriente, la composición del activo corriente y la calidad de los recursos disponibles. Consulte cada indicador para identificar qué indica y qué decisión puede orientar.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img8.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Razón corriente mayor que 1").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Indica que el activo corriente supera el pasivo corriente; se debe revisar si esos activos son recuperables.
            .row(titulo="Prueba ácida menor que 1").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Presenta que, sin inventarios, la empresa no cubre totalmente sus deudas próximas; se recomienda fortalecer cartera y revisar inventarios.
            .row(titulo="Capital de trabajo positivo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Indica recursos corrientes después de cubrir pasivos corrientes; se debe evaluar su calidad.
            .row(titulo="Capital de trabajo negativo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Señala que las obligaciones corrientes superan los recursos corrientes; se recomienda revisar flujo de caja y financiación.
            .row(titulo="Brecha entre razón corriente y prueba ácida").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Puede indicar alta dependencia de inventarios; se deben analizar productos de baja rotación.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p El siguiente caso permite interpretar la liquidez y complementar la razón corriente con la prueba ácida.
          .caja-3(data-aos="fade-right")
            h5 Ejemplo aplicado
            p Una empresa presenta los siguientes resultados:
            p.mb-0 Razón corriente: 1,6
            p.mb-0 Prueba ácida: 0,8
            p Capital de trabajo neto: $45.000.000
            p.mb-0 Aunque existe capacidad general de pago, la empresa depende de los inventarios para cubrir sus obligaciones, por lo que debe revisar su rotación, acumulación y recuperación de cartera.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img9.png', alt='').m-auto
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Interpretación de indicadores de actividad o gestión
      p.mb-5 Los indicadores de actividad analizan el uso de cartera, inventarios, proveedores y activos, y permiten identificar comportamientos operativos que requieren atención, como se presenta en la siguiente tabla:
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 1.
            span Interpretación de indicadores de actividad o gestión
          .tabla-a(data-aos="zoom-in")
            table
              caption Tabla con fines didácticos para interpretar indicadores de actividad y relacionarlos con decisiones de gestión.
              thead
                tr
                  th.ajuste-border-tabla.texto-left Indicador
                  th.ajuste-border-tabla.texto-left Resultado que requiere atención
                  th.ajuste-border-tabla.texto-left Posible implicación
                  th.texto-left Decisión asociada
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Días de cartera
                  td.ajuste-border-tabla.texto-left Superiores a la política de crédito
                  td.ajuste-border-tabla.texto-left Demora en recaudos y presión de liquidez
                  td.texto-left Revisar cobro, cupos y vencimientos
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Rotación de inventarios
                  td.ajuste-border-tabla.texto-left Baja frente a la dinámica del negocio
                  td.ajuste-border-tabla.texto-left Mercancía acumulada o baja salida
                  td.texto-left Ajustar compras y revisar productos lentos
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Días de inventario
                  td.ajuste-border-tabla.texto-left Elevados
                  td.ajuste-border-tabla.texto-left Recursos inmovilizados
                  td.texto-left Promociones, depuración o control de compras
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Rotación de proveedores
                  td.ajuste-border-tabla.texto-left Muy rápida
                  td.ajuste-border-tabla.texto-left Pagos antes de recuperar cartera
                  td.texto-left Negociar plazos con proveedores
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Rotación de activos
                  td.ajuste-border-tabla.texto-left Baja
                  td.ajuste-border-tabla.texto-left Activos con bajo aporte a ventas
                  td.texto-left Revisar productividad de recursos
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t1/img10.png', alt='').m-auto
        .col-xl
          p El siguiente ejemplo permite relacionar los días de cartera con la política de crédito y las decisiones de cobro.
          .caja-3(data-aos="fade-left")
            h5 Ejemplo aplicado
            p Una empresa otorga crédito a 45 días, pero sus indicadores exponen que la cartera se recupera en 70 días. Este resultado indica que los clientes están pagando 25 días después de lo esperado. Aunque las ventas se hayan realizado, el dinero no está entrando oportunamente a la empresa.
            p.mb-0 Se recomienda revisar la política de crédito, clasificar la cartera, fortalecer el cobro y evaluar si la demora en los recaudos exige financiación externa.
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Interpretación de indicadores de endeudamiento
      p.mb-5 Los indicadores de endeudamiento analizan qué parte de los recursos está financiada con obligaciones, considerando deuda, plazos, gastos financieros y capacidad para generar utilidad y efectivo. Su interpretación se presenta a continuación:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Nivel de endeudamiento creciente
                  p.mb-0 Presenta mayor dependencia de terceros; se deben revisar nuevas obligaciones y capacidad de pago.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Alta concentración en pasivo corriente
                  p.mb-0 Indica que muchas deudas vencen en corto plazo; se recomienda programar flujo de caja y negociar plazos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Relación deuda-patrimonio elevada
                  p.mb-0 Refleja mayor peso de la deuda frente a los recursos propios; se debe evaluar la estructura financiera.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Baja cobertura de intereses
                  p.mb-0 Indica dificultad para cubrir gastos financieros; se recomienda revisar deuda, tasas y gastos financieros.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Endeudamiento alto con rentabilidad baja
                  p.mb-0 Representa riesgo financiero creciente; se deben controlar deuda y utilidad operacional.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t1/img15.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Este ejemplo relaciona el endeudamiento con la cobertura de intereses y la capacidad de pago:
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img16.jpg')})` }")
        .bloque-texto-g__texto.p-4
          h5 Ejemplo aplicado
          br
          br
          p Una empresa presenta nivel de endeudamiento de 62 %, relación deuda-patrimonio de 1,6 y cobertura de intereses de 2 veces. Esto significa que una parte importante de sus activos está financiada con deuda, que por cada peso de patrimonio existen $1,6 de obligaciones y que la utilidad operacional cubre dos veces los intereses.
          br
          br
          p.mb-0 Aunque la empresa cubre sus gastos financieros, debe revisar tasas, plazos, flujo de caja y nuevas obligaciones para proteger su capacidad de pago.
      Separador
      #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.5 Interpretación de indicadores de rentabilidad
      p.mb-5 Los indicadores de rentabilidad analizan la capacidad de generar utilidad a partir de ventas, activos o patrimonio, considerando costos, gastos, intereses e impuestos. Identifique qué mide cada indicador y qué decisión puede orientar:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t1/img17.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img18.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Margen bruto
                  p.mb-0.text-center Permite analizar el efecto del costo de ventas; si es bajo, se deben revisar proveedores, precios y descuentos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img19.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Margen operacional
                  p.mb-0.text-center Presenta el resultado de la actividad principal; si es bajo, se recomienda controlar gastos administrativos y de ventas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img20.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Margen neto
                  p.mb-0.text-center Indica la utilidad final sobre ventas; si es bajo, se deben revisar costos, gastos, intereses y financiación.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img21.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text ROA
                  p.mb-0.text-center Mide la rentabilidad generada por los activos; si es bajo, se debe evaluar la productividad de los recursos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img22.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text ROE
                  p.mb-0.text-center Mide el rendimiento del patrimonio; si es bajo, se recomienda revisar utilidad y estructura financiera.
          .row.justify-content-center.align-items-center.mb-0
            .col-xl.mb-4.mb-lg-0
              p Para mayor comprensión del tema, se presenta el siguiente ejemplo:
              .caja-3(data-aos="fade-right")
                h5 Ejemplo aplicado
                p Una empresa presenta margen bruto de 38 %, margen operacional de 12 % y margen neto de 4 %. El margen bruto evidencia que el costo de ventas permite conservar una ganancia inicial, pero al avanzar hacia el margen operacional y neto se observa una fuerte disminución.
                p.mb-0 Los gastos operacionales, financieros o impuestos reducen la utilidad final; por ello, se recomienda revisar gastos administrativos, ventas, intereses, precios y rentabilidad por línea de producto.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t1/img23.png', alt='').m-auto
      Separador
      #t_1_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.6 Relación entre indicadores y decisiones empresariales
      p.mb-5 Los indicadores financieros deben relacionarse con decisiones concretas sobre cobro, pagos, inventarios, precios, costos o gastos. La siguiente tabla refleja cómo sus resultados pueden orientar decisiones dentro de la organización.
      .row.justify-content-center.mb-5
        .col-xl-8
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 2.
            span Relación entre indicadores y decisiones empresariales
          .tabla-a(data-aos="zoom-in")
            table
              caption Tabla con fines didácticos para relacionar indicadores financieros con decisiones empresariales.
              thead
                tr
                  th.ajuste-border-tabla.texto-left Área de decisión
                  th.ajuste-border-tabla.texto-left Indicador relacionado
                  th.texto-left Decisión posible
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Cobro de cartera
                  td.ajuste-border-tabla.texto-left Días de cartera, rotación de cartera
                  td.texto-left Revisar vencimientos, cupos y seguimiento a clientes
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Compras e inventarios
                  td.ajuste-border-tabla.texto-left Rotación de inventarios, días de inventario
                  td.texto-left Ajustar cantidades, depurar productos y mejorar rotación
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Pagos de corto plazo
                  td.ajuste-border-tabla.texto-left Razón corriente, prueba ácida, capital de trabajo
                  td.texto-left Programar pagos y fortalecer flujo de caja
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Financiación
                  td.ajuste-border-tabla.texto-left Endeudamiento, cobertura de intereses
                  td.texto-left Evaluar deuda, tasas, plazos y capacidad de pago
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Rentabilidad
                  td.ajuste-border-tabla.texto-left Margen bruto, margen neto, ROA, ROE
                  td.texto-left Revisar precios, costos, gastos y productividad
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Planeación financiera
                  td.ajuste-border-tabla.texto-left Variaciones, indicadores y escenarios
                  td.texto-left Definir metas y acciones de seguimiento
      p.mb-5 El siguiente ejemplo aplica los conocimientos expuestos:
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img24.jpg')})` }")
        .bloque-texto-g__texto.p-4
          h5 Ejemplo aplicado
          br
          br
          p Si una empresa presenta prueba ácida menor que 1, días de cartera superiores a la política de crédito y endeudamiento creciente, la decisión no debe ser asumir más deuda de forma inmediata. Primero debe revisar la recuperación de cartera, la programación de pagos, el flujo de caja y la posibilidad de mejorar la liquidez con recursos propios de la operación.
          br
          br
          p.mb-0 Esta lectura refleja que los indicadores financieros se complementan entre sí. Una decisión responsable no se toma con un solo indicador, sino con la relación entre varios resultados.
      p.mb-5 Se invita a reproducir el siguiente pódcast para que identifique cómo los indicadores financieros pueden orientar decisiones sobre liquidez, cartera, inventarios, deuda y rentabilidad.
      .row.align-items-center.m-0.mb-0
        .col-xl
          .row.align-items-center.justify-content-center.caja-4(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t1/img25.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="Del indicador a la decisión empresarial"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t1/img26.png" ).m-auto
      Separador
      #t_1_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.7 Alertas financieras derivadas de los indicadores
      p.mb-5 Las alertas financieras son señales que requieren analizar una situación con mayor profundidad. No representan necesariamente una crisis, pero advierten posibles riesgos relacionados con la liquidez, la cartera, los inventarios, la deuda, los intereses o la rentabilidad. Las principales son:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img27.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Baja liquidez inmediata").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Asociada con prueba ácida menor que 1; se recomienda revisar efectivo, cartera e inventarios.
            .row(titulo="Demora en recaudos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Asociada con días de cartera elevados; se debe fortalecer la gestión de cobro.
            .row(titulo="Inventarios acumulados").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Asociados con días de inventario altos; se recomienda revisar compras y productos de baja rotación.
            .row(titulo="Deuda creciente").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Asociada con nivel de endeudamiento alto; se debe analizar capacidad de pago.
      p.mb-5 
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Intereses con alto peso").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Asociados con baja cobertura de intereses; se recomienda revisar tasas, plazos y utilidad operacional.
            .row(titulo="Margen neto bajo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Indica rentabilidad final reducida; se deben revisar costos, gastos y precios.
            .row(titulo="Activos con bajo rendimiento").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se asocia con un ROA bajo. Se recomienda evaluar la productividad de los recursos y revisar si los activos están generando utilidad suficiente.
            .row(titulo="Menor rendimiento para propietarios").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se relaciona con un ROE bajo. Se debe analizar la utilidad neta, la estructura patrimonial y el retorno generado para los propietarios.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img28.png", alt="" ).m-auto
      p.mb-5 El siguiente caso aplicar los temas abordados:
      .caja-5.mb-5(data-aos="zoom-in")
        h5 Ejemplo aplicado
        p La empresa Comercial Horizonte S.A.S. presenta los siguientes resultados del año 2:
        .row.justify-content-center.mb-5
          .col-xl-7
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 3.
              span Resultados financieros de Comercial Horizonte S.A.S.
            .tabla-a(data-aos="zoom-in")
              table
                caption La tabla presenta indicadores financieros calculados previamente para realizar su interpretación.
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Grupo
                    th.ajuste-border-tabla.texto-left Indicador
                    th.texto-left Resultado
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Liquidez
                    td.ajuste-border-tabla.texto-left Razón corriente
                    td.texto-left 1,60
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Liquidez
                    td.ajuste-border-tabla.texto-left Prueba ácida
                    td.texto-left 0,85
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Actividad
                    td.ajuste-border-tabla.texto-left Días de cartera
                    td.texto-left 75 días
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Actividad
                    td.ajuste-border-tabla.texto-left Días de inventario
                    td.texto-left 95 días
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Endeudamiento
                    td.ajuste-border-tabla.texto-left Nivel de endeudamiento
                    td.texto-left 61 %
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Endeudamiento
                    td.ajuste-border-tabla.texto-left Cobertura de intereses
                    td.texto-left 2,4 veces
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Rentabilidad
                    td.ajuste-border-tabla.texto-left Margen bruto
                    td.texto-left 34 %
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Rentabilidad
                    td.ajuste-border-tabla.texto-left Margen neto
                    td.texto-left 4,8 %
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Rentabilidad
                    td.ajuste-border-tabla.texto-left ROA
                    td.texto-left 7,2 %
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Rentabilidad
                    td.ajuste-border-tabla.texto-left ROE
                    td.texto-left 18,5 %
        .caja-6(data-aos="zoom-in")
          h5 Interpretación del caso
          p.mb-0 La empresa presenta capacidad general de pago, pero depende de los inventarios y registra demoras en la recuperación de cartera y la salida de mercancía. Su endeudamiento del 61 % y la cobertura de intereses de 2,4 veces reflejan una capacidad limitada ante caídas en ventas o aumentos de gastos. Además, el margen neto de 4,8 % indica baja utilidad final, por lo que se recomienda revisar cartera, inventarios, gastos, deuda y rentabilidad por producto.
      p.mb-0 La interpretación de indicadores convierte cifras en información útil para identificar fortalezas, alertas y orientar decisiones sobre cartera, inventarios, pagos, gastos, deuda y rentabilidad.

</template>

<script>
import audio1 from '@/assets/curso/temas/t1/audios/audio-ej.mp3'
export default {
  name: 'Tema1',
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
