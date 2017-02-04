<TeXmacs|1.0.7.16>

<style|source>

<\body>
  <active*|<\src-title>
    <src-package|subfigure|0.1>

    <\src-purpose>
      Creating subfigures in big-figure floats
    </src-purpose>

    <src-copyright|2012| Lorenzo Keller (derived from work by J. van der
    Hoeven) >

    <\src-license>
      This software falls under the <hlink|GNU general public license,
      version 3 or later|$TEXMACS_PATH/LICENSE>. It comes WITHOUT ANY
      WARRANTY WHATSOEVER. You should have received a copy of the license
      which the software. If not, see <hlink|http://www.gnu.org/licenses/gpl-3.0.html|http://www.gnu.org/licenses/gpl-3.0.html>.
    </src-license>
  </src-title>>

  <active*|<\src-comment>
    Create a new counter for the subfigure and reset it each time the figure
    counter is reset
  </src-comment>>

  <new-counter|subfigure>

  <quasi|<assign|inc-figure|<\macro>
    <compound|<unquote|<value|inc-figure>>><reset-subfigure>
  </macro>>>

  <active*|<\src-comment>
    The subfigure command is used to create a subfigure, notice that it
    automatically resets the label to the figure in which it is inserted
  </src-comment>>

  <assign|render-sub-figure|<macro|name|fig|cap|<tabular*|<tformat|<style-with|src-compact|all|<cwith|1|-1|1|-1|cell-lsep|0spc>>|<cwith|1|-1|1|-1|cell-rsep|0spc>|<cwith|2|2|1|1|cell-height|0.5fn>|<twith|table-valign|B>|<cwith|3|3|1|1|cell-hyphen|t>|<twith|table-hmode|min>|<twith|table-width|1par>|<table|<row|<cell|<resize|<arg|fig>|<minus|1l|2fn>||<plus|1r|2fn>|>>>|<row|<cell|>>|<row|<\cell>
    <small|<\surround|<figure-name|<arg|name>>|>
      <arg|cap>
    </surround>>
  </cell>>>>>>>

  <assign|subfigure|<\macro|body|caption>
    <surround|<compound|inc-subfigure><set-binding|<the-figure>(<number|<the-subfigure>|alpha>)>||<render-sub-figure|(<number|<the-subfigure>|alpha>)
    |<arg|body>|<arg|caption>><set-binding|<compound|the-figure>>>
  </macro>>

  <active*|<\src-comment>
    The subfigures command can be used to automatically<active*|> align
    subfigures inside a figure float
  </src-comment>>

  <assign|subfigures|<\macro|fig>
    <padded-normal|1fn|1fn|<tabular*|<tformat|<twith|table-width|1par>|<twith|table-hmode|min>|<cwith|1|1|1|1|cell-hyphen|t>|<cwith|1|-1|1|-1|cell-lsep|0spc>|<cwith|1|-1|1|-1|cell-rsep|0spc>|<table|<row|<\cell>
      <with|par-mode|center|par-line-sep|0.5fn|<arg|fig>>
    </cell>>>>>>
  </macro>>
</body>