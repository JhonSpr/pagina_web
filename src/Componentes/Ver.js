import { Route, Routes } from "react-router-dom";
import { Video } from "./Componente3";

export function Ver() {
  return (
    <div>
      <Routes>
        <Route
          path="/ver/akudama-drive-1"
          exact
          element={
            <Video
              frame1={"https://sbfull.com/e/2dlhg80oowou.html"}
              contAnteriorClass="primer-capitulo"
              tituloAnime={"Akudama Drive Capitulo 1"}
              contSiguienteClass={
                "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
              }
              tituloPag={"Animekun"}
              anime={"Akudama Drive"}
              numero={"1"}
              classOpcionSiguiente="column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
              siguienteVideo={"/ver/akudama-drive-2"}
              capitulosVideo={"/akudama-drive"}
            />
          }
        />
      </Routes>
    </div>
  );
}
