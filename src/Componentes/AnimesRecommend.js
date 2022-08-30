import Animes from "../Data.json";

export function AnimeRecommend1() {
  let RandomNumber = Math.floor(Math.random() * 51 + 1);

  return (
    <a
      href={Animes && Animes[RandomNumber].link}
      title={Animes && Animes[RandomNumber].title}
      className="div-img"
    >
      <img
        src={Animes && Animes[RandomNumber].img}
        alt={Animes && Animes[RandomNumber].title}
        className="img-otros-animes"
      />
    </a>
  );
}
export function AnimeRecommend2() {
  let RandomNumber = Math.floor(Math.random() * 51);

  return (
    <a
      href={Animes && Animes[RandomNumber].link}
      title={Animes && Animes[RandomNumber].title}
      className="div-img"
    >
      <img
        src={Animes && Animes[RandomNumber].img}
        alt={Animes && Animes[RandomNumber].title}
        className="img-otros-animes"
      />
    </a>
  );
}
export function AnimeRecommend3() {
  let RandomNumber = Math.floor(Math.random() * 51);

  return (
    <a
      href={Animes && Animes[RandomNumber].link}
      title={Animes && Animes[RandomNumber].title}
      className="div-img"
    >
      <img
        src={Animes && Animes[RandomNumber].img}
        alt={Animes && Animes[RandomNumber].title}
        className="img-otros-animes"
      />
    </a>
  );
}
export function AnimeRecommend4() {
  let RandomNumber = Math.floor(Math.random() * 51);

  return (
    <a
      href={Animes && Animes[RandomNumber].link}
      title={Animes && Animes[RandomNumber].title}
      className="div-img"
    >
      <img
        src={Animes && Animes[RandomNumber].img}
        alt={Animes && Animes[RandomNumber].title}
        className="img-otros-animes"
      />
    </a>
  );
}
export function AnimeRecommend5() {
  let RandomNumber = Math.floor(Math.random() * 51);

  return (
    <a
      href={Animes && Animes[RandomNumber].link}
      title={Animes && Animes[RandomNumber].title}
      className="div-img"
    >
      <img
        src={Animes && Animes[RandomNumber].img}
        alt={Animes && Animes[RandomNumber].title}
        className="img-otros-animes"
      />
    </a>
  );
}
export function AnimeRecommend6() {
  let RandomNumber = Math.floor(Math.random() * 51);

  return (
    <a
      href={Animes && Animes[RandomNumber].link}
      title={Animes && Animes[RandomNumber].title}
      className="div-img"
    >
      <img
        src={Animes && Animes[RandomNumber].img}
        alt={Animes && Animes[RandomNumber].title}
        className="img-otros-animes"
      />
    </a>
  );
}
