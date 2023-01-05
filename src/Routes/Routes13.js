import React from "react";
import { Route, Routes } from "react-router";
import { Capitulos13 } from "../Components/elements/Animes13";

export default function Routes13() {
  return (
    <Routes>
      <Route
        path="/abdyhbayb"
        element={
          <Capitulos13
            tituloAnime={""}
            sec2={"disable"}
            sec3={"disable"}
            sec1={"disable"}
            descripcion={""}
            imagenAnime=""
            tipo={"TV"}
            numeroEpisodios={""}
            estado={""}
            anime={""}
            capituloAnime1={"/ver/-1"}
            capituloAnime2={"/ver/-2"}
            capituloAnime3={"/ver/-3"}
            capituloAnime4={"/ver/-4"}
            capituloAnime5={"/ver/-5"}
            capituloAnime6={"/ver/-6"}
            capituloAnime7={"/ver/-7"}
            capituloAnime8={"/ver/-8"}
            capituloAnime9={"/ver/-9"}
            capituloAnime10={"/ver/-10"}
            capituloAnime11={"/ver/-11"}
            capituloAnime12={"/ver/-12"}
            capituloAnime13={"/ver/-13"}
          />
        }
      />

      <Route
        path="/overlord"
        element={
          <Capitulos13
            tituloAnime={"Overlord"}
            imagenAnime={"https://i.postimg.cc/RVzMjxT9/overlord.jpg"}
            descripcion={
              "La historia da comienzo cuando Yggdrasil, un popular juego online, es cerrado un día sin previo aviso. Sin embargo, el protagonista, Momonga, decide no salir del juego. Momonga así se transforma y se convierte en “el mago más poderoso”. El mundo sigue cambiando con él dentro, y los NPCs comienzan a sentir emociones. Sin familia, amigos ni lugar en la sociedad, Momonga tendrá que luchar por adaptarse al nuevo mundo en el que se ha convertido el juego."
            }
            anime={"Overlord"}
            tipo={"TV"}
            sec2="disable"
            sec3={"disable"}
            estado={"Finalizado"}
            numeroEpisodios={"13"}
            hrefSecuela="/overlord-II"
            nombreSecuela={"Overlord II"}
            textoSecuela={"Secuela"}
            capituloAnime1={"/ver/overlord-1"}
            capituloAnime2={"/ver/overlord-2"}
            capituloAnime3={"/ver/overlord-3"}
            capituloAnime4={"/ver/overlord-4"}
            capituloAnime5={"/ver/overlord-5"}
            capituloAnime6={"/ver/overlord-6"}
            capituloAnime7={"/ver/overlord-7"}
            capituloAnime8={"/ver/overlord-8"}
            capituloAnime9={"/ver/overlord-9"}
            capituloAnime10={"/ver/overlord-10"}
            capituloAnime11={"/ver/overlord-11"}
            capituloAnime12={"/ver/overlord-12"}
            capituloAnime13={"/ver/overlord-13"}
          />
        }
      />
      <Route
        path="/overlord-II"
        element={
          <Capitulos13
            tituloAnime={"Overlord II"}
            imagenAnime={"https://i.postimg.cc/jj9Tcpjp/overlord-ii.jpg"}
            descripcion={"Segunda Temporada de Overlord."}
            anime={"Overlord II"}
            tipo={"TV"}
            sec3={"disable"}
            estado={"Finalizado"}
            numeroEpisodios={"13"}
            hrefSecuela2="/overlord"
            nombreSecuela2="Overlord"
            textoSecuela2={"Precuela"}
            hrefSecuela="/overlord-III"
            nombreSecuela={"Overlord III"}
            textoSecuela={"Secuela"}
            capituloAnime1={"/ver/overlord-II-1"}
            capituloAnime2={"/ver/overlord-II-2"}
            capituloAnime3={"/ver/overlord-II-3"}
            capituloAnime4={"/ver/overlord-II-4"}
            capituloAnime5={"/ver/overlord-II-5"}
            capituloAnime6={"/ver/overlord-II-6"}
            capituloAnime7={"/ver/overlord-II-7"}
            capituloAnime8={"/ver/overlord-II-8"}
            capituloAnime9={"/ver/overlord-II-9"}
            capituloAnime10={"/ver/overlord-II-10"}
            capituloAnime11={"/ver/overlord-II-11"}
            capituloAnime12={"/ver/overlord-II-12"}
            capituloAnime13={"/ver/overlord-II-13"}
          />
        }
      />
      <Route
        path="/overlord-III"
        element={
          <Capitulos13
            tituloAnime={"Overlord III"}
            imagenAnime={"https://i.postimg.cc/BnWvZGgm/overlord-iii.jpg"}
            descripcion={"Tercera temporada de Overlord."}
            anime={"Overlord III"}
            tipo={"TV"}
            sec3={"disable"}
            estado={"Finalizado"}
            numeroEpisodios={"13"}
            hrefSecuela="/overlord-II"
            hrefSecuela2={"/overlord-IV"}
            nombreSecuela={"Overlord II"}
            nombreSecuela2="Overlord IV"
            textoSecuela={"Precuela"}
            textoSecuela2={"Secuela"}
            capituloAnime1={"/ver/overlord-III-1"}
            capituloAnime2={"/ver/overlord-III-2"}
            capituloAnime3={"/ver/overlord-III-3"}
            capituloAnime4={"/ver/overlord-III-4"}
            capituloAnime5={"/ver/overlord-III-5"}
            capituloAnime6={"/ver/overlord-III-6"}
            capituloAnime7={"/ver/overlord-III-7"}
            capituloAnime8={"/ver/overlord-III-8"}
            capituloAnime9={"/ver/overlord-III-9"}
            capituloAnime10={"/ver/overlord-III-10"}
            capituloAnime11={"/ver/overlord-III-11"}
            capituloAnime12={"/ver/overlord-III-12"}
            capituloAnime13={"/ver/overlord-III-13"}
          />
        }
      />
      <Route
        path="/overlord-IV"
        element={
          <Capitulos13
            tituloAnime={"Overlord IV"}
            imagenAnime={"https://i.postimg.cc/1XJYCPzs/date-a-live-iv.jpg"}
            descripcion={"Cuarta temporada de Overlord."}
            anime={"Overlord IV"}
            tipo={"TV"}
            sec2="disable"
            sec3={"disable"}
            estado={"Finalizado"}
            numeroEpisodios={"13"}
            hrefSecuela="/overlord-III"
            nombreSecuela={"Overlord III"}
            textoSecuela={"Precuela"}
            capituloAnime1={"/ver/overlord-IV-1"}
            capituloAnime2={"/ver/overlord-IV-2"}
            capituloAnime3={"/ver/overlord-IV-3"}
            capituloAnime4={"/ver/overlord-IV-4"}
            capituloAnime5={"/ver/overlord-IV-5"}
            capituloAnime6={"/ver/overlord-IV-6"}
            capituloAnime7={"/ver/overlord-IV-7"}
            capituloAnime8={"/ver/overlord-IV-8"}
            capituloAnime9={"/ver/overlord-IV-9"}
            capituloAnime10={"/ver/overlord-IV-10"}
            capituloAnime11={"/ver/overlord-IV-11"}
            capituloAnime12={"/ver/overlord-IV-12"}
            capituloAnime13={"/ver/overlord-IV-13"}
          />
        }
      />
      <Route
        path="/bleach-sennen-kessen-hen"
        element={
          <Capitulos13
            tituloAnime={"BLEACH: Sennen Kessen-hen "}
            imagenAnime={
              "https://i.postimg.cc/qBYYWBJZ/bleach-sennen-kessen-hen.jpg"
            }
            descripcion={"Segunda Temporada de bleach"}
            anime={"BLEACH: Sennen Kessen-hen"}
            tipo={"TV"}
            sec1="disable"
            sec2="disable"
            sec3={"disable"}
            estado={"Finalizado"}
            numeroEpisodios={"13"}
            capituloAnime1={"/ver/bleach-sennen-kessen-hen-1"}
            capituloAnime2={"/ver/bleach-sennen-kessen-hen-2"}
            capituloAnime3={"/ver/bleach-sennen-kessen-hen-3"}
            capituloAnime4={"/ver/bleach-sennen-kessen-hen-4"}
            capituloAnime5={"/ver/bleach-sennen-kessen-hen-5"}
            capituloAnime6={"/ver/bleach-sennen-kessen-hen-6"}
            capituloAnime7={"/ver/bleach-sennen-kessen-hen-7"}
            capituloAnime8={"/ver/bleach-sennen-kessen-hen-8"}
            capituloAnime9={"/ver/bleach-sennen-kessen-hen-9"}
            capituloAnime10={"/ver/bleach-sennen-kessen-hen-10"}
            capituloAnime11={"/ver/bleach-sennen-kessen-hen-11"}
            capituloAnime12={"/ver/bleach-sennen-kessen-hen-12"}
            capituloAnime13={"/ver/bleach-sennen-kessen-hen-13"}
          />
        }
      />
      <Route
        path="/mob-psycho-100"
        element={
          <Capitulos13
            tituloAnime={"Mob Psycho 100"}
            imagenAnime={"https://i.postimg.cc/GpWsTSvQ/mob-psycho-100.jpg"}
            descripcion={
              "Cuenta la historia de “Mob”, un chico con poderes psíquicos que explota si su capacidad emocional alcanza el 100%. Recibió el apodo de “Mob” porque no destaca entre la gente, y trata de reprimir sus poderes para poder llevar una vida normal."
            }
            anime={"Mob Psycho 100"}
            tipo={"TV"}
            sec2={"disable"}
            sec3={"disable"}
            estado={"Finalizado"}
            numeroEpisodios={"13"}
            hrefSecuela="/mob-psycho-100-II"
            nombreSecuela={"Mob Psycho 100 II"}
            textoSecuela={"Secuela"}
            capituloAnime1={"/ver/mob-psycho-100-1"}
            capituloAnime2={"/ver/mob-psycho-100-2"}
            capituloAnime3={"/ver/mob-psycho-100-3"}
            capituloAnime4={"/ver/mob-psycho-100-4"}
            capituloAnime5={"/ver/mob-psycho-100-5"}
            capituloAnime6={"/ver/mob-psycho-100-6"}
            capituloAnime7={"/ver/mob-psycho-100-7"}
            capituloAnime8={"/ver/mob-psycho-100-8"}
            capituloAnime9={"/ver/mob-psycho-100-9"}
            capituloAnime10={"/ver/mob-psycho-100-10"}
            capituloAnime11={"/ver/mob-psycho-100-11"}
            capituloAnime12={"/ver/mob-psycho-100-12"}
            capituloAnime13={"/ver/mob-psycho-100-13-ova"}
          />
        }
      />
      <Route
        path="/mob-psycho-100-II"
        element={
          <Capitulos13
            tituloAnime={"Mob Psycho 100 II"}
            imagenAnime={"https://i.postimg.cc/vZj4CS2s/mob-psycho-100-ii.jpg"}
            descripcion={"Segunda Temporada de Mob Psycho 100"}
            anime={"Mob Psycho 100 II"}
            tipo={"TV"}
            sec3={"disable"}
            estado={"Finalizado"}
            numeroEpisodios={"13"}
            hrefSecuela="/mob-psycho-100"
            hrefSecuela2={"/mob-psycho-100-III"}
            nombreSecuela={"Mob Psycho 100"}
            nombreSecuela2={"Mob Psycho 100 III"}
            textoSecuela2={"Secuela"}
            textoSecuela={"Precuela"}
            capituloAnime1={"/ver/mob-psycho-100-II-1"}
            capituloAnime2={"/ver/mob-psycho-100-II-2"}
            capituloAnime3={"/ver/mob-psycho-100-II-3"}
            capituloAnime4={"/ver/mob-psycho-100-II-4"}
            capituloAnime5={"/ver/mob-psycho-100-II-5"}
            capituloAnime6={"/ver/mob-psycho-100-II-6"}
            capituloAnime7={"/ver/mob-psycho-100-II-7"}
            capituloAnime8={"/ver/mob-psycho-100-II-8"}
            capituloAnime9={"/ver/mob-psycho-100-II-9"}
            capituloAnime10={"/ver/mob-psycho-100-II-10"}
            capituloAnime11={"/ver/mob-psycho-100-II-11"}
            capituloAnime12={"/ver/mob-psycho-100-II-12"}
            capituloAnime13={"/ver/mob-psycho-100-II-13"}
          />
        }
      />

      <Route
        path="/spy-x-family-2nd-temporada"
        element={
          <Capitulos13
            tituloAnime={"Spy x Family 2nd Temporada"}
            imagenAnime={
              "https://i.postimg.cc/RFxhPx33/spy-x-family-cour-2.jpg"
            }
            descripcion={"Segunda Temporada de spy x family"}
            anime={"Spy x Family 2nd Temporada"}
            tipo={"TV"}
            sec2={"disable"}
            sec3={"disable"}
            estado={"Finalizado"}
            numeroEpisodios={"13"}
            hrefSecuela="/spy-x-family"
            nombreSecuela={"SPY x FAMILY"}
            textoSecuela={"Precuela"}
            capituloAnime1={"/ver/spy-x-family-2nd-temporada-1"}
            capituloAnime2={"/ver/spy-x-family-2nd-temporada-2"}
            capituloAnime3={"/ver/spy-x-family-2nd-temporada-3"}
            capituloAnime4={"/ver/spy-x-family-2nd-temporada-4"}
            capituloAnime5={"/ver/spy-x-family-2nd-temporada-5"}
            capituloAnime6={"/ver/spy-x-family-2nd-temporada-6"}
            capituloAnime7={"/ver/spy-x-family-2nd-temporada-7"}
            capituloAnime8={"/ver/spy-x-family-2nd-temporada-8"}
            capituloAnime9={"/ver/spy-x-family-2nd-temporada-9"}
            capituloAnime10={"/ver/spy-x-family-2nd-temporada-10"}
            capituloAnime11={"/ver/spy-x-family-2nd-temporada-11"}
            capituloAnime12={"/ver/spy-x-family-2nd-temporada-12"}
            capituloAnime13={"/ver/spy-x-family-2nd-temporada-13"}
          />
        }
      />
      <Route
        path="/shadows-house"
        element={
          <Capitulos13
            descripcion={
              "Un clan sin rostro vive en una gran mansión, disfrazado de nobles. Sus cuidadores son muñecos vivientes que se pasan el día limpiando la suciedad que dejan los inquilinos. Pero hay un misterio más profundo en juego ... y se revelará el secreto de la casa"
            }
            anime={"Shadows House"}
            imagenAnime={"https://i.postimg.cc/sD11ZwKQ/shadows-house.jpg"}
            hrefSecuela="/shadows-house-segunda-temporada"
            textoSecuela={"Secuela"}
            nombreSecuela="Shadows House 2nd Temporada"
            sec2={"disable"}
            sec3={"disable"}
            tipo={"TV"}
            estado={"Finalizado"}
            numeroEpisodios={"13"}
            capituloAnime1={"/ver/shadows-house-1"}
            capituloAnime2={"/ver/shadows-house-2"}
            capituloAnime3={"/ver/shadows-house-3"}
            capituloAnime4={"/ver/shadows-house-4"}
            capituloAnime5={"/ver/shadows-house-5"}
            capituloAnime6={"/ver/shadows-house-6"}
            capituloAnime7={"/ver/shadows-house-7"}
            capituloAnime8={"/ver/shadows-house-8"}
            capituloAnime9={"/ver/shadows-house-9"}
            capituloAnime10={"/ver/shadows-house-10"}
            capituloAnime11={"/ver/shadows-house-11"}
            capituloAnime12={"/ver/shadows-house-12"}
            capituloAnime13={"/ver/shadows-house-13"}
          />
        }
      />
      <Route
        path="/saiyoki-reload-zeroin"
        element={
          <Capitulos13
            descripcion={
              "Una vez, la tierra de Togenkyo era una tierra pacífica, donde los humanos y los yokai vivían juntos. Luego, sin embargo, aparecieron hombres que intentaron revivir a Gyumaoh, el Gran Yokai que fue asesinado por el dios de la guerra Nataku Taishi y enterrado en el Castillo Houtou hace 500 años, usando una combinación prohibida de química y magia. Las ondas de energía negativa que esto creó se extendieron por Togenkyo, haciendo que el yokai se volviera loco y atacara a la humanidad. Para salvar la tierra, Kanzeon bosatsu ordena a Son Goku, Genjyo Sazno, Sha Gojyo y Cho Hakkai que vayan al oeste. Los cuatro emprendieron un viaje para detener el experimento de revivir a Gyumaoh. En el camino, se encuentran con Hazel Grouse, quien emplea magia extraña que usa almas yokai para revivir a los muertos, y su seguidor Gato. Los dos se unen a la fiesta. Y Ukoku Sanzo, un hombre con el que tienen una larga historia, se acerca en las sombras ... Personajes inolvidables, drama personal intenso y acción asombrosa en una historia sobre los vínculos entre cuatro hombres"
            }
            anime={"Saiyuki RELOAD -ZEROIN-"}
            imagenAnime={
              "https://i.postimg.cc/R0xxy7mF/saiyuki-reload-zeroin.jpg"
            }
            sec1="disable"
            sec2={"disable"}
            sec3="disable"
            tipo={"TV"}
            estado={"Finalizado"}
            numeroEpisodios={"13"}
            capituloAnime1={"/ver/saiyoki-reload-zeroin-1"}
            capituloAnime2={"/ver/saiyoki-reload-zeroin-2"}
            capituloAnime3={"/ver/saiyoki-reload-zeroin-3"}
            capituloAnime4={"/ver/saiyoki-reload-zeroin-4"}
            capituloAnime5={"/ver/saiyoki-reload-zeroin-5"}
            capituloAnime6={"/ver/saiyoki-reload-zeroin-6"}
            capituloAnime7={"/ver/saiyoki-reload-zeroin-7"}
            capituloAnime8={"/ver/saiyoki-reload-zeroin-8"}
            capituloAnime9={"/ver/saiyoki-reload-zeroin-9"}
            capituloAnime10={"/ver/saiyoki-reload-zeroin-10"}
            capituloAnime11={"/ver/saiyoki-reload-zeroin-11"}
            capituloAnime12={"/ver/saiyoki-reload-zeroin-12"}
            capituloAnime13={"/ver/saiyoki-reload-zeroin-13"}
          />
        }
      />
      <Route
        path="/isekai-ojisan"
        element={
          <Capitulos13
            descripcion={
              'Otoño 2017... Atropellado por un camión cuando tenía 17 años, el tío de Takafumi despierta repentinamente de un coma que duró 17 años. Cuando Takafumi lo visita en el hospital, ve a su tío murmurando tonterías y declarando que ha regresado de otro mundo llamado "GRAN-BAHAMAL". ...Claramente, su tío se ha vuelto loco. Takafumi no tiene palabras, pero su tío demuestra sus afirmaciones de estar en otra dimensión usando algo de magia. Decidiendo usar los poderes de su tío para ganarse la vida, y sin otros parientes a los que llamar, Takafumi lo acoge y comienzan a compartir un apartamento juntos. Mientras vive con su tío, Takafumi se entera de sus fantásticas aventuras y su amor ilimitado por los videojuegos de SEGA. Pero a veces, las experiencias solitarias y crueles de su tío llenan a Takafumi de alegría y tristeza. ¡Dos hombres de diferentes generaciones trabajan arduamente para ser creadores de contenido de video en esta nueva y emocionante comedia de otro mundo ambientada en un rincón de un complejo de apartamentos!'
            }
            anime={"Isekai Ojisan"}
            imagenAnime={"https://i.postimg.cc/Gpr6zMLL/isekai-ojisan.jpg"}
            tituloAnime={"Isekai Ojisan"}
            textoSecuela="PROXIMO CAPITULO"
            nombreSecuela={"Suspendido por casos covid-19"}
            sec2={"disable"}
            sec3={"disable"}
            tipo={"TV"}
            estado={"En Emisión"}
            numeroEpisodios={"12"}
            capituloAnime1={"/ver/isekai-ojisan-1"}
            capituloAnime2={"/ver/isekai-ojisan-2"}
            capituloAnime3={"/ver/isekai-ojisan-3"}
            capituloAnime4={"/ver/isekai-ojisan-4"}
            capituloAnime5={"/ver/isekai-ojisan-5"}
            capituloAnime6={"/ver/isekai-ojisan-6"}
            capituloAnime7={"/ver/isekai-ojisan-7"}
            capituloAnime8={"/ver/isekai-ojisan-8"}
            capituloAnime9={"/ver/isekai-ojisan-9"}
            capituloAnime10={"/ver/isekai-ojisan-10"}
            capituloAnime11={"/ver/isekai-ojisan-11"}
            capituloAnime12={"/ver/isekai-ojisan-12"}
            capituloAnime13={"/ver/isekai-ojisan-13"}
            li12={"disable"}
            li13={"disable"}
          />
        }
      />
    </Routes>
  );
}
