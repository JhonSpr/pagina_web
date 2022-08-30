import Animes from "../Data.json";

export function AnimesRecommend() {
  Animes.slice(0, 6).map((animes) => {
    return (
      <div class="item" key={animes.id}>
        <div class="overarchingdiv">
          <a href={animes.link}>
            <img src={animes.img} alt={animes.title} />
            <div class="seriesoverlay has-text-orange">
              <h3 class="has-text-centered">
                <div class="overtitlenews has-text-weight-semibold">
                  {animes.title}
                </div>
              </h3>
            </div>
          </a>
        </div>
      </div>
    );
  });
  Animes = (array) => {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };
}
