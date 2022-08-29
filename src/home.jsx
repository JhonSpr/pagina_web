
import { Route, Routes } from "react-router-dom";
import { Componente1 } from "./Componentes/Componente1";
import { Capitulos12 } from "./Componentes/Componente2";
import { Filter } from "./Componentes/DropDown";
import { EnEmision } from "./Componentes/enEmision";
import { Inicio } from "./Componentes/Inicio";
import { PerfilPaginaMenu } from "./Componentes/perfil";


function App () {

  return(
    <div>
     <Routes>
      {/* Inicio */}
     <Route path="/" element={<Inicio

      img1="https://www.animefenix.com/cdn/animes/cover/61d5e31f8b785/gensou-sangokushi-tengen-reishinki.png" 
      img2="https://www.animefenix.com/cdn/animes/cover/5e444cd3919fa/tate-no-yuusha-no-nariagari.jpg" 
      img3="https://www.animefenix.com/cdn/animes/cover/61d5e15f2bb7b/tribe-nine.jpg" img4="https://www.animefenix.com/cdn/animes/cover/61d5e7d13b599/koroshi-ai.jpg" 
      img5="https://www.animefenix.com/cdn/animes/cover/61d5e2254d6c2/sabikui-bisco.jpg" img6="https://www.animefenix.com/cdn/animes/cover/61d5e08d99019/sasaki-to-miyano.jpg" 
      img7="https://img1.ak.crunchyroll.com/i/spire4/3025f2a7a0017b257753a208b55068481514330222_main.jpg" img8="https://www.animefenix.com/cdn/animes/cover/6205d3e32689f/toaru-majutsu-no-index.jpg" 
      img9="https://www.animefenix.com/cdn/animes/cover/61d5dd5629b71/dolls-frontline.jpg" img10="https://www.animefenix.com/cdn/animes/cover/61be3b0f8c216/saiyuki-reload-zeroin.jpg"
      img11="https://www.animefenix.com/cdn/animes/cover/5d69f2b45ac8a/violet-evergarden.jpg" img12="https://www.animefenix.com/cdn/animes/cover/62b38fc442857/shadows-house-2nd-season.jpg" 
      img13="https://www.animefenix.com/cdn/animes/cover/62b392ddc06ee/orient-2nd-cour.jpg" img14="https://www.animefenix.com/cdn/animes/cover/62b3883db4847/isekai-ojisan.jpg" 
      img15="https://www.animefenix.com/cdn/animes/cover/62b3854093b93/overlord-iv.jpg" img16="https://www.animefenix.com/cdn/animes/cover/62b37fcac4bd9/tensei-kenja-no-isekai-life-dai-2-no-shokugyou-wo-ete-sekai-saikyou-ni-narimashita.jpg" 
      img17="https://www.animefenix.com/cdn/animes/cover/628261b2c0949/vampire-in-the-garden.jpg" img18="https://www.animefenix.com/cdn/animes/cover/627841868ee88/kuroshitsuji-book-of-murder.jpg" 
      img19="https://www.animefenix.com/cdn/animes/cover/624c70de1804b/zuihou-de-zhaohuan-shi-the-last-summoner.png" img20="https://www.animefenix.com/cdn/animes/cover/62448993a5267/kingdom-4th-season.jpg" 
      img21="https://www.animefenix.com/cdn/animes/cover/624483a92e3a8/mahoutsukai-reimeiki.jpg" img22="https://www.animefenix.com/cdn/animes/cover/6244848bdfdc6/tiger-and-bunny-2.jpg" 
      img23 ="https://www.animefenix.com/cdn/animes/cover/620ec001eb85a/toaru-majutsu-no-index-iii.jpg" img24="https://www.animefenix.com/cdn/animes/cover/61be3c43e2252/shingeki-no-kyojin-the-final-season-part-2.jpg" 
      tv="TV" emision="En Emision"
      year1="2022" year2="2019" year3="2022" year4="2022" year5="2022" year6="2022" year7="2018" year8="2008"
      year9="2022" year10="2022" year11="2018" year12="2022" year13="2022" year14="2022" year15="2022" year16="2022"
      year17="2022" year18="2015" year19="2022" year20="2022" year21="2022" year22="2022" year23="2018" year24="2022"

      href1="/gensou-sanokushi-tengen-reishink" href2="/tate-no-yuusha-no-naraigari" href3="/tribe-nine" href4="/koroshi-ai" href5="/sabikui-bisco" href6="/sasaki-to-miyano" href7="/ito-junji:-collection" 
      href8="/toaru-majutsu-no-index" href9="/dolls-frontline" href10="/saiyoku-reload-zeroin" href11="/violet-evergarden" href12="/shadows-house-segunda-temporada" href13="/orient-segunda-temporada" 
      href14="/isekai-ojisan" href15="/overlord-IV" href16="/tensei-kenja-no-isekai-life-dai-2-no-shokugyou-wo-ete-sekai-saikyou-ni-narimashita" href17="/vampire-in-the-garden" href18="/kuroshitsuji-book-of-murder" 
      href19="/zuihou-de-zhaohuan-shi-the-last-summoner" href20="/kingdom-cuarta-temporada" href21="/mahoutsukai-reimeiki" href22="/tiger-and-bunny-2" href23="/toaru-majustu-no-index-III" href24="/shingeki-no-kyojin-temporada-final-parte-2"

      anime1="Gensou Sangokushi Tengen Reishink" anime2="Tate no Yuusha no Naraigari" anime3="Tribe Nine" anime4="Koroshi Ai" anime5="Sabikui Bisco" anime6="Sasaki to Miyano" anime7="Ito Junji: Collection" 
      anime8="Toaru majustu no Index" anime9="Dolls Frontline" anime10="Saiyoki Reload Zeroin" anime11="Violet Evergarden" anime12="Shadows House Temporada 2" anime13="Orient Temporada 2" 
      anime14="Isekai Ojisan" anime15="Overlord IV" anime16="Tensei Kenja no Isekai Life ~Dai-2 no Shokugyou wo Ete, Sekai Saikyou ni Narimashita" anime17="Vampire in the Garden" anime18="Kuroshitsuji Book of Murder" 
      anime19="Ziuhou de Zhaohuan Shi the Last Summoner" anime20="Kingdom Temporada 4" anime21="Mahoutsukai Reimeiki" anime22="Tiger and Bunny 2" anime23="Toaru Majustu no Index III" anime24="Shingeki no Kyojin Temporada Final Parte 2" 

      alt1="Gensou Sangokushi Tengen Reishink" alt2="Tate no Yuusha no Naraigar" alt3="Tribe Nine" alt4="Koroshi Ai" alt5="Sabikui Bisco" alt6="Sasaki to Miyano" alt7="Ito Junji: Collection" 
      alt8="Toaru majustu no Index" alt9="Dolls Frontline" alt10="Saiyoki Reload Zeroin" alt11="Violet Evergarden" alt12="Shadows House Temporada 2" alt13="Orient Temporada 2" 
      alt14="Isekai Ojisan" alt15="Overlord IV" alt16="Tensei Kenja no Isekai Life ~Dai-2 no Shokugyou wo Ete, Sekai Saikyou ni Narimashita" alt17="Vampire in the Garden" alt18="Kuroshitsuji Book of Murder" 
      alt19="Ziuhou de Zhaohuan Shi the Last Summoner" alt20="Kingdom Temporada 4" alt21="Mahoutsukai Reimeik" alt22="Tiger and Bunny 2" alt23="Toaru Majustu no Index III" alt24="Shingeki no Kyojin Temporada Final Parte 2"

      classpag11="disable" classpag2="active"
      anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes"} pagSiguiente={"/animes-3"}
      pag1="/animes" pag2="/animes-2" pag3="/animes-3" pag4="/animes-4" pag5="/animes-5" pag6="/animes-6" pag7="/animes-7" pag8="/animes-8" pag9="/animes-9" pag10="/animes-10"
      primero="1" segundo="2" tercero="3" cuarto="4" quinto="5" sexto="6" septimo="7" octavo="8" noveno="9" decimo="10" 
      classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"tag is-success airing"} classEmision13={"disable"} classEmision14={"tag is-success airing"} classEmision15={"tag is-success airing"}
      classEmision16={"tag is-success airing"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"tag is-success airing"} classEmision21={"disable"} 
      classEmision22={"tag is-success airing"} classEmision23={"disable"} classEmision24={"disable"}
       />}/>
     
      <Route path="/perfil" element={<PerfilPaginaMenu/>}/>

     {/* capitulos Animes */}

      <Route path="/akudama-drive" exact element={<Capitulos12 tituloAnime={"Akudama Drive"} 
      genero1={""} genero2={""} genero3={""} genero4={""} genero5={""}
      genre1={"disable"} genre2={"disable"} 
      genre3={"button is-small is-orange is-outlined is-roundedX"} genre4={"disable"} genre5={"disable"}
      hrefGenre1={""} hrefGenre2={""} hrefGenre3={""} hrefGenre4={""} hrefGenre5={""}
      sec2={"sec"} sec3={"sec"} sec1={"sec"}
      li13={"li"} li14={"li"} li15={"li"} li16={"li"} li17={"li"} li18={"li"} li19={"li"} li20={"li"} li21={"li"} li22={"li"} li23={"li"} li24={"li"}
      li25={"li"} li26={"li"} li27={"li"} li28={"li"} li29={"li"} li30={"li"} li31={"li"} li32={"li"} li33={"li"} li34={"li"} li35={"li"} li36={"li"} li37={"li"} li38={"li"} li39={"li"} li40={"li"}
      descripcion={"Hace muchos años, una Gran Guerra Civil devastó Japón, dejando al país fragmentado en dos regiones: Kansai y Kanto. En Kansai, un grupo de seis Akudama llevan a cabo las misiones que les encomienda un misterioso gato negro, mientras evaden a la policía. Pero un viaje peligroso está a punto de desarrollarse cuando una niña civil se retuerce en el estilo de vida de los Akudama y es testigo de sus impulsos criminales."}
      imagenAnime="https://www.animefenix.com/cdn/animes/cover/5f7e65dc3eb65/akudama-drive.jpg" videoTrailer={"https://www.youtube-nocookie.com/embed/DTp7ZcUsqes?showinfo=0&rel=0&showsearch=0&autoplay=1&unmuted=1&modestbranding=1&fs=0"} tipo={"TV"} numeroEpisodios={"12"} 
      estado={"Finalizado"} 
      anime={"Akudama Drive "} 
      capituloAnime1={"/ver/akudama-drive-1"} capituloAnime2={"/ver/akudama-drive-2"} capituloAnime3={"/ver/akudama-drive-3"} capituloAnime4={"/ver/akudama-drive-4"} 
      capituloAnime5={"/ver/akudama-drive-5"} capituloAnime6={"/ver/akudama-drive-6"} capituloAnime7={"/ver/akudama-drive-"} capituloAnime8={"/ver/akudama-drive-8"} 
      capituloAnime9={"/ver/akudama-drive-9"} capituloAnime10={"/ver/akudama-drive-10"} capituloAnime11={"/ver/akudama-drive-11"} capituloAnime12={"/ver/akudama-drive-12"}  
      />}/>
      
      <Route path="/hanyo-no-yashahime-ni-no-shou" element={<Capitulos12 tituloAnime={"Hanyo no Yashahime ni no Shou"}
      genero1={""} genero2={""} genero3={""} genero4={""} genero5={""}
      genre1={"disable"} genre2={"disable"} 
      genre3={"button is-small is-orange is-outlined is-roundedX"} genre4={"disable"} genre5={"disable"}
      hrefGenre1={""} hrefGenre2={""} hrefGenre3={""} hrefGenre4={""} hrefGenre5={""}
      sec2={"sec"} sec3={"sec"} sec1={"sec"}
      accion={""} fantasia={""} juegos={""} terror={""}
      li25={"li"} li26={"li"} li27={"li"} li28={"li"} li29={"li"} li30={"li"} li31={"li"} li32={"li"} li33={"li"} li34={"li"} li35={"li"} li36={"li"} li37={"li"} li38={"li"} li39={"li"} li40={"li"}
      descripcion={"¡Las hijas de Sesshomaru e Inuyasha se lanzan en una aventura que trasciende en el tiempo! En el Japón Feudal, las gemelas mitad demonio Towa y Setsuna son separadas durante un incendio forestal. Mientras busca desesperadamente a su hermana menor, Towa se encuentra un misterioso túnel que la transporta al Japón moderno, en donde es encontrada y puesta al cuidado del hermano de Kagome Higurashi, Sota y su familia. Diez años después, el túnel que conecta las dos eras es abierto de nuevo, permitiendo a Towa volver a reunirse con Setsuna, quien ahora se ha convertido en una Asesina de Youkais en conjunto con Kohaku. Pero lo peor es que Setsuna parece haber perdido sus recuerdos y ya no reconoce a Towa. Ahora uniéndose con Moroha, la hija de Inuyasha, y con Kagome, las tres viajarán entre dos eras en una aventura por recuperar un pasado olvidado."} anime={"Hanyo no Yashahime ni no Shou"} tipo={"TV"} numeroEpisodios={"24"} estado={"Finalizado"}  imagenAnime={"https://www.animefenix.com/cdn/animes/cover/614e84bf0253f/hanyo-no-yashahime-ni-no-shou.jpg"} 
      capituloAnime1={"/ver/hanyo-no-yashahime-ni-no-shou-1"} capituloAnime2={"/ver/hanyo-no-yashahime-ni-no-shou-2"} capituloAnime3={"/ver/hanyo-no-yashahime-ni-no-shou-3"} capituloAnime4={"/ver/hanyo-no-yashahime-ni-no-shou-4"} capituloAnime5={"/ver/hanyo-no-yashahime-ni-no-shou-5"} capituloAnime6={"/ver/hanyo-no-yashahime-ni-no-shou-6"} capituloAnime7={"/ver/hanyo-no-yashahime-ni-no-shou-7"} capituloAnime8={"/ver/hanyo-no-yashahime-ni-no-shou-8"} capituloAnime9={"/ver/hanyo-no-yashahime-ni-no-shou-9"} capituloAnime10={"/ver/hanyo-no-yashahime-ni-no-shou-10"}
      capituloAnime11={"/ver/hanyo-no-yashahime-ni-no-shou-11"} capituloAnime12={"/ver/hanyo-no-yashahime-ni-no-shou-12"}
       capituloAnime13={"/ver/hanyo-no-yashahime-ni-no-shou-13"} capituloAnime14={"/ver/hanyo-no-yashahime-ni-no-shou-14"} 
       capituloAnime15={"/ver/hanyo-no-yashahime-ni-no-shou-15"} capituloAnime16={"/ver/hanyo-no-yashahime-ni-no-shou-16"} 
       capituloAnime17={"/ver/hanyo-no-yashahime-ni-no-shou-17"} capituloAnime18={"/ver/hanyo-no-yashahime-ni-no-shou-18"} 
       capituloAnime19={"/ver/hanyo-no-yashahime-ni-no-shou-19"} capituloAnime20={"/ver/hanyo-no-yashahime-ni-no-shou-20"} 
      capituloAnime21={"/ver/hanyo-no-yashahime-ni-no-shou-21"} capituloAnime22={"/ver/hanyo-no-yashahime-ni-no-shou-22"} 
      capituloAnime23={"/ver/hanyo-no-yashahime-ni-no-shou-23"} capituloAnime24={"/ver/hanyo-no-yashahime-ni-no-shou-24"}
       />} />
      
      <Route path="/heion-sedai-no-idaten-tachi" element={<Capitulos12 tituloAnime={"Heion Sedai no Idaten Tachi"} 
      genero1={""} genero2={""} genero3={""} genero4={""} genero5={""}
      genre1={"disable"} genre2={"disable"} 
      genre3={"button is-small is-orange is-outlined is-roundedX"} genre4={"disable"} genre5={"disable"}
      hrefGenre1={""} hrefGenre2={""} hrefGenre3={""} hrefGenre4={""} hrefGenre5={""}
      sec2={"sec"} sec3={"sec"} sec1={"sec"}
      descripcion={"En la historia de este manga, los dioses aparecieron cuando la humanidad estaba al borde de la aniquilación por parte de los demonios. Deidades llamadas “Idaten” pelearon y sellaron a los demonios hace 800 años. Ahora, los “Idaten” ya no tiene experiencia en peleas y viven vidas pacíficas. Pero, al mismo tiempo, los demonios están reviviendo, y la batalla entre humanos, dioses y demonios está a punto de comenzar. ¿Cuál será el bando que se alce con la victoria en esta ocasión con las condiciones tan cambiadas?"} 
      anime={"Heion Sedai no Idaten Tachi"} tipo={"TV"} numeroEpisodios={"11"} estado={"Finalizado"}  imagenAnime={"https://www.animefenix.com/cdn/animes/cover/60dd1bd47b14c/heion-sedai-no-idaten-tachi.jpg"} 
      capituloAnime1={"/ver/heion-sedai-no-idaten-tachi-1"} capituloAnime2={"/ver/heion-sedai-no-idaten-tachi-2"} capituloAnime3={"/ver/heion-sedai-no-idaten-tachi-3"} capituloAnime4={"/ver/heion-sedai-no-idaten-tachi-4"} capituloAnime5={"/ver/heion-sedai-no-idaten-tachi-5"} 
      capituloAnime6={"/ver/heion-sedai-no-idaten-tachi-6"} capituloAnime7={"/ver/heion-sedai-no-idaten-tachi-7"} capituloAnime8={"/ver/heion-sedai-no-idaten-tachi-8"} capituloAnime9={"/ver/heion-sedai-no-idaten-tachi-9"} 
      capituloAnime10={"/ver/heion-sedai-no-idaten-tachi-10"} capituloAnime11={"/ver/heion-sedai-no-idaten-tachi-11"} 
      li1={""} li2={""} li3={""} li4={""} li5={""} li6={""} li7={""} li8={""} li9={""} li10={""} li11={""} li12={"li"} li13={"li"} li14={"li"} li15={"li"} li16={"li"} li17={"li"} li18={"li"}
      li19={"li"} li20={"li"} li21={"li"} li22={"li"} li23={"li"} li24={"li"} li25={"li"} li26={"li"} li27={"li"} li28={"li"} li29={"li"} li30={"li"} li31={"li"} li32={"li"} 
      li33={"li"} li34={"li"} li35={"li"} li36={"li"} li37={"li"} li38={"li"}li39={"li"} li40={"li"}
      />} />
      
      <Route path="/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2" element={<Capitulos12 tituloAnime={"Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2"}
      descripcion={"Segunda parte de la segunda temporada del slime"} 
      genero1={""} genero2={""} genero3={""} genero4={""} genero5={""}
      genre1={"disable"} genre2={"disable"} 
      genre3={"button is-small is-orange is-outlined is-roundedX"} genre4={"disable"} genre5={"disable"}
      hrefGenre1={""} hrefGenre2={""} hrefGenre3={""} hrefGenre4={""} hrefGenre5={""}       
      sec2={"sec"} sec3={"sec"} sec1={"sec"}
      li14={"li"} li15={"li"} li16={"li"} li17={"li"} li18={"li"} li19={"li"} li20={"li"} li21={"li"} li22={"li"} li23={"li"} li24={"li"}
      li25={"li"} li26={"li"} li27={"li"} li28={"li"} li29={"li"} li30={"li"} li31={"li"} li32={"li"} li33={"li"} li34={"li"} li35={"li"} li36={"li"} li37={"li"} li38={"li"} li39={"li"} li40={"li"}
      anime={"Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2"} tipo={"TV"} numeroEpisodios={"13"} estado={"Finalizado"}  imagenAnime={"https://www.animefenix.com/cdn/animes/cover/60d7ea610da30/tensei-shitara-slime-datta-ken-2nd-season-part-2.jpg"} 
      numeroCapitulo1={"1"} numeroCapitulo2={"2"} numeroCapitulo3={"3"} numeroCapitulo4={"4"} numeroCapitulo5={"5"} numeroCapitulo6={"6"} numeroCapitulo7={"7"} 
      numeroCapitulo8={"8"} numeroCapitulo9={"9"} numeroCapitulo10={"10"} numeroCapitulo11={"11"} numeroCapitulo12={"12"} numeroCapitulo13={"13"} 
      capituloAnime1={"/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-1"} capituloAnime2={"/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-2"} 
      capituloAnime3={"/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-3"} capituloAnime4={"/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-4"} 
      capituloAnime5={"/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-5"} capituloAnime6={"/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-6"}
      capituloAnime7={"/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-7"} capituloAnime8={"/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-8"} 
      capituloAnime9={"/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-9"} capituloAnime10={"/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-10"}
      capituloAnime11={"/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-11"} capituloAnime12={"/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-12"}
      capituloAnime13={"/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-13"} 
      />} />
      
      <Route path="/peach-boy-riverside" element={<Capitulos12 tituloAnime={"Peach Boy Riverside"} 
      sec2={"sec"} sec3={"sec"} sec1={"sec"}
      genero1={""} genero2={""} genero3={""} genero4={""} genero5={""}
      genre1={"disable"} genre2={"disable"} 
      genre3={"button is-small is-orange is-outlined is-roundedX"} genre4={"disable"} genre5={"disable"}
      hrefGenre1={""} hrefGenre2={""} hrefGenre3={""} hrefGenre4={""} hrefGenre5={""}      
      li13={"li"} li14={"li"} li15={"li"} li16={"li"} li17={"li"} li18={"li"} li19={"li"} li20={"li"} li21={"li"} li22={"li"} li23={"li"} li24={"li"}
      li25={"li"} li26={"li"} li27={"li"} li28={"li"} li29={"li"} li30={"li"} li31={"li"} li32={"li"} li33={"li"} li34={"li"} li35={"li"} li36={"li"} li37={"li"} li38={"li"} li39={"li"} li40={"li"}      
      descripcion={"Saltherine Aldarake, princesa del Reino de Aldarake, sueña con viajar por el mundo, un sueño peligroso en una tierra donde los monstruos deambulan por el campo a su antojo y los humanos viven detrás de muros altos y fuertes. Pero cuando un encuentro casual con la viajera Mikoto le da esperanza a su sueño, él lo rompe poco después, ya que se revela como nada menos que Momotaro, un despiadado asesino de demonios. Aunque horrorizada por la sangre que Momotaro deja atrás, Saltherine está más convencida que nunca de que necesita aprender sobre el mundo más allá de sus muros, y viaja ... siguiendo los pasos del misterioso, carismático y aterrador chico que conoció ese día..."}
      anime={"Peach Boy Riverside"} tipo={"TV"} numeroEpisodios={"12"} estado={"Finalizado"}  imagenAnime={"https://www.animefenix.com/cdn/animes/cover/60d7d39e29e28/peach-boy-riverside.jpg"}
      numeroCapitulo1={"1"} numeroCapitulo2={"2"} numeroCapitulo3={"3"} numeroCapitulo4={"4"} numeroCapitulo5={"5"} numeroCapitulo6={"6"} numeroCapitulo7={"7"} 
      numeroCapitulo8={"8"} numeroCapitulo9={"9"} numeroCapitulo10={"10"} numeroCapitulo11={"11"} numeroCapitulo12={"12"}
      capituloAnime1={"/ver/peach-boy-riverside-1"} capituloAnime2={"/ver/peach-boy-riverside-2"} capituloAnime3={"/ver/peach-boy-riverside-3"} 
      capituloAnime4={"/ver/peach-boy-riverside-4"} capituloAnime5={"/ver/peach-boy-riverside-5"} capituloAnime6={"/ver/peach-boy-riverside-6"} 
      capituloAnime7={"/ver/peach-boy-riverside-7"} capituloAnime8={"/ver/peach-boy-riverside-8"} capituloAnime9={"/ver/peach-boy-riverside-9"} capituloAnime10={"/ver/peach-boy-riverside-10"}
      capituloAnime11={"/ver/peach-boy-riverside-11"} capituloAnime12={"/ver/peach-boy-riverside-12"} 
      />} />
     
      <Route path="/jujutsu-kaisen" element={<Capitulos12 tituloAnime={"Jujutsu Kaisen"}
      sec2={"sec"} sec3={"sec"} sec1={"sec"}
      genero1={""} genero2={""} genero3={""} genero4={""} genero5={""}
      genre1={"disable"} genre2={"disable"} 
      genre3={"button is-small is-orange is-outlined is-roundedX"} genre4={"disable"} genre5={"disable"}
      hrefGenre1={""} hrefGenre2={""} hrefGenre3={""} hrefGenre4={""} hrefGenre5={""}
      li25={"li"} li26={"li"} li27={"li"} li28={"li"} li29={"li"} li30={"li"} li31={"li"} li32={"li"} li33={"li"} li34={"li"} li35={"li"} li36={"li"} li37={"li"} li38={"li"} li39={"li"} li40={"li"}             
      descripcion={"Un niño lucha... por 'la muerte justa'. Dificultad, arrepentimiento, vergüenza: los sentimientos negativos que sentimos los humanos se convierten en Maldiciones que acechan en nuestra vida diaria. Las maldiciones corren desenfrenadas por todo el mundo, capaces de llevar a la gente a una terrible desgracia e incluso a la muerte. Además, las maldiciones solo pueden ser exorcizadas por otra maldición. Itadori Yuji es un chico con una fuerza física tremenda, aunque vive una vida de escuela secundaria completamente normal. Un día, para salvar a un amigo que ha sido atacado por Maldiciones, se come el dedo del Espectro de Doble Cara, llevándose la Maldición a su propia alma. A partir de entonces, comparte un cuerpo con el Espectro de Doble Cara. Guiado por el más poderoso de los hechiceros, Gojo Satoru, Itadori es admitido en la Escuela Superior Técnica Metropolitana de Hechicería de Tokio, una organización que lucha contra las maldiciones ... y así comienza la heroica historia de un niño que se convirtió en una maldición para exorcizar una maldición. , una vida de la que nunca podría volver atrás."} 
      anime={"Jujutsu Kaisen"} tipo={"TV"} numeroEpisodios={"24"} estado={"Finalizado"}  
      imagenAnime={"https://www.animefenix.com/cdn/animes/cover/5f66cfddef53a/jujutsu-kaisen.jpg"} 
      capituloAnime1={"/ver/jujutsu-kaisen-1"} capituloAnime2={"/ver/jujutsu-kaisen-2"} capituloAnime3={"/ver/jujutsu-kaisen-3"} capituloAnime4={"/ver/jujutsu-kaisen-4"} 
      capituloAnime5={"/ver/jujutsu-kaisen-5"} capituloAnime6={"/ver/jujutsu-kaisen-6"} capituloAnime7={"/ver/jujutsu-kaisen-7"} capituloAnime8={"/ver/jujutsu-kaisen-8"} 
      capituloAnime9={"/ver/jujutsu-kaisen-9"} capituloAnime10={"/ver/jujutsu-kaisen-10"} capituloAnime11={"/ver/jujutsu-kaisen-11"} capituloAnime12={"/ver/jujutsu-kaisen-12"}
      capituloAnime13={"/ver/jujutsu-kaisen-13"} capituloAnime14={"/ver/jujutsu-kaisen-14"} capituloAnime15={"/ver/jujutsu-kaisen-15"} capituloAnime16={"/ver/jujutsu-kaisen-16"} 
      capituloAnime17={"/ver/jujutsu-kaisen-17"} capituloAnime18={"/ver/jujutsu-kaisen-18"} capituloAnime19={"/ver/jujutsu-kaisen-19"} capituloAnime20={"/ver/jujutsu-kaisen-20"} 
      capituloAnime21={"/ver/jujutsu-kaisen-21"} capituloAnime22={"/ver/jujutsu-kaisen-22"} capituloAnime23={"/ver/jujutsu-kaisen-23"} capituloAnime24={"/ver/jujutsu-kaisen-24"}
      />} />
      
      <Route path="/shingeki-no-bahamut:virgin-soul" element={<Capitulos12 tituloAnime={"Shingeki no Bahamut:Virgin Soul"} 
      sec2={"sec"} sec3={"sec"} sec1={"sec"}
      genero1={""} genero2={""} genero3={""} genero4={""} genero5={""}
      genre1={"disable"} genre2={"disable"} 
      genre3={"button is-small is-orange is-outlined is-roundedX"} genre4={"disable"} genre5={"disable"}
      hrefGenre1={""} hrefGenre2={""} hrefGenre3={""} hrefGenre4={""} hrefGenre5={""}
      li25={"li"} li26={"li"} li27={"li"} li28={"li"} li29={"li"} li30={"li"} li31={"li"} li32={"li"} li33={"li"} li34={"li"} li35={"li"} li36={"li"} li37={"li"} li38={"li"} li39={"li"} li40={"li"}             
      descripcion={"10 años después de que el mundo escapó de la destrucción debido al resurgimiento de Bahamut, los humanos en la capital real recolectan riqueza, los demonios son esclavizados para ayudar con el renacimiento de la capital y los dioses pierden su poder debido a una disminución de la piedad religiosa."} 
      anime={"Shingeki no Bahamut:Virgin Soul"} tipo={"TV"} numeroEpisodios={"24"} estado={"Finalizado"}  imagenAnime={"https://www.animefenix.com/cdn/animes/cover/5f94201ce23b1/shingeki-no-bahamut-virgin-soul.jpg"} 
      capituloAnime1={"/ver/shingeki-no-bahamut:virgin-soul-1"} capituloAnime2={"/ver/shingeki-no-bahamut:virgin-soul-2"} capituloAnime3={"/ver/shingeki-no-bahamut:virgin-soul-3"} 
      capituloAnime4={"/ver/shingeki-no-bahamut:virgin-soul-4"} capituloAnime5={"/ver/shingeki-no-bahamut:virgin-soul-5"} capituloAnime6={"/ver/shingeki-no-bahamut:virgin-soul-6"} 
      capituloAnime7={"/ver/shingeki-no-bahamut:virgin-soul-7"} capituloAnime8={"/ver/shingeki-no-bahamut:virgin-soul-8"} capituloAnime9={"/ver/shingeki-no-bahamut:virgin-soul-9"} 
      capituloAnime10={"/ver/shingeki-no-bahamut:virgin-soul-10"}
      capituloAnime11={"/ver/shingeki-no-bahamut:virgin-soul-11"} capituloAnime12={"/ver/shingeki-no-bahamut:virgin-soul-12"} capituloAnime13={"/ver/shingeki-no-bahamut:virgin-soul-13"} 
      capituloAnime14={"/ver/shingeki-no-bahamut:virgin-soul-14"} capituloAnime15={"/ver/shingeki-no-bahamut:virgin-soul-15"} capituloAnime16={"/ver/shingeki-no-bahamut:virgin-soul-16"} 
      capituloAnime17={"/ver/shingeki-no-bahamut:virgin-soul-17"} capituloAnime18={"/ver/shingeki-no-bahamut:virgin-soul-18"} capituloAnime19={"/ver/shingeki-no-bahamut:virgin-soul-19"} 
      capituloAnime20={"/ver/shingeki-no-bahamut:virgin-soul-20"} 
      capituloAnime21={"/ver/shingeki-no-bahamut:virgin-soul-21"} capituloAnime22={"/ver/shingeki-no-bahamut:virgin-soul-22"} capituloAnime23={"/ver/shingeki-no-bahamut:virgin-soul-23"} 
      capituloAnime24={"/ver/shingeki-no-bahamut:virgin-soul-24"}
      />} />
      
      <Route path="/castlevania-segunda-temporada" element={<Capitulos12 tituloAnime={""} descripcion={"Segunda temporada de Castlevania."} 
      sec2={"sec"} sec3={"sec"} sec1={"sec"}
      genero1={""} genero2={""} genero3={""} genero4={""} genero5={""}
      genre1={"disable"} genre2={"disable"} 
      genre3={"button is-small is-orange is-outlined is-roundedX"} genre4={"disable"} genre5={"disable"}
      hrefGenre1={""} hrefGenre2={""} hrefGenre3={""} hrefGenre4={""} hrefGenre5={""}
      li9={"li"} li10={"li"} li11={"li"} li12={"li"}
      li13={"li"} li14={"li"} li15={"li"} li16={"li"} li17={"li"} li18={"li"} li19={"li"} li20={"li"} li21={"li"} li22={"li"} li23={"li"} li24={"li"}
      li25={"li"} li26={"li"} li27={"li"} li28={"li"} li29={"li"} li30={"li"} li31={"li"} li32={"li"} li33={"li"} li34={"li"} li35={"li"} li36={"li"} 
      li37={"li"} li38={"li"} li39={"li"} li40={"li"}   
      anime={"Castlevania Segunda Temporada"} tipo={"TV"} numeroEpisodios={"8"} estado={"Finalizado"}  
      imagenAnime={"https://www.animefenix.com/cdn/animes/cover/5e4efb4be5001/castlevania-season-2.jpg"} 
      numeroCapitulo1={"1"} numeroCapitulo2={"2"} numeroCapitulo3={"3"} numeroCapitulo4={"4"} numeroCapitulo5={"5"} numeroCapitulo6={"6"}
      numeroCapitulo7={"7"} numeroCapitulo8={"8"}
      capituloAnime1={"/ver/castlevania-segunda-temporada-1"} capituloAnime2={"/ver/castlevania-segunda-temporada-2"} capituloAnime3={"/ver/castlevania-segunda-temporada-3"} 
      capituloAnime4={"/ver/castlevania-segunda-temporada-4"} capituloAnime5={"/ver/castlevania-segunda-temporada-5"} 
      capituloAnime6={"/ver/castlevania-segunda-temporada-6"} capituloAnime7={"/ver/castlevania-segunda-temporada-7"} capituloAnime8={"/ver/castlevania-segunda-temporada-8"}
      />} />
      
      <Route path="/overlord-III" element={<Capitulos12 tituloAnime={"Overlord III"} 
      sec2={"sec"} sec3={"sec"} sec1={"sec"}
      genero1={""} genero2={""} genero3={""} genero4={""} genero5={""}
      genre1={"disable"} genre2={"disable"} 
      genre3={"button is-small is-orange is-outlined is-roundedX"} genre4={"disable"} genre5={"disable"}
      hrefGenre1={""} hrefGenre2={""} hrefGenre3={""} hrefGenre4={""} hrefGenre5={""}
      descripcion={"Tercera temporada de Overlord."} anime={"Overlord III"} tipo={"TV"} numeroEpisodios={"13"} estado={"Finalizado"}  
      imagenAnime={"https://www.animefenix.com/cdn/animes/cover/5de4438a79aa5/overlord-iii.jpg"} 
      li14={"li"} li15={"li"} li16={"li"} li17={"li"} li18={"li"} li19={"li"} li20={"li"} li21={"li"} li22={"li"} li23={"li"} li24={"li"}
      li25={"li"} li26={"li"} li27={"li"} li28={"li"} li29={"li"} li30={"li"} li31={"li"} li32={"li"} li33={"li"} li34={"li"} li35={"li"} li36={"li"} li37={"li"} li38={"li"} li39={"li"} li40={"li"}
      capituloAnime1={"/ver/overlord-III-1"} capituloAnime2={"/ver/overlord-III-2"} capituloAnime3={"/ver/overlord-III-3"} 
      capituloAnime4={"/ver/overlord-III-4"} capituloAnime5={"/ver/overlord-III-5"} capituloAnime6={"/ver/overlord-III-6"} 
      capituloAnime7={"/ver/overlord-III-7"} capituloAnime8={"/ver/overlord-III-8"} capituloAnime9={"/ver/overlord-III-9"} 
      capituloAnime10={"/ver/overlord-III-10"} capituloAnime11={"/ver/overlord-III-11"} capituloAnime12={"/ver/overlord-III-12"} 
      capituloAnime13={"/ver/overlord-III-13"} 
      />} />
      
      <Route path="/ao-no-exorcist:-kyoto-fujouou-hen" element={<Capitulos12 tituloAnime={"Ao no Exorcist Kyoto Fujouou Hen"} 
      sec2={"sec"} sec3={"sec"} sec1={"sec"}
      genero1={""} genero2={""} genero3={""} genero4={""} genero5={""}
      genre1={"disable"} genre2={"disable"} 
      genre3={"button is-small is-orange is-outlined is-roundedX"} genre4={"disable"} genre5={"disable"}
      hrefGenre1={""} hrefGenre2={""} hrefGenre3={""} hrefGenre4={""} hrefGenre5={""}
      li14={"li"} li15={"li"} li16={"li"} li17={"li"} li18={"li"} li19={"li"} li20={"li"} li21={"li"} li22={"li"} li23={"li"} li24={"li"}
      li25={"li"} li26={"li"} li27={"li"} li28={"li"} li29={"li"} li30={"li"} li31={"li"} li32={"li"} li33={"li"} li34={"li"} li35={"li"} li36={"li"} li37={"li"} li38={"li"} li39={"li"} li40={"li"}      
      descripcion={"A finales de la era Edo, un demonio conocido como el Rey Impuro mató a miles de personas. Tras vencer al demonio, los Caballeros de la Verdadera Cruz mantuvieron su ojo izquierdo sellado a salvo en la Academia, pero ahora ha sido robado. Al escuchar que el ladrón ha tomado por rehén a un niño, Yukio y Rin parten a ayudar. La investigación y la persecución llevará a Rin y a sus amigos hasta Kyoto, donde se verán involucrados en una oscura trama."}
      anime={"Ao no Exorcist Kyoto Fujouou Hen"} tipo={"TV"} numeroEpisodios={"13"} estado={"Finalizado"}  
      imagenAnime={"https://www.animefenix.com/cdn/animes/cover/5ebaac070d30a/ao-no-exorcist-kyoto-fujouou-hen.png"} 
      numeroCapitulo1={"1"} numeroCapitulo2={"2"} numeroCapitulo3={"3"} numeroCapitulo4={"4"} numeroCapitulo5={"5"} numeroCapitulo6={"6"} numeroCapitulo7={"7"} numeroCapitulo8={"8"} numeroCapitulo9={"9"} numeroCapitulo10={"10"}
      numeroCapitulo11={"11"} numeroCapitulo12={"12"} numeroCapitulo13={"13"} 
      capituloAnime1={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-1"} capituloAnime2={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-2"} capituloAnime3={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-3"} 
      capituloAnime4={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-4"} capituloAnime5={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-5"} capituloAnime6={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-6"} 
      capituloAnime7={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-7"} capituloAnime8={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-8"} capituloAnime9={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-9"} 
      capituloAnime10={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-10"}capituloAnime11={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-11"} capituloAnime12={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-12"} 
      capituloAnime13={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-13"}
      />} />
      
      <Route path="/fairy-gone" element={<Capitulos12 tituloAnime={"Fairy Gone"} 
      li13={"li"} li14={"li"} li15={"li"} li16={"li"} li17={"li"} li18={"li"} li19={"li"} li20={"li"} li21={"li"} li22={"li"} li23={"li"} li24={"li"}
      li25={"li"} li26={"li"} li27={"li"} li28={"li"} li29={"li"} li30={"li"} li31={"li"} li32={"li"} li33={"li"} li34={"li"} li35={"li"} li36={"li"} li37={"li"} li38={"li"} li39={"li"} li40={"li"}           
      descripcion={"La historia nos trasladará a un mundo en el que las hadas poseen y residen en animales, proporcionándoles poderes especiales. Extrayendo quirúrgicamente los órganos a uno de estos animales e implantándoselos a un humano, los humanos pueden invocar parcialmente a las hadas y usarlas como armas. Estos humanos participarán en las guerras y serán conocidos como 'Soldados Hada'. Tras el fin de una larga guerra, estos Soldados Hada pierden su propósito y deben reintegrarse en la sociedad, aunque no todos tomarán el camino de la justicia. Nueve años después del fin de la guerra conocemos a Marlya, una nueva recluta en Dorothea, una organización dedicada a investigar y contrarrestar crímenes relacionados con hadas. Aun en tiempo de paz, la inestabilidad de la guerra todavía afecta al gobierno. Muchos criminales cargan con heridas de la guerra y los grupos terroristas buscan venganza por los actos de entonces. Una historia de soldados hada persiguiendo su propia justicia en un mundo caótico que intenta dejar atrás un conflicto."} 
      anime={"Fairy Gone"} tipo={"TV"} numeroEpisodios={"12"} estado={"Finalizado"}  
      imagenAnime={"https://www.animefenix.com/cdn/animes/cover/5d9ad108f3780/fairy-gone.jpg"} 
      numeroCapitulo1={"1"} numeroCapitulo2={"2"} numeroCapitulo3={"3"} numeroCapitulo4={"4"} numeroCapitulo5={"5"} numeroCapitulo6={"6"} numeroCapitulo7={"7"} numeroCapitulo8={"8"} numeroCapitulo9={"9"} numeroCapitulo10={"10"}
      numeroCapitulo11={"11"} numeroCapitulo12={"12"}
      textoSecuela={"Secuela"} hrefSecuela={"/ver/fairy-gone-segunda-temporada"} nombreSecuela={"Fairy Gone Segunda Temporada"}
      sec2={"sec"} sec3={"sec"}
      genero1={""} genero2={""} genero3={""} genero4={""} genero5={""}
      genre1={"disable"} genre2={"disable"} 
      genre3={"button is-small is-orange is-outlined is-roundedX"} genre4={"disable"} genre5={"disable"}
      hrefGenre1={""} hrefGenre2={""} hrefGenre3={""} hrefGenre4={""} hrefGenre5={""}
      capituloAnime1={"/ver/fairy-gone-1"} capituloAnime2={"/ver/fairy-gone-2"} capituloAnime3={"/ver/fairy-gone-3"} capituloAnime4={"/ver/fairy-gone-4"} capituloAnime5={"/ver/fairy-gone-5"} 
      capituloAnime6={"/ver/fairy-gone-6"} capituloAnime7={"/ver/fairy-gone-7"} capituloAnime8={"/ver/fairy-gone-8"} capituloAnime9={"/ver/fairy-gone-9"} capituloAnime10={"/ver/fairy-gone-10"}
      capituloAnime11={"/ver/fairy-gone-11"} capituloAnime12={"/ver/fairy-gone-12"} 
      />} />
      
      <Route path="/dr-stone-ryusui" element={<Capitulos12 tituloAnime={"Dr Stone Ryusui"} 
      descripcion={"Episodio que sirve como puente entre la segunda y tercera temporada de Dr. Stone."} 
      anime={"Dr Stone Ryusui"} tipo={"Especial"} numeroEpisodios={"1"} estado={"Finalizado"} 
      hrefSecuela={"/ver/dr-stone-wars"} nombreSecuela={"Dr. Stone: Wars"} textoSecuela={"Secuela"}
      sec2={"sec"} sec3={"sec"}
      genero1={""} genero2={""} genero3={""} genero4={""} genero5={""}
      genre1={"disable"} genre2={"disable"} 
      genre3={"button is-small is-orange is-outlined is-roundedX"} genre4={"disable"} genre5={"disable"}
      hrefGenre1={""} hrefGenre2={""} hrefGenre3={""} hrefGenre4={""} hrefGenre5={""}
      imagenAnime={"https://www.animefenix.com/cdn/animes/cover/62b391c6e1119/dr-stone-ryusui.png"} 
      numeroCapitulo1={"1"}
      li2={"li"} li3={"li"} li4={"li"} li5={"li"} li6={"li"} li7={"li"} li8={"li"}  li9={"li"} li10={"li"} li11={"li"} li12={"li"}
      li13={"li"} li14={"li"} li15={"li"} li16={"li"} li17={"li"} li18={"li"} li19={"li"} li20={"li"} li21={"li"} li22={"li"} li23={"li"} li24={"li"}
      li25={"li"} li26={"li"} li27={"li"} li28={"li"} li29={"li"} li30={"li"} li31={"li"} li32={"li"} li33={"li"} li34={"li"} li35={"li"} li36={"li"} 
      li37={"li"} li38={"li"} li39={"li"} li40={"li"}   
      capituloAnime1={"/ver/dr-stone-ryusui-1"} 
      />} />
      
      <Route path="/isekai-yakkyoku" element={<Capitulos12 tituloAnime={"Isekai Yakkyoku"} 
      descripcion={"Un joven farmacólogo e investigador en Japón murió por exceso de trabajo y reencarnó en una Europa paralela medieval. Se reencarnó como un aprendiz de 10 años de un famoso farmacéutico de la Corte Real, había alcanzado habilidades inhumanas de capacidad para ver a través de enfermedades, creación material y destrucción material. En una sociedad en la que proliferan las prácticas médicas dudosas, los precios se disparan a través del monopolio del gremio farmacéutico y los buenos medicamentos no están disponibles para los plebeyos. Fue reconocido por el Emperador en ese momento y abrió una Farmacia en la esquina del pueblo. Eliminará el fraude que se ha extendido por el mundo y entregará a los plebeyos una medicina verdaderamente efectiva que se desarrolló utilizando la farmacología actual. Así, el niño farmacéutico hará trampa utilizando sus conocimientos previos para crear medicamentos innovadores mientras ayuda a las personas del mundo paralelo, una historia sobre vivir su nueva vida al máximo esta vez."} 
      anime={"Isekai Yakkyoku"} tipo={"TV"} numeroEpisodios={"7"} estado={"En Emision"}  
      sec1={"sec"} sec2={"sec"} sec3={"sec"}
      genero1={""} genero2={""} genero3={""} genero4={""} genero5={""}
      genre1={"disable"} genre2={"disable"} 
      genre3={"button is-small is-orange is-outlined is-roundedX"} genre4={"disable"} genre5={"disable"}
      hrefGenre1={""} hrefGenre2={""} hrefGenre3={""} hrefGenre4={""} hrefGenre5={""}
      imagenAnime={"https://www.animefenix.com/cdn/animes/cover/62b39151eb430/isekai-yakkyoku.jpg"} 
      numeroCapitulo1={"1"} numeroCapitulo2={"2"} numeroCapitulo3={"3"} numeroCapitulo4={"4"} numeroCapitulo5={"5"} numeroCapitulo6={"6"} numeroCapitulo7={"7"} numeroCapitulo8={"8"} numeroCapitulo9={"9"} numeroCapitulo10={"10"}
      numeroCapitulo11={"11"} numeroCapitulo12={"12"} numeroCapitulo13={"13"} numeroCapitulo14={"14"} numeroCapitulo15={"15"} numeroCapitulo16={"16"} numeroCapitulo17={"17"} numeroCapitulo18={"18"} numeroCapitulo19={"19"} numeroCapitulo20={"20"}
      numeroCapitulo21={"21"} numeroCapitulo22={"22"} numeroCapitulo23={"23"} numeroCapitulo24={"24"} 
      capituloAnime1={"/ver/isekai-yakkyoku-1"} capituloAnime2={"/ver/isekai-yakkyoku-2"} capituloAnime3={"/ver/isekai-yakkyoku-3"} capituloAnime4={"/ver/isekai-yakkyoku-4"} 
      capituloAnime5={"/ver/isekai-yakkyoku-5"} capituloAnime6={"/ver/isekai-yakkyoku-6"} capituloAnime7={"/ver/isekai-yakkyoku-7"} capituloAnime8={"/ver/isekai-yakkyoku-8"} 
      capituloAnime9={"/ver/isekai-yakkyoku-9"} capituloAnime10={"/ver/isekai-yakkyoku-10"} capituloAnime11={"/ver/isekai-yakkyoku-11"} capituloAnime12={"/ver/isekai-yakkyoku-12"} 
      capituloAnime13={"/ver/isekai-yakkyoku-13"} capituloAnime14={"/ver/isekai-yakkyoku-14"} capituloAnime15={"/ver/isekai-yakkyoku-15"} capituloAnime16={"/ver/isekai-yakkyoku-16"} 
      capituloAnime17={"/ver/isekai-yakkyoku-17"} capituloAnime18={"/ver/isekai-yakkyoku-18"} capituloAnime19={"/ver/isekai-yakkyoku-19"} capituloAnime20={"/ver/isekai-yakkyoku-20"} 
      capituloAnime21={"/ver/isekai-yakkyoku-21"} capituloAnime22={"/ver/isekai-yakkyoku-22"} capituloAnime23={"/ver/isekai-yakkyoku-23"} capituloAnime24={"/ver/isekai-yakkyoku-24"}
      li8={"li"}  li9={"li"} li10={"li"} li11={"li"} li12={"li"}
      li13={"li"} li14={"li"} li15={"li"} li16={"li"} li17={"li"} li18={"li"} li19={"li"} li20={"li"} li21={"li"} li22={"li"} li23={"li"} li24={"li"}
      li25={"li"} li26={"li"} li27={"li"} li28={"li"} li29={"li"} li30={"li"} li31={"li"} li32={"li"} li33={"li"} li34={"li"} li35={"li"} li36={"li"} 
      li37={"li"} li38={"li"} li39={"li"} li40={"li"}   

      />} />
      
      <Route path="/kuro-no-shoukanshi" element={<Capitulos12 tituloAnime={"Kuro no Shoukanshi"} 
      descripcion={'Cuando Kelvin se despierta, se encuentra en un lugar desconocido sin ningún recuerdo de su vida anterior. Resulta que se había reencarnado en otro mundo pero había cambiado sus recuerdos del pasado por poderosas habilidades. Ahora que es un invocador, emprende un viaje con la diosa que lo trajo al nuevo mundo, quien también es su primera "seguidora".'} 
      anime={"Kuro no Shoukanshi"} tipo={"TV"} numeroEpisodios={"7"} estado={"En Emision"}  
      sec1={"sec"} sec2={"sec"}  sec3={"sec"}
      genero1={""} genero2={""} genero3={""} genero4={""} genero5={""}
      genre1={"disable"} genre2={"disable"} 
      genre3={"button is-small is-orange is-outlined is-roundedX"} genre4={"disable"} genre5={"disable"}
      hrefGenre1={""} hrefGenre2={""} hrefGenre3={""} hrefGenre4={""} hrefGenre5={""}
      imagenAnime={"https://www.animefenix.com/cdn/animes/cover/62b390dacca80/kuro-no-shoukanshi.jpg"} 
      numeroCapitulo1={"1"} numeroCapitulo2={"2"} numeroCapitulo3={"3"} numeroCapitulo4={"4"} numeroCapitulo5={"5"} numeroCapitulo6={"6"} numeroCapitulo7={"7"} numeroCapitulo8={"8"} numeroCapitulo9={"9"} numeroCapitulo10={"10"}
      numeroCapitulo11={"11"} numeroCapitulo12={"12"} numeroCapitulo13={"13"} numeroCapitulo14={"14"} numeroCapitulo15={"15"} numeroCapitulo16={"16"} numeroCapitulo17={"17"} numeroCapitulo18={"18"} numeroCapitulo19={"19"} numeroCapitulo20={"20"}
      numeroCapitulo21={"21"} numeroCapitulo22={"22"} numeroCapitulo23={"23"} numeroCapitulo24={"24"} 
      capituloAnime1={"/ver/kuro-no-shoukanshi-1"} capituloAnime2={"/ver/kuro-no-shoukanshi-2"} capituloAnime3={"/ver/kuro-no-shoukanshi-3"} capituloAnime4={"/ver/kuro-no-shoukanshi-4"} 
      capituloAnime5={"/ver/kuro-no-shoukanshi-5"} capituloAnime6={"/ver/kuro-no-shoukanshi-6"} capituloAnime7={"/ver/kuro-no-shoukanshi-7"} capituloAnime8={"/ver/kuro-no-shoukanshi-8"} 
      capituloAnime9={"/ver/kuro-no-shoukanshi-9"} capituloAnime10={"/ver/kuro-no-shoukanshi-10"}
      capituloAnime11={"/ver/kuro-no-shoukanshi-11"} capituloAnime12={"/ver/kuro-no-shoukanshi-12"} capituloAnime13={"/ver/kuro-no-shoukanshi-13"} capituloAnime14={"/ver/kuro-no-shoukanshi-14"} 
      capituloAnime15={"/ver/kuro-no-shoukanshi-15"} capituloAnime16={"/ver/kuro-no-shoukanshi-16"} capituloAnime17={"/ver/kuro-no-shoukanshi-17"} capituloAnime18={"/ver/kuro-no-shoukanshi-18"} capituloAnime19={"/ver/-19"} capituloAnime20={"/ver/-20"} 
      capituloAnime21={"/ver/kuro-no-shoukanshi-21"} capituloAnime22={"/ver/kuro-no-shoukanshi-22"} capituloAnime23={"/ver/kuro-no-shoukanshi-23"} capituloAnime24={"/ver/kuro-no-shoukanshi-24"}
      li8={"li"}  li9={"li"} li10={"li"} li11={"li"} li12={"li"}
      li13={"li"} li14={"li"} li15={"li"} li16={"li"} li17={"li"} li18={"li"} li19={"li"} li20={"li"} li21={"li"} li22={"li"} li23={"li"} li24={"li"}
      li25={"li"} li26={"li"} li27={"li"} li28={"li"} li29={"li"} li30={"li"} li31={"li"} li32={"li"} li33={"li"} li34={"li"} li35={"li"} li36={"li"} 
      li37={"li"} li38={"li"} li39={"li"} li40={"li"}
      />} />
   

      <Route path="/fairy-gone-segunda-temporada" element={<Capitulos12 tituloAnime={"Fairy Gone Segunda Temporada"} 
      descripcion={"Segunda temporada de Fairy Gone."} 
      anime={"Fairy Gone Segunda Temporada"} tipo={"TV"} numeroEpisodios={"12"} estado={"Finalizado"}
      sec2={"sec"}   sec3={"sec"} hrefSecuela={"/ver/fairy-gone"} textoSecuela={"Precuela"} nombreSecuela={"Fairy Gone"}
      imagenAnime={"https://www.animefenix.com/cdn/animes/cover/5d95594d48a4f/fairy-gone-2nd-season.jpg"} 
      numeroCapitulo1={"1"} numeroCapitulo2={"2"} numeroCapitulo3={"3"} numeroCapitulo4={"4"} numeroCapitulo5={"5"} numeroCapitulo6={"6"} numeroCapitulo7={"7"} numeroCapitulo8={"8"} numeroCapitulo9={"9"} numeroCapitulo10={"10"}
      numeroCapitulo11={"11"} numeroCapitulo12={"12"}
      li13={"li"} li14={"li"} li15={"li"} li16={"li"} li17={"li"} li18={"li"} li19={"li"} li20={"li"} li21={"li"} li22={"li"} li23={"li"} li24={"li"}
      li25={"li"} li26={"li"} li27={"li"} li28={"li"} li29={"li"} li30={"li"} li31={"li"} li32={"li"} li33={"li"} li34={"li"} li35={"li"} li36={"li"} 
      li37={"li"} li38={"li"} li39={"li"} li40={"li"}
      genero1={""} genero2={""} genero3={""} genero4={""} genero5={""}
      genre1={"disable"} genre2={"disable"} 
      genre3={"button is-small is-orange is-outlined is-roundedX"} genre4={"disable"} genre5={"disable"}
      hrefGenre1={""} hrefGenre2={""} hrefGenre3={""} hrefGenre4={""} hrefGenre5={""}
      capituloAnime1={"/ver/fairy-gone-segunda-temporada-1"} capituloAnime2={"/ver/fairy-gone-segunda-temporada-2"} capituloAnime3={"/ver/fairy-gone-segunda-temporada-3"} 
      capituloAnime4={"/ver/fairy-gone-segunda-temporada-4"} capituloAnime5={"/ver/fairy-gone-segunda-temporada-5"} capituloAnime6={"/ver/fairy-gone-segunda-temporada-6"} 
      capituloAnime7={"/ver/fairy-gone-segunda-temporada-7"} capituloAnime8={"/ver/fairy-gone-segunda-temporada-8"} capituloAnime9={"/ver/fairy-gone-segunda-temporada-9"} 
      capituloAnime10={"/ver/fairy-gone-segunda-temporada-10"} capituloAnime11={"/ver/fairy-gone-segunda-temporada-11"} capituloAnime12={"/ver/-12"} 
      />} />

      <Route path="/isekai-meiryuu-de-harem-wo" element={<Capitulos12 tituloAnime={"Isekai Meiryuu de Harem wo"} 
      descripcion={" Luchando con la vida y la sociedad, el estudiante de secundaria Michio Kaga deambula por Internet y aterriza en un sitio web extraño. El sitio web, que presenta una serie de preguntas y un sistema basado en puntos, permite crear habilidades y destrezas para un personaje. Al completar su personaje, Kaga fue transportado a un mundo de fantasía similar a un juego y renació como un hombre fuerte que puede reclamar chicas de nivel ídolo. ¡Así comienza la leyenda del engaño y el harén de un hombre renacido!"} 
      anime={"Isekai Meiryuu de Harem wo"} tipo={"TV"} numeroEpisodios={"7"} estado={"En Emision"}  
      imagenAnime={"https://www.animefenix.com/cdn/animes/cover/62b38b1fc1df2/isekai-meikyuu-de-harem-wo.jpg"} 
      sec1={"sec"} sec2={"sec"}  sec3={"sec"} 
      genero1={""} genero2={""} genero3={""} genero4={""} genero5={""}
      genre1={"disable"} genre2={"disable"} 
      genre3={"button is-small is-orange is-outlined is-roundedX"} genre4={"disable"} genre5={"disable"}
      hrefGenre1={""} hrefGenre2={""} hrefGenre3={""} hrefGenre4={""} hrefGenre5={""}
      numeroCapitulo1={"1"} numeroCapitulo2={"2"} numeroCapitulo3={"3"} numeroCapitulo4={"4"} numeroCapitulo5={"5"} numeroCapitulo6={"6"} numeroCapitulo7={"7"} numeroCapitulo8={"8"} numeroCapitulo9={"9"} numeroCapitulo10={"10"}
      numeroCapitulo11={"11"} numeroCapitulo12={"12"} numeroCapitulo13={"13"} numeroCapitulo14={"14"} numeroCapitulo15={"15"} numeroCapitulo16={"16"} numeroCapitulo17={"17"} numeroCapitulo18={"18"} numeroCapitulo19={"19"} numeroCapitulo20={"20"}
      numeroCapitulo21={"21"} numeroCapitulo22={"22"} numeroCapitulo23={"23"} numeroCapitulo24={"24"} 
      capituloAnime1={"/ver/isekai-meiryuu-de-harem-wo-1"} capituloAnime2={"/ver/isekai-meiryuu-de-harem-wo-2"} capituloAnime3={"/ver/isekai-meiryuu-de-harem-wo-3"} 
      capituloAnime4={"/ver/isekai-meiryuu-de-harem-wo-4"} capituloAnime5={"/ver/isekai-meiryuu-de-harem-wo-5"} capituloAnime6={"/ver/isekai-meiryuu-de-harem-wo-6"} 
      capituloAnime7={"/ver/isekai-meiryuu-de-harem-wo-7"} capituloAnime8={"/ver/isekai-meiryuu-de-harem-wo-8"} capituloAnime9={"/ver/isekai-meiryuu-de-harem-wo-9"} 
      capituloAnime10={"/ver/isekai-meiryuu-de-harem-wo-10"}
      capituloAnime11={"/ver/isekai-meiryuu-de-harem-wo-11"} capituloAnime12={"/ver/isekai-meiryuu-de-harem-wo-12"} capituloAnime13={"/ver/isekai-meiryuu-de-harem-wo-13"} 
      capituloAnime14={"/ver/isekai-meiryuu-de-harem-wo-14"} capituloAnime15={"/ver/isekai-meiryuu-de-harem-wo-15"} capituloAnime16={"/ver/isekai-meiryuu-de-harem-wo-16"} 
      capituloAnime17={"/ver/isekai-meiryuu-de-harem-wo-17"} capituloAnime18={"/ver/isekai-meiryuu-de-harem-wo-18"} capituloAnime19={"/ver/isekai-meiryuu-de-harem-wo-19"} 
      capituloAnime20={"/ver/isekai-meiryuu-de-harem-wo-20"} capituloAnime21={"/ver/isekai-meiryuu-de-harem-wo-21"} capituloAnime22={"/ver/isekai-meiryuu-de-harem-wo-22"} capituloAnime23={"/ver/isekai-meiryuu-de-harem-wo-23"} capituloAnime24={"/ver/isekai-meiryuu-de-harem-wo-24"}
      li8={"li"} li9={"li"} li10={"li"} li11={"li"} li12={"li"}
      li13={"li"} li14={"li"} li15={"li"} li16={"li"} li17={"li"} li18={"li"} li19={"li"} li20={"li"} li21={"li"} li22={"li"} li23={"li"} li24={"li"}
      li25={"li"} li26={"li"} li27={"li"} li28={"li"} li29={"li"} li30={"li"} li31={"li"} li32={"li"} li33={"li"} li34={"li"} li35={"li"} li36={"li"} 
      li37={"li"} li38={"li"} li39={"li"} li40={"li"}
      />} />
      
      <Route path="/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada" element={<Capitulos12 tituloAnime={"Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e Segunda Temporada"} 
      descripcion={"La Escuela Secundaria de Educación Avanzada Metropolitana de Tokio parece un paraíso, pero en realidad es una meritocracia extrema. En la clase de bajo rendimiento, Kiyotaka ha comenzado a trabajar con Suzune, que busca ascender más alto. Después de una prueba de supervivencia en una isla deshabitada, pueden disfrutar de un transatlántico de lujo, ¡pero comenzará una nueva prueba de codificación de clases! ¿Trabajarás para tu clase, tu grupo o para ti mismo?"} 
      anime={"Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e Temporada 2"} tipo={"TV"} numeroEpisodios={"8"} estado={"En Emision"}  
      imagenAnime={"https://www.animefenix.com/cdn/animes/cover/62b9c44a32f53/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-2nd-season.jpg"} 
      numeroCapitulo1={"1"} numeroCapitulo2={"2"} numeroCapitulo3={"3"} numeroCapitulo4={"4"} numeroCapitulo5={"5"} numeroCapitulo6={"6"} numeroCapitulo7={"7"} numeroCapitulo8={"8"} numeroCapitulo9={"9"} numeroCapitulo10={"10"}
      numeroCapitulo11={"11"} numeroCapitulo12={"12"} numeroCapitulo13={"13"} numeroCapitulo14={"14"} numeroCapitulo15={"15"} numeroCapitulo16={"16"} numeroCapitulo17={"17"} numeroCapitulo18={"18"} numeroCapitulo19={"19"} numeroCapitulo20={"20"}
      numeroCapitulo21={"21"} numeroCapitulo22={"22"} numeroCapitulo23={"23"} numeroCapitulo24={"24"} 
      capituloAnime1={"/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-1"} capituloAnime2={"/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-2"} 
      capituloAnime3={"/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-3"} capituloAnime4={"/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-4"} 
      capituloAnime5={"/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-5"} capituloAnime6={"/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-6"} 
      capituloAnime7={"/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-7"} capituloAnime8={"/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-8"} 
      capituloAnime9={"/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-9"} capituloAnime10={"/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-10"}
      capituloAnime11={"/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-11"} capituloAnime12={"/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-12"} 
      capituloAnime13={"/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-13"} capituloAnime14={"/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-14"} 
      capituloAnime15={"/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-15"} capituloAnime16={"/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-16"} 
      capituloAnime17={"/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-17"} capituloAnime18={"/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-18"} 
      capituloAnime19={"/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-19"} capituloAnime20={"/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-20"} 
      capituloAnime21={"/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-21"} capituloAnime22={"/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-22"} 
      capituloAnime23={"/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-23"} capituloAnime24={"/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-24"}
      sec2={"sec"} sec3={"sec"} hrefSecuela={"youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e"} nombreSecuela={"Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e"} textoSecuela={"Precuela"}
      li8={"li"} li9={"li"} li10={"li"} li11={"li"} li12={"li"}
      genero1={""} genero2={""} genero3={""} genero4={""} genero5={""}
      genre1={"disable"} genre2={"disable"} 
      genre3={"button is-small is-orange is-outlined is-roundedX"} genre4={"disable"} genre5={"disable"}
      hrefGenre1={""} hrefGenre2={""} hrefGenre3={""} hrefGenre4={""} hrefGenre5={""}
      li13={"li"} li14={"li"} li15={"li"} li16={"li"} li17={"li"} li18={"li"} li19={"li"} li20={"li"} li21={"li"} li22={"li"} li23={"li"} li24={"li"}
      li25={"li"} li26={"li"} li27={"li"} li28={"li"} li29={"li"} li30={"li"} li31={"li"} li32={"li"} li33={"li"} li34={"li"} li35={"li"} li36={"li"} 
      li37={"li"} li38={"li"} li39={"li"} li40={"li"}

      />} />
      
      <Route path="/spy-x-family" element={<Capitulos12 tituloAnime={"Spy x Family"} 
      descripcion={'Todo el mundo tiene una parte de sí mismo que no puede mostrar a nadie más. En un momento en que todas las naciones del mundo estaban involucradas en una feroz guerra de información que ocurría a puertas cerradas, Ostania y Westalis habían estado en un estado de guerra fría entre sí durante décadas. La División Enfocada en el Este (WISE) de los Servicios de Inteligencia de Westalis envía a su espía más talentoso, "Crepúsculo", en una misión ultrasecreta para investigar los movimientos de Donovan Desmond, el presidente del Partido de Unidad Nacional de Ostania, quien amenaza los esfuerzos de paz entre las dos naciones. Esta misión se conoce como "Operación Strix". Consiste en "armar una familia en una semana para infiltrarse en las reuniones sociales organizadas por la escuela de élite a la que asiste el hijo de Desmond". "Crepúsculo" asume la identidad del psiquiatra Loid Forger y comienza a buscar familiares. Pero Anya, la hija que adopta, resulta tener la capacidad de leer la mente de las personas, mientras que su esposa, Yor, ¡es una asesina! Dado que a cada uno le interesa mantener estos hechos ocultos, comienzan a vivir juntos mientras se ocultan sus verdaderas identidades. La paz mundial está ahora en manos de esta nueva familia mientras se embarcan en una aventura llena de sorpresas.'} 
      anime={"Spy x Family"} tipo={"TV"} numeroEpisodios={"12"} estado={"Finalizado"}  
      imagenAnime={"https://www.animefenix.com/cdn/animes/cover/6244890fb1517/spy-x-family.jpg"} 
      numeroCapitulo1={"1"} numeroCapitulo2={"2"} numeroCapitulo3={"3"} numeroCapitulo4={"4"} numeroCapitulo5={"5"} numeroCapitulo6={"6"} numeroCapitulo7={"7"} numeroCapitulo8={"8"} numeroCapitulo9={"9"} numeroCapitulo10={"10"}
      numeroCapitulo11={"11"} numeroCapitulo12={"12"} 
      sec1={"sec"} sec2={"sec"} sec3={"sec"}
      genero1={""} genero2={""} genero3={""} genero4={""} genero5={""}
      genre1={"disable"} genre2={"disable"} 
      genre3={"button is-small is-orange is-outlined is-roundedX"} genre4={"disable"} genre5={"disable"}
      hrefGenre1={""} hrefGenre2={""} hrefGenre3={""} hrefGenre4={""} hrefGenre5={""}
      capituloAnime1={"/ver/spy-x-family-1"} capituloAnime2={"/ver/spy-x-family-2"} capituloAnime3={"/ver/spy-x-family-3"} capituloAnime4={"/ver/spy-x-family-4"} 
      capituloAnime5={"/ver/spy-x-family-5"} capituloAnime6={"/ver/spy-x-family-6"} capituloAnime7={"/ver/spy-x-family-7"} capituloAnime8={"/ver/spy-x-family-8"} 
      capituloAnime9={"/ver/spy-x-family-9"} capituloAnime10={"/ver/spy-x-family-10"} capituloAnime11={"/ver/spy-x-family-11"} capituloAnime12={"/ver/spy-x-family-12"} 
      li13={"li"} li14={"li"} li15={"li"} li16={"li"} li17={"li"} li18={"li"} li19={"li"} li20={"li"} li21={"li"} li22={"li"} li23={"li"} li24={"li"}
      li25={"li"} li26={"li"} li27={"li"} li28={"li"} li29={"li"} li30={"li"} li31={"li"} li32={"li"} li33={"li"} li34={"li"} li35={"li"} li36={"li"} 
      li37={"li"} li38={"li"} li39={"li"} li40={"li"}
      />} />
      
      <Route path="/date-a-live-IV" element={<Capitulos12 tituloAnime={"Date a Live IV"} 
      descripcion={"Cuarta temporada de Date A Live"} 
      anime={"Date a Live IV"} tipo={"TV"} numeroEpisodios={"12"} estado={"Finalizado"}  
      imagenAnime={"https://www.animefenix.com/cdn/animes/cover/6244857fc1e27/date-a-live-iv.jpg"} 
      numeroCapitulo1={"1"} numeroCapitulo2={"2"} numeroCapitulo3={"3"} numeroCapitulo4={"4"} numeroCapitulo5={"5"} numeroCapitulo6={"6"} numeroCapitulo7={"7"} numeroCapitulo8={"8"} numeroCapitulo9={"9"} numeroCapitulo10={"10"}
      numeroCapitulo11={"11"} numeroCapitulo12={"12"} 
      capituloAnime1={"/ver/date-a-live-IV-1"} capituloAnime2={"/ver/date-a-live-IV-2"} capituloAnime3={"/ver/date-a-live-IV-3"} capituloAnime4={"/ver/date-a-live-IV-4"} 
      capituloAnime5={"/ver/date-a-live-IV-5"} capituloAnime6={"/ver/date-a-live-IV-6"} 
      capituloAnime7={"/ver/date-a-live-IV-7"} capituloAnime8={"/ver/date-a-live-IV-8"} capituloAnime9={"/ver/date-a-live-IV-9"} capituloAnime10={"/ver/date-a-live-IV-10"}
      capituloAnime11={"/ver/date-a-live-IV-11"} capituloAnime12={"/ver/date-a-live-IV-12"}
      sec1={"sec"} sec2={"sec"} sec3={"sec"}
      genero1={""} genero2={""} genero3={""} genero4={""} genero5={""}
      genre1={"disable"} genre2={"disable"} 
      genre3={"button is-small is-orange is-outlined is-roundedX"} genre4={"disable"} genre5={"disable"}
      hrefGenre1={""} hrefGenre2={""} hrefGenre3={""} hrefGenre4={""} hrefGenre5={""}
      li13={"li"} li14={"li"} li15={"li"} li16={"li"} li17={"li"} li18={"li"} li19={"li"} li20={"li"} li21={"li"} li22={"li"} li23={"li"} li24={"li"}
      li25={"li"} li26={"li"} li27={"li"} li28={"li"} li29={"li"} li30={"li"} li31={"li"} li32={"li"} li33={"li"} li34={"li"} li35={"li"} li36={"li"} 
      li37={"li"} li38={"li"} li39={"li"} li40={"li"}
      />} />
      
      <Route path="/tate-no-yuusha-no-naraigari-segunda-temporada" element={<Capitulos12 tituloAnime={"Tate no Yuusha no Naraigari Segunda Temporada"} 
      descripcion={'Naofumi Iwatani, un estudiante universitario ordinario, es convocado a otro mundo como uno de los Cuatro Héroes Cardinales: el "Héroe del Escudo". A pesar de las falsas acusaciones y una serie de desgracias, Naofumi unió fuerzas con sus queridas compañeras Raphtalia, Filo y Melty para proteger a las personas de las "Olas" de la Catástrofe. Con sus logros y la ayuda de la reina Melromarc, Naofumi recupera su honor y ahora posee un territorio. Se prepara para contrarrestar la próxima Ola. Sin embargo, se dice que la "Tortuga Espiritual", un monstruo que provocará un desastre sin precedentes, resucitó en el país del Reino de la Tortuga Espiritual, al este de Melromarc. A pedido de la Reina para someter a la Tortuga Espiritual, Naofumi se dirige al Reino de la Tortuga Espiritual, junto con su nuevo miembro del grupo, Lecia. Mientras las fuerzas aliadas se reúnen, Ost-Horai, concubina del Rey del Reino de las Tortugas Espirituales y regente del país, aparece ante Naofumi. Ella le informa a Naofumi de una persona que resucitó a la fuerza a la Tortuga Espiritual. ¿Naofumi someterá a la Tortuga Espiritual y llegará a la mente maestra? El Héroe del Escudo se levanta una vez más para proteger las cosas queridas para él.'} 
      anime={"Tate no Yuusha no Naraigari Segunda Temporada"} 
      tipo={"TV"} numeroEpisodios={"13"} estado={"Finalizado"}  
      imagenAnime={"https://www.animefenix.com/cdn/animes/cover/62447f98a25d4/tate-no-yuusha-no-nariagari-season-2.jpg"}
      numeroCapitulo1={"1"} numeroCapitulo2={"2"} numeroCapitulo3={"3"} numeroCapitulo4={"4"} numeroCapitulo5={"5"} numeroCapitulo6={"6"} numeroCapitulo7={"7"} numeroCapitulo8={"8"} numeroCapitulo9={"9"} numeroCapitulo10={"10"}
      numeroCapitulo11={"11"} numeroCapitulo12={"12"} numeroCapitulo13={"13"}  
      capituloAnime1={"/ver/tate-no-yuusha-no-naraigari-segunda-temporada-1"} capituloAnime2={"/ver/tate-no-yuusha-no-naraigari-segunda-temporada-2"} capituloAnime3={"/ver/tate-no-yuusha-no-naraigari-segunda-temporada-3"} 
      capituloAnime4={"/ver/tate-no-yuusha-no-naraigari-segunda-temporada-4"} capituloAnime5={"/ver/tate-no-yuusha-no-naraigari-segunda-temporada-5"} capituloAnime6={"/ver/tate-no-yuusha-no-naraigari-segunda-temporada-6"} 
      capituloAnime7={"/ver/tate-no-yuusha-no-naraigari-segunda-temporada-7"} capituloAnime8={"/ver/tate-no-yuusha-no-naraigari-segunda-temporada-8"} capituloAnime9={"/ver/tate-no-yuusha-no-naraigari-segunda-temporada-9"} 
      capituloAnime10={"/ver/tate-no-yuusha-no-naraigari-segunda-temporada-10"} capituloAnime11={"/ver/tate-no-yuusha-no-naraigari-segunda-temporada-11"} capituloAnime12={"/ver/tate-no-yuusha-no-naraigari-segunda-temporada-12"} 
      capituloAnime13={"/ver/tate-no-yuusha-no-naraigari-segunda-temporada-13"} textoSecuela={"Precuela"} nombreSecuela={"Tate no Yuusha no Naraigari"} hrefSecuela={"/tate-no-yuusha-no-naraigari"}
      sec2={"sec"} sec3={"sec"}
      genero1={""} genero2={""} genero3={""} genero4={""} genero5={""}
      genre1={"disable"} genre2={"disable"} 
      genre3={"button is-small is-orange is-outlined is-roundedX"} genre4={"disable"} genre5={"disable"}
      hrefGenre1={""} hrefGenre2={""} hrefGenre3={""} hrefGenre4={""} hrefGenre5={""}
      li13={"li"} li14={"li"} li15={"li"} li16={"li"} li17={"li"} li18={"li"} li19={"li"} li20={"li"} li21={"li"} li22={"li"} li23={"li"} li24={"li"}
      li25={"li"} li26={"li"} li27={"li"} li28={"li"} li29={"li"} li30={"li"} li31={"li"} li32={"li"} li33={"li"} li34={"li"} li35={"li"} li36={"li"} 
      li37={"li"} li38={"li"} li39={"li"} li40={"li"}
      /> } />
      
      <Route path="/tomodachi-game" element={<Capitulos12 tituloAnime={"Tomodachi Game"} 
      descripcion={'El estudiante de secundaria Katagiri Yuichi, que valora la amistad por encima de todo, disfruta de una vida plena con sus amigos cercanos Sawagiri Shiho, Mikasa Tenji, Shibe Makoto y Kokorogi Yutori. Sin embargo, después de un incidente en particular, se ven arrastrados a un juego de pago de deudas. La única manera de ganar el "Juego Tomodachi" es no dudar de sus amigos. Unidos por sólidas amistades, el juego debería haber sido fácil, pero... ¿Confiarán o traicionarán a sus preciosos amigos? ¡La verdadera naturaleza de la humanidad se expone en el último juego psicológico!'} 
      anime={"Tomodachi Game"} tipo={"TV"} numeroEpisodios={"12"} estado={"Finalizado"}  
      imagenAnime={"https://www.animefenix.com/cdn/animes/cover/6243d9a8a5622/tomodachi-game.jpg"} 
      numeroCapitulo1={"1"} numeroCapitulo2={"2"} numeroCapitulo3={"3"} numeroCapitulo4={"4"} numeroCapitulo5={"5"} numeroCapitulo6={"6"} numeroCapitulo7={"7"} numeroCapitulo8={"8"} numeroCapitulo9={"9"} numeroCapitulo10={"10"}
      numeroCapitulo11={"11"} numeroCapitulo12={"12"}
      capituloAnime1={"/ver/tomodachi-game-1"} capituloAnime2={"/ver/tomodachi-game-2"} capituloAnime3={"/ver/tomodachi-game-3"} capituloAnime4={"/ver/tomodachi-game-4"} 
      capituloAnime5={"/ver/tomodachi-game-5"} capituloAnime6={"/ver/tomodachi-game-6"} capituloAnime7={"/ver/tomodachi-game-7"} capituloAnime8={"/ver/tomodachi-game-8"} 
      capituloAnime9={"/ver/tomodachi-game-9"} capituloAnime10={"/ver/tomodachi-game-10"}
      capituloAnime11={"/ver/tomodachi-game-11"} capituloAnime12={"/ver/tomodachi-game-12"}
      sec1={"sec"} sec2={"sec"} sec3={"sec"}
      genero1={""} genero2={""} genero3={""} genero4={""} genero5={""}
      genre1={"disable"} genre2={"disable"} 
      genre3={"button is-small is-orange is-outlined is-roundedX"} genre4={"disable"} genre5={"disable"}
      hrefGenre1={""} hrefGenre2={""} hrefGenre3={""} hrefGenre4={""} hrefGenre5={""}
      li13={"li"} li14={"li"} li15={"li"} li16={"li"} li17={"li"} li18={"li"} li19={"li"} li20={"li"} li21={"li"} li22={"li"} li23={"li"} li24={"li"}
      li25={"li"} li26={"li"} li27={"li"} li28={"li"} li29={"li"} li30={"li"} li31={"li"} li32={"li"} li33={"li"} li34={"li"} li35={"li"} li36={"li"} 
      li37={"li"} li38={"li"} li39={"li"} li40={"li"} 
      />} />
      
      <Route path="/baraou-no-souretsu" element={<Capitulos12 tituloAnime={"Baraou no Souretsu"} 
      descripcion={"Richard, el ambicioso tercer hijo de la Casa de York, cree que está maldito, condenado desde el nacimiento hasta la oscuridad eterna. Pero, ¿es realmente el destino lo que lo pone en el camino de la destrucción personal? ¿O sus propios anhelos atormentados? Basada en un primer borrador de Ricardo III de Shakespeare, esta oscura fantasía encuentra al hombre que podría ser rey entre mundos, entre clases, entre el bien y el mal."} 
      anime={"Baraou no Souretsu"} tipo={"TV"} numeroEpisodios={"24"} estado={"Finalizado"}  
      imagenAnime={"https://www.animefenix.com/cdn/animes/cover/61d5dfcce04ed/baraou-no-souretsu.jpg"} 
      numeroCapitulo1={"1"} numeroCapitulo2={"2"} numeroCapitulo3={"3"} numeroCapitulo4={"4"} numeroCapitulo5={"5"} numeroCapitulo6={"6"} numeroCapitulo7={"7"} numeroCapitulo8={"8"} numeroCapitulo9={"9"} numeroCapitulo10={"10"}
      numeroCapitulo11={"11"} numeroCapitulo12={"12"} numeroCapitulo13={"13"} numeroCapitulo14={"14"} numeroCapitulo15={"15"} numeroCapitulo16={"16"} numeroCapitulo17={"17"} numeroCapitulo18={"18"} numeroCapitulo19={"19"} numeroCapitulo20={"20"}
      numeroCapitulo21={"21"} numeroCapitulo22={"22"} numeroCapitulo23={"23"} numeroCapitulo24={"24"} 
      sec1={"sec"} sec2={"sec"} sec3={"sec"}
      genero1={""} genero2={""} genero3={""} genero4={""} genero5={""}
      genre1={"disable"} genre2={"disable"} 
      genre3={"button is-small is-orange is-outlined is-roundedX"} genre4={"disable"} genre5={"disable"}
      hrefGenre1={""} hrefGenre2={""} hrefGenre3={""} hrefGenre4={""} hrefGenre5={""}
      capituloAnime1={"/ver/baraou-no-souretsu-1"} capituloAnime2={"/ver/baraou-no-souretsu-2"} capituloAnime3={"/ver/baraou-no-souretsu-3"} capituloAnime4={"/ver/baraou-no-souretsu-4"} 
      capituloAnime5={"/ver/baraou-no-souretsu-5"} capituloAnime6={"/ver/baraou-no-souretsu-6"} capituloAnime7={"/ver/baraou-no-souretsu-7"} capituloAnime8={"/ver/baraou-no-souretsu-8"} 
      capituloAnime9={"/ver/baraou-no-souretsu-9"} capituloAnime10={"/ver/baraou-no-souretsu-10"}
      capituloAnime11={"/ver/baraou-no-souretsu-11"} capituloAnime12={"/ver/baraou-no-souretsu-12"} capituloAnime13={"/ver/baraou-no-souretsu-13"} capituloAnime14={"/ver/baraou-no-souretsu-14"} 
      capituloAnime15={"/ver/baraou-no-souretsu-15"} capituloAnime16={"/ver/baraou-no-souretsu-16"} capituloAnime17={"/ver/baraou-no-souretsu-17"} capituloAnime18={"/ver/baraou-no-souretsu-18"} 
      capituloAnime19={"/ver/baraou-no-souretsu-19"} capituloAnime20={"/ver/baraou-no-souretsu-20"} 
      capituloAnime21={"/ver/baraou-no-souretsu-21"} capituloAnime22={"/ver/baraou-no-souretsu-22"} capituloAnime23={"/ver/baraou-no-souretsu-23"} capituloAnime24={"/ver/baraou-no-souretsu-24"}
      li25={"li"} li26={"li"} li27={"li"} li28={"li"} li29={"li"} li30={"li"} li31={"li"} li32={"li"} li33={"li"} li34={"li"} li35={"li"} li36={"li"} 
      li37={"li"} li38={"li"} li39={"li"} li40={"li"} 
      />} />
      
      <Route path="karakuri-circus" element={<Capitulos12 tituloAnime={"Karakuri Circus"} 
      descripcion={"El protagonista, Masaru, acaba de heredar una gran fortuna tras la muerte de su padre. Sin embargo, la gente está tratando de ponerlo en sus manos por cualquier medio necesario, incluso si eso significa matarlo. Narumi ayuda a Masaru a ser secuestrado después de luchar contra figuras extrañas. Descubre que no son humanos, sino títeres de madera con una fuerza increíble. Después de una dura lucha, Narumi se ve obligado a admitir que no es un oponente para ellos; y justo cuando empieza a pensar que Masaru será capturado, Shirogane, el vigilante de Masaru, llega de Francia con un arma, el títere Arlequin. Aquí comienza la historia de Karakuri Circus."} 
      anime={"Karakuri Circus"} tipo={"TV"} numeroEpisodios={"36"} estado={"Finalizado"}  
      imagenAnime={"https://www.animefenix.com/cdn/animes/cover/62ac02707f3b4/karakuri-circus.jpg"} 
      numeroCapitulo1={"1"} numeroCapitulo2={"2"} numeroCapitulo3={"3"} numeroCapitulo4={"4"} numeroCapitulo5={"5"} numeroCapitulo6={"6"} numeroCapitulo7={"7"} numeroCapitulo8={"8"} numeroCapitulo9={"9"} numeroCapitulo10={"10"}
      numeroCapitulo11={"11"} numeroCapitulo12={"12"} numeroCapitulo13={"13"} numeroCapitulo14={"14"} numeroCapitulo15={"15"} numeroCapitulo16={"16"} numeroCapitulo17={"17"} numeroCapitulo18={"18"} numeroCapitulo19={"19"} numeroCapitulo20={"20"}
      numeroCapitulo21={"21"} numeroCapitulo22={"22"} numeroCapitulo23={"23"} numeroCapitulo24={"24"} numeroCapitulo25={"25"} numeroCapitulo26={"26"} 
      numeroCapitulo27={"27"} numeroCapitulo28={"28"} numeroCapitulo29={"29"} numeroCapitulo30={"30"} 
      numeroCapitulo31={"31"} numeroCapitulo32={"32"} numeroCapitulo33={"33"} numeroCapitulo34={"34"} numeroCapitulo35={"35"} numeroCapitulo36={"36"} 
      capituloAnime1={"/ver/karakuri-circus-1"} capituloAnime2={"/ver/karakuri-circus-2"} capituloAnime3={"/ver/karakuri-circus-3"} capituloAnime4={"/ver/karakuri-circus-4"} 
      capituloAnime5={"/ver/karakuri-circus-5"} capituloAnime6={"/ver/karakuri-circus-6"} capituloAnime7={"/ver/karakuri-circus-7"} capituloAnime8={"/ver/karakuri-circus-8"} 
      capituloAnime9={"/ver/karakuri-circus-9"} capituloAnime10={"/ver/karakuri-circus-10"}
      capituloAnime11={"/ver/karakuri-circus-11"} capituloAnime12={"/ver/karakuri-circus-12"} capituloAnime13={"/ver/karakuri-circus-13"} capituloAnime14={"/ver/karakuri-circus-14"} 
      capituloAnime15={"/ver/karakuri-circus-15"} capituloAnime16={"/ver/karakuri-circus-16"} capituloAnime17={"/ver/karakuri-circus-17"} capituloAnime18={"/ver/karakuri-circus-18"} 
      capituloAnime19={"/ver/karakuri-circus-19"} capituloAnime20={"/ver/karakuri-circus-20"} capituloAnime21={"/ver/karakuri-circus-21"} capituloAnime22={"/ver/karakuri-circus-22"} 
      capituloAnime23={"/ver/karakuri-circus-23"} capituloAnime24={"/ver/karakuri-circus-24"} capituloAnime25={"/ver/karakuri-circus-25"} capituloAnime26={"/ver/karakuri-circus-26"}
      capituloAnime27={"/ver/karakuri-circus-27"} capituloAnime28={"/ver/karakuri-circus-28"} capituloAnime29={"/ver/karakuri-circus-29"} capituloAnime30={"/ver/karakuri-circus-30"}
      capituloAnime31={"/ver/karakuri-circus-31"} capituloAnime32={"/ver/karakuri-circus-32"} capituloAnime33={"/ver/karakuri-circus-33"} capituloAnime34={"/ver/karakuri-circus-34"}
      capituloAnime35={"/ver/karakuri-circus-35"} capituloAnime36={"/ver/karakuri-circus-36"}  
      li37={"li"} li38={"li"} li39={"li"} li40={"li"}
      sec1={"sec"} sec2={"sec"} sec3={"sec"}
      genero1={""} genero2={""} genero3={""} genero4={""} genero5={""}
      genre1={"disable"} genre2={"disable"} 
      genre3={"button is-small is-orange is-outlined is-roundedX"} genre4={"disable"} genre5={"disable"}
      hrefGenre1={""} hrefGenre2={""} hrefGenre3={""} hrefGenre4={""} hrefGenre5={""} 
      />} />
      
      <Route path="/extreme-hearts" element={<Capitulos12 tituloAnime={"Extreme Hearts"}
      sec2={"sec"} sec3={"sec"} sec1={"sec"}
      genero1={""} genero2={""} genero3={""} genero4={""} genero5={""}
      genre1={"disable"} genre2={"disable"} 
      genre3={"button is-small is-orange is-outlined is-roundedX"} genre4={"disable"} genre5={"disable"}
      hrefGenre1={""} hrefGenre2={""} hrefGenre3={""} hrefGenre4={""} hrefGenre5={""}
      li8={"li"} li9={"li"} li10={"li"} li11={"li"} li12={"li"}
      li13={"li"} li14={"li"} li15={"li"} li16={"li"} li17={"li"} li18={"li"} li19={"li"} li20={"li"} li21={"li"} li22={"li"} li23={"li"} li24={"li"}
      li25={"li"} li26={"li"} li27={"li"} li28={"li"} li29={"li"} li30={"li"} li31={"li"} li32={"li"} li33={"li"} li34={"li"} li35={"li"} li36={"li"} 
      li37={"li"} li38={"li"} li39={"li"} li40={"li"}  
      descripcion={'La historia está ambientada en el futuro, no mucho después del día de hoy. Los hiperdeportes, que usan equipos extremos como elementos de apoyo, se han convertido en competencias de pasatiempos populares entre niños y adultos. Hiyori Hayama es una cantante de secundaria que no tiene nada que ver con Hyper Sports, pero cierto incidente pone en marcha la historia: "Esta es la historia de cómo conocimos a nuestros mejores amigos".'} 
      anime={"Extreme Hearts"} tipo={"TV"} numeroEpisodios={"7"} estado={"En Emision"}  
      imagenAnime={"https://www.animefenix.com/cdn/animes/cover/62c5b68624724/extreme-hearts.jpg"} 
      numeroCapitulo1={"1"} numeroCapitulo2={"2"} numeroCapitulo3={"3"} numeroCapitulo4={"4"} numeroCapitulo5={"5"} numeroCapitulo6={"6"} numeroCapitulo7={"7"} numeroCapitulo8={"8"} numeroCapitulo9={"9"} numeroCapitulo10={"10"}
      numeroCapitulo11={"11"} numeroCapitulo12={"12"} numeroCapitulo13={"13"} numeroCapitulo14={"14"} numeroCapitulo15={"15"} numeroCapitulo16={"16"} numeroCapitulo17={"17"} numeroCapitulo18={"18"} numeroCapitulo19={"19"} numeroCapitulo20={"20"}
      numeroCapitulo21={"21"} numeroCapitulo22={"22"} numeroCapitulo23={"23"} numeroCapitulo24={"24"} 
      capituloAnime1={"/ver/extreme-hearts-1"} capituloAnime2={"/ver/extreme-hearts-2"} capituloAnime3={"/ver/extreme-hearts-3"} capituloAnime4={"/ver/extreme-hearts-4"} 
      capituloAnime5={"/ver/extreme-hearts-5"} capituloAnime6={"/ver/extreme-hearts-6"} capituloAnime7={"/ver/extreme-hearts-7"} capituloAnime8={"/ver/extreme-hearts-8"} 
      capituloAnime9={"/ver/extreme-hearts-9"} capituloAnime10={"/ver/extreme-hearts-10"}
      capituloAnime11={"/ver/extreme-hearts-11"} capituloAnime12={"/ver/extreme-hearts-12"} capituloAnime13={"/ver/extreme-hearts-13"} capituloAnime14={"/ver/extreme-hearts-14"} 
      capituloAnime15={"/ver/extreme-hearts-15"} capituloAnime16={"/ver/extreme-hearts-16"} capituloAnime17={"/ver/extreme-hearts-17"} capituloAnime18={"/ver/extreme-hearts-18"} 
      capituloAnime19={"/ver/extreme-hearts-19"} capituloAnime20={"/ver/extreme-hearts-20"} 
      capituloAnime21={"/ver/extreme-hearts-21"} capituloAnime22={"/ver/extreme-hearts-22"} capituloAnime23={"/ver/extreme-hearts-23"} capituloAnime24={"/ver/extreme-hearts-24"}
      />} />
      


      <Route path="/golden-time" exact element={<Capitulos12 tituloAnime={"Golden Time"} 
      genero1={"Comedia"} genero2={"Romance"} genero3={"Seinen"} genero4={""} genero5={""}
      genre1={"button is-small is-orange is-outlined is-roundedX"} genre2={"button is-small is-orange is-outlined is-roundedX"} 
      genre3={"button is-small is-orange is-outlined is-roundedX"} genre4={"disable"} genre5={"disable"}
      hrefGenre1={"/generos=comedia"} hrefGenre2={"/generos=romance"} hrefGenre3={"/generos=seinen"} hrefGenre4={""} hrefGenre5={""}
      sec2={"sec"} sec3={"sec"} sec1={"sec"}
      li25={"li"} li26={"li"} li27={"li"} li28={"li"} li29={"li"} li30={"li"} li31={"li"} li32={"li"} li33={"li"} li34={"li"} li35={"li"} li36={"li"} li37={"li"} li38={"li"} li39={"li"} li40={"li"}
      descripcion={'Tada Banri, es un estudiante de nuevo ingreso en una escuela privada de derecho en Tokio, después de la ceremonia de apertura, él estaba completamente perdido tratando de encontrar el camino hacia el salón de orientación para los de primer año. En ese momento, se encuentra con un estudiante de primer año, que también estaba perdido, Mitsuo Yanagisawa. De alguna manera llegaron al lugar donde se dirigían, pero de repente frente a los dos aparece una chica hermosa que sostiene un ramo de rosas. La chica golpeó a Mitsuo en la cara con el ramo. "felicidades, estudiante de nuevo ingreso", fue todo lo que dijo, y luego se fue. La mujer que golpeo a Mitsuo se trataba de su amiga de la infancia, Kaga Kouko. Cuando eran niños se habían prometido a casarse cuando algún día llegarán a cumplir sus sueños. Con el fin de escapar de ella, Mitsuo había salido secretamente y tomado el examen de este colegio privado muy conocido.'}
      imagenAnime="https://www.animefenix.com/cdn/animes/cover/5fd97249d303d/golden-time.jpg" 
      tipo={"TV"} numeroEpisodios={"24"} 
      estado={"Finalizado"} numeroCapitulo1={"1"} numeroCapitulo2={"2"} numeroCapitulo3={"3"} numeroCapitulo4={"4"} numeroCapitulo5={"5"} numeroCapitulo6={"6"} 
      numeroCapitulo7={"7"} numeroCapitulo8={"8"} numeroCapitulo9={"9"} numeroCapitulo10={"10"} numeroCapitulo11={"11"} numeroCapitulo12={"12"} 
      numeroCapitulo13={"13"} numeroCapitulo14={"14"} numeroCapitulo15={"15"} numeroCapitulo16={"16"} numeroCapitulo17={"17"} numeroCapitulo18={"18"} 
      numeroCapitulo19={"19"} numeroCapitulo20={"20"} numeroCapitulo21={"21"} numeroCapitulo22={"22"} numeroCapitulo23={"23"} numeroCapitulo24={"24"} 
      anime={"Golden Time "} 
      capituloAnime1={"/ver/golden-time-1"} capituloAnime2={"/ver/golden-time-2"} capituloAnime3={"/ver/golden-time-3"} capituloAnime4={"/ver/golden-time-4"} 
      capituloAnime5={"/ver/golden-time-5"} capituloAnime6={"/ver/golden-time-6"} capituloAnime7={"/ver/golden-time-7"} capituloAnime8={"/ver/golden-time-8"} 
      capituloAnime9={"/ver/golden-time-9"} capituloAnime10={"/ver/golden-time-10"} capituloAnime11={"/ver/golden-time-11"} capituloAnime12={"/ver/golden-time-12"}
      capituloAnime13={"/ver/golden-time-13"} capituloAnime14={"/ver/golden-time-14"} capituloAnime15={"/ver/golden-time-15"} capituloAnime16={"/ver/golden-time-16"} 
      capituloAnime17={"/ver/golden-time-17"} capituloAnime18={"/ver/golden-time-18"} capituloAnime19={"/ver/golden-time-19"} capituloAnime20={"/ver/golden-time-20"} 
      capituloAnime21={"/ver/golden-time-21"} capituloAnime22={"/ver/golden-time-22"} capituloAnime23={"/ver/golden-time-23"} capituloAnime24={"/ver/golden-time-24"}    
      />}/>



   {/* Filtro */}
   <Route path="/estado=finalizado" element={<Filter finalizado={"dropdown-item active"} enEmision={"dropdown-item"} proximamente={"dropdown-item"} />}/>
   <Route path="/estado=proximamente" element={<Filter finalizado={"dropdown-item"} enEmision={"dropdown-item"} proximamente={"dropdown-item active"}/>}/>

   {/*  */}
      ---------------
   <Route path="/en-emision" exact element={<EnEmision 
      img1=""
      img2="" 
      img3="" 
      img4="" 
      img5="" 
      img6="" 
      img7="" 
      img8="" 
      img9="" 
      img10=""
      img11="" 
      img12="" 
      img13=""
      img14="" 
      img15="" 
      img16="" 
      img17="" 
      img18="" 
      img19=""
      img20="" 
      img21="" 
      img22="" 
      img23 ="" 
      img24=""
      tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="/" href2="/"href3="/" href4="/" 
      href5="/" href6="/" href7="/" href8="/" href9="/" 
      href10="/" href11="/" href12="/" href13="/" href14="/" 
      href15="/" href16="/" href17="/" 
      href18="/" href19="/" href20="/" href21="/" href22="/"
      href23="/" href24="/"
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" 
      classpag1="active" classpag11="disable"
      siguiente={"Siguiente"} pagSiguiente={"/en-emision-2"}
      pag1="/en-emision" pag2="/en-emision-2" pag3="/en-emision-3" pag4="/en-emision-4" pag5="/en-emision-5" pag6="/en-emision-6" pag7="/en-emision-7" pag8="/en-emision-8" pag9="/en-emision-9" pag10="/en-emision-10"
      primero="1" segundo="2" tercero="3" cuarto="4" quinto="5" sexto="6" septimo="7" octavo="8" noveno="9" decimo="10"  
     />} />

    {/*  */}

     {/* Animes */}

     <Route path="/animes" element={<Componente1 
      img1="https://www.animefenix.com/cdn/animes/cover/5f7e65dc3eb65/akudama-drive.jpg"
      img2="https://www.animefenix.com/cdn/animes/cover/614e84bf0253f/hanyo-no-yashahime-ni-no-shou.jpg" 
      img3="https://www.animefenix.com/cdn/animes/cover/60dd1bd47b14c/heion-sedai-no-idaten-tachi.jpg" 
      img4="https://www.animefenix.com/cdn/animes/cover/60d7ea610da30/tensei-shitara-slime-datta-ken-2nd-season-part-2.jpg" 
      img5="https://www.animefenix.com/cdn/animes/cover/60d7d39e29e28/peach-boy-riverside.jpg" 
      img6="https://www.animefenix.com/cdn/animes/cover/5f66cfddef53a/jujutsu-kaisen.jpg" 
      img7="https://www.animefenix.com/cdn/animes/cover/5f94201ce23b1/shingeki-no-bahamut-virgin-soul.jpg" 
      img8="https://www.animefenix.com/cdn/animes/cover/5e4efb4be5001/castlevania-season-2.jpg" 
      img9="https://www.animefenix.com/cdn/animes/cover/5de4438a79aa5/overlord-iii.jpg" 
      img10="https://www.animefenix.com/cdn/animes/cover/5ebaac070d30a/ao-no-exorcist-kyoto-fujouou-hen.png"
      img11="https://www.animefenix.com/cdn/animes/cover/5d9ad108f3780/fairy-gone.jpg" 
      img12="https://www.animefenix.com/cdn/animes/cover/62b391c6e1119/dr-stone-ryusui.png" 
      img13="https://www.animefenix.com/cdn/animes/cover/62b39151eb430/isekai-yakkyoku.jpg"
      img14="https://www.animefenix.com/cdn/animes/cover/62b390dacca80/kuro-no-shoukanshi.jpg" 
      img15="https://www.animefenix.com/cdn/animes/cover/5d95594d48a4f/fairy-gone-2nd-season.jpg" 
      img16="https://www.animefenix.com/cdn/animes/cover/62b38b1fc1df2/isekai-meikyuu-de-harem-wo.jpg" 
      img17="https://www.animefenix.com/cdn/animes/cover/62b9c44a32f53/youkoso-jitsuryoku-shijou-shugi-no-kyoushitsu-e-2nd-season.jpg" 
      img18="https://www.animefenix.com/cdn/animes/cover/6244890fb1517/spy-x-family.jpg" 
      img19="https://www.animefenix.com/cdn/animes/cover/6244857fc1e27/date-a-live-iv.jpg"
      img20="https://www.animefenix.com/cdn/animes/cover/62447f98a25d4/tate-no-yuusha-no-nariagari-season-2.jpg" 
      img21="https://www.animefenix.com/cdn/animes/cover/6243d9a8a5622/tomodachi-game.jpg" 
      img22="https://www.animefenix.com/cdn/animes/cover/61d5dfcce04ed/baraou-no-souretsu.jpg" 
      img23 ="https://www.animefenix.com/cdn/animes/cover/62ac02707f3b4/karakuri-circus.jpg" 
      img24="https://www.animefenix.com/cdn/animes/cover/62c5b68624724/extreme-hearts.jpg"
      tv="TV" emision="En Emision"
      year1="2020" year2="2021" year3="2021" year4="2021" year5="2021" year6="2020" year7="2017" year8="2018"
      year9="2018" year10="2017" year11="2019" year12="2022" year13="2022" year14="2022" year15="2019" year16="2022"
      year17="2022" year18="2022" year19="2022" year20="2022" year21="2022" year22="2022" year23="2022" year24="2022"
      href1="/akudama-drive" href2="/hanyo-no-yashahime-ni-no-shou"href3="/heion-sedai-no-idaten-tachi" href4="/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2" 
      href5="/peach-boy-riverside" href6="/jujutsu-kaisen" href7="/shingeki-no-bahamut:virgin-soul" href8="/castlevania-segunda-temporada" href9="/overlord-III" 
      href10="/ao-no-exorcist:-kyoto-fujouou-hen" href11="/fairy-gone" href12="/dr-stone-ryusui" href13="/isekai-yakkyoku" href14="/kuro-no-shoukanshi" 
      href15="/fairy-gone-segunda-temporada" href16="/isekai-meiryuu-de-harem-wo" href17="/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada" 
      href18="/spy-x-family" href19="/date-a-live-IV" href20="/tate-no-yuusha-no-naraigari-segunda-temporada" href21="/tomodachi-game" href22="/baraou-no-souretsu"
      href23="/karakuri-circus" href24="/extreme-hearts"
      anime1="Akudama Drive" anime2="Hanyo no Yashahime ni no Shou" anime3="Heion Sedai no Idaten Tachi" anime4="Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2" anime5="Peach Boy Riverside" anime6="Jujutsu Kaisen" anime7="Shingeki no Bahamut Virgin Soul" anime8="Castlevania Segunda Temporada" 
      anime9="Overlord III" anime10="Ao no Exorcist Kyoto Fujouou Hen" anime11="Fairy Gone" anime12="Dr Stone Rysui" anime13="Isekai Yakkyoku" anime14="Kuro no Shoukanshi" anime15="Fairy Gone Segunda Temporada"
      anime16="Isekai Meiryuu de Harem wo" anime17="Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e Segunda Temporada" anime18="Spy x Family" anime19="Date a Live IV" anime20="Tate no Yuusha no Naraigari Segunda Temporada" anime21="Tomodachi Game" anime22="Baraou no Souretsu" anime23="Karakuri Circus"
      anime24="Extreme Hearts" 
      classpag1="active" classpag11="disable"
      siguiente={"Siguiente"} pagSiguiente={"/animes-2"}
      pag1="/animes" pag2="/animes-2" pag3="/animes-3" pag4="/animes-4" pag5="/animes-5" pag6="/animes-6" pag7="/animes-7" pag8="/animes-8" pag9="/animes-9" pag10="/animes-10"
      primero="1" segundo="2" tercero="3" cuarto="4" quinto="5" sexto="6" septimo="7" octavo="8" noveno="9" decimo="10"  
      classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"tag is-orange airing"} classEmision14={"tag is-orange airing"} classEmision15={"disable"}
      classEmision16={"tag is-orange airing"} classEmision17={"tag is-orange airing"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"tag is-orange airing"}
      />}/>
     
     <Route path="/animes-2" element={<Componente1 
      img1="https://www.animefenix.com/cdn/animes/cover/61d5e31f8b785/gensou-sangokushi-tengen-reishinki.png" 
      img2="https://www.animefenix.com/cdn/animes/cover/5e444cd3919fa/tate-no-yuusha-no-nariagari.jpg" 
      img3="https://www.animefenix.com/cdn/animes/cover/61d5e15f2bb7b/tribe-nine.jpg" img4="https://www.animefenix.com/cdn/animes/cover/61d5e7d13b599/koroshi-ai.jpg" 
      img5="https://www.animefenix.com/cdn/animes/cover/61d5e2254d6c2/sabikui-bisco.jpg" img6="https://www.animefenix.com/cdn/animes/cover/61d5e08d99019/sasaki-to-miyano.jpg" 
      img7="https://img1.ak.crunchyroll.com/i/spire4/3025f2a7a0017b257753a208b55068481514330222_main.jpg" img8="https://www.animefenix.com/cdn/animes/cover/6205d3e32689f/toaru-majutsu-no-index.jpg" 
      img9="https://www.animefenix.com/cdn/animes/cover/61d5dd5629b71/dolls-frontline.jpg" img10="https://www.animefenix.com/cdn/animes/cover/61be3b0f8c216/saiyuki-reload-zeroin.jpg"
      img11="https://www.animefenix.com/cdn/animes/cover/5d69f2b45ac8a/violet-evergarden.jpg" img12="https://www.animefenix.com/cdn/animes/cover/62b38fc442857/shadows-house-2nd-season.jpg" 
      img13="https://www.animefenix.com/cdn/animes/cover/62b392ddc06ee/orient-2nd-cour.jpg" img14="https://www.animefenix.com/cdn/animes/cover/62b3883db4847/isekai-ojisan.jpg" 
      img15="https://www.animefenix.com/cdn/animes/cover/62b3854093b93/overlord-iv.jpg" img16="https://www.animefenix.com/cdn/animes/cover/62b37fcac4bd9/tensei-kenja-no-isekai-life-dai-2-no-shokugyou-wo-ete-sekai-saikyou-ni-narimashita.jpg" 
      img17="https://www.animefenix.com/cdn/animes/cover/628261b2c0949/vampire-in-the-garden.jpg" img18="https://www.animefenix.com/cdn/animes/cover/627841868ee88/kuroshitsuji-book-of-murder.jpg" 
      img19="https://www.animefenix.com/cdn/animes/cover/624c70de1804b/zuihou-de-zhaohuan-shi-the-last-summoner.png" img20="https://www.animefenix.com/cdn/animes/cover/62448993a5267/kingdom-4th-season.jpg" 
      img21="https://www.animefenix.com/cdn/animes/cover/624483a92e3a8/mahoutsukai-reimeiki.jpg" img22="https://www.animefenix.com/cdn/animes/cover/6244848bdfdc6/tiger-and-bunny-2.jpg" 
      img23 ="https://www.animefenix.com/cdn/animes/cover/620ec001eb85a/toaru-majutsu-no-index-iii.jpg" img24="https://www.animefenix.com/cdn/animes/cover/61be3c43e2252/shingeki-no-kyojin-the-final-season-part-2.jpg" 
      tv="TV" emision="En Emision"
      year1="2022" year2="2019" year3="2022" year4="2022" year5="2022" year6="2022" year7="2018" year8="2008"
      year9="2022" year10="2022" year11="2018" year12="2022" year13="2022" year14="2022" year15="2022" year16="2022"
      year17="2022" year18="2015" year19="2022" year20="2022" year21="2022" year22="2022" year23="2018" year24="2022"

      href1="/gensou-sanokushi-tengen-reishink" href2="/tate-no-yuusha-no-naraigari" href3="/tribe-nine" href4="/koroshi-ai" href5="/sabikui-bisco" href6="/sasaki-to-miyano" href7="/ito-junji:-collection" 
      href8="/toaru-majutsu-no-index" href9="/dolls-frontline" href10="/saiyoku-reload-zeroin" href11="/violet-evergarden" href12="/shadows-house-segunda-temporada" href13="/orient-segunda-temporada" 
      href14="/isekai-ojisan" href15="/overlord-IV" href16="/tensei-kenja-no-isekai-life-dai-2-no-shokugyou-wo-ete-sekai-saikyou-ni-narimashita" href17="/vampire-in-the-garden" href18="/kuroshitsuji-book-of-murder" 
      href19="/zuihou-de-zhaohuan-shi-the-last-summoner" href20="/kingdom-cuarta-temporada" href21="/mahoutsukai-reimeiki" href22="/tiger-and-bunny-2" href23="/toaru-majustu-no-index-III" href24="/shingeki-no-kyojin-temporada-final-parte-2"

      anime1="Gensou Sangokushi Tengen Reishink" anime2="Tate no Yuusha no Naraigari" anime3="Tribe Nine" anime4="Koroshi Ai" anime5="Sabikui Bisco" anime6="Sasaki to Miyano" anime7="Ito Junji: Collection" 
      anime8="Toaru majustu no Index" anime9="Dolls Frontline" anime10="Saiyoki Reload Zeroin" anime11="Violet Evergarden" anime12="Shadows House Temporada 2" anime13="Orient Temporada 2" 
      anime14="Isekai Ojisan" anime15="Overlord IV" anime16="Tensei Kenja no Isekai Life ~Dai-2 no Shokugyou wo Ete, Sekai Saikyou ni Narimashita" anime17="Vampire in the Garden" anime18="Kuroshitsuji Book of Murder" 
      anime19="Ziuhou de Zhaohuan Shi the Last Summoner" anime20="Kingdom Temporada 4" anime21="Mahoutsukai Reimeiki" anime22="Tiger and Bunny 2" anime23="Toaru Majustu no Index III" anime24="Shingeki no Kyojin Temporada Final Parte 2" 

      alt1="Gensou Sangokushi Tengen Reishink" alt2="Tate no Yuusha no Naraigar" alt3="Tribe Nine" alt4="Koroshi Ai" alt5="Sabikui Bisco" alt6="Sasaki to Miyano" alt7="Ito Junji: Collection" 
      alt8="Toaru majustu no Index" alt9="Dolls Frontline" alt10="Saiyoki Reload Zeroin" alt11="Violet Evergarden" alt12="Shadows House Temporada 2" alt13="Orient Temporada 2" 
      alt14="Isekai Ojisan" alt15="Overlord IV" alt16="Tensei Kenja no Isekai Life ~Dai-2 no Shokugyou wo Ete, Sekai Saikyou ni Narimashita" alt17="Vampire in the Garden" alt18="Kuroshitsuji Book of Murder" 
      alt19="Ziuhou de Zhaohuan Shi the Last Summoner" alt20="Kingdom Temporada 4" alt21="Mahoutsukai Reimeik" alt22="Tiger and Bunny 2" alt23="Toaru Majustu no Index III" alt24="Shingeki no Kyojin Temporada Final Parte 2"

      classpag11="disable" classpag2="active"
      anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes"} pagSiguiente={"/animes-3"}
      pag1="/animes" pag2="/animes-2" pag3="/animes-3" pag4="/animes-4" pag5="/animes-5" pag6="/animes-6" pag7="/animes-7" pag8="/animes-8" pag9="/animes-9" pag10="/animes-10"
      primero="1" segundo="2" tercero="3" cuarto="4" quinto="5" sexto="6" septimo="7" octavo="8" noveno="9" decimo="10" 
      classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"tag is-success airing"} classEmision13={"disable"} classEmision14={"tag is-success airing"} classEmision15={"tag is-success airing"}
      classEmision16={"tag is-success airing"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"tag is-success airing"} classEmision21={"disable"} 
      classEmision22={"tag is-success airing"} classEmision23={"disable"} classEmision24={"disable"}
      />}/>
     
     <Route path="/animes-3" element={<Componente1 
      img1="https://i.ibb.co/kQ9hyMc/golden-time.jpg" img2=""
      img3="" img4="" 
      img5="" img6="" 
      img7="" img8="" 
      img9="" img10=""
      img11="" img12="" 
      img13="" img14="" 
      img15="" img16="" 
      img17="" img18="" 
      img19="" img20="" 
      img21="" img22="" 
      img23 ="" img24="" 
      tv="TV" emision="En Emision"
      year1="2013" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""

      href1="/golden-time" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""

      anime1="Golden Time" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""anime24="" 
      alt1="Golden Time" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24=""
      classpag11="disable" classpag3="active"
      anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-2"} pagSiguiente={"/animes-4"}
      pag1="/animes" pag2="/animes-2" pag3="/animes-3" pag4="/animes-4" pag5="/animes-5" pag6="/animes-6" pag7="/animes-7" pag8="/animes-8" pag9="/animes-9" pag10="/animes-10"
      primero="1" segundo="2" tercero="3" cuarto="4" quinto="5" sexto="6" septimo="7" octavo="8" noveno="9" decimo="10" 
      classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
      />}/>
     
     <Route path="/animes-4" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24=""
      classpag11="disable" classpag4="active" 
      anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-3"} pagSiguiente={"/animes-5"}
      pag1="/animes" pag2="/animes-2" pag3="/animes-3" pag4="/animes-4" pag5="/animes-5" pag6="/animes-6" pag7="/animes-7" pag8="/animes-8" pag9="/animes-9" pag10="/animes-10"
      primero="1" segundo="2" tercero="3" cuarto="4" quinto="5" sexto="6" septimo="7" octavo="8" noveno="9" decimo="10" 
      classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
      />}/>
     
     <Route path="/animes-5" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24=""
      classpag5="active" 
      classpag11="disable" anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-4"} pagSiguiente={"/animes-6"}
      pag1="/animes" pag2="/animes-2" pag3="/animes-3" pag4="/animes-4" pag5="/animes-5" pag6="/animes-6" pag7="/animes-7" pag8="/animes-8" pag9="/animes-9" pag10="/animes-10"
      primero="1" segundo="2" tercero="3" cuarto="4" quinto="5" sexto="6" septimo="7" octavo="8" noveno="9" decimo="10" 
      classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
      />}/>
     
     <Route path="/animes-6" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24=""
      classpag6="active"
      classpag11="disable" anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-5"} pagSiguiente={"/animes-7"}
      pag1="/animes" pag2="/animes-2" pag3="/animes-3" pag4="/animes-4" pag5="/animes-5" pag6="/animes-6" pag7="/animes-7" pag8="/animes-8" pag9="/animes-9" pag10="/animes-10"
      primero="1" segundo="2" tercero="3" cuarto="4" quinto="5" sexto="6" septimo="7" octavo="8" noveno="9" decimo="10" 
      classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
      />}/>
     
      <Route path="/animes-7" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24="" classpag7="active"
      classpag11="disable" anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-6"} pagSiguiente={"/animes-8"}
      pag1="/animes" pag2="/animes-2" pag3="/animes-3" pag4="/animes-4" pag5="/animes-5" pag6="/animes-6" pag7="/animes-7" pag8="/animes-8" pag9="/animes-9" pag10="/animes-10"
      primero="1" segundo="2" tercero="3" cuarto="4" quinto="5" sexto="6" septimo="7" octavo="8" noveno="9" decimo="10"
      classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
       />}/>
      
      <Route path="/animes-8" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24="" classpag11="disable"
      classpag8="active" anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-7"} pagSiguiente={"/animes-9"}
      pag1="/animes" pag2="/animes-2" pag3="/animes-3" pag4="/animes-4" pag5="/animes-5" pag6="/animes-6" pag7="/animes-7" pag8="/animes-8" pag9="/animes-9" pag10="/animes-10"
      primero="1" segundo="2" tercero="3" cuarto="4" quinto="5" sexto="6" septimo="7" octavo="8" noveno="9" decimo="10"
      classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
      />}/>
     
      <Route path="/animes-9" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24=""
      classpag9="active" classpag11="disable"  anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-8"} pagSiguiente={"/animes-10"}
      pag1="/animes" pag2="/animes-2" pag3="/animes-3" pag4="/animes-4" pag5="/animes-5" pag6="/animes-6" pag7="/animes-7" pag8="/animes-8" pag9="/animes-9" pag10="/animes-10"
      primero="1" segundo="2" tercero="3" cuarto="4" quinto="5" sexto="6" septimo="7" octavo="8" noveno="9" decimo="10" 
      classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
      />}/>
  
     <Route path="/animes-10" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24=""
      classpag2="active"  anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-9"} pagSiguiente={"/animes-11"}
      pag1="/animes" pag2="/animes-10" pag3="/animes-11" pag4="/animes-12" pag5="/animes-13" pag6="/animes-14" pag7="/animes-15" pag8="/animes-16" pag9="/animes-17" pag10="/animes-18" pag11={"/animes-19"}
      primero="1" segundo="10" tercero="11" cuarto="12" quinto="13" sexto="14" septimo="15" octavo="16" noveno="17" decimo="18" onceavo={"19"}
      classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
      />}/>

        
     <Route path="/animes-10" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24=""
      classpag1="active" classpag2="" classpag3="" classpag4="" classpag5="" classpag6="" classpag7=""
      classpag8="" classpag9="" classpag10="" anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-9"} pagSiguiente={"/animes-11"}
      pag1="/animes-10" pag2="/animes-11" pag3="/animes-12" pag4="/animes-13" pag5="/animes-14" pag6="/animes-15" pag7="/animes-16" pag8="/animes-17" pag9="/animes-18" pag10="/animes-19"
      primero="10" segundo="11" tercero="12" cuarto="13" quinto="14" sexto="15" septimo="16" octavo="17" noveno="18" decimo="19" 
      classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
       />}/>

        
     <Route path="/animes-11" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24=""
      classpag3="active"
      anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-9"} pagSiguiente={"/animes-11"}
      pag1="/animes" pag2="/animes-10" pag3="/animes-11" pag4="/animes-12" pag5="/animes-13" pag6="/animes-14" pag7="/animes-15" pag8="/animes-16" pag9="/animes-17" pag10="/animes-18" pag11={"/animes-19"}
      primero="1" segundo="10" tercero="11" cuarto="12" quinto="13" sexto="14" septimo="15" octavo="16" noveno="17" decimo="18" onceavo={"19"}
      classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
       />}/>

        
     <Route path="/animes-12" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24=""
      classpag4="active"
      anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-11"} pagSiguiente={"/animes-13"}
      pag1="/animes" pag2="/animes-10" pag3="/animes-11" pag4="/animes-12" pag5="/animes-13" pag6="/animes-14" pag7="/animes-15" pag8="/animes-16" pag9="/animes-17" pag10="/animes-18" pag11={"/animes-19"}
      primero="1" segundo="10" tercero="11" cuarto="12" quinto="13" sexto="14" septimo="15" octavo="16" noveno="17" decimo="18" onceavo={"19"}
      classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
      />}/>

        
     <Route path="/animes-13" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24=""
      classpag5="active"
      anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-12"} pagSiguiente={"/animes-14"}
      pag1="/animes" pag2="/animes-10" pag3="/animes-11" pag4="/animes-12" pag5="/animes-13" pag6="/animes-14" pag7="/animes-15" pag8="/animes-16" pag9="/animes-17" pag10="/animes-18" pag11={"/animes-19"}
      primero="1" segundo="10" tercero="11" cuarto="12" quinto="13" sexto="14" septimo="15" octavo="16" noveno="17" decimo="18" onceavo={"19"}

      classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
      />}/>

        
     <Route path="/animes-14" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24=""
      classpag6="active"
      anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-13"} pagSiguiente={"/animes-15"}
      pag1="/animes" pag2="/animes-10" pag3="/animes-11" pag4="/animes-12" pag5="/animes-13" pag6="/animes-14" pag7="/animes-15" pag8="/animes-16" pag9="/animes-17" pag10="/animes-18" pag11={"/animes-19"}
      primero="1" segundo="10" tercero="11" cuarto="12" quinto="13" sexto="14" septimo="15" octavo="16" noveno="17" decimo="18" onceavo={"19"}
      classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
      />}/>

        
     <Route path="/animes-15" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24=""
      classpag7="active"
      anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-14"} pagSiguiente={"/animes-16"}
      pag1="/animes" pag2="/animes-10" pag3="/animes-11" pag4="/animes-12" pag5="/animes-13" pag6="/animes-14" pag7="/animes-15" pag8="/animes-16" pag9="/animes-17" pag10="/animes-18" pag11={"/animes-19"}
      primero="1" segundo="10" tercero="11" cuarto="12" quinto="13" sexto="14" septimo="15" octavo="16" noveno="17" decimo="18" onceavo={"19"}
      classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
      />}/>

        
     <Route path="/animes-16" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24=""
      classpag8="active"
      anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-15"} pagSiguiente={"/animes-17"}
      pag1="/animes" pag2="/animes-10" pag3="/animes-11" pag4="/animes-12" pag5="/animes-13" pag6="/animes-14" pag7="/animes-15" pag8="/animes-16" pag9="/animes-17" pag10="/animes-18" pag11={"/animes-19"}
      primero="1" segundo="10" tercero="11" cuarto="12" quinto="13" sexto="14" septimo="15" octavo="16" noveno="17" decimo="18" onceavo={"19"}
      classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
      />}/>

        
     <Route path="/animes-17" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24=""
      classpag9="active"
      anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-16"} pagSiguiente={"/animes-18"}
      pag1="/animes" pag2="/animes-10" pag3="/animes-11" pag4="/animes-12" pag5="/animes-13" pag6="/animes-14" pag7="/animes-15" pag8="/animes-16" pag9="/animes-17" pag10="/animes-18" pag11={"/animes-19"}
      primero="1" segundo="10" tercero="11" cuarto="12" quinto="13" sexto="14" septimo="15" octavo="16" noveno="17" decimo="18" onceavo={"19"}
      classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
      />}/>

        
     <Route path="/animes-18" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24=""
      classpag10="active"
      anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-17"} pagSiguiente={"/animes-19"}
      pag1="/animes" pag2="/animes-10" pag3="/animes-11" pag4="/animes-12" pag5="/animes-13" pag6="/animes-14" pag7="/animes-15" pag8="/animes-16" pag9="/animes-17" pag10="/animes-18" pag11={"/animes-19"}
      primero="1" segundo="10" tercero="11" cuarto="12" quinto="13" sexto="14" septimo="15" octavo="16" noveno="17" decimo="18" onceavo={"19"}
      classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
      />}/>

        
     <Route path="/animes-19" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24=""
      classpag2="active"
      anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-18"} pagSiguiente={"/animes-20"}
      pag1="/animes" pag2="/animes-19" pag3="/animes-20" pag4="/animes-21" pag5="/animes-22" pag6="/animes-23" pag7="/animes-24" pag8="/animes-25" pag9="/animes-26" pag10="/animes-27" pag11={"/animes-28"}
      primero="1" segundo="19" tercero="20" cuarto="21" quinto="22" sexto="23" septimo="24" octavo="25" noveno="26" decimo="27" onceavo={"28"}
      classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
      />}/>

        
     <Route path="/animes-20" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24=""
      classpag2="active"
      anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-19"} pagSiguiente={"/animes-21"}
      pag1="/animes" pag2="/animes-20" pag3="/animes-21" pag4="/animes-22" pag5="/animes-23" pag6="/animes-24" pag7="/animes-25" pag8="/animes-26" pag9="/animes-27" pag10="/animes-28" pag11={"/animes-29"}
      primero="1" segundo="20" tercero="21" cuarto="22" quinto="23" sexto="24" septimo="25" octavo="26" noveno="27" decimo="28" onceavo={"29"}
      classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
      />}/>

        
     <Route path="/animes-21" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24=""
      classpag2="active"
      anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-20"} pagSiguiente={"/animes-22"}
      pag1="/animes" pag2="/animes-21" pag3="/animes-22" pag4="/animes-23" pag5="/animes-24" pag6="/animes-25" pag7="/animes-26" pag8="/animes-27" pag9="/animes-28" pag10="/animes-29" pag11={"/animes-30"}
      primero="1" segundo="21" tercero="22" cuarto="23" quinto="24" sexto="25" septimo="26" octavo="27" noveno="28" decimo="29" onceavo={"30"}
      classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
      />}/>

        
     <Route path="/animes-22" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24=""
      classpag3="active"
      anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-21"} pagSiguiente={"/animes-23"}
      pag1="/animes" pag2="/animes-21" pag3="/animes-22" pag4="/animes-23" pag5="/animes-24" pag6="/animes-25" pag7="/animes-26" pag8="/animes-27" pag9="/animes-28" pag10="/animes-29" pag11={"/animes-30"}
      primero="1" segundo="21" tercero="22" cuarto="23" quinto="24" sexto="25" septimo="26" octavo="27" noveno="28" decimo="29" onceavo={"30"}
      classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
      />}/>

        
     <Route path="/animes-23" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24=""
      classpag4="active"
      anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-22"} pagSiguiente={"/animes-24"}
      pag1="/animes" pag2="/animes-21" pag3="/animes-22" pag4="/animes-23" pag5="/animes-24" pag6="/animes-25" pag7="/animes-26" pag8="/animes-27" pag9="/animes-28" pag10="/animes-29" pag11={"/animes-30"}
      primero="1" segundo="21" tercero="22" cuarto="23" quinto="24" sexto="25" septimo="26" octavo="27" noveno="28" decimo="29" onceavo={"30"}
         classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
      />}/>

        
     <Route path="/animes-24" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24=""
      classpag5="active"
      anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-23"} pagSiguiente={"/animes-25"}
      pag1="/animes" pag2="/animes-21" pag3="/animes-22" pag4="/animes-23" pag5="/animes-24" pag6="/animes-25" pag7="/animes-26" pag8="/animes-27" pag9="/animes-28" pag10="/animes-29" pag11={"/animes-30"}
      primero="1" segundo="21" tercero="22" cuarto="23" quinto="24" sexto="25" septimo="26" octavo="27" noveno="28" decimo="29" onceavo={"30"}
         classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
      />}/>

        
     <Route path="/animes-25" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24=""
      classpag6="active"
      anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-24"} pagSiguiente={"/animes-26"}
      pag1="/animes" pag2="/animes-21" pag3="/animes-22" pag4="/animes-23" pag5="/animes-24" pag6="/animes-25" pag7="/animes-26" pag8="/animes-27" pag9="/animes-28" pag10="/animes-29" pag11={"/animes-30"}
      primero="1" segundo="21" tercero="22" cuarto="23" quinto="24" sexto="25" septimo="26" octavo="27" noveno="28" decimo="29" onceavo={"30"}
      classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
      />}/>

        
     <Route path="/animes-26" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24=""
      classpag7="active"
      anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-25"} pagSiguiente={"/animes-27"}
      pag1="/animes" pag2="/animes-21" pag3="/animes-22" pag4="/animes-23" pag5="/animes-24" pag6="/animes-25" pag7="/animes-26" pag8="/animes-27" pag9="/animes-28" pag10="/animes-29" pag11={"/animes-30"}
      primero="1" segundo="21" tercero="22" cuarto="23" quinto="24" sexto="25" septimo="26" octavo="27" noveno="28" decimo="29" onceavo={"30"}
      classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
      />}/>

        
     <Route path="/animes-27" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24=""
      classpag8="active"
      anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-26"} pagSiguiente={"/animes-28"}
      pag1="/animes" pag2="/animes-21" pag3="/animes-22" pag4="/animes-23" pag5="/animes-24" pag6="/animes-25" pag7="/animes-26" pag8="/animes-27" pag9="/animes-28" pag10="/animes-29" pag11={"/animes-30"}
      primero="1" segundo="21" tercero="22" cuarto="23" quinto="24" sexto="25" septimo="26" octavo="27" noveno="28" decimo="29" onceavo={"30"}
         classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
      />}/>

        
     <Route path="/animes-28" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24=""
      classpag9="active"
      anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-27"} pagSiguiente={"/animes-29"}
      pag1="/animes" pag2="/animes-21" pag3="/animes-22" pag4="/animes-23" pag5="/animes-24" pag6="/animes-25" pag7="/animes-26" pag8="/animes-27" pag9="/animes-28" pag10="/animes-29" pag11={"/animes-30"}
      primero="1" segundo="21" tercero="22" cuarto="23" quinto="24" sexto="25" septimo="26" octavo="27" noveno="28" decimo="29" onceavo={"30"}
         classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
      />}/>

        
     <Route path="/animes-29" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24=""
      classpag10="active"
      anterior={"Anterior"} siguiente={"Siguiente"} pagAnterior={"/animes-28"} pagSiguiente={"/animes-30"}
      pag1="/animes" pag2="/animes-21" pag3="/animes-22" pag4="/animes-23" pag5="/animes-24" pag6="/animes-25" pag7="/animes-26" pag8="/animes-27" pag9="/animes-28" pag10="/animes-29" pag11={"/animes-30"}
      primero="1" segundo="21" tercero="22" cuarto="23" quinto="24" sexto="25" septimo="26" octavo="27" noveno="28" decimo="29" onceavo={"30"}
         classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
       />}/>

        
     <Route path="/animes-30" element={<Componente1 img1="" img2="" img3="" img4="" img5="" img6="" img7="" img8="" img9="" img10=""
      img11="" img12="" img13="" img14="" img15="" img16="" img17="" img18="" img19=""
      img20="" img21="" img22="" img23 ="" img24="" tv="TV" emision="En Emision"
      year1="" year2="" year3="" year4="" year5="" year6="" year7="" year8=""
      year9="" year10="" year11="" year12="" year13="" year14="" year15="" year16=""
      year17="" year18="" year19="" year20="" year21="" year22="" year23="" year24=""
      href1="" href2="" href3="" href4="" href5="" href6="" href7="" href8="" href9=""
      href10="" href11="" href12="" href13="" href14="" href15="" href16="" href17=""
      href18="" href19="" href20="" href21="" href22="" href23="" href24=""
      anime1="" anime2="" anime3="" anime4="" anime5="" anime6="" anime7="" anime8="" 
      anime9="" anime10="" anime11="" anime12="" anime13="" anime14="" anime15=""
      anime16="" anime17="" anime18="" anime19="" anime20="" anime21="" anime22="" anime23=""
      anime24="" alt1="" alt2="" alt3="" alt4="" alt5="" alt6="" alt7="" alt8="" 
      alt9="" alt10="" alt11="" alt12="" alt13="" alt14="" alt15="" alt16="" alt17=""
      alt18="" alt19="" alt20="" alt21="" alt22="" alt23="" alt24=""
      classpag11="active"
      anterior={"Anterior"} pagAnterior={"/animes-28"}
      pag1="/animes" pag2="/animes-21" pag3="/animes-22" pag4="/animes-23" pag5="/animes-24" pag6="/animes-25" pag7="/animes-26" pag8="/animes-27" pag9="/animes-28" pag10="/animes-29" pag11={"/animes-30"}
      primero="1" segundo="21" tercero="22" cuarto="23" quinto="24" sexto="25" septimo="26" octavo="27" noveno="28" decimo="29" onceavo={"30"}
         classEmision1={"disable"} classEmision2={"disable"} classEmision3={"disable"} classEmision4={"disable"} classEmision5={"disable"} classEmision6={"disable"} classEmision7={"disable"} classEmision8={"disable"} classEmision9={"disable"} 
      classEmision10={"disable"} classEmision11={"disable"} classEmision12={"disable"} classEmision13={"disable"} classEmision14={"disable"} classEmision15={"disable"}
      classEmision16={"disable"} classEmision17={"disable"} classEmision18={"disable"} classEmision19={"disable"} classEmision20={"disable"} classEmision21={"disable"} 
      classEmision22={"disable"} classEmision23={"disable"} classEmision24={"disable"}
       />}/>






     </Routes>
     
    </div>

  );
}
export default App