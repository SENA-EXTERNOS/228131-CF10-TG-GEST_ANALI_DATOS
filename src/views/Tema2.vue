<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Calidad de los datos (#[em Quality data])
    .row.justify-content-center.mb-5
      .col-lg-2.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/1.svg', alt='')
      .col-lg-10(data-aos="fade-left"): p La calidad de los datos (DQ) se define como la facultad de los datos para el objetivo definido de un usuario u organización. Es un término subjetivo ya que el concepto de calidad podría ser relativo a los estándares definidos por las expectativas de las organizaciones o usuarios. (Gawande, 2020)
    .tarjeta.p-5(style="background-color:#f5fafe ")
      SlyderA(tipo='b')
        .row.px-3
          .col-md-4.mb-4.mb-md-0
            p El objetivo final de los datos es brindar conocimiento del negocio, de una manera técnica y fiel a la realidad, en una palabra, los reportes deben ser siempre #[b Confiables]
          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema2/2.png', alt='Texto que describa la imagen')
        .row.px-3
          .col-md-4.mb-4.mb-md-0
            p Una unidad diminuta, equivalente a elementos microscópicos en medio de los océanos de información es un único registro, en uno de los campos, de alguna tabla que componga el sistema (por ejemplo, #[b Fecha de nacimiento])
          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema2/3.png', alt='Texto que describa la imagen')
        .row.px-3
          .col-md-4.mb-4.mb-md-0
            p La colección de estos registros diversos debe tener desde el momento de capturar los datos una programación de validación que garantice que el registro de datos tenga aspectos como: 
            ul.lista-ul
              li
                i.fas.fa-angle-right
                | Tipo de dato según la naturaleza del registro.
              li
                i.fas.fa-angle-right
                | Formato uniforme aceptado por todo el sistema.
              li
                i.fas.fa-angle-right
                | Dato válido según las reglas de negocio y naturaleza del proceso, entre otros.
          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema2/4.png', alt='Texto que describa la imagen')
        .row.px-3
          .col-md-4.mb-4.mb-md-0
            p La calidad de los datos toma aún mayor fuerza para aplicar validaciones con rigurosidad cuando se habla de ecosistemas de datos, donde convergen diversas infraestructuras y se interrelacionan datos compartidos.
          .col-md-8
            figure
              img(src='@/assets/curso/temas/tema2/5.png', alt='Texto que describa la imagen')
    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="zoom-in")
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/6.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            h4 Inconvenientes derivados de mala calidad de los datos:
            p.mb-0 Cuando los sistemas de información no son capaces de digitalizar eficaz y eficientemente la realidad del negocio, capturándola con el nivel adecuado de detalle necesario, almacenar dichos datos garantizando que no se produzcan pérdidas sintácticas ni semánticas, procesarlos de acuerdo con las reglas de negocio o mostrar los resultados de los análisis a los usuarios, entonces se producen “no-conformidades” en el ciclo de vida de los datos. (Velthuis, 2019)
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1  Dimensiones de la calidad de los datos
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p Se puede definir, que el conjunto de datos presenta calidad en los datos si cumplen las siguientes seis dimensiones:
        .row.mb-3
          .col-lg-4
            ul.lista-ul
              li
                i.fas.fa-angle-right
                | Exactitud
              li
                i.fas.fa-angle-right
                | Completitud
              li
                i.fas.fa-angle-right
                | Consistencia
          .col-lg-4
            ul.lista-ul
              li
                i.fas.fa-angle-right
                | Singularidad
              li
                i.fas.fa-angle-right
                | Disponibilidad
              li
                i.fas.fa-angle-right
                | Validez
        p Sin embargo, esta clasificación no está universalmente aceptada. En este componente formativo se adicionarán cuatro dimensiones #[em Data Quality] más: 
        .row.mb-5
          .col-lg-4
            ul.lista-ul
              li
                i.fas.fa-angle-right
                | Actualizado
              li
                i.fas.fa-angle-right
                | Conformidad
          .col-lg-4
            ul.lista-ul
              li
                i.fas.fa-angle-right
                | Integridad
              li
                i.fas.fa-angle-right
                | Precisión
      .col-lg-5.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/7.png', alt='')
    p.mb-5(data-aos='fade-right') A continuación, se presenta la descripción de las diez dimensiones medibles que definen la calidad de los datos o #[em Data Quality:]
    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 4
          span Criterios de #[em data quality] 
        ImagenInfograficaB.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/8.svg', alt='Texto que describa la imagen')
          .tarjeta(x="0%" y="19%" tooltip="" numero="" style="background-color: #fff7e0")
            .row.justify-content-center
              .col-lg-1(style="background-color: #54d0e0; border-radius: 20px 0 0 20px")
                img.mt-4(src='@/assets/curso/temas/tema2/9.svg', alt='' style="width: 130px").m-auto
              .col-lg-11.text-sistem
                .p-4
                  h4 Precisión:
                  ul.lista-ul
                    li
                      i.fas.fa-angle-right
                      | Grado en que los datos representan la realidad. Por ejemplo, si un candidato para una entrevista de trabajo tiene una dirección de entrevista incorrecta, no podrá asistir hasta que obtenga la dirección correcta.
                    li
                      i.fas.fa-angle-right
                      p.mb-0 #[b Medición:] cotejar el registro con la realidad física: Por ejemplo, al generar facturas, se examina si los productos y resultados en las tirillas de compra reflejan la realidad.
                    li
                      i.fas.fa-angle-right
                      | Medición a través de referencias ya establecidas. Uso de herramientas que a partir de referencias compara los valores a evaluar.
          .tarjeta(x="0%" y="32%" tooltip="tooltip de max 35 caracteres" numero="" style="background-color: #fff7e0")
            .row.justify-content-center
                .col-lg-1(style="background-color: #4dbfe1; border-radius: 20px 0 0 20px")
                  img.mt-4(src='@/assets/curso/temas/tema2/10.svg', alt='' style="width: 130px").m-auto
                .col-lg-11.text-sistem
                  .p-4
                    h4 Completitud:
                    ul.lista-ul
                      li
                        i.fas.fa-angle-right
                        p.mb-0 Se establece como el porcentaje de datos poblados frente a la posibilidad de cumplimiento del 100%. Con frecuencia, se escucha: “el dato no se encuentra”. Por ejemplo, el departamento de #[em marketing] quiere enviar un email a clientes, pero el funcionario de entrada de datos no completó la dirección de correo.
                      li
                        i.fas.fa-angle-right
                        p.mb-0 #[b Medición:] se establece la completitud comprobando los atributos nulos o vacíos que se encuentren en los registros.
                          br
                          |Comprobación de integridad: ejemplo de datos de referencia faltantes. Por ejemplo, una secretaria desea suspender matrícula a un estudiante, pero las opciones de estado solo son: matriculado, retirado, egresado. (no aparece suspendido).
                      li
                        i.fas.fa-angle-right
                        | Comprobación de integridad: ejemplo de truncamiento de datos (datos que existían y luego desaparecieron); es posible que los valores se trunquen durante la carga. Esto sucede a menudo si las variables de proceso de ETL (extraer, transformar, cargar) no están definidas correctamente.
          .tarjeta(x="0%" y="45%" tooltip="tooltip de max 35 caracteres" numero="" style="background-color: #fff7e0")
            .row.justify-content-center
                .col-lg-1(style="background-color: #67b7fa; border-radius: 20px 0 0 20px")
                  img.mt-4(src='@/assets/curso/temas/tema2/11.svg', alt='' style="width: 130px").m-auto
                .col-lg-11.text-sistem
                  .p-4
                    h4 Consistencia:
                    ul.lista-ul
                      li
                        i.fas.fa-angle-right
                        | Los datos consistentes se pueden explicar como la cercanía y uniformidad de los datos con otras tablas o un conjunto de datos de referencia.
                      li
                        i.fas.fa-angle-right
                        | Consistencia de registro entre origen y destino: se refiere a la conciliación del origen frente al destino (garantizar no perder datos en procesos de transformación y carga).
                      li
                        i.fas.fa-angle-right
                        | Consistencia entre dos áreas: cuándo un vendedor registra órdenes de pedido con cantidad; se podría presentar inconsistencia cuando al departamento de entrega le aparece la cantidad distinta.
                      li
                        i.fas.fa-angle-right
                        p.mb-0 Coherencia de datos entre sistemas: cuando hay datos de referencia se espera uniformidad en la representación, por ejemplo, campo SEXO, se espera un dato de hombre, mujer o desconocido. En algunas tablas aparece como M, F, O, en otras tablas como Masculino, Femenino, Desconocido y en otras como #[em Male, Female, Unknows], etc. Es importante unificar o conciliar todos los sistemas.
          .tarjeta(x="0%" y="58%" tooltip="tooltip de max 35 caracteres" numero="" style="background-color: #fff7e0")
            .row.justify-content-center
                .col-lg-1(style="background-color: #1c3da3; border-radius: 20px 0 0 20px")
                  img.mt-4(src='@/assets/curso/temas/tema2/12.svg', alt='' style="width: 130px").m-auto
                .col-lg-11.text-sistem
                  .p-4
                    h4 Unicidad: 
                    ul.lista-ul
                      li
                        i.fas.fa-angle-right
                        | Se refiere al número de veces que un objeto o evento se registra. 
                      li
                        i.fas.fa-angle-right
                        | Se espera que un hecho o entidad sea registrado una sola vez.
                      li
                        i.fas.fa-angle-right
                        | No deberían existir datos duplicados, dado que esto genera conteos o reportes erróneos.
          .tarjeta(x="0%" y="71%" tooltip="tooltip de max 35 caracteres" numero="" style="background-color: #fff7e0")
            .row.justify-content-center
                .col-lg-1(style="background-color: #0f2771; border-radius: 20px 0 0 20px")
                  img.mt-4(src='@/assets/curso/temas/tema2/13.svg', alt='' style="width: 130px").m-auto
                .col-lg-11.text-sistem
                  .p-4
                    h4 Validez:
                    ul.lista-ul
                      li
                        i.fas.fa-angle-right
                        | También se entiende como la validación según las reglas de negocio, el contexto de los datos y otras propias. Por lo general esta propiedad debe programarse o configurarse.
                      li
                        i.fas.fa-angle-right
                        | Validez basada en reglas comerciales o cálculo. Por ejemplo, columnas o campos calculados cuando se requieren precios netos, total a pagar, descuentos, etc. Los datos deben seguir las reglas de negocio.
                      li
                        i.fas.fa-angle-right
                        | Validez de datos para el rango de valores. Por ejemplo, rango de fechas del día de nacimiento. Si es muy lejana en siglos o cercana en meses el dato no debería ser válido, ya sea por viejo (personas de más de 150 años o personas de meses de nacidos haciendo compras). Otro ejemplo sería en una licorera, donde no debería haber clientes menores a 18 años.
                      li
                        i.fas.fa-angle-right
                        | Secuencias inválidas. Por ejemplo, una fecha de entrega no puede ser válida si es un momento antes de la fecha de pedido.
          .tarjeta(x="100%" y="19%" tooltip="tooltip de max 35 caracteres" numero="" style="background-color: #fff7e0")
            .row.justify-content-center
              .col-lg-11.text-sistem
                .p-4
                  h4 Puntualidad:
                  ul.lista-ul
                    li
                      i.fas.fa-angle-right
                      | Es una dimensión basada en el tiempo, se refiere a la exactitud entre el evento real y el registrado. Existen rangos de puntualidad, algunos sistemas requieren datos en minutos, otros en horas y otros negocios en días, sin importar horas o incluso meses o sin importar días (penden de la granularidad).
                    li
                      i.fas.fa-angle-right
                      | Tarde para los negocios: un restaurante promete entregar domicilios en 50 minutos, pero el encargado de pedidos ingresa los datos con dos horas de retraso. En este caso, los datos son correctos, pero para el negocio es demasiado tarde.
                    li
                      i.fas.fa-angle-right
                      | Retraso de tiempo en sistemas de tiempo real: en decisiones automatizadas para subir o bajar precios, estas acciones se toman en microsegundos. Si hay un retraso en la disponibilidad de datos, la competencia tendrá una ventaja sobre ellos. Incluso si los datos son precisos, tendrían poca calidad de puntualidad.
              .col-lg-1(style="background-color: #54d0e0; border-radius: 0 20px 20px 0")
                img.mt-4(src='@/assets/curso/temas/tema2/14.svg', alt='' style="width: 130px").m-auto
          .tarjeta(x="100%" y="32%" tooltip="tooltip de max 35 caracteres" numero="" style="background-color: #fff7e0")
            .row.justify-content-center
                .col-lg-11.text-sistem
                  .p-4
                    h4 Actualizado:
                    ul.lista-ul
                      li
                        i.fas.fa-angle-right
                        | Se refiere a los estados del mundo real frente al estado capturado en los datos. Si los estados no se actualizan, los datos pierden calidad. Por ejemplo, una dirección cambiada: Si un cliente actualiza su dirección, los datos registrados pierden vigencia.
                .col-lg-1(style="background-color: #4dbfe1; border-radius: 0 20px 20px 0")
                  img.mt-4(src='@/assets/curso/temas/tema2/15.svg', alt='' style="width: 130px").m-auto
          .tarjeta(x="100%" y="45%" tooltip="tooltip de max 35 caracteres" numero="" style="background-color: #fff7e0")
            .row.justify-content-center
                .col-lg-11.text-sistem
                  .p-4
                    h4 Conformidad:
                    ul.lista-ul
                      li
                        i.fas.fa-angle-right
                        | Los datos con los mismos atributos deben representarse en un formato y tipos de datos iguales.
                      li
                        i.fas.fa-angle-right
                        | Conformidad de formato: se espera que la fecha siga el formato ‘MM/DD/AAAA’. Para los humanos, los datos en la tabla parecen correctos, pero para la computadora, los cambios en el formato de los datos causarán caos.
                      li
                        i.fas.fa-angle-right
                        | Conformidad del tipo de datos: se espera que el monto de ventas esté en formato numérico entero. Pero en alguna tabla se muestra como flotante y en otra como moneda.
                .col-lg-1(style="background-color: #67b7fa; border-radius: 0 20px 20px 0")
                  img.mt-4(src='@/assets/curso/temas/tema2/16.svg', alt='' style="width: 130px").m-auto
          .tarjeta(x="100%" y="58%" tooltip="tooltip de max 35 caracteres" numero="" style="background-color: #fff7e0")
            .row.justify-content-center
                .col-lg-11.text-sistem
                  .p-4
                    h4 Integridad:
                    ul.lista-ul
                      li
                        i.fas.fa-angle-right
                        | Se refiere al grado de coherencia con el que se implementan restricciones relacionales definidas entre dos tablas.
                      li
                        i.fas.fa-angle-right
                        | Integridad referencial: en la tabla padre, siempre debe existir una tabla de datos hijo, por ejemplo, un pedido debe tener ID de cliente como clave foránea.
                      li
                        i.fas.fa-angle-right
                        | Cardinalidad integridad: no debe existir entre tablas del sistema, relación de muchos a muchos. Ni tampoco uno a uno. (Bases de datos normalizadas).
                .col-lg-1(style="background-color: #1c3da3; border-radius: 0 20px 20px 0")
                  img.mt-4(src='@/assets/curso/temas/tema2/17.svg', alt='' style="width: 130px").m-auto
          .tarjeta(x="100%" y="71%" tooltip="tooltip de max 35 caracteres" numero="" style="background-color: #fff7e0")
            .row.justify-content-center
                .col-lg-11.text-sistem
                  .p-4
                    h4 Precisión:
                    ul.lista-ul
                      li
                        i.fas.fa-angle-right
                        | Se refiere al grado de las cifras redondeadas y segregadas. La precisión depende de los requisitos del sistema.
                      li
                        i.fas.fa-angle-right
                        | Precisión numérica: por ejemplo, en un sistema de facturación se redondea a entero por encima en las cuentas que arrojan decimales. Al momento de cotejar con sistemas de control como la DIAN, se presentarán inconsistencias.
                      li
                        i.fas.fa-angle-right
                        | Precisión de tiempo: La contabilidad se realiza a nivel de día y no se preocupa por el minuto y segundo exacto de compra. Pero, para los fraudes, la precisión del tiempo debe ser exacta al segundo.
                      li
                        i.fas.fa-angle-right
                        | Precisión de granularidad: A primera vista, la granularidad no parece de precisión. Para algunas operaciones, los datos agregados o resumidos no son útiles. Si desea pagar la comisión de cada vendedor en función de su venta personal, necesitará su número de ventas individual.
                .col-lg-1(style="background-color: #0f2771; border-radius: 0 20px 20px 0")
                  img.mt-4(src='@/assets/curso/temas/tema2/18.svg', alt='' style="width: 130px").m-auto
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2  Datos maestros (Master Data)
    .row.justify-content-center.mb-5
      .col-lg-2.col-6(data-aos="fade-right"): img(src='@/assets/curso/temas/tema2/19.svg', alt='')
      .col-lg-10(data-aos="fade-left"): p Master Data es una arquitectura para administrar, centralizar, organizar, clasificar, localizar, sincronizar y enriquecer los datos según las reglas de negocio. 
        br
        |La gestión de datos maestros (MDM por sus siglas en inglés) se resume en un repositorio central que garantiza una única visión autorizada de la información y optimiza costos e ineficiencias causadas por los almacenamientos de datos dispersos.
    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        p La gestión de datos maestros apoya reportes de negocio mediante la ubicación exacta, vinculación y propiedades de entidades y de la información a través de productos, clientes, tiendas, ciudades, empleados, proveedores, activos digitales, y más.
        .cajon.color-acento-botones.p-4.mb-4(style="background-color: #fff2ca")
          p.mb-0 MDM es un habilitador clave para proporcionar una vista única y confiable de la información empresarial crítica. Las fuentes de datos confiables ayudan a reducir los costos de integración de aplicaciones, mejoran la experiencia del cliente y generan información analítica accionable. (Stibo system MDM, 2019) Una solución de MDM procura superar algunos desafíos comunes en las organizaciones como:
        ul.lista-ul
          li
            i.fas.fa-angle-right
            | Silos de datos dispersos y múltiples versiones de sus datos.
          li
            i.fas.fa-angle-right
            | Datos errados como resultado de ingresos manuales y datos no validados.
          li
            i.fas.fa-angle-right
            | Costos en almacenamiento y seguridad en la información, tanto para su acceso, su conservación y disponibilidad.
      .col-lg-5.col-6(data-aos="fade-left"): img(src='@/assets/curso/temas/tema2/20.png', alt='')
    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="zoom-in")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 5
          span Características de MDM
        img(src='@/assets/curso/temas/tema2/21.svg', alt='')


            
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
