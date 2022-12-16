import React from "react";

export default function Recommendations() {
  (function () {
    // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
    var d = document,
      s = d.createElement("script"); // IMPORTANT: Replace EXAMPLE with your forum shortname!
    s.src = "https://animekuns-1.disqus.com/recommendations.js";
    s.setAttribute("data-timestamp", +new Date());
    (d.head || d.body).appendChild(s);
  })();

  <noscript>
    Please enable JavaScript to view the
    <a href="https://disqus.com/?ref_noscript" rel="nofollow">
      comments powered by Disqus.
    </a>
  </noscript>;
  return <div id="disqus_recommendations"></div>;
}
