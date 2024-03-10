<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Conceptos generales de bases de datos
    p.mb-5(data-aos='fade-right') El concepto general de bases de datos según la RAE es:
    .row.justify-content-center.mb-5
      .col-lg-5.mb-lg-0.mb-3  
        .bloque-texto-c(style="background-color: #dee1ed ").p-4
          i.fas.fa-quote-right.mb-3
          h4.mb-2 El conjunto de datos organizado de tal modo que permita obtener con rapidez diversos tipos de información
          span RAE, 2001
      .col-lg-7
        .p-4(style="background-color:#e1f6ef ").h-100
          p.mb-0 De acuerdo con esta definición, una hoja de cálculo de Excel puede considerarse una base de datos, o un conjunto de archivos debidamente organizados, o la lista de nombres y teléfonos que está en nuestros smartphones. En principio, es correcto llamarle base de datos a estos ejemplos, sin embargo, en el contexto de desarrollo de software, se referirá a ese conjunto de información que puede ser almacenada en grandes cantidades de forma organizada y es gestionada desde o a través de un #[b Sistema de Gestión de Bases de Datos (SGBD).]
    .p-4(style="background-color: #bae9d9 ").mb-5
      .row.justify-content-center.align-items-center.g-0.order-reverse.position-relative
        .col-lg-3.d-lg-block.d-none(style="margin-right: -5rem ;z-index: 1 "): img(src='@/assets/curso/temas/3.svg', alt=''  )
        .col-lg-3.col-6.mb-lg-0.mb-3.d-block.d-lg-none: img(src='@/assets/curso/temas/3.svg', alt=''  )
        .col-lg-9(style="z-index: 0")
          .tarjeta.bg-white.p-5.tarjet-icon
            p.mb-0 Para organizar y definir la información de forma sistemática, las bases de datos también deben poder almacenar una descripción precisa de los datos que contiene conocida como metadatos, a los que se le relaciona el tipo de información que conceptualmente es guardada (es decir si se agrega una explicación de la naturaleza del dato en la empresa) se da origen a lo que conoce como diccionario de datos o catálogo de datos.
    .fondo-mn.mn.p-5.mb-3
      h5.mb-0 Ejemplo 1
      p.mb-5(data-aos='fade-right') Una empresa gestiona una base de datos de llamadas telefónicas entrantes y salientes de su planta telefónica, en la que se registran los números de teléfono del llamante y la extensión que recibe o realiza la llamada. También se documenta la fecha y hora de cada llamada, si esta fue atendida y su duración, tal como se presenta en la siguiente tabla. 
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 1. 
        span Base de datos de llamadas telefónicas
      .tabla-a.color-acento-botones.mb-5
        table
          thead(style="background-color: #ffce00 ").border-0
            tr
              th calldate
              th src
              th Dst
              th duration
              th disposition
          tbody
            tr
              td 2021-04-10 00:12:17.0

              td 3023946875

              td 666
              td 00:05:33
              td ANSWERED
            tr
              td 2021-04-10 00:27:19.0
              td 3023946875
              td 666
              td 00:00:43
              td ANSWERED
            tr
              td 2021-04-10 00:22:52.0
              td 3174377015
              td 666
              td 00:05:40
              td ANSWERED
            tr
              td 2021-04-10 00:24:20.0
              td 3208098045
              td 666
              td 00:08:09
              td ANSWERED
            tr
              td 2021-04-10 00:29:28.0
              td 3162400761
              td 666
              td 00:05:19
              td ANSWERED
            tr
              td 2021-04-10 00:45:23.0
              td 7005
              td 883216361744
              td 00:00:55
              td ANSWERED
            tr
              td 2021-04-10 00:46:59.0
              td 7005
              td 883164829206
              td 00:00:03
              td ANSWERED
            tr
              td 2021-04-10 00:47:38.0
              td 7005
              td 883164829206
              td 00:00:39
              td ANSWERED
            tr
              td 2021-04-10 00:57:04.0
              td 3143259110
              td 666
              td 00:05:23
              td ANSWERED
            tr
              td 2021-04-10 01:29:16.0
              td 7004
              td 0
              td 00:00:08
              td ANSWERED
            tr
              td 2021-04-10 01:31:19.0
              td 22198329
              td 2
              td 00:12:04
              td ANSWERED
            tr
              td 2021-04-10 01:55:44.0
              td 88362500
              td 444
              td 00:06:36
              td ANSWERED
            tr
              td 2021-04-10 02:02:38.0
              td 88362500
              td 666
              td 00:03:01
              td ANSWERED
            tr
              td 2021-04-10 02:14:10.0
              td 3173678610
              td 666
              td 00:01:49
              td ANSWERED
            tr
              td 2021-04-10 02:55:15.0
              td 3184096662
              td 666
              td 00:04:33
              td ANSWERED
            tr
              td 2021-04-10 01:29:30.0
              td 7004
              td 1
              td 01:35:05
              td ANSWERED
            tr
              td 2021-04-10 03:04:30.0
              td 7004
              td 0
              td 00:00:05
              td ANSWERED
            tr
              td 2021-04-10 03:05:35.0
              td 7005
              td 883146610566
              td 00:02:35
              td ANSWERED
            tr
              td 2021-04-10 03:05:41.0
              td 3003264734
              td 666
              td 00:02:56
              td ANSWERED
            tr
              td 2021-04-10 03:18:00.0
              td 7005
              td 147584584
              td 00:00:00
              td ANSWERED
            tr
              td 2021-04-10 03:18:50.0
              td 7005
              td 883206657698
              td 00:00:02
              td ANSWERED
            tr
              td 2021-04-10 03:19:06.0
              td 7005
              td 883206657698

              td 00:00:02

              td NO ANSWERED
            tr
              td 2021-04-10 03:19:49.0
              td 7005
              td 883206657698
              td 00:00:00
              td NO ANSWERED
            tr
              td 2021-04-10 03:21:53.0
              td 7005
              td 883113084181
              td 00:00:00
              td NO ANSWERED
            tr
              td 2021-04-10 03:22:40.0
              td 7005
              td 883113084181
              td 00:00:00
              td NO ANSWERED
      p.mb-5(data-aos='fade-right') #[b La tabla 1] muestra los datos organizados de manera que cada columna agrupa un tipo específico de dato, mientras que cada fila, denominada registro, contiene un conjunto de datos relacionados entre sí. Esta relación indica que cada fila corresponde a una llamada telefónica única. A esta organización se le denomina estructura bidimensional, donde las filas y columnas constituyen las dos dimensiones.
        br
        br
        | #[b Los metadatos de la tabla anterior serían la definición de cada tipo de dato como se lista a continuación:]
      .row.justify-content-center.mb-5
        .col-lg-6.mb-lg-0.mb-3
          .tarjeta(style="background-color: #273a89 ").p-5
            p.mb-2(data-aos='fade-right').text-white #[b #[span(style='color: #FFCE00 !important ') calldate:]] tiene la estructura YYYY-MM-DD HH:MI:SS.Z , donde:
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0.text-white #[span(style='color: #FFCE00 !important') YYYY] sería el año un dato numérico entero de cuatro dígitos.
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0.text-white #[span(style='color: #FFCE00 !important') MM] el mes un dato numérico entero de dos dígitos entre 01 y 12.
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0.text-white #[span(style='color: #FFCE00 !important') DD] un dato numérico entero de dos dígitos entre 01 y 31
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0.text-white #[span(style='color: #FFCE00 !important') HH] un dato numérico de dos dígitos entre 00 y 23.
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0.text-white #[span(style='color: #FFCE00 !important') MI] y #[span(style='color: #FFCE00 !important') SS] un dato numérico de dos dígitos entre 00 y 59
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0.text-white #[span(style='color: #FFCE00 !important') Z] Un dato numérico de un digito (para representar milésimas de segundo).
        .col-lg-6.col-8: img(src='@/assets/curso/temas/4.svg', alt='')
      p.mb-5(data-aos='fade-right') Como este es el conjunto de datos de la primera columna, puede que use un término que describa lo anterior con una sola palabra que es TIMESTAMP, de esta forma esa primera columna puede quedar correctamente descrita como:
      .row.justify-content-center.mb-5
        .col-lg-8
          .tarjeta(style="background-color: #273a89").p-4
            p.mb-0.text-white #[span.resalte calldate TIMESTAM (1)]   Donde 1 es el número de dígitos de milisegundos (Z).
      p.mb-5(data-aos='fade-right') #[b src y dst:] empleado para fuente de la llamada o llamante (src) y destino de la llamada (dst) puede ser un número telefónico o de extensión telefónica, algunos tienen el código de país seguido del signo más, ejemplo: 57+3155008002.  Por lo tanto, se puede describir como una cadena de texto que no superará los 25 caracteres, pero puede tener menos de 25 caracteres, así el metadato iría descrito:
      .row.justify-content-center.mb-5
        .col-lg-8
          .tarjeta(style="background-color: #273a89").p-4
            p.mb-0.text-white #[span.resalte src VARCHAR(25)]  De esta forma decimos que es una cadena de caracteres que varía en longitud de 0 a 25 caracteres. 
              br
              |#[span.resalte dst VARCHAR(25)] 
      p.mb-5(data-aos='fade-right') #[b duration:] tiene la estructura HH:MI:SS y como se vio antes representa el tiempo en horas, minutos y segundos: 
      .row.justify-content-center.mb-5
        .col-lg-6
          .tarjeta(style="background-color: #273a89").p-4
            p.mb-0.text-white #[span.resalte src TIME ]  TIME se usa para esta estructura de dato en particular
      p.mb-5(data-aos='fade-right') #[b disposition:] indica si la llamada es atendida ANSWER, no atendida NO ANSWER, o si falló la FAIL. Se puede representar con una cadena de 10 caracteres.
        br
        |Por lo tanto, la solución de los metadatos de la base de datos de la figura 1 es:
      .row.justify-content-center.mb-5
        .col-lg-4
          .tarjeta(style="background-color: #3ee2a8 ").p-4
            p.mb-0.fw-bold calldate TIMESTAM(1),
              br
              |src VARCHAR(25),
              br
              |dst VARCHAR(25),
              br
              |src TIME,
              br
              |disposition VARCHAR(10)
      p.mb-5(data-aos='fade-right') Note que cada uno de ellos fue separado por un coma para que se diferencie de los demás.
    .fondo-mn.p-5.mn
      h5.mb-0 Ejemplo 2
      p.mb-3(data-aos='fade-right') Conociendo el objetivo de la base datos de la tabla 1 y los metadatos, se debe crear un diccionario de datos o un catálogo de datos.
        br
        br
        | #[b Solución]
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 2. 
        span Diccionario de datos base de llamadas telefónicas
      .tabla-a.color-acento-botones.mb-5
        table
          tbody
            tr
              td(style="background-color:#FFCE00 ; width: 20%") NOMBRE
              td(style="background-color:#E1F6EF ") Base datos de llamadas telefónicas.
            tr
              td(style="background-color:#FFCE00 ; width: 20%") CREACIÓN
              td(style="background-color:#E1F6EF ") 27/02/2021
            tr
              td(style="background-color:#FFCE00 ; width: 20%") DESCRIPCIÓN
              td(style="background-color:#E1F6EF ") Registro de las llamadas telefónicas de la PBX de la empresa STD LTDA.
      .tabla-a.color-acento-botones.mb-5
        table
          thead
            tr(style="background-color: #FFCE00")
              th CAMPO
              th TIPO DATO
              th TAMAÑO
              th DESCRIPCIÓN
          tbody.bg-white
            tr
              td calldate
              td TIMESTAMP
              td 1
              td Representa el momento exacto en que entra o sale la llamada.
            tr
              td src
              td VARCHAR
              td 25
              td Fuente (source) de la llamada, número de quien hace la llamada telefónica.
            tr
              td dst
              td VARCHAR
              td 25
              td Número del destino de la llamada telefónica.
            tr
              td duration
              td TIME
              td 0
              td Duración de la llamada telefónica.
            tr
              td disposition
              td VARCHAR
              td 10
              td Estado final en que se considera quedó la llamada.
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.col-8: img(src='@/assets/curso/temas/5.svg', alt='')
        .col-lg-7
          p.mb-0 Como se presenta en la tabla anterior, un diccionario de datos proporciona detalles sobre la estructura de los datos y cómo se utilizan en la empresa, organización o sistema de información. Para ello, es necesario asignar un nombre al conjunto completo de datos (indicado en la primera fila), establecer una fecha (segunda fila) y proporcionar una descripción (tercera fila) del conjunto de datos. En la tabla 2, se destaca la distinción entre la lógica de los datos (representada por la columna DESCRIPCIÓN del dato) y su almacenamiento físico (indicado por las columnas #[b TIPO DE DATO y TAMAÑO), evidenciando la independencia entre ambos aspectos.]
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Tipos de datos y restricción de no nulidad
    p.mb-5(data-aos='fade-right') Existen muchos tipos de datos y varían según el SGDB, ya que cada sistema gestor define sus propios tipos de datos, aunque existen las equivalencias notables y otras no tan notables, se observa una tabla que relacione el tipo de datos según los SGDB más comunes del mercado como ORACLE, PostgeSQL, MySQL y SQLServer.
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 3.
          span Tipos de datos según bases de datos
        .tabla-a.color-acento-botones
            table
              thead
                tr(style="background-color: #FFCE00")
                  th Tipo de dato
                  th ORACLE
                  th PostgreSQL
                  th MySQL
                  th SQLServer
              tbody.bg-white
                tr
                  td Cadena caracteres
                  td.fst-italic VARCHAR2
                  td.fst-italic CHARACTER VARYING
                  td VARCHAR
                  td.fst-italic VARCHAR
                tr
                  td Cadena texto
                  td.fst-italic TEXT
                  td.fst-italic TEXT
                  td TEXT
                  td.fst-italic NTEXT
                tr
                  td Entero pequeño
                  td.fst-italic SMALLINT
                  td.fst-italic SMALLINT
                  td SMALLINT
                  td.fst-italic SMALLINT

                tr
                  td Entero
                  td.fst-italic INTEGER
                  td.fst-italic INTEGER
                  td INT
                  td.fst-italic INT
                tr
                  td Fecha
                  td.fst-italic DATE
                  td.fst-italic DATE
                  td DATE
                  td.fst-italic DATE
                tr
                  td Fecha y hora
                  td.fst-italic DATE
                  td.fst-italic TIMESTAMP WITH TIME ZONE
                  td DATETIME
                  td .fst-italicDATETIME2
                tr
                  td Hora
                  td.fst-italic DATE
                  td.fst-italic TIME 
                  td TIME
                  td.fst-italic TIME
                tr
                  td Entero con decimales
                  td.fst-italic FLOAT
                  td.fst-italic REAL
                  td FLOAT
                  td.fst-italic FLOAT
    p.mb-5(data-aos='fade-right') Según el tipo de sistema gestor de bases de datos, cada uno define sus tipos de datos que, de alguna forma, son muy parecidos entre ellos, o existen equivalencias, las diferencias son pocas y están relacionadas con aspectos técnicos del almacenamiento, se pueden conocer más detalles de cada uno de ellos en los sitios oficiales de cada motor de base de datos:
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 4. 
          span Sistemas de Gestión de Bases de Datos
        .tabla-a.color-acento-botones
            table
              thead.border-0
                tr(style="background-color: #bae9d9")
                  th(style="width: 30%") Nombre
                  th Enlace de acceso
              tbody.bg-white
                tr
                  td.fw-bold ORACLE
                  td 
                    a(href="https://docs.oracle.com/cd/E11882_01/server.112/e41085/sqlqr06002.htm#SQLQR959", target="_blank", rel="noopener noreferrer") https://docs.oracle.com/cd/E11882_01/server.112/e41085/sqlqr06002.htm#SQLQR959
                tr
                  td.fw-bold PostgreSQL
                  td 
                    a(href="https://www.postgresql.org/docs/13/datatype.html#DATATYPE-TABLE", target="_blank", rel="noopener noreferrer") https://www.postgresql.org/docs/13/datatype.html#DATATYPE-TABLE
                tr
                  td.fw-bold MySQL
                  td 
                    a(href="https://dev.mysql.com/doc/refman/8.0/en/data-types.html", target="_blank", rel="noopener noreferrer") https://dev.mysql.com/doc/refman/8.0/en/data-types.html
                tr
                  td.fw-bold SQLServer
                  td 
                    a(href="https://docs.microsoft.com/en-us/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-ver15", target="_blank", rel="noopener noreferrer") https://docs.microsoft.com/en-us/sql/t-sql/data-types/data-types-transact-sql?view=sql-server-ver15
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        .cajon.color-acento-contenido.p-4.mb-4(style="background-color: #dcecfe ")
          .row.justify-content-center.align-items-center
            .col-lg-8
              p.mb-0 Existen varios tipos de restricciones, por ahora se verán la restricción de longitud,  por ejemplo: 
            .col-lg-4
              .tarjeta.rounded-3(style="background-color: #273a89").p-3
                p.mb-0.text-center 
                  span.resalte src VARCHAR (25)
        p Se define que #[b src] es una columna cuya longitud no puede exceder los 25 caracteres. Asimismo, se establece como obligatorio registrar un dato en dicha columna mediante una restricción de no nulidad, lo que significa que ninguna fila puede tener un valor nulo en esa columna. Por lo tanto, en el ejemplo de la base de datos de llamadas telefónicas, si se determina que todos los datos son obligatorios mediante el uso de la expresión #[em #[b  "NOT NULL"]], #[b los metadatos que define la estructura de los datos quedaría especificada de la siguiente manera:]
        .row.justify-content-center.mb-5
          .col-lg-7
            .p-4(style="background-color: #3ee2a8").rounded-3.h-100
              p.fw-bold.mb-0 calldate TIMESTAM(1) NOT NULL,
                | src VARCHAR(25)NOT NULL,
                | dst VARCHAR(25)NOT NULL,
                | src TIME NOT NULL,
                | disposition VARCHAR(10) NOT NULL
          .col-lg-5 
            .p-4(style="background-color: #fff9e0").rounded-3.h-100
              p.mb-0 Algunos sistemas, para abreviar en la decisión de no nulidad acostumbra a usar el acrónimo #[b NN] para representar #[em #[b NOT NULL.]] 
      .col-lg-5.mb-lg-0.mb-3.col-8: img(src='@/assets/curso/temas/6.png', alt='')
    Separador 
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Tipos de bases de datos
    p.mb-5(data-aos='fade-right') Las bases de datos han evolucionado a lo largo del tiempo, usando diferentes tipos de modelos o enfoques, se ha comprobado que algunos de ellos tienen mejor desempeño en distintos tipos de aplicación. #[b La estructura en la que se configuran los datos al interior de las bases de datos es una forma de clasificación:]
    .mn.bg-slide1.p-5.mb-5
      .tarjeta.bg-slide2.p-5
        SlyderA(tipo='b')
          .row.justify-content-center
            .col-lg-5.mb-4.mb-md-0.text-white
              h4 Bases de datos con estructura jerárquica
              p En las primeras bases de datos empleadas son las de estructura jerárquica. Las relaciones entre registros forman una estructura en árbol, en la actualidad un ejemplo de estas bases datos es la base da tos LDAP usada en la actualidad para sistema de directorio de datos tales como usuario, dispositivos, nombres, contraseñas, direcciones etc. dentro de una red de computadores
            .col-lg-5.col-7
              figure
                img(src='@/assets/curso/temas/7.svg', alt='')
          .row.justify-content-center
            .col-lg-5.mb-4.mb-md-0.text-white
              h4 Bases de datos con estructura en red
              p Esta estructura es un poco más compleja que la anterior porque contiene otras relaciones de las jerárquicas admitiendo relaciones de cada registro otros, de manera tal que puede seguir distintos caminos para acceder a la información.
            .col-lg-5.col-7
              figure
                img(src='@/assets/curso/temas/8.svg', alt='')
          .row.justify-content-center
            .col-lg-5.mb-4.mb-md-0.text-white
              h4 Bases de datos con estructura relacional
              p Es estas bases de datos son multipropósito, lo que las hace las más extendidas en la industria y más empleadas, pero son las compleja de aprender; por lo que solo se abordará el diseño e implementación de este tipo de bases de datos. 
                br
                |Se basan tablas como las que se presentó en la figura 1 y en la relación de los datos de unas tablas con otras.

            .col-lg-5.col-7
              figure
                img(src='@/assets/curso/temas/9.png', alt='')
          .row.justify-content-center
            .col-lg-5.mb-4.mb-md-0.text-white
              h4 Bases de datos con estructura multidimensional
              p Es la extensión de las bases de datos de estructuras relacionales, como se vio en las relacionales, se basan en estructuras bidimensionales (tablas), mientras que la multidimensional en cubos (tres dimensiones), o más complejas con N dimensione
            .col-lg-5.col-7
              figure
                img(src='@/assets/curso/temas/10.png', alt='')
          .row.justify-content-center
            .col-lg-5.mb-4.mb-md-0.text-white
              h4 Bases de datos con estructura orientada a objetos
              p Una base de datos orientada a objetos es un sistema de gestión de base de datos mediante el cual representamos la información en forma de objetos que son utilizados en programación orientada a objetos (Kyocera, 2021).
            .col-lg-5.col-7
              figure
                img(src='@/assets/curso/temas/11.png', alt='')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/12.svg', alt='')
      .col-lg-10
        p.mb-0 Cada tipo de bases de datos tiene un ámbito de aplicación en el que su desempeño es mejor. Por ejemplo, las bases de datos jerárquicas tienen un mejor desempeño en operaciones de consulta de datos puntuales, mientras que las de datos relacionales son precisas para garantizar la calidad de los datos y la no repetición de los mismos, aunque no muy optimizadas para hacer consultas, y, finalmente, las multidimensionales son muy útiles para análisis estadístico de datos históricos de volúmenes inmensos de datos. Aparte del tipo de datos, existe otro tipo de clasificaciones, ya no según la estructura en que se almacenan los datos, sino de acuerdo con la naturaleza de los datos.
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Clasificación de bases de datos
    p.mb-5(data-aos='fade-right') Según la naturaleza de los datos que se almacenan en la base de datos, se pueden clasificar. La siguiente tabla presenta una compilación de estas clasificaciones.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 5. 
      span Sistemas de Gestión de Bases de Datos
    .tabla-a.color-acento-botones
            table
              thead
                tr(style="background-color: #FFCE00")
                  th Criterio de clasificación
                  th Clasificación
                  th Descripción
              tbody.bg-white
                tr
                  td Según la variabilidad de los datos.
                  td Bases de datos estáticas.
                  td 
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-circle.fa-xs
                        p.mb-0 Son bases de datos, cuyos datos son históricos, es decir ya no se pueden modificar, se usan comúnmente para estudiar el comportamiento de los datos a través del tiempo.
                      li.d-flex
                        i.fas.fa-circle.fa-xs
                        p.mb-0 Generalmente, a este tipo de bases de datos se les llama bodega de datos.
                      li.d-flex
                        i.fas.fa-circle.fa-xs
                        p.mb-0 Muchas de estas bases de datos de almacenan en cubos para su análisis, se las conoce como OLAP, es el acrónimo en inglés de procesamiento analítico en línea #[em (On-Line Analytical Processing).]
    p.mb-5(data-aos='fade-right') Pueden existir otras clasificaciones orientadas al ámbito de uso, sin embargo, se presentan las más comunes en el ejercicio del desarrollo de software. La base de datos relacionales es de obligatorio dominio en cualquiera de los casos, ya que los conceptos de esta son reutilizables en casi todos los otros tipos.
    Separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.4 Sistema de gestión de bases de datos
    p.mb-5(data-aos='fade-right') Un sistema de gestión de la base de datos es un programa de computador que permite definir, crear y mantener los datos de una base de datos, controlando el acceso. 
      br
      |Los servicios SGDB:
    .row.justify-content-center.mb-5
      .col-lg-10
        SlyderF.mb-5(columnas="col-lg-4 col-xl-4")
          .tarjeta.color-acento-contenido.p-4
            img(src='@/assets/curso/temas/13.svg', alt='' style="width: 63px").mb-4
            p.mb-0 Permiten la definición de la base de datos usando un lenguaje de definición de datos.
          .tarjeta.color-acento-contenido.p-4
            img(src='@/assets/curso/temas/14.svg', alt='' style="width: 63px").mb-4
            p.mb-0 Permiten la inserción, actualización, eliminación y consulta de datos usando un lenguaje de manejo de datos.

          .tarjeta.color-acento-contenido.p-4
            img(src='@/assets/curso/temas/15.svg', alt='' style="width: 63px").mb-4
            p.mb-0 Proporcionan un acceso controlado a la base de datos (con autenticación, roles, niveles de acceso).

          .tarjeta.color-acento-contenido.p-4
            img(src='@/assets/curso/temas/16.svg', alt='' style="width: 63px").mb-4
            p.mb-0 Concurrencia (varios usuarios a la vez accediendo o manipulando los datos) y multitarea.

          .tarjeta.color-acento-contenido.p-4
            img(src='@/assets/curso/temas/17.svg', alt='' style="width: 63px").mb-4
            p.mb-0 Algunos SGDB permiten administrar el catálogo de datos.
    .row.justify-content-center.mb-5.g-0
      .col-lg-5 
        .p-5(style="background-color: #fff8d9 ").h-100
          p.mb-0 Los #[b SGBD] son una herramienta muy útil; sin embargo, se podría decir que los SGBD son un poco más complejos, ya que los usuarios ven más datos y sus relaciones de los que realmente se necesitan. 
      .col-lg-4: img(src='@/assets/curso/temas/18.svg', alt='')




          



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
