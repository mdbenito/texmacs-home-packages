<TeXmacs|1.99.4>

<style|source>

<\body>
  <\active*>
    <\src-comment>
      Additional equation environments
    </src-comment>
  </active*>

  <assign|eq-lab*|<macro|lab|<with|mode|text|font-shape|right|(<arg|lab>)><space|5mm>>>

  <assign|equation-lab*|<\macro|lab|body>
    <\surround|<set-binding|<arg|lab>><eq-lab*|<arg|lab>>|>
      <\equation*>
        <arg|body>
      </equation*>
    </surround>
  </macro>>

  <assign|contradiction|<macro|body|<\surround||<large|<math|\<lightning\>>><space|5mm>>
    <\equation*>
      <arg|body>
    </equation*>
  </surround>>>

  <\active*>
    <\src-comment>
      Some mathematical symbols and miscellaneous stuff
    </src-comment>
  </active*>

  <assign|intbar|<macro|<superpose|<hspace|0.2fn><math-bf|\<longminus\>>|<big|int>>>>

  <assign|chi*|<move|<large|\<chi\>>||0.15em>>

  <assign|grs|\<nabla\><rsub|<space|-0.6spc>s>>

  <assign|gra|\<nabla\><rsub|<space|-0.6spc>a>>

  <assign|restrict|<macro|where|<move|\|<rsub|<smash|<arg|where>>>||<minus|0.4ex>>>>
</body>

<\initial>
  <\collection>
    <associate|src-close|compact>
    <associate|src-compact|inline args>
    <associate|src-special|normal>
    <associate|src-style|angular>
  </collection>
</initial>