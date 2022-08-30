import Animes from "../Data.json";

export default function AnimesRecommend() {
  Animes.slice(0, 6).map(() => {
    return (
      <div>
        <a href={Animes.link}>
          <img src={Animes.img} alt={Animes.title} />
          <strong>{Animes.title}</strong>
        </a>
      </div>
    );
  });
}
