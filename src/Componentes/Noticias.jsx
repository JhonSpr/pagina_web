import Noticias from "../Noticias.json";
export function Noticia() {
  return (
    <section>
      {Noticias.map((noticia, id) => {
        return (
          <article className="noticia-card" key={id} title={noticia.title}>
            <h1 className="has-text-orange has-text-weight-semibold has-text-centered is-size-6">
              Noticia {noticia.Numero}
            </h1>

            <figure className="image ">
              <a href={noticia.link}>
                <img
                  src={noticia.img}
                  alt={noticia.title}
                  className="imagen-noticia"
                />
              </a>
            </figure>
            <div className="titulo-noticia">
              <h3>
                <a
                  href={noticia.link}
                  className="has-text-orange has-text-weight-semibold has-text-centered is-size-6"
                >
                  {noticia.title}
                </a>
              </h3>
            </div>
          </article>
        );
      })}
    </section>
  );
}
