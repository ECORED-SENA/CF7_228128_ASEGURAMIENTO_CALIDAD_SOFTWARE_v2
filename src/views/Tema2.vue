<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Modelo entidad relación
    .p-2.mb-5(style="background-color: #bae9d9 ")
      .row.justify-content-center.align-items-center.g-0.order-reverse.position-relative
        .col-lg-3.d-lg-block.d-none(style="margin-right: -5rem ;z-index: 1 "): img(src='@/assets/curso/temas/19.png', alt=''  )
        .col-lg-3.col-6.mb-lg-0.mb-3.d-block.d-lg-none: img(src='@/assets/curso/temas/19.png', alt=''  )
        .col-lg-9(style="z-index: 0")
          .tarjeta.bg-white.p-5.tarjet-icon
            p.mb-0 Las bases de datos relaciones, inicialmente no son fáciles de modelar, por lo que se requiere de cierto nivel de abstracción, es decir, se va ocultando la complejidad del diseño de la base de datos, primero analizando el requerimiento desde un punto de vista conceptual, entendido como las necesidades de la empresa o del sistema de información, luego se va analizando desde el punto de vista de la lógica de los datos y, finalmente, se analiza físicamente como se almacenarán los datos. 
    .cajon-b.color-primario.p-3.mb-5
      p.mb-0 Permite representar la información mediante tres elementos fundamentales: entidades #[b (objetos como personas o cuentas, simbolizados con rectángulos), atributos (características de las entidades, representadas con elipses) y relaciones (vínculos entre entidades, ilustrados con rombos).] Este modelo proporciona una estructura clara para organizar datos del mundo real, como se presenta a continuación: 
    ImagenInfografica.color-acento-botones.mb-5.d-none.d-md-block
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/20d.svg', alt='Diagrama de entidad-relación que muestra dos entidades, cada una con tres atributos conectados. Entre las entidades hay un rombo etiquetado como "Relaciones" que las une, indicando una asociación entre ellas')
      .tarjeta.bg-white.p-3(x="14%" y="47%" numero="+")
        h5 Atributos
        p Las entidades están descritas por un conjunto de atributos, por ejemplo, una persona puede tener estos atributos: #[b nombres, apellidos, edad, documento de identidad (identificación);] o la cuenta bancaria puede tener los siguientes atributos: #[b número de cuenta, saldo, fecha de creación;] se representan con una elipse.
      .tarjeta.bg-white.p-3(x="35%" y="47%" numero="+")
        h5 Entidad
        p El modelo de datos entidad-relación (E-R) está basado en una percepción del mundo real que consta de una colección de  objetos básicos, llamados entidades, y de las relaciones entre  estos objetos. Una entidad es una «cosa» u «objeto» en el  mundo real que es distinguible de otros objetos. Por ejemplo,  cada persona es una entidad, y las cuentas bancarias pueden  ser consideradas entidades (Henry, 2002) y se representa con  un rectángulo.
      .tarjeta.bg-white.p-3(x="50%" y="47%" numero="+")
        h5 Relaciones
        p Una relación es una asociación entre varias entidades. Por ejemplo, una relación titular asocia un cliente con cada cuenta que tiene (de la que es titular). Se verá más claro en un diagrama, pero antes se deben considerar los siguientes elementos y se representa con un rombo. 
    
    
    ImagenInfografica.color-acento-botones.mb-5.d-md-none
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/20r.svg', alt='Diagrama de entidad-relación que muestra dos entidades, cada una con tres atributos conectados. Entre las entidades hay un rombo etiquetado como "Relaciones" que las une, indicando una asociación entre ellas')
      .tarjeta.bg-white.p-3(x="80%" y="0%" numero="+")
        p Las entidades están descritas por un conjunto de atributos, por ejemplo, una persona puede tener estos atributos: #[b nombres, apellidos, edad, documento de identidad (identificación);] o la cuenta bancaria puede tener los siguientes atributos: #[b número de cuenta, saldo, fecha de creación;] se representan con una elipse.
      .tarjeta.bg-white.p-3(x="28%" y="25%" numero="+")
        p El modelo de datos entidad-relación (E-R) está basado en una percepción del mundo real que consta de una colección de  objetos básicos, llamados entidades, y de las relaciones entre  estos objetos. Una entidad es una «cosa» u «objeto» en el  mundo real que es distinguible de otros objetos. Por ejemplo,  cada persona es una entidad, y las cuentas bancarias pueden  ser consideradas entidades (Henry, 2002) y se representa con  un rectángulo.
      .tarjeta.bg-white.p-3(x="28%" y="44%" numero="+")
        p Una relación es una asociación entre varias entidades. Por ejemplo, una relación titular asocia un cliente con cada cuenta que tiene (de la que es titular). Se verá más claro en un diagrama, pero antes se deben considerar los siguientes elementos y se representa con un rombo. 
    
    
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        .cajon-b.color-primario.p-3.mb-5
          p.mb-0 Para una base de datos de un sistema bancario, que incluye clientes (es decir, personas) y sus cuentas bancarias, el diagrama Entidad-Relación tiene dos entidades principales: persona y cuenta, cada una con sus atributos específicos. 
            br
            br
            |Se debe tener en cuenta que el modelo relacional convierte las entidades en tablas, por lo tanto, se puede poner como ejemplo que las entidades personas se conviertan en tablas, como se presenta a continuación: 
      .col-lg-5.col-7: img(src='@/assets/curso/temas/21.png', alt='')


    .fondo-mn.p-5.mn.mb-5
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 6.
            span Persona en una entidad relación
          .tabla-a.color-acento-botones.mb-5
            table
              thead(style="background-color: #ffce00 ").border-0
                tr
                  th identificacion
                  th nombres
                  th apellidos
                  th edad
              tbody
                tr
                  td 8.127.346
                  td Ana lis
                  td Mendez
                  td 34
                tr
                  td 212.394.762
                  td Jose Omar
                  td Ciano 
                  td 28
                tr
                  td 545.232.546
                  td Luis Dario
                  td Marquez
                  td 21
                tr
                  td 125.446.732
                  td Armando 
                  td Bronca Segura
                  td 35
                tr
                  td 33.565.236.787
                  td Vistor José
                  td Diento Paz
                  td 24
                tr
                  td 2.343.554.768
                  td Jose Nicolás
                  td Timado Ruiz
                  td 19
                tr
                  td 45.456.778
                  td Andrea
                  td Martinez
                  td 36
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 7.
            span Cuenta en una entidad relación
          .tabla-a.color-acento-botones.mb-5
            table
              thead(style="background-color: #ffce00 ").border-0
                tr
                  th numero_cuenta
                  th titular
                  th saldo
                  th Fecha_creacion
              tbody
                tr
                  td 19.283.746
                  td 7
                  td $ 2.589.954,00
                  td 25/08/1998
                tr
                  td 67.789.901
                  td 1
                  td $ 23.465.212,00
                  td 26/08/2001
                tr
                  td 32.112.312
                  td 5
                  td $ 2.343.242,00
                  td 27/08/2004
                tr
                  td 41.928.374
                  td 2
                  td $ 2.343.423,00 
                  td  31/08/2013

                tr
                  td 38.342.657
                  td 6
                  td $ 8.965.211,00
                  td 30/08/2010
                tr
                  td 32.443.171
                  td 1
                  td $ 11.172.594,33 
                  td 22/06/2001
                tr
                  td 34.920.608
                  td 5
                  td $  14.483.578,83 
                  td 1/09/2016
                tr
                  td 17.980.455
                  td 3
                  td $ 17.794.563,33 
                  td 3/09/2019
                tr
                  td 26.754.825
                  td 4
                  td $  21.105.547,83
                  td 12/04/2022
    p.mb-5(data-aos='fade-right') Las tablas presentan cada una un conjunto de registros, la tabla 6 muestra 7 registros y la tabla 7 muestra 9 de ellas, cada uno de estos registros representa un objeto, es decir, de la tabla persona hay 6 (objetos) o personas, a la agrupación de los datos de cada registro se le llama TUPLA y, en términos sencillos, una #[span.resalte2 TUPLA] de una base datos es el conjunto de todos los atributos (columnas) de una fila.
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1  Relaciones entre entidades
    p.mb-5(data-aos='fade-right') Como se observa en las tablas 6 y 7, una entidad se puede representar con una tabla; sin embargo, la relación titular aún no se sabe cómo representarla y para ello se debe definir algunas propiedades de los atributos. 
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4(style="background-color: #273a89")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/22.svg', alt='' style='width: 105px' )
            .col-lg-9
              p.mb-0.text-white #[strong Principio de unicidad:] En una tabla nunca deben existir TUPLAS repetidas, es decir, no debe haber más de una fila con exactamente los mismos valores en cada columna que otra fila de la misma tabla. En otras palabras, cada fila debe diferir al menos en un elemento (columna) en relación con las demás.
    p.mb-5(data-aos='fade-right') En una base de datos relacional, las relaciones permiten evitar datos redundantes. En el ejemplo anterior una persona pudiera tener varias cuentas bancarias, pero no es deseable que, por cada una de las cuentas bancarias asociadas a la misma persona, se deban repetir los datos de esta, sino más bien, que se debe encontrar un mecanismo para relacionar la información de las dos tablas; y para ello se introducen algunos conceptos útiles.
    .fondo-mn.p-5.mn.mb-5
      .titulo-icono.p-2.d-inline-block.mb-4
        h4.mb-0 Claves 
      p.mb-5(data-aos='fade-right') Dado que en una tabla no hay filas repetidas, se pueden distinguir unas de otras, es decir, se pueden identificar de manera única (por el principio de unidad). Por lo tanto, la manera de identificarlas inequívocamente es según los valores de los atributos. De esta forma, se conoce como claves a los atributos que sirven para identificar un registro de forma inequívoca.
      h6 Ejemplo 
      p.mb-5(data-aos='fade-right') Para organizar y definir la información de forma sistemática, las bases de datos también deben poder almacenar una descripción precisa de los datos que contiene conocida como metadatos, a los que se le relaciona el tipo de información que conceptualmente es guardada (es decir si se agrega una explicación de la naturaleza del dato en la empresa) se da origen a lo que conoce como diccionario de datos o catálogo de datos.
      .row.justify-content-center
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 1.
            span Claves de las entidades persona y cuenta 
          img(src='@/assets/curso/temas/23b.svg', alt='La figura presenta un diagrama de un modelo de base de datos que conecta las entidades persona y cuenta a través de la relación titular. La entidad persona incluye atributos como nombres, apellidos, edad e identificación, mientras que la entidad cuenta incluye número de cuenta, saldo y fecha de creación. Este diagrama se utiliza para representar cómo se almacena y se relaciona la información de clientes y sus cuentas bancarias en un sistema informático.').mb-4
          p.mb-5(data-aos='fade-right') Nótese cómo los atributos #[span.resalte2 identificación y numero_cuenta] tienen subrayada la palabra identificadora del atributo, representado así que ese atributo es la clave (que hace que se cumpla el criterio de unicidad) de su entidad.

    .fondo-mn5.p-5.mn.mb-5      
      h4 Claves candidata, superclave y clave primaria 
      p.mb-5(data-aos='fade-right') Se supone el caso ahora que el banco es internacional, que es un banco moderno y solo diseñado para transacciones vía internet o virtuales, por lo tanto, el correo del cliente (persona) es necesario y obligatorio.
      .row.justify-content-center.mb-5
        .col-lg-10 
          .row.justify-content-center.align-items-center.g-0.order-reverse.position-relative
            .col-lg-2.d-lg-block.d-none(style="margin-right: -5rem ;z-index: 1 "): img(src='@/assets/curso/temas/24.svg', alt=''  )
            .col-lg-2.col-6.mb-lg-0.mb-3.d-block.d-lg-none: img(src='@/assets/curso/temas/24.svg', alt=''  )
            .col-lg-10(style="z-index: 0")
              .tarjeta.p-4.tarjet-icon(style="background-color: #add3fd ")
                p.mb-0 En este caso ocurren un par de asuntos a analizar: al ser #[strong internacional el banco], puede existir un cliente en un país con el mismo número de identificación de otro cliente en otro país, por lo tanto, el atributo #[strong identificación] ya no puede ser una clave de la entidad, sin embargo, es importante y obligatorio saber a qué país corresponde cada cliente, el conjunto de datos #[strong identificación y país] y si ambos cumplen con el criterio de unidad, porque no existen dos personas en el mismo país con el mismo número de identificación. 
    

    .fondo-mn5.p-5.mn.mb-5   
      h4 Clave compuesta
      p.mb-5(data-aos='fade-right') Si se escogiera el conjunto de atributos #[strong identificación y país] como clave de la entidad, se está haciendo una clave compuesta porque es un conjunto de más de un atributo el que se usa para este fin.
      .row.justify-content-center.mb-5
        .col-lg-10 
          .row.justify-content-center.align-items-center.g-0.order-reverse.position-relative
            .col-lg-2.d-lg-block.d-none(style="margin-right: -5rem ;z-index: 1 "): img(src='@/assets/curso/temas/25.svg', alt=''  )
            .col-lg-2.col-6.mb-lg-0.mb-3.d-block.d-lg-none: img(src='@/assets/curso/temas/25.svg', alt=''  )
            .col-lg-10(style="z-index: 0")
              .tarjeta.p-4.tarjet-icon(style="background-color: #add3fd ")
                p.mb-0 El otro aspecto a considerar es que se puede utilizar el correo electrónico como clave, dado que no existen dos usuarios con el mismo correo electrónico. Esto es válido si se estableció como regla del banco que cada cliente debe tener un correo electrónico distinto al de los demás. 

    h5.mb-5 Estos dos casos se ilustran en la figura siguiente.
    .row.justify-content-center.mb-5
      .col-lg-10 
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 2. 
          span Claves candidatas
        img(src='@/assets/curso/temas/26b.svg', alt='La figura presenta dos diagramas de entidad con atributos que representan claves candidatas para la entidad persona. Ambos diagramas listan atributos como nombres, apellidos, correo, edad, país e identificación. Estos diagramas sugieren posibles conjuntos de atributos que podrían usarse para identificar de manera única una instancia de la entidad persona en una base de datos.')
    
    .fondo-mn2.p-5.mn.mb-5  
      h4 Clave candidata
      p.mb-5(data-aos='fade-right') Los dos caminos propuestos en la figura 2 son válidos, y se denominan claves candidatas porque con ambas se puede lograr el principio de unicidad, y es potestad de cada diseñador o analista de sistemas determinar cuál de las dos emplear.
      .row.justify-content-center.mb-5
        .col-lg-10 
          .row.justify-content-center.align-items-center.g-0.order-reverse.position-relative
            .col-lg-2.d-lg-block.d-none(style="margin-right: -5rem ;z-index: 1 "): img(src='@/assets/curso/temas/27.svg', alt=''  )
            .col-lg-2.col-6.mb-lg-0.mb-3.d-block.d-lg-none: img(src='@/assets/curso/temas/27.svg', alt=''  )
            .col-lg-10(style="z-index: 0")
              .tarjeta.p-4.tarjet-icon(style="background-color: #add3fd ")
                p.mb-0 Existe otro tipo de solución y es asignarle un atributo identificador, a la entidad persona que se encargue exclusivamente de identificar inequívocamente cada tupla o fila, a este atributo se le puede llamar #[strong id_persona] que sería un número que el programa o #[em software] para el que se está desarrollando la base le asignará a cada cliente, cada vez que se registre por primera vez, los datos de una persona (generalmente una secuencia).
      p.mb-5(data-aos='fade-right') De esta forma, se tendrían 3 claves candidatas; la figura 3 muestra cómo sería la entidad y la tabla que representa.  
      .row.justify-content-center.mb-5
        .col-lg-6
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 3. 
            span Claves candidatas secuencia
          img(src='@/assets/curso/temas/28b.svg', alt='La figura presenta un diagrama de la entidad persona con varios atributos conectados a ella. Los atributos listados son nombres, apellidos, correo, edad, país, identificación y id_persona. Este diagrama probablemente se utiliza en el contexto de una base de datos para ilustrar los atributos que podrían ser considerados como claves candidatas.')
      .row.justify-content-center.mb-2
        .col-lg
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 8.
            span Entidad persona
          .tabla-a.color-acento-botones.mb-5
            table
              thead(style="background-color: #ffce00 ").border-0
                tr
                  th id_persona
                  th pais
                  th identificacion
                  th correo
                  th nombres
                  th apellidos
                  th edad
              tbody
                tr
                  td 1
                  td colombia
                  td 8.127.346
                  td ana@rmail.com
                  td Ana lis
                  td Mendez
                  td 34
                tr
                  td 2
                  td colombia
                  td 212.394.762
                  td jose@pmail.com
                  td Jose Omar
                  td Ciano 
                  td 28
                tr
                  td 3
                  td colombia
                  td 545.232.546
                  td luis@jmail.com
                  td Luis Dario
                  td Marquez
                  td 21
                tr
                  td 4
                  td colombia
                  td 125.446.732
                  td arm@hmail.com
                  td Armando
                  td Bronca Segura
                  td 35
                tr
                  td 5
                  td colombia
                  td 33.565.236.787
                  td victor@umail.com
                  td Vistor José
                  td Diento Paz
                  td 24
                tr
                  td 6
                  td colombia
                  td 2.343.554.768
                  td josen@pmail.com
                  td Jose Nicolás
                  td Timado Ruiz
                  td 19

                tr
                  td 7
                  td peru
                  td 45.456.778
                  td andrea@email.com
                  td Andrea
                  td Martinez
                  td 36
    p.mb-5(data-aos='fade-right') Este último enfoque es el más empleado y recomendado por los diseñadores o analistas de #[em software], pues reduce, significativamente, la complejidad del diseño y facilita la relación con otras tablas o entidades. Por lo tanto, se usará cada vez que se tenga oportunidad de hacerlo.

    .fondo-mn5.p-5.mn.mb-5 
      .row.justify-content-center.mb-5
        .col.mb-lg-0.mb-3
          h4 Superclave
          p.mb-0 Es un conjunto de uno o más atributos que, tomados juntos, permiten identificar de forma única una entidad en el conjunto de entidades. Por ejemplo, el atributo #[strong id_persona] del conjunto de entidades persona es suficiente para distinguir una persona cliente del banco de las otras. Así, #[strong id_persona] es una superclave. Análogamente, la combinación de #[strong identificación] y #[strong país] es una superclave del conjunto de entidades persona. El atributo correo de persona es otra superclave, pero el atributo #[strong nombres] no lo es porque varias personas podrían tener el mismo nombre.
        .col-auto: img(src='@/assets/curso/temas/29b.svg', alt='')
    
    
    .fondo-mn5.p-5.mn.mb-5 
      .row.justify-content-center.mb-5
        .col.mb-lg-0.mb-3
          h4 Clave primaria
          p.mb-0 Se emplea el término clave primaria para nombrar una clave candidata que es elegida por el diseñador o analista de la base de datos como clave principal para identificar las tuplas dentro de una entidad. Una clave (primaria, candidata y superclave) es una propiedad del conjunto de entidades, más que de las entidades individuales. Entre dos tuplas individuales en el conjunto no pueden tener el mismo valor en sus atributos clave primaria al mismo tiempo. La designación de una clave primaria es en sí una restricción que modela una característica del mundo real.
        .col-auto: img(src='@/assets/curso/temas/30b.svg', alt='')
    Separador
    .fondo-mn.mn.p-5.mb-4
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.2 Relaciones de uno a muchos
      p.mb-5(data-aos='fade-right') Una relación de uno a varios o de uno a muchos es el tipo de relación más empleada. En este tipo de relación, una fila de la tabla A puede tener muchas filas coincidentes en la tabla B. Pero una fila de la tabla B solo puede tener una fila coincidente en la tabla A. 
      .row.justify-content-center.mb-5
        .col-lg-6.mb-lg-0.mb-3
          h4 Ejemplo 
          p.mb-0 Las tablas persona y cuenta tienen una relación de uno a muchos. Es decir, cada persona puede tener más de una cuenta, pero, por ejemplo, cada título proviene de una sola editorial.
        .col-lg-6
          .cajon.color-acento-contenido.p-4.mb-4
            p En un diagrama de entidad relación esto se representa con lo que se denomina multiplicidad como se muestra en la siguiente figura. 
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 4. 
        span Relaciones de uno a muchos 
      img(src='@/assets/curso/temas/figura4.svg', alt='la figura presenta un diagrama de modelo de entidad-relación que ilustra la relación de uno a muchos entre las entidades ‘persona’ y ‘cuenta’. La entidad ‘persona’ tiene atributos como nombres, apellidos, correo, edad, país, identificación y id_persona. Por otro lado, la entidad ‘cuenta’ tiene atributos como número de cuenta, saldo y fecha de creación. La relación ‘titular’ indica que una persona (donde ‘1’ representa a una sola instancia) puede tener titularidad sobre muchas cuentas (‘N’ representa muchas instancias).').mb-5
      p.mb-5(data-aos='fade-right') A esta representación se le denomina multiplicidad #[strong 1:N] y se lee de la siguiente forma:  #[strong UNA persona] es #[strong titular] de #[strong N cuentas] bancarias, de esta forma una persona puede tener #[strong N] (que puede ser cero, uno o más de una) cuentas bancarias. Se puede leer en forma inversa que el resultado es el mismo: muchas o varias cuentas bancarias pueden tener un mismo titular. 
        br
        br
        |Cuando una relación es de uno a muchos y se mapea una un modelo de base de datos relacional, la relación #[strong titular] (rombo) se termina convirtiendo una columna de la tabla de los muchos.
      .row.justify-content-center.mb-5
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 5. 
            span Tablas de un modelo relacional 1:N
          img(src='@/assets/curso/temas/32.png', alt='La figura presenta dos tablas de un modelo relacional de base de datos con la notación de relación uno a muchos (1:N). La primera tabla, etiquetada como ‘Tabla persona’, contiene columnas para id_persona, país, identificación, correo, nombres, apellidos y edad, con datos de ejemplo para cada campo. La segunda tabla, etiquetada como ‘Tabla cuenta’, incluye columnas para número_cuenta, titular (que hace referencia a id_persona de la tabla persona), saldo y fecha_creación, también con datos de ejemplo. Este modelo muestra cómo los registros de individuos en la tabla persona están relacionados con los registros en la tabla cuenta.').mb-4
          p(data-aos='fade-right') Como se evidencia en la figura 5, Ana Lis Méndez es titular de dos cuentas bancarias (67.789.901 y 32.443.171). Todos los datos en la columna titular de la tabla cuenta se denominan #[strong LLAVE FORÁNEA] de la tabla persona. 
    .titulo-icono.p-2.d-inline-block.mb-4
        h4.mb-0 REGLA DE MAPEO 1:N de Modelo entidad-relación a modelo relacional
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4(style="background-color: #273a89")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/22.svg', alt='' style='width: 105px' )
            .col-lg-9
              p.mb-0.text-white Una relación de uno a mucho (1:N) se transforma en una columna en la tabla que tiene la multiplicidad de los muchos (cuenta). Y todos los datos de esta columna existen como llave primaria en la tabla que tiene la multiplicidad uno (tabla persona).

    p.mb-5(data-aos='fade-right') Existe otro tipo de diagrama que es más utilizado al diseñar una base de datos; este diagrama se conoce como "Diagrama relacional", en el cual las entidades se presentan directamente como tablas y las relaciones son más evidentes. A continuación, se presenta cómo se transforma la representación del diagrama entidad-relación de la figura en un diagrama relacional.

    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 6. 
          span Diagrama relacional 1:N
        img(src='@/assets/curso/temas/37.png', alt='La figura contiene un diagrama relacional que muestra dos entidades, ‘persona’ y ‘cuenta’, junto con sus atributos y la relación entre ellas. La entidad ‘persona’ tiene atributos como id_persona (clave primaria), país, identificación, correo, nombres, apellidos y edad. La entidad ‘cuenta’ posee atributos como número_cuenta (clave primaria), titular (clave foránea que referencia a id_persona de la entidad persona), saldo y fecha_creación. La línea que conecta ambas entidades indica una relación de uno a muchos, lo que significa que una persona puede tener asociadas varias cuentas.')

    p En la figura 6 se puede identificar el nombre de las entidades (persona y cuenta), los atributos haciendo especial énfasis en los que representan la llave primaria con el indicador #[strong PK] (del inglés #[em Primary Key]), y también se observa la relación titular (columna de la tabla), indicando que es una clave o llave foránea de la tabla persona, lo indica con el indicador #[strong FK] (del inglés #[em Foreign Key]).
    p Algunos diagramas relacionales agregan metadatos para hacer más claro el modelo al diseñador, así como la naturaleza de los datos del modelo.

    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 7. 
          span Diagrama relacional 1:N con metadatos
        img(src='@/assets/curso/temas/38.png', alt='La figura muestra un diagrama de dos tablas de base de datos: ‘persona’ y ‘cuenta’. ‘Persona’ incluye campos como id_persona, país, identificación y otros, con tipos de datos especificados como INTEGER y VARCHAR. ‘Cuenta’ tiene campos como número_cuenta, titular, saldo y fecha_creación con tipos FLOAT y DATE. La clave foránea ‘titular’ en ‘cuenta’ enlaza con la clave primaria ‘id_persona’ de ‘persona’, indicando que a cada persona pueden corresponder varias cuentas.')


    .row.justify-content-center
      .col-xl-7
        .p-4(style="background-color: #ffe888 ")
          .row.justify-content-center.align-items-center
            .col-auto: img(src='@/assets/curso/temas/76.svg', alt='' style='width: 74px' )
            .col: p.mb-0 #[b Conclusión:] la relación de uno a muchos se termina convirtiendo en una columna en la tabla que tiene la multiplicidad de los muchos.

    Separador 
    .fondo-mn.mn.p-5.mb-4
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 2.3 Relaciones de un uno a muchos
      p.mb-5(data-aos='fade-right') En una relación de muchos a muchos, una fila de la tabla A puede estar relacionada con varias filas de la tabla B y, de manera inversa, una fila de la tabla B puede relacionarse con varias filas de la tabla A. Esta relación se establece mediante la creación de una tercera tabla, conocida como tabla de relación. Esta nueva tabla posee una clave principal compuesta por las claves foráneas tanto de la tabla A como de la B.
      h4 Ejemplo
      p.mb-5(data-aos='fade-right') Se necesita almacenar la información de unas referencias bibliográficas o publicaciones de libros, tesis, artículos que escriben los estudiantes de una universidad, y como se sabe, un libro, tesis, artículo o cualquier publicación puede ser elaborada por más de una persona, y a su vez, una persona (docente, estudiante o investigador) puede tener más de una publicación de su autoría. 
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 8. 
        span Diagrama de entidad de publicaciones bibliográficas
      img(src='@/assets/curso/temas/figura8.svg', alt='El diagrama ilustra cómo las personas como autores están conectadas a sus obras, y sirve para modelar la estructura de una base de datos para almacenar y recuperar información sobre libros y otros tipos de publicaciones').mb-4
      .row.justify-content-center.mb-5
        .col-lg-10
          p Como se identifica en la figura 8, la entidad publicación tiene una llave primaria llamada identificación, y existe una relacionada llamada autor, y representa que una persona pueden ser autor de una o muchas publicaciones, y que una publicación puede ser de autoría de una o muchas personas, la multiplicidad en este caso es de muchos a muchos y se representa como N:N.
    .titulo-icono.p-2.d-inline-block.mb-4
        h4.mb-0 REGLA DE MAPEO N:N de Modelo entidad-relación a modelo relacional
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4(style="background-color: #273a89")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/22.svg', alt='' style='width: 105px' )
            .col-lg-9
              p.mb-0.text-white  En una relación de uno a mucho (N:N) se transforma en una tabla cuya llave primaria está compuesta por las llaves primarias de las otras dos tablas.
    p.mb-5(data-aos='fade-right') En la figura 9, la “tabla autor”, dice que la persona Ana Lis, es autora de los libros de título Grandes hazañas y Pellentesque, también que el libro Pellentesque es escrito además de Ana Lis por Luis Darío y Jose Nicolás. Lo anterior haciendo referencia a las llaves primarias de las tablas a) #[strong persona] y b) #[strong publicacion]. 
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 9.
      span Tablas de relación N:N.
    img(src='@/assets/curso/temas/40.png', alt='La figura muestra tres tablas de base de datos que representan una relación de muchos a muchos entre personas y publicaciones. La tabla persona contiene campos para identidad y datos personales. La tabla publicación detalla las publicaciones. La tabla autor sirve como conexión, relacionando autores con sus obras mediante identificadores de ambas tablas.').mb-4
    p.mb-5(data-aos='fade-right') La representación de la relación N:N con un diagrama relacional se muestra en la figura 9. Donde se usan los prefijos #[strong FK1] y #[strong FK2], para indicar llave foránea uno y dos, para las entidades persona y publicación 2, respectivamente.  También se puede identificar el prefijo #[strong UK] (#[em Unique Key]) en la tabla publicación, en la columna ISBN, el cual significa que en toda la tabla publicación no puede existir más de una fila con el mismo ISBN es decir, nunca ninguna publicación tendrá el mismo ISBN que otra. 
    .row.justify-content-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 10. 
          span Tablas de relación N:N.
        img(src='@/assets/curso/temas/33.png', alt='La figura presenta un diagrama de base de datos con las tablas persona, autor y publicación. La tabla persona y publicación tienen cada una su clave primaria, y la tabla autor las une con claves foráneas, representando una relación de muchos a muchos entre personas y publicaciones. Esto permite que múltiples personas sean autores de múltiples publicaciones.')
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4 Relaciones de uno a uno
    p.mb-5(data-aos='fade-right') En una relación uno a uno, una fila de la tabla A solo puede tener una fila coincidente en la tabla B y viceversa. Se crea, entonces, una relación uno a uno si ambas columnas relacionadas son claves principales o tienen restricciones únicas.  Este tipo de relación no es común porque la mayoría de la información que está relacionada de esta manera estaría en una tabla; #[b se puede usar una relación uno a uno por alguno de estos motivos:]
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        .tarjeta.color-secundario.p-5.h-100
          img(src='@/assets/curso/temas/34.svg', alt='' style="width: 86px").mb-3
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-circle.fa-xs
              p.mb-0.text-white  Dividir una tabla con muchas columnas.
            li.d-flex
              i.fas.fa-circle.fa-xs
              p.mb-0.text-white Aislar parte de una tabla por motivos de seguridad.
            li.d-flex
              i.fas.fa-circle.fa-xs
              p.mb-0.text-white Almacenar datos de corta duración y que podrían eliminarse fácilmente borrando la tabla periódicamente.
            li.d-flex
              i.fas.fa-circle.fa-xs
              p.mb-0.text-white Almacenar información que solo se aplique a un subconjunto de la tabla principal.
      .col-lg-6.col-7: img(src='@/assets/curso/temas/35.svg', alt='')
    p.mb-5(data-aos='fade-right') Volviendo al ejemplo del banco, esta vez se supone que la empresa necesita información sobre sus empleados, lo que, a la vez, pueden ser clientes del banco.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right').mb-54
      h5 Figura 11.
      span Diagrama entidad relación persona-empleado
    img(src='@/assets/curso/temas/figura11.svg', alt='El diagrama muestra las entidades ‘persona’, ‘empleado’ y ‘cuenta’ en una base de datos. ‘Persona’ tiene atributos personales y está vinculada uno a uno con ‘empleado’, que incluye datos laborales. ‘Persona’ también está vinculada uno a muchos con ‘cuenta’, indicando que una persona puede tener varias cuentas bancarias. Estas relaciones permiten modelar cómo los empleados y sus cuentas están interconectados.').mb-5
    .titulo-icono.p-2.d-inline-block.mb-4
        h4.mb-0 REGLA DE MAPEO 1:1 de Modelo entidad-relación a modelo relacional
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4(style="background-color: #273a89")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/22.svg', alt='' style='width: 105px' )
            .col-lg-9
              p.mb-0.text-white En el momento de convertir la relación o con multiplicidad 1:1 a tablas, la relación uno a uno se convierte en una columna de la tabla empleado con restricción de unicidad (#[em Unique Key o Primary Key]) como se muestra en el siguiente diagrama relacional.
    
    .row.justify-content-center.mb-5
      .col-lg-6.mb-lg-0.mb-3
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 12. 
          span Diagrama relacional 1:1
        img(src='@/assets/curso/temas/45.png', alt='El diagrama representa un modelo de base de datos con las tablas ‘persona’, ‘empleado’ y ‘cuenta’. ‘Persona’ se relaciona directamente con ‘empleado’ en una relación uno a uno y con ‘cuenta’ en una relación uno a muchos. Los atributos y claves primarias y foráneas están indicados, estructurando cómo se relacionan los datos de personas, su empleo y sus cuentas')

    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        .p-4(style="background-color: #ffe888 ")
          p.mb-0 Como se puede inferir de la figura 12, se crea una tabla donde se relacionan los datos de las personas que son empleados del banco, a través de una columna que se llama #[strong id_persona], pero es común entre algunos diseñadores ponerle el nombre que lo relacione con la tabla a la que pertenece, es decir, #[strong id_empleado], pero esto queda al criterio del diseñador. 


















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

<style lang="sass">
.cont_tema2, .cont_intro1 *
 position: relative
.cont_tema2:before
  position: absolute
  content: ''
  width: 125%
  left: -15%
  height: 100%
  top: auto
  bottom: auto
  background: rgb(220,236,254)
  background: linear-gradient(0deg, rgba(225,246,239,0) 0%, rgba(225,246,239,1) 25%, rgba(225,246,239,1) 75%, rgba(225,246,239,0) 100%)
</style>
