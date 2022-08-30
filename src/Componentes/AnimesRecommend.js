import Animes from "../Data.json";

export function AnimesRecommend() {
  let RandomNumber = Math.floor(Math.random() * 100);
  let RandomNumber2 = Math.floor(Math.random() * 100);
  let RandomNumber3 = Math.floor(Math.random() * 100);
  let RandomNumber4 = Math.floor(Math.random() * 100);
  let RandomNumber5 = Math.floor(Math.random() * 100);
  let RandomNumber6 = Math.floor(Math.random() * 100);
  return (
    <div>
      <div class="column is-12-mobile is-12-tablet is-12-desktop is-paddingless">
        <h5 class="has-text-light text-centered">Otros Animes</h5>
        <div class="columns is-mobile is-multiline is-variable is-1 otros-animes">
          <div class="column is-narrow is-3-mobile is-6-tablet is-6-desktop otros-animes-sub-div">
            <a
              href={Animes && Animes[RandomNumber].link}
              title={Animes && Animes[RandomNumber].title}
            >
              <img
                src={Animes && Animes[RandomNumber].img}
                alt={Animes && Animes[RandomNumber].title}
                className="img-otros-animes"
              />
            </a>
          </div>
          <div class="column is-narrow is-3-mobile is-6-tablet is-6-desktop otros-animes-sub-div">
            <a
              href={Animes && Animes[RandomNumber2].link}
              title={Animes && Animes[RandomNumber2].title}
            >
              <img
                src={Animes && Animes[RandomNumber2].img}
                alt={Animes && Animes[RandomNumber2].title}
                className="img-otros-animes"
              />
            </a>
          </div>
          <div class="column is-narrow is-3-mobile is-6-tablet is-6-desktop otros-animes-sub-div">
            <a
              href={Animes && Animes[RandomNumber3].link}
              title={Animes && Animes[RandomNumber3].title}
            >
              <img
                src={Animes && Animes[RandomNumber3].img}
                alt={Animes && Animes[RandomNumber3].title}
                className="img-otros-animes"
              />
            </a>
          </div>
          <div class="column is-narrow is-3-mobile is-6-tablet is-6-desktop otros-animes-sub-div">
            <a
              href={Animes && Animes[RandomNumber4].link}
              title={Animes && Animes[RandomNumber4].title}
            >
              <img
                src={Animes && Animes[RandomNumber4].img}
                alt={Animes && Animes[RandomNumber4].title}
                className="img-otros-animes"
              />
            </a>
          </div>
          <div class="column is-narrow is-3-mobile is-6-tablet is-6-desktop otros-animes-sub-div">
            <a
              href={Animes && Animes[RandomNumber5].link}
              title={Animes && Animes[RandomNumber5].title}
            >
              <img
                src={Animes && Animes[RandomNumber5].img}
                alt={Animes && Animes[RandomNumber5].title}
                className="img-otros-animes"
              />
            </a>
          </div>
          <div class="column is-narrow is-3-mobile is-6-tablet is-6-desktop otros-animes-sub-div">
            <a
              href={Animes && Animes[RandomNumber6].link}
              title={Animes && Animes[RandomNumber6].title}
            >
              <img
                src={Animes && Animes[RandomNumber6].img}
                alt={Animes && Animes[RandomNumber6].title}
                className="img-otros-animes"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
