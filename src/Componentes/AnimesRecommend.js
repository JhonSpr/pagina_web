import Animes from "../Data.json";

export function AnimeRecommend1() {
  let end = 15;
  let RandomNumber = Math.floor(Math.random() * end + 1);
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
  let end = 30;
  let RandomNumber = Math.floor(Math.random() * end - 7);
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
  let end = 41;
  let RandomNumber = Math.floor(Math.random() * end - 4);
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
  let end = 52;
  let RandomNumber = Math.floor(Math.random() * end - 1);
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
