/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import Breadcrumb from "react-bootstrap/Breadcrumb";
import {
  AnimeRecommend1,
  AnimeRecommend2,
  AnimeRecommend3,
  AnimeRecommend4,
} from "./AnimesRecommend";
import Disqus from "./Elements/disqus";

/* eslint-disable jsx-a11y/iframe-has-title */
export function Video({
  tituloAnime,
  anime,
  capitulosVideo,
  siguienteVideo,
  anteriorVideo,
  numero,
  contAnteriorClass,
  contSiguienteClass,
  frame1,
}) {
  return (
    <>
      <title>
        {anime} Capitulo {numero} HD
      </title>

      <div className="hero is-fullheightX">
        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-12-mobile is-8-tablet is-9-desktop">
                <Breadcrumb>
                  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
                  <Breadcrumb.Item href="/animes">animes</Breadcrumb.Item>
                  <Breadcrumb.Item active>
                    {anime + " " + numero}
                  </Breadcrumb.Item>
                </Breadcrumb>
              </div>

              <div className="column is-12-mobile is-9-tablet is-9-desktop">
                <div className="player-container">
                  <div className="iframe-container" id="video_player">
                    <script>
                      var tabsArray = new Object(); tabsArray['1'] = "
                      <iframe
                        width="100%"
                        height="100%"
                        src={frame1}
                        frameborder="0"
                        noresize
                        scrolling="no"
                        allowfullscreen
                      ></iframe>
                      "; tabsArray['2'] = "
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://animefenix.tv/redirect.php?player=6&amp;code=Hd44J6683U0c&amp;thumbnail=https%3A%2F%2Fanimefenix.tv%2Fcdn%2Fanimes%2Fscreenshot%2F632a66239985f%2Fchainsaw-man.jpg"
                        frameborder="0"
                        noresize
                        scrolling="no"
                        allowfullscreen
                      ></iframe>
                      "; tabsArray['3'] = "
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://animefenix.tv/redirect.php?player=17&amp;code=y5TA0vyd4C8RxbmzSqSyRg%26resolution%3D1080%26autoplay%3Dtrue%26mute%3Dfalse%26uk%3D4399467314851%26fid%3D886462520314107&amp;thumbnail=https%3A%2F%2Fanimefenix.tv%2Fcdn%2Fanimes%2Fscreenshot%2F632a66239985f%2Fchainsaw-man.jpg"
                        frameborder="0"
                        noresize
                        scrolling="no"
                        allowfullscreen
                      ></iframe>
                      "; tabsArray['4'] = "
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://animefenix.tv/redirect.php?player=23&amp;code=d43fafup9n48&amp;thumbnail=https%3A%2F%2Fanimefenix.tv%2Fcdn%2Fanimes%2Fscreenshot%2F632a66239985f%2Fchainsaw-man.jpg"
                        frameborder="0"
                        noresize
                        scrolling="no"
                        allowfullscreen
                      ></iframe>
                      "; tabsArray['5'] = "
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://animefenix.tv/redirect.php?player=12&amp;code=4867994290799&amp;thumbnail=https%3A%2F%2Fanimefenix.tv%2Fcdn%2Fanimes%2Fscreenshot%2F632a66239985f%2Fchainsaw-man.jpg"
                        frameborder="0"
                        noresize
                        scrolling="no"
                        allowfullscreen
                      ></iframe>
                      "; tabsArray['6'] = "
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://animefenix.tv/redirect.php?player=22&amp;code=srv3.fireload.com%2F3671117a1d9797d2%2FChainsaw_11.mp4%3Fdownload_token%3D0377f0dd29518bf78b911407d1674f366ca233ec4b34f10f72e0ee48205e0314&amp;thumbnail=https%3A%2F%2Fanimefenix.tv%2Fcdn%2Fanimes%2Fscreenshot%2F632a66239985f%2Fchainsaw-man.jpg"
                        frameborder="0"
                        noresize
                        scrolling="no"
                        allowfullscreen
                      ></iframe>
                      "; tabsArray['7'] = "
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://animefenix.tv/redirect.php?player=9&amp;code=a&amp;thumbnail=https%3A%2F%2Fanimefenix.tv%2Fcdn%2Fanimes%2Fscreenshot%2F632a66239985f%2Fchainsaw-man.jpg"
                        frameborder="0"
                        noresize
                        scrolling="no"
                        allowfullscreen
                      ></iframe>
                      "; tabsArray['8'] = "
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://animefenix.tv/redirect.php?player=11&amp;code=a&amp;thumbnail=https%3A%2F%2Fanimefenix.tv%2Fcdn%2Fanimes%2Fscreenshot%2F632a66239985f%2Fchainsaw-man.jpg"
                        frameborder="0"
                        noresize
                        scrolling="no"
                        allowfullscreen
                      ></iframe>
                      "; tabsArray['9'] = "
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://animefenix.tv/redirect.php?player=21&amp;code=ac04c03c5c75309fe47953f0887f815d5916507dcca3cb0d5fbd1b19b575dc23%2FChainsaw%252011.mp4&amp;thumbnail=https%3A%2F%2Fanimefenix.tv%2Fcdn%2Fanimes%2Fscreenshot%2F632a66239985f%2Fchainsaw-man.jpg"
                        frameborder="0"
                        noresize
                        scrolling="no"
                        allowfullscreen
                      ></iframe>
                      "; tabsArray['10'] = "
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://animefenix.tv/redirect.php?player=2&amp;code=my105t5dgj3jldq&amp;thumbnail=https%3A%2F%2Fanimefenix.tv%2Fcdn%2Fanimes%2Fscreenshot%2F632a66239985f%2Fchainsaw-man.jpg"
                        frameborder="0"
                        noresize
                        scrolling="no"
                        allowfullscreen
                      ></iframe>
                      "; tabsArray['11'] = "
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://animefenix.tv/redirect.php?player=3&amp;code=9zh61mh0mrk5&amp;thumbnail=https%3A%2F%2Fanimefenix.tv%2Fcdn%2Fanimes%2Fscreenshot%2F632a66239985f%2Fchainsaw-man.jpg"
                        frameborder="0"
                        noresize
                        scrolling="no"
                        allowfullscreen
                      ></iframe>
                      ";
                    </script>
                  </div>
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
                        <a title="TERA" href="#vid3">
                          <span class="icon is-small">
                            <i class="fas fa-play"></i>
                          </span>
                          <span>TERA</span>
                        </a>
                      </li>
                      <li>
                        <a title="STREAM" href="#vid4">
                          <span class="icon is-small">
                            <i class="fas fa-play"></i>
                          </span>
                          <span>STREAM</span>
                        </a>
                      </li>
                      <li>
                        <a title="RU" href="#vid5">
                          <span class="icon is-small">
                            <i class="fas fa-play"></i>
                          </span>
                          <span>RU</span>
                        </a>
                      </li>
                      <li>
                        <a title="Fireload" href="#vid6">
                          <span class="icon is-small">
                            <i class="fas fa-play"></i>
                          </span>
                          <span>Fireload</span>
                        </a>
                      </li>
                      <li>
                        <a title="Amazon" href="#vid7">
                          <span class="icon is-small">
                            <i class="fas fa-play"></i>
                          </span>
                          <span>Amazon</span>
                        </a>
                      </li>
                      <li>
                        <a title="AmazonEs" href="#vid8">
                          <span class="icon is-small">
                            <i class="fas fa-play"></i>
                          </span>
                          <span>AmazonEs</span>
                        </a>
                      </li>
                      <li>
                        <a title="Burst" href="#vid9">
                          <span class="icon is-small">
                            <i class="fas fa-play"></i>
                          </span>
                          <span>Burst</span>
                        </a>
                      </li>
                      <li>
                        <a title="Fembed" href="#vid10">
                          <span class="icon is-small">
                            <i class="fas fa-play"></i>
                          </span>
                          <span>Fembed</span>
                        </a>
                      </li>
                      <li>
                        <a title="Mp4upload" href="#vid11">
                          <span class="icon is-small">
                            <i class="fas fa-play"></i>
                          </span>
                          <span>Mp4upload</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="column is-12-mobile is-4-tablet is-3-desktop">
                    <div className="columns is-variable is-1 cont-opciones">
                      <div className={contAnteriorClass}>
                        <a
                          href={anteriorVideo}
                          className="is-fullwidth before-button"
                        >
                          <i className="fa fa-arrow-left"></i>&nbsp;
                        </a>
                      </div>

                      <div className="column is-6-desktop is-8-tablet is-8-mobile cont-capitulos">
                        <a href={capitulosVideo} className="button is-dark">
                          &nbsp;Episodios
                        </a>
                      </div>

                      <div className={contSiguienteClass}>
                        <a
                          href={siguienteVideo}
                          className="is-fullwidth after-button"
                        >
                          <i className="fa fa-arrow-right"></i>&nbsp;
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <h1 className="title is-size-5 has-text-weight-light has-text-light pag-text">
                  Animes Gratis Online HD
                </h1>
                <Disqus />
              </div>

              <div className="column is-12-mobile is-3-tablet is-3-deskop">
                <div className="column is-12-mobile is-12-tablet is-12-desktop is-paddingless">
                  <h5 className="has-text-light text-centered titlo-otros_animes">
                    OTROS ANIMES
                  </h5>
                  <div className="columns is-mobile is-multiline is-variable is-1">
                    <AnimeRecommend1 />
                    <AnimeRecommend2 />
                    <AnimeRecommend3 />
                    <AnimeRecommend4 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
