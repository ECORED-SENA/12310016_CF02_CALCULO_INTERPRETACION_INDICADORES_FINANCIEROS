<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Punto de equilibrio para decisiones operativas
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img1.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 El punto de equilibrio identifica el nivel mínimo de ventas necesario para cubrir costos sin generar utilidad ni pérdida. Relaciona precio, costos variables, costos fijos y margen de contribución, y apoya decisiones sobre precios, costos, metas de ventas, utilidad esperada y control operativo.
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Concepto e importancia del punto de equilibrio
      p.mb-5 El punto de equilibrio identifica las ventas mínimas para cubrir costos sin pérdida ni utilidad, relacionando precio, costos y margen de contribución. Reconozca cómo apoya decisiones operativas así:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img2.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img3.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Definición de precios
                  p.mb-0.text-center Permite analizar si el precio cubre costos y genera utilidad.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img4.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Planeación de ventas
                  p.mb-0.text-center Ayuda a definir la meta mínima de operación.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img5.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Control de costos
                  p.mb-0.text-center Mide el efecto de cambios en costos fijos o variables.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img6.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Evaluación de productos
                  p.mb-0.text-center Permite revisar si un producto cubre sus costos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img7.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Utilidad esperada
                  p.mb-0.text-center Calcula las ventas necesarias para alcanzar una ganancia deseada.
          .row.justify-content-center.align-items-center.mb-0
            .col-xl.mb-4.mb-lg-0
              p El siguiente ejemplo explica el tema desarrollado:
              .caja-3(data-aos="fade-right")
                h5 Ejemplo aplicado
                p Una empresa vende un producto a $50.000 y tiene un costo variable unitario de $30.000. Cada unidad vendida deja un margen de contribución de $20.000. Si sus costos fijos mensuales son de $10.000.000, la empresa necesita vender suficientes unidades para cubrir esa estructura fija antes de generar utilidad.
                p.mb-0 Este ejemplo reconoce que vender no implica ganar de inmediato: primero se cubren costos variables y fijos; solo al superar ese nivel se genera utilidad operacional.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t2/img8.png', alt='').m-auto
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Costos fijos, costos variables y costos mixtos
      p.mb-5 Para calcular el punto de equilibrio, es necesario clasificar los costos según su comportamiento, porque afectan de forma distinta el margen de contribución y las ventas mínimas. Consulte cada tipo de costo para reconocer su uso en el análisis operativo:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img9.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Costo fijo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Permanece estable dentro de un rango de actividad. Ejemplos: arriendo, seguros o salarios administrativos.
            .row(titulo="Costo variable").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Cambia según el volumen de ventas o producción. Ejemplos: mercancía vendida, comisiones o materia prima.
            .row(titulo="Costo mixto").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Combina una parte fija y una parte variable. Ejemplos: servicios públicos, transporte o mantenimiento.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p Este ejemplo permite diferenciar los tipos de costos antes de calcular el punto de equilibrio.
          .caja-3(data-aos="fade-right")
            h5 Ejemplo aplicado
            p Una empresa paga $3.000.000 mensuales de arriendo, valor que se mantiene aunque venda pocas o muchas unidades. Este valor se clasifica como costo fijo. Además, por cada unidad vendida paga $25.000 por mercancía, valor que cambia según el volumen vendido; este corresponde a costo variable.
            p.mb-0 Si el transporte tiene una tarifa base más un valor por unidad despachada, se clasifica como costo mixto; por ello, debe separarse en componente fijo y variable.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img10.png', alt='').m-auto
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Margen de contribución unitario y porcentual
      p.mb-5 El margen de contribución es el valor que queda después de cubrir costos variables y permite atender costos fijos y generar utilidad operacional. Los pasos para calcularlo son:
      .row.justify-content-center
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n").mb-5
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Identificar el precio de venta unitario.
                p.mb-0 Corresponde al valor por el cual la empresa vende cada unidad del producto o servicio. 
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img11.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img12.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Identificar el costo variable unitario.
                p.mb-0 Corresponde al costo que cambia según la cantidad producida o vendida.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Calcular el margen de contribución unitario
                p.mb-0 Precio de venta unitario menos costo variable unitario.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img13.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img14.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Calcular el margen de contribución porcentual
                p.mb-0 Margen unitario dividido entre precio de venta unitario por 100.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Interpretar el resultado
                p.mb-0 Reconocer cuánto aporta cada unidad para cubrir costos fijos y utilidad.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img15.png', alt='' style="width: 300px").m-auto
          .caja-5.mb-5(data-aos="zoom-in")
            p Las fórmulas son: 
            .caja-6.mb-2.color-1(data-aos="zoom-in")
              h5.mb-0.text-center Margen de contribución unitario = precio de venta unitario - costo variable unitario
            .caja-6.color-1(data-aos="zoom-in")
              h5.mb-0.text-center Margen de contribución porcentual = margen de contribución unitario / precio de venta unitario × 100
      p.mb-5.text-center Estos cálculos indican cuánto conserva la empresa por unidad después de cubrir el costo variable.
      .row.justify-content-center.mb-5
        .col-xl-7
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 4.
            span Cálculo del margen de contribución
          .tabla-a(data-aos="zoom-in")
            table
              caption La tabla presenta cómo calcular el margen de contribución unitario y porcentual.
              thead
                tr
                  th.ajuste-border-tabla.texto-left Concepto
                  th.texto-left Valor
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Precio de venta unitario
                  td.texto-left $80.000
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Costo variable unitario
                  td.texto-left $50.000
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Margen de contribución unitario
                  td.texto-left $30.000
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Margen de contribución porcentual
                  td.texto-left 37,5 %
      .row.justify-content-center.mb-0
        .col-xl-10
          .caja-5(data-aos="zoom-in")
            p.mb-0 #[b Interpretación:] cada unidad vendida aporta $30.000 para cubrir costos fijos y generar utilidad. El margen de contribución porcentual de 37,5 % significa que por cada $100 vendidos, la empresa conserva $37,5 después de cubrir el costo variable. Si este margen disminuye, la empresa necesitará vender más unidades para alcanzar el punto de equilibrio.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Punto de equilibrio en unidades
      p.mb-5 El punto de equilibrio en unidades define la cantidad mínima que debe vender la empresa para cubrir sus costos totales. Los pasos para calcularlo son:
      .row.justify-content-center
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n").mb-5
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Identificar los costos fijos
                p.mb-0 Corresponden a los valores que la empresa debe cubrir aunque cambie el nivel de ventas, como arriendo, salarios administrativos, seguros o servicios contratados.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img16.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img17.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Calcular el margen de contribución unitario
                p.mb-0 Se obtiene restando el costo variable unitario al precio de venta unitario. Indica cuánto aporta cada unidad vendida para cubrir costos fijos y generar utilidad.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Dividir los costos fijos entre el margen de contribución unitario
                p.mb-0 Este cálculo permite determinar cuántas unidades debe vender la empresa para cubrir completamente sus costos fijos.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img18.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img19.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Interpretar el resultado como unidades mínimas de venta
                p.mb-0 El resultado indica la cantidad mínima que debe venderse para no generar pérdida ni utilidad. Si se venden más unidades, la empresa empieza a obtener utilidad operacional.
      p.mb-3.text-center La fórmula es la siguiente:
      .row.justify-content-center.mb-5
        .col-xl-7
          .caja-5.color-2.text-center(data-aos="zoom-in")
            h5.mb-0 Punto de equilibrio en unidades = costos fijos / margen de contribución unitario
      p.mb-5 A continuación, se desarrolla un ejemplo:
      .row.justify-content-center.mb-5
        .col-xl-7
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 5.
            span Cálculo del punto de equilibrio en unidades
          .tabla-a(data-aos="zoom-in")
            table
              caption La tabla presenta el cálculo del número mínimo de unidades que debe vender la empresa.
              thead
                tr
                  th.ajuste-border-tabla.texto-left Concepto
                  th.texto-left Valor
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Costos fijos mensuales
                  td.texto-left $18.000.000
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Margen de contribución unitario
                  td.texto-left $30.000
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Punto de equilibrio en unidades
                  td.texto-left 600 unidades
      .row.justify-content-center.mb-0
        .col-xl-10
          .caja-5(data-aos="zoom-in")
            p.mb-0 #[b Interpretación:] la empresa debe vender 600 unidades mensuales para no perder ni ganar. Si vende menos de 600 unidades, tendrá pérdida operacional; si vende exactamente 600 unidades, cubrirá sus costos; si vende más de 600 unidades, empezará a generar utilidad operacional.
      Separador
      #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.5 Punto de equilibrio en ventas
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El punto de equilibrio en ventas indica el ingreso mínimo necesario para cubrir costos. Es útil para expresar la meta en pesos, especialmente cuando se manejan varios productos. La fórmula es la siguiente:
          .caja-3.color-1(data-aos="fade-right")
            h5.mb-0.text-center Punto de equilibrio en ventas = costos fijos / margen de contribución porcentual
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img20.png', alt='').m-auto
      .row.justify-content-center
        .col-xl-10
          .caja-7.mb-5(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t2/img21.svg', alt='' style="width: 85px").m-auto
              .col-xl.col-md-10
                p.mb-0 Para calcular el valor mínimo de ventas requerido, se deben seguir los siguientes pasos:
          PasosA.color-acento-contenido(tipo="n").mb-5
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Identificar los costos fijos
                p.mb-0 Corresponden a los valores que la empresa debe cubrir durante el periodo, aunque el volumen de ventas cambie. Son la base para calcular el valor mínimo de ingresos requerido.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img22.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img23.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Calcular margen porcentual
                p.mb-0 Se obtiene dividiendo el margen de contribución unitario entre el precio de venta unitario y multiplicando por 100. Indica qué porcentaje de cada venta queda disponible para cubrir costos fijos y generar utilidad.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Dividir los costos fijos entre el margen de contribución porcentual
                p.mb-0 Este cálculo permite determinar el valor mínimo de ventas que la empresa necesita alcanzar para cubrir sus costos totales.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img24.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img25.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Interpretar el resultado como ventas mínimas requeridas
                p.mb-0 El resultado indica el ingreso mínimo que debe generar la empresa para no tener pérdida ni utilidad. Si las ventas superan ese valor, empieza a generarse utilidad operacional.
      p.mb-5 El siguiente cálculo permite calcular el valor mínimo de ventas requerido para cubrir costos:
      .row.justify-content-center.mb-5
        .col-xl-7
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 6.
            span Cálculo del punto de equilibrio en ventas
          .tabla-a(data-aos="zoom-in")
            table
              caption Tabla con fines didácticos para calcular el punto de equilibrio expresado en valor de ventas.
              thead
                tr
                  th.ajuste-border-tabla.texto-left Concepto
                  th.texto-left Valor
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Costos fijos mensuales
                  td.texto-left $18.000.000
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Margen de contribución porcentual
                  td.texto-left 37,5 %
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Punto de equilibrio en ventas
                  td.texto-left $48.000.000
      .row.justify-content-center.mb-0
        .col-xl-10
          .caja-5(data-aos="zoom-in")
            p.mb-0 #[b Interpretación:] la empresa necesita vender $48.000.000 mensuales para cubrir sus costos totales. Este resultado coincide con el cálculo en unidades, porque 600 unidades multiplicadas por el precio de venta de $80.000 equivalen a $48.000.000.
      Separador
      #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.6 Punto de equilibrio con utilidad esperada
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El punto de equilibrio con utilidad esperada ajusta el cálculo al sumar la ganancia deseada a los costos fijos, para determinar las unidades o ventas requeridas. Las fórmulas son:
          .caja-3.color-2.mb-3(data-aos="fade-right")
            h5.mb-0.text-center Unidades requeridas con utilidad esperada = (costos fijos + utilidad esperada) / margen de contribución unitario
          .caja-3.color-1(data-aos="fade-right")
            h5.mb-0.text-center Ventas requeridas con utilidad esperada = (costos fijos + utilidad esperada) / margen de contribución porcentual
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img26.png', alt='').m-auto
      .row.justify-content-center
        .col-xl-10
          .caja-7.mb-5(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t2/img21.svg', alt='' style="width: 85px").m-auto
              .col-xl.col-md-10
                p.mb-0 Para convertir una meta de utilidad en una meta de ventas, realice los siguientes pasos:
          PasosA.color-acento-contenido(tipo="n").mb-5
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Identificar costos fijos
                p.mb-0 Reconozca los costos que la empresa debe cubrir durante el periodo, independientemente del nivel de ventas.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img27.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img28.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Definir utilidad esperada
                p.mb-0 Establezca la ganancia que la empresa desea obtener después de cubrir sus costos.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Sumar valores base
                p.mb-0 Sume los costos fijos y la utilidad esperada para conocer el total que debe cubrirse con las ventas.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img29.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img30.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Aplicar la fórmula
                p.mb-0 Divida el total anterior entre el margen de contribución unitario o porcentual, según se requieran unidades o ventas.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Interpretar la meta
                p.mb-0 Analice cuántas unidades o cuánto valor en ventas se necesita para cubrir costos y alcanzar la utilidad esperada.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img31.png', alt='' style="width: 300px").m-auto
      p.mb-5 A continuación, se desarrolla un ejemplo:
      .caja-5.mb-0(data-aos="zoom-in")
        .row.justify-content-center.mb-5
          .col-xl-7
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 7.
              span Cálculo de ventas con utilidad esperada
            .tabla-a(data-aos="zoom-in")
              table
                caption Tabla con fines didácticos para calcular el volumen requerido cuando se desea obtener utilidad.
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Concepto
                    th.texto-left Valor
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Costos fijos mensuales
                    td.texto-left $18.000.000
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad esperada
                    td.texto-left $9.000.000
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Margen de contribución unitario
                    td.texto-left $30.000
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Unidades requeridas
                    td.texto-left 900 unidades
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Precio de venta unitario
                    td.texto-left $80.000
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Ventas requeridas
                    td.texto-left $72.000.000
        .caja-6(data-aos="zoom-in")
          p.mb-0 #[b Interpretación:] la empresa debe vender 900 unidades, equivalentes a $72.000.000, para cubrir sus costos y obtener una utilidad operacional de $9.000.000. Este cálculo es útil para establecer metas comerciales, porque no se limita a evitar pérdidas, sino que incorpora la ganancia esperada.
      Separador
      #t_2_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.7 Interpretación del punto de equilibrio
      p.mb-5 El punto de equilibrio se interpreta al compararlo con las ventas reales o proyectadas, para identificar si la empresa cubre costos, genera utilidad o enfrenta riesgo de pérdida. A continuación, se presentan posibles resultados:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ventas superiores al punto de equilibrio
                  p.mb-0 La empresa cubre sus costos y genera utilidad. En este caso, se recomienda mantener el seguimiento de las ventas y revisar si también se alcanza la utilidad esperada.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img32.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ventas iguales al punto de equilibrio
                  p.mb-0 La empresa no pierde, pero tampoco obtiene utilidad. Por ello, se recomienda aumentar ventas o mejorar el margen de contribución.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img33.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Ventas inferiores al punto de equilibrio
                  p.mb-0 La empresa no alcanza a cubrir sus costos totales. En esta situación, se deben revisar precios, costos fijos, costos variables y volumen de ventas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img34.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Margen de contribución bajo
                  p.mb-0 Cada unidad vendida aporta poco a la cobertura de los costos fijos. Por esta razón, se recomienda revisar el precio de venta, los descuentos aplicados o el costo variable.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img35.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Costos fijos altos
                  p.mb-0 La empresa requiere más ventas para cubrir su estructura operativa. En este caso, se recomienda controlar gastos fijos y evaluar la eficiencia operativa.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img36.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 A continuación, se desarrolla un ejemplo:
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img37.jpg')})` }")
        .bloque-texto-g__texto.p-4
          h5 Ejemplo aplicado
          br
          br
          p Una empresa tiene punto de equilibrio de 600 unidades y ventas esperadas de 750 unidades. Esto significa que supera el nivel mínimo en 150 unidades. Sin embargo, si su meta de utilidad requiere vender 900 unidades, las ventas esperadas todavía son insuficientes para lograr el resultado deseado.
          br
          br
          p.mb-0 La decisión no debe basarse solo en estar por encima del equilibrio; también debe revisarse el margen de seguridad, el cumplimiento de la utilidad esperada y posibles caídas en ventas.
      p.mb-5 Para mayor comprensión del tema, analice el siguiente video e identifique cómo el punto de equilibrio permite revisar ventas, costos, margen de seguridad y utilidad esperada.
      figure(data-aos="zoom-in").mb-0
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/dYximjimiIk?si=vpJgpbV3QlQBwmGb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Punto de equilibrio: cómo interpretar si la empresa cubre sus costos 
      Separador
      #t_2_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.8 Decisiones sobre precios, costos, volumen y utilidad
      p.mb-5 El punto de equilibrio permite analizar cómo cambian los resultados cuando se modifican precios, costos o volumen de ventas. Estas decisiones pueden aumentar o reducir la presión sobre las ventas mínimas. A continuación, se presenta cómo algunas decisiones pueden afectar el punto de equilibrio:
      SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t2/img38.svg' style="max-width: 90px").m-auto
          h4.mb-3.estilo-text Aumentar precio sin perder demanda
          p.mb-0.text-center Disminuye el punto de equilibrio porque cada unidad aporta mayor margen.
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t2/img39.svg' style="max-width: 90px").m-auto
          h4.mb-3.estilo-text Reducir costo variable
          p.mb-0.text-center Disminuye el punto de equilibrio al mejorar el margen de contribución.
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t2/img40.svg' style="max-width: 90px").m-auto
          h4.mb-3.estilo-text Aumentar costos fijos
          p.mb-0.text-center Aumenta el punto de equilibrio porque se requieren más ventas para cubrir la estructura.
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t2/img41.svg' style="max-width: 90px").m-auto
          h4.mb-3.estilo-text Otorgar descuentos altos
          p.mb-0.text-center Puede aumentar el punto de equilibrio al reducir el ingreso por unidad.
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t2/img42.svg' style="max-width: 90px").m-auto
          h4.mb-3.estilo-text Mejorar volumen de ventas
          p.mb-0.text-center Ayuda a superar el punto de equilibrio si se mantiene el margen.
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/t2/img43.svg' style="max-width: 90px").m-auto
          h4.mb-3.estilo-text Reducir gastos fijos innecesarios
          p.mb-0.text-center Disminuye la presión sobre las ventas mínimas.
      p.mb-5 El siguiente ejemplo integra los conocimientos abordados:
      .caja-5.mb-5(data-aos="zoom-in")
        h5 Ejemplo aplicado
        p La empresa Comercial La Esperanza S.A.S. vende un producto a $80.000 por unidad. Su costo variable unitario es de $50.000, sus costos fijos mensuales son de $18.000.000 y la gerencia desea obtener una utilidad operacional de $9.000.000. Los datos realizar los cálculos son:
        .row.justify-content-center.mb-5
          .col-xl-7
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 8.
              span Datos iniciales para calcular punto de equilibrio
            .tabla-a(data-aos="zoom-in")
              table
                caption Tabla con fines didácticos para organizar los datos antes de aplicar fórmulas de punto de equilibrio.
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Dato
                    th.texto-left Valor
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Precio de venta unitario
                    td.texto-left $80.000
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Costo variable unitario
                    td.texto-left $50.000
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Costos fijos mensuales
                    td.texto-left $18.000.000
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad esperada
                    td.texto-left $9.000.000
        p.mb-5 La siguiente tabla presenta el cálculo del margen de contribución, punto de equilibrio y ventas con utilidad esperada:
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 9.
              span Desarrollo del punto de equilibrio
            .tabla-a(data-aos="zoom-in")
              table
                caption Tabla con fines didácticos para integrar el cálculo del punto de equilibrio y la utilidad esperada.
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Cálculo
                    th.ajuste-border-tabla.texto-left Fórmula
                    th.texto-left Resultado
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Margen de contribución unitario
                    td.ajuste-border-tabla.texto-left $80.000 - $50.000
                    td.texto-left $30.000
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Margen de contribución porcentual
                    td.ajuste-border-tabla.texto-left $30.000 / $80.000 × 100
                    td.texto-left 37,5 %
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Punto de equilibrio en unidades
                    td.ajuste-border-tabla.texto-left $18.000.000 / $30.000
                    td.texto-left 600 unidades
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Punto de equilibrio en ventas
                    td.ajuste-border-tabla.texto-left $18.000.000 / 37,5 %
                    td.texto-left $48.000.000
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Unidades con utilidad esperada
                    td.ajuste-border-tabla.texto-left ($18.000.000 + $9.000.000) / $30.000
                    td.texto-left 900 unidades
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Ventas con utilidad esperada
                    td.ajuste-border-tabla.texto-left 900 × $80.000
                    td.texto-left $72.000.000
        .caja-6(data-aos="zoom-in")
          p #[b Interpretación del caso:] Comercial La Esperanza S.A.S. debe vender #[b 600 unidades mensuales], equivalentes a #[b $48.000.000], para cubrir sus costos y no generar pérdida. Si vende menos, no cubre su estructura; si vende más, empieza a generar utilidad operacional.
          p.mb-0 Para alcanzar una utilidad esperada de #[b $9.000.000], debe vender #[b 900 unidades], equivalentes a #[b $72.000.000]. Si proyecta vender #[b 750 unidades], supera el punto de equilibrio, pero no alcanza la utilidad esperada; por ello, debe revisar ventas, margen de contribución, costos o gastos fijos.
      p.mb-0 El punto de equilibrio relaciona precios, costos, ventas y utilidad para evaluar si las metas comerciales permiten cubrir la operación y alcanzar el resultado esperado.

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
