import React from "react";

export default function News() {
  const image1 =
    "https://ramenparados.com/wp-content/uploads/2022/08/Isekai-Shokan-wa-Nidome-Desu-anime-768x543.jpg";
  const text1 = "Primer tráiler del anime Isekai Shōkan wa Nidome Desu";
  const link1 =
    "https://ramenparados.com/primer-trailer-del-anime-isekai-shokan-wa-nidome-desu/";
  const image5 =
    "https://ramenparados.com/wp-content/uploads/2022/10/nier-automata-anime-key-web.jpg";
  const text5 = "Nuevos detalles y fecha de estreno de NieR:Automata Ver 1.1a";
  const link5 = "";
  const image3 =
    "https://ramenparados.com/wp-content/uploads/2022/12/chainsaw-man-makima-1000x600.webp";
  const text3 =
    "[Inocentadas 2022] El Vaticano preocupado ante el creciente culto a Makima";
  const link3 =
    "https://ramenparados.com/el-vaticano-preocupado-ante-el-creciente-culto-a-makima/";
  const image4 =
    "https://ramenparados.com/wp-content/uploads/2022/12/tenki-muyo-gxp-paradise-hen-destacada-1000x600.jpg";
  const text4 = "Anunciado el anime Tenchi Muyo! GXP  Paradise Shidō-hen";
  const link4 =
    "https://ramenparados.com/anunciado-el-anime-tenchi-muyo-gxp-paradise-shido-hen/";
  const image2 =
    "https://ramenparados.com/wp-content/uploads/2022/12/SasakiMiyano_ONA-1024x724.jpg";
  const text2 = "Nuevos detalles de la película de Sasaki to Miyano";
  const link2 =
    "https://ramenparados.com/nuevos-detalles-de-la-pelicula-de-sasaki-to-miyano/";
  const image6 =
    "https://ramenparados.com/wp-content/uploads/2022/12/Yamada-kun-Portada-1000x600.png";
  const text6 =
    "Yamada-kun to Lv999 no Koi wo Suru se estrenará en abril de 2023  ";
  const link6 =
    "https://ramenparados.com/yamada-kun-to-lv999-no-koi-wo-suru-se-estrenara-en-abril-de-2023/";
  return (
    <>
      <article className="card">
        <a href={link1}>
          <img src={image1} alt="" />
          <p className="title_news">{text1}</p>
        </a>
      </article>
      <article className="card">
        <a href={link2}>
          <img src={image2} alt="" />
          <p className="title_news">{text2}</p>
        </a>
      </article>
      <article className="card">
        <a href={link3}>
          <img src={image3} alt="" />
          <p className="title_news">{text3}</p>
        </a>
      </article>
      <article className="card">
        <a href={link4}>
          <img src={image4} alt="" />
          <p className="title_news">{text4}</p>
        </a>
      </article>
      <article className="card">
        <a href={link5}>
          <img src={image5} alt="" />
          <p className="title_news">{text5}</p>
        </a>
      </article>
      <article className="card">
        <a href={link6}>
          <img src={image6} alt="" />
          <p className="title_news">{text6}</p>
        </a>
      </article>
    </>
  );
}
