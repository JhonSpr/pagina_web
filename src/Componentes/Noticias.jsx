import Noticias from "../Noticias.json";
import RecienAgregados from "../Data.json";
export function Noticia() {
  return (
    <section>
      {Noticias.map((noticia, id) => {
        return (
          <div class="item" key={noticia.id}>
            <div class="overarchingdiv">
              <a href={noticia.link}>
                <img src={noticia.img} alt={noticia.title} />
                <div class="seriesoverlay has-text-orange">
                  <h3 class="has-text-centered">
                    <div class="overtitlenews has-text-weight-semibold">
                      {noticia.title}
                    </div>
                  </h3>
                </div>
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export function Agregados() {
  return RecienAgregados.slice(0, 24).map((emision) => {
    return (
      <article className="serie-card" title={emision.title} key={emision.id}>
        <figure className="image overarchingdiv2">
          <a href={emision.link}>
            <img src={emision.img} alt={emision.title} />
            <div className="overlay-dark"></div>
            <div className="hoveroverlay">
              <i className="fas fa-play pgnav activehov"></i>
            </div>
          </a>
          <span className="tag year is-dark">{emision.year}</span>
          <span className="tag is-danger type">TV</span>
          <span className={emision.classEstado}>{emision.estado}</span>
          <div className="title">
            <h3>
              <a
                href={emision.link}
                className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
              >
                {emision.title}
              </a>
            </h3>
          </div>
        </figure>
      </article>
    );
  });
}
