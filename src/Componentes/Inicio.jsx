/* eslint-disable jsx-a11y/anchor-is-valid */
import { Noticia } from "./Noticias";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Disqus } from "./disqus";
import { EmisionInicio } from "../pages/GeneroPage";

/* eslint-disable jsx-a11y/no-distracting-elements */
export function Inicio({
  href1,
  href2,
  href3,
  href4,
  href5,
  href6,
  href7,
  href8,
  href9,
  href10,
  anime1,
  anime2,
  anime3,
  anime4,
  anime5,
  anime6,
  anime7,
  anime8,
  anime9,
  anime10,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  alt1,
  alt2,
  alt3,
  alt4,
  alt5,
  alt6,
  alt7,
  alt8,
  alt9,
  alt10,
  year1,
  year2,
  year3,
  year4,
  year5,
  year6,
  year7,
  year8,
  year9,
  year10,
  emision,
  tv,
}) {
  return (
    <section>
      <title>Animekun</title>

      <div className="hero is-lightx is-fullheight">
        <div>
          <section className="section page-home__latest-series">
            <div className="container rounded-container">
              <h1 className="titulo title is-size-4 has-text-centered has-text-weight-semibold has-text-light is-uppercase">
                EMISIONES
              </h1>
              <hr />
              <div className="list-series">
                <EmisionInicio />
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
                <div className="container_comment">
                  <h1 className="comment_text">¡DI ALGO!</h1>
                  <Disqus className={"Comentarios"} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
