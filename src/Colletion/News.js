import React from "react";

export default function News() {
  const image1 =
    "https://somoskudasai.com/wp-content/uploads/2022/12/portada_genshin-impact-213.jpg";
  const text1 =
    "Genshin Impact borra el mod que le aumentaba el trasero a Mona";
  const link1 =
    "https://somoskudasai.com/noticias/cultura-otaku/genshin-impact-borra-el-mod-que-le-aumentaba-el-trasero-a-mona/";
  const image2 =
    "https://somoskudasai.com/wp-content/uploads/2022/12/portada_kaguya-139.jpg";
  const text2 = "Kaguya-sama: Chika llega a To LOVE-Ru y ya la profana Rito";
  const link2 =
    "https://somoskudasai.com/noticias/manga/kaguya-sama-chika-llega-a-to-love-ru-y-ya-la-profana-rito/";
  const image3 =
    "https://somoskudasai.com/wp-content/uploads/2022/12/portada_chainsaw-man-145.jpg";
  const text3 = "Termina Chainsaw Man, pero sin anuncio de secuela";
  const link3 =
    "https://somoskudasai.com/noticias/anime/el-anime-de-chainsaw-man-dio-pistas-sobre-una-proxima-secuela/";
  const image4 =
    "https://somoskudasai.com/wp-content/uploads/2022/12/Portada-min-15.jpg";
  const text4 =
    "High School DxD: Las chicas celebran fin de año con sensuales atuendos";
  const link4 =
    "https://somoskudasai.com/noticias/videojuegos/high-school-dxd-las-chicas-celebran-fin-de-ano-con-sensuales-atuendos/";
  return (
    <>
      <article className="card">
        <a href={link1}>
          <img src={image1} alt="" />
          <h2 className="title_news">{text1}</h2>
        </a>
      </article>
      <article className="card">
        <a href={link2}>
          <img src={image2} alt="" />
          <h2 className="title_news">{text2}</h2>
        </a>
      </article>
      <article className="card">
        <a href={link3}>
          <img src={image3} alt="" />
          <h2 className="title_news">{text3}</h2>
        </a>
      </article>
      <article className="card">
        <a href={link4}>
          <img src={image4} alt="" />
          <h2 className="title_news">{text4}</h2>
        </a>
      </article>
    </>
  );
}
