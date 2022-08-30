import Animes from "../Data.json";

export function AnimesRecommend() {
  const randomAnime = Math.floor(Math.random) * 100;
  const NumeroRandom = randomAnime;
  return (
    <div>
      <a href={Animes && Animes[NumeroRandom].link}>
        <img src={Animes && Animes[NumeroRandom].img} alt="" />
      </a>
    </div>
  );
}
