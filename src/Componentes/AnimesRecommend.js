import Animes from "../Data.json";

export function AnimesRecommend() {
  const randomAnime = Math.floor(Math.random) * 100;
  return (
    <div>
      <a href={Animes && Animes[randomAnime].link}>
        <img src={Animes && Animes[randomAnime].img} alt="" />
      </a>
    </div>
  );
}
