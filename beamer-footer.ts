<TeXmacs|1.99.4>

<style|source>

<\body>
  <\active*>
    <\src-title>
      <src-style-file|beamer-footer|1.2>

      <src-purpose|Footers and covers for the beamer style>

      <src-copyright|2015-2017|Miguel de Benito Delgado >

      <\src-license>
        This software falls under the <hlink|GNU general public license,
        version 3 or later|$TEXMACS_PATH/LICENSE>. It comes WITHOUT ANY
        WARRANTY WHATSOEVER. You should have received a copy of the license
        which the software. If not, see <hlink|http://www.gnu.org/licenses/gpl-3.0.html|http://www.gnu.org/licenses/gpl-3.0.html>.
      </src-license>
    </src-title>
  </active*>

  <use-package|beamer>

  <\active*>
    <\src-comment>
      Style parameters. These can be adjusted in Focus -\<gtr\>
      Preferences<compound|math|>
    </src-comment>
  </active*>

  <assign|title-bar-color|dark grey>\ 

  <assign|title-color|white> --- Text color in the top title bar

  <assign|tit-border-color|#307fcc> --- Color of the bottom border for the
  top title bar

  <assign|tit-border-height|0.002pag> --- Height of the bottom border for the
  top title bar

  <assign|footer-bar-color|<value|title-bar-color>>

  <assign|footer-color|white> --- Text color in the footer bar

  <assign|ftr-border-color|#307fcc> --- Color of the bottom border for the
  footer bar

  <assign|ftr-border-height|0.001pag> --- Height of the top border for the
  footer bar

  <assign|math-color|#0C2754bf>

  <assign|strong-color|#0C2754bf>

  <assign|screens-running-footer|> --- Content of the middle section for all
  footers in the presentation

  \;

  --- Add our parameters to the configurable style parameters

  <drd-props|tit-border-color|macro-parameter|color>

  <drd-props|tit-border-height|macro-parameter|length>

  <drd-props|footer-color|macro-parameter|color>

  <drd-props|footer-bar-color|macro-parameter|color>

  <drd-props|ftr-border-color|macro-parameter|color>

  <drd-props|ftr-border-height|macro-parameter|length>

  <drd-props|screens-running-footer|macro-parameter|string>

  <\active*>
    <\src-comment>
      Macro definitions.

      cover-title and cover-footer are independent of cover and may be used
      for a simpler cover page.
    </src-comment>
  </active*>

  <assign|cover-title|<\macro|body>
    <\with|ornament-shape|classic|ornament-color|<value|title-bar-color>|ornament-sunny-color|<value|tit-border-color>|ornament-vpadding|1.7bls|ornament-shadow-color|<value|tit-border-color>>
      <\ornamented>
        <with|color|<value|title-color>|<htab|5mm><really-huge|<arg|body>><htab|5mm>>
      </ornamented>
    </with>
  </macro>>

  <assign|cover-footer|<\macro|left|right>
    <\with|ornament-shape|classic|ornament-color|<value|footer-bar-color>|ornament-sunny-color|<value|ftr-border-color>|ornament-shadow-color|<value|ftr-border-color>>
      <\ornamented>
        <em|<with|color|<value|footer-color>|<very-small|<arg|left>><htab|5mm><very-small|<arg|right>>>>
      </ornamented>
    </with>
  </macro>>

  <assign|cover|<\macro|title|author|sub-left|sub-right>
    <\with|par-par-sep|0fn|par-sep|0fn|par-ver-sep|0fn|par-line-sep|0fn>
      <with|color|<value|tit-border-color>|<resize|<tabular*|<tformat|<twith|table-width|1par>|<twith|table-hmode|exact>|<cwith|1|1|1|-1|cell-background|<value|title-bar-color>>|<cwith|1|1|1|1|cell-halign|c>|<cwith|1|1|1|1|cell-hyphen|t>|<twith|table-valign|T>|<twith|table-vmode|auto>|<cwith|1|1|1|1|cell-bborder|5px>|<cwith|1|1|1|1|cell-height|0.2pag>|<cwith|1|1|1|1|cell-vmode|exact>|<cwith|1|1|1|1|cell-valign|c>|<table|<row|<\cell>
        <with|color|<value|title-color>|math-color|<value|title-color>|font-series|bold|font-size|1.5|<htab|5mm><arg|title><htab|5mm>>
      </cell>>>>>||0em||>>

      <shift|<with|color|<value|tit-border-color>|<tabular*|<tformat|<twith|table-width|1par>|<twith|table-hmode|exact>|<cwith|1|1|1|-1|cell-background|<value|footer-bar-color>>|<cwith|1|1|1|1|cell-halign|c>|<cwith|1|1|1|1|cell-hyphen|t>|<twith|table-valign|b>|<twith|table-height|0.02pag>|<twith|table-vmode|exact>|<cwith|1|1|1|1|cell-tsep|0em>|<cwith|1|1|1|1|cell-bsep|0em>|<cwith|1|1|1|1|cell-tborder|5px>|<table|<row|<\cell>
        <with|color|<value|title-color>|math-color|<value|title-color>|font-size|0.59|<arg|sub-left><htab|5mm><arg|sub-right>>
      </cell>>>>>>|0mm|<minus|2h|1pag>>

      <shift|<small|<strong|<arg|author>>>|<minus|0.5par|0.5w>|<minus|0.5pag>>
    </with>
  </macro>>

  \;

  <drd-props|cover-title|border|no>

  <drd-props|cover-footer|border|no>

  <drd-props|cover|border|no>

  <\active*>
    <\src-comment>
      Titles and footers for the slides.
    </src-comment>
  </active*>

  --- We redefine screens-summary without any formatting to change its size
  in the footer. This macro is used behind the scenes by title-right.

  <assign|screens-summary|<macro|body|<if|<greater|<screens-arity|<quote-arg|body>>|0>|<plus|<screens-index|<quote-arg|body>>|1>
  of <screens-arity|<quote-arg|body>>>>>

  <assign|ftr|<macro|left|center|right|<with|color|<value|ftr-border-color>|<tabular*|<tformat|<twith|table-width|1par>|<twith|table-hmode|exact>|<cwith|1|1|1|-1|cell-background|<value|footer-bar-color>>|<cwith|1|1|1|1|cell-halign|c>|<cwith|1|1|1|1|cell-tsep|0ex>|<style-with|src-compact|all|<cwith|1|1|1|1|cell-bsep|0em>>|<cwith|1|1|1|1|cell-tborder|<value|ftr-border-height>>|<cwith|1|1|1|1|cell-vmode|auto>|<twith|table-height|0.03pag>|<twith|table-vmode|exact>|<cwith|1|1|1|1|cell-hyphen|t>|<twith|table-lsep|0>|<twith|table-rsep|0>|<twith|table-bsep|0>|<twith|table-tsep|0>|<twith|table-bborder|0>|<cwith|1|1|1|1|cell-valign|c>|<twith|table-valign|f>|<table|<row|<\cell>
    <with|color|<value|footer-color>|math-color|<value|footer-color>|font-size|0.59|<arg|left><htab|5mm><arg|center><htab|5mm><with|font-size|0.39|<arg|right>>>
  </cell>>>>>>>>

  --- The macro constructing the top and bottom bars. Note that the top right
  content (the page counter) is disabled with a phantom macro. Instead it is
  placed in the footer

  <assign|tit|<\macro|head>
    <\with|par-left|<minus|<value|page-screen-left>>|par-right|<minus|<value|page-screen-right>>|par-par-sep|0fn|par-sep|0fn|par-ver-sep|0fn|par-line-sep|0fn>
      <\reduce-by>
        <shift|<with|color|<value|tit-border-color>|<resize|<tabular*|<tformat|<twith|table-width|1par>|<twith|table-hmode|exact>|<cwith|1|1|1|-1|cell-background|<title-bar-color>>|<cwith|1|1|1|1|cell-halign|c>|<cwith|1|1|1|1|cell-hyphen|t>|<twith|table-valign|T>|<twith|table-vmode|auto>|<cwith|1|1|1|1|cell-height|0.05pag>|<cwith|1|1|1|1|cell-vmode|exact>|<cwith|1|1|1|1|cell-bborder|<value|tit-border-height>>|<table|<row|<\cell>
          <with|color|<value|title-color>|math-color|<value|title-color>|font-series|bold|<phantom|<title-left|<arg|head>>><htab|5mm><arg|head><htab|5mm><phantom|<title-right|xxx>>>
        </cell>>>>>||0em||>>|0mm|<value|page-screen-top>>

        <shift|<ftr|<title-left|xxx>|<value|screens-running-footer>|<title-right|xxx>>|0mm|<minus|0.959pag>>
      <|reduce-by>
        1ex
      </reduce-by>
    </with>
  </macro>>

  --- FIXME: this macro is hard to navigate with the cursor. Also, it leaves
  lots of empty space at the top of the document.

  <assign|btit|<\macro|head>
    <\with|par-left|<minus|<value|page-screen-left>>|par-right|<minus|<value|page-screen-right>>|par-par-sep|0fn|par-sep|0fn|par-ver-sep|0fn|par-line-sep|0fn|par-hor-sep|0fn|par-mode|left>
      <reduce-by|<shift|<ftr|<value|screens-running-footer>|<arg|head>|<title-right|xxx>>|0mm|<minus|0.994pag>>|1ex>
    </with>
  </macro>>

  \;

  <drd-props|tit|border|no>

  <drd-props|btit|border|yes> \ --- FIXME: make invisible when btit works
  properly
</body>

<initial|<\collection>
</collection>>