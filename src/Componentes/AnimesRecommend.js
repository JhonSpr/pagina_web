import Animes from "../Data.json";

export function AnimesRecommend() {
  return (
    <div>
      <a href={Animes && Animes[0].link}>
        <img src={Animes && Animes[0].img} alt="" />
      </a>
    </div>
  );
}
