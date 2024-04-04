<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Sistema gestor de base de datos
    .p-2.mb-5(style="background-color: #bae9d9 ")
      .row.justify-content-center.align-items-center.g-0.order-reverse.position-relative
        .col-lg-3.d-lg-block.d-none(style="margin-right: -5rem ;z-index: 1 "): img(src='@/assets/curso/temas/75.png', alt=''  )
        .col-lg-3.col-6.mb-lg-0.mb-3.d-block.d-lg-none: img(src='@/assets/curso/temas/75.png', alt=''  )
        .col-lg-9(style="z-index: 0")
          .tarjeta.bg-white.p-5.tarjet-icon
            p.mb-0 En el mercado existen muchos sistemas gestores de bases de datos, a continuación, se usará MySQL para realizar las prácticas, pero ello no significa ni que sea el mejor, o el más completo del mercado, sino más bien el más usado para aplicaciones web, de pequeña, mediana y, en algunos casos, de gran complejidad. Es un buen punto de partida y todos los conceptos en MySQL vistos son reutilizables en PosgresSQL, Oracle, u otro motor de bases de datos relacional.
    h4.mb-4 A continuación, se podrá conocer el paso a paso de la descarga e instalación del gestor MySQL Workbench y Web XAMPP:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/nQ0FWBJbbi0?si=sk3T5aj4JJ-pb_1C" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Descarga e instalación de herramienta CASE MySQL Workbench.
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/gRrKvV4cBWQ?si=5VzqXYfI21NSOoyv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Descarga e instalación de entorno desarrollo WEB XAMPP.
    .row.justify-content-center.mb-5
        .col-lg-12
          .p-5.rounded-3(style="background-color: #ffe888")
            p.mb-0 Finalmente, se debe revisar cuidadosamente cómo usar MySQL Workbench para diseñar la base de datos del Modelo relacional de la biblioteca del numeral 3.2:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .p-4(titulo="Diseño de una base de datos con -MySQL Workbench relación de uno a uno")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/to87Q97V61I?si=c75XUPRuuzZ7-3Oq" title="Diseño de una base de datos con -MySQL Workbench relación de uno a uno" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .p-4(titulo="Diseño de una base de datos con MySQL Workbench relación de uno a muchos")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/agqVXjaSJBg?si=RtiiBxuFvzka5Hth" title="Diseño de una base de datos con MySQL Workbench relación de uno a muchos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      .p-4(titulo="Diseño de una base de datos con MySQL Workbench relación de muchos a muchos")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/Ne8CzfgpGk8?si=2fJqa-SE_hNPdTSz" title="Diseño de una base de datos  con MySQL Workbench relación de muchos a muchos" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
    

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
