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
  return (
    <section>
      {RecienAgregados.map((agregados, id) => {
        return (
          <div class="item" key={agregados.id}>
            <div class="overarchingdiv">
              <a href={agregados.link}>
                <img src={agregados.img} alt={agregados.title} />
                <div class="seriesoverlay has-text-orange">
                  <h3 class="has-text-centered">
                    <div class="overtitlenews has-text-weight-semibold">
                      {agregados.title}
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
