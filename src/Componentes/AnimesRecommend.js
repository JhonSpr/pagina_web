import Animes from "../Data.json";

export function AnimesRecommend() {
  let RandomNumber = Math.floor(Math.random() * 100);
  return (
    <div>
      <a
        href={Animes && Animes[RandomNumber].link}
        title={Animes && Animes[RandomNumber].title}
      >
        <img src={Animes && Animes[RandomNumber].img} alt="" />
      </a>
    </div>
  );
}
