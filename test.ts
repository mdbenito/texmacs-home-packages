<TeXmacs|1.0.7.19>

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
      Matrices con corchetes
    </src-comment>
  </active*>

  <assign|matrixbr|<\macro|x>
    <\shrink-inline>
      <around*|[|<style-with|src-compact|none|<tformat|<cwith|1|-1|1|-1|cell-halign|c>|<arg|x>>>|]>
    </shrink-inline>
  </macro>>
</body>

<\initial>
  <\collection>
    <associate|preamble|true>
  </collection>
</initial>