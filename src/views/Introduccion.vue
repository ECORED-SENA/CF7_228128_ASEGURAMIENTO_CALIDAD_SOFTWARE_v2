<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .p-5(style="background-color: #273a89").mb-5.rounded-3
      .row.justify-content-center.align-items-center
        .col-lg-2.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/1.png', alt='')
        .col-lg-10
          p.mb-0.text-white Una base de datos puede ser concebida como un “almacén” de información, el cual se define y crea una única vez con el objetivo de almacenar grandes cantidades de datos de manera organizada (o estructurada), facilitando así su posterior búsqueda y utilización. En este componente se explicará el concepto y las características de las bases de datos contemporáneas, considerando que cada una es diseñada para satisfacer los requisitos de información específicos de una organización o empresa. Estos diseños están ideados para ser implementados mediante #[span.resalte Sistemas de Gestión de Bases de Datos (SGDB)], que son sistemas o servicios informáticos que permiten a los usuarios definir, crear, brindar soporte y mantenimiento a las bases de datos, asegurando el control del acceso de manera segura.
    img(src='@/assets/curso/temas/2.png', alt='')
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
