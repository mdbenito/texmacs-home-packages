<TeXmacs|1.99.2>

<style|source>

<\body>
  <\active*>
    <\src-comment>
      Las unidades estarían mejor en fs (FontSizes), y fijadas a 0.7, 1.5 y
      3, pero entonces la conversión a LaTeX produce ficheros que no compilan
      porque no se traducen estas unidades.
    </src-comment>
  </active*>

  <use-package|std-list|env-base>

  <\active*>
    <\src-comment>
      Entornos modificados:\ 

      * bew es para demostraciones que no llevan encabezado,

      * achtung es una caja centrada

      * render-proof es un hook de TeXmacs para los entornos proof. Este
      cambia el tipo de letra del encabezado a cursiva y pone un cuadradito
      más pequeño al final.
    </src-comment>
  </active*>

  <assign|bew|<\macro|what>
    <\padded-normal|12pt|18pt>
      <\surround|<no-indent>|<right-flush><active*|<math|\<box\>>>>
        <arg|what>
      </surround>
    </padded-normal>
  </macro>>

  <assign|achtung|<macro|cont|<indent-both|36pt|36pt|<surround|<with|font-series|bold|Achtung.
  >|<right-flush>|<arg|cont>>>>>

  <assign|render-proof|<\macro|name|cont>
    <\padded-normal|10pt|18pt>
      <\surround|<no-indent><with|font-shape|italic|<proof-text>.
      >|<with|font-size|0.75|<right-flush><active*|<math|\<box\>>>>>
        <arg|cont>
      </surround>
    </padded-normal>
  </macro>>

  <assign|chapter-title|<macro|name|<style-with|src-compact|none|<sectional-centered-bold|<vspace*|4fn><huge|<arg|name>><vspace|1.5fn>>>>>

  <assign|chapter-numbered-title|<macro|title|<style-with|src-compact|none|<chapter-title|<the-chapter>
  <arg|title>>>>>

  <\active*>
    <\src-comment>
      Abschnitte: contadores y etiquetas. Para que el etiquetado automático
      funcione, es necesario ejecutar la función de scheme (update-schrefs
      _from), que de momento está en my-init-texmacs.scm (14 Jun 2011)

      To-Do: meter una macro en the-label que se evaluara al imprimir la
      referencia. Esta compararía el valor de <chapter-nr> con el capítulo en
      el que se encuentra el schnitt. La alternativa es reescribir reference
      como hago más abajo con schref, pero entonces los hipervínculos no se
      dibujan sobre la etiqueta completa. (Dic 2011)
    </src-comment>
  </active*>

  <assign|schnitt|<\macro|cont>
    <padded-normal|10pt|18pt|<surround|<no-indent><reset-equation><inc-schnitt><with|font-series|bold|(<the-schnitt>)
    ><assign|the-label|<the-schnitt>><label|<merge|sch|<the-chapter>|.|<the-schnitt>>>||<arg|cont>>>
  </macro>>

  <add-to-counter-group|schnitt|std-env>

  <drd-props|schnitt|arity|1|syntax|<macro|x|x>>

  <\active*>
    <\src-comment>
      Ecuaciones: Las ecuaciones normales y numeradas, con <equation> se
      dibujan con una macro definida en packages/environment/env-math.ts, de
      la que está copiada esta y <romanequation>. La diferencia es que aquí
      transformamos el número o bien en (<the-schnitt>.<the-equation>) o bien
      en un caracter latino por medio de <inactive|<number|<equation-nr>|roman>>
    </src-comment>
  </active*>

  <assign|equation-lab|<\macro|body|lab>
    <\surround|<set-binding|<arg|lab>>|<space|5mm><assign|the-label|Gl.
    <arg|lab>><with|mode|text|font-shape|right|(<arg|lab>)>>
      <\equation*>
        <arg|body>
      </equation*>
    </surround>
  </macro>>

  <assign|equation|<\macro|body>
    <\surround|<next-equation>|>
      <\equation-lab>
        <arg|body>
      </equation-lab|<the-schnitt>.<the-equation>>
    </surround>
  </macro>>

  <assign|stequation-lababschnitt|<\macro|body|lab>
    <\surround|<set-binding|<arg|lab>>|<space|5mm><assign|the-label|<arg|lab>><with|mode|text|font-shape|right|(<arg|lab>)>>
      <\equation*>
        <arg|body>
      </equation*>
    </surround>
  </macro>>

  <assign|numbertostars|<\macro|num>
    <math|\<star\>><arg|num>
  </macro>>

  <assign|stequation|<\macro|body>
    <\surround|<next-equation>|>
      <\stequation-lab>
        <arg|body>
      </stequation-lab|<numbertostars|<equation-nr>>>
    </surround>
  </macro>>

  <\active*>
    <\src-comment>
      HACK: Para mostrar el número de capítulo frente a las referencias a
      schnitte en otros capítulos, pero no frente a las del propio, definimos
      esta macro. El primer argumento determina si se muestra o no el
      prefijo: si el número indicado es el de este capítulo (UPD: o cero por
      comodidad) entonces no se muestra nada.

      Las etiquetas siempre son schCHAP.SCHN-APD, por ejemplo sch1.22-a o
      sch3.22-gl1
    </src-comment>
  </active*>

  <assign|schref|<\macro|chap|sch>
    (<if|<equal|<arg|chap>|<chapter-nr>>||<if|<equal|<arg|chap>|0>||<arg|chap>.>><reference|<merge|sch|<if|<equal|<arg|chap>|0>|<chapter-nr>|<arg|chap>>|.|<arg|sch>>>)
  </macro>>

  <\active*>
    <\src-comment>
      SuperHACK: comprueba que la lista no sea de balas
      (<math|\<bullet\>>)<compound|math|><compound|math|><compound|math|>,
      para no construir automáticamente etiquetas erróneas y no provocar
      error:bad set binding
    </src-comment>
  </active*>

  <assign|label-if-not-bullet|<\macro|name>
    <if|<equal|<unquote|<arg|name>>|<math|\<bullet\>>
    \ >||<assign|the-label|<merge||<the-schnitt>|.|<the-item>|>><label|<merge|sch|<the-chapter>|.|<the-schnitt>|-|<the-item>>>>
  </macro>>

  <\active*>
    <\src-comment>
      Etiquetas automáticas para las listas enumeradas dentro de "schnitts".
      Esta macro se define originalmente en el paquete std-list.ts.
    </src-comment>
  </active*>

  <assign|aligned-item|<macro|name|<style-with|src-compact|none|<vspace*|<item-vsep>><with|par-first|<minus|<item-hsep>>|<yes-indent>><resize|<arg|name>|<minus|1r|<minus|<item-hsep>|0.5fn>>||<plus|1r|0.5fn>|><label-if-not-bullet|<arg|name>>>>>

  <drd-props|has-item|arity|0|accessible|all>

  <assign|aligned-doublebracket-item|<macro|name|<aligned-item|(<arg|name><with|font-shape|right|)>>>>

  <\new-list>
    enumerate-bracketed-alpha
  </new-list|<value|aligned-doubblebracket-item>|<macro|name|<number|<arg|name>|alpha>>>
</body>

<\initial>
  <\collection>
    <associate|par-hyphen|normal>
  </collection>
</initial>