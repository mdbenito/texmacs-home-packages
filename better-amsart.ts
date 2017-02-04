<TeXmacs|1.0.7.21>

<style|source>

<\body>
  <assign|render-exercise|<\macro|which|body>
    <\padded-normal|1fn|1fn>
      <\indent-left|1.5fn>
        <surround|<exercise-name|<arg|which><exercise-sep>>|<no-indent*>|<with|font-shape|italic|par-first|0fn|<arg|body>>>
      </indent-left>
    </padded-normal>
  </macro>>

  <assign|render-proof|<\macro|which|body>
    <\padded-normal|10pt|18pt>
      <\surround|<no-indent><with|font-shape|italic|<arg|which>.
      >|<right-flush><active*|<math|\<box\>>>>
        <arg|body>
      </surround>
    </padded-normal>
  </macro>>

  <assign|section-title|<macro|name|<style-with|src-compact|none|||<sectional-centered|<vspace*|1fn><with|font-base-size|14|<with|font-shape|small-caps|<arg|name>>><vspace|1.5fn>>>>>

  <assign|subsection-title|<macro|name|<style-with|src-compact|none|<vspace*|2fn><sectional-short-bold|<vspace*|0.5fn><arg|name>.
  ><no-page-break>>>>

  <assign|appendix-title|<macro|name|<section-title|<appendix-text>.
  <arg|name>>>>

  <assign|appendix-numbered-title|<macro|name|<section-title|<appendix-text>
  <the-appendix>. <arg|name>>>>

  <assign|header-author|<macro|name|<style-with|src-compact|none|<simple-page><assign|page-even-header|<with|font-size|0.82|<style-with|src-compact|none|<no-indent><quote|<page-the-page>><htab|5mm><with|font-shape|small-caps|<arg|name>><htab|0mm>>>>>>>

  <assign|header-title|<macro|name|<assign|page-odd-header|<with|font-size|0.82|<style-with|src-compact|none|<no-indent><htab|0mm><with|font-shape|small-caps|<arg|name>><htab|5mm><quote|<page-the-page>>>>>>>

  <assign|header-primary|<macro|name|nr|what|>>

  <assign|header-secondary|<macro|name|nr|what|>>

  <assign|choice*|<macro|x|<shrink-inline|<left|.><tformat|<arg|x>><right|}>>>>
</body>

<\initial>
  <\collection>
    <associate|preamble|true>
  </collection>
</initial>