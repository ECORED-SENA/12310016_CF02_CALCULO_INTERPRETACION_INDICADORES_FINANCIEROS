<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Informe financiero y recomendaciones para la toma de decisiones
      .caja-1.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1-p
            p.mb-0 El informe financiero organiza e interpreta los resultados para identificar fortalezas, riesgos y acciones relacionadas con liquidez, rentabilidad, endeudamiento, costos, ventas y capacidad de pago (Nieto, 2022).
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t5/img1.png', alt='').m-auto
      .bg-2
        .px-5
          #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
            h2 5.1 Estructura del informe financiero
          p.mb-5 El informe financiero organiza datos, cálculos, interpretaciones, conclusiones y recomendaciones para apoyar la toma de decisiones. La siguiente tabla presenta los apartados sugeridos para su elaboración.
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 22.
                span Estructura básica del informe financiero
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para estructurar un informe financiero aplicado a decisiones empresariales.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Apartado
                      th.ajuste-border-tabla.texto-left Contenido sugerido
                      th.texto-left Pregunta que responde
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Identificación de la empresa
                      td.ajuste-border-tabla.texto-left Nombre, actividad económica y periodo analizado.
                      td.texto-left ¿A quién corresponde el análisis?
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Información utilizada
                      td.ajuste-border-tabla.texto-left Estados financieros, indicadores y datos complementarios.
                      td.texto-left ¿Con qué información se trabajó?
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Técnicas aplicadas
                      td.ajuste-border-tabla.texto-left Análisis vertical, horizontal, indicadores, punto de equilibrio y apalancamiento.
                      td.texto-left ¿Qué herramientas se utilizaron?
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Resultados financieros
                      td.ajuste-border-tabla.texto-left Cálculos principales y escenarios relevantes.
                      td.texto-left ¿Qué resultados se obtuvieron?
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Interpretación
                      td.ajuste-border-tabla.texto-left Lectura de los resultados y sus implicaciones.
                      td.texto-left ¿Qué significan los resultados?
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Diagnóstico
                      td.ajuste-border-tabla.texto-left Fortalezas, alertas y riesgos financieros.
                      td.texto-left ¿Cuál es la situación financiera?
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Recomendaciones
                      td.ajuste-border-tabla.texto-left Acciones de mejora, correctivas y preventivas.
                      td.texto-left ¿Qué decisiones pueden tomarse?
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Conclusión
                      td.ajuste-border-tabla.texto-left Síntesis del análisis y orientación final.
                      td.texto-left ¿Cuál es el mensaje principal del informe?
          .row.justify-content-center.align-items-center.mb-0
            .col-xl.mb-4.mb-lg-0
              p Este ejemplo permite reconocer cómo una estructura ordenada facilita la presentación de resultados financieros.
              .caja-3(data-aos="fade-right")
                h5 Ejemplo aplicado
                p Una empresa presenta razón corriente de 1,4, prueba ácida de 0,7, días de cartera de 80, margen neto de 4 % y endeudamiento de 62 %. Si el informe solo evidencia estos datos, la lectura queda incompleta. Lo correcto es explicar que la empresa tiene capacidad general de pago, pero depende de inventarios y cartera; además, presenta presión por endeudamiento y baja utilidad final.
                p.mb-0 En este caso, el informe debe recomendar revisar recuperación de cartera, rotación de inventarios, programación de pagos, costos, gastos y nuevas obligaciones financieras. La estructura del informe permite pasar del dato a la decisión.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t5/img2.png', alt='').m-auto
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Integración de indicadores, punto de equilibrio y apalancamiento
      p.mb-5 El informe financiero debe integrar indicadores, punto de equilibrio, apalancamiento y escenarios. Estos resultados no deben presentarse como cifras aisladas, sino como elementos relacionados que explican la situación de la empresa. Recorra cada momento para reconocer cómo se integran las herramientas financieras dentro del informe.
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t5/img3.png', alt='' style="max-width: 350px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img4.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Indicadores financieros
                  p.mb-0.text-center Presentan liquidez, actividad, endeudamiento y rentabilidad.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img5.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Punto de equilibrio
                  p.mb-0.text-center Permite analizar ventas mínimas, costos y utilidad esperada.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img6.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Apalancamiento
                  p.mb-0.text-center Mide sensibilidad de resultados ante cambios en ventas y deuda.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img7.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Escenarios financieros
                  p.mb-0.text-center Proyectan posibles cambios y sus efectos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img8.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Interpretación integrada
                  p.mb-0.text-center Relaciona resultados para orientar decisiones.
          .row.justify-content-center.align-items-center.mb-0
            .col-xl.mb-4.mb-lg-0
              p Este caso integra indicadores, punto de equilibrio y apalancamiento para realizar un análisis financiero más completo.
              .caja-3(data-aos="fade-right")
                h5 Ejemplo aplicado
                p Una empresa tiene margen neto de 5 %, punto de equilibrio de 850 unidades y ventas reales de 900 unidades. Aunque genera utilidad, opera muy cerca del nivel mínimo requerido. Si además presenta apalancamiento operativo alto, una disminución moderada en ventas podría afectar considerablemente la utilidad operacional.
                p.mb-0 La empresa no debe considerar únicamente la utilidad positiva, sino también el margen de seguridad, los costos fijos, los precios, las ventas y posibles reducciones de la demanda.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t5/img9.png', alt='').m-auto
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Diagnóstico financiero para la toma de decisiones
      p.mb-5 El diagnóstico financiero resume la situación de la empresa a partir de los resultados analizados. Debe identificar fortalezas, alertas, riesgos y aspectos que requieren revisión. Los elementos que puede incluir un diagnóstico financiero son:
      .row.align-items-center.mb-5
        .col-xl-4(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/temas/t5/img10.png', alt='' style="max-width: 350px").m-auto
        .col-xl-8(data-aos="fade-left")
          SlyderF(columnas="col-lg-6 col-xl-6")
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img11.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Fortalezas
              p.mb-0.text-center Resultados favorables que evidencian capacidad financiera o buen desempeño.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img12.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Alertas
              p.mb-0.text-center Señales que requieren seguimiento, como baja liquidez o cartera lenta.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img13.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Riesgos
              p.mb-0.text-center Condiciones que pueden afectar la sostenibilidad financiera.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img14.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Aspectos por revisar
              p.mb-0.text-center Cuentas, políticas o decisiones que requieren análisis adicional.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img15.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Implicaciones
              p.mb-0.text-center Posibles efectos sobre pagos, utilidad, deuda, costos o flujo de caja.
      .bg-2
        .px-5
          p.mb-5 A continuación, se presenta tabla orientadora para realizar un diagnóstico:
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 23.
                span Guía para elaborar diagnóstico financiero
              .tabla-a(data-aos="zoom-in")
                table
                  caption Tabla con fines didácticos para formular diagnósticos financieros a partir de resultados integrados.
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Resultado observado
                      th.ajuste-border-tabla.texto-left Posible diagnóstico
                      th.texto-left Aspecto por revisar
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Prueba ácida menor que 1
                      td.ajuste-border-tabla.texto-left Liquidez dependiente de inventarios o cartera.
                      td.texto-left Calidad del activo corriente.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Días de cartera altos
                      td.ajuste-border-tabla.texto-left Demora en recuperación de ventas a crédito.
                      td.texto-left Política de crédito y gestión de cobro.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Inventarios con baja rotación
                      td.ajuste-border-tabla.texto-left Recursos inmovilizados en mercancía.
                      td.texto-left Compras, ventas y productos de baja salida.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Endeudamiento creciente
                      td.ajuste-border-tabla.texto-left Mayor dependencia de financiación externa.
                      td.texto-left Plazos, tasas y capacidad de pago.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cobertura de intereses baja
                      td.ajuste-border-tabla.texto-left Presión de gastos financieros.
                      td.texto-left Utilidad operacional y deuda.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Margen neto bajo
                      td.ajuste-border-tabla.texto-left Baja utilidad final sobre ventas.
                      td.texto-left Costos, gastos, descuentos e intereses.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Punto de equilibrio cercano a ventas reales
                      td.ajuste-border-tabla.texto-left Bajo margen de seguridad.
                      td.texto-left Volumen de ventas y costos fijos.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Apalancamiento total alto
                      td.ajuste-border-tabla.texto-left Alta sensibilidad del resultado.
                      td.texto-left Escenarios de ventas y estructura financiera.
          p.mb-5 Este ejemplo convierte los resultados financieros en un diagnóstico inicial para orientar decisiones.
          .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
            .bloque-texto-g__img(
              :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img16.jpg')})` }")
            .bloque-texto-g__texto.p-4
              h5 Ejemplo aplicado
              br
              br
              p Una empresa presenta ventas crecientes, pero margen neto en disminución. Además, sus gastos financieros aumentan y el nivel de endeudamiento pasa de 48 % a 61 %. El diagnóstico inicial debe señalar que el crecimiento comercial está acompañado de mayor presión financiera y menor rentabilidad final.
              br
              br
              p.mb-0 La decisión debe considerar ventas, costos, gastos financieros, deuda, precios y rentabilidad por producto. El diagnóstico organiza estos aspectos y orienta las recomendaciones.
      Separador
      #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.4 Conclusiones del análisis financiero
      p.mb-5 Las conclusiones financieras sintetizan los principales hallazgos, sus implicaciones y los aspectos que deben considerarse en la toma de decisiones. La siguiente tabla presenta criterios para su redacción.
      .row.justify-content-center.mb-5
        .col-xl-8
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 24.
            span Criterios para redactar conclusiones financieras
          .tabla-a(data-aos="zoom-in")
            table
              caption Tabla con fines didácticos para orientar la formulación de conclusiones financieras.
              thead
                tr
                  th.ajuste-border-tabla.texto-left Criterio
                  th.ajuste-border-tabla.texto-left Aplicación
                  th.texto-left Ejemplo
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Basarse en resultados
                  td.ajuste-border-tabla.texto-left Usar cifras calculadas.
                  td.texto-left La prueba ácida de 0,78 evidencia baja liquidez inmediata.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Relacionar indicadores
                  td.ajuste-border-tabla.texto-left No interpretar datos aislados.
                  td.texto-left Cartera lenta y pasivo corriente alto presionan el flujo de caja.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Explicar el efecto
                  td.ajuste-border-tabla.texto-left Señalar implicaciones financieras.
                  td.texto-left La baja rotación de inventarios inmoviliza recursos.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Priorizar hallazgos
                  td.ajuste-border-tabla.texto-left Destacar lo más relevante.
                  td.texto-left El endeudamiento creciente exige revisar capacidad de pago.
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Evitar generalidades
                  td.ajuste-border-tabla.texto-left Redactar con precisión.
                  td.texto-left El margen neto bajó por aumento de costos y gastos.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Conectar con decisiones
                  td.ajuste-border-tabla.texto-left Preparar recomendaciones.
                  td.texto-left Se requiere fortalecer recaudo y controlar gastos.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p El siguiente ejemplo relaciona una conclusión financiera con resultados concretos:
          .caja-3(data-aos="fade-right")
            h5 Ejemplo aplicado
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-dollar-sign
                | Conclusión débil: la empresa debe mejorar su situación financiera.
              li.mb-0
                span.fa-li
                  i.fas.fa-dollar-sign
                | Conclusión estructurada: la empresa presenta presión de liquidez porque la prueba ácida es menor que 1, los días de cartera superan la política de crédito y el pasivo corriente aumentó frente al periodo anterior. Esta situación exige revisar recaudos, programación de pagos y composición del activo corriente.
            p.mb-0 La segunda conclusión es más útil porque relaciona resultados, identifica la causa probable y prepara la decisión.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img17.png', alt='').m-auto
      Separador
      #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.5 Recomendaciones de mejora
      p.mb-5 Las recomendaciones de mejora se formulan cuando los resultados son aceptables, pero pueden optimizarse. Deben ser concretas, viables y coherentes con los hallazgos del análisis financiero. Consulte cada recomendación para reconocer qué aspecto financiero puede fortalecerse.
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img18.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Razón corriente estable").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se recomienda mejorar el seguimiento al flujo de caja, con el fin de mantener la capacidad de pago de la empresa.
            .row(titulo="Días de cartera moderados").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se recomienda clasificar la cartera por edades, para mejorar la oportunidad del recaudo y fortalecer la gestión de cobro.
            .row(titulo="Inventarios con rotación aceptable").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se recomienda revisar los productos de menor salida, con el propósito de aumentar la eficiencia en las compras y evitar acumulaciones innecesarias.
            .row(titulo="Endeudamiento controlado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se recomienda comparar tasas y plazos de las obligaciones financieras, para reducir el costo financiero.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Margen neto positivo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se recomienda analizar la rentabilidad por producto, con el fin de fortalecer las líneas más rentables.
            .row(titulo="Punto de equilibrio superado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se recomienda definir metas superiores de venta, para aumentar la utilidad operacional.
            .row(titulo="Apalancamiento moderado").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se recomienda hacer seguimiento a diferentes escenarios, con el propósito de controlar la sensibilidad del resultado ante cambios en ventas, costos o gastos financieros.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img19.png", alt="" ).m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t5/img20.png', alt='').m-auto
        .col-xl
          p Este caso formula recomendaciones de mejora a partir de resultados financieros específicos:
          .caja-3(data-aos="fade-left")
            h5 Ejemplo aplicado
            p Si una empresa tiene margen neto positivo, pero inferior al año anterior, la recomendación de mejora puede ser revisar costos por proveedor, descuentos otorgados y gastos operacionales. La finalidad es recuperar margen sin afectar necesariamente el volumen de ventas.
            p.mb-0 Esta recomendación es más útil que una frase general, porque indica acciones concretas que pueden revisarse en la operación.
      Separador
      #t_5_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.6 Acciones correctivas
      p.mb-5 Las acciones correctivas permiten intervenir situaciones financieras desfavorables, corregir problemas y reducir sus efectos sobre la empresa. Estas son:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img21.png", alt="" ).m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Prueba ácida menor que 1").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Puede originarse por inventarios altos o cartera lenta. Se recomienda recuperar cartera y depurar inventarios.
            .row(titulo="Días de cartera elevados").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Pueden deberse a una débil gestión de cobro. Se recomienda establecer acuerdos de pago y hacer seguimiento a vencimientos.
            .row(titulo="Inventarios acumulados").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Pueden presentarse por compras no alineadas con las ventas. Se recomienda reducir compras y promover productos de baja rotación.
            .row(titulo="Endeudamiento alto").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Puede originarse por nuevas obligaciones sin suficiente generación de recursos. Se recomienda renegociar deuda y limitar nuevos créditos.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Baja cobertura de intereses").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Puede deberse a intereses altos frente a la utilidad operacional. Se recomienda revisar tasas, plazos y opciones de refinanciación.
            .row(titulo="Margen neto bajo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Puede presentarse por costos o gastos elevados. Se recomienda controlar gastos y revisar precios.
            .row(titulo="Ventas por debajo del punto de equilibrio").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Pueden originarse por volumen insuficiente o costos altos. Se recomienda aumentar ventas, ajustar precios o reducir costos fijos.
            .row(titulo="Apalancamiento total alto").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Puede indicar riesgo operativo y financiero combinado. Se recomienda simular escenarios y controlar deuda y costos fijos.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img22.png", alt="" ).m-auto
      p.mb-5 Este ejemplo permite relacionar una alerta financiera con una acción correctiva inmediata.
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-0(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img23.jpg')})` }")
        .bloque-texto-g__texto.p-4
          h5 Ejemplo aplicado
          br
          br
          p Una empresa presenta días de cartera de 90, aunque su política de crédito es de 45 días. La acción correctiva debe enfocarse en clasificar la cartera por edades, contactar clientes vencidos, renegociar pagos, suspender nuevos créditos a clientes morosos y fortalecer el seguimiento al recaudo.
          br
          br
          p.mb-0 La acción correctiva responde directamente al problema identificado: la demora en convertir ventas a crédito en efectivo.
      Separador
      #t_5_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.7  Acciones preventivas
      p.mb-5 Las acciones preventivas buscan anticipar riesgos antes de que se conviertan en problemas financieros. Se apoyan en seguimiento, control, proyección y validación permanente de la información. Estas son:
      .bg-1
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img24.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Baja liquidez futura
              p.mb-0.text-center Se recomienda elaborar flujo de caja proyectado, con el propósito de anticipar faltantes de efectivo.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img25.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Cartera creciente
              p.mb-0.text-center Se recomienda definir alertas de vencimiento, para evitar acumulación de cuentas por cobrar.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img26.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Inventarios lentos
              p.mb-0.text-center Se recomienda revisar compras periódicamente, con el fin de evitar mercancía inmovilizada.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img27.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Endeudamiento creciente
              p.mb-0.text-center Se recomienda establecer límites de endeudamiento, para controlar la dependencia de terceros.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img28.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Gastos financieros altos
              p.mb-0.text-center Se recomienda evaluar la deuda antes de adquirirla, con el propósito de prevenir presión sobre la utilidad.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img29.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Margen neto en disminución
              p.mb-0.text-center Se recomienda hacer seguimiento a costos y gastos, para evitar deterioro de la rentabilidad.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img30.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Punto de equilibrio alto
              p.mb-0.text-center Se recomienda simular cambios antes de asumir costos fijos, con el fin de prevenir presión sobre las ventas.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img31.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Apalancamiento elevado
              p.mb-0.text-center Se recomienda analizar escenarios de caída en ventas, para preparar medidas ante una menor demanda.
          .row.justify-content-center.align-items-center.mb-5
            .col-xl.mb-4.mb-lg-0
              p Se invita a revisar el siguiente ejemplo:
              .caja-3(data-aos="fade-right")
                h5 Ejemplo aplicado
                p Si una empresa proyecta adquirir nueva maquinaria mediante crédito, una acción preventiva sería simular cómo cambiarán los gastos financieros, el punto de equilibrio y el apalancamiento financiero. Si el escenario presenta alta sensibilidad ante una caída de ventas, la empresa puede reconsiderar el monto, el plazo o el momento de la inversión.
                p.mb-0 La acción preventiva no impide crecer; permite hacerlo con mayor control del riesgo financiero.
            .col-xl-auto.col-md-9(data-aos="fade-left")
              figure
                img(src='@/assets/curso/temas/t5/img32.png', alt='').m-auto
      p.mb-5 A continuación, se presenta un caso práctico integrador:
      .caja-5.mb-5(data-aos="zoom-in")
        h5 Caso práctico integrador
        p La empresa Comercial Futuro S.A.S. presenta los siguientes resultados del año 2:
        .row.justify-content-center.mb-5
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 25.
              span Resultados financieros de Comercial Futuro S.A.S.
            .tabla-a(data-aos="zoom-in")
              table
                caption Tabla con fines didácticos para integrar resultados financieros en un informe de análisis.
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Herramienta
                    th.texto-left Resultado
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Razón corriente
                    td.texto-left 1,45
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Prueba ácida
                    td.texto-left 0,82
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Días de cartera
                    td.texto-left 78 días
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Días de inventario
                    td.texto-left 92 días
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Nivel de endeudamiento
                    td.texto-left 63 %
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Cobertura de intereses
                    td.texto-left 2,1 veces
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Margen neto
                    td.texto-left 4,5 %
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold ROA
                    td.texto-left 6,8 %
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold ROE
                    td.texto-left 17,0 %
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Punto de equilibrio
                    td.texto-left 850 unidades
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Ventas reales
                    td.texto-left 1.000 unidades
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Grado de apalancamiento operativo
                    td.texto-left 2,80
                  tr
                    td.ajuste-border-tabla.texto-left.text-weight-bold Grado de apalancamiento financiero
                    td.texto-left 1,35
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left.text-weight-bold Grado de apalancamiento total
                    td.texto-left 3,78
        p.mb-5 La siguiente tabla presenta una estructura de informe que relaciona resultados, interpretación y recomendaciones.
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
          h5 Tabla 26.
          span Informe financiero resumido de Comercial Futuro S.A.S.
        .tabla-a(data-aos="zoom-in").mb-5
          table
            caption Tabla con fines didácticos para presentar resultados financieros orientados a la toma de decisiones.
            thead
              tr
                th.ajuste-border-tabla.texto-left Aspecto analizado
                th.ajuste-border-tabla.texto-left Hallazgo
                th.ajuste-border-tabla.texto-left Interpretación
                th.texto-left Recomendación
            tbody
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Liquidez
                td.ajuste-border-tabla.texto-left Prueba ácida de 0,82.
                td.ajuste-border-tabla.texto-left La empresa depende de inventarios y cartera para cubrir obligaciones próximas.
                td.texto-left Fortalecer recaudo y revisar rotación de inventarios.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Actividad
                td.ajuste-border-tabla.texto-left Cartera de 78 días.
                td.ajuste-border-tabla.texto-left El recaudo puede estar tardando más de lo conveniente.
                td.texto-left Revisar política de crédito y cartera vencida.
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Actividad
                td.ajuste-border-tabla.texto-left Inventarios de 92 días.
                td.ajuste-border-tabla.texto-left Hay recursos inmovilizados en mercancía.
                td.texto-left Ajustar compras y depurar productos de baja salida.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Endeudamiento
                td.ajuste-border-tabla.texto-left Nivel de 63 %.
                td.ajuste-border-tabla.texto-left Existe alta dependencia de financiación externa.
                td.texto-left Revisar nuevas deudas, tasas y plazos.
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Cobertura de intereses
                td.ajuste-border-tabla.texto-left 2,1 veces.
                td.ajuste-border-tabla.texto-left La utilidad operacional cubre intereses, pero con margen limitado.
                td.texto-left Controlar gastos financieros y mejorar utilidad operacional.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Rentabilidad
                td.ajuste-border-tabla.texto-left Margen neto de 4,5 %.
                td.ajuste-border-tabla.texto-left La utilidad final sobre ventas es reducida.
                td.texto-left Revisar costos, gastos, precios y descuentos.
              tr
                td.ajuste-border-tabla.texto-left.text-weight-bold Punto de equilibrio
                td.ajuste-border-tabla.texto-left 850 unidades frente a 1.000 vendidas.
                td.ajuste-border-tabla.texto-left La empresa supera el equilibrio, pero no tiene un margen amplio.
                td.texto-left Aumentar ventas o reducir costos fijos.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla.texto-left.text-weight-bold Apalancamiento total
                td.ajuste-border-tabla.texto-left 3,78.
                td.ajuste-border-tabla.texto-left Una caída en ventas puede afectar fuertemente la utilidad.
                td.texto-left Simular escenarios y evitar nuevos costos fijos sin análisis.
        p.mb-5 La interpretación del caso es la siguiente:
        .caja-6(data-aos="zoom-in").mb-5
          h5 Interpretación del caso: 
          p Comercial Futuro S.A.S. presenta capacidad general de pago, aunque su liquidez inmediata es limitada y parte de sus recursos permanece concentrada en cartera e inventarios. El endeudamiento del 63 % y la cobertura de intereses de 2,1 veces requieren seguimiento, debido a que una reducción de las ventas o un aumento de los gastos podría afectar su capacidad de pago.
          p.mb-0 La empresa también registra un margen neto bajo, un margen de seguridad reducido frente al punto de equilibrio y un apalancamiento total elevado. Por esta razón, debe revisar sus costos, gastos, precios, condiciones financieras y estrategias de ventas para disminuir el riesgo y fortalecer sus resultados.
        p.mb-5 Del presente caso, se genera la siguiente conclusión:
        .caja-6(data-aos="zoom-in").mb-5
          h5 Conclusiones del caso: 
          p Comercial Futuro S.A.S. supera el punto de equilibrio y genera utilidad, pero presenta alertas en liquidez, actividad, endeudamiento y rentabilidad. Por ello, debe mejorar la recuperación de cartera, la rotación de inventarios y el control de sus obligaciones financieras.
          p.mb-0 Antes de asumir nuevos costos fijos o deudas, la empresa debe simular escenarios y evaluar el efecto de las ventas, los costos y los gastos financieros sobre la utilidad.
        p.mb-5 Las recomendaciones finales son:
        .caja-6(data-aos="zoom-in")
          p.mb-0 #[b Recomendaciones finales:] se recomienda realizar seguimiento mensual a la cartera y los inventarios, revisar las condiciones de endeudamiento y evaluar costos, gastos, precios y rentabilidad por producto. Además, la hoja electrónica debe utilizarse para simular escenarios y anticipar riesgos financieros.
      p.mb-0 El informe financiero identifica riesgos y orienta acciones para fortalecer la gestión y la sostenibilidad empresarial.

</template>

<script>
export default {
  name: 'Tema5',
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
