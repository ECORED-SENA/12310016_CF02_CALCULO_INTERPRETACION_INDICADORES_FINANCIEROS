<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .caja-1.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-1-p
            p.mb-0 La interpretación financiera para la toma de decisiones permite pasar del cálculo de indicadores a la comprensión de sus efectos en la gestión empresarial. No basta con obtener resultados de liquidez, actividad, endeudamiento o rentabilidad; es necesario analizar qué significan, qué alertas generan y cómo pueden orientar decisiones sobre pagos, cartera, inventarios, costos, gastos, financiación y utilidad.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/intro/img1.png', alt='').m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='').m-auto
        .col-xl
          .row.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/intro/img3.svg', alt='').m-auto
            .col-xl
              p.mb-0 Desde esta perspectiva, los indicadores financieros se convierten en herramientas de análisis que permiten reconocer fortalezas, riesgos y oportunidades de mejora dentro de la organización. A partir de sus resultados, se pueden identificar situaciones como baja capacidad de pago, cartera lenta, inventarios acumulados, endeudamiento creciente, disminución de márgenes o bajo rendimiento de los recursos utilizados.
          .caja-2(data-aos="fade-left")
            p.mb-0 Su aplicación se complementa con herramientas como el punto de equilibrio, el apalancamiento operativo y financiero, y el uso de hoja electrónica para construir escenarios. Estos elementos permiten evaluar el efecto de los cambios en ventas, costos, gastos y deuda sobre los resultados de la empresa, facilitando la elaboración de informes financieros con conclusiones, recomendaciones de mejora, acciones correctivas y acciones preventivas orientadas a la toma de decisiones.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
