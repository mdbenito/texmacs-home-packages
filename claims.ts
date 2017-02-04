<TeXmacs|1.99.3>

<style|source>

<\body>
  <\active*>
    <\src-comment>
      Steps and claims inside proofs.
    </src-comment>
  </active*>

  <assign|new-env2|<macro|env|name|grp|render|<quasi|<style-with|src-compact|none|<add-to-counter-group|<unquote|<arg|env>>|<unquote|<arg|grp>>><assign|<unquote|<merge|<arg|env>|-text>>|<macro|<localize|<unquote|<arg|name>>>>><assign|<unquote|<merge|<arg|env>|-numbered>>|<macro|text|num|<arg|text>
  <with|font-shape|right|<arg|num>>>><assign|<unquote|<merge|<arg|env>|-unnumbered>>|<macro|text|<arg|text>>><assign|<unquote|<arg|env>>|<\macro|desc|body>
    <surround|<compound|<unquote|<merge|next-|<arg|env>>>>||<style-with|src-compact|none|<compound|<unquote|<arg|render>>|<style-with|src-compact|none|<compound|<unquote|<merge|<arg|env>|-numbered>>|<compound|<unquote|<merge|<arg|env>|-text>>>|<compound|<unquote|<merge|the-|<arg|env>>>>>>|<arg|desc>|<arg|body>>>>
  </macro>><assign|<unquote|<merge|<arg|env>|*>>|<\macro|desc|body>
    <style-with|src-compact|none|<compound|<unquote|<arg|render>>|<style-with|src-compact|none|<compound|<unquote|<merge|<arg|env>|-unnumbered>>|<compound|<unquote|<merge|<arg|env>|-text>>>>>|<arg|desc>|<arg|body>>>
  </macro>>>>>>

  <new-counter-group|proof-env>

  <add-to-counter-group|step-env|proof-env>

  <assign|render-step|<\macro|what|desc|body>
    <surround|<vspace*|0.5fn><no-indent>||<underline|<arg|what>:>
    <em|<arg|desc>.><no-page-break>>

    <arg|body>
  </macro>>

  <new-env2|step|Step|proof-env|render-step>

  <assign|render-claim|<\macro|what|body>
    <surround|<vspace*|0.5fn><no-indent>||<underline|<arg|what>:><no-page-break>>

    <arg|body>
  </macro>>

  <new-env|claim|Claim|proof-env|render-claim>

  <assign|render-proof|<\macro|which|body>
    <\surround|<reset-proof-env>|<htab|0.5fn|0><qed>>
      <\render-remark|<arg|which>>
        <arg|body>
      </render-remark>
    </surround>
  </macro>>

  \;
</body>

<\initial>
  <\collection>
    <associate|src-close|compact>
    <associate|src-compact|inline args>
    <associate|src-special|normal>
    <associate|src-style|angular>
  </collection>
</initial>