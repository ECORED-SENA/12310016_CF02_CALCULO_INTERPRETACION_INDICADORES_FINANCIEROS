<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Apalancamiento operativo y financiero
      .caja-1.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1-p
            p.mb-0 El apalancamiento analiza cómo los costos fijos y la financiación amplifican el efecto de las ventas sobre los resultados. Incluye apalancamiento operativo, financiero y total, y permite tomar decisiones sobre costos, deuda, precios, ventas, expansión y sostenibilidad financiera.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img1.png', alt='').m-auto
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Concepto de apalancamiento en la empresa
      p.mb-5 El apalancamiento utiliza costos fijos o gastos financieros para ampliar los resultados, aunque también puede aumentar el riesgo. Sus tipos y efectos se presentan a continuación:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img2.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Apalancamiento operativo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se genera por costos fijos operacionales y afecta la utilidad operacional. Se utiliza para medir la sensibilidad de la utilidad operacional frente a cambios en ventas.
            .row(titulo="Apalancamiento financiero").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se genera por gastos financieros e intereses y afecta la utilidad antes de impuestos. Sirve para medir el efecto de la deuda sobre los resultados.
            .row(titulo="Apalancamiento total").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Integra costos fijos operacionales y gastos financieros para evaluar el riesgo global. Evalúa el efecto conjunto del riesgo operativo y financiero.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p Este ejemplo expone cómo los costos fijos y la deuda amplifican los resultados.
          .caja-3(data-aos="fade-right")
            h5 Ejemplo aplicado
            p Una empresa decide ampliar su planta de producción y asume mayores costos fijos por arriendo, maquinaria y personal permanente. Si las ventas crecen, esa estructura puede ayudarle a producir más y mejorar su utilidad operacional. Sin embargo, si las ventas disminuyen, los costos fijos seguirán existiendo y pueden reducir de manera importante la utilidad.
            p.mb-0 La deuda puede apoyar el crecimiento, pero sus intereses aumentan el riesgo cuando disminuye la utilidad operacional.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img3.png', alt='').m-auto
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Estructura de costos y riesgo operativo
      p.mb-5 La estructura de costos refleja la distribución entre costos fijos y variables. Una alta proporción de costos fijos exige mayores ventas y aumenta el riesgo operativo. Cada situación se describe seguidamente:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img4.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img5.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Costos fijos altos
                  p.mb-0.text-center Aumentan el punto de equilibrio y el riesgo operativo.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img6.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Costos variables altos
                  p.mb-0.text-center Reducen el margen de contribución.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img7.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Margen de contribución alto
                  p.mb-0.text-center Disminuye el punto de equilibrio.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img8.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Ventas inestables
                  p.mb-0.text-center Aumentan la incertidumbre sobre la utilidad operacional.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img9.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Costos fijos controlados
                  p.mb-0.text-center Reducen el riesgo ante caídas en ventas.
          .row.justify-content-center.align-items-center.mb-0
            .col-xl.mb-4.mb-lg-0
              p El siguiente caso relaciona el riesgo operativo con la cercanía de las ventas al punto de equilibrio:
              .caja-3(data-aos="fade-right")
                h5 Ejemplo aplicado
                p Una empresa tiene costos fijos mensuales de $30.000.000 y margen de contribución unitario de $50.000. Esto significa que necesita vender al menos 600 unidades para cubrir sus costos fijos. Si sus ventas normales son de 650 unidades, su margen de seguridad es reducido y cualquier disminución en ventas puede afectar la utilidad.
                p.mb-0 Al vender 1.200 unidades, la empresa supera con mayor amplitud el punto de equilibrio y las unidades adicionales contribuyen directamente a la utilidad operacional.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t3/img10.png', alt='').m-auto
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Apalancamiento operativo
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img11.png', alt='').m-auto
        .col-xl
          p El apalancamiento operativo mide el efecto que tienen los costos fijos sobre la utilidad operacional. Cuando las ventas cambian, la utilidad puede variar en una proporción mayor debido a la estructura fija. La fórmula es:
          .caja-3.color-1(data-aos="fade-left")
            h5.mb-0.text-center Grado de apalancamiento operativo = margen de contribución / utilidad operacional
      .row.justify-content-center
        .col-xl-10
          .caja-7.mb-5(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t2/img21.svg', alt='' style="width: 85px").m-auto
              .col-xl.col-md-10
                p.mb-0 El cálculo del grado de apalancamiento operativo e interpretar su efecto, se realiza así:
          PasosA.color-acento-contenido(tipo="n").mb-5
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Identificar ventas
                p.mb-0 Reconozca el valor total de las ventas del periodo, porque es la base para calcular el margen de contribución y analizar cambios en la utilidad.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img12.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img13.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Calcular margen
                p.mb-0 Reste los costos variables a las ventas. Este resultado arroja cuánto queda disponible para cubrir costos fijos y generar utilidad operacional.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Calcular utilidad
                p.mb-0 Reste los costos fijos al margen de contribución. Así se obtiene la utilidad operacional de la empresa.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img14.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img15.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Aplicar fórmula
                p.mb-0 Divida el margen de contribución entre la utilidad operacional para obtener el grado de apalancamiento operativo.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Interpretar resultado
                p.mb-0 Analice qué tan sensible es la utilidad operacional frente a cambios en las ventas. Un resultado alto indica mayor riesgo operativo.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img16.png', alt='' style="width: 300px").m-auto
      p.mb-5 El cálculo del apalancamiento operativo se desarrolla en el siguiente ejemplo:
      .row.justify-content-center.mb-5
        .col-xl-7
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 10.
            span Cálculo del grado de apalancamiento operativo
          .tabla-a(data-aos="zoom-in")
            table
              caption Tabla con fines didácticos para calcular el grado de apalancamiento operativo a partir del margen de contribución y la utilidad operacional.
              thead
                tr
                  th.ajuste-border-tabla.texto-left Concepto
                  th.ajuste-border-tabla.texto-left Cálculo
                  th.texto-left Valor
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Ventas
                  td.ajuste-border-tabla.texto-left Dato suministrado
                  td.texto-left $120.000.000
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Costos variables
                  td.ajuste-border-tabla.texto-left Dato suministrado
                  td.texto-left $72.000.000
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Margen de contribución
                  td.ajuste-border-tabla.texto-left $120.000.000 - $72.000.000
                  td.texto-left $48.000.000
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Costos fijos
                  td.ajuste-border-tabla.texto-left Dato suministrado
                  td.texto-left $28.000.000
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad operacional
                  td.ajuste-border-tabla.texto-left $48.000.000 - $28.000.000
                  td.texto-left $20.000.000
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Grado de apalancamiento operativo
                  td.ajuste-border-tabla.texto-left $48.000.000 / $20.000.000
                  td.texto-left 2,40
      p.mb-5 Esto se puede interpretar así:
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img17.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 #[b Interpretación:] un apalancamiento operativo de 2,40 indica que una variación del 10 % en las ventas puede producir un cambio aproximado del 24 % en la utilidad operacional, lo que refleja una alta sensibilidad frente al comportamiento de las ventas.
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Grado de apalancamiento operativo por variación porcentual
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El grado de apalancamiento operativo también puede calcularse comparando la variación porcentual de la utilidad operacional con la variación porcentual de las ventas. Esta forma permite analizar escenarios o periodos. La fórmula es:
          .caja-3.color-2(data-aos="fade-right")
            h5.mb-0.text-center Grado de apalancamiento operativo = variación porcentual de utilidad operacional / variación porcentual de ventas
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img18.png', alt='').m-auto
      p.mb-5 Se invita a seguir la siguiente secuencia para comparar dos escenarios y medir el efecto real de las ventas sobre la utilidad operacional:
      .row.justify-content-center.mb-5
        .col-xl-10
          PasosA.color-acento-contenido(tipo="l")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Identificar escenario actual
                p.mb-0 Reconozca las ventas y la utilidad operacional del periodo o escenario base.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img19.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img20.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Identificar escenario proyectado
                p.mb-0 Registre las ventas y la utilidad operacional del nuevo periodo o escenario de comparación.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Calcular variación de ventas
                p.mb-0 Determine el porcentaje de aumento o disminución de las ventas entre los dos escenarios.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img21.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img22.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Calcular variación de utilidad
                p.mb-0 Determine el porcentaje de cambio de la utilidad operacional entre el escenario actual y el proyectado.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Aplicar fórmula
                p.mb-0 Divida la variación porcentual de la utilidad operacional entre la variación porcentual de las ventas para obtener el grado de apalancamiento operativo.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img23.png', alt='' style="width: 300px").m-auto 
      p.mb-5 Para mayor comprensión del tema, se realiza el siguiente ejemplo:
      .row.justify-content-center.mb-5
        .col-xl-8
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 11.
            span Apalancamiento operativo por variación porcentual
          .tabla-a(data-aos="zoom-in")
            table
              caption Tabla con fines didácticos para analizar el efecto de un cambio en ventas sobre la utilidad operacional.
              thead
                tr
                  th.ajuste-border-tabla.texto-left Concepto
                  th.ajuste-border-tabla.texto-left Escenario actual
                  th.ajuste-border-tabla.texto-left Escenario proyectado
                  th.texto-left Variación
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Ventas
                  td.ajuste-border-tabla.texto-left $120.000.000
                  td.ajuste-border-tabla.texto-left $132.000.000
                  td.texto-left 10,0 %
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Costos variables
                  td.ajuste-border-tabla.texto-left $72.000.000
                  td.ajuste-border-tabla.texto-left $79.200.000
                  td.texto-left 10,0 %
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Margen de contribución
                  td.ajuste-border-tabla.texto-left $48.000.000
                  td.ajuste-border-tabla.texto-left $52.800.000
                  td.texto-left 10,0 %
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Costos fijos
                  td.ajuste-border-tabla.texto-left $28.000.000
                  td.ajuste-border-tabla.texto-left $28.000.000
                  td.texto-left 0,0 %
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad operacional
                  td.ajuste-border-tabla.texto-left $20.000.000
                  td.ajuste-border-tabla.texto-left $24.800.000
                  td.texto-left 24,0 %
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-5.ajuste-1
            p.text-center El cálculo se realiza así:
            .caja-3.color-1.mb-3(data-aos="fade-right")
              h5.mb-0.text-center Grado de apalancamiento operativo = 24 % / 10 % = 2,40
            p El resultado se interpreta a continuación:
            .caja-3.color-1(data-aos="fade-right")
              p.mb-0 #[b Interpretación:] un aumento del 10 % en las ventas incrementa aproximadamente un 24 % la utilidad operacional, debido a que los costos fijos permanecen constantes.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img24.png', alt='').m-auto
      Separador
      #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.5 Estructura de financiación y riesgo financiero
      p.mb-5 La estructura de financiación combina recursos propios y deuda, la cual puede apoyar el crecimiento, pero también aumentar el riesgo financiero. A continuación, se exponen algunas decisiones de financiación y sus posible efectos sobre los resultados:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img25.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img26.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Uso moderado de deuda
                  p.mb-0.text-center Puede apoyar crecimiento o inversión, pero requiere control de capacidad de pago.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img27.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Gastos financieros altos
                  p.mb-0.text-center Reducen la utilidad antes de impuestos y aumentan la presión sobre resultados.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img28.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Baja utilidad operacional
                  p.mb-0.text-center Disminuye la capacidad para cubrir intereses.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img29.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Deuda de corto plazo elevada
                  p.mb-0.text-center Aumenta la presión sobre el flujo de caja.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img30.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Mayor patrimonio
                  p.mb-0.text-center Reduce dependencia de terceros, aunque puede limitar el crecimiento si no hay financiación suficiente.
          .row.justify-content-center.align-items-center.mb-0
            .col-xl.mb-4.mb-lg-0
              p Este caso relaciona la deuda con la utilidad operacional y la capacidad de pago.
              .caja-3(data-aos="fade-right")
                h5 Ejemplo aplicado
                p Una empresa tiene utilidad operacional de $40.000.000 y gastos financieros de $8.000.000. En este caso, los intereses representan el 20 % de la utilidad operacional. Si la utilidad operacional se reduce a $20.000.000, esos mismos intereses representarían el 40 %, aumentando la presión sobre el resultado.
                p.mb-0 La deuda debe evaluarse según la capacidad de la operación para generar utilidad y cubrir los pagos financieros.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t3/img31.png', alt='').m-auto
      Separador
      #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.6 Apalancamiento financiero
      p.mb-5 El apalancamiento financiero mide el efecto de los gastos financieros sobre el resultado de la empresa. Su análisis permite identificar si la utilidad operacional es suficiente para cubrir intereses y mantener resultados favorables. La fórmula es:
      .row.justify-content-center.mb-5
        .col-xl-8
          .caja-3.color-2(data-aos="zoom-in")
            h5.mb-0.text-center Grado de apalancamiento financiero = utilidad operacional / utilidad antes de impuestos
      p.mb-5 A continuación, se desarrolla un ejercicio para calcular el apalancamiento financiero:
      .row.justify-content-center.mb-5
        .col-xl-8
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 12.
            span Cálculo del apalancamiento financiero
          .tabla-a(data-aos="zoom-in")
            table
              caption Tabla con fines didácticos para calcular el grado de apalancamiento financiero a partir de la utilidad operacional y los gastos financieros.
              thead
                tr
                  th.ajuste-border-tabla.texto-left Concepto
                  th.ajuste-border-tabla.texto-left Cálculo
                  th.texto-left Valor
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad operacional
                  td.ajuste-border-tabla.texto-left Dato suministrado
                  td.texto-left $20.000.000
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Gastos financieros
                  td.ajuste-border-tabla.texto-left Dato suministrado
                  td.texto-left $5.000.000
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad antes de impuestos
                  td.ajuste-border-tabla.texto-left $20.000.000 - $5.000.000
                  td.texto-left $15.000.000
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Grado de apalancamiento financiero
                  td.ajuste-border-tabla.texto-left $20.000.000 / $15.000.000
                  td.texto-left 1,33
      p.mb-5 La interpretación es la siguiente:
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img32.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p.mb-0 #[b Interpretación:] un apalancamiento financiero de 1,33 indica que los intereses amplifican los cambios de la utilidad operacional sobre el resultado antes de impuestos, por lo que debe garantizarse capacidad suficiente para cubrirlos.
      Separador
      #t_3_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.7 Grado de apalancamiento financiero por variación porcentua
      p.mb-5 El apalancamiento financiero también puede analizarse comparando la variación porcentual de la utilidad antes de impuestos frente a la variación porcentual de la utilidad operacional. La fórmula es:
      .row.justify-content-center
        .col-xl-10
          .caja-3.color-1.mb-5(data-aos="zoom-in")
            h5.mb-0.text-center Grado de apalancamiento financiero = variación porcentual de utilidad antes de impuestos / variación porcentual de utilidad operacional
          .caja-7.mb-5(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t2/img21.svg', alt='' style="width: 85px").m-auto
              .col-xl.col-md-10
                p.mb-0 Se recomienda seguir la siguiente secuencia para realizar los cálculos:
          PasosA.color-acento-contenido(tipo="n").mb-5
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Identificar escenario base
                p.mb-0 Reconozca la utilidad operacional y la utilidad antes de impuestos del periodo inicial.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img33.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img34.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Identificar escenario proyectado
                p.mb-0 Registre la utilidad operacional y la utilidad antes de impuestos del nuevo escenario.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Calcular variación operacional
                p.mb-0 Determine el porcentaje de aumento o disminución de la utilidad operacional entre los dos escenarios.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img35.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img36.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Calcular variación antes de impuestos
                p.mb-0 Determine el porcentaje de cambio de la utilidad antes de impuestos frente al escenario base.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Aplicar fórmula
                p.mb-0 Divida la variación porcentual de la utilidad antes de impuestos entre la variación porcentual de la utilidad operacional para obtener el grado de apalancamiento financiero.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img37.png', alt='' style="width: 300px").m-auto
      p.mb-5 Se invita a revisar el siguiente ejemplo:
      .row.justify-content-center.mb-5
        .col-xl-8
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 13.
            span Apalancamiento financiero por variación porcentual
          .tabla-a(data-aos="zoom-in")
            table
              caption Tabla con fines didácticos para analizar el efecto de los gastos financieros sobre el resultado antes de impuestos.
              thead
                tr
                  th.ajuste-border-tabla.texto-left Concepto
                  th.ajuste-border-tabla.texto-left Escenario actual
                  th.ajuste-border-tabla.texto-left Escenario proyectado
                  th.texto-left Variación
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad operacional
                  td.ajuste-border-tabla.texto-left $20.000.000
                  td.ajuste-border-tabla.texto-left $24.800.000
                  td.texto-left 24,0 %
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Gastos financieros
                  td.ajuste-border-tabla.texto-left $5.000.000
                  td.ajuste-border-tabla.texto-left $5.000.000
                  td.texto-left 0,0 %
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad antes de impuestos
                  td.ajuste-border-tabla.texto-left $15.000.000
                  td.ajuste-border-tabla.texto-left $19.800.000
                  td.texto-left 32,0 %
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-5.color-3.ajuste-2
            p.text-center El cálculo es el siguiente: 
            .caja-3.color-2.mb-3(data-aos="fade-right")
              h5.mb-0.text-center Grado de apalancamiento financiero = 32 % / 24 % = 1,33
            p A continuación, se presenta la interpretación del resultado:
            .caja-3.color-2(data-aos="fade-right")
              p.mb-0 #[b Interpretación:] el resultado confirma que los gastos financieros amplifican el cambio del resultado antes de impuestos frente al cambio en la utilidad operacional. Mientras la utilidad operacional aumenta 24 %, la utilidad antes de impuestos aumenta 32 %, porque los gastos financieros permanecen constantes.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img38.png', alt='').m-auto
      Separador
      #t_3_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.8 Apalancamiento total
      p.mb-5 El apalancamiento total integra el efecto del apalancamiento operativo y financiero. Permite estimar cómo un cambio en ventas puede afectar el resultado antes de impuestos, considerando costos fijos e intereses. La fórmula:
      .row.justify-content-center.mb-5
        .col-xl-8
          .caja-3.color-1(data-aos="zoom-in")
            h5.mb-0.text-center Grado de apalancamiento total = grado de apalancamiento operativo × grado de apalancamiento financiero
      p.mb-5 Reconozca como se integra el riesgo operativo y financiero así:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img39.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Apalancamiento operativo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Mide el efecto de los costos fijos sobre la utilidad operacional.
            .row(titulo="Apalancamiento financiero").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Mide el efecto de los intereses sobre la utilidad antes de impuestos.
            .row(titulo="Apalancamiento total").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Combina ambos efectos para evaluar el riesgo global.
            .row(titulo="Interpretación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Un resultado alto puede favorecer cuando las ventas crecen, pero aumenta el riesgo cuando disminuyen.
      p.mb-5 A continuación, se realiza un ejemplo:
      .caja-5.color-3(data-aos="zoom-in")
        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 14.
              span Cálculo del apalancamiento total
            .tabla-a(data-aos="zoom-in")
              table
                caption Tabla con fines didácticos para calcular el efecto conjunto del apalancamiento operativo y financiero.
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Concepto
                    th.texto-left Resultado
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Grado de apalancamiento operativo
                    td.texto-left 2,40
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Grado de apalancamiento financiero
                    td.texto-left 1,33
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Grado de apalancamiento total
                    td.texto-left 3,19
        .caja-6.color-2(data-aos="zoom-in")
          h5 El resultado se interpreta así:
          p.mb-0 #[b Interpretación:] un grado de apalancamiento total de 3,19 indica que un cambio porcentual en las ventas puede generar un cambio aproximado 3,19 veces mayor en la utilidad antes de impuestos. Si las ventas aumentan 10 %, el resultado antes de impuestos podría aumentar cerca de 31,9 %. Si las ventas disminuyen 10 %, el resultado podría caer en una proporción similar.
      Separador
      #t_3_9.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.9 Interpretación de resultados y decisiones asociadas
      p.mb-5 La interpretación del apalancamiento debe considerar las ventas, los costos, la deuda y la capacidad de pago para administrarlo según la realidad de la empresa. La siguiente tabla presenta posibles lecturas y acciones de mejora:
      .row.justify-content-center.mb-5
        .col-xl-8
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 15.
            span Interpretación del apalancamiento y decisiones asociadas
          .tabla-a(data-aos="zoom-in")
            table
              caption Tabla con fines didácticos para convertir los resultados de apalancamiento en decisiones financieras.
              thead
                tr
                  th.ajuste-border-tabla.texto-left Resultado observado
                  th.ajuste-border-tabla.texto-left Interpretación
                  th.texto-left Decisión posible
              tbody
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Apalancamiento operativo alto
                  td.ajuste-border-tabla.texto-left La utilidad operacional es muy sensible a cambios en ventas
                  td.texto-left Revisar costos fijos y fortalecer metas comerciales
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Apalancamiento operativo bajo
                  td.ajuste-border-tabla.texto-left La utilidad cambia menos frente a variaciones en ventas
                  td.texto-left Evaluar si existe capacidad para crecer con mayor eficiencia
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Apalancamiento financiero alto
                  td.ajuste-border-tabla.texto-left Los intereses tienen peso importante en el resultado
                  td.texto-left Revisar deuda, tasas, plazos y capacidad de pago
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Apalancamiento total alto
                  td.ajuste-border-tabla.texto-left La empresa combina riesgo operativo y financiero elevado
                  td.texto-left Controlar costos fijos, gastos financieros y escenarios de ventas
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Apalancamiento moderado
                  td.ajuste-border-tabla.texto-left Existe sensibilidad controlada frente a cambios
                  td.texto-left Mantener seguimiento y comparar con resultados proyectados
      p.mb-5 A continuación, se presenta un ejemplo aplicado que integra el cálculo de todos los apalancamientos: 
      .caja-5.mb-5(data-aos="zoom-in")
        .caja-6(data-aos="zoom-in").mb-5
          h5 Ejemplo aplicado
          p La empresa Comercial Progreso S.A.S. presenta la siguiente información mensual:
          ul.fa-ul.estilo___ul.mb-3
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Precio de venta unitario: $80.000
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Costo variable unitario: $50.000
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Unidades vendidas: 1.000
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Costos fijos: $18.000.000
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Gastos financieros: $2.000.000
          p.mb-0 En la siguiente tabla organiza la información necesaria para calcular apalancamiento operativo, financiero y total.
        .row.justify-content-center.mb-5
          .col-xl-7
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 16.
              span Datos para calcular apalancamiento
            .tabla-a(data-aos="zoom-in")
              table
                caption Tabla con fines didácticos para preparar el cálculo de apalancamientos.
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Concepto
                    th.ajuste-border-tabla.texto-left Cálculo
                    th.texto-left Valor
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Ventas
                    td.ajuste-border-tabla.texto-left 1.000 × $80.000
                    td.texto-left $80.000.000
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Costos variables
                    td.ajuste-border-tabla.texto-left 1.000 × $50.000
                    td.texto-left $50.000.000
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Margen de contribución
                    td.ajuste-border-tabla.texto-left $80.000.000 - $50.000.000
                    td.texto-left $30.000.000
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Costos fijos
                    td.ajuste-border-tabla.texto-left Dato suministrado
                    td.texto-left $18.000.000
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad operacional
                    td.ajuste-border-tabla.texto-left $30.000.000 - $18.000.000
                    td.texto-left $12.000.000
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Gastos financieros
                    td.ajuste-border-tabla.texto-left Dato suministrado
                    td.texto-left $2.000.000
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Utilidad antes de impuestos
                    td.ajuste-border-tabla.texto-left $12.000.000 - $2.000.000
                    td.texto-left $10.000.000
        p.mb-5 La siguiente tabla refleja el cálculo de los grados de apalancamiento de la empresa:
        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 17.
              span Cálculo de apalancamiento operativo, financiero y total
            .tabla-a(data-aos="zoom-in")
              table
                caption Tabla con fines didácticos para integrar el cálculo de apalancamiento operativo, financiero y total.
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Indicador
                    th.ajuste-border-tabla.texto-left Fórmula
                    th.texto-left Resultado
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Grado de apalancamiento operativo
                    td.ajuste-border-tabla.texto-left $30.000.000 / $12.000.000
                    td.texto-left 2,50
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Grado de apalancamiento financiero
                    td.ajuste-border-tabla.texto-left $12.000.000 / $10.000.000
                    td.texto-left 1,20
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Grado de apalancamiento total
                    td.ajuste-border-tabla.texto-left 2,50 × 1,20
                    td.texto-left 3,00
        .caja-6(data-aos="zoom-in")
          p La interpretación del caso es la siguiente:
          p.mb-0 #[b Interpretación:] el apalancamiento operativo de 2,50, el financiero de 1,20 y el total de 3,00 indican que una variación del 10 % en las ventas puede generar cambios de hasta 25 % en la utilidad operacional y 30 % en la utilidad antes de impuestos. Por ello, deben evaluarse las ventas, el margen de contribución y la capacidad de pago antes de aumentar costos fijos o deuda.
      p.mb-0 El apalancamiento permite evaluar cómo los costos fijos y la deuda afectan los resultados y apoyar decisiones financieras mediante escenarios.

</template>

<script>
export default {
  name: 'Tema3',
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
