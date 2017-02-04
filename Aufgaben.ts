<TeXmacs|1.99.3>

<style|source>

<\body>
  <active*|<\src-title>
    <src-package|Aufgaben|1.1>

    <\src-purpose>
      Exercise sheets for Ana3/DS/...
    </src-purpose>

    <src-copyright|2014|Miguel de Benito Delgado>

    <\src-license>
      This software falls under the <hlink|GNU general public license,
      version 3 or later|$TEXMACS_PATH/LICENSE>. It comes WITHOUT ANY
      WARRANTY WHATSOEVER. You should have received a copy of the license
      which the software. If not, see <hlink|http://www.gnu.org/licenses/gpl-3.0.html|http://www.gnu.org/licenses/gpl-3.0.html>.
    </src-license>
  </src-title>>

  <\active*>
    <\src-comment>
      Header and footer
    </src-comment>
  </active*>

  <assign|sans|<macro|body|<with|font|concrete|font-family|ss|<arg|body>>>>

  <assign|title-ana3|<macro|<sans|<strong|Übungen zur Analysis
  III<htab|5mm>Blatt <the-blatt>>>>>

  <assign|footer-ana3|<macro|<sans|Prof. Dr. Bernd Schmidt \|\| Miguel de
  Benito M.Sc.<htab|5mm>Universität Augsburg>>>

  <assign|title|<macro|<sans|<strong|Übungen zu Dynamische
  Systeme<htab|5mm>Blatt <the-blatt>>>>>

  <assign|footer|<macro|<sans|Prof. Dr. Dirk Blömker \|\| Miguel de Benito
  M.Sc.<htab|5mm>Universität Augsburg>>>

  <\active*>
    <\src-comment>
      Sheet counter
    </src-comment>
  </active*>

  <new-counter|blatt>

  <assign|new-blatt|<macro|nr|date|<assign|<counter-blatt>|<arg|nr>><assign|page-odd-header|<large|<title>>><assign|page-even-header|<title>><assign|page-head-sep|6mm><assign|page-odd-footer|<small|<footer>>><assign|page-even-footer|<value|page-odd-footer>><assign|page-foot-sep|6mm><htab|5mm><with|font-shape|italic|<small|<arg|date>>>>>

  <assign|new-header|<macro|name|text|extra|<quasi|<assign|<unquote|<arg|name>>|<macro|<bothlined|<htab|5mm><resize|<large|<strong|<sans|<unquote|<arg|text>>>>>||<plus|1b|-0.2fn>||<plus|1t|0.2fn>><htab|5mm>><unquote|<arg|extra><vspace|1.5em>>>>>>>

  <assign|banner|<macro|<small|Abgabe <with|font-series|bold|(zu zweit)> der
  Übungsaufgaben im nächsten Tutorium. Schreiben Sie bitte auf Ihre
  (zusammengehefteten) Aufgabenblätter Ihre Namen und Ihre
  Übungsgruppennummer.>>>

  <new-header|haus*|Hausaufgaben|<new-line><banner>>

  <new-header|haus|Hausaufgaben|>

  <new-header|tutor|Tutoraufgaben|>

  <new-header|übungen|Übungen>

  <\active*>
    <\src-comment>
      I could factor some of this out... Also is it necessary to use
      set-binding? Shouldn't I rather use the-label?
    </src-comment>
  </active*>

  <assign|render-exercise|<\macro|which|body>
    <surround|<move|<sans|<exercise-name|<arg|which><exercise-sep>>>|<plus|-1em|-1w>|><space|1em>||<arg|body>>
  </macro>>

  <assign|remark-text|<macro|Anleitung>>

  <assign|remark-sep|<macro|:>>

  <assign|remark*|<\macro|body>
    <small|<render-remark|<remark-unnumbered|<remark-text>>|<arg|body>>>
  </macro>>

  <assign|problem-text|<macro|H>>

  <assign|exercise-sep|<macro|>>

  <assign|problem|<\macro|body>
    <surround|<inc-problem><set-binding|<problem-text><the-blatt>.<the-problem>>||<render-exercise|<problem-numbered|<problem-text>|<the-blatt>.<the-problem>>|<arg|body>>>
  </macro>>

  <assign|exercise-text|<macro|A>>

  <assign|exercise|<\macro|body>
    <surround|<inc-exercise><set-binding|<exercise-text><the-blatt>.<the-exercise>>||<render-exercise|<exercise-numbered|<exercise-text>|<the-blatt>.<the-exercise>>|<arg|body>>>
  </macro>>

  <assign|hint|<macro|body|<small|<surround|<strong|<localize|Hint>:
  >||<arg|body>>>>>
</body>

<\initial>
  <\collection>
    <associate|page-type|b5>
  </collection>
</initial>