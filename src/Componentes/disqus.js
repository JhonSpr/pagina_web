/* eslint-disable import/no-anonymous-default-export */

export function Disqus() {
  (<noscript>
    <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
  </noscript>)(
    /**
     *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
     *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables    */
    /*
    var disqus_config = function () {
    this.page.url = PAGE_URL;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = PAGE_IDENTIFIER; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    */
    function () {
      // DON'T EDIT BELOW THIS LINE
      var d = document,
        s = d.createElement("script");
      s.src = "https://animekuns.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date());
      (d.head || d.body).appendChild(s);
    }
  )();

  <script
    id="dsq-count-scr"
    src="//https-animekuns-netlify-app.disqus.com/count.js"
    async
  ></script>;

  return <div id="disqus_thread"></div>;
}
