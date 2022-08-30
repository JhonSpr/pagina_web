import Animes from "../Data.json";

export default function AnimesRecommend() {
  Animes.slice(0, 6).map((Anime) => {
    return (
      <div>
        <a href={Anime.link}>
          <img src={Anime.img} alt={Anime.title} />
          <strong>{Anime.title}</strong>
        </a>
      </div>
    );
  });
}
