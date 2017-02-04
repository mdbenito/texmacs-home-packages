<TeXmacs|1.99.3>

<style|source>

<\body>
  <active*|<\src-title>
    <src-package|log|1.4>

    <\src-purpose>
      Log-like style.
    </src-purpose>

    <src-copyright|2014|Miguel de Benito Delgado>

    <\src-license>
      This software falls under the <hlink|GNU general public license,
      version 3 or later|$TEXMACS_PATH/LICENSE>. It comes WITHOUT ANY
      WARRANTY WHATSOEVER. You should have received a copy of the license
      which the software. If not, see <hlink|http://www.gnu.org/licenses/gpl-3.0.html|http://www.gnu.org/licenses/gpl-3.0.html>.
    </src-license>
  </src-title>>

  <use-module|(dynamic log-entries)>

  <assign|sans|<macro|body|<with|font|concrete|font-family|ss|<arg|body>>>>

  <\active*>
    <\src-comment>
      Log-like foldable entries

      FIXME: notice that in render-entry there's an empty line. Inserting
      instead new-lines in the argument to the call to render-entry which is
      made in (un)folded-entry results in all lines rendered atop each other.
    </src-comment>
  </active*>

  <new-counter|entry>

  <assign|display-std-env|<macro|nr|<the-entry>.<arg|nr>>>

  <assign|render-entry-date|<macro|dd|mm|yyyy|<compound|smaller|<with|font-shape|italic|[<arg|dd>.<arg|mm>.<arg|yyyy>]>>>>

  <assign|entry-clean|<macro|<reset-std-env>>>

  <assign|render-entry|<\macro|button|body>
    <\surround|<no-indent><sans|<with|locus-color|preserve|visited-color|preserve|<arg|button>>>|<right-flush>>
      \;

      <\with|default-padded-normal|<value|padded-normal>|padded-normal|<value|folded-padded-normal>>
        <arg|body>
      </with>
    </surround>
  </macro>>

  <assign|folded-entry|<\macro|title|dd|mm|yyyy|content>
    <\render-entry|<entry-clean><inc-entry><the-entry><space|1em><action|<section-title|<arg|title>>|mouse-unfold|<arg|title>><toc-dots><render-entry-date|<arg|dd>|<arg|mm>|<arg|yyyy>>>
      <hidden|<arg|content>>
    </render-entry>
  </macro>>

  <assign|unfolded-entry|<\macro|title|dd|mm|yyyy|content>
    <\render-entry|<entry-clean><inc-entry><move|<strong|<the-entry>>|<plus|-1w|-1.5em>|><space|1.5em><action|<strong|<section-title|<large|<arg|title>>>>|mouse-fold|<arg|title>><toc-dots><render-entry-date|<arg|dd>|<arg|mm>|<arg|yyyy>><vspace*|2fn>>
      <arg|content>
    </render-entry>
  </macro>>

  <drd-props|folded-entry|arity|5|accessible|0|hidden|4>

  <assign|elink|<macro|where|<action|[<arg|where>]|jump-to-entry|<arg|where>>>>

  <\active*>
    <\src-comment>
      Nicer bibliography in a log entry.
    </src-comment>
  </active*>

  <assign|bibliography|<\macro|aux|style|file-name|body>
    <render-bibliography||<arg|body>>
  </macro>>

  <assign|render-bibliography|<\macro|name|body>
    \;

    <\with|par-left|<plus|<value|par-left>|3fn>|par-right|<plus|<value|par-right>|3fn>|par-first|0fn|par-par-sep|0fn|font-size|0.84>
      <arg|body>
    </with>
  </macro>>
</body>

<\initial>
  <\collection>
    <associate|src-close|compact>
    <associate|src-compact|inline args>
    <associate|src-special|normal>
    <associate|src-style|angular>
  </collection>
</initial>