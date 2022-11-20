/* eslint-disable jsx-a11y/anchor-is-valid */
import { Agregados, Noticia } from "./Noticias";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Disqus } from "./disqus";

/* eslint-disable jsx-a11y/no-distracting-elements */
export function Inicio() {
  return (
    <section>
      <title>Animekun</title>

      <div className="hero is-lightx is-fullheight">
        <div>
          <section className="section page-home__latest-series">
            <div className="container rounded-container">
              <h1 className="titulo title is-size-4 has-text-centered has-text-weight-semibold has-text-light is-uppercase">
                Catalogo
              </h1>
              <hr />
              <div className="list-series">
                <Agregados/>
              </div>
            </div>
          </section>

          <section className="section page-home__latest-series">
            <div className="container rounded-container div-noticias">
              <h1 className="titulo title is-size-4 has-text-centered has-text-weight-semibold has-text-light is-uppercase">
                NOTICIAS SOBRE ANIME
              </h1>
              <hr />
              <div className="list-series">
                <Noticia />
              </div>
              <div className="container_comment">
                <h1 className="comment_text">¡DI ALGO!</h1>
                <Disqus className={"Comentarios"} />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
