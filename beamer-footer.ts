<TeXmacs|1.99.4>

<style|source>

<\body>
  <\active*>
    <\src-title>
      <src-style-file|beamer-footer|1.0>

      <src-purpose|Footers and covers for the beamer style>
    </src-title>
  </active*>

  <use-package|beamer>

  <\active*>
    <\src-comment>
      Style parameters.
    </src-comment>
  </active*>

  <assign|title-bar-color|dark grey>

  <assign|title-color|white>

  <assign|footer-color|white>

  <assign|math-color|#0C2754bf>

  <assign|strong-color|#0C2754bf>

  <assign|tit-border-color|#307fcc>

  <assign|ftr-border-color|#307fcc>

  <assign|screens-running-footer|>

  <assign|screens-footer-color|<value|title-bar-color>>

  \;

  <drd-props|footer-color|macro-parameter|color>

  <drd-props|tit-border-color|macro-parameter|color>

  <drd-props|ftr-border-color|macro-parameter|color>\ 

  <drd-props|screens-footer-color|macro-parameter|color>

  <\active*>
    <\src-comment>
      Macro definitions.
    </src-comment>
  </active*>

  <assign|cover-title|<\macro|body>
    <\with|ornament-shape|classic|ornament-color|<value|title-bar-color>|ornament-sunny-color|<value|tit-border-color>|ornament-vpadding|1.7bls>
      <\ornamented>
        <with|color|<value|title-color>|<htab|5mm><really-huge|<arg|body>><htab|5mm>>
      </ornamented>
    </with>
  </macro>>

  <assign|cover-footer|<\macro|left|right>
    <\with|ornament-shape|classic|ornament-color|<screens-footer-color>|ornament-sunny-color|<value|tit-border-color>>
      <\ornamented>
        <em|<with|color|white|<very-small|<arg|left>><htab|5mm><very-small|<arg|right>>>>
      </ornamented>
    </with>
  </macro>>

  <assign|cover|<\macro|title|author|sub-left|sub-right>
    <\with|par-par-sep|0fn|par-sep|0fn|par-ver-sep|0fn|par-line-sep|0fn>
      <with|color|<value|tit-border-color>|<resize|<tabular*|<tformat|<twith|table-width|1par>|<twith|table-hmode|exact>|<cwith|1|1|1|-1|cell-background|<title-bar-color>>|<cwith|1|1|1|1|cell-halign|c>|<cwith|1|1|1|1|cell-hyphen|t>|<twith|table-valign|T>|<twith|table-vmode|auto>|<cwith|1|1|1|1|cell-bborder|5px>|<cwith|1|1|1|1|cell-height|0.2pag>|<cwith|1|1|1|1|cell-vmode|exact>|<cwith|1|1|1|1|cell-valign|c>|<table|<row|<\cell>
        <with|color|<title-color>|math-color|<title-color>|font-series|bold|font-size|1.5|<htab|5mm><arg|title><htab|5mm>>
      </cell>>>>>||0em||>>

      <shift|<with|color|<value|tit-border-color>|<tabular*|<tformat|<twith|table-width|1par>|<twith|table-hmode|exact>|<cwith|1|1|1|-1|cell-background|<screens-footer-color>>|<cwith|1|1|1|1|cell-halign|c>|<cwith|1|1|1|1|cell-hyphen|t>|<twith|table-valign|b>|<twith|table-height|0.02pag>|<twith|table-vmode|exact>|<cwith|1|1|1|1|cell-tsep|0em>|<cwith|1|1|1|1|cell-bsep|0em>|<cwith|1|1|1|1|cell-tborder|5px>|<table|<row|<\cell>
        <with|color|<title-color>|math-color|<title-color>|font-size|0.59|<arg|sub-left><htab|5mm><arg|sub-right>>
      </cell>>>>>>|0mm|<minus|2h|1pag>>

      <shift|<small|<strong|<arg|author>>>|<minus|0.5par|0.5w>|<minus|0.5pag>>
    </with>
  </macro>>

  <\active*>
    <\src-comment>
      Titles and footers for the slides. Changing the size of title-right
      didn't work: as a workaround we redefine screens-summary without any
      formatting\ 
    </src-comment>
  </active*>

  <assign|screens-summary|<macro|body|<if|<greater|<screens-arity|<quote-arg|body>>|0>|<plus|<screens-index|<quote-arg|body>>|1>
  of <screens-arity|<quote-arg|body>>>>>

  <assign|ftr|<macro|left|center|right|<with|color|<value|ftr-border-color>|<tabular*|<tformat|<twith|table-width|1par>|<twith|table-hmode|exact>|<cwith|1|1|1|-1|cell-background|<screens-footer-color>>|<cwith|1|1|1|1|cell-halign|c>|<style-with|src-compact|all|<twith|table-valign|b>>|<cwith|1|1|1|1|cell-tsep|0em>|<style-with|src-compact|all|<cwith|1|1|1|1|cell-bsep|0.004pag>>|<cwith|1|1|1|1|cell-tborder|0.001pag>|<cwith|1|1|1|1|cell-height|0.03pag>|<cwith|1|1|1|1|cell-vmode|auto>|<twith|table-height|0.02pag>|<twith|table-vmode|exact>|<cwith|1|1|1|1|cell-hyphen|t>|<twith|table-lsep|0>|<twith|table-rsep|0>|<twith|table-bsep|0>|<twith|table-tsep|0>|<twith|table-bborder|0>|<table|<row|<\cell>
    <with|color|<value|footer-color>|math-color|<value|title-color>|font-size|0.59|<arg|left><htab|5mm><arg|center><htab|5mm><with|font-size|0.39|<arg|right>>>
  </cell>>>>>>>>

  <assign|tit|<\macro|head>
    <\with|par-left|<minus|<value|page-screen-left>>|par-right|<minus|<value|page-screen-right>>|par-par-sep|0fn|par-sep|0fn|par-ver-sep|0fn|par-line-sep|0fn>
      <shift|<with|color|<value|tit-border-color>|<resize|<tabular*|<tformat|<twith|table-width|1par>|<twith|table-hmode|exact>|<cwith|1|1|1|-1|cell-background|<title-bar-color>>|<cwith|1|1|1|1|cell-halign|c>|<cwith|1|1|1|1|cell-hyphen|t>|<twith|table-valign|T>|<twith|table-vmode|auto>|<cwith|1|1|1|1|cell-height|0.05pag>|<cwith|1|1|1|1|cell-vmode|exact>|<cwith|1|1|1|1|cell-bborder|0.002pag>|<table|<row|<\cell>
        <with|color|<title-color>|math-color|<title-color>|font-series|bold|<title-left|<arg|head>><htab|5mm><arg|head><htab|5mm><phantom|<title-right|xxx>>>
      </cell>>>>>||0em||>>|0mm|<value|page-screen-top>>

      <shift|<ftr|<title-left|xxx>|<value|screens-running-footer>|<title-right|xxx>>|0mm|<minus|0.965pag>>
    </with>
  </macro>>

  <assign|btit|<\macro|head>
    <\with|par-left|<minus|<value|page-screen-left>>|par-right|<minus|<value|page-screen-right>>|par-par-sep|0fn|par-sep|0fn|par-ver-sep|0fn|par-line-sep|0fn|par-hor-sep|0fn|par-mode|left>
      <shift|<ftr|<value|screens-running-footer>|<arg|head>|<title-right|xxx>>|0mm|<minus|0.995pag>>
    </with>
  </macro>>
</body>

<initial|<\collection>
</collection>>