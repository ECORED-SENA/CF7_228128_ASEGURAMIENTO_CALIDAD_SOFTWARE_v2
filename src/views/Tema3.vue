<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Normalización
    .p-2.mb-5(style="background-color: #bae9d9 ")
      .row.justify-content-center.align-items-center.g-0.order-reverse.position-relative
        .col-lg-3.d-lg-block.d-none(style="margin-right: -5rem ;z-index: 1 "): img(src='@/assets/curso/temas/47.png', alt=''  )
        .col-lg-3.col-6.mb-lg-0.mb-3.d-block.d-lg-none: img(src='@/assets/curso/temas/47.png', alt=''  )
        .col-lg-9(style="z-index: 0")
          .tarjeta.bg-white.p-5.tarjet-icon
            p.mb-0 La normalización es el procedimiento mediante el cual se aplican las reglas de mapeo o conversión de un modelo entidad-relación a un modelo relacional, es decir a tablas y relaciones, los principios rectores de este proceso son: no redundancia de datos (que no se repitan los datos) y la dependencia de los datos dependencia incoherente (una separación lógica de datos en tablas). 
    .cajon-b.color-primario.p-3.mb-5
      p.mb-0 Los datos redundantes desperdician espacio en disco y crean problemas de mantenimiento. Por ejemplo, en la figura 12 se ve que los datos comunes de los clientes y los bancos están en la tabla persona, mientras que los datos que pertenecen exclusivamente a los empleados están en otra tabla que se relaciona con la de personas.
    h3.mb-4 ¿Qué es una “dependencia incoherente”?
    .row.justify-content-center.mb-5
      .col-lg-1.col-6.mb-lg-0.mb-3: img(src='@/assets/curso/temas/48.svg', alt='')
      .col-lg-11
        p.mb-0 Aunque resulta intuitivo para un usuario buscar en la tabla de persona el correo de un cliente en particular, es posible que no tenga sentido buscar en esa columna el salario del empleado que se relaciona con esos datos de la tabla persona, pues el salario del empleado está relacionado con la tabla empleado o depende de él. Las dependencias incoherentes pueden dificultar el acceso a los datos, ya que la ruta para encontrar los datos puede faltar o estar dañada.
    .row.mb-5
      .col-lg-6
        p.fw-bold.mb-0  Existen unas reglas básicas de normalización, las más comunes son las 3 formas normales que se listan a continuación y se desarrollarán con un ejemplo más complejo.
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3  
        TabsA.color-acento-botones.mb-5
          .tarjeta.p-4(titulo="Primera forma normal" style="background-color: #e1f6ef ")
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Eliminar grupos de repetición en tablas individuales.
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Crear una tabla independiente para cada conjunto de datos relacionados.
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Identificar cada conjunto de datos relacionados con una clave primaria.
          .tarjeta.p-4(titulo="Segunda forma normal" style="background-color: #e1f6ef ")
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Crear tablas independientes para conjuntos de valores que se aplican a varios registros.
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Relacionar estas tablas con una clave foránea. 
          .tarjeta.p-4(titulo="Tercera forma normal" style="background-color: #e1f6ef ")
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-circle.fa-xs
                p.mb-0 Eliminar los campos que no dependen de la clave.
      .col-lg-3.col-7: img(src='@/assets/curso/temas/49.svg', alt='')
    p.mb-5(data-aos='fade-right') Hay una cuarta forma normal, también llamada forma normal de #[em #[B Boyce Codd (BCNF)]], y una quinta forma normal, pero rara vez se consideran en un diseño práctico, solo agregan complejidad al sistema y no aportan un valor funcional que aporte a la solución del problema, por esta razón no será tratada.
    Separador
    .fondo-mn.mn.p-5.mb-4
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
        h2 3.1 Dependencias funcionales 
      p.mb-5(data-aos='fade-right') Una dependencia funcional es un tipo de restricción que termina construyendo una generalización del concepto de clave, como se estudió en el modelo E-R y en el modelo relacional. Pero no es tan fácil localizar las dependencias, ya que necesitan de un análisis de los atributos (columnas) o, con más precisión, de las interrelaciones entre atributos y, frecuentemente, la intuición no es suficiente a la hora de encontrar y clasificar todas las dependencias. Aunque existe una teoría matemática para realizar este análisis, un ejemplo sencillo puede enseñar cómo analizar estas dependencias de manera intuitiva, tal como se presenta a continuación.
      h4 Ejemplo 
      p.mb-5(data-aos='fade-right') Un cliente pide que desarrolle un software para llevar el inventario de una ferretería, los productos, los proveedores, el precio al que cada proveedor vende cada producto, para lo cual suministra la siguiente tabla, y se debe identificar las dependencias funcionales para poder realizar un modelo relacional.
      .row.justify-content-center.mb-5
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 8. 
            span Proveedores, productos y precios
          .tabla-a.color-acento-botones.mb-5
            table
              thead(style="background-color: #ffce00 ").border-0
                tr
                  th nit_proveedor
                  th Correo
                  th Nombres
                  th Telefono
                  th Codigo_producto
                  th Precio
              tbody
                tr
                  td 8127346
                  td ana@rmail.com
                  td Ana Lis Mendez
                  td 398589854
                  td Masillas  FFC
                  td $   25.890,00
                tr
                  td 212394762
                  td jose@pmail.com
                  td Jose Omar 
                  td 5475698
                  td Pistola de silicona
                  td  $   14.300,00
                tr
                  td 545232546
                  td luis@jmail.com
                  td Luis Dario
                  td 3984558
                  td Cutter RDS
                  td $      8.700,00
                tr
                  td 8127346
                  td ana@rmail.com
                  td Ana Lis Mendez
                  td 398589854
                  td Lija C20
                  td $         820,00
                tr
                  td 212394762
                  td jose@pmail.com
                  td Jose Omar 
                  td 5475698
                  td Masillas  FFC
                  td $   26.000,00 
                tr
                  td 8127346
                  td ana@rmail.com
                  td Ana Lis Mendez
                  td 398589854
                  td Lija C20
                  td $      7.900,00
                tr
                  td 545232546
                  td luis@jmail.com
                  td Luis Dario
                  td 36584114
                  td Pistola de silicona
                  td  $   12.990,00
                tr
                  td 8127346
                  td ana@rmail.com
                  td Ana Lis Mendez
                  td 398589854
                  td Lija C20
                  td  $         830,00
                tr
                  td 212394762
                  td jose@pmail.com
                  td Jose Omar 
                  td 5475698
                  td Cutter RDS
                  td $      9.200,00
      p.mb-5(data-aos='fade-right') El principio de no repetición de datos sugiere que se deben identificar todos los datos que se repiten. Esto se puede conocer en la siguiente figura. Es importante destacar que los valores de nit_proveedor son iguales en todos los registros que comparten el mismo valor de correo, nombres y teléfono.
      .row.justify-content-center.mb-5
        .col-lg-10 
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 13. 
            span Dependencia de nit_proveedor con datos del proveedor
          img(src='@/assets/curso/temas/50.png', alt='La figura muestra una tabla con listados de productos de proveedores. Incluye campos para NIT del proveedor, correo, nombre, teléfono, código y descripción del producto, y precio. Los NITs repetidos indican que cada proveedor puede ofrecer múltiples productos. La tabla ilustra la relación entre proveedores y sus productos en un sistema de gestión de inventarios.')
      p.mb-5(data-aos='fade-right') También en la figura 14 la columna código_producto es la misma para la columna producto, pero difiere del precio que cada proveedor ofrece del mismo.
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 14. 
            span Dependencia de código_producto_ con datos del producto
          img(src='@/assets/curso/temas/51.png', alt='La figura muestra una tabla que relaciona proveedores con productos, detallando NIT, contacto, y datos de los productos ofrecidos como su código, descripción y precio. Los códigos de productos repetidos sugieren que varios proveedores pueden suministrar el mismo producto, posiblemente a diferentes precios.')
      p.mb-5(data-aos='fade-right') La dependencia #[b código_producto] no se cumple para el precio del producto, por lo tanto, dice que a cada proveedor y producto debe existir un precio distinto como se identifica en la siguiente figura.
      .row.justify-content-center.mb-5
        .col-lg-8
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 15. 
            span Dependencia de nit_proveedor, código_producto_ con precio del producto
          img(src='@/assets/curso/temas/52.png', alt='La figura muestra cómo el NIT del proveedor y el código del producto se relacionan con el precio. Incluye datos de contacto del proveedor y detalles del producto. Se observa que los proveedores ofrecen varios productos y que los precios varían, posiblemente reflejando distintas ofertas o calidades. La tabla es útil para la gestión de compras y ventas.')
      p.mb-5(data-aos='fade-right') En la siguiente tabla se presentan las dependencias detectadas.
      .row.justify-content-center.mb-5
        .col-lg-6 
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Tabla 9. 
            span Dependencias funcionales
          .tabla-a.color-acento-botones.mb-5
            table
              thead(style="background-color: #ffce00 ").border-0
                tr
                  th Atributo
                  th Es dependencia funcional de: 
              tbody.bg-white
                tr
                  td.fw-bold nit_proveedor   
                  td correo
                    br
                    |nombres
                    br
                    |teléfono
                tr
                  td.fw-bold codigo_producto
                  td producto
                tr
                  td.fw-bold nit_proveedor, codigo_producto
                  td precio
    .titulo-icono.p-2.d-inline-block.mb-4
        h4.mb-0 Definición formal DEPENDENCIA FUNCIONAL
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4(style="background-color: #273a89")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/22.svg', alt='' style='width: 105px' )
            .col-lg-9
              p.mb-0.text-white Se dice que un atributo X de una relación “depende funcionalmente” de otro atributo o conjunto de atributos Y de la relación si a todo valor (o valores del conjunto) Y le corresponde siempre el mismo valor de X.
    p.mb-5(data-aos='fade-right') Las dependencias funcionales de la tabla 8 se pueden representar en el modelo entidad-relación, considerando que un proveedor puede suministrar varios productos y, a su vez, un producto puede ser suministrado por más de un proveedor. Además, para cada producto suministrado por un proveedor, existe un precio específico.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 16.
      span Diagrama entidad relación dependencia funcional
    img.mb-4(src='@/assets/curso/temas/53.svg', alt='El diagrama muestra un modelo de entidad-relación donde la entidad ‘proveedor’ con atributos como nit_proveedor, nombres, correo y teléfono está conectada mediante una relación de muchos a muchos a la entidad ‘producto’, que tiene atributos de codigo_producto, producto y precio. Indica cómo los proveedores están asociados a los productos que ofrecen y sus precios.')
    p.mb-5(data-aos='fade-right') Como se puede notar en la figura 16, la relación provee, cuando es mapeado a un diagrama relacional, se genera una tabla intermedia provee que debe tener un atributo adicional “precio”.
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 17. 
          span Diagrama relacional dependencia funcional
        img(src='@/assets/curso/temas/54.png', alt='El diagrama representa un modelo de base de datos con las entidades ‘proveedor’ y ‘producto’, y una tabla intermedia ‘autor’. La entidad ‘proveedor’ tiene atributos como NIT y contacto, ‘producto’ tiene código y descripción, y ‘autor’ conecta ambas entidades e incluye el precio, mostrando la relación entre proveedores, productos y sus precios.')
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.2 Diseño relacional
    p.mb-5(data-aos='fade-right') Hasta este punto se han examinado problemas concretos de las formas normales muy básicas y de la normalización. Ahora se estudiará el modo en que se encaja la normalización en proceso general de diseño de bases de datos. Se puede hacer de una de esas formas: 
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta-adorno1.p-5.h-100(style="background-color: #3ee2a8 ")
          img(src='@/assets/curso/temas/55.svg', alt='' style="width: 63px ").mb-4
          p.mb-0 Convirtiendo un diagrama entidad relación a un diagrama relacional y de esa forma obtener las tablas. 
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta-adorno1.p-5.h-100(style="background-color: #3ee2a8 ")
          img(src='@/assets/curso/temas/56.svg', alt='' style="width: 63px ").mb-4
          p.mb-0 Puede tener una tabla con todos los datos que se procesan en una aplicación, e identificando las dependencias funcionales de manera que nos permite identificar las tablas y las llaves o claves primarias de cada una.

      .col-lg-4.mb-lg-0.mb-3
        .tarjeta-adorno1.p-5.h-100(style="background-color: #3ee2a8 ")
          img(src='@/assets/curso/temas/57.svg', alt='' style="width: 63px ").mb-4
          p.mb-0 Se puede hacer un diseño ad hoc (para que cumpla el requerimiento) y se debe comprobar luego que satisface la forma normal deseada.
    p.mb-5(data-aos='fade-right') #[b En el mundo práctico y en la medida que se tiene más experticia las opciones 2 y 3 son las más empleadas.]
      br
      br
      | A continuación, se muestra un ejemplo completo de cómo abordar un problema de almacenamiento de datos y transformarlo en un modelo relacional, recogiendo los conceptos vistos hasta ahora, pasando de un diagrama entidad relación a un modelo relacional que es en todo caso el objetivo general de un diseño de base de datos.
    .fondo-mn2.mn.p-5.mb-5
      .row.justify-content-center.mb-5
        .col-lg-10
          .p-5.rounded-3(style="background-color: #ffe888")
            p.mb-0 #[b Problema:] 
              br
              |Para gestionar una biblioteca escolar, nuestro cliente requiere herramientas específicas para controlar publicaciones como libros, revistas y folletos, así como para llevar un registro de los estudiantes y los préstamos. Es necesario controlar los ejemplares de cada libro o publicación, incluyendo su ubicación y estado, y registrar tanto la retirada de libros por préstamo como la restitución de los ejemplares. Además, se necesita información sobre las editoriales, incluyendo datos como la dirección, el teléfono y el nombre de la editorial.
      h4 De cada publicación se pueden tener varios ejemplares, por ejemplo: 
      .row.justify-content-center.mb-5
        .col-lg-10: img(src='@/assets/curso/temas/58.svg', alt='')
      .row.justify-content-center.mb-5
        .col-lg-5.mb-lg-0.mb-3
          ul.lista-ul--color
            li.d-flex
              i.fas.fa-circle.fa-xs
              p.mb-0 Cada ejemplar tiene un código de barras, cuando un ejemplar ya está muy descargado se debe poder dar de baja; es decir, que ya se puede botar y no usarlo más. 

            li.d-flex
              i.fas.fa-circle.fa-xs
              p.mb-0 Tanto el estudiante, como el autor de un libro tienen los siguientes datos: #[b nombres, apellidos, correo.] Adicional a un estudiante tiene los datos de #[b documento de identidad, teléfono, dirección, grado escolar.] 
            li.d-flex
              i.fas.fa-circle.fa-xs
              p.mb-0 De cada préstamo interesa saber qué ejemplar se prestó, fecha en la que se prestó, la fecha en que se devolvió y alguna nota o comentario.
        .col-lg-5.col-7: img(src='@/assets/curso/temas/59.svg', alt='')
      .row.justify-content-center.mb-5
        .col-lg-10
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 18. 
            span Análisis de relacionar autor 
          img(src='@/assets/curso/temas/60.svg', alt='El diagrama muestra un modelo de entidad-relación en el que una ‘persona’ puede ser tanto ‘estudiante’ como ‘autor’, y tiene atributos como id_persona, nombres, apellidos y correo. ‘Estudiante’ tiene atributos adicionales como identificación, teléfono, dirección y grado escolar. Este modelo es útil para representar las diferentes funciones o roles que una persona puede ocupar en un sistema de base de datos.')
      .row.justify-content-center.mb-5
        .col-lg-10
          p.mb-0 #[b  En este diagrama se presenta una posible solución:]
            br
            |La relación entre persona y estudiante corresponde al caso estudiado en las relaciones de uno a uno (entre persona y empleado del banco). 
            br
            br
            | #[b El tema se vuelve complejo porque se debe analizar si aplica lo mismo para el autor:]
            br
            br
            |Al mapear estas entidades a diagrama relacional resultan 3 tablas (estudiante, persona y autor), pero autor solo tendría una única columna y al no tener atributos adicionales relacionados con el autor es prácticamente lo mismo que tener la tabla persona, por lo tanto, no es conveniente dejarlo de esta forma y más bien relacionar la publicación directamente con la entidad persona.
      .row.justify-content-center.mb-5
        .col-lg-10
          .p-5.rounded-3(style="background-color: #ffe888")
            p.mb-0 Se debe estudiar detenidamente el diagrama entidad relación, por varios minutos, asegúrese que comprende el porqué de cada elemento y su multiplicidad. Antes de continuar, realice a mano alzada diagrame el modelo relacional:
    .row.justify-content-center.mb-5
      .col-lg-10
        .p-4(style="background-color: #273a89")
          .row.justify-content-center.align-items-center
            .col-lg-2.col-4.mb-lg-0.mb-3: img(src='@/assets/curso/temas/61.svg', alt='' style='width: 105px' )
            .col-lg-9
              h5.text-white Para recordar: 
              p.mb-0.text-white Una relación de muchos a muchos (N:N) se convierte en una tabla cuya llave primaria es computar por las llaves foráneas de las otras dos tablas, Una relación de uno a muchos (1:N) se convierte en una columna  (llave foránea) de la tabla que tiene los muchos, y finalmente una relación de uno a uno (1:1) se convierte una columna en cualquier (llave foránea) de las dos tablas.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 19.
      span Modelo entidad relación biblioteca
    img(src='@/assets/curso/temas/62.svg', alt='El diagrama muestra un modelo de entidad-relación para una biblioteca, detallando cómo personas, como estudiantes y autores, interactúan con entidades como publicaciones, ejemplares y préstamos. Las publicaciones están conectadas a temas y editoriales, y los ejemplares son objeto de préstamos.').mb-4
    p.mb-5(data-aos='fade-right') En la siguiente figura se presenta el modelo en un diagrama relacional, este es importante ya que hace parte de uno de los subproductos que, por petición del cliente, muchas veces es un entregable en un proyecto de software, no es así con el diagrama entidad relación ya que este tipo de diagrama requiere más formas y contiene menos tecnicismos.
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 20.
          span Modelo relacional
        img(src='@/assets/curso/temas/63.png', alt='El diagrama es un modelo de base de datos relacional para una biblioteca que vincula ‘personas’ con roles específicos como ‘estudiantes’ y ‘autores’. ‘Personas’ se asocian con ‘publicaciones’ que a su vez están conectadas a ‘ejemplares’ y ‘préstamos’. ‘Publicaciones’ se clasifican por ‘tema’ y ‘editorial’. El modelo organiza la circulación de libros y la información de publicaciones en la biblioteca.')
    p.mb-5(data-aos='fade-right') Hasta ahora se ha visto cómo distribuir el almacenamiento de los datos en tablas, de manera que no se permita la duplicidad de datos y procurando una estructura lógica, que presente la información del mundo real. Pero aún falta analizar el problema desde el punto de vista que permita garantizar que los datos que se van a insertar son correctos. Para lo cual es importante conocer las restricciones de integridad que puede tener una base de datos.
    Separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.3 Reglas de integridad
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p.mb-5(data-aos='fade-right') Cuando se define un atributo, sin saber, se está escogiendo para él un dominio es decir un conjunto de valores que puede tener. Por ejemplo: en MySQL cuando se elige un atributo de tipo entero (INT) los posibles valores que puede tener esa columna van desde -2147483648 hasta 2147483647, es decir valores positivos o negativos, de manera que si se quieren sólo valores positivos se deben definirlos como entero sin signo (UNSIGNED INT), por lo tanto, los valores van desde 0 hasta 4294967295; en el siguiente enlace se puede conocer un dato completo:
        a.anexo.mb-4(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
          .row.justify-content-around.align-items-center
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              h5 Tipos de enteros
              p En el siguiente enlace se presentan los tipos de datos enteros: 
      .col-lg-5.col-7: img(src='@/assets/curso/temas/64.png', alt='')
    p.mb-5(data-aos='fade-right') La calidad de los datos garantiza que la información almacenada en la base de datos cumpla con los estándares y requisitos de la organización, asegurando así el mantenimiento de la integridad de los datos. Esto implica aplicar un conjunto de reglas a un conjunto de datos, ya sea completo o específico, antes de almacenarlos en la base de datos de destino. #[b Por lo tanto, para asegurar la integridad de los datos, se deben tener en cuenta los siguientes aspectos:]
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .p-4(titulo="Criterio de nulidad")
            p.mb-0 Cuando en una fila un atributo (columna) es desconocido, se dice que es nulo. Un nulo no representa el valor cero (0) ni una cadena vacía (“”) ya que éstos son valores tienen un significado o valor. El nulo significa ausencia de información, bien porque al insertar la fila se desconocía el valor del atributo, o tal vez porque para dicha fila el atributo no tiene valor. Debido a que los nulos no son valores, deben tratarse de forma particular, lo que causa problemas de implementación. Actualmente casi todos los SGDB soportan valores nulos.
          .p-4(titulo="Integridad de entidad")
            p.mb-0 Ninguno de los atributos o columnas que componen una llave primaria debe ser NULO. Es decir, una clave primaria es irreducible para identificar de modo único una fila, el que sea irreducible significa que ningún subconjunto de la clave primaria sirve para identificar inequívocamente la dial: a la fila o tupla. Si se permitiera valor nulo en una columna que hace parte de la llave primaria, esta estaría contradiciendo la irreductibilidad de una llave primaria; esto no aplica para claves alternativas, solo para la clave primaria.
          .p-4(titulo="Integridad referencia")
            p.mb-0 Para esto se debe analizar el modelo de la figura 20 y en particular la relación entre las tablas persona y estudiante. Como se sabe, la tabla estudiante tiene una llave primaria que, a la vez, es una referencia de la tabla persona, en la siguiente figura se observa un ejemplo
            img(src='@/assets/curso/temas/65.png', alt='La imagen muestra dos tablas de base de datos, ‘persona’ y ‘estudiante’, que están vinculadas, sugiriendo una relación de integridad referencial entre ciertos campos, aunque no se siguen las convenciones típicas de enlace por identificadores únicos.')
      .col-lg-5
        .cajon.color-acento-botones.p-4.mb-4.h-100
          img(src='@/assets/curso/temas/66.svg', alt='' style="width: 105px").mb-4
          p.mb-0 En la imagen anterior, por cada estudiante (tabla estudiante) existe uno y solo un elemento en la tabla persona, de tal forma que un estudiante es la conjunción de ambas tablas por medio de la llave foránea (que a la vez es llave primaria) id_estudiante, pero ¿qué tal que no existiera? Eso significa que la base de datos es inconsistente o que tiene datos basura en la tabla estudiante. Afortunadamente los SGDB permiten definir reglas que impidan que esto ocurra en las tablas, es decir que no permita registrar un estudiante con id_estudiante con un valor que no existe en la columna id_persona de la tabla persona. 
    .row.justify-content-center.mb-5
      .col-lg-5.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/67.svg', alt='')        
      .col-lg-7
        .fondo-mn3.p-4.h-100
          h5 Pregunta de análisis de datos  
          p  ¿Qué pasaría si se borra el registro de la tabla persona que tiene id_persona con valor tres (3) sufrirá algún problema los datos de la tabla estudiante?, o que pasaría si se cambia el valor de tres (3) en la columna id_persona, por otro valor como por ejemplo nueve (9), antes de continuar, hay que tomarse unos minutos para pensarlo. 
          h5 Respuesta
          p La respuesta a las cuestiones planeadas es que en cualquiera de las operaciones de borrado o actualización del dato se incurrirá en una violación de la integridad referencial de la tabla estudiante, ya que no habrá manera de conocer los datos de complementarios del estudiante que se encuentran en la tabla persona. 
    p.mb-5(data-aos='fade-right') Para evitar estos problemas de inconsistencia, los sistemas gestores de bases de datos permiten definir unas reglas cuando se borra o actualiza un dato que es referencia foránea de otra tabla. 
      br
      br
      |#[span.resalte2 Regla de borrado: ] define el comportamiento a la pregunta: ¿qué ocurre si se intenta borrar la fila referenciada por la clave foránea de otra tabla? Para lo cual el SGBD implementa una de las siguientes opciones: 
    .row.justify-content-center.mb-5
      .col-lg-3.mb-lg-0.mb-3
        .tarjeta-adorno2.p-5.h-100(style="background-color: #273a89 ")
          h4
            span.resalte  Restringir:
          p.text-white.mb-0 No se permite borrar la fila referenciada.

      .col-lg-3.mb-lg-0.mb-3
        .tarjeta-adorno2.p-5.h-100(style="background-color: #273a89 ")
          h4
            span.resalte  Cascada:
          p.text-white.mb-0 Se borra la fila referenciada y también se borran las filas que la referencian mediante la clave foránea en la otra tabla.

      .col-lg-3.mb-lg-0.mb-3
        .tarjeta-adorno2.p-5.h-100(style="background-color: #273a89 ")
          h4
            span.resalte  Poner null:
          p.text-white.mb-0 Se borra la fila referenciada y las filas que la referenciaban ponen en nulo la clave foránea (solo si acepta nulos).

      .col-lg-3.mb-lg-0.mb-3
        .tarjeta-adorno2.p-5.h-100(style="background-color: #273a89 ")
          h4
            span.resalte  Valor por defecto:
          p.text-white.mb-0 Se borra la fila referenciada y las filas que la referenciaban ponen en la clave foránea el valor por defecto defina la regla.
    p.mb-5(data-aos='fade-right') #[span.resalte2 Regla de edición:] define el comportamiento a la pregunta: ¿qué sucede si se intenta modificar el valor de la clave primaria de la fila referenciada por la clave foránea por otra tabla?
      br
      br
      |De esta forma, una vez definida la estructura del modelo de datos, se debe determinar el comportamiento de estas operaciones, lo cual generalmente responde a requerimiento del sistema de información. 
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 3.4 Lenguajes de los sistemas administradores de bases de datos
    p.mb-5(data-aos='fade-right') Los sistemas gestores de bases de datos emplean un lenguaje que se denomina SQL que corresponde al nombre en inglés (Structured Query Language), Generalmente, cuando un SGBD relacional implementa el lenguaje SQL, todas las acciones, y operaciones se llevan a cabo en el sistema mediante sentencias de este lenguaje. Dentro de SQL hay varios tipos de sentencias que se agrupan en cuatro conjuntos.
    .row.justify-content-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 21.
          span Conjunto bases de datos SQL
        img(src='@/assets/curso/temas/68.svg', alt=' La figura ilustra los componentes del lenguaje SQL: DDL para definir estructuras de la base de datos, TCL para el control de transacciones, y DCL para el control de acceso. Estos elementos conforman el conjunto de herramientas de SQL para la gestión de bases de datos.')
    .fondo-mn4.mn.p-5
      .titulo-icono.p-2.d-inline-block.mb-4
          h4.mb-0 Sentencias de definición de datos (DDL):
      p.mb-3(data-aos='fade-right') Son las sentencias que permiten crear tablas, alterar su definición y eliminarlas. En una base de datos relacional existen otros tipos de objetos además de las tablas, como las vistas, los índices y los disparadores. Las sentencias para crear, alterar y eliminar vistas e índices también pertenecen a este conjunto de sentencia, se les denomina DDL del inglés #[em Data Definition Language.]
      p.mb-5(data-aos='fade-right') #[b Ejemplo DDL]
        br
        |Para crear la tabla persona de la figura 20, quedaría de la siguiente forma:
      .row.justify-content-center.mb-5
        .col-lg-6.col-9.mb-lg-0.mb-3: img(src='@/assets/curso/temas/69.png', alt='')
        .col-lg-6 
          p Nota: cada atributo se define en una línea separado por una coma, se agregan restricciones de no nulidad #[em (NOT NULL)] al final la sentía termina con punto y coma. Ahora, así se borraría esa misma tabla:
          .tarjeta.p-4.d-inline-block.rounded-3(style="background-color: #bae9d9 ")
            p.mb-0.fw-bold DROP TABLE persona;
    .fondo-mn4.mn.p-5
      .titulo-icono.p-2.d-inline-block.mb-4
          h4.mb-0 Sentencias de manejo de datos (DML):
      p.mb-3(data-aos='fade-right') Estas sentencias que permiten insertar datos en las tablas, consultarlos, editarlos y borrarlos, se denomina DML del inglés Data Manipulation Language. 
      p.mb-5(data-aos='fade-right') #[b Ejemplo DML]
        br
        | A continuación, se muestra cómo se inserta una fila a la tabla persona, luego cómo se actualiza la fila insertada y posteriormente cómo se borra: 
      .row.justify-content-center.mb-5
        .col-lg-6.col-9.mb-lg-0.mb-3
          img(src='@/assets/curso/temas/70.png', alt='').mb-4
          img(src='@/assets/curso/temas/71.png', alt='').mb-4
          img(src='@/assets/curso/temas/72.png', alt='').mb-4
        .col-lg-6 
          img(src='@/assets/curso/temas/73.png', alt='')
    .fondo-mn4.mn.p-5
      .titulo-icono.p-2.d-inline-block.mb-4
          h4.mb-0 Sentencias de control (DCL): 
      p.mb-3(data-aos='fade-right') son las sentencias empleadas por los administradores de la base de datos para realizar tareas como, por ejemplo, crear usuarios y concederles o revocar los privilegios. Se usa el término DCL del inglés Data Control Language.
      .row.justify-content-center.mb-5
        .col-lg-6.col-9.mb-lg-0.mb-3
          p.mb-5(data-aos='fade-right') #[b Ejemplo DCL]
            br
            | En el ejemplo se le da permisos a un usuario llamado userdb de la base de datos de nombre biblioteca_db para que pueda insertar, actualizar, borrar y consultar datos de la tabla persona desde el mismo computador donde está instalada la base de datos (localhost).
        .col-lg-6 
          img(src='@/assets/curso/temas/74.png', alt='').mb-4
    .fondo-mn4.mn.p-5
      .titulo-icono.p-2.d-inline-block.mb-4
          h4.mb-0 Sentencias de control de transacciones (TCL):
      p.mb-3(data-aos='fade-right') un pequeño grupo de sentencias que permiten procesar en bloque operaciones DML garantizando que se efectúen todas y cada una de las operaciones o ninguna. #[b TCL] del inglés #[em Transaction Control Language.]

    

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
