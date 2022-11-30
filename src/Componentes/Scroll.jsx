import React from "react";
import Emisiones from "../Json/EnEmision.json";

export function Scroll() {
  // const anime1 = "SPY x Family 2nd Temporada";
  // const link1 = "/spy-x-family-2nd-temporada";
  // const imagen1 = "https://i.postimg.cc/RFxhPx33/spy-x-family-cour-2.jpg";
  // const imagen2 = "https://i.postimg.cc/Y9T3D966/chainsaw-man.jpg";
  // const link2 = "/chainsaw-man";
  // const anime2 = "Chainsaw Man";
  // const anime3 = "Peter Grill to Kenja no Jikan Super Extra";
  // const link3 = "/peter-grill-to-kenja-no-jikan-super-extra";
  // const imagen3 =
  //   "https://i.postimg.cc/q7s4vhRR/peter-grill-to-kenja-no-jikan-super-extra.jpg";
  // const anime4 = "Mob Psycho 100 III";
  // const link4 = "/mob-psycho-100-III";
  // const imagen4 = "https://i.postimg.cc/zX4rwSHv/mob-psycho-100-iii.jpg";
  // const anime5 = "Isekai Ojisan";
  // const link5 = "/isekai-ojisan";
  // const imagen5 = "https://i.postimg.cc/Gpr6zMLL/isekai-ojisan.jpg";
  // const anime6 = "Danmachi IV";
  // const link6 = "/danmachi-IV";
  // const imagen6 = "https://i.postimg.cc/vB2jYbWT/danmachi-iv.jpg";
  // const anime7 = "BLEACH: Sennen Kessen-hen";
  // const link7 = "/bleach-sennen-kessen-hen";
  // const imagen7 = "https://i.postimg.cc/qBYYWBJZ/bleach-sennen-kessen-hen.jpg";
  // const anime8 = "Urusei Yatsura";
  // const link8 = "/urusei-yatsura";
  // const imagen8 = "https://i.postimg.cc/qvp9xbMk/urusei-yatsura-2022.jpg";
  // const anime9 = "Berserk: Ougon Jidai-hen - MEMORIAL EDITION";
  // const link9 = "/berserk-ougon-jidai-hen-memorial-edition";
  // const imagen9 =
  //   "https://i.postimg.cc/nLzg6XDg/berserk-ougon-jidai-hen-memorial-edition.jpg";
  // const anime10 = "Ginga Eiyuu Densetsu: Die Neue These - Sakubou";
  // const link10 = "/ginga-eiyuu-densetsu-die-neue-these-sakubou";
  // const imagen10 =
  //   "https://i.postimg.cc/d0xpvJR1/ginga-eiyuu-densetsu-die-neue-these-sakubou.jpg";
  // const anime11 = "VAZZROCK THE ANIMATION";
  // const link11 = "/vazzrock-the-animation";
  // const imagen11 = "https://i.postimg.cc/QCpyp529/vazzrock-the-animation.jpg";
  // const anime12 = "Fumetsu no Anata e Temporada 2";
  // const link12 = "/fumetsu-no-anata-e-2nd-temporada";
  // const imagen12 =
  //   "https://i.postimg.cc/bN95rx04/fumetsu-no-anata-e-season-2.jpg";
  // const anime13 = "Fuufu Ijou, Koibito Miman";
  // const link13 = "/fuufu-ijou-koibito-miman";
  // const imagen13 = "https://i.postimg.cc/2SHXFCKw/fuufu-ijou-koibito-miman.jpg";
  // const anime14 = "BLUELOCK";
  // const link14 = "/bluelock";
  // const imagen14 = "https://i.postimg.cc/tT6SjWCS/bluelock.jpg";

  return Emisiones.map((emision, index) => {
    return (
      <article className="serie-card" title={emision.title} key={emision.id}>
        <figure className="image overarchingdiv2">
          <a href={emision.link}>
            <img src={emision.img} alt={emision.title} />
            <div className="overlay-dark"></div>
            <div className="hoveroverlay">
              <i className="fas fa-play pgnav activehov"></i>
            </div>
          </a>
          <span className="tag year is-dark">{emision.year}</span>
          <span className="tag is-danger type">TV</span>
          <span className={emision.classEstado}>{emision.estado}</span>
          <div className="title">
            <h3>
              <a
                href={emision.link}
                className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
              >
                {emision.title}
              </a>
            </h3>
          </div>
        </figure>
      </article>
    );
  });
}
