import Animes from "../Data.json";

export function AnimesRecommend() {
  let RandomNumber = Math.floor(Math.random() * 100);
  return (
    <div>
      <a
        href={Animes && Animes[RandomNumber].link}
        title={Animes && Animes[RandomNumber].title}
        key={Animes && Animes[RandomNumber].id}
      >
        <img
          src={Animes && Animes[RandomNumber].img}
          alt={Animes && Animes[RandomNumber].title}
        />
      </a>
    </div>
  );
}
