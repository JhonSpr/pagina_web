import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    var settings = {
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 100,
      swipeToSlide: true,
      autoplaySpeed: 3000,
      touchMove: true,
      cssEase: "linear",
      PauseOnHover: true,
      swipe: true,
      draggable: true,
      pauseOnDotsHover: true,
      pauseOnFocus: true,
      useTransform: true,
      slidesPerRow: true,
    };
    const anime1 = "SPY x Family 2nd Temporada";
    const link1 = "/spy-x-family-2nd-temporada";
    const imagen1 = "https://i.postimg.cc/RFxhPx33/spy-x-family-cour-2.jpg";
    const imagen2 = "https://i.postimg.cc/Y9T3D966/chainsaw-man.jpg";
    const link2 = "/chainsaw-man";
    const anime2 = "Chainsaw Man";
    const anime3 = "Peter Grill to Kenja no Jikan Super Extra";
    const link3 = "/peter-grill-to-kenja-no-jikan-super-extra";
    const imagen3 =
      "https://i.postimg.cc/q7s4vhRR/peter-grill-to-kenja-no-jikan-super-extra.jpg";
    const anime4 = "Mob Psycho 100 III";
    const link4 = "/mob-psycho-100-III";
    const imagen4 = "https://i.postimg.cc/zX4rwSHv/mob-psycho-100-iii.jpg";
    const anime5 = "Isekai Ojisan";
    const link5 = "/isekai-ojisan";
    const imagen5 = "https://i.postimg.cc/Gpr6zMLL/isekai-ojisan.jpg";
    const anime6 = "Danmachi IV";
    const link6 = "/danmachi-IV";
    const imagen6 = "https://i.postimg.cc/vB2jYbWT/danmachi-iv.jpg";
    const anime7 = "BLEACH: Sennen Kessen-hen";
    const link7 = "/bleach-sennen-kessen-hen";
    const imagen7 =
      "https://i.postimg.cc/qBYYWBJZ/bleach-sennen-kessen-hen.jpg";
    const anime8 = "Urusei Yatsura";
    const link8 = "/urusei-yatsura";
    const imagen8 = "https://i.postimg.cc/qvp9xbMk/urusei-yatsura-2022.jpg";
    const anime9 = "Berserk: Ougon Jidai-hen - MEMORIAL EDITION";
    const link9 = "/berserk-ougon-jidai-hen-memorial-edition";
    const imagen9 =
      "https://i.postimg.cc/nLzg6XDg/berserk-ougon-jidai-hen-memorial-edition.jpg";
    const anime10 = "Ginga Eiyuu Densetsu: Die Neue These - Sakubou";
    const link10 = "/ginga-eiyuu-densetsu-die-neue-these-sakubou";
    const imagen10 =
      "https://i.postimg.cc/d0xpvJR1/ginga-eiyuu-densetsu-die-neue-these-sakubou.jpg";
    const anime11 = "VAZZROCK THE ANIMATION";
    const link11 = "/vazzrock-the-animation";
    const imagen11 = "https://i.postimg.cc/QCpyp529/vazzrock-the-animation.jpg";
    const anime12 = "Fumetsu no Anata e Temporada 2";
    const link12 = "/fumetsu-no-anata-e-2nd-temporada";
    const imagen12 =
      "https://i.postimg.cc/bN95rx04/fumetsu-no-anata-e-season-2.jpg";
    const anime13 = "Fuufu Ijou, Koibito Miman";
    const link13 = "/fuufu-ijou-koibito-miman";
    const imagen13 =
      "https://i.postimg.cc/2SHXFCKw/fuufu-ijou-koibito-miman.jpg";
    const anime14 = "BLUELOCK";
    const link14 = "/bluelock";
    const imagen14 = "https://i.postimg.cc/tT6SjWCS/bluelock.jpg";

    return (
      <div
        style={{ marginTop: "10px", marginLeft: "auto", marginRight: "auto" }}
      >
        <Slider {...settings}>
          <div>
            <article>
              <figure
                className="image"
                style={{ borderRadius: "0", margin: "0" }}
              >
                <a href={link1} title={anime1}>
                  <img
                    src={imagen1}
                    alt={anime1}
                    style={{
                      borderRadius: "0",
                      margin: "0",
                      cursor: "pointer",
                      border: "0",
                    }}
                  />
                </a>
              </figure>
              <div className="title"></div>
            </article>
          </div>
          <div>
            <article>
              <figure class="image">
                <a href={link2} title={anime2}>
                  <img
                    src={imagen2}
                    alt={anime2}
                    style={{
                      borderRadius: "0",
                      margin: "0",
                      cursor: "pointer",
                      border: "0",
                    }}
                  />
                </a>
              </figure>
            </article>
          </div>
          <div>
            <article>
              <figure class="image">
                <a href={link3} title={anime3}>
                  <img
                    src={imagen3}
                    alt={anime3}
                    style={{
                      borderRadius: "0",
                      margin: "0",
                      cursor: "pointer",
                      border: "0",
                    }}
                  />
                </a>
              </figure>
            </article>
          </div>
          <div>
            <article>
              <figure class="image">
                <a href={link4} title={anime4}>
                  <img
                    src={imagen4}
                    alt={anime4}
                    style={{
                      borderRadius: "0",
                      margin: "0",
                      cursor: "pointer",
                      border: "0",
                    }}
                  />
                </a>
              </figure>
            </article>
          </div>
          <div>
            <article>
              <figure class="image">
                <a href={link5} title={anime5}>
                  <img
                    src={imagen5}
                    alt={anime5}
                    style={{
                      borderRadius: "0",
                      margin: "0",
                      cursor: "pointer",
                      border: "0",
                    }}
                  />
                </a>
              </figure>
            </article>
          </div>
          <div>
            <article>
              <figure class="image">
                <a href={link6} title={anime6}>
                  <img
                    src={imagen6}
                    alt={anime6}
                    style={{
                      borderRadius: "0",
                      margin: "0",
                      cursor: "pointer",
                      border: "0",
                    }}
                  />
                </a>
              </figure>
            </article>
          </div>
          <div>
            <article>
              <figure class="image">
                <a href={link7} title={anime7}>
                  <img
                    src={imagen7}
                    alt={anime7}
                    style={{
                      borderRadius: "0",
                      margin: "0",
                      cursor: "pointer",
                      border: "0",
                    }}
                  />
                </a>
              </figure>
            </article>
          </div>
          <div>
            <article>
              <figure class="image">
                <a href={link8} title={anime8}>
                  <img
                    src={imagen8}
                    alt={anime8}
                    style={{
                      borderRadius: "0",
                      margin: "0",
                      cursor: "pointer",
                      border: "0",
                    }}
                  />
                </a>
              </figure>
            </article>
          </div>
          <div>
            <article>
              <figure class="image">
                <a href={link9} title={anime9}>
                  <img
                    src={imagen9}
                    alt={anime9}
                    style={{
                      borderRadius: "0",
                      margin: "0",
                      cursor: "pointer",
                      border: "0",
                    }}
                  />
                </a>
              </figure>
            </article>
          </div>
          <div>
            <article>
              <figure class="image">
                <a href={link10} title={anime10}>
                  <img
                    src={imagen10}
                    alt={anime10}
                    style={{
                      borderRadius: "0",
                      margin: "0",
                      cursor: "pointer",
                      border: "0",
                    }}
                  />
                </a>
              </figure>
            </article>
          </div>

          <div>
            <article>
              <figure class="image">
                <a href={link14} title={anime14}>
                  <img
                    src={imagen14}
                    alt={anime14}
                    style={{
                      borderRadius: "0",
                      margin: "0",
                      cursor: "pointer",
                      border: "0",
                    }}
                  />
                </a>
              </figure>
            </article>
          </div>
          <div>
            <article>
              <figure class="image">
                <a href={link11} title={anime11}>
                  <img
                    src={imagen11}
                    alt={anime11}
                    style={{
                      borderRadius: "0",
                      margin: "0",
                      cursor: "pointer",
                      border: "0",
                    }}
                  />
                </a>
              </figure>
            </article>
          </div>
          <div>
            <article>
              <figure class="image">
                <a href={link12} title={anime12}>
                  <img
                    src={imagen12}
                    alt={anime12}
                    style={{
                      borderRadius: "0",
                      margin: "0",
                      cursor: "pointer",
                      border: "0",
                    }}
                  />
                </a>
              </figure>
            </article>
          </div>
          <div>
            <article>
              <figure class="image">
                <a href={link13} title={anime13}>
                  <img
                    src={imagen13}
                    alt={anime13}
                    style={{
                      borderRadius: "0",
                      margin: "0",
                      cursor: "pointer",
                      border: "0",
                    }}
                  />
                </a>
              </figure>
            </article>
          </div>
        </Slider>
      </div>
    );
  }
}
