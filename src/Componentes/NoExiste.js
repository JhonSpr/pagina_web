export function NoExiste() {
  return (
    <div className="container contenedor-NoFound">
      <title>
        Pagina No Encontrada <i class="fa-solid fa-triangle-exclamation"></i>{" "}
      </title>
      <h1 className="Title-NoFound">
        <i class="fa-solid fa-triangle-exclamation"></i> Esta Pagina no
        Existe... <i class="fa-solid fa-triangle-exclamation"></i>
      </h1>
      <a href="/" className="button is-orange">
        Volver Al Inicio
      </a>
    </div>
  );
}
