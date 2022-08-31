import Animes from "../Data.json";

export function AnimeRecommend1() {
  let start = 0;
  let end = 15;
  let RandomNumber = start + Math.floor(Math.random() * end);
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
  let start = 15;
  let end = 30;
  let RandomNumber = start + Math.floor(Math.random() * end);
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
  let start = 30;
  let end = 41;
  let RandomNumber = start + Math.floor(Math.random() * end);
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
  let start = 41;
  let end = 51;
  let RandomNumber = start + Math.floor(Math.random() * end);
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
