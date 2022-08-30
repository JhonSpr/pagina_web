import React from "react";

export default function Prueba() {
  return (
    <div class="hero is-fullheightX">
      <section class="section">
        <div class="container">
          <div class="columns is-multiline">
            <div class="column is-12-mobile is-8-tablet is-9-desktop">
              <h1 class="title is-size-4 has-text-centeredX has-text-weight-semibold is-uppercaseX has-text-light">
                SHINEPOST 7 Sub Español
              </h1>
            </div>
            <div class="column is-12-mobile is-4-tablet is-3-desktop">
              <div class="columns is-variable is-1">
                <div class="column is-3-desktop is-2-tablet is-2-mobile">
                  <a
                    href="https://www.animefenix.com/ver/shinepost-6"
                    class="button is-orange is-fullwidth"
                  >
                    <i class="fa fa-arrow-circle-left"></i>&nbsp;
                  </a>
                </div>
                <div class="column is-6-desktop is-8-tablet is-8-mobile">
                  <a
                    href="https://www.animefenix.com/shinepost"
                    class="button is-dark"
                  >
                    <i class="fa fa-list-alt"></i>&nbsp;Episodios
                  </a>
                </div>
              </div>
            </div>

            <div class="column is-12-mobile is-9-tablet is-9-desktop">
              <div class="player-container">
                <div class="iframe-container" id="video_player"></div>

                <div class="tabs is-toggle is-toggle-roundedX is-small episode-page__servers">
                  <ul class="is-borderless episode-page__servers-list">
                    <li>
                      <a title="M" href="#vid1">
                        <span class="icon is-small">
                          <i class="fas fa-play"></i>
                        </span>
                        <span>M</span>
                      </a>
                    </li>
                    <li>
                      <a title="YourUpload" href="#vid2">
                        <span class="icon is-small">
                          <i class="fas fa-play"></i>
                        </span>
                        <span>YourUpload</span>
                      </a>
                    </li>
                    <li>
                      <a title="Burst" href="#vid3">
                        <span class="icon is-small">
                          <i class="fas fa-play"></i>
                        </span>
                        <span>Burst</span>
                      </a>
                    </li>
                    <li>
                      <a title="RU" href="#vid4">
                        <span class="icon is-small">
                          <i class="fas fa-play"></i>
                        </span>
                        <span>RU</span>
                      </a>
                    </li>
                    <li>
                      <a title="Fireload" href="#vid5">
                        <span class="icon is-small">
                          <i class="fas fa-play"></i>
                        </span>
                        <span>Fireload</span>
                      </a>
                    </li>
                    <li>
                      <a title="Amazon" href="#vid6">
                        <span class="icon is-small">
                          <i class="fas fa-play"></i>
                        </span>
                        <span>Amazon</span>
                      </a>
                    </li>
                    <li>
                      <a title="AmazonEs" href="#vid7">
                        <span class="icon is-small">
                          <i class="fas fa-play"></i>
                        </span>
                        <span>AmazonEs</span>
                      </a>
                    </li>
                    <li>
                      <a title="STREAM" href="#vid8">
                        <span class="icon is-small">
                          <i class="fas fa-play"></i>
                        </span>
                        <span>STREAM</span>
                      </a>
                    </li>
                    <li>
                      <a title="Fembed" href="#vid9">
                        <span class="icon is-small">
                          <i class="fas fa-play"></i>
                        </span>
                        <span>Fembed</span>
                      </a>
                    </li>
                    <li>
                      <a title="Mp4upload" href="#vid10">
                        <span class="icon is-small">
                          <i class="fas fa-play"></i>
                        </span>
                        <span>Mp4upload</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <h1 class="title is-size-5 has-text-weight-light has-text-light">
                <i class="fas fa-comment-dots far has-text-orange"></i>
                Comentarios sobre SHINEPOST 7
              </h1>
              <div id="commentsContainer">
                <div id="showComments" class="button is-fullwidth is-dark">
                  Mostrar Comentarios
                </div>
              </div>
              <noscript>
                Please enable JavaScript to view the{" "}
                <a href="https://disqus.com/?ref_noscript">
                  comments powered by Disqus.
                </a>
              </noscript>
            </div>

            <div class="column is-12-mobile is-3-tablet is-3-deskop">
              <div class="column is-12-mobile is-12-tablet is-12-desktop is-paddingless">
                <h5 class="has-text-light text-centered">
                  Series Recomendadas
                </h5>
                <div class="columns is-mobile is-multiline is-variable is-1">
                  <div class="column is-narrow is-3-mobile is-6-tablet is-6-desktop">
                    <a
                      href="https://www.animefenix.com/princess-connect-re-dive"
                      title="Princess Connect! Re:Dive"
                    >
                      <img
                        src="https://www.animefenix.com/cdn/animes/cover/5e8a57fc3b25a/princess-connect-re-dive.jpg"
                        alt="Princess Connect! Re:Dive"
                      />
                    </a>
                  </div>
                  <div class="column is-narrow is-3-mobile is-6-tablet is-6-desktop">
                    <a
                      href="https://www.animefenix.com/gakusen-toshi-asterisk-2nd-season"
                      title="Gakusen Toshi Asterisk 2nd Season"
                    >
                      <img
                        src="https://www.animefenix.com/cdn/animes/cover/60269c00be3bc/gakusen-toshi-asterisk-2nd-season.jpg"
                        alt="Gakusen Toshi Asterisk 2nd Season"
                      />
                    </a>
                  </div>
                  <div class="column is-narrow is-3-mobile is-6-tablet is-6-desktop">
                    <a
                      href="https://www.animefenix.com/ikkitousen-dragon-destiny"
                      title="Ikkitousen: Dragon Destiny"
                    >
                      <img
                        src="https://www.animefenix.com/cdn/animes/cover/6238fb3bd3516/ikkitousen-dragon-destiny.jpg"
                        alt="Ikkitousen: Dragon Destiny"
                      />
                    </a>
                  </div>
                  <div class="column is-narrow is-3-mobile is-6-tablet is-6-desktop">
                    <a
                      href="https://www.animefenix.com/one-piece-pelicula-2-clockwork-island-adventure"
                      title="One Piece Pelicula 2: Clockwork Island Adventure"
                    >
                      <img
                        src="https://www.animefenix.com/cdn/animes/cover/5e0de7de8711c/one-piece-pelicula-2-clockwork-island-adventure.png"
                        alt="One Piece Pelicula 2: Clockwork Island Adventure"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
