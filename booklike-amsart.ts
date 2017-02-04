<TeXmacs|1.0.7.18>

<style|source>

<\body>
  <assign|render-exercise|<\macro|which|body>
    <\padded-normal|1fn|1fn>
      <\indent-left|1.5fn>
        <tabular*|<tformat|<twith|table-hyphen|y>|<twith|table-width|0.9par>|<cwith|1|-1|1|-1|cell-hyphen|t>|<table|<row|<\cell>
          <surround|<exercise-name|<arg|which><exercise-sep>>|<yes-indent*>|<with|font-shape|italic|<arg|body>>>
        </cell>>>>>
      </indent-left>
    </padded-normal>
  </macro>>

  <assign|render-proof|<\macro|name|cont>
    <\padded-normal|10pt|18pt>
      <\surround|<no-indent><with|font-shape|italic|<proof-text>.
      >|<right-flush><active*|<math|\<box\>>>>
        <arg|cont>
      </surround>
    </padded-normal>
  </macro>>

  <assign|section-title|<macro|name|<style-with|src-compact|none|||<new-dpage*><sectional-centered|<vspace*|1fn><with|font-base-size|14|<with|font-shape|small-caps|<arg|name>>><vspace|1.5fn>>>>>

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

  \;
</body>

<\initial>
  <\collection>
    <associate|preamble|true>
  </collection>
</initial>