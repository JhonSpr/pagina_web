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

  const AnimesRecommend = (array) => {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };
  console.log(AnimesRecommend);
}
