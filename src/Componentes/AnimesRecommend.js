import Animes from "../Json/Data.json";

export function AnimeRecommend1() {
  let end = 40;
  let RandomNumber = Math.floor(Math.random() * end);
  console.log(RandomNumber);

  return (
    <a
      href={Animes && Animes[RandomNumber].link}
      title={Animes && Animes[RandomNumber].title}
      className="column is-narrow is-3-mobile is-6-tablet is-6-desktop"
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
  let end = 80 + 1;
  let RandomNumber = Math.floor(Math.random() * end);
  console.log(RandomNumber);
  return (
    <a
      href={Animes && Animes[RandomNumber].link}
      title={Animes && Animes[RandomNumber].title}
      className="column is-narrow is-3-mobile is-6-tablet is-6-desktop"
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
  let end = 120 + 1;
  let RandomNumber = Math.floor(Math.random() * end);
  console.log(RandomNumber);
  return (
    <a
      href={Animes && Animes[RandomNumber].link}
      title={Animes && Animes[RandomNumber].title}
      className="column is-narrow is-3-mobile is-6-tablet is-6-desktop"
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
  let end = 160 + 1;
  let RandomNumber = Math.floor(Math.random() * end);
  console.log(RandomNumber);
  return (
    <a
      href={Animes && Animes[RandomNumber].link}
      title={Animes && Animes[RandomNumber].title}
      className="column is-narrow is-3-mobile is-6-tablet is-6-desktop"
    >
      <img
        src={Animes && Animes[RandomNumber].img}
        alt={Animes && Animes[RandomNumber].title}
        className="img-otros-animes"
      />
    </a>
  );
}
