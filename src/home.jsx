import { Route, Routes } from "react-router-dom";
import { Page1 } from "./Componentes/Componente1";
import { Capitulos12 } from "./Componentes/Componente2";
// import { Filter } from "./Componentes/DropDown";
// import { EnEmision } from "./Componentes/enEmision";
import { NoExiste } from "./Componentes/NoExiste";
import { Page2 } from "./Page/Page2";
import { Page3 } from "./Page/Page3";
import { Page4 } from "./Page/Page4";
import { PerfilPaginaMenu } from "./Perfil/perfil.jsx";
import { Ver } from "./Componentes/Ver";
import { Page5 } from "./Page/Page5";
import { Page10 } from "./Page/Page10";
import { Page9 } from "./Page/Page9";
import { Page8 } from "./Page/Page8";
import { Page7 } from "./Page/Page7";
import { Page6 } from "./Page/Page6";
import { Numero12 } from "./Componentes/Capitulos12";
import { Emision12 } from "./Componentes/EnEmision12";
import { Animes13 } from "./Componentes/Anime13";
import { Capitulos24 } from "./Componentes/Capitulos24";
import { Inicio } from "./Componentes/Inicio";
import { Policy } from "./Componentes/Policy";
import { EmisionesPage1 } from "./Componentes/enEmision";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/perfil/:user" element={<PerfilPaginaMenu />} />
        <Route path="/ver/*" element={<Ver />} />
        {/* capitulos Animes */}
        <Route
          path="/sasaki-to-miyano"
          exact
          element={
            <Numero12
              sec2={"sec"}
              sec3={"sec"}
              sec1={"sec"}
              descripcion={
                "Todo comenzó como la típica trama de amor de los chicos de la vieja escuela: el chico malo de último año se encuentra con un estudiante de secundaria adorablemente torpe, uno de ellos se enamora, y así sucesivamente. Pero aunque Miyano es un autoproclamado experto en el amor de los niños, no se ha dado cuenta... él mismo está en uno. ¡Lo que significa que depende de Sasaki asegurarse de que su historia tenga un feliz para siempre...!"
              }
              imagenAnime="https://i.postimg.cc/PJyqr6t2/sasaki-to-miyano.jpg"
              tipo={"TV"}
              numeroEpisodios={"13"}
              estado={"Finalizado"}
              anime={"Sasaki to Miyano "}
              capituloAnime1={"/sasaki-to-miyano-1"}
              capituloAnime2={"/sasaki-to-miyano-2"}
              capituloAnime3={"/sasaki-to-miyano-3"}
              capituloAnime4={"/sasaki-to-miyano-4"}
              capituloAnime5={"/sasaki-to-miyano-5"}
              capituloAnime6={"/sasaki-to-miyano-6"}
              capituloAnime7={"/sasaki-to-miyano-7"}
              capituloAnime8={"/sasaki-to-miyano-8"}
              capituloAnime9={"/sasaki-to-miyano-9"}
              capituloAnime10={"/sasaki-to-miyano-10"}
              capituloAnime11={"/sasaki-to-miyano-11"}
              capituloAnime12={"/sasaki-to-miyano-12"}
              capituloAnime13={"/sasaki-to-miyano-13"}
            />
          }
        />
        <Route
          path="/akudama-drive"
          exact
          element={
            <Numero12
              tituloAnime={"Akudama Drive "}
              sec2={"sec"}
              sec3={"sec"}
              sec1={"sec"}
              descripcion={
                "Hace muchos años, una Gran Guerra Civil devastó Japón, dejando al país fragmentado en dos regiones: Kansai y Kanto. En Kansai, un grupo de seis Akudama llevan a cabo las misiones que les encomienda un misterioso gato negro, mientras evaden a la policía. Pero un viaje peligroso está a punto de desarrollarse cuando una niña civil se retuerce en el estilo de vida de los Akudama y es testigo de sus impulsos criminales."
              }
              imagenAnime="https://i.postimg.cc/Dz96B0dq/akudama-drive.jpg"
              tipo={"TV"}
              numeroEpisodios={"12"}
              estado={"Finalizado"}
              anime={"Akudama Drive "}
              capituloAnime1={"/ver/akudama-drive-1"}
              capituloAnime2={"/ver/akudama-drive-2"}
              capituloAnime3={"/ver/akudama-drive-3"}
              capituloAnime4={"/ver/akudama-drive-4"}
              capituloAnime5={"/ver/akudama-drive-5"}
              capituloAnime6={"/ver/akudama-drive-6"}
              capituloAnime7={"/ver/akudama-drive-7"}
              capituloAnime8={"/ver/akudama-drive-8"}
              capituloAnime9={"/ver/akudama-drive-9"}
              capituloAnime10={"/ver/akudama-drive-10"}
              capituloAnime11={"/ver/akudama-drive-11"}
              capituloAnime12={"/ver/akudama-drive-12"}
            />
          }
        />
        <Route
          path="/hanyo-no-yashahime-ni-no-shou"
          element={
            <Capitulos24
              tituloAnime={"Hanyo no Yashahime ni no Shou "}
              sec2={"sec"}
              sec3={"sec"}
              sec1={"sec"}
              descripcion={
                "¡Las hijas de Sesshomaru e Inuyasha se lanzan en una aventura que trasciende en el tiempo! En el Japón Feudal, las gemelas mitad demonio Towa y Setsuna son separadas durante un incendio forestal. Mientras busca desesperadamente a su hermana menor, Towa se encuentra un misterioso túnel que la transporta al Japón moderno, en donde es encontrada y puesta al cuidado del hermano de Kagome Higurashi, Sota y su familia. Diez años después, el túnel que conecta las dos eras es abierto de nuevo, permitiendo a Towa volver a reunirse con Setsuna, quien ahora se ha convertido en una Asesina de Youkais en conjunto con Kohaku. Pero lo peor es que Setsuna parece haber perdido sus recuerdos y ya no reconoce a Towa. Ahora uniéndose con Moroha, la hija de Inuyasha, y con Kagome, las tres viajarán entre dos eras en una aventura por recuperar un pasado olvidado."
              }
              anime={"Hanyo no Yashahime ni no Shou "}
              tipo={"TV"}
              numeroEpisodios={"24"}
              estado={"Finalizado"}
              imagenAnime={
                "https://i.postimg.cc/yxBPCGGx/hanyo-no-yashahime-ni-no-shou.jpg"
              }
              capituloAnime1={"/ver/hanyo-no-yashahime-ni-no-shou-1"}
              capituloAnime2={"/ver/hanyo-no-yashahime-ni-no-shou-2"}
              capituloAnime3={"/ver/hanyo-no-yashahime-ni-no-shou-3"}
              capituloAnime4={"/ver/hanyo-no-yashahime-ni-no-shou-4"}
              capituloAnime5={"/ver/hanyo-no-yashahime-ni-no-shou-5"}
              capituloAnime6={"/ver/hanyo-no-yashahime-ni-no-shou-6"}
              capituloAnime7={"/ver/hanyo-no-yashahime-ni-no-shou-7"}
              capituloAnime8={"/ver/hanyo-no-yashahime-ni-no-shou-8"}
              capituloAnime9={"/ver/hanyo-no-yashahime-ni-no-shou-9"}
              capituloAnime10={"/ver/hanyo-no-yashahime-ni-no-shou-10"}
              capituloAnime11={"/ver/hanyo-no-yashahime-ni-no-shou-11"}
              capituloAnime12={"/ver/hanyo-no-yashahime-ni-no-shou-12"}
              capituloAnime13={"/ver/hanyo-no-yashahime-ni-no-shou-13"}
              capituloAnime14={"/ver/hanyo-no-yashahime-ni-no-shou-14"}
              capituloAnime15={"/ver/hanyo-no-yashahime-ni-no-shou-15"}
              capituloAnime16={"/ver/hanyo-no-yashahime-ni-no-shou-16"}
              capituloAnime17={"/ver/hanyo-no-yashahime-ni-no-shou-17"}
              capituloAnime18={"/ver/hanyo-no-yashahime-ni-no-shou-18"}
              capituloAnime19={"/ver/hanyo-no-yashahime-ni-no-shou-19"}
              capituloAnime20={"/ver/hanyo-no-yashahime-ni-no-shou-20"}
              capituloAnime21={"/ver/hanyo-no-yashahime-ni-no-shou-21"}
              capituloAnime22={"/ver/hanyo-no-yashahime-ni-no-shou-22"}
              capituloAnime23={"/ver/hanyo-no-yashahime-ni-no-shou-23"}
              capituloAnime24={"/ver/hanyo-no-yashahime-ni-no-shou-24"}
            />
          }
        />
        <Route
          path="/heion-sedai-no-idaten-tachi"
          element={
            <Numero12
              tituloAnime={"Heion Sedai no Idaten Tachi "}
              sec2={"sec"}
              sec3={"sec"}
              sec1={"sec"}
              descripcion={
                "En la historia de este manga, los dioses aparecieron cuando la humanidad estaba al borde de la aniquilación por parte de los demonios. Deidades llamadas “Idaten” pelearon y sellaron a los demonios hace 800 años. Ahora, los “Idaten” ya no tiene experiencia en peleas y viven vidas pacíficas. Pero, al mismo tiempo, los demonios están reviviendo, y la batalla entre humanos, dioses y demonios está a punto de comenzar. ¿Cuál será el bando que se alce con la victoria en esta ocasión con las condiciones tan cambiadas?"
              }
              anime={"Heion Sedai no Idaten Tachi "}
              tipo={"TV"}
              numeroEpisodios={"11"}
              estado={"Finalizado"}
              imagenAnime={
                "https://i.postimg.cc/PfzyQtLw/heion-sedai-no-idaten-tachi.jpg"
              }
              capituloAnime1={"/ver/heion-sedai-no-idaten-tachi-1"}
              capituloAnime2={"/ver/heion-sedai-no-idaten-tachi-2"}
              capituloAnime3={"/ver/heion-sedai-no-idaten-tachi-3"}
              capituloAnime4={"/ver/heion-sedai-no-idaten-tachi-4"}
              capituloAnime5={"/ver/heion-sedai-no-idaten-tachi-5"}
              capituloAnime6={"/ver/heion-sedai-no-idaten-tachi-6"}
              capituloAnime7={"/ver/heion-sedai-no-idaten-tachi-7"}
              capituloAnime8={"/ver/heion-sedai-no-idaten-tachi-8"}
              capituloAnime9={"/ver/heion-sedai-no-idaten-tachi-9"}
              capituloAnime10={"/ver/heion-sedai-no-idaten-tachi-10"}
              capituloAnime11={"/ver/heion-sedai-no-idaten-tachi-11"}
              li12={"disable"}
            />
          }
        />
        <Route
          path="/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2"
          element={
            <Animes13
              tituloAnime={
                "Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 "
              }
              descripcion={"Segunda parte de la segunda temporada del slime"}
              sec2={"sec"}
              sec3={"sec"}
              sec1={"sec"}
              anime={
                "Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 "
              }
              tipo={"TV"}
              numeroEpisodios={"13"}
              estado={"Finalizado"}
              imagenAnime={""}
              capituloAnime1={
                "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-1"
              }
              capituloAnime2={
                "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-2"
              }
              capituloAnime3={
                "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-3"
              }
              capituloAnime4={
                "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-4"
              }
              capituloAnime5={
                "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-5"
              }
              capituloAnime6={
                "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-6"
              }
              capituloAnime7={
                "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-7"
              }
              capituloAnime8={
                "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-8"
              }
              capituloAnime9={
                "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-9"
              }
              capituloAnime10={
                "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-10"
              }
              capituloAnime11={
                "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-11"
              }
              capituloAnime12={
                "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-12"
              }
              capituloAnime13={
                "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-13"
              }
            />
          }
        />
        <Route
          path="/peach-boy-riverside"
          element={
            <Numero12
              tituloAnime={"Peach Boy Riverside "}
              sec2={"sec"}
              sec3={"sec"}
              sec1={"sec"}
              descripcion={
                "Saltherine Aldarake, princesa del Reino de Aldarake, sueña con viajar por el mundo, un sueño peligroso en una tierra donde los monstruos deambulan por el campo a su antojo y los humanos viven detrás de muros altos y fuertes. Pero cuando un encuentro casual con la viajera Mikoto le da esperanza a su sueño, él lo rompe poco después, ya que se revela como nada menos que Momotaro, un despiadado asesino de demonios. Aunque horrorizada por la sangre que Momotaro deja atrás, Saltherine está más convencida que nunca de que necesita aprender sobre el mundo más allá de sus muros, y viaja ... siguiendo los pasos del misterioso, carismático y aterrador chico que conoció ese día..."
              }
              anime={"Peach Boy Riverside "}
              tipo={"TV"}
              numeroEpisodios={"12"}
              estado={"Finalizado"}
              imagenAnime={
                "https://i.postimg.cc/nz1mBhdV/peach-boy-riverside.jpg"
              }
              capituloAnime1={"/ver/peach-boy-riverside-1"}
              capituloAnime2={"/ver/peach-boy-riverside-2"}
              capituloAnime3={"/ver/peach-boy-riverside-3"}
              capituloAnime4={"/ver/peach-boy-riverside-4"}
              capituloAnime5={"/ver/peach-boy-riverside-5"}
              capituloAnime6={"/ver/peach-boy-riverside-6"}
              capituloAnime7={"/ver/peach-boy-riverside-7"}
              capituloAnime8={"/ver/peach-boy-riverside-8"}
              capituloAnime9={"/ver/peach-boy-riverside-9"}
              capituloAnime10={"/ver/peach-boy-riverside-10"}
              capituloAnime11={"/ver/peach-boy-riverside-11"}
              capituloAnime12={"/ver/peach-boy-riverside-12"}
            />
          }
        />
        <Route
          path="/jujutsu-kaisen"
          element={
            <Capitulos24
              tituloAnime={"Jujutsu Kaisen "}
              sec2={"sec"}
              sec3={"sec"}
              sec1={"sec"}
              descripcion={
                "Un niño lucha... por 'la muerte justa'. Dificultad, arrepentimiento, vergüenza: los sentimientos negativos que sentimos los humanos se convierten en Maldiciones que acechan en nuestra vida diaria. Las maldiciones corren desenfrenadas por todo el mundo, capaces de llevar a la gente a una terrible desgracia e incluso a la muerte. Además, las maldiciones solo pueden ser exorcizadas por otra maldición. Itadori Yuji es un chico con una fuerza física tremenda, aunque vive una vida de escuela secundaria completamente normal. Un día, para salvar a un amigo que ha sido atacado por Maldiciones, se come el dedo del Espectro de Doble Cara, llevándose la Maldición a su propia alma. A partir de entonces, comparte un cuerpo con el Espectro de Doble Cara. Guiado por el más poderoso de los hechiceros, Gojo Satoru, Itadori es admitido en la Escuela Superior Técnica Metropolitana de Hechicería de Tokio, una organización que lucha contra las maldiciones ... y así comienza la heroica historia de un niño que se convirtió en una maldición para exorcizar una maldición. , una vida de la que nunca podría volver atrás."
              }
              anime={"Jujutsu Kaisen "}
              tipo={"TV"}
              numeroEpisodios={"24"}
              estado={"Finalizado"}
              imagenAnime={"https://i.postimg.cc/wMfs4b8S/jujutsu-kaisen.jpg"}
              capituloAnime1={"/ver/jujutsu-kaisen-1"}
              capituloAnime2={"/ver/jujutsu-kaisen-2"}
              capituloAnime3={"/ver/jujutsu-kaisen-3"}
              capituloAnime4={"/ver/jujutsu-kaisen-4"}
              capituloAnime5={"/ver/jujutsu-kaisen-5"}
              capituloAnime6={"/ver/jujutsu-kaisen-6"}
              capituloAnime7={"/ver/jujutsu-kaisen-7"}
              capituloAnime8={"/ver/jujutsu-kaisen-8"}
              capituloAnime9={"/ver/jujutsu-kaisen-9"}
              capituloAnime10={"/ver/jujutsu-kaisen-10"}
              capituloAnime11={"/ver/jujutsu-kaisen-11"}
              capituloAnime12={"/ver/jujutsu-kaisen-12"}
              capituloAnime13={"/ver/jujutsu-kaisen-13"}
              capituloAnime14={"/ver/jujutsu-kaisen-14"}
              capituloAnime15={"/ver/jujutsu-kaisen-15"}
              capituloAnime16={"/ver/jujutsu-kaisen-16"}
              capituloAnime17={"/ver/jujutsu-kaisen-17"}
              capituloAnime18={"/ver/jujutsu-kaisen-18"}
              capituloAnime19={"/ver/jujutsu-kaisen-19"}
              capituloAnime20={"/ver/jujutsu-kaisen-20"}
              capituloAnime21={"/ver/jujutsu-kaisen-21"}
              capituloAnime22={"/ver/jujutsu-kaisen-22"}
              capituloAnime23={"/ver/jujutsu-kaisen-23"}
              capituloAnime24={"/ver/jujutsu-kaisen-24"}
            />
          }
        />
        <Route
          path="/shingeki-no-bahamut:virgin-soul"
          element={
            <Capitulos24
              tituloAnime={"Shingeki no Bahamut:Virgin Soul "}
              sec2={"sec"}
              sec3={"sec"}
              sec1={"sec"}
              descripcion={
                "10 años después de que el mundo escapó de la destrucción debido al resurgimiento de Bahamut, los humanos en la capital real recolectan riqueza, los demonios son esclavizados para ayudar con el renacimiento de la capital y los dioses pierden su poder debido a una disminución de la piedad religiosa."
              }
              anime={"Shingeki no Bahamut:Virgin Soul "}
              tipo={"TV"}
              numeroEpisodios={"24"}
              estado={"Finalizado"}
              imagenAnime={
                "https://i.postimg.cc/QxC7Kscs/shingeki-no-bahamut-virgin-soul.jpg"
              }
              capituloAnime1={"/ver/shingeki-no-bahamut:virgin-soul-1"}
              capituloAnime2={"/ver/shingeki-no-bahamut:virgin-soul-2"}
              capituloAnime3={"/ver/shingeki-no-bahamut:virgin-soul-3"}
              capituloAnime4={"/ver/shingeki-no-bahamut:virgin-soul-4"}
              capituloAnime5={"/ver/shingeki-no-bahamut:virgin-soul-5"}
              capituloAnime6={"/ver/shingeki-no-bahamut:virgin-soul-6"}
              capituloAnime7={"/ver/shingeki-no-bahamut:virgin-soul-7"}
              capituloAnime8={"/ver/shingeki-no-bahamut:virgin-soul-8"}
              capituloAnime9={"/ver/shingeki-no-bahamut:virgin-soul-9"}
              capituloAnime10={"/ver/shingeki-no-bahamut:virgin-soul-10"}
              capituloAnime11={"/ver/shingeki-no-bahamut:virgin-soul-11"}
              capituloAnime12={"/ver/shingeki-no-bahamut:virgin-soul-12"}
              capituloAnime13={"/ver/shingeki-no-bahamut:virgin-soul-13"}
              capituloAnime14={"/ver/shingeki-no-bahamut:virgin-soul-14"}
              capituloAnime15={"/ver/shingeki-no-bahamut:virgin-soul-15"}
              capituloAnime16={"/ver/shingeki-no-bahamut:virgin-soul-16"}
              capituloAnime17={"/ver/shingeki-no-bahamut:virgin-soul-17"}
              capituloAnime18={"/ver/shingeki-no-bahamut:virgin-soul-18"}
              capituloAnime19={"/ver/shingeki-no-bahamut:virgin-soul-19"}
              capituloAnime20={"/ver/shingeki-no-bahamut:virgin-soul-20"}
              capituloAnime21={"/ver/shingeki-no-bahamut:virgin-soul-21"}
              capituloAnime22={"/ver/shingeki-no-bahamut:virgin-soul-22"}
              capituloAnime23={"/ver/shingeki-no-bahamut:virgin-soul-23"}
              capituloAnime24={"/ver/shingeki-no-bahamut:virgin-soul-24"}
            />
          }
        />
        <Route
          path="/castlevania-segunda-temporada"
          element={
            <Numero12
              tituloAnime={"Castlevania Segunda Temporada "}
              descripcion={"Segunda temporada de Castlevania."}
              sec3={"sec"}
              hrefSecuela={"/castlevania"}
              hrefSecuela2={"/castlevania-tercera-temporada"}
              textoSecuela={"Precuela"}
              textoSecuela2={"Secuela"}
              nombreSecuela={"Castlevania"}
              nombreSecuela2={"Castlevania 3"}
              li9={"li"}
              li10={"li"}
              li11={"li"}
              li12={"li"}
              anime={"Castlevania 2nd Temporada "}
              tipo={"TV"}
              numeroEpisodios={"8"}
              estado={"Finalizado"}
              imagenAnime={
                "https://i.postimg.cc/k53RHbzX/castlevania-season-2.jpg"
              }
              capituloAnime1={"/ver/castlevania-segunda-temporada-1"}
              capituloAnime2={"/ver/castlevania-segunda-temporada-2"}
              capituloAnime3={"/ver/castlevania-segunda-temporada-3"}
              capituloAnime4={"/ver/castlevania-segunda-temporada-4"}
              capituloAnime5={"/ver/castlevania-segunda-temporada-5"}
              capituloAnime6={"/ver/castlevania-segunda-temporada-6"}
              capituloAnime7={"/ver/castlevania-segunda-temporada-7"}
              capituloAnime8={"/ver/castlevania-segunda-temporada-8"}
            />
          }
        />

        <Route
          path="/ao-no-exorcist:-kyoto-fujouou-hen"
          element={
            <Animes13
              tituloAnime={"Ao no Exorcist Kyoto Fujouou Hen "}
              sec2={"sec"}
              sec3={"sec"}
              textoSecuela={"Precuela"}
              nombreSecuela={"Ao no Exorcist"}
              hrefSecuela={"/ao-no-exorcist"}
              descripcion={
                "A finales de la era Edo, un demonio conocido como el Rey Impuro mató a miles de personas. Tras vencer al demonio, los Caballeros de la Verdadera Cruz mantuvieron su ojo izquierdo sellado a salvo en la Academia, pero ahora ha sido robado. Al escuchar que el ladrón ha tomado por rehén a un niño, Yukio y Rin parten a ayudar. La investigación y la persecución llevará a Rin y a sus amigos hasta Kyoto, donde se verán involucrados en una oscura trama."
              }
              anime={"Ao no Exorcist Kyoto Fujouou Hen "}
              tipo={"TV"}
              numeroEpisodios={"13"}
              estado={"Finalizado"}
              imagenAnime={
                "https://i.postimg.cc/kG6n9jtr/ao-no-exorcist-kyoto-fujouou-hen.jpg"
              }
              capituloAnime1={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-1"}
              capituloAnime2={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-2"}
              capituloAnime3={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-3"}
              capituloAnime4={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-4"}
              capituloAnime5={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-5"}
              capituloAnime6={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-6"}
              capituloAnime7={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-7"}
              capituloAnime8={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-8"}
              capituloAnime9={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-9"}
              capituloAnime10={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-10"}
              capituloAnime11={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-11"}
              capituloAnime12={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-12"}
              capituloAnime13={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-13"}
            />
          }
        />
        <Route
          path="/fairy-gone"
          element={
            <Numero12
              tituloAnime={"Fairy Gone "}
              descripcion={
                "La historia nos trasladará a un mundo en el que las hadas poseen y residen en animales, proporcionándoles poderes especiales. Extrayendo quirúrgicamente los órganos a uno de estos animales e implantándoselos a un humano, los humanos pueden invocar parcialmente a las hadas y usarlas como armas. Estos humanos participarán en las guerras y serán conocidos como 'Soldados Hada'. Tras el fin de una larga guerra, estos Soldados Hada pierden su propósito y deben reintegrarse en la sociedad, aunque no todos tomarán el camino de la justicia. Nueve años después del fin de la guerra conocemos a Marlya, una nueva recluta en Dorothea, una organización dedicada a investigar y contrarrestar crímenes relacionados con hadas. Aun en tiempo de paz, la inestabilidad de la guerra todavía afecta al gobierno. Muchos criminales cargan con heridas de la guerra y los grupos terroristas buscan venganza por los actos de entonces. Una historia de soldados hada persiguiendo su propia justicia en un mundo caótico que intenta dejar atrás un conflicto."
              }
              anime={"Fairy Gone "}
              tipo={"TV"}
              numeroEpisodios={"12"}
              estado={"Finalizado"}
              imagenAnime={"https://i.postimg.cc/j5CTQ8cW/fairy-gone.jpg"}
              textoSecuela={"Secuela"}
              hrefSecuela={"/fairy-gone-segunda-temporada"}
              nombreSecuela={"Fairy Gone Segunda Temporada"}
              sec2={"sec"}
              sec3={"sec"}
              capituloAnime1={"/ver/fairy-gone-1"}
              capituloAnime2={"/ver/fairy-gone-2"}
              capituloAnime3={"/ver/fairy-gone-3"}
              capituloAnime4={"/ver/fairy-gone-4"}
              capituloAnime5={"/ver/fairy-gone-5"}
              capituloAnime6={"/ver/fairy-gone-6"}
              capituloAnime7={"/ver/fairy-gone-7"}
              capituloAnime8={"/ver/fairy-gone-8"}
              capituloAnime9={"/ver/fairy-gone-9"}
              capituloAnime10={"/ver/fairy-gone-10"}
              capituloAnime11={"/ver/fairy-gone-11"}
              capituloAnime12={"/ver/fairy-gone-12"}
            />
          }
        />
        <Route
          path="/dr-stone-ryusui"
          element={
            <Numero12
              tituloAnime={"Dr Stone Ryusui "}
              descripcion={
                "Episodio que sirve como puente entre la segunda y tercera temporada de Dr. Stone."
              }
              anime={"Dr Stone Ryusui "}
              tipo={"Especial"}
              numeroEpisodios={"1"}
              estado={"Finalizado"}
              hrefSecuela={"/ver/dr-stone-wars"}
              nombreSecuela={"Dr. Stone: Wars"}
              textoSecuela={"Secuela"}
              sec2={"sec"}
              sec3={"sec"}
              imagenAnime={"https://i.postimg.cc/c1pKCY17/dr-stone-ryusui.jpg"}
              li2={"li"}
              li3={"li"}
              li4={"li"}
              li5={"li"}
              li6={"li"}
              li7={"li"}
              li8={"li"}
              li9={"li"}
              li10={"li"}
              li11={"li"}
              li12={"li"}
              capituloAnime1={"/ver/dr-stone-ryusui-1"}
            />
          }
        />
        <Route
          path="/isekai-yakkyoku"
          element={
            <Numero12
              tituloAnime={"Isekai Yakkyoku "}
              descripcion={
                "Un joven farmacólogo e investigador en Japón murió por exceso de trabajo y reencarnó en una Europa paralela medieval. Se reencarnó como un aprendiz de 10 años de un famoso farmacéutico de la Corte Real, había alcanzado habilidades inhumanas de capacidad para ver a través de enfermedades, creación material y destrucción material. En una sociedad en la que proliferan las prácticas médicas dudosas, los precios se disparan a través del monopolio del gremio farmacéutico y los buenos medicamentos no están disponibles para los plebeyos. Fue reconocido por el Emperador en ese momento y abrió una Farmacia en la esquina del pueblo. Eliminará el fraude que se ha extendido por el mundo y entregará a los plebeyos una medicina verdaderamente efectiva que se desarrolló utilizando la farmacología actual. Así, el niño farmacéutico hará trampa utilizando sus conocimientos previos para crear medicamentos innovadores mientras ayuda a las personas del mundo paralelo, una historia sobre vivir su nueva vida al máximo esta vez."
              }
              anime={"Isekai Yakkyoku "}
              tipo={"TV"}
              numeroEpisodios={"12"}
              estado={"Finalizado"}
              sec1={"sec"}
              sec2={"sec"}
              sec3={"sec"}
              imagenAnime={"https://i.postimg.cc/m2WDBsV8/isekai-yakkyoku.jpg"}
              capituloAnime1={"/ver/isekai-yakkyoku-1"}
              capituloAnime2={"/ver/isekai-yakkyoku-2"}
              capituloAnime3={"/ver/isekai-yakkyoku-3"}
              capituloAnime4={"/ver/isekai-yakkyoku-4"}
              capituloAnime5={"/ver/isekai-yakkyoku-5"}
              capituloAnime6={"/ver/isekai-yakkyoku-6"}
              capituloAnime7={"/ver/isekai-yakkyoku-7"}
              capituloAnime8={"/ver/isekai-yakkyoku-8"}
              capituloAnime9={"/ver/isekai-yakkyoku-9"}
              capituloAnime10={"/ver/isekai-yakkyoku-10"}
              capituloAnime11={"/ver/isekai-yakkyoku-11"}
              capituloAnime12={"/ver/isekai-yakkyoku-12"}
            />
          }
        />
        <Route
          path="/kuro-no-shoukanshi"
          element={
            <Numero12
              tituloAnime={"Kuro no Shoukanshi "}
              descripcion={
                'Cuando Kelvin se despierta, se encuentra en un lugar desconocido sin ningún recuerdo de su vida anterior. Resulta que se había reencarnado en otro mundo pero había cambiado sus recuerdos del pasado por poderosas habilidades. Ahora que es un invocador, emprende un viaje con la diosa que lo trajo al nuevo mundo, quien también es su primera "seguidora".'
              }
              anime={"Kuro no Shoukanshi "}
              tipo={"TV"}
              numeroEpisodios={"12"}
              estado={"Finalizado"}
              sec1={"sec"}
              sec2={"sec"}
              sec3={"sec"}
              imagenAnime={
                "https://i.postimg.cc/j2HRLDvv/kuro-no-shoukanshi.jpg"
              }
              capituloAnime1={"/ver/kuro-no-shoukanshi-1"}
              capituloAnime2={"/ver/kuro-no-shoukanshi-2"}
              capituloAnime3={"/ver/kuro-no-shoukanshi-3"}
              capituloAnime4={"/ver/kuro-no-shoukanshi-4"}
              capituloAnime5={"/ver/kuro-no-shoukanshi-5"}
              capituloAnime6={"/ver/kuro-no-shoukanshi-6"}
              capituloAnime7={"/ver/kuro-no-shoukanshi-7"}
              capituloAnime8={"/ver/kuro-no-shoukanshi-8"}
              capituloAnime9={"/ver/kuro-no-shoukanshi-9"}
              capituloAnime10={"/ver/kuro-no-shoukanshi-10"}
              capituloAnime11={"/ver/kuro-no-shoukanshi-11"}
              capituloAnime12={"/ver/kuro-no-shoukanshi-12"}
            />
          }
        />
        <Route
          path="/fairy-gone-segunda-temporada"
          element={
            <Numero12
              tituloAnime={"Fairy Gone Segunda Temporada "}
              descripcion={"Segunda temporada de Fairy Gone."}
              anime={"Fairy Gone Segunda Temporada "}
              tipo={"TV"}
              numeroEpisodios={"12"}
              estado={"Finalizado"}
              sec2={"sec"}
              sec3={"sec"}
              hrefSecuela={"/fairy-gone"}
              textoSecuela={"Precuela"}
              nombreSecuela={"Fairy Gone"}
              imagenAnime={
                "https://i.postimg.cc/ZqXmH8MV/fairy-gone-2nd-season.jpg"
              }
              capituloAnime1={"/ver/fairy-gone-segunda-temporada-1"}
              capituloAnime2={"/ver/fairy-gone-segunda-temporada-2"}
              capituloAnime3={"/ver/fairy-gone-segunda-temporada-3"}
              capituloAnime4={"/ver/fairy-gone-segunda-temporada-4"}
              capituloAnime5={"/ver/fairy-gone-segunda-temporada-5"}
              capituloAnime6={"/ver/fairy-gone-segunda-temporada-6"}
              capituloAnime7={"/ver/fairy-gone-segunda-temporada-7"}
              capituloAnime8={"/ver/fairy-gone-segunda-temporada-8"}
              capituloAnime9={"/ver/fairy-gone-segunda-temporada-9"}
              capituloAnime10={"/ver/fairy-gone-segunda-temporada-10"}
              capituloAnime11={"/ver/fairy-gone-segunda-temporada-11"}
              capituloAnime12={"/ver/fairy-gone-segunda-temporada-12"}
            />
          }
        />
        <Route
          path="/isekai-meikyuu-de-harem-wo"
          element={
            <Numero12
              tituloAnime={"Isekai Meikyuu de Harem wo "}
              descripcion={
                " Luchando con la vida y la sociedad, el estudiante de secundaria Michio Kaga deambula por Internet y aterriza en un sitio web extraño. El sitio web, que presenta una serie de preguntas y un sistema basado en puntos, permite crear habilidades y destrezas para un personaje. Al completar su personaje, Kaga fue transportado a un mundo de fantasía similar a un juego y renació como un hombre fuerte que puede reclamar chicas de nivel ídolo. ¡Así comienza la leyenda del engaño y el harén de un hombre renacido!"
              }
              anime={"Isekai Meikyuu de Harem wo "}
              tipo={"TV"}
              numeroEpisodios={"12"}
              estado={"Finalizado"}
              imagenAnime={
                "https://i.postimg.cc/RZFzzprg/isekai-meikyuu-de-harem-wo.jpg"
              }
              sec1={"sec"}
              sec2={"sec"}
              sec3={"sec"}
              capituloAnime1={"/ver/isekai-meiryuu-de-harem-wo-1"}
              capituloAnime2={"/ver/isekai-meiryuu-de-harem-wo-2"}
              capituloAnime3={"/ver/isekai-meiryuu-de-harem-wo-3"}
              capituloAnime4={"/ver/isekai-meiryuu-de-harem-wo-4"}
              capituloAnime5={"/ver/isekai-meiryuu-de-harem-wo-5"}
              capituloAnime6={"/ver/isekai-meiryuu-de-harem-wo-6"}
              capituloAnime7={"/ver/isekai-meiryuu-de-harem-wo-7"}
              capituloAnime8={"/ver/isekai-meiryuu-de-harem-wo-8"}
              capituloAnime9={"/ver/isekai-meiryuu-de-harem-wo-9"}
              capituloAnime10={"/ver/isekai-meiryuu-de-harem-wo-10"}
              capituloAnime11={"/ver/isekai-meiryuu-de-harem-wo-11"}
              capituloAnime12={"/ver/isekai-meiryuu-de-harem-wo-12"}
            />
          }
        />
        <Route
          path="/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada"
          element={
            <Animes13
              tituloAnime={
                "Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e Segunda Temporada "
              }
              descripcion={
                "La Escuela Secundaria de Educación Avanzada Metropolitana de Tokio parece un paraíso, pero en realidad es una meritocracia extrema. En la clase de bajo rendimiento, Kiyotaka ha comenzado a trabajar con Suzune, que busca ascender más alto. Después de una prueba de supervivencia en una isla deshabitada, pueden disfrutar de un transatlántico de lujo, ¡pero comenzará una nueva prueba de codificación de clases! ¿Trabajarás para tu clase, tu grupo o para ti mismo?"
              }
              anime={
                "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e Temporada 2 "
              }
              tipo={"TV"}
              numeroEpisodios={"13"}
              estado={"Finalizado"}
              imagenAnime={
                "https://i.postimg.cc/02kTpXN9/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-2nd-season.jpg"
              }
              capituloAnime1={
                "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-1"
              }
              capituloAnime2={
                "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-2"
              }
              capituloAnime3={
                "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-3"
              }
              capituloAnime4={
                "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-4"
              }
              capituloAnime5={
                "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-5"
              }
              capituloAnime6={
                "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-6"
              }
              capituloAnime7={
                "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-7"
              }
              capituloAnime8={
                "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-8"
              }
              capituloAnime9={
                "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-9"
              }
              capituloAnime10={
                "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-10"
              }
              capituloAnime11={
                "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-11"
              }
              capituloAnime12={
                "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-12"
              }
              sec2={"sec"}
              sec3={"sec"}
              hrefSecuela={"youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e"}
              nombreSecuela={"Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e"}
              textoSecuela={"Precuela"}
            />
          }
        />
        <Route
          path="/spy-x-family"
          element={
            <Numero12
              tituloAnime={"Spy x Family "}
              descripcion={
                'Todo el mundo tiene una parte de sí mismo que no puede mostrar a nadie más. En un momento en que todas las naciones del mundo estaban involucradas en una feroz guerra de información que ocurría a puertas cerradas, Ostania y Westalis habían estado en un estado de guerra fría entre sí durante décadas. La División Enfocada en el Este (WISE) de los Servicios de Inteligencia de Westalis envía a su espía más talentoso, "Crepúsculo", en una misión ultrasecreta para investigar los movimientos de Donovan Desmond, el presidente del Partido de Unidad Nacional de Ostania, quien amenaza los esfuerzos de paz entre las dos naciones. Esta misión se conoce como "Operación Strix". Consiste en "armar una familia en una semana para infiltrarse en las reuniones sociales organizadas por la escuela de élite a la que asiste el hijo de Desmond". "Crepúsculo" asume la identidad del psiquiatra Loid Forger y comienza a buscar familiares. Pero Anya, la hija que adopta, resulta tener la capacidad de leer la mente de las personas, mientras que su esposa, Yor, ¡es una asesina! Dado que a cada uno le interesa mantener estos hechos ocultos, comienzan a vivir juntos mientras se ocultan sus verdaderas identidades. La paz mundial está ahora en manos de esta nueva familia mientras se embarcan en una aventura llena de sorpresas.'
              }
              anime={"Spy x Family "}
              tipo={"TV"}
              numeroEpisodios={"12"}
              estado={"Finalizado"}
              imagenAnime={"https://i.postimg.cc/FRXq1Dq5/spy-x-family.jpg"}
              nombreSecuela={"Spy x Family Temporada 2"}
              hrefSecuela={"/spy-x-family-2nd-temporada"}
              textoSecuela={"Secuela"}
              sec2={"sec"}
              sec3={"sec"}
              capituloAnime1={"/ver/spy-x-family-1"}
              capituloAnime2={"/ver/spy-x-family-2"}
              capituloAnime3={"/ver/spy-x-family-3"}
              capituloAnime4={"/ver/spy-x-family-4"}
              capituloAnime5={"/ver/spy-x-family-5"}
              capituloAnime6={"/ver/spy-x-family-6"}
              capituloAnime7={"/ver/spy-x-family-7"}
              capituloAnime8={"/ver/spy-x-family-8"}
              capituloAnime9={"/ver/spy-x-family-9"}
              capituloAnime10={"/ver/spy-x-family-10"}
              capituloAnime11={"/ver/spy-x-family-11"}
              capituloAnime12={"/ver/spy-x-family-12"}
            />
          }
        />
        <Route
          path="/date-a-live-IV"
          element={
            <Numero12
              tituloAnime={"Date a Live IV "}
              descripcion={"Cuarta temporada de Date A Live"}
              anime={"Date a Live IV "}
              tipo={"TV"}
              numeroEpisodios={"12"}
              estado={"Finalizado"}
              imagenAnime={"https://i.postimg.cc/1XJYCPzs/date-a-live-iv.jpg"}
              capituloAnime1={"/ver/date-a-live-IV-1"}
              capituloAnime2={"/ver/date-a-live-IV-2"}
              capituloAnime3={"/ver/date-a-live-IV-3"}
              capituloAnime4={"/ver/date-a-live-IV-4"}
              capituloAnime5={"/ver/date-a-live-IV-5"}
              capituloAnime6={"/ver/date-a-live-IV-6"}
              capituloAnime7={"/ver/date-a-live-IV-7"}
              capituloAnime8={"/ver/date-a-live-IV-8"}
              capituloAnime9={"/ver/date-a-live-IV-9"}
              capituloAnime10={"/ver/date-a-live-IV-10"}
              capituloAnime11={"/ver/date-a-live-IV-11"}
              capituloAnime12={"/ver/date-a-live-IV-12"}
              textoSecuela={"Precuela"}
              nombreSecuela={"Date A Live III"}
              hrefSecuela={"/date-a-live-III"}
              sec2={"sec"}
              sec3={"sec"}
            />
          }
        />
        <Route
          path="/tate-no-yuusha-no-naraigari-segunda-temporada"
          element={
            <Animes13
              tituloAnime={"Tate no Yuusha no Naraigari Segunda Temporada "}
              descripcion={
                'Naofumi Iwatani, un estudiante universitario ordinario, es convocado a otro mundo como uno de los Cuatro Héroes Cardinales: el "Héroe del Escudo". A pesar de las falsas acusaciones y una serie de desgracias, Naofumi unió fuerzas con sus queridas compañeras Raphtalia, Filo y Melty para proteger a las personas de las "Olas" de la Catástrofe. Con sus logros y la ayuda de la reina Melromarc, Naofumi recupera su honor y ahora posee un territorio. Se prepara para contrarrestar la próxima Ola. Sin embargo, se dice que la "Tortuga Espiritual", un monstruo que provocará un desastre sin precedentes, resucitó en el país del Reino de la Tortuga Espiritual, al este de Melromarc. A pedido de la Reina para someter a la Tortuga Espiritual, Naofumi se dirige al Reino de la Tortuga Espiritual, junto con su nuevo miembro del grupo, Lecia. Mientras las fuerzas aliadas se reúnen, Ost-Horai, concubina del Rey del Reino de las Tortugas Espirituales y regente del país, aparece ante Naofumi. Ella le informa a Naofumi de una persona que resucitó a la fuerza a la Tortuga Espiritual. ¿Naofumi someterá a la Tortuga Espiritual y llegará a la mente maestra? El Héroe del Escudo se levanta una vez más para proteger las cosas queridas para él.'
              }
              anime={"Tate no Yuusha no Naraigari Segunda Temporada "}
              tipo={"TV"}
              numeroEpisodios={"13"}
              estado={"Finalizado"}
              imagenAnime={
                "https://i.postimg.cc/bJR6r8kk/tate-no-yuusha-no-nariagari-season-2.jpg"
              }
              capituloAnime1={
                "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-1"
              }
              capituloAnime2={
                "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-2"
              }
              capituloAnime3={
                "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-3"
              }
              capituloAnime4={
                "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-4"
              }
              capituloAnime5={
                "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-5"
              }
              capituloAnime6={
                "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-6"
              }
              capituloAnime7={
                "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-7"
              }
              capituloAnime8={
                "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-8"
              }
              capituloAnime9={
                "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-9"
              }
              capituloAnime10={
                "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-10"
              }
              capituloAnime11={
                "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-11"
              }
              capituloAnime12={
                "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-12"
              }
              capituloAnime13={
                "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-13"
              }
              textoSecuela={"Precuela"}
              nombreSecuela={"Tate no Yuusha no Naraigari"}
              hrefSecuela={"/tate-no-yuusha-no-naraigari"}
              sec2={"sec"}
              sec3={"sec"}
            />
          }
        />
        <Route
          path="/tomodachi-game"
          element={
            <Numero12
              tituloAnime={"Tomodachi Game "}
              descripcion={
                'El estudiante de secundaria Katagiri Yuichi, que valora la amistad por encima de todo, disfruta de una vida plena con sus amigos cercanos Sawagiri Shiho, Mikasa Tenji, Shibe Makoto y Kokorogi Yutori. Sin embargo, después de un incidente en particular, se ven arrastrados a un juego de pago de deudas. La única manera de ganar el "Juego Tomodachi" es no dudar de sus amigos. Unidos por sólidas amistades, el juego debería haber sido fácil, pero... ¿Confiarán o traicionarán a sus preciosos amigos? ¡La verdadera naturaleza de la humanidad se expone en el último juego psicológico!'
              }
              anime={"Tomodachi Game "}
              tipo={"TV"}
              numeroEpisodios={"12"}
              estado={"Finalizado"}
              imagenAnime={"https://i.postimg.cc/JhNxYmTv/tomodachi-game.jpg"}
              capituloAnime1={"/ver/tomodachi-game-1"}
              capituloAnime2={"/ver/tomodachi-game-2"}
              capituloAnime3={"/ver/tomodachi-game-3"}
              capituloAnime4={"/ver/tomodachi-game-4"}
              capituloAnime5={"/ver/tomodachi-game-5"}
              capituloAnime6={"/ver/tomodachi-game-6"}
              capituloAnime7={"/ver/tomodachi-game-7"}
              capituloAnime8={"/ver/tomodachi-game-8"}
              capituloAnime9={"/ver/tomodachi-game-9"}
              capituloAnime10={"/ver/tomodachi-game-10"}
              capituloAnime11={"/ver/tomodachi-game-11"}
              capituloAnime12={"/ver/tomodachi-game-12"}
              sec1={"sec"}
              sec2={"sec"}
              sec3={"sec"}
            />
          }
        />
        <Route
          path="/baraou-no-souretsu"
          element={
            <Capitulos24
              tituloAnime={"Baraou no Souretsu "}
              descripcion={
                "Richard, el ambicioso tercer hijo de la Casa de York, cree que está maldito, condenado desde el nacimiento hasta la oscuridad eterna. Pero, ¿es realmente el destino lo que lo pone en el camino de la destrucción personal? ¿O sus propios anhelos atormentados? Basada en un primer borrador de Ricardo III de Shakespeare, esta oscura fantasía encuentra al hombre que podría ser rey entre mundos, entre clases, entre el bien y el mal."
              }
              anime={"Baraou no Souretsu "}
              tipo={"TV"}
              numeroEpisodios={"24"}
              estado={"Finalizado"}
              imagenAnime={
                "https://i.postimg.cc/3wYmRGBf/baraou-no-souretsu.jpg"
              }
              sec1={"sec"}
              sec2={"sec"}
              sec3={"sec"}
              capituloAnime1={"/ver/baraou-no-souretsu-1"}
              capituloAnime2={"/ver/baraou-no-souretsu-2"}
              capituloAnime3={"/ver/baraou-no-souretsu-3"}
              capituloAnime4={"/ver/baraou-no-souretsu-4"}
              capituloAnime5={"/ver/baraou-no-souretsu-5"}
              capituloAnime6={"/ver/baraou-no-souretsu-6"}
              capituloAnime7={"/ver/baraou-no-souretsu-7"}
              capituloAnime8={"/ver/baraou-no-souretsu-8"}
              capituloAnime9={"/ver/baraou-no-souretsu-9"}
              capituloAnime10={"/ver/baraou-no-souretsu-10"}
              capituloAnime11={"/ver/baraou-no-souretsu-11"}
              capituloAnime12={"/ver/baraou-no-souretsu-12"}
              capituloAnime13={"/ver/baraou-no-souretsu-13"}
              capituloAnime14={"/ver/baraou-no-souretsu-14"}
              capituloAnime15={"/ver/baraou-no-souretsu-15"}
              capituloAnime16={"/ver/baraou-no-souretsu-16"}
              capituloAnime17={"/ver/baraou-no-souretsu-17"}
              capituloAnime18={"/ver/baraou-no-souretsu-18"}
              capituloAnime19={"/ver/baraou-no-souretsu-19"}
              capituloAnime20={"/ver/baraou-no-souretsu-20"}
              capituloAnime21={"/ver/baraou-no-souretsu-21"}
              capituloAnime22={"/ver/baraou-no-souretsu-22"}
              capituloAnime23={"/ver/baraou-no-souretsu-23"}
              capituloAnime24={"/ver/baraou-no-souretsu-24"}
            />
          }
        />
        <Route
          path="/karakuri-circus"
          element={
            <Capitulos12
              tituloAnime={"Karakuri Circus "}
              descripcion={
                "El protagonista, Masaru, acaba de heredar una gran fortuna tras la muerte de su padre. Sin embargo, la gente está tratando de ponerlo en sus manos por cualquier medio necesario, incluso si eso significa matarlo. Narumi ayuda a Masaru a ser secuestrado después de luchar contra figuras extrañas. Descubre que no son humanos, sino títeres de madera con una fuerza increíble. Después de una dura lucha, Narumi se ve obligado a admitir que no es un oponente para ellos; y justo cuando empieza a pensar que Masaru será capturado, Shirogane, el vigilante de Masaru, llega de Francia con un arma, el títere Arlequin. Aquí comienza la historia de Karakuri Circus."
              }
              anime={"Karakuri Circus "}
              tipo={"TV"}
              numeroEpisodios={"36"}
              estado={"Finalizado"}
              imagenAnime={"https://i.postimg.cc/VNf018f3/karakuri-circus.jpg"}
              capituloAnime1={"/ver/karakuri-circus-1"}
              capituloAnime2={"/ver/karakuri-circus-2"}
              capituloAnime3={"/ver/karakuri-circus-3"}
              capituloAnime4={"/ver/karakuri-circus-4"}
              capituloAnime5={"/ver/karakuri-circus-5"}
              capituloAnime6={"/ver/karakuri-circus-6"}
              capituloAnime7={"/ver/karakuri-circus-7"}
              capituloAnime8={"/ver/karakuri-circus-8"}
              capituloAnime9={"/ver/karakuri-circus-9"}
              capituloAnime10={"/ver/karakuri-circus-10"}
              capituloAnime11={"/ver/karakuri-circus-11"}
              capituloAnime12={"/ver/karakuri-circus-12"}
              capituloAnime13={"/ver/karakuri-circus-13"}
              capituloAnime14={"/ver/karakuri-circus-14"}
              capituloAnime15={"/ver/karakuri-circus-15"}
              capituloAnime16={"/ver/karakuri-circus-16"}
              capituloAnime17={"/ver/karakuri-circus-17"}
              capituloAnime18={"/ver/karakuri-circus-18"}
              capituloAnime19={"/ver/karakuri-circus-19"}
              capituloAnime20={"/ver/karakuri-circus-20"}
              capituloAnime21={"/ver/karakuri-circus-21"}
              capituloAnime22={"/ver/karakuri-circus-22"}
              capituloAnime23={"/ver/karakuri-circus-23"}
              capituloAnime24={"/ver/karakuri-circus-24"}
              capituloAnime25={"/ver/karakuri-circus-25"}
              capituloAnime26={"/ver/karakuri-circus-26"}
              capituloAnime27={"/ver/karakuri-circus-27"}
              capituloAnime28={"/ver/karakuri-circus-28"}
              capituloAnime29={"/ver/karakuri-circus-29"}
              capituloAnime30={"/ver/karakuri-circus-30"}
              capituloAnime31={"/ver/karakuri-circus-31"}
              capituloAnime32={"/ver/karakuri-circus-32"}
              capituloAnime33={"/ver/karakuri-circus-33"}
              capituloAnime34={"/ver/karakuri-circus-34"}
              capituloAnime35={"/ver/karakuri-circus-35"}
              capituloAnime36={"/ver/karakuri-circus-36"}
              li37={"li"}
              li38={"li"}
              li39={"li"}
              li40={"li"}
              li41={"li"}
              li42={"li"}
              li43={"li"}
              li44={"li"}
              li45={"li"}
              li46={"li"}
              li47={"li"}
              li48={"li"}
              li49={"li"}
              li50={"li"}
              li51={"li"}
              li52={"li"}
              li53={"li"}
              li54={"li"}
              li55={"li"}
              li56={"li"}
              li70={"li"}
              li69={"li"}
              li68={"li"}
              li67={"li"}
              li66={"li"}
              li65={"li"}
              li64={"li"}
              li63={"li"}
              li62={"li"}
              li61={"li"}
              li60={"li"}
              li59={"li"}
              li58={"li"}
              li57={"li"}
              sec1={"sec"}
              sec2={"sec"}
              sec3={"sec"}
            />
          }
        />
        <Route
          path="/extreme-hearts"
          element={
            <Numero12
              tituloAnime={"Extreme Hearts "}
              sec2={"sec"}
              sec3={"sec"}
              sec1={"sec"}
              descripcion={
                'La historia está ambientada en el futuro, no mucho después del día de hoy. Los hiperdeportes, que usan equipos extremos como elementos de apoyo, se han convertido en competencias de pasatiempos populares entre niños y adultos. Hiyori Hayama es una cantante de secundaria que no tiene nada que ver con Hyper Sports, pero cierto incidente pone en marcha la historia: "Esta es la historia de cómo conocimos a nuestros mejores amigos".'
              }
              anime={"Extreme Hearts "}
              tipo={"TV"}
              numeroEpisodios={"12"}
              estado={"Finalizado"}
              imagenAnime={"https://i.postimg.cc/jdf89GSH/extreme-hearts.jpg"}
              capituloAnime1={"/ver/extreme-hearts-1"}
              capituloAnime2={"/ver/extreme-hearts-2"}
              capituloAnime3={"/ver/extreme-hearts-3"}
              capituloAnime4={"/ver/extreme-hearts-4"}
              capituloAnime5={"/ver/extreme-hearts-5"}
              capituloAnime6={"/ver/extreme-hearts-6"}
              capituloAnime7={"/ver/extreme-hearts-7"}
              capituloAnime8={"/ver/extreme-hearts-8"}
              capituloAnime9={"/ver/extreme-hearts-9"}
              capituloAnime10={"/ver/extreme-hearts-10"}
              capituloAnime11={"/ver/extreme-hearts-11"}
              capituloAnime12={"/ver/extreme-hearts-12"}
            />
          }
        />
        <Route
          path="/golden-time"
          exact
          element={
            <Capitulos24
              tituloAnime={"Golden Time "}
              sec2={"sec"}
              sec3={"sec"}
              sec1={"sec"}
              descripcion={
                'Tada Banri, es un estudiante de nuevo ingreso en una escuela privada de derecho en Tokio, después de la ceremonia de apertura, él estaba completamente perdido tratando de encontrar el camino hacia el salón de orientación para los de primer año. En ese momento, se encuentra con un estudiante de primer año, que también estaba perdido, Mitsuo Yanagisawa. De alguna manera llegaron al lugar donde se dirigían, pero de repente frente a los dos aparece una chica hermosa que sostiene un ramo de rosas. La chica golpeó a Mitsuo en la cara con el ramo. "felicidades, estudiante de nuevo ingreso", fue todo lo que dijo, y luego se fue. La mujer que golpeo a Mitsuo se trataba de su amiga de la infancia, Kaga Kouko. Cuando eran niños se habían prometido a casarse cuando algún día llegarán a cumplir sus sueños. Con el fin de escapar de ella, Mitsuo había salido secretamente y tomado el examen de este colegio privado muy conocido.'
              }
              imagenAnime="https://i.postimg.cc/Wpq3BnLm/golden-time.jpg"
              tipo={"TV"}
              numeroEpisodios={"24"}
              estado={"Finalizado"}
              anime={"Golden Time "}
              capituloAnime1={"/ver/golden-time-1"}
              capituloAnime2={"/ver/golden-time-2"}
              capituloAnime3={"/ver/golden-time-3"}
              capituloAnime4={"/ver/golden-time-4"}
              capituloAnime5={"/ver/golden-time-5"}
              capituloAnime6={"/ver/golden-time-6"}
              capituloAnime7={"/ver/golden-time-7"}
              capituloAnime8={"/ver/golden-time-8"}
              capituloAnime9={"/ver/golden-time-9"}
              capituloAnime10={"/ver/golden-time-10"}
              capituloAnime11={"/ver/golden-time-11"}
              capituloAnime12={"/ver/golden-time-12"}
              capituloAnime13={"/ver/golden-time-13"}
              capituloAnime14={"/ver/golden-time-14"}
              capituloAnime15={"/ver/golden-time-15"}
              capituloAnime16={"/ver/golden-time-16"}
              capituloAnime17={"/ver/golden-time-17"}
              capituloAnime18={"/ver/golden-time-18"}
              capituloAnime19={"/ver/golden-time-19"}
              capituloAnime20={"/ver/golden-time-20"}
              capituloAnime21={"/ver/golden-time-21"}
              capituloAnime22={"/ver/golden-time-22"}
              capituloAnime23={"/ver/golden-time-23"}
              capituloAnime24={"/ver/golden-time-24"}
            />
          }
        />
        <Route
          path="/fullmetal-alchemist-brotherhood"
          exact
          element={
            <Capitulos12
              tituloAnime={"Fullmetal Alchemist Brotherhood "}
              sec2={"sec"}
              sec3={"sec"}
              sec1={"sec"}
              li70={"li"}
              li69={"li"}
              li68={"li"}
              li67={"li"}
              li66={"li"}
              descripcion={
                'Los hermanos Elric emprenden un viaje tras haber perdido parte de su cuerpo mientras intentaban resucitar a su madre. Siendo ambos huérfanos de madre y con su padre en paradero desconocido, cuyo oscuro pasado es tan misterioso como él mismo, el hermano mayor, Edward Elric, decide convertirse en alquimista nacional para poder remediar el pecado que cometieron; pues la transmutación humana está vedada para los humanos y no hay perdón por aquellos que han visto "la puerta". "Si quieres obtener algo, debes sacrificar otra cosa que posea el mismo valor a cambio"; esta es la ley de los estados equivalentes, nada se gana sin ningún sacrificio.'
              }
              imagenAnime="https://i.postimg.cc/TwzRdzMV/fullmetal-alchemist-brotherhood.jpg"
              tipo={"TV"}
              numeroEpisodios={"64"}
              estado={"Finalizado"}
              anime={"Fullmetal Alchemist Brotherhood "}
              capituloAnime1={"/ver/fullmetal-alchemist-brotherhood-1"}
              capituloAnime2={"/ver/fullmetal-alchemist-brotherhood-2"}
              capituloAnime3={"/ver/fullmetal-alchemist-brotherhood-3"}
              capituloAnime4={"/ver/fullmetal-alchemist-brotherhood-4"}
              capituloAnime5={"/ver/fullmetal-alchemist-brotherhood-5"}
              capituloAnime6={"/ver/fullmetal-alchemist-brotherhood-6"}
              capituloAnime7={"/ver/fullmetal-alchemist-brotherhood-7"}
              capituloAnime8={"/ver/fullmetal-alchemist-brotherhood-8"}
              capituloAnime9={"/ver/fullmetal-alchemist-brotherhood-9"}
              capituloAnime10={"/ver/fullmetal-alchemist-brotherhood-10"}
              capituloAnime11={"/ver/fullmetal-alchemist-brotherhood-11"}
              capituloAnime12={"/ver/fullmetal-alchemist-brotherhood-12"}
              capituloAnime13={"/ver/fullmetal-alchemist-brotherhood-13"}
              capituloAnime14={"/ver/fullmetal-alchemist-brotherhood-14"}
              capituloAnime15={"/ver/fullmetal-alchemist-brotherhood-15"}
              capituloAnime16={"/ver/fullmetal-alchemist-brotherhood-16"}
              capituloAnime17={"/ver/fullmetal-alchemist-brotherhood-17"}
              capituloAnime18={"/ver/fullmetal-alchemist-brotherhood-18"}
              capituloAnime19={"/ver/fullmetal-alchemist-brotherhood-19"}
              capituloAnime20={"/ver/fullmetal-alchemist-brotherhood-20"}
              capituloAnime21={"/ver/fullmetal-alchemist-brotherhood-21"}
              capituloAnime22={"/ver/fullmetal-alchemist-brotherhood-22"}
              capituloAnime23={"/ver/fullmetal-alchemist-brotherhood-23"}
              capituloAnime24={"/ver/fullmetal-alchemist-brotherhood-24"}
              capituloAnime26={"/ver/fullmetal-alchemist-brotherhood-26"}
              capituloAnime25={"/ver/fullmetal-alchemist-brotherhood-25"}
              capituloAnime27={"/ver/fullmetal-alchemist-brotherhood-27"}
              capituloAnime28={"/ver/fullmetal-alchemist-brotherhood-28"}
              capituloAnime29={"/ver/fullmetal-alchemist-brotherhood-29"}
              capituloAnime30={"/ver/fullmetal-alchemist-brotherhood-30"}
              capituloAnime34={"/ver/fullmetal-alchemist-brotherhood-34"}
              capituloAnime33={"/ver/fullmetal-alchemist-brotherhood-33"}
              capituloAnime32={"/ver/fullmetal-alchemist-brotherhood-32"}
              capituloAnime31={"/ver/fullmetal-alchemist-brotherhood-31"}
              capituloAnime35={"/ver/fullmetal-alchemist-brotherhood-35"}
              capituloAnime36={"/ver/fullmetal-alchemist-brotherhood-36"}
              capituloAnime37={"/ver/fullmetal-alchemist-brotherhood-37"}
              capituloAnime38={"/ver/fullmetal-alchemist-brotherhood-38"}
              capituloAnime42={"/ver/fullmetal-alchemist-brotherhood-42"}
              capituloAnime41={"/ver/fullmetal-alchemist-brotherhood-41"}
              capituloAnime40={"/ver/fullmetal-alchemist-brotherhood-40"}
              capituloAnime39={"/ver/fullmetal-alchemist-brotherhood-39"}
              capituloAnime43={"/ver/fullmetal-alchemist-brotherhood-43"}
              capituloAnime44={"/ver/fullmetal-alchemist-brotherhood-44"}
              capituloAnime45={"/ver/fullmetal-alchemist-brotherhood-45"}
              capituloAnime46={"/ver/fullmetal-alchemist-brotherhood-46"}
              capituloAnime50={"/ver/fullmetal-alchemist-brotherhood-50"}
              capituloAnime49={"/ver/fullmetal-alchemist-brotherhood-49"}
              capituloAnime48={"/ver/fullmetal-alchemist-brotherhood-48"}
              capituloAnime47={"/ver/fullmetal-alchemist-brotherhood-47"}
              capituloAnime51={"/ver/fullmetal-alchemist-brotherhood-51"}
              capituloAnime52={"/ver/fullmetal-alchemist-brotherhood-52"}
              capituloAnime53={"/ver/fullmetal-alchemist-brotherhood-53"}
              capituloAnime54={"/ver/fullmetal-alchemist-brotherhood-54"}
              capituloAnime55={"/ver/fullmetal-alchemist-brotherhood-55"}
              capituloAnime56={"/ver/fullmetal-alchemist-brotherhood-56"}
              capituloAnime57={"/ver/fullmetal-alchemist-brotherhood-57"}
              capituloAnime58={"/ver/fullmetal-alchemist-brotherhood-58"}
              capituloAnime59={"/ver/fullmetal-alchemist-brotherhood-59"}
              capituloAnime60={"/ver/fullmetal-alchemist-brotherhood-60"}
              capituloAnime61={"/ver/fullmetal-alchemist-brotherhood-61"}
              capituloAnime62={"/ver/fullmetal-alchemist-brotherhood-62"}
              capituloAnime63={"/ver/fullmetal-alchemist-brotherhood-63"}
              capituloAnime64={"/ver/fullmetal-alchemist-brotherhood-64"}
            />
          }
        />
        <Route
          path="/muhyo-to-rouji-no-mahouritsu-soudan-jimusho"
          element={
            <Numero12
              tituloAnime={"Muhyo to Rouji no Mahouritsu Soudan Jimusho "}
              hrefSecuela={
                "/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-segunda-temporada"
              }
              textoSecuela={"Secuela"}
              nombreSecuela={
                "Muhyo to Roujii no Mahouritsu Soudan Jimusho Segunda Temporada"
              }
              sec2={"sec"}
              sec3={"sec"}
              descripcion={
                '¿Alguna vez fuiste víctima de una posesión espiritual? ¿Hay algún fantasma que quieras hacer desaparecer de tu casa... o hacerlo arder eternamente en el infierno? Si respondiste "sí" a cualquiera de estas preguntas o a cualquier otra similar, entonces necesitas a Muhyo y Roji, expertos en las leyes de lo sobrenatural. Hacer justicia con los espíritus es su especialidad.'
              }
              imagenAnime="https://i.postimg.cc/7ZkfMTR3/muhyo-to-rouji-no-mahouritsu-soudan-jimusho.jpg"
              tipo={"TV"}
              numeroEpisodios={"12"}
              estado={"Finalizado"}
              anime={"Muhyo to Rouji no Mahouritsu Soudan Jimusho "}
              capituloAnime1={
                "/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-1"
              }
              capituloAnime2={
                "/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-2"
              }
              capituloAnime3={
                "/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-3"
              }
              capituloAnime4={
                "/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-4"
              }
              capituloAnime5={
                "/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-5"
              }
              capituloAnime6={
                "/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-6"
              }
              capituloAnime7={
                "/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-7"
              }
              capituloAnime8={
                "/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-8"
              }
              capituloAnime9={
                "/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-9"
              }
              capituloAnime10={
                "/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-10"
              }
              capituloAnime11={
                "/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-11"
              }
              capituloAnime12={
                "/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-12"
              }
            />
          }
        />
        <Route
          path="/gensou-sangokushi-tenge-reishink"
          element={
            <Numero12
              tituloAnime={"Gensou Sangokushi Tengen Reishink "}
              sec2={"sec"}
              sec3={"sec"}
              sec1={"sec"}
              descripcion={
                "La historia se sitúa en la antigua China durante la era de los Tres Reinos, cuando varios poderosos señores de la guerra comenzaron a maniobrar para conquistar los reinos conocidos. Después de que fuera aniquilada en circunstancias imprevistas, la 6ª Unidad se ha vuelto a reunir con miembros de pasados diversos y problemáticos: el líder y practicante del sello Ōki, el purificador de espíritus Shunkyō, Teiken y el cazador de demonios Shōrei."
              }
              imagenAnime="https://i.postimg.cc/ry0g0vWB/gensou-sangokushi-tengen-reishinki.jpg"
              tipo={"TV"}
              numeroEpisodios={"12"}
              estado={"Finalizado"}
              anime={"Gensou Sangokushi Tengen Reishink "}
              capituloAnime1={"/ver/gensou-sangokushi-tengen-reishink-1"}
              capituloAnime2={"/ver/gensou-sangokushi-tengen-reishink-2"}
              capituloAnime3={"/ver/gensou-sangokushi-tengen-reishink-3"}
              capituloAnime4={"/ver/gensou-sangokushi-tengen-reishink-4"}
              capituloAnime5={"/ver/gensou-sangokushi-tengen-reishink-5"}
              capituloAnime6={"/ver/gensou-sangokushi-tengen-reishink-6"}
              capituloAnime7={"/ver/gensou-sangokushi-tengen-reishink-7"}
              capituloAnime8={"/ver/gensou-sangokushi-tengen-reishink-8"}
              capituloAnime9={"/ver/gensou-sangokushi-tengen-reishink-9"}
              capituloAnime10={"/ver/gensou-sangokushi-tengen-reishink-10"}
              capituloAnime11={"/ver/gensou-sangokushi-tengen-reishink-11"}
              capituloAnime12={"/ver/gensou-sangokushi-tengen-reishink-12"}
            />
          }
        />
        <Route
          path="/tate-no-yuusha-no-naraigari"
          element={
            <Capitulos12
              tituloAnime={"Tate no Yuusha no Naraigari"}
              sec2={"sec"}
              sec3={"sec"}
              li26={"li"}
              li27={"li"}
              li28={"li"}
              li29={"li"}
              li30={"li"}
              li31={"li"}
              li32={"li"}
              li33={"li"}
              li34={"li"}
              li35={"li"}
              li36={"li"}
              li37={"li"}
              li38={"li"}
              li39={"li"}
              li40={"li"}
              li41={"li"}
              li42={"li"}
              li43={"li"}
              li44={"li"}
              li45={"li"}
              li46={"li"}
              li47={"li"}
              li48={"li"}
              li49={"li"}
              li50={"li"}
              li51={"li"}
              li52={"li"}
              li53={"li"}
              li54={"li"}
              li55={"li"}
              li56={"li"}
              li70={"li"}
              li69={"li"}
              li68={"li"}
              li67={"li"}
              li66={"li"}
              li65={"li"}
              li64={"li"}
              li63={"li"}
              li62={"li"}
              li61={"li"}
              li60={"li"}
              li59={"li"}
              li58={"li"}
              li57={"li"}
              descripcion={
                'Iwatani Naofumi fue invocado en un mundo paralelo junto a otras tres personas para convertirse en los héroes de ese mundo. Cada uno de los héroes fue equipado con su propia arma legendaria cuando fueron convocados. Naofumi recibió el Escudo, el único equipo defensivo, mientras que los otros recibieron armas capaces de atacar. Debido a la falta de carisma y experiencia, Naofumi terminó con una sola compañera de equipo. Desafortunadamente, en su segundo día, fue traicionado, asaltado y acusado falsamente de violación por dicha compañera. Al ser rechazado por todos, desde el rey hasta los campesinos, sus pensamientos se llenaron de odio y resentimiento. Así, comienza su destino en un mundo paralelo. Intenta subir de nivel, a pesar de sus débiles habilidades de ataque. Al conocer a un traficante de esclavos llamado Berocas, este le muestra a una niña llamada Raphtalia y decide comprarla. Y así Naofumi con ayuda de Raphtalia y otras compañeras con las que se topara en su camino, deberán enfrentar una serie de catástrofes llamadas "olas".'
              }
              anime={"Tate no Yuusha no Naraigari"}
              tipo={"TV"}
              numeroEpisodios={"25"}
              estado={"Finalizado"}
              imagenAnime={
                "https://i.postimg.cc/rwJ92cXr/tate-no-yuusha-no-nariagari.jpg"
              }
              capituloAnime1={"/ver/tate-no-yuusha-no-naraigari-1"}
              capituloAnime2={"/ver/tate-no-yuusha-no-naraigari-2"}
              capituloAnime3={"/ver/tate-no-yuusha-no-naraigari-3"}
              capituloAnime4={"/ver/tate-no-yuusha-no-naraigari-4"}
              capituloAnime5={"/ver/tate-no-yuusha-no-naraigari-5"}
              capituloAnime6={"/ver/tate-no-yuusha-no-naraigari-6"}
              capituloAnime7={"/ver/tate-no-yuusha-no-naraigari-7"}
              capituloAnime8={"/ver/tate-no-yuusha-no-naraigari-8"}
              capituloAnime9={"/ver/tate-no-yuusha-no-naraigari-9"}
              capituloAnime10={"/ver/tate-no-yuusha-no-naraigari-10"}
              capituloAnime11={"/ver/tate-no-yuusha-no-naraigari-11"}
              capituloAnime12={"/ver/tate-no-yuusha-no-naraigari-12"}
              capituloAnime13={"/ver/tate-no-yuusha-no-naraigari-13"}
              capituloAnime14={"/ver/tate-no-yuusha-no-naraigari-14"}
              capituloAnime15={"/ver/tate-no-yuusha-no-naraigari-15"}
              capituloAnime16={"/ver/tate-no-yuusha-no-naraigari-16"}
              capituloAnime17={"/ver/tate-no-yuusha-no-naraigari-17"}
              capituloAnime18={"/ver/tate-no-yuusha-no-naraigari-18"}
              capituloAnime19={"/ver/tate-no-yuusha-no-naraigari-19"}
              capituloAnime20={"/ver/tate-no-yuusha-no-naraigari-20"}
              capituloAnime21={"/ver/tate-no-yuusha-no-naraigari-21"}
              capituloAnime22={"/ver/tate-no-yuusha-no-naraigari-22"}
              capituloAnime23={"/ver/tate-no-yuusha-no-naraigari-23"}
              capituloAnime24={"/ver/tate-no-yuusha-no-naraigari-24"}
              capituloAnime25={"/ver/tate-no-yuusha-no-naraigari-25"}
              hrefSecuela={"/tate-no-yuusha-no-naraigari-segunda-temporada"}
              textoSecuela={"Precuela"}
              nombreSecuela={"Tate no Yuusha no Naraigari Temporada 2"}
            />
          }
        />
        <Route
          path="/tribe-nine"
          exact
          element={
            <Numero12
              tituloAnime={"Tribe Nine"}
              sec2={"sec"}
              sec3={"sec"}
              sec1={"sec"}
              descripcion={
                "Haru Shirogane es una persona de mente débil que es constantemente intimidada, mientras que Taiga ha viajado desde el otro lado del mar con la esperanza de convertirse en el hombre más fuerte del mundo. Una noche, los dos se encuentran con Shun Kamiya, el jugador más fuerte de XB (Extreme Baseball), y líder de la Tribu Minato. Cuando se encuentran, cada una de las tribus dispersas por Neo-Tokio está a punto de enfrentarse a una gran amenaza. Bajo las órdenes del Rey de Neo-Tokio, “Houtenshin”, el Chiyoda Try, dirigido por el misterioso Ojiro Otori, ha comenzado a tomar el control de todas las tribus del país. Sus malvadas garras están a punto de llegar a la Tribu Minato…"
              }
              imagenAnime="https://i.postimg.cc/wxmcTDYH/tribe-nine.jpg"
              tipo={"TV"}
              numeroEpisodios={"12"}
              estado={"Finalizado"}
              anime={"Tribe Nine "}
              capituloAnime1={"/ver/tribe-nine-1"}
              capituloAnime2={"/ver/tribe-nine-2"}
              capituloAnime3={"/ver/tribe-nine-3"}
              capituloAnime4={"/ver/tribe-nine-4"}
              capituloAnime5={"/ver/tribe-nine-5"}
              capituloAnime6={"/ver/tribe-nine-6"}
              capituloAnime7={"/ver/tribe-nine-7"}
              capituloAnime8={"/ver/tribe-nine-8"}
              capituloAnime9={"/ver/tribe-nine-9"}
              capituloAnime10={"/ver/tribe-nine-10"}
              capituloAnime11={"/ver/tribe-nine-11"}
              capituloAnime12={"/ver/tribe-nine-12"}
            />
          }
        />
        <Route
          path="/sabikui-bisco"
          element={
            <Numero12
              anime={"Sabikui Bisco"}
              tipo={"TV"}
              estado={"Finalizado"}
              numeroEpisodios={"12"}
              descripcion={
                'Su poderoso arco perfora el óxido de la destrucción para salvar a las personas que ama. Una emocionante historia de acción y aventuras. Ambientado en un futuro Japón, donde todo se ha oxidado y el "Viento Óxido" amenaza con acabar con la humanidad. El mundo entero es ahora un desierto, y el protagonista, Bisco Akaboshi, usa su arco y hongos especiales como un "protector de hongos", un noble ladrón que causa el caos en todo Japón. Para salvar a su maestro moribundo, Bisco emprende un viaje en busca de un hongo curativo especial llamado "Rust Eater". En Imihama conoce a Milo Nekoyanagi, su nuevo compañero, y se embarca en una loca aventura. El Desierto de Hierro de Saitama se interpone en su camino, junto con una ciudad hecha con los restos de una de las armas que destruyeron la civilización, y una línea de metro abandonada donde viven pulpos gigantes ... Con el genio de Milo y las flechas de Bisco, están listos para enfrentar cualquier peligro! Pero luego se enfrentan a los malvados planes de un malvado gobernador de prefectura...'
              }
              imagenAnime={"https://i.postimg.cc/YCshWyQP/sabikui-bisco.jpg"}
              sec1="disable"
              sec2="disable"
              sec3="disable"
              capituloAnime1={"/sabikui-bisco-1"}
              capituloAnime2={"/sabikui-bisco-2"}
              capituloAnime3={"/sabikui-bisco-3"}
              capituloAnime4={"/sabikui-bisco-4"}
              capituloAnime5={"/sabikui-bisco-5"}
              capituloAnime6={"/sabikui-bisco-6"}
              capituloAnime7={"/sabikui-bisco-7"}
              capituloAnime8={"/sabikui-bisco-8"}
              capituloAnime9={"/sabikui-bisco-9"}
              capituloAnime10={"/sabikui-bisco-10"}
              capituloAnime11={"/sabikui-bisco-11"}
              capituloAnime12={"/sabikui-bisco-12"}
            />
          }
        />
        <Route
          path="/koroshi-ai"
          element={
            <Numero12
              anime={"Koroshi Ai"}
              tipo={"TV"}
              estado={"Finalizado"}
              numeroEpisodios={"12"}
              descripcion={
                'Dos asesinos se enfrentan en un determinado "lugar de trabajo". El genial cazarrecompensas Chateau y el misterioso y poderoso Ryang-Ha. Chateau y Ryang-Ha se vuelven enemigos después de esta pelea, al menos, deberían haberlo hecho, pero por alguna razón Ryang-Ha toma simpatía por Chateau y comienza a seguirla. Poco a poco, Chateau desarrolla una asociación cooperativa con Ryang-Ha, que la atrapa en la lucha contra las organizaciones que lo persiguen. Además, esa batalla también está relacionada con su pasado. ¿Por qué Ryang-Ha se acercó a Chateau? ¿Cuál es el pasado secreto de Chateau? Dos asesinos que no coinciden tejen un thriller retorcido "Assassin X Assassin". Los extraños engranajes del destino comienzan a moverse.'
              }
              imagenAnime={"https://i.postimg.cc/DyhsvDcd/koroshi-ai.jpg"}
              sec1="disable"
              sec2="disable"
              sec3="disable"
              capituloAnime1={"/koroshi-ai-1"}
              capituloAnime2={"/koroshi-ai-2"}
              capituloAnime3={"/koroshi-ai-3"}
              capituloAnime4={"/koroshi-ai-4"}
              capituloAnime5={"/koroshi-ai-5"}
              capituloAnime6={"/koroshi-ai-6"}
              capituloAnime7={"/koroshi-ai-7"}
              capituloAnime8={"/koroshi-ai-8"}
              capituloAnime9={"/koroshi-ai-9"}
              capituloAnime10={"/koroshi-ai-10"}
              capituloAnime11={"/koroshi-ai-11"}
              capituloAnime12={"/koroshi-ai-12"}
            />
          }
        />

        <Route
          path="/dolls-frontline"
          element={
            <Numero12
              anime={"Dolls Frontline"}
              tipo={"TV"}
              estado={"Finalizado"}
              numeroEpisodios={"12"}
              descripcion={
                "La historia del juego se desarrolla en una línea de tiempo alternativa en el futuro cercano de la Tierra en la década de 2060. Las secuelas de un accidente militar que resultó en una enfermedad generalizada, así como la reciente conclusión de una guerra nuclear descuidada, despoblaron masivamente el planeta, hicieron inhabitable gran parte de la superficie y redujeron a las naciones que alguna vez fueron grandes a sombras de lo que eran antes. Los androides utilizados para el trabajo y el combate se han convertido en una faceta importante de la vida, y los androides fácilmente replicables y desechables conocidos como Tactical Dolls (T-Dolls) son utilizados por compañías militares privadas en la primera línea de numerosas guerras de incendios forestales. En el juego, el jugador asume el papel de un nuevo comandante en un PMC, ordenando a los T-Dolls que luchen contra una nueva amenaza de IA."
              }
              imagenAnime={"https://i.postimg.cc/05n5SBsC/dolls-frontline.jpg"}
              sec1="disable"
              sec2="disable"
              sec3="disable"
              capituloAnime1={"/dolls-frontline-1"}
              capituloAnime2={"/dolls-frontline-2"}
              capituloAnime3={"/dolls-frontline-3"}
              capituloAnime4={"/dolls-frontline-4"}
              capituloAnime5={"/dolls-frontline-5"}
              capituloAnime6={"/dolls-frontline-6"}
              capituloAnime7={"/dolls-frontline-7"}
              capituloAnime8={"/dolls-frontline-8"}
              capituloAnime9={"/dolls-frontline-9"}
              capituloAnime10={"/dolls-frontline-10"}
              capituloAnime11={"/dolls-frontline-11"}
              capituloAnime12={"/dolls-frontline-12"}
            />
          }
        />
        <Route
          path="/zuihou-de-zhaohuan-shi-the-last-summoner"
          element={
            <Numero12
              anime={"Zuihou de Zhaohuan Shi The Last Summoner"}
              tipo={"TV"}
              estado={"Finalizado"}
              numeroEpisodios={"12"}
              descripcion={
                "Todo tiene su propio espíritu, y aquellos que pueden invocar esos espíritus son los Invocadores. Pueden invocar a la tierra, a los muertos, las estrellas, a las almas... Las leyendas de los Invocadores siempre han formado parte de la cara oculta de la historia. A lo largo de los años se han librado innumerables guerras entre los Invocadores humanos por el origen de los espíritus de todos los seres: la diosa Pandora. Con el tiempo, los Invocadores se han dividido en dos facciones: los Guardianes y los Destructores. Incapaces de ver a los humanos perecer en un baño de sangre, los líderes de ambos bandos sellaron a Pandora y pusieron fin a la edad de oro de los Invocadores... Varios siglos después, Ah Jie, quien se esfuerza por convertirse en el rey del ramen, convoca sin querer a la diosa Dora y de repente se ve inmerso en el mundo de los Invocadores. Durante su viaje se encuentra con otros Invocadores y unen fuerzas con los Guardianes para enfrentarse a sus mayores enemigos: los Destructores."
              }
              imagenAnime={
                "https://i.postimg.cc/pLhnqHVv/zuihou-de-zhaohuan-shi-the-last-summoner.jpg"
              }
              sec1="disable"
              sec2="disable"
              sec3="disable"
              capituloAnime1={"/zuihou-de-zhaohuan-shi-the-last-summoner-1"}
              capituloAnime2={"/zuihou-de-zhaohuan-shi-the-last-summoner-2"}
              capituloAnime3={"/zuihou-de-zhaohuan-shi-the-last-summoner-3"}
              capituloAnime4={"/zuihou-de-zhaohuan-shi-the-last-summoner-4"}
              capituloAnime5={"/zuihou-de-zhaohuan-shi-the-last-summoner-5"}
              capituloAnime6={"/zuihou-de-zhaohuan-shi-the-last-summoner-6"}
              capituloAnime7={"/zuihou-de-zhaohuan-shi-the-last-summoner-7"}
              capituloAnime8={"/zuihou-de-zhaohuan-shi-the-last-summoner-8"}
              capituloAnime9={"/zuihou-de-zhaohuan-shi-the-last-summoner-9"}
              capituloAnime10={"/zuihou-de-zhaohuan-shi-the-last-summoner-10"}
              capituloAnime11={"/zuihou-de-zhaohuan-shi-the-last-summoner-11"}
              capituloAnime12={"/zuihou-de-zhaohuan-shi-the-last-summoner-12"}
            />
          }
        />
        <Route
          path="/mahoutsukai-reimeiki"
          element={
            <Numero12
              anime={"Mahoutsukai Reimeiki"}
              tipo={"TV"}
              estado={"Finalizado"}
              numeroEpisodios={"12"}
              descripcion={
                'no puedo recordar ¿Quién soy? ¿Qué soy yo? Sevilla es un estudiante de una academia de magia que no recuerda nada de antes de unirse a la escuela. Sin entender por qué está allí, el tiempo que pasa en la academia se siente hueco y vacío. Y como no sabe trabajar duro, sus notas son siempre las más bajas de su año. Entonces, un día, el director de la escuela, Albus, ordena a Sevilla que participe en un peligroso entrenamiento especial. "Quiero que difundas el uso de la magia en un área donde se realizan cacerías de brujas". Solo han pasado unos años desde que terminó la guerra entre la iglesia y las brujas; el mundo aún no ha aceptado completamente a las brujas y su magia. Este es el amanecer de la era de la bruja. Esta es la historia de cómo un joven, un chico que no es nadie especial, y sus compañeros, todos con heridas en el corazón, parten y terminan encontrándose a sí mismos.'
              }
              imagenAnime={
                "https://i.postimg.cc/J7Yng22z/mahoutsukai-reimeiki.jpg"
              }
              sec1="disable"
              sec2="disable"
              sec3="disable"
              capituloAnime1={"/mahoutsukai-reimeiki-1"}
              capituloAnime2={"/mahoutsukai-reimeiki-2"}
              capituloAnime3={"/mahoutsukai-reimeiki-3"}
              capituloAnime4={"/mahoutsukai-reimeiki-4"}
              capituloAnime5={"/mahoutsukai-reimeiki-5"}
              capituloAnime6={"/mahoutsukai-reimeiki-6"}
              capituloAnime7={"/mahoutsukai-reimeiki-7"}
              capituloAnime8={"/mahoutsukai-reimeiki-8"}
              capituloAnime9={"/mahoutsukai-reimeiki-9"}
              capituloAnime10={"/mahoutsukai-reimeiki-10"}
              capituloAnime11={"/mahoutsukai-reimeiki-11"}
              capituloAnime12={"/mahoutsukai-reimeiki-12"}
            />
          }
        />
        <Route
          path="/shingeki-no-kyojin-temporada-final-parte-2"
          element={
            <Numero12
              anime={"shingeki no kyojin temporada final parte 2"}
              tipo={"TV"}
              estado={"Finalizado"}
              numeroEpisodios={"12"}
              descripcion={"Temporada final de SNK"}
              imagenAnime={
                "https://i.postimg.cc/Lsm2htbW/shingeki-no-kyojin-the-final-season-part-2.jpg"
              }
              sec2="disable"
              sec3="disable"
              hrefSecuela={"/shingeki-no-kyojin:-temporada-final"}
              nombreSecuela={"Shingeki no Kyojin: Temporada Final"}
              textoSecuela={"Precuela"}
              capituloAnime1={"/shingeki-no-kyojin-temporada-final-parte-2-1"}
              capituloAnime2={"/shingeki-no-kyojin-temporada-final-parte-2-2"}
              capituloAnime3={"/shingeki-no-kyojin-temporada-final-parte-2-3"}
              capituloAnime4={"/shingeki-no-kyojin-temporada-final-parte-2-4"}
              capituloAnime5={"/shingeki-no-kyojin-temporada-final-parte-2-5"}
              capituloAnime6={"/shingeki-no-kyojin-temporada-final-parte-2-6"}
              capituloAnime7={"/shingeki-no-kyojin-temporada-final-parte-2-7"}
              capituloAnime8={"/shingeki-no-kyojin-temporada-final-parte-2-8"}
              capituloAnime9={"/shingeki-no-kyojin-temporada-final-parte-2-9"}
              capituloAnime10={"/shingeki-no-kyojin-temporada-final-parte-2-10"}
              capituloAnime11={"/shingeki-no-kyojin-temporada-final-parte-2-11"}
              capituloAnime12={"/shingeki-no-kyojin-temporada-final-parte-2-12"}
            />
          }
        />
        <Route
          path="/aldnoah-zero-segunda-parte"
          element={
            <Numero12
              anime={"Aldnoah.Zero Part 2"}
              tipo={"TV"}
              estado={"Finalizado"}
              numeroEpisodios={"12"}
              descripcion={
                'La guerra entre los Terrans y el Vers Empire of Mars ha terminado, lo que permite a la humanidad disfrutar felizmente de sus vidas en un momento de paz. Sin embargo, diecinueve meses después, la princesa Vers hace una impactante declaración pública: "los terranos son una raza tonta que codicia los recursos, destruye la naturaleza y se dedica a la búsqueda del placer". Y así, para proteger su preciosa Tierra, llama a sus caballeros a tomar las armas, y la furiosa batalla entre las dos civilizaciones vuelve a encenderse.'
              }
              imagenAnime={
                "https://i.postimg.cc/zXdcTnvM/aldnoah-zero-part-2.jpg"
              }
              sec2="disable"
              sec3="disable"
              nombreSecuela={"Aldnoah Zero"}
              textoSecuela={"Precuela"}
              hrefSecuela={"/aldnoah-zero"}
              capituloAnime1={"/aldnoah-zero-segunda-parte-1"}
              capituloAnime2={"/aldnoah-zero-segunda-parte-2"}
              capituloAnime3={"/aldnoah-zero-segunda-parte-3"}
              capituloAnime4={"/aldnoah-zero-segunda-parte-4"}
              capituloAnime5={"/aldnoah-zero-segunda-parte-5"}
              capituloAnime6={"/aldnoah-zero-segunda-parte-6"}
              capituloAnime7={"/aldnoah-zero-segunda-parte-7"}
              capituloAnime8={"/aldnoah-zero-segunda-parte-8"}
              capituloAnime9={"/aldnoah-zero-segunda-parte-9"}
              capituloAnime10={"/aldnoah-zero-segunda-parte-10"}
              capituloAnime11={"/aldnoah-zero-segunda-parte-11"}
              capituloAnime12={"/aldnoah-zero-segunda-parte-12"}
            />
          }
        />
        <Route
          path="/shingeki-no-bahamut-genesis"
          element={
            <Numero12
              anime={"Shingeki no Bahamut: Genesis"}
              tipo={"TV"}
              estado={"Finalizado"}
              numeroEpisodios={"12"}
              descripcion={
                "Mistarcia es un mundo mágico donde humanos, dioses y demonios conviven juntos. En el pasado el lugar fue amenazado y casi destruido por un legendario dragón llamado Bahamut, fue cuando tanto dioses como humanos y demonios unieron fuerzas y sellaron el poder del dragón."
              }
              imagenAnime={
                "https://i.postimg.cc/gjx6QFy3/shingeki-no-bahamut-genesis.jpg"
              }
              sec2="disable"
              sec3="disable"
              nombreSecuela={"Shingeki no Bahamut: Virgin Soul"}
              textoSecuela={"Secuela"}
              hrefSecuela={"/shingeki-no-bahamut:-virgin-soul"}
              capituloAnime1={"/shingeki-no-bahamut-genesis-1"}
              capituloAnime2={"/shingeki-no-bahamut-genesis-2"}
              capituloAnime3={"/shingeki-no-bahamut-genesis-3"}
              capituloAnime4={"/shingeki-no-bahamut-genesis-4"}
              capituloAnime5={"/shingeki-no-bahamut-genesis-5"}
              capituloAnime6={"/shingeki-no-bahamut-genesis-6"}
              capituloAnime7={"/shingeki-no-bahamut-genesis-7"}
              capituloAnime8={"/shingeki-no-bahamut-genesis-8"}
              capituloAnime9={"/shingeki-no-bahamut-genesis-9"}
              capituloAnime10={"/shingeki-no-bahamut-genesis-10"}
              capituloAnime11={"/shingeki-no-bahamut-genesis-11"}
              capituloAnime12={"/shingeki-no-bahamut-genesis-12"}
            />
          }
        />
        <Route
          path="/shinka-no-mi-shiranai-uchi-ni-kachigumi-jinsei"
          element={
            <Numero12
              anime={"Shinka no Mi: Shiranai Uchi ni Kachigumi Jinsei"}
              tipo={"TV"}
              estado={"Finalizado"}
              numeroEpisodios={"12"}
              descripcion={
                'Seiichi Hiiragi es un joven desafortunado que es despreciado por sus compañeros porque lo consideran hogareño, regordete y maloliente. La suerte de Seiichi va de mal en peor cuando su clase es transportada a otro mundo, pero se encuentra solo en el desierto y perseguido por una gorila amorosa llamada Saria. Las desastrosas vidas de la improbable pareja toman un giro positivo después de ingerir el legendario "fruto de la evolución", y se produce una transformación inesperada ..'
              }
              imagenAnime={
                "https://i.postimg.cc/FRy9KP9w/shinka-no-mi-shiranai-uchi-ni-kachigumi-jinsei.jpg"
              }
              sec1="disable"
              sec2="disable"
              sec3="disable"
              capituloAnime1={
                "/shinka-no-mi-shiranai-uchi-ni-kachigumi-jinsei-1"
              }
              capituloAnime2={
                "/shinka-no-mi-shiranai-uchi-ni-kachigumi-jinsei-2"
              }
              capituloAnime3={
                "/shinka-no-mi-shiranai-uchi-ni-kachigumi-jinsei-3"
              }
              capituloAnime4={
                "/shinka-no-mi-shiranai-uchi-ni-kachigumi-jinsei-4"
              }
              capituloAnime5={
                "/shinka-no-mi-shiranai-uchi-ni-kachigumi-jinsei-5"
              }
              capituloAnime6={
                "/shinka-no-mi-shiranai-uchi-ni-kachigumi-jinsei-6"
              }
              capituloAnime7={
                "/shinka-no-mi-shiranai-uchi-ni-kachigumi-jinsei-7"
              }
              capituloAnime8={
                "/shinka-no-mi-shiranai-uchi-ni-kachigumi-jinsei-8"
              }
              capituloAnime9={
                "/shinka-no-mi-shiranai-uchi-ni-kachigumi-jinsei-9"
              }
              capituloAnime10={
                "/shinka-no-mi-shiranai-uchi-ni-kachigumi-jinsei-10"
              }
              capituloAnime11={
                "/shinka-no-mi-shiranai-uchi-ni-kachigumi-jinsei-11"
              }
              capituloAnime12={
                "/shinka-no-mi-shiranai-uchi-ni-kachigumi-jinsei-12"
              }
            />
          }
        />
        <Route
          path="/kono-yuusha-ga-ore-tueee-kuse-ni-shinchou-sugiru"
          element={
            <Numero12
              anime={"Kono Yuusha ga Ore Tueee Kuse ni Shinchou Sugiru"}
              tipo={"TV"}
              estado={"Finalizado"}
              numeroEpisodios={"12"}
              descripcion={
                "La historia comienza cuando la diosa Rista convoca a un héroe para ayudarla en su modo de juego de videojuegos. El héroe, Seiya Ryuuguuin, tiene el estatus de tramposo, pero es ridículamente cauteloso. Él hace cosas como comprar tres juegos de armadura (uno para usar, uno de repuesto y otro mas de repuesto). Más allá de mantener una cantidad absurda de existencias de artículos, permanece en su habitación para el entrenamiento muscular hasta que alcanza el nivel máximo y lucha contra slimes a toda potencia solo para mantenerse en el lado seguro."
              }
              imagenAnime={
                "https://i.postimg.cc/4y4Txs2h/kono-yuusha-ga-ore-tueee-kuse-ni-shinchou-sugiru.jpg"
              }
              sec1="disable"
              sec2="disable"
              sec3="disable"
              capituloAnime1={
                "/kono-yuusha-ga-ore-tueee-kuse-ni-shinchou-sugiru-1"
              }
              capituloAnime2={
                "/kono-yuusha-ga-ore-tueee-kuse-ni-shinchou-sugiru-2"
              }
              capituloAnime3={
                "/kono-yuusha-ga-ore-tueee-kuse-ni-shinchou-sugiru-3"
              }
              capituloAnime4={
                "/kono-yuusha-ga-ore-tueee-kuse-ni-shinchou-sugiru-4"
              }
              capituloAnime5={
                "/kono-yuusha-ga-ore-tueee-kuse-ni-shinchou-sugiru-5"
              }
              capituloAnime6={
                "/kono-yuusha-ga-ore-tueee-kuse-ni-shinchou-sugiru-6"
              }
              capituloAnime7={
                "/kono-yuusha-ga-ore-tueee-kuse-ni-shinchou-sugiru-7"
              }
              capituloAnime8={
                "/kono-yuusha-ga-ore-tueee-kuse-ni-shinchou-sugiru-8"
              }
              capituloAnime9={
                "/kono-yuusha-ga-ore-tueee-kuse-ni-shinchou-sugiru-9"
              }
              capituloAnime10={
                "/kono-yuusha-ga-ore-tueee-kuse-ni-shinchou-sugiru-10"
              }
              capituloAnime11={
                "/kono-yuusha-ga-ore-tueee-kuse-ni-shinchou-sugiru-11"
              }
              capituloAnime12={
                "/kono-yuusha-ga-ore-tueee-kuse-ni-shinchou-sugiru-12"
              }
            />
          }
        />
        <Route
          path="/gaikotsu-kishi-sama-tadaima-isekai-e-odekakechuu"
          element={
            <Numero12
              anime={"Gaikotsu Kishi-sama, Tadaima Isekai e Odekakechuu"}
              tipo={"TV"}
              estado={"Finalizado"}
              numeroEpisodios={"12"}
              descripcion={
                "Cuando Arc despierta, descubre que ha sido transportado a otro mundo en el cuerpo del personaje que interpretaba en un MMO. Pareciendo una armadura por fuera y un esqueleto por dentro, es el Caballero Esqueleto. Si se descubre su identidad, podría ser confundido con un monstruo y convertirse en un objetivo. Arc decide pasar su tiempo como mercenario para no llamar la atención. Sin embargo, él no es el tipo de hombre que puede quedarse de brazos cruzados cuando es testigo de actos malvados frente a sus ojos. ¡Esta serie de fantasía isekai sobre la búsqueda involuntaria de Skeleton Knight para hacer del mundo un lugar mejor ha llegado!"
              }
              imagenAnime={
                "https://i.postimg.cc/m2x5jby3/gaikotsu-kishi-sama-tadaima-isekai-e-odekakechuu.jpg"
              }
              sec1="disable"
              sec2="disable"
              sec3="disable"
              capituloAnime1={
                "/gaikotsu-kishi-sama-tadaima-isekai-e-odekakechuu-1"
              }
              capituloAnime2={
                "/gaikotsu-kishi-sama-tadaima-isekai-e-odekakechuu-2"
              }
              capituloAnime3={
                "/gaikotsu-kishi-sama-tadaima-isekai-e-odekakechuu-3"
              }
              capituloAnime4={
                "/gaikotsu-kishi-sama-tadaima-isekai-e-odekakechuu-4"
              }
              capituloAnime5={
                "/gaikotsu-kishi-sama-tadaima-isekai-e-odekakechuu-5"
              }
              capituloAnime6={
                "/gaikotsu-kishi-sama-tadaima-isekai-e-odekakechuu-6"
              }
              capituloAnime7={
                "/gaikotsu-kishi-sama-tadaima-isekai-e-odekakechuu-7"
              }
              capituloAnime8={
                "/gaikotsu-kishi-sama-tadaima-isekai-e-odekakechuu-8"
              }
              capituloAnime9={
                "/gaikotsu-kishi-sama-tadaima-isekai-e-odekakechuu-9"
              }
              capituloAnime10={
                "/gaikotsu-kishi-sama-tadaima-isekai-e-odekakechuu-10"
              }
              capituloAnime11={
                "/gaikotsu-kishi-sama-tadaima-isekai-e-odekakechuu-11"
              }
              capituloAnime12={
                "/gaikotsu-kishi-sama-tadaima-isekai-e-odekakechuu-12"
              }
            />
          }
        />
        <Route
          path="/tokyo-ghoul"
          element={
            <Numero12
              anime={"Tokyo Ghoul"}
              estado={"Finalizado"}
              numeroEpisodios={"12"}
              tipo={"TV"}
              sec2={"disable"}
              sec3={"disable"}
              imagenAnime={"https://i.postimg.cc/9fmLNb0C/tokyo-ghoul.jpg"}
              descripcion={
                "Extraños asesinatos se están sucediendo uno tras otro en Tokyo. Debido a las pruebas encontradas en las escenas, la policía concluye que los ataques son obra de ghouls que se comen a las personas. Kaneki y Hide, dos compañeros de clase, llegan a la conclusión de que si nadie ha visto nunca a esos necrófagos es porque toman la apariencia de seres humanos para ocultarse. Poco sabían entonces de que su teoría sería más cierta de lo que pensaban cuando Kaneki es herido de gravedad por un monstruo y comienza a atraerle cada vez más la carne humana…"
              }
              nombreSecuela={"Tokyo Ghoul √A"}
              textoSecuela={"Secuela"}
              hrefSecuela={"/tokyo-ghoul-2"}
              capituloAnime1={"/ver/tokyo-ghoul-1"}
              capituloAnime2={"/ver/tokyo-ghoul-2"}
              capituloAnime3={"/ver/tokyo-ghoul-3"}
              capituloAnime4={"/ver/tokyo-ghoul-4"}
              capituloAnime5={"/ver/tokyo-ghoul-5"}
              capituloAnime6={"/ver/tokyo-ghoul-6"}
              capituloAnime7={"/ver/tokyo-ghoul-7"}
              capituloAnime8={"/ver/tokyo-ghoul-8"}
              capituloAnime9={"/ver/tokyo-ghoul-9"}
              capituloAnime10={"/ver/tokyo-ghoul-10"}
              capituloAnime11={"/ver/tokyo-ghoul-11"}
              capituloAnime12={"/ver/tokyo-ghoul-12"}
            />
          }
        />
        <Route
          path="/id-invaded"
          element={
            <Animes13
              anime={"ID:Invaded"}
              tipo={"TV"}
              estado={"Finalizado"}
              numeroEpisodios={"13"}
              sec1="disable"
              sec2="disable"
              sec3="disable"
              descripcion={
                "Situado en un mundo virtual, Sakaido, es un detective que busca resolver el horroroso misterio detrás del asesinato de Kaeru, una joven. Pero resolver este caso no será como nada que ha visto antes. Con el mundo retorciéndose a su alrededor, ¿podrá llegar al fondo del asunto?              "
              }
              imagenAnime={"https://i.postimg.cc/BvbxKVtL/id-invaded.jpg"}
              capituloAnime1={"/ver/id-invaded-1"}
              capituloAnime2={"/ver/id-invaded-2"}
              capituloAnime3={"/ver/id-invaded-3"}
              capituloAnime4={"/ver/id-invaded-4"}
              capituloAnime5={"/ver/id-invaded-5"}
              capituloAnime6={"/ver/id-invaded-6"}
              capituloAnime7={"/ver/id-invaded-7"}
              capituloAnime8={"/ver/id-invaded-8"}
              capituloAnime9={"/ver/id-invaded-9"}
              capituloAnime10={"/ver/id-invaded-10"}
              capituloAnime11={"/ver/id-invaded-11"}
              capituloAnime12={"/ver/id-invaded-12"}
              capituloAnime13={"/ver/id-invaded-13"}
            />
          }
        />
        <Route
          path=""
          element={
            <Numero12
              anime={""}
              tipo={"TV"}
              estado={""}
              numeroEpisodios={"12"}
              descripcion={""}
              imagenAnime={""}
              genero1={""}
              genero2={""}
              genero3={""}
              hrefGenre1={""}
              hrefGenre2={""}
              hrefGenre3={""}
              genre1={"button is-small is-orange is-outlined is-roundedX"}
              genre2={"button is-small is-orange is-outlined is-roundedX"}
              genre3={"button is-small is-orange is-outlined is-roundedX"}
              genre4={"button is-small is-orange is-outlined is-roundedX"}
              capituloAnime1={""}
              capituloAnime2={""}
              capituloAnime3={""}
              capituloAnime4={""}
              capituloAnime5={""}
              capituloAnime6={""}
              capituloAnime7={""}
              capituloAnime8={""}
              capituloAnime9={""}
              capituloAnime10={""}
              capituloAnime11={""}
              capituloAnime12={""}
            />
          }
        />

        {/* EN EMISION CAPITULOS*/}
        <Route
          path="/isekai-ojisan"
          element={
            <Emision12
              descripcion={
                'Otoño 2017... Atropellado por un camión cuando tenía 17 años, el tío de Takafumi despierta repentinamente de un coma que duró 17 años. Cuando Takafumi lo visita en el hospital, ve a su tío murmurando tonterías y declarando que ha regresado de otro mundo llamado "GRAN-BAHAMAL". ...Claramente, su tío se ha vuelto loco. Takafumi no tiene palabras, pero su tío demuestra sus afirmaciones de estar en otra dimensión usando algo de magia. Decidiendo usar los poderes de su tío para ganarse la vida, y sin otros parientes a los que llamar, Takafumi lo acoge y comienzan a compartir un apartamento juntos. Mientras vive con su tío, Takafumi se entera de sus fantásticas aventuras y su amor ilimitado por los videojuegos de SEGA. Pero a veces, las experiencias solitarias y crueles de su tío llenan a Takafumi de alegría y tristeza. ¡Dos hombres de diferentes generaciones trabajan arduamente para ser creadores de contenido de video en esta nueva y emocionante comedia de otro mundo ambientada en un rincón de un complejo de apartamentos!'
              }
              anime={"Isekai Ojisan"}
              imagenAnime={"https://i.postimg.cc/Gpr6zMLL/isekai-ojisan.jpg"}
              tituloAnime={"Isekai Ojisan"}
              sec1={"disable"}
              sec2={"disable"}
              sec3={"disable"}
              tipo={"TV"}
              estado={"En Emisión"}
              numeroEpisodios={"7"}
              Fecha={"Jueves 24 de Noviembre"}
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
              li8={"disable"}
              li9={"disable"}
              li10={"disable"}
              li11={"disable"}
              li12={"disable"}
              li13={"disable"}
            />
          }
        />
        <Route
          path=""
          element={
            <Emision12
              descripcion={""}
              anime={""}
              imagenAnime={""}
              tituloAnime={""}
              genero1={""}
              genero2={""}
              genero3={""}
              sec1={"disable"}
              sec2={"disable"}
              sec3={"disable"}
              hrefGenre1={"/generos[]="}
              hrefGenre2={"/generos[]="}
              hrefGenre3={"/generos[]="}
              genre1={"button is-small is-orange is-outlined is-roundedX"}
              genre2={"button is-small is-orange is-outlined is-roundedX"}
              genre3={"button is-small is-orange is-outlined is-roundedX"}
              genre4={"disable"}
              genre5={"disable"}
              tipo={"TV"}
              estado={"En Emisión"}
              numeroEpisodios={""}
              Fecha={""}
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
              li8={"disable"}
              li9={"disable"}
              li10={"disable"}
              li11={"disable"}
              li12={"disable"}
              li13={"disable"}
            />
          }
        />
        <Route
          path=""
          element={
            <Emision12
              descripcion={""}
              anime={""}
              imagenAnime={""}
              tituloAnime={""}
              genero1={""}
              genero2={""}
              genero3={""}
              sec1={"disable"}
              sec2={"disable"}
              sec3={"disable"}
              hrefGenre1={"/generos[]="}
              hrefGenre2={"/generos[]="}
              hrefGenre3={"/generos[]="}
              genre1={"button is-small is-orange is-outlined is-roundedX"}
              genre2={"button is-small is-orange is-outlined is-roundedX"}
              genre3={"button is-small is-orange is-outlined is-roundedX"}
              genre4={"disable"}
              genre5={"disable"}
              tipo={"TV"}
              estado={"En Emisión"}
              numeroEpisodios={""}
              Fecha={""}
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
              li8={"disable"}
              li9={"disable"}
              li10={"disable"}
              li11={"disable"}
              li12={"disable"}
              li13={"disable"}
            />
          }
        />

        <Route
          path="/mob-psycho-100-III"
          element={
            <Emision12
              descripcion={"Tercera temporada de Mob Psycho 100"}
              anime={"Mob Psycho 100 III"}
              imagenAnime={
                "https://i.postimg.cc/zX4rwSHv/mob-psycho-100-iii.jpg"
              }
              tituloAnime={"Mob Psycho 100 III"}
              nombreSecuela={"Mob Psycho 100 II"}
              hrefSecuela={"/mob-psycho-100-II"}
              textoSecuela={"Precuela"}
              sec2={"disable"}
              sec3={"disable"}
              tipo={"TV"}
              estado={"En Emisión"}
              numeroEpisodios={"9"}
              Fecha={"Miercoles 7 de Diciembre"}
              capituloAnime1={"/ver/mob-psycho-100-III-1"}
              capituloAnime2={"/ver/mob-psycho-100-III-2"}
              capituloAnime3={"/ver/mob-psycho-100-III-3"}
              capituloAnime4={"/ver/mob-psycho-100-III-4"}
              capituloAnime5={"/ver/mob-psycho-100-III-5"}
              capituloAnime6={"/ver/mob-psycho-100-III-6"}
              capituloAnime7={"/ver/mob-psycho-100-III-7"}
              capituloAnime8={"/ver/mob-psycho-100-III-8"}
              capituloAnime9={"/ver/mob-psycho-100-III-9"}
              capituloAnime10={"/ver/mob-psycho-100-III-10"}
              capituloAnime11={"/ver/mob-psycho-100-III-11"}
              capituloAnime12={"/ver/mob-psycho-100-III-12"}
              li10={"disable"}
              li11={"disable"}
              li12={"disable"}
              li13={"disable"}
            />
          }
        />

        <Route
          path="/spy-x-family-2nd-temporada"
          element={
            <Emision12
              tituloAnime={"Spy x Family 2nd Temporada"}
              imagenAnime={
                "https://i.postimg.cc/RFxhPx33/spy-x-family-cour-2.jpg"
              }
              descripcion={"Segunda Temporada de spy x family"}
              anime={"Spy x Family 2nd Temporada"}
              tipo={"TV"}
              sec2={"disable"}
              sec3={"disable"}
              estado={"En Emisión"}
              numeroEpisodios={"10"}
              hrefSecuela="/spy-x-family"
              nombreSecuela={"SPY x FAMILY"}
              textoSecuela={"Precuela"}
              Fecha={"Sábado 10 de Diciembre"}
              li11={"disable"}
              li12={"disable"}
              li13={"disable"}
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
            />
          }
        />
        <Route
          path="/tokyo-ghoul-radic-a"
          element={
            <Numero12
              tituloAnime={"Tokyo Ghoul √A"}
              anime={"Tokyo Ghoul √A"}
              imagenAnime="https://i.postimg.cc/rwLn5MLd/tokyo-ghoul-radic-a.jpg"
              descripcion={"Segunda temporada de Tokyo Ghoul."}
              nombreSecuela={"Tokyo Ghoul"}
              nombreSecuela2={"Tokyo Ghoul: Pinto"}
              nombreSecuela3={"Tokyo Ghoul:re"}
              hrefSecuela={"/tokyo-ghoul"}
              hrefSecuela2={"/tokyo-ghoul-pinto"}
              hrefSecuela3={"/tokyo-ghoul:-re"}
              textoSecuela={"Precuela"}
              textoSecuela2={"Historia Principal"}
              textoSecuela3={"Secuela"}
              capituloAnime1={"/ver/tokyo-ghoul-radic-a-1"}
              capituloAnime2={"/ver/tokyo-ghoul-radic-a-2"}
              capituloAnime3={"/ver/tokyo-ghoul-radic-a-3"}
              capituloAnime4={"/ver/tokyo-ghoul-radic-a-4"}
              capituloAnime5={"/ver/tokyo-ghoul-radic-a-5"}
              capituloAnime6={"/ver/tokyo-ghoul-radic-a-6"}
              capituloAnime7={"/ver/tokyo-ghoul-radic-a-7"}
              capituloAnime8={"/ver/tokyo-ghoul-radic-a-8"}
              capituloAnime9={"/ver/tokyo-ghoul-radic-a-9"}
              capituloAnime10={"/ver/tokyo-ghoul-radic-a-10"}
              capituloAnime11={"/ver/tokyo-ghoul-radic-a-11"}
              capituloAnime12={"/ver/tokyo-ghoul-radic-a-12"}
            />
          }
        />
        <Route
          path="/mob-psycho-100-II"
          element={
            <Animes13
              tituloAnime={"Mob Psycho 100 II"}
              imagenAnime={
                "https://i.postimg.cc/vZj4CS2s/mob-psycho-100-ii.jpg"
              }
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
          path="/mob-psycho-100"
          element={
            <Animes13
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
          path="/overlord-II"
          element={
            <Animes13
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
          path="/overlord"
          element={
            <Animes13
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
          path="/overlord-III"
          element={
            <Animes13
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
            <Animes13
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
            <Emision12
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
              estado={"En emision"}
              numeroEpisodios={"10"}
              Fecha="Lunes 19 de Diciembre"
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
              li11="disable"
              li12="disable"
              li13="disable"
            />
          }
        />
        <Route
          path="/violet-evergarden"
          element={
            <Capitulos24
              tituloAnime={"Violet Evergarden"}
              imagenAnime={
                "https://i.postimg.cc/1R7hshSb/violet-evergarden.jpg"
              }
              descripcion={
                "Violet Evergarden es una chica que no conoce otra cosa que la cruel guerra: es una soldado que, bajo el mando de su comandante, es capaz de cumplir cualquier orden. Sin embargo, una vez termina la guerra, Violet se ve sin futuro ni hogar en una sociedad que no es capaz de comprender. Será entonces cuando un viejo amigo de su comandante, Claudia Hodgins, aparezca para ofrecerle trabajo en su oficina de correos. A partir de ese momento, Violet se convertirá en una Auto Memory Dolls escribiendo cartas."
              }
              anime={"Violet Evergarden"}
              tipo={"TV"}
              sec1={"disable"}
              sec2="disable"
              sec3={"disable"}
              estado={"Finalizado"}
              numeroEpisodios={"14"}
              capituloAnime1={"/ver/violet-evergarden-1"}
              capituloAnime2={"/ver/violet-evergarden-2"}
              capituloAnime3={"/ver/violet-evergarden-3"}
              capituloAnime4={"/ver/violet-evergarden-4"}
              capituloAnime5={"/ver/violet-evergarden-5"}
              capituloAnime6={"/ver/violet-evergarden-6"}
              capituloAnime7={"/ver/violet-evergarden-7"}
              capituloAnime8={"/ver/violet-evergarden-8"}
              capituloAnime9={"/ver/violet-evergarden-9"}
              capituloAnime10={"/ver/violet-evergarden-10"}
              capituloAnime11={"/ver/violet-evergarden-11"}
              capituloAnime12={"/ver/violet-evergarden-12"}
              capituloAnime13={"/ver/violet-evergarden-13"}
              capituloAnime14={"/ver/violet-evergarden-14"}
              li15={"disable"}
              li16={"disable"}
              li17={"disable"}
              li18={"disable"}
              li19={"disable"}
              li20={"disable"}
              li21={"disable"}
              li22={"disable"}
              li23={"disable"}
              li24={"disable"}
            />
          }
        />
        {/* Pages */}
        <Route path="/emisiones" element={<EmisionesPage1 />} />

        <Route path="/animes%20year[]=2022&page=2" element={<Page10 />} />
        <Route path="/animes%20type[]=ova" element={<Page10 />} />
        {/* Animes */}
        <Route path="/animes%20page=10" element={<Page10 />} />
        <Route path="/animes%20page=9" element={<Page9 />} />
        <Route path="/animes%20page=8" element={<Page8 />} />
        <Route path="/animes%20page=7" element={<Page7 />} />
        <Route path="/animes%20page=6" element={<Page6 />} />
        <Route path="/animes%20page=5" element={<Page5 />} />
        <Route path="/animes%20page=4" element={<Page4 />} />
        <Route path="/animes%20page=3" element={<Page3 />} />
        <Route path="/animes%20page=2" element={<Page2 />} />
        <Route path="/animes" element={<Page1 />} />
        <Route path="/policy-comments" element={<Policy />} />
        <Route path="*" element={<NoExiste />} />
      </Routes>
    </div>
  );
}
export default App;
