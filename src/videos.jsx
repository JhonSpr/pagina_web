import { Route, Routes } from "react-router-dom";
import { Video } from "./Componentes/Componente3";

function Videos() {
  return (
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
      <Route
        path="/ver/akudama-drive-2"
        exact
        element={
          <Video
            frame1={"https://sbfull.com/e/d9bdotmfn8uf.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Akudama Drive Capitulo 2"}
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"2"}
            classOpcionSiguiente=""
            siguienteVideo={"/ver/akudama-drive-3"}
            capitulosVideo={"/akudama-drive"}
            anteriorVideo={"/ver/akudama-drive-1"}
          />
        }
      />
      <Route
        path="/ver/akudama-drive-3"
        exact
        element={
          <Video
            frame1={"https://sbfull.com/e/mm0hyqaw164r.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Akudama Drive Capitulo 3"}
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"3"}
            classOpcionSiguiente="column is-3-desktop is-2-tablet is-2-mobile"
            siguienteVideo={"/ver/akudama-drive-4"}
            capitulosVideo={"/akudama-drive"}
            anteriorVideo={"/ver/akudama-drive-2"}
          />
        }
      />
      <Route
        path="/ver/akudama-drive-4"
        exact
        element={
          <Video
            frame1={"https://sbfull.com/e/n7taak2cg7oh.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Akudama Drive Capitulo 4"}
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"4"}
            classOpcionSiguiente="column is-3-desktop is-2-tablet is-2-mobile"
            siguienteVideo={"/ver/akudama-drive-5"}
            capitulosVideo={"/akudama-drive"}
            anteriorVideo={"/ver/akudama-drive-3"}
          />
        }
      />
      <Route
        path="/ver/akudama-drive-5"
        exact
        element={
          <Video
            frame1={"https://sbfull.com/e/neea68kvfnro.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Akudama Drive Capitulo 5"}
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"5"}
            classOpcionSiguiente="column is-3-desktop is-2-tablet is-2-mobile"
            siguienteVideo={"/ver/akudama-drive-6"}
            capitulosVideo={"/akudama-drive"}
            anteriorVideo={"/ver/akudama-drive-4"}
          />
        }
      />
      <Route
        path="/ver/akudama-drive-6"
        exact
        element={
          <Video
            frame1={"https://sbfull.com/e/3isvmgy7ztqe.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Akudama Drive Capitulo 6"}
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"6"}
            classOpcionSiguiente="column is-3-desktop is-2-tablet is-2-mobile"
            siguienteVideo={"/ver/akudama-drive-7"}
            capitulosVideo={"/akudama-drive"}
            anteriorVideo={"/ver/akudama-drive-5"}
          />
        }
      />
      <Route
        path="/ver/akudama-drive-7"
        element={
          <Video
            frame1={"https://sbfull.com/e/n5vjg3oupj5o.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Akudama Drive Capitulo 7"}
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"7"}
            classOpcionSiguiente="column is-3-desktop is-2-tablet is-2-mobile"
            siguienteVideo={"/ver/akudama-drive-8"}
            capitulosVideo={"/akudama-drive"}
            anteriorVideo={"/ver/akudama-drive-6"}
          />
        }
      />
      <Route
        path="/ver/akudama-drive-8"
        element={
          <Video
            frame1={"https://sbfull.com/e/s5rpudg0hmah.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Akudama Drive Capitulo 8"}
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"8"}
            classOpcionSiguiente="column is-3-desktop is-2-tablet is-2-mobile"
            siguienteVideo={"/ver/akudama-drive-9"}
            capitulosVideo={"/akudama-drive"}
            anteriorVideo={"/ver/akudama-drive-7"}
          />
        }
      />
      <Route
        path="/ver/akudama-drive-9"
        element={
          <Video
            frame1={"https://sbfull.com/e/nvzz6oeof8io.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Akudama Drive Capitulo 9"}
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"9"}
            classOpcionSiguiente="column is-3-desktop is-2-tablet is-2-mobile"
            siguienteVideo={"/ver/akudama-drive-10"}
            capitulosVideo={"/akudama-drive"}
            anteriorVideo={"/ver/akudama-drive-8"}
          />
        }
      />
      <Route
        path="/ver/akudama-drive-10"
        element={
          <Video
            frame1={"https://sbfull.com/e/bn1v8c0mw12m.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Akudama Drive Capitulo 10"}
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"10"}
            siguienteVideo={"/ver/akudama-drive-11"}
            capitulosVideo={"/akudama-drive"}
            anteriorVideo={"/ver/akudama-drive-9"}
          />
        }
      />
      <Route
        path="/ver/akudama-drive-11"
        element={
          <Video
            frame1={"https://sbfull.com/e/gwnrv3r695vj.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Akudama Drive Capitulo 11"}
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"11"}
            siguienteVideo={"/ver/akudama-drive-12"}
            capitulosVideo={"/akudama-drive"}
            anteriorVideo={"/ver/akudama-drive-10"}
          />
        }
      />
      <Route
        path="/ver/akudama-drive-12"
        element={
          <Video
            frame1={"https://sbfull.com/e/53uon5p5bskt.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"ultimo-cap"}
            tituloAnime={"Akudama Drive Capitulo 12"}
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"12"}
            capitulosVideo={"/akudama-drive"}
            anteriorVideo={"/ver/akudama-drive-11"}
            classOpcionAnterior={"column is-3-desktop is-2-tablet is-2-mobile"}
            botonAnterior={"button is-orange is-fullwidth"}
            iconoAnterior={"fa fa-arrow-left"}
          />
        }
      />
      --------------
      <Route
        path="/ver/hanyo-no-yashahime-ni-no-shou-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/4m26e9ffn8tm.html"}
            contAnteriorClass="disable"
            tituloAnime={"Hanyo no Yashahime ni no Shou Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Hanyo no Yashahime ni no Shou"}
            numero={"1"}
            siguienteVideo={"/ver/hanyo-no-yashahime-ni-no-shou-2"}
            capitulosVideo={"/hanyo-no-yashahime-ni-no-shou"}
          />
        }
      />
      <Route
        path="/ver/hanyo-no-yashahime-ni-no-shou-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/686inorrktpp.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Hanyo no Yashahime ni no Shou Capitulo 2"}
            tituloPag={"Animekun"}
            anime={"Hanyo no Yashahime ni no Shou "}
            numero={"2"}
            siguienteVideo={"/ver/hanyo-no-yashahime-ni-no-shou-3"}
            capitulosVideo={"/hanyo-no-yashahime-ni-no-shou"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/hanyo-no-yashahime-ni-no-shou-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/52qhr18i7wdb.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Hanyo no Yashahime ni no Shou Capitulo 3"}
            tituloPag={"Animekun"}
            anime={"Hanyo no Yashahime ni no Shou "}
            numero={"3"}
            siguienteVideo={"/ver/hanyo-no-yashahime-ni-no-shou-4"}
            capitulosVideo={"/hanyo-no-yashahime-ni-no-shou"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/hanyo-no-yashahime-ni-no-shou-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/z0mofnw9fw0g.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Hanyo no Yashahime ni no Shou Capitulo 4"}
            tituloPag={"Animekun"}
            anime={"Hanyo no Yashahime ni no Shou "}
            numero={"4"}
            siguienteVideo={"/ver/hanyo-no-yashahime-ni-no-shou-5"}
            capitulosVideo={"/hanyo-no-yashahime-ni-no-shou"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/hanyo-no-yashahime-ni-no-shou-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/am9a8lvqpn23.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Hanyo no Yashahime ni no Shou Capitulo 5"}
            tituloPag={"Animekun"}
            anime={"Hanyo no Yashahime ni no Shou "}
            numero={"5"}
            siguienteVideo={"/ver/hanyo-no-yashahime-ni-no-shou-6"}
            capitulosVideo={"/hanyo-no-yashahime-ni-no-shou"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/hanyo-no-yashahime-ni-no-shou-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/jw3tv7qu2kse.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Hanyo no Yashahime ni no Shou Capitulo 6"}
            tituloPag={"Animekun"}
            anime={"Hanyo no Yashahime ni no Shou "}
            numero={"6"}
            siguienteVideo={"/ver/hanyo-no-yashahime-ni-no-shou-7"}
            capitulosVideo={"/hanyo-no-yashahime-ni-no-shou"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/hanyo-no-yashahime-ni-no-shou-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/f5g4yi460fc9.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Hanyo no Yashahime ni no Shou Capitulo 7"}
            tituloPag={"Animekun"}
            anime={"Hanyo no Yashahime ni no Shou "}
            numero={"7"}
            siguienteVideo={"/ver/hanyo-no-yashahime-ni-no-shou-8"}
            capitulosVideo={"/hanyo-no-yashahime-ni-no-shou"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/hanyo-no-yashahime-ni-no-shou-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/p3wnx7mrv7bq.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Hanyo no Yashahime ni no Shou Capitulo 8"}
            tituloPag={"Animekun"}
            anime={"Hanyo no Yashahime ni no Shou "}
            numero={"8"}
            siguienteVideo={"/ver/hanyo-no-yashahime-ni-no-shou-9"}
            capitulosVideo={"/hanyo-no-yashahime-ni-no-shou"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/hanyo-no-yashahime-ni-no-shou-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/huh68x4y55w1.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Hanyo no Yashahime ni no Shou Capitulo 9"}
            tituloPag={"Animekun"}
            anime={"Hanyo no Yashahime ni no Shou "}
            numero={"9"}
            siguienteVideo={"/ver/hanyo-no-yashahime-ni-no-shou-10"}
            capitulosVideo={"/hanyo-no-yashahime-ni-no-shou"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/hanyo-no-yashahime-ni-no-shou-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/gasgg4wnntyl.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Hanyo no Yashahime ni no Shou Capitulo 10"}
            tituloPag={"Animekun"}
            anime={"Hanyo no Yashahime ni no Shou "}
            numero={"10"}
            siguienteVideo={"/ver/hanyo-no-yashahime-ni-no-shou-11"}
            capitulosVideo={"/hanyo-no-yashahime-ni-no-shou"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/hanyo-no-yashahime-ni-no-shou-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/zxa1r64xvdmq.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Hanyo no Yashahime ni no Shou Capitulo 11"}
            tituloPag={"Animekun"}
            anime={"Hanyo no Yashahime ni no Shou "}
            numero={"11"}
            siguienteVideo={"/ver/hanyo-no-yashahime-ni-no-shou-12"}
            capitulosVideo={"/hanyo-no-yashahime-ni-no-shou"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/hanyo-no-yashahime-ni-no-shou-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/izp3xw4igo6l.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Hanyo no Yashahime ni no Shou Capitulo 14"}
            tituloPag={"Animekun"}
            anime={"Hanyo no Yashahime ni no Shou "}
            numero={"12"}
            siguienteVideo={"/ver/hanyo-no-yashahime-ni-no-shou-13"}
            capitulosVideo={"/hanyo-no-yashahime-ni-no-shou"}
            anteriorVideo={"/ver/hanyo-no-yashahime-ni-no-shou-11"}
          />
        }
      />
      <Route
        path="/ver/hanyo-no-yashahime-ni-no-shou-13"
        element={
          <Video
            frame1={"https://sbthe.com/e/eo7yr1gzza8g.html"}
            contAnteriorClass="primer-capitulo"
            tituloAnime={"Hanyo no Yashahime ni no Shou Capitulo 13"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Hanyo no Yashahime ni no Shou "}
            numero={"13"}
            siguienteVideo={"/ver/hanyo-no-yashahime-ni-no-shou-14"}
            capitulosVideo={"/hanyo-no-yashahime-ni-no-shou"}
            anteriorVideo={"/ver/hanyo-no-yashahime-ni-no-shou-12"}
          />
        }
      />
      <Route
        path="/ver/hanyo-no-yashahime-ni-no-shou-14"
        element={
          <Video
            frame1={"https://sbthe.com/e/9kxt4i9g902r.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Hanyo no Yashahime ni no Shou Capitulo 14"}
            tituloPag={"Animekun"}
            anime={"Hanyo no Yashahime ni no Shou "}
            numero={"14"}
            siguienteVideo={"/ver/hanyo-no-yashahime-ni-no-shou-15"}
            capitulosVideo={"/hanyo-no-yashahime-ni-no-shou"}
            anteriorVideo={"/ver/hanyo-no-yashahime-ni-no-shou-13"}
          />
        }
      />
      <Route
        path="/ver/hanyo-no-yashahime-ni-no-shou-15"
        element={
          <Video
            frame1={"https://sbthe.com/e/gv78t0jl451p.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Hanyo no Yashahime ni no Shou Capitulo 15"}
            tituloPag={"Animekun"}
            anime={"Hanyo no Yashahime ni no Shou "}
            numero={"15"}
            siguienteVideo={"/ver/hanyo-no-yashahime-ni-no-shou-16"}
            capitulosVideo={"/hanyo-no-yashahime-ni-no-shou"}
            anteriorVideo={"/ver/hanyo-no-yashahime-ni-no-shou-14"}
          />
        }
      />
      <Route
        path="/ver/hanyo-no-yashahime-ni-no-shou-16"
        element={
          <Video
            frame1={"https://sbthe.com/e/2ai3kl6tfvnz.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Hanyo no Yashahime ni no Shou Capitulo 16"}
            tituloPag={"Animekun"}
            anime={"Hanyo no Yashahime ni no Shou "}
            numero={"16"}
            siguienteVideo={"/ver/hanyo-no-yashahime-ni-no-shou-17"}
            capitulosVideo={"/hanyo-no-yashahime-ni-no-shou"}
            anteriorVideo={"/ver/hanyo-no-yashahime-ni-no-shou-15"}
          />
        }
      />
      <Route
        path="/ver/hanyo-no-yashahime-ni-no-shou-17"
        element={
          <Video
            frame1={"https://sbthe.com/e/ev757kirgroj.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Hanyo no Yashahime ni no Shou Capitulo 17"}
            tituloPag={"Animekun"}
            anime={"Hanyo no Yashahime ni no Shou "}
            numero={"17"}
            siguienteVideo={"/ver/hanyo-no-yashahime-ni-no-shou-18"}
            capitulosVideo={"/hanyo-no-yashahime-ni-no-shou"}
            anteriorVideo={"/ver/hanyo-no-yashahime-ni-no-shou-16"}
          />
        }
      />
      <Route
        path="/ver/hanyo-no-yashahime-ni-no-shou-18"
        element={
          <Video
            frame1={"https://sbthe.com/e/tc1jtdb9ru5t.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Hanyo no Yashahime ni no Shou Capitulo 18"}
            tituloPag={"Animekun"}
            anime={"Hanyo no Yashahime ni no Shou "}
            numero={"18"}
            siguienteVideo={"/ver/hanyo-no-yashahime-ni-no-shou-19"}
            capitulosVideo={"/hanyo-no-yashahime-ni-no-shou"}
            anteriorVideo={"/ver/hanyo-no-yashahime-ni-no-shou-17"}
          />
        }
      />
      <Route
        path="/ver/hanyo-no-yashahime-ni-no-shou-19"
        element={
          <Video
            frame1={"https://sbthe.com/e/17omtdjjw6ik.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Hanyo no Yashahime ni no Shou Capitulo 19"}
            tituloPag={"Animekun"}
            anime={"Hanyo no Yashahime ni no Shou "}
            numero={"19"}
            siguienteVideo={"/ver/hanyo-no-yashahime-ni-no-shou-20"}
            capitulosVideo={"/hanyo-no-yashahime-ni-no-shou"}
            anteriorVideo={"/ver/hanyo-no-yashahime-ni-no-shou-18"}
          />
        }
      />
      <Route
        path="/ver/hanyo-no-yashahime-ni-no-shou-20"
        element={
          <Video
            frame1={"https://sbthe.com/e/i9m5euoorm7b.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Hanyo no Yashahime ni no Shou Capitulo 20"}
            tituloPag={"Animekun"}
            anime={"Hanyo no Yashahime ni no Shou "}
            numero={"20"}
            siguienteVideo={"/ver/hanyo-no-yashahime-ni-no-shou-21"}
            capitulosVideo={"/hanyo-no-yashahime-ni-no-shou"}
            anteriorVideo={"/ver/hanyo-no-yashahime-ni-no-shou-19"}
          />
        }
      />
      <Route
        path="/ver/hanyo-no-yashahime-ni-no-shou-21"
        element={
          <Video
            frame1={"https://sbthe.com/e/hrt2byyy4y51.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Hanyo no Yashahime ni no Shou Capitulo 21"}
            tituloPag={"Animekun"}
            anime={"Hanyo no Yashahime ni no Shou "}
            numero={"21"}
            siguienteVideo={"/ver/hanyo-no-yashahime-ni-no-shou-22"}
            capitulosVideo={"/hanyo-no-yashahime-ni-no-shou"}
            anteriorVideo={"/ver/hanyo-no-yashahime-ni-no-shou-20"}
          />
        }
      />
      <Route
        path="/ver/hanyo-no-yashahime-ni-no-shou-22"
        element={
          <Video
            frame1={"https://sbthe.com/e/jy41ai0ujgw5.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Hanyo no Yashahime ni no Shou Capitulo 22"}
            tituloPag={"Animekun"}
            anime={"Hanyo no Yashahime ni no Shou "}
            numero={"22"}
            siguienteVideo={"/ver/hanyo-no-yashahime-ni-no-shou-23"}
            capitulosVideo={"/hanyo-no-yashahime-ni-no-shou"}
            anteriorVideo={"/ver/hanyo-no-yashahime-ni-no-shou-21"}
          />
        }
      />
      <Route
        path="/ver/hanyo-no-yashahime-ni-no-shou-23"
        element={
          <Video
            frame1={"https://sbthe.com/e/jrpt5unecm3m.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Hanyo no Yashahime ni no Shou Capitulo 23"}
            tituloPag={"Animekun"}
            anime={"Hanyo no Yashahime ni no Shou "}
            numero={"23"}
            siguienteVideo={"/ver/hanyo-no-yashahime-ni-no-shou-24"}
            capitulosVideo={"/hanyo-no-yashahime-ni-no-shou"}
            anteriorVideo={"/ver/hanyo-no-yashahime-ni-no-shou-22"}
          />
        }
      />
      <Route
        path="/ver/hanyo-no-yashahime-ni-no-shou-24"
        element={
          <Video
            frame1={"https://sbthe.com/e/e82iesw2ssa0.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Hanyo no Yashahime ni no Shou Capitulo 24"}
            tituloPag={"Animekun"}
            anime={"Hanyo no Yashahime ni no Shou "}
            numero={"24"}
            capitulosVideo={"/hanyo-no-yashahime-ni-no-shou"}
            anteriorVideo={"/ver/hanyo-no-yashahime-ni-no-shou-23"}
          />
        }
      />
      -----------------
      <Route
        path="/ver/heion-sedai-no-idaten-tachi-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/u8654pht6mrx.html"}
            contAnteriorClass="disable"
            tituloAnime={"Heion Sedai no Idaten Tachi Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Heion Sedai no idaten Tachi"}
            numero={"1"}
            siguienteVideo={"/ver/heion-sedai-no-idaten-tachi-2"}
            capitulosVideo={"/heion-sedai-no-idaten-tachi"}
          />
        }
      />
      <Route
        path="/ver/heion-sedai-no-idaten-tachi-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/jujiqlc6pzih.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Heion Sedai no Idaten Tachi Capitulo 2"}
            tituloPag={"Animekun Gratis"}
            anime={"Heion Sedai no idaten Tachi "}
            numero={"2"}
            classOpcionSiguiente=""
            siguienteVideo={"/ver/heion-sedai-no-idaten-tachi-3"}
            capitulosVideo={"/heion-sedai-no-idaten-tachi"}
            anteriorVideo={"/ver/heion-sedai-no-idaten-tachi-1"}
          />
        }
      />
      <Route
        path="/ver/heion-sedai-no-idaten-tachi-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/kgx51uctx4yu.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Heion Sedai no Idaten Tachi Capitulo 3"}
            tituloPag={"Animekun Gratis"}
            anime={"Heion Sedai no idaten Tachi "}
            numero={"3"}
            siguienteVideo={"/ver/heion-sedai-no-idaten-tachi-4"}
            capitulosVideo={"/heion-sedai-no-idaten-tachi"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/heion-sedai-no-idaten-tachi-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/csbvrgc7yx6d.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Heion Sedai no Idaten Tachi Capitulo 4"}
            tituloPag={"Animekun Gratis"}
            anime={"Heion Sedai no idaten Tachi "}
            numero={"4"}
            siguienteVideo={"/ver/heion-sedai-no-idaten-tachi-5"}
            capitulosVideo={"/heion-sedai-no-idaten-tachi"}
            anteriorVideo={"/ver/heion-sedai-no-idaten-tachi-3"}
          />
        }
      />
      <Route
        path="/ver/heion-sedai-no-idaten-tachi-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/dwnx2vjrrr43.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Heion Sedai no Idaten Tachi Capitulo 5"}
            tituloPag={"Animekun Gratis"}
            anime={"Heion Sedai no idaten Tachi "}
            numero={"5"}
            siguienteVideo={"/ver/heion-sedai-no-idaten-tachi-6"}
            capitulosVideo={"/heion-sedai-no-idaten-tachi"}
            anteriorVideo={"/ver/heion-sedai-no-idaten-tachi-4"}
          />
        }
      />
      <Route
        path="/ver/heion-sedai-no-idaten-tachi-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/081yz8qn09ur.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Heion Sedai no Idaten Tachi Capitulo 6"}
            tituloPag={"Animekun Gratis"}
            anime={"Heion Sedai no idaten Tachi "}
            numero={"6"}
            siguienteVideo={"/ver/heion-sedai-no-idaten-tachi-7"}
            capitulosVideo={"/heion-sedai-no-idaten-tachi"}
            anteriorVideo={"/ver/heion-sedai-no-idaten-tachi-5"}
          />
        }
      />
      <Route
        path="/ver/heion-sedai-no-idaten-tachi-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/bansbaua4346.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Heion Sedai no Idaten Tachi Capitulo 7"}
            tituloPag={"Animekun Gratis"}
            anime={"Heion Sedai no idaten Tachi "}
            numero={"7"}
            siguienteVideo={"/ver/heion-sedai-no-idaten-tachi-8"}
            capitulosVideo={"/heion-sedai-no-idaten-tachi"}
            anteriorVideo={"/ver/heion-sedai-no-idaten-tachi-6"}
          />
        }
      />
      <Route
        path="/ver/heion-sedai-no-idaten-tachi-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/7gi57zrn9gha.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Heion Sedai no Idaten Tachi Capitulo 8"}
            tituloPag={"Animekun Gratis"}
            anime={"Heion Sedai no idaten Tachi "}
            numero={"8"}
            siguienteVideo={"/ver/heion-sedai-no-idaten-tachi-9"}
            capitulosVideo={"/heion-sedai-no-idaten-tachi"}
            anteriorVideo={"/ver/heion-sedai-no-idaten-tachi-7"}
          />
        }
      />
      <Route
        path="/ver/heion-sedai-no-idaten-tachi-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/w3oedwzhcxaj.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Heion Sedai no Idaten Tachi Capitulo 9"}
            tituloPag={"Animekun Gratis"}
            anime={"Heion Sedai no idaten Tachi "}
            numero={"9"}
            siguienteVideo={"/ver/heion-sedai-no-idaten-tachi-10"}
            capitulosVideo={"/heion-sedai-no-idaten-tachi"}
            anteriorVideo={"/ver/heion-sedai-no-idaten-tachi-8"}
          />
        }
      />
      <Route
        path="/ver/heion-sedai-no-idaten-tachi-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/vl0ovx250sdp.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Heion Sedai no Idaten Tachi Capitulo 10"}
            tituloPag={"Animekun Gratis"}
            anime={"Heion Sedai no idaten Tachi "}
            numero={"10"}
            siguienteVideo={"/ver/heion-sedai-no-idaten-tachi-11"}
            capitulosVideo={"/heion-sedai-no-idaten-tachi"}
            anteriorVideo={"/ver/heion-sedai-no-idaten-tachi-9"}
          />
        }
      />
      <Route
        path="/ver/heion-sedai-no-idaten-tachi-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/p72kqt6u8unq.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Heion Sedai no Idaten Tachi Capitulo 11"}
            tituloPag={"Animekun Gratis"}
            anime={"Heion Sedai no idaten Tachi "}
            numero={"11"}
            capitulosVideo={"/heion-sedai-no-idaten-tachi"}
            anteriorVideo={"/ver/heion-sedai-no-idaten-tachi-10"}
          />
        }
      />
      -----------------
      <Route
        path="/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/nnq7yonfq4oq.html"}
            contAnteriorClass={"disable"}
            tituloAnime={
              "Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 Capitulo 1"
            }
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun Gratis"}
            anime={
              "Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2"
            }
            numero={"1"}
            siguienteVideo={
              "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1-2"
            }
            capitulosVideo={
              "/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1"
            }
          />
        }
      />
      <Route
        path="/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/4arcp0tf413b.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 Capitulo 2"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 "}
            numero={"2"}
            classOpcionSiguiente=""
            siguienteVideo={
              "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1-3"
            }
            capitulosVideo={
              "/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1"
            }
            anteriorVideo={
              "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1-1"
            }
          />
        }
      />
      <Route
        path="/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/sh99o8y5nk8l.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 Capitulo 3"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 "}
            numero={"3"}
            siguienteVideo={
              "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1-4"
            }
            capitulosVideo={
              "/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1"
            }
            anteriorVideo={
              "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1-2"
            }
          />
        }
      />
      <Route
        path="/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/iifrdakaentt.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 Capitulo 4"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 "}
            numero={"4"}
            siguienteVideo={
              "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1-5"
            }
            capitulosVideo={
              "/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1"
            }
            anteriorVideo={
              "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1-3"
            }
          />
        }
      />
      <Route
        path="/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/9f1ajyv2892n.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 Capitulo 5"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 "}
            numero={"5"}
            siguienteVideo={
              "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1-6"
            }
            capitulosVideo={
              "/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1"
            }
            anteriorVideo={
              "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1-4"
            }
          />
        }
      />
      <Route
        path="/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/9oul0segasro.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 Capitulo 6"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 "}
            numero={"6"}
            siguienteVideo={
              "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1-7"
            }
            capitulosVideo={
              "/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1"
            }
            anteriorVideo={
              "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1-5"
            }
          />
        }
      />
      <Route
        path="/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/qvbcz0vertsb.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 Capitulo 7"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 "}
            numero={"7"}
            siguienteVideo={
              "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1-8"
            }
            capitulosVideo={
              "/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1"
            }
            anteriorVideo={
              "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1-6"
            }
          />
        }
      />
      <Route
        path="/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/vbc2shsxwgsq.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 Capitulo 8"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 "}
            numero={"8"}
            siguienteVideo={
              "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1-9"
            }
            capitulosVideo={
              "/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1"
            }
            anteriorVideo={
              "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1-7"
            }
          />
        }
      />
      <Route
        path="/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/ynrf1qh3d6wx.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 Capitulo 9"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 "}
            numero={"9"}
            siguienteVideo={
              "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1-10"
            }
            capitulosVideo={
              "/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1"
            }
            anteriorVideo={
              "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1-8"
            }
          />
        }
      />
      <Route
        path="/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/btasif0mlxr4.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 Capitulo 10"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 "}
            numero={"10"}
            siguienteVideo={
              "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1-11"
            }
            capitulosVideo={
              "/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1"
            }
            anteriorVideo={
              "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1-9"
            }
          />
        }
      />
      <Route
        path="/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/c8ii8f9gnflu.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 Capitulo 11"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 "}
            numero={"11"}
            siguienteVideo={
              "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1-12"
            }
            capitulosVideo={
              "/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1"
            }
            anteriorVideo={
              "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1-10"
            }
          />
        }
      />
      <Route
        path="/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/exv9wohyt5ie.html.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 Capitulo 12"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 "}
            numero={"12"}
            siguienteVideo={
              "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1-13"
            }
            capitulosVideo={
              "/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1"
            }
            anteriorVideo={
              "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1-10"
            }
          />
        }
      />
      <Route
        path="/ver/tensei-shitara-slime-datta-ken-segunda-temporada-parte-2-13"
        element={
          <Video
            frame1={"https://sbthe.com/e/geisodig38lu.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={
              "Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 Capitulo 13"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Tensei Shitara Slime Datta Ken Segunda Temporada Parte 2 "}
            numero={"13"}
            capitulosVideo={
              "/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1"
            }
            anteriorVideo={
              "/ver/tensei-shitara-slime-datta-ken-segunda-temporada-segunda-parte-1-12"
            }
          />
        }
      />
      -----------------
      <Route
        path="/ver/peach-boy-riverside-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/akjadkvgbi6b.html"}
            contAnteriorClass="disable"
            tituloAnime={"Peach Boy Riverside Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Peach Boy Riverside"}
            numero={"1"}
            siguienteVideo={"/ver/peach-boy-riverside-2"}
            capitulosVideo={"/peach-boy-riverside"}
          />
        }
      />
      <Route
        path="/ver/peach-boy-riverside-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/dyoel1ztk7l9.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Peach Boy Riverside Capitulo 2"}
            tituloPag={"Animekun Gratis"}
            anime={"Peach Boy Riverside "}
            numero={"2"}
            siguienteVideo={"/ver/peach-boy-riverside-3"}
            capitulosVideo={"/peach-boy-riverside"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/peach-boy-riverside-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/bq18u1via77o.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Peach Boy Riverside Capitulo 3"}
            tituloPag={"Animekun Gratis"}
            anime={"Peach Boy Riverside "}
            numero={"3"}
            siguienteVideo={"/ver/peach-boy-riverside-4"}
            capitulosVideo={"/peach-boy-riverside"}
            anteriorVideo={"/ver/peach-boy-riverside-2"}
          />
        }
      />
      <Route
        path="/ver/peach-boy-riverside-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/jyfmiycw25fh.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Peach Boy Riverside Capitulo 4"}
            tituloPag={"Animekun Gratis"}
            anime={"Peach Boy Riverside "}
            numero={"4"}
            siguienteVideo={"/ver/peach-boy-riverside-5"}
            capitulosVideo={"/peach-boy-riverside"}
            anteriorVideo={"/ver/peach-boy-riverside-3"}
          />
        }
      />
      <Route
        path="/ver/peach-boy-riverside-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/hl13k85cgw3b.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Peach Boy Riverside Capitulo 5"}
            tituloPag={"Animekun Gratis"}
            anime={"Peach Boy Riverside "}
            numero={"5"}
            siguienteVideo={"/ver/peach-boy-riverside-6"}
            capitulosVideo={"/peach-boy-riverside"}
            anteriorVideo={"/ver/peach-boy-riverside-4"}
          />
        }
      />
      <Route
        path="/ver/peach-boy-riverside-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/s7m9vl0o1fft.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Peach Boy Riverside Capitulo 6"}
            tituloPag={"Animekun Gratis"}
            anime={"Peach Boy Riverside "}
            numero={"6"}
            siguienteVideo={"/ver/peach-boy-riverside-7"}
            capitulosVideo={"/peach-boy-riverside"}
            anteriorVideo={"/ver/peach-boy-riverside-5"}
          />
        }
      />
      <Route
        path="/ver/peach-boy-riverside-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/kdlw3qd6sltk.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Peach Boy Riverside Capitulo 7"}
            tituloPag={"Animekun Gratis"}
            anime={"Peach Boy Riverside "}
            numero={"7"}
            siguienteVideo={"/ver/peach-boy-riverside-8"}
            capitulosVideo={"/peach-boy-riverside"}
            anteriorVideo={"/ver/peach-boy-riverside-6"}
          />
        }
      />
      <Route
        path="/ver/peach-boy-riverside-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/m85s9k2gzggq.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Peach Boy Riverside Capitulo 8"}
            tituloPag={"Animekun Gratis"}
            anime={"Peach Boy Riverside "}
            numero={"8"}
            siguienteVideo={"/ver/peach-boy-riverside-9"}
            capitulosVideo={"/peach-boy-riverside"}
            anteriorVideo={"/ver/peach-boy-riverside-7"}
          />
        }
      />
      <Route
        path="/ver/peach-boy-riverside-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/chqt1qsr5jgq.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Peach Boy Riverside Capitulo 9"}
            tituloPag={"Animekun Gratis"}
            anime={"Peach Boy Riverside "}
            numero={"9"}
            siguienteVideo={"/ver/peach-boy-riverside-10"}
            capitulosVideo={"/peach-boy-riverside"}
            anteriorVideo={"/ver/peach-boy-riverside-8"}
          />
        }
      />
      <Route
        path="/ver/peach-boy-riverside-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/os7odvr421uo.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Peach Boy Riverside Capitulo 10"}
            tituloPag={"Animekun Gratis"}
            anime={"Peach Boy Riverside "}
            numero={"10"}
            siguienteVideo={"/ver/peach-boy-riverside-11"}
            capitulosVideo={"/peach-boy-riverside"}
            anteriorVideo={"/ver/peach-boy-riverside-9"}
          />
        }
      />
      <Route
        path="/ver/peach-boy-riverside-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/fzcr8rc9e5c1.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Peach Boy Riverside Capitulo 11"}
            tituloPag={"Animekun Gratis"}
            anime={"Peach Boy Riverside "}
            numero={"11"}
            siguienteVideo={"/ver/peach-boy-riverside-12"}
            capitulosVideo={"/peach-boy-riverside"}
            anteriorVideo={"/ver/peach-boy-riverside-10"}
          />
        }
      />
      <Route
        path="/ver/peach-boy-riverside-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/2q60xu86q1py.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Peach Boy Riverside Capitulo 12"}
            tituloPag={"Animekun Gratis"}
            anime={"Peach Boy Riverside "}
            numero={"12"}
            capitulosVideo={"/peach-boy-riverside"}
            anteriorVideo={"/ver/peach-boy-riverside-11"}
          />
        }
      />
      -----------------
      <Route
        path="/ver/jujutsu-kaisen-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/u9ik3w41ladd.html"}
            contAnteriorClass="disable"
            tituloAnime={" Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun Gratis"}
            anime={""}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/jujutsu-kaisen-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/k8n20d2nczg8.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Jujutsu Kaisen Capitulo 2"}
            tituloPag={"Animekun Gratis"}
            anime={" "}
            numero={"2"}
            classOpcionSiguiente=""
            siguienteVideo={"/ver/jujutsu-kaisen-3"}
            capitulosVideo={"/jujutsu-kaisen"}
            anteriorVideo={"/ver/jujutsu-kaisen-1"}
          />
        }
      />
      <Route
        path="/ver/jujutsu-kaisen-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/xv54r2bhkymm.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Jujutsu Kaisen Capitulo 3"}
            tituloPag={"Animekun Gratis"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/jujutsu-kaisen-4"}
            capitulosVideo={"/jujutsu-kaisen"}
            anteriorVideo={"/ver/jujutsu-kaisen-2"}
          />
        }
      />
      <Route
        path="/ver/jujutsu-kaisen-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/mr643hlwx3ci.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Jujutsu Kaisen Capitulo 4"}
            tituloPag={"Animekun Gratis"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/jujutsu-kaisen-5"}
            capitulosVideo={"/jujutsu-kaisen"}
            anteriorVideo={"/ver/jujutsu-kaisen-3"}
          />
        }
      />
      <Route
        path="/ver/jujutsu-kaisen-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/eb9t3rc9tltk.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Jujutsu Kaisen Capitulo 5"}
            tituloPag={"Animekun Gratis"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/jujutsu-kaisen-6"}
            capitulosVideo={"/jujutsu-kaisen"}
            anteriorVideo={"/ver/jujutsu-kaisen-4"}
          />
        }
      />
      <Route
        path="/ver/jujutsu-kaisen-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/2akrissclvg6.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Jujutsu Kaisen Capitulo 6"}
            tituloPag={"Animekun Gratis"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/jujutsu-kaisen-7"}
            capitulosVideo={"/jujutsu-kaisen"}
            anteriorVideo={"/ver/jujutsu-kaisen-5"}
          />
        }
      />
      <Route
        path="/ver/jujutsu-kaisen-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/ne9lua4wgase.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Jujutsu Kaisen Capitulo 7"}
            tituloPag={"Animekun Gratis"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/jujutsu-kaisen-8"}
            capitulosVideo={"/jujutsu-kaisen"}
            anteriorVideo={"/ver/jujutsu-kaisen-6"}
          />
        }
      />
      <Route
        path="/ver/jujutsu-kaisen-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/rxkoo8ru0xmi.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Jujutsu Kaisen Capitulo 8"}
            tituloPag={"Animekun Gratis"}
            anime={"Jujutsu Kaisen "}
            numero={"8"}
            siguienteVideo={"/ver/jujutsu-kaisen-9"}
            capitulosVideo={"/jujutsu-kaisen"}
            anteriorVideo={"/ver/jujutsu-kaisen-7"}
          />
        }
      />
      <Route
        path="/ver/jujutsu-kaisen-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/q003mjb4vnth.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Jujutsu Kaisen Capitulo 9"}
            tituloPag={"Animekun Gratis"}
            anime={"Jujutsu Kaisen "}
            numero={"9"}
            siguienteVideo={"/ver/jujutsu-kaisen-10"}
            capitulosVideo={"/jujutsu-kaisen"}
            anteriorVideo={"/ver/jujutsu-kaisen-8"}
          />
        }
      />
      <Route
        path="/ver/jujutsu-kaisen-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/cxxqcp4xnmmr.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Jujutsu Kaisen Capitulo 10"}
            tituloPag={"Animekun Gratis"}
            anime={"Jujutsu Kaisen "}
            numero={"10"}
            siguienteVideo={"/ver/jujutsu-kaisen-11"}
            capitulosVideo={"/jujutsu-kaisen"}
            anteriorVideo={"/ver/jujutsu-kaisen-9"}
          />
        }
      />
      <Route
        path="/ver/jujutsu-kaisen-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/fhxycti75bc0.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Jujutsu Kaisen Capitulo 11"}
            tituloPag={"Animekun Gratis"}
            anime={"Jujutsu Kaisen "}
            numero={"11"}
            siguienteVideo={"/ver/jujutsu-kaisen-12"}
            capitulosVideo={"/jujutsu-kaisen"}
            anteriorVideo={"/ver/jujutsu-kaisen-10"}
          />
        }
      />
      <Route
        path="/ver/jujutsu-kaisen-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/vic3b32114sf.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Jujutsu Kaisen Capitulo 12"}
            tituloPag={"Animekun Gratis"}
            anime={"Jujutsu Kaisen "}
            numero={"12"}
            capitulosVideo={"/jujutsu-kaisen"}
            anteriorVideo={"/ver/jujutsu-kaisen-11"}
          />
        }
      />
      <Route
        path="/ver/jujutsu-kaisen-13"
        element={
          <Video
            frame1={"https://sbthe.com/e/6nyihmfvg3g2.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Jujutsu Kaisen Capitulo 13"}
            tituloPag={"Animekun Gratis"}
            anime={"Jujutsu Kaisen"}
            numero={"13"}
            siguienteVideo={"/ver/jujutsu-kaisen-14"}
            capitulosVideo={"/jujutsu-kaisen"}
            anteriorVideo={"/ver/jujutsu-kaisen-12"}
          />
        }
      />
      <Route
        path="/ver/jujutsu-kaisen-14"
        element={
          <Video
            frame1={"https://sbthe.com/e/hwj9y3yl0uhr.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Jujutsu Kaisen Capitulo 14"}
            tituloPag={"Animekun Gratis"}
            anime={"Jujutsu Kaisen "}
            numero={"14"}
            siguienteVideo={"/ver/jujutsu-kaisen-15"}
            capitulosVideo={"/jujutsu-kaisen"}
            anteriorVideo={"/ver/jujutsu-kaisen-13"}
          />
        }
      />
      <Route
        path="/ver/jujutsu-kaisen-15"
        element={
          <Video
            frame1={"https://sbthe.com/e/83lfw2omii5n.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Jujutsu Kaisen Capitulo 15"}
            tituloPag={"Animekun Gratis"}
            anime={"Jujutsu Kaisen "}
            numero={"15"}
            siguienteVideo={"/ver/jujutsu-kaisen-16"}
            capitulosVideo={"/jujutsu-kaisen"}
            anteriorVideo={"/ver/jujutsu-kaisen-14"}
          />
        }
      />
      <Route
        path="/ver/jujutsu-kaisen-16"
        element={
          <Video
            frame1={"https://sbthe.com/e/q6dlcy0ihw8s.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Jujutsu Kaisen Capitulo 16"}
            tituloPag={"Animekun Gratis"}
            anime={"Jujutsu Kaisen "}
            numero={"16"}
            siguienteVideo={"/ver/jujutsu-kaisen-17"}
            capitulosVideo={"/jujutsu-kaisen"}
            anteriorVideo={"/ver/jujutsu-kaisen-15"}
          />
        }
      />
      <Route
        path="/ver/jujutsu-kaisen-17"
        element={
          <Video
            frame1={"https://sbthe.com/e/v7zj4n452e8c.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Jujutsu Kaisen Capitulo 17"}
            tituloPag={"Animekun Gratis"}
            anime={"Jujutsu Kaisen "}
            numero={"17"}
            siguienteVideo={"/ver/jujutsu-kaisen-18"}
            capitulosVideo={"/jujutsu-kaisen"}
            anteriorVideo={"/ver/jujutsu-kaisen-16"}
          />
        }
      />
      <Route
        path="/ver/jujutsu-kaisen-18"
        element={
          <Video
            frame1={"https://sbthe.com/e/y9aualnvtxe1.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Jujutsu Kaisen Capitulo 18"}
            tituloPag={"Animekun Gratis"}
            anime={"Jujutsu Kaisen "}
            numero={"18"}
            siguienteVideo={"/ver/jujutsu-kaisen-19"}
            capitulosVideo={"/jujutsu-kaisen"}
            anteriorVideo={"/ver/jujutsu-kaisen-17"}
          />
        }
      />
      <Route
        path="/ver/jujutsu-kaisen-19"
        element={
          <Video
            frame1={"https://sbthe.com/e/5isw4f45kz2w.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Jujutsu Kaisen Capitulo 19"}
            tituloPag={"Animekun Gratis"}
            anime={"Jujutsu Kaisen "}
            numero={"19"}
            siguienteVideo={"/ver/jujutsu-kaisen-20"}
            capitulosVideo={"/jujutsu-kaisen"}
            anteriorVideo={"/ver/jujutsu-kaisen-18"}
          />
        }
      />
      <Route
        path="/ver/jujutsu-kaisen-20"
        element={
          <Video
            frame1={"https://sbthe.com/e/9e29ro16k157.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Jujutsu Kaisen Capitulo 20"}
            tituloPag={"Animekun Gratis"}
            anime={"Jujutsu Kaisen "}
            numero={"20"}
            siguienteVideo={"/ver/jujutsu-kaisen-21"}
            capitulosVideo={"/jujutsu-kaisen"}
            anteriorVideo={"/ver/jujutsu-kaisen-19"}
          />
        }
      />
      <Route
        path="/ver/jujutsu-kaisen-21"
        element={
          <Video
            frame1={"https://sbthe.com/e/cv72q29gviqn.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Jujutsu Kaisen Capitulo 21"}
            tituloPag={"Animekun Gratis"}
            anime={"Jujutsu Kaisen "}
            numero={"21"}
            siguienteVideo={"/ver/jujutsu-kaisen-22"}
            capitulosVideo={"/jujutsu-kaisen"}
            anteriorVideo={"/ver/jujutsu-kaisen-20"}
          />
        }
      />
      <Route
        path="/ver/jujutsu-kaisen-22"
        element={
          <Video
            frame1={"https://sbthe.com/e/t6e8vf122nqz.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Jujutsu Kaisen Capitulo 22"}
            tituloPag={"Animekun Gratis"}
            anime={"Jujutsu Kaisen "}
            numero={"22"}
            siguienteVideo={"/ver/jujutsu-kaisen-23"}
            capitulosVideo={"/jujutsu-kaisen"}
            anteriorVideo={"/ver/jujutsu-kaisen-21"}
          />
        }
      />
      <Route
        path="/ver/jujutsu-kaisen-23"
        element={
          <Video
            frame1={"https://sbthe.com/e/6ifgqpk2q1ob.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Jujutsu Kaisen Capitulo 23"}
            tituloPag={"Animekun Gratis"}
            anime={"Jujutsu Kaisen "}
            numero={"23"}
            siguienteVideo={"/ver/jujutsu-kaisen-24"}
            capitulosVideo={"/jujutsu-kaisen"}
            anteriorVideo={"/ver/jujutsu-kaisen-22"}
          />
        }
      />
      <Route
        path="/ver/jujutsu-kaisen-24"
        element={
          <Video
            frame1={"https://sbthe.com/e/321us5ufgu3w.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Jujutsu Kaisen Capitulo 24"}
            tituloPag={"Animekun Gratis"}
            anime={"Jujutsu Kaisen "}
            numero={"24"}
            capitulosVideo={"/jujutsu-kaisen"}
            anteriorVideo={"/ver/jujutsu-kaisen-23"}
          />
        }
      />
      -----------------
      <Route
        path="/ver/shingeki-no-bahamut:virgin-soul-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/0trvdy6xoatg.html"}
            contAnteriorClass="disable"
            tituloAnime={"Shingeki no Bahamut:Virgin Soul Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Shingeki no Bahamut:Virgin Soul"}
            numero={"1"}
            siguienteVideo={"/ver/shingeki-no-bahamut:virgin-soul-2"}
            capitulosVideo={"/shingeki-no-bahamut:virgin-soul"}
          />
        }
      />
      <Route
        path="/ver/shingeki-no-bahamut:virgin-soul-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/c3owmlg3zgnq.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Shingeki no Bahamut:Virgin Soul Capitulo 2"}
            tituloPag={"Animekun Gratis"}
            anime={"Shingeki no Bahamut:Virgin Soul "}
            numero={"2"}
            classOpcionSiguiente=""
            siguienteVideo={"/ver/shingeki-no-bahamut:virgin-soul-3"}
            capitulosVideo={"/shingeki-no-bahamut:virgin-soul"}
            anteriorVideo={"/ver/shingeki-no-bahamut:virgin-soul-1"}
          />
        }
      />
      <Route
        path="/ver/shingeki-no-bahamut:virgin-soul-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/sura8fro6ye3.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Shingeki no Bahamut:Virgin Soul Capitulo 3"}
            tituloPag={"Animekun Gratis"}
            anime={"Shingeki no Bahamut:Virgin Soul "}
            numero={"3"}
            siguienteVideo={"/ver/shingeki-no-bahamut:virgin-soul-4"}
            capitulosVideo={"/shingeki-no-bahamut:virgin-soul"}
            anteriorVideo={"/ver/shingeki-no-bahamut:virgin-soul-2"}
          />
        }
      />
      <Route
        path="/ver/shingeki-no-bahamut:virgin-soul-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/5v4l7v5ygr4w.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Shingeki no Bahamut:Virgin Soul Capitulo 4"}
            tituloPag={"Animekun Gratis"}
            anime={"Shingeki no Bahamut:Virgin Soul "}
            numero={"4"}
            siguienteVideo={"/ver/shingeki-no-bahamut:virgin-soul-5"}
            capitulosVideo={"/shingeki-no-bahamut:virgin-soul"}
            anteriorVideo={"/ver/shingeki-no-bahamut:virgin-soul-3"}
          />
        }
      />
      <Route
        path="/ver/shingeki-no-bahamut:virgin-soul-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/6ivh445x6w2r.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Shingeki no Bahamut:Virgin Soul Capitulo 5"}
            tituloPag={"Animekun Gratis"}
            anime={"Shingeki no Bahamut:Virgin Soul "}
            numero={"5"}
            siguienteVideo={"/ver/shingeki-no-bahamut:virgin-soul-6"}
            capitulosVideo={"/shingeki-no-bahamut:virgin-soul"}
            anteriorVideo={"/ver/shingeki-no-bahamut:virgin-soul-4"}
          />
        }
      />
      <Route
        path="/ver/shingeki-no-bahamut:virgin-soul-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/1o5riop6ue7x.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Shingeki no Bahamut:Virgin Soul Capitulo 6"}
            tituloPag={"Animekun Gratis"}
            anime={"Shingeki no Bahamut:Virgin Soul "}
            numero={"6"}
            siguienteVideo={"/ver/shingeki-no-bahamut:virgin-soul-7"}
            capitulosVideo={"/shingeki-no-bahamut:virgin-soul"}
            anteriorVideo={"/ver/shingeki-no-bahamut:virgin-soul-5"}
          />
        }
      />
      <Route
        path="/ver/shingeki-no-bahamut:virgin-soul-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/wtww17lcqtsp.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Shingeki no Bahamut:Virgin Soul Capitulo 7"}
            tituloPag={"Animekun Gratis"}
            anime={"Shingeki no Bahamut:Virgin Soul "}
            numero={"7"}
            siguienteVideo={"/ver/shingeki-no-bahamut:virgin-soul-8"}
            capitulosVideo={"/shingeki-no-bahamut:virgin-soul"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/shingeki-no-bahamut:virgin-soul-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/i3kd4lbkr8il.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Shingeki no Bahamut:Virgin Soul Capitulo 8"}
            tituloPag={"Animekun Gratis"}
            anime={"Shingeki no Bahamut:Virgin Soul "}
            numero={"8"}
            siguienteVideo={"/ver/shingeki-no-bahamut:virgin-soul-9"}
            capitulosVideo={"/shingeki-no-bahamut:virgin-soul"}
            anteriorVideo={"/ver/shingeki-no-bahamut:virgin-soul-7"}
          />
        }
      />
      <Route
        path="/ver/shingeki-no-bahamut:virgin-soul-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/8keln2rafz7y.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Shingeki no Bahamut:Virgin Soul Capitulo 9"}
            tituloPag={"Animekun Gratis"}
            anime={"Shingeki no Bahamut:Virgin Soul "}
            numero={"9"}
            siguienteVideo={"/ver/shingeki-no-bahamut:virgin-soul-10"}
            capitulosVideo={"/shingeki-no-bahamut:virgin-soul"}
            anteriorVideo={"/ver/shingeki-no-bahamut:virgin-soul-8"}
          />
        }
      />
      <Route
        path="/ver/shingeki-no-bahamut:virgin-soul-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/07pmlju308c6.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Shingeki no Bahamut:Virgin Soul Capitulo 10"}
            tituloPag={"Animekun Gratis"}
            anime={"Shingeki no Bahamut:Virgin Soul "}
            numero={"10"}
            siguienteVideo={"/ver/shingeki-no-bahamut:virgin-soul-11"}
            capitulosVideo={"/shingeki-no-bahamut:virgin-soul"}
            anteriorVideo={"/ver/shingeki-no-bahamut:virgin-soul-9"}
          />
        }
      />
      <Route
        path="/ver/shingeki-no-bahamut:virgin-soul-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/1krbfaw0yy7m.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Shingeki no Bahamut:Virgin Soul Capitulo 11"}
            tituloPag={"Animekun Gratis"}
            anime={"Shingeki no Bahamut:Virgin Soul "}
            numero={"11"}
            siguienteVideo={"/ver/shingeki-no-bahamut:virgin-soul-12"}
            capitulosVideo={"/shingeki-no-bahamut:virgin-soul"}
            anteriorVideo={"/ver/shingeki-no-bahamut:virgin-soul-10"}
          />
        }
      />
      <Route
        path="/ver/shingeki-no-bahamut:virgin-soul-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/iyrhq1ngdzfz.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Shingeki no Bahamut:Virgin Soul Capitulo 12"}
            tituloPag={"Animekun Gratis"}
            anime={"Shingeki no Bahamut:Virgin Soul "}
            numero={"12"}
            siguienteVideo={"/ver/shingeki-no-bahamut:virgin-soul-13"}
            capitulosVideo={"/shingeki-no-bahamut:virgin-soul"}
            anteriorVideo={"/ver/shingeki-no-bahamut:virgin-soul-11"}
          />
        }
      />
      <Route
        path="/ver/shingeki-no-bahamut:virgin-soul-13"
        element={
          <Video
            frame1={"https://sbthe.com/e/708fhyqzd3sr.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Shingeki no Bahamut:Virgin Soul Capitulo 13"}
            tituloPag={"Animekun Gratis"}
            anime={"Shingeki no Bahamut:Virgin Soul "}
            numero={"13"}
            siguienteVideo={"/ver/shingeki-no-bahamut:virgin-soul-14"}
            capitulosVideo={"/shingeki-no-bahamut:virgin-soul"}
            anteriorVideo={"/ver/shingeki-no-bahamut:virgin-soul-12"}
          />
        }
      />
      <Route
        path="/ver/shingeki-no-bahamut:virgin-soul-14"
        element={
          <Video
            frame1={"https://sbthe.com/e/reuijb8awv01.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Shingeki no Bahamut:Virgin Soul Capitulo 14"}
            tituloPag={"Animekun Gratis"}
            anime={"Shingeki no Bahamut:Virgin Soul "}
            numero={"14"}
            siguienteVideo={"/ver/shingeki-no-bahamut:virgin-soul-15"}
            capitulosVideo={"/shingeki-no-bahamut:virgin-soul"}
            anteriorVideo={"/ver/shingeki-no-bahamut:virgin-soul-13"}
          />
        }
      />
      <Route
        path="/ver/shingeki-no-bahamut:virgin-soul-15"
        element={
          <Video
            frame1={"https://sbthe.com/e/bnfc56yqqnn0.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Shingeki no Bahamut:Virgin Soul Capitulo 15"}
            tituloPag={"Animekun Gratis"}
            anime={"Shingeki no Bahamut:Virgin Soul "}
            numero={"15"}
            siguienteVideo={"/ver/shingeki-no-bahamut:virgin-soul-16"}
            capitulosVideo={"/shingeki-no-bahamut:virgin-soul"}
            anteriorVideo={"/ver/shingeki-no-bahamut:virgin-soul-14"}
          />
        }
      />
      <Route
        path="/ver/shingeki-no-bahamut:virgin-soul-16"
        element={
          <Video
            frame1={"https://sbthe.com/e/z0haf3kkinbn.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Shingeki no Bahamut:Virgin Soul Capitulo 16"}
            tituloPag={"Animekun Gratis"}
            anime={"Shingeki no Bahamut:Virgin Soul "}
            numero={"16"}
            siguienteVideo={"/ver/shingeki-no-bahamut:virgin-soul-17"}
            capitulosVideo={"/shingeki-no-bahamut:virgin-soul"}
            anteriorVideo={"/ver/shingeki-no-bahamut:virgin-soul-15"}
          />
        }
      />
      <Route
        path="/ver/shingeki-no-bahamut:virgin-soul-17"
        element={
          <Video
            frame1={"https://sbthe.com/e/yqtxtizjicen.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Shingeki no Bahamut:Virgin Soul Capitulo 17"}
            tituloPag={"Animekun Gratis"}
            anime={"Shingeki no Bahamut:Virgin Soul "}
            numero={"17"}
            siguienteVideo={"/ver/shingeki-no-bahamut:virgin-soul-18"}
            capitulosVideo={"/shingeki-no-bahamut:virgin-soul"}
            anteriorVideo={"/ver/shingeki-no-bahamut:virgin-soul-16"}
          />
        }
      />
      <Route
        path="/ver/shingeki-no-bahamut:virgin-soul-18"
        element={
          <Video
            frame1={"https://sbthe.com/e/dzi6e2qri1pc.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Shingeki no Bahamut:Virgin Soul Capitulo 18"}
            tituloPag={"Animekun Gratis"}
            anime={"Shingeki no Bahamut:Virgin Soul "}
            numero={"18"}
            siguienteVideo={"/ver/shingeki-no-bahamut:virgin-soul-19"}
            capitulosVideo={"/shingeki-no-bahamut:virgin-soul"}
            anteriorVideo={"/ver/shingeki-no-bahamut:virgin-soul-17"}
          />
        }
      />
      <Route
        path="/ver/shingeki-no-bahamut:virgin-soul-19"
        element={
          <Video
            frame1={"https://sbthe.com/e/gogfkoqz3ma9.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Shingeki no Bahamut:Virgin Soul Capitulo 19"}
            tituloPag={"Animekun Gratis"}
            anime={"Shingeki no Bahamut:Virgin Soul "}
            numero={"19"}
            siguienteVideo={"/ver/shingeki-no-bahamut:virgin-soul-20"}
            capitulosVideo={"/shingeki-no-bahamut:virgin-soul"}
            anteriorVideo={"/ver/shingeki-no-bahamut:virgin-soul-18"}
          />
        }
      />
      <Route
        path="/ver/shingeki-no-bahamut:virgin-soul-20"
        element={
          <Video
            frame1={"https://sbthe.com/e/fl5injqoepwc.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Shingeki no Bahamut:Virgin Soul Capitulo 20"}
            tituloPag={"Animekun Gratis"}
            anime={"Shingeki no Bahamut:Virgin Soul "}
            numero={"20"}
            siguienteVideo={"/ver/shingeki-no-bahamut:virgin-soul-21"}
            capitulosVideo={"/shingeki-no-bahamut:virgin-soul"}
            anteriorVideo={"/ver/shingeki-no-bahamut:virgin-soul-19"}
          />
        }
      />
      <Route
        path="/ver/shingeki-no-bahamut:virgin-soul-21"
        element={
          <Video
            frame1={"https://sbthe.com/e/2wfpi7wz1zfs.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Shingeki no Bahamut:Virgin Soul Capitulo 21"}
            tituloPag={"Animekun Gratis"}
            anime={"Shingeki no Bahamut:Virgin Soul "}
            numero={"21"}
            siguienteVideo={"/ver/shingeki-no-bahamut:virgin-soul-22"}
            capitulosVideo={"/shingeki-no-bahamut:virgin-soul"}
            anteriorVideo={"/ver/shingeki-no-bahamut:virgin-soul-20"}
          />
        }
      />
      <Route
        path="/ver/shingeki-no-bahamut:virgin-soul-22"
        element={
          <Video
            frame1={"https://sbthe.com/e/kucy3rq0gzh7.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Shingeki no Bahamut:Virgin Soul Capitulo 22"}
            tituloPag={"Animekun Gratis"}
            anime={"Shingeki no Bahamut:Virgin Soul "}
            numero={"22"}
            siguienteVideo={"/ver/shingeki-no-bahamut:virgin-soul-23"}
            capitulosVideo={"/shingeki-no-bahamut:virgin-soul"}
            anteriorVideo={"/ver/shingeki-no-bahamut:virgin-soul-21"}
          />
        }
      />
      <Route
        path="/ver/shingeki-no-bahamut:virgin-soul-23"
        element={
          <Video
            frame1={"https://sbthe.com/e/36nc1wpvw4c5.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Shingeki no Bahamut:Virgin Soul Capitulo 23"}
            tituloPag={"Animekun Gratis"}
            anime={"Shingeki no Bahamut:Virgin Soul "}
            numero={"23"}
            siguienteVideo={"/ver/shingeki-no-bahamut:virgin-soul-24"}
            capitulosVideo={"/shingeki-no-bahamut:virgin-soul"}
            anteriorVideo={"/ver/shingeki-no-bahamut:virgin-soul-22"}
          />
        }
      />
      <Route
        path="/ver/shingeki-no-bahamut:virgin-soul-24"
        element={
          <Video
            frame1={"https://sbthe.com/e/gutpiwizrc7l.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Shingeki no Bahamut:Virgin Soul Capitulo 24"}
            tituloPag={"Animekun Gratis"}
            anime={"Shingeki no Bahamut:Virgin Soul "}
            numero={"24"}
            capitulosVideo={"/shingeki-no-bahamut:virgin-soul"}
            anteriorVideo={"/ver/shingeki-no-bahamut:virgin-soul-23"}
          />
        }
      />
      -----------------
      <Route
        path="/ver/castlevania-segunda-temporada-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/nsqplrxmuobs.html"}
            contAnteriorClass="disable"
            tituloAnime={"Castlevania Segunda Temporada Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Castlevania Segunda Temporada"}
            numero={"1"}
            siguienteVideo={"/ver/castlevania-segunda-temporada-2"}
            capitulosVideo={"/castlevania-segunda-temporada"}
          />
        }
      />
      <Route
        path="/ver/castlevania-segunda-temporada-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/otguuvuqap08.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Castlevania Segunda Temporada Capitulo 2"}
            tituloPag={"Animekun Gratis"}
            anime={"Castlevania Segunda Temporada "}
            numero={"2"}
            siguienteVideo={"/ver/castlevania-segunda-temporada-3"}
            capitulosVideo={"/castlevania-segunda-temporada"}
            anteriorVideo={"/ver/castlevania-segunda-temporada-1"}
          />
        }
      />
      <Route
        path="/ver/castlevania-segunda-temporada-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/kq3a6y8et0ve.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Castlevania Segunda Temporada Capitulo 3"}
            tituloPag={"Animekun Gratis"}
            anime={"Castlevania Segunda Temporada "}
            numero={"3"}
            siguienteVideo={"/ver/castlevania-segunda-temporada-4"}
            capitulosVideo={"/castlevania-segunda-temporada"}
            anteriorVideo={"/ver/castlevania-segunda-temporada-2"}
          />
        }
      />
      <Route
        path="/ver/castlevania-segunda-temporada-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/qb4j6t2ys1w7.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Castlevania Segunda Temporada Capitulo 4"}
            tituloPag={"Animekun Gratis"}
            anime={"Castlevania Segunda Temporada "}
            numero={"4"}
            siguienteVideo={"/ver/castlevania-segunda-temporada-5"}
            capitulosVideo={"/castlevania-segunda-temporada"}
            anteriorVideo={"/ver/castlevania-segunda-temporada-3"}
          />
        }
      />
      <Route
        path="/ver/castlevania-segunda-temporada-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/onnz6w3omll8.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Castlevania Segunda Temporada Capitulo 5"}
            tituloPag={"Animekun Gratis"}
            anime={"Castlevania Segunda Temporada "}
            numero={"5"}
            siguienteVideo={"/ver/castlevania-segunda-temporada-6"}
            capitulosVideo={"/castlevania-segunda-temporada"}
            anteriorVideo={"/ver/castlevania-segunda-temporada-4"}
          />
        }
      />
      <Route
        path="/ver/castlevania-segunda-temporada-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/ccdfbe143n3l.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Castlevania Segunda Temporada Capitulo 6"}
            tituloPag={"Animekun Gratis"}
            anime={"Castlevania Segunda Temporada "}
            numero={"6"}
            siguienteVideo={"/ver/castlevania-segunda-temporada-7"}
            capitulosVideo={"/castlevania-segunda-temporada"}
            anteriorVideo={"/ver/castlevania-segunda-temporada-5"}
          />
        }
      />
      <Route
        path="/ver/castlevania-segunda-temporada-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/b3ebj7z8ys0z.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Castlevania Segunda Temporada Capitulo 7"}
            tituloPag={"Animekun Gratis"}
            anime={"Castlevania Segunda Temporada "}
            numero={"7"}
            siguienteVideo={"/ver/castlevania-segunda-temporada-8"}
            capitulosVideo={"/castlevania-segunda-temporada"}
            anteriorVideo={"/ver/castlevania-segunda-temporada-6"}
          />
        }
      />
      <Route
        path="/ver/castlevania-segunda-temporada-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/mgkiayklee3h.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Castlevania Segunda Temporada Capitulo 12"}
            tituloPag={"Animekun Gratis"}
            anime={"Castlevania Segunda Temporada "}
            numero={"8"}
            capitulosVideo={"/castlevania-segunda-temporada"}
            anteriorVideo={"/ver/castlevania-segunda-temporada-7"}
          />
        }
      />
      -----------------
      <Route
        path="/ver/overlord-III-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/sgwnwd964n02.html"}
            contAnteriorClass="disable"
            tituloAnime={"Overlord III Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Overlord III "}
            numero={"1"}
            siguienteVideo={"/ver/overlord-III-2"}
            capitulosVideo={"/overlord-III"}
          />
        }
      />
      <Route
        path="/ver/overlord-III-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/qu9bmgcbwic4.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord III Capitulo 2"}
            tituloPag={"Animekun Gratis"}
            anime={"Overlord III "}
            numero={"2"}
            siguienteVideo={"/ver/overlord-III-3"}
            capitulosVideo={"/overlord-III"}
            anteriorVideo={"/ver/overlord-III-1"}
          />
        }
      />
      <Route
        path="/ver/overlord-III-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/r805hew3u33s.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord III Capitulo 3"}
            tituloPag={"Animekun Gratis"}
            anime={"Overlord III "}
            numero={"3"}
            siguienteVideo={"/ver/overlord-III-4"}
            capitulosVideo={"/overlord-III"}
            anteriorVideo={"/ver/overlord-III-2"}
          />
        }
      />
      <Route
        path="/ver/overlord-III-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/a4w13tfatrcr.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord III Capitulo 4"}
            tituloPag={"Animekun Gratis"}
            anime={"Overlord III "}
            numero={"4"}
            siguienteVideo={"/ver/overlord-III-5"}
            capitulosVideo={"/overlord-III"}
            anteriorVideo={"/ver/overlord-III-3"}
          />
        }
      />
      <Route
        path="/ver/overlord-III-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/ltmlvuwdrrom.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord III Capitulo 5"}
            tituloPag={"Animekun Gratis"}
            anime={"Overlord III "}
            numero={"5"}
            siguienteVideo={"/ver/overlord-III-6"}
            capitulosVideo={"/overlord-III"}
            anteriorVideo={"/ver/overlord-III-4"}
          />
        }
      />
      <Route
        path="/ver/overlord-III-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/oe4xwygxicf4.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord III Capitulo 6"}
            tituloPag={"Animekun Gratis"}
            anime={"Overlord III "}
            numero={"6"}
            siguienteVideo={"/ver/overlord-III-7"}
            capitulosVideo={"/overlord-III"}
            anteriorVideo={"/ver/overlord-III-5"}
          />
        }
      />
      <Route
        path="/ver/overlord-III-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/zvz5v5kqgbhc.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord III Capitulo 7"}
            tituloPag={"Animekun Gratis"}
            anime={"Overlord III "}
            numero={"7"}
            siguienteVideo={"/ver/overlord-III-8"}
            capitulosVideo={"/overlord-III"}
            anteriorVideo={"/ver/overlord-III-6"}
          />
        }
      />
      <Route
        path="/ver/overlord-III-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/kq56wuks8hxu.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord III Capitulo 8"}
            tituloPag={"Animekun Gratis"}
            anime={"Overlord III "}
            numero={"8"}
            siguienteVideo={"/ver/overlord-III-9"}
            capitulosVideo={"/overlord-III"}
            anteriorVideo={"/ver/overlord-III-7"}
          />
        }
      />
      <Route
        path="/ver/overlord-III-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/nb5pfg5k8z05.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord III Capitulo 9"}
            tituloPag={"Animekun Gratis"}
            anime={"Overlord III "}
            numero={"9"}
            siguienteVideo={"/ver/overlord-III-10"}
            capitulosVideo={"/overlord-III"}
            anteriorVideo={"/ver/overlord-III-8"}
          />
        }
      />
      <Route
        path="/ver/overlord-III-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/xtlf0apjmuwh.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord III Capitulo 10"}
            tituloPag={"Animekun Gratis"}
            anime={"Overlord III "}
            numero={"10"}
            siguienteVideo={"/ver/overlord-III-11"}
            capitulosVideo={"/overlord-III"}
            anteriorVideo={"/ver/overlord-III-9"}
          />
        }
      />
      <Route
        path="/ver/overlord-III-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/h6x6ubcakuj1.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord III Capitulo 11"}
            tituloPag={"Animekun Gratis"}
            anime={"Overlord III "}
            numero={"11"}
            siguienteVideo={"/ver/overlord-III-12"}
            capitulosVideo={"/overlord-III"}
            anteriorVideo={"/ver/overlord-III-10"}
          />
        }
      />
      <Route
        path="/ver/overlord-III-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/ooh3eor7eiy5.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord III Capitulo 12"}
            tituloPag={"Animekun Gratis"}
            anime={"Overlord III "}
            numero={"12"}
            siguienteVideo={"/ver/overlord-III-13"}
            capitulosVideo={"/overlord-III"}
            anteriorVideo={"/ver/overlord-III-11"}
          />
        }
      />
      <Route
        path="/ver/overlord-III-13"
        element={
          <Video
            frame1={"https://sbthe.com/e/lcbqmou1mlf5.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Overlord III Capitulo 13"}
            tituloPag={"Animekun Gratis"}
            anime={"Overlord III "}
            numero={"13"}
            capitulosVideo={"/overlord-III"}
            anteriorVideo={"/ver/overlord-III-12"}
          />
        }
      />
      -----------------
      <Route
        path="/ver/ao-no-exorcist::-kyoto-fujouou-hen-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/d4f0vaktgsx0.html"}
            contAnteriorClass="disable"
            tituloAnime={"Ao no Exorcist Kyoto Fujouou Hen Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Ao no Exorcist Kyoto Fujouou Hen"}
            numero={"1"}
            siguienteVideo={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-2"}
            capitulosVideo={"/ao-no-exorcist:-kyoto-fujouou-hen"}
          />
        }
      />
      <Route
        path="/ver/ao-no-exorcist:-kyoto-fujouou-hen-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/umxgpowgmtkp.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Ao no Exorcist Kyoto Fujouou Hen Capitulo 2"}
            tituloPag={"Animekun Gratis"}
            anime={"Ao no Exorcist Kyoto Fujouou Hen "}
            numero={"2"}
            siguienteVideo={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-3"}
            capitulosVideo={"/ao-no-exorcist:-kyoto-fujouou-hen"}
            anteriorVideo={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-1"}
          />
        }
      />
      <Route
        path="/ver/ao-no-exorcist:-kyoto-fujouou-hen-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/xid3ftyyq9j8.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Ao no Exorcist Kyoto Fujouou Hen Capitulo 3"}
            tituloPag={"Animekun Gratis"}
            anime={"Ao no Exorcist Kyoto Fujouou Hen "}
            numero={"3"}
            siguienteVideo={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-4"}
            capitulosVideo={"/ao-no-exorcist:-kyoto-fujouou-hen"}
            anteriorVideo={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-2"}
          />
        }
      />
      <Route
        path="/ver/ao-no-exorcist:-kyoto-fujouou-hen-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/ms5k81f8pdj8.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Ao no Exorcist Kyoto Fujouou Hen Capitulo 4"}
            tituloPag={"Animekun Gratis"}
            anime={"Ao no Exorcist Kyoto Fujouou Hen "}
            numero={"4"}
            siguienteVideo={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-5"}
            capitulosVideo={"/ao-no-exorcist:-kyoto-fujouou-hen"}
            anteriorVideo={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-3"}
          />
        }
      />
      <Route
        path="/ver/ao-no-exorcist:-kyoto-fujouou-hen-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/crepzxcb0myf.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Ao no Exorcist Kyoto Fujouou Hen Capitulo 5"}
            tituloPag={"Animekun Gratis"}
            anime={"Ao no Exorcist Kyoto Fujouou Hen "}
            numero={"5"}
            siguienteVideo={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-6"}
            capitulosVideo={"/ao-no-exorcist:-kyoto-fujouou-hen"}
            anteriorVideo={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-4"}
          />
        }
      />
      <Route
        path="/ver/ao-no-exorcist:-kyoto-fujouou-hen-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/5uu942s4cczx.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Ao no Exorcist Kyoto Fujouou Hen Capitulo 6"}
            tituloPag={"Animekun Gratis"}
            anime={"Ao no Exorcist Kyoto Fujouou Hen "}
            numero={"6"}
            siguienteVideo={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-7"}
            capitulosVideo={"/ao-no-exorcist:-kyoto-fujouou-hen"}
            anteriorVideo={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-5"}
          />
        }
      />
      <Route
        path="/ver/ao-no-exorcist:-kyoto-fujouou-hen-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/hdq341imtznf.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Ao no Exorcist Kyoto Fujouou Hen Capitulo 7"}
            tituloPag={"Animekun Gratis"}
            anime={"Ao no Exorcist Kyoto Fujouou Hen "}
            numero={"7"}
            siguienteVideo={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-8"}
            capitulosVideo={"/ao-no-exorcist:-kyoto-fujouou-hen"}
            anteriorVideo={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-6"}
          />
        }
      />
      <Route
        path="/ver/ao-no-exorcist:-kyoto-fujouou-hen-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/lgllp27hokxp.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Ao no Exorcist Kyoto Fujouou Hen Capitulo 8"}
            tituloPag={"Animekun Gratis"}
            anime={"Ao no Exorcist Kyoto Fujouou Hen "}
            numero={"8"}
            siguienteVideo={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-9"}
            capitulosVideo={"/ao-no-exorcist:-kyoto-fujouou-hen"}
            anteriorVideo={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-7"}
          />
        }
      />
      <Route
        path="/ver/ao-no-exorcist:-kyoto-fujouou-hen-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/eq3mgl8j8tat.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Ao no Exorcist Kyoto Fujouou Hen Capitulo 9"}
            tituloPag={"Animekun Gratis"}
            anime={"Ao no Exorcist Kyoto Fujouou Hen "}
            numero={"9"}
            siguienteVideo={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-10"}
            capitulosVideo={"/ao-no-exorcist:-kyoto-fujouou-hen"}
            anteriorVideo={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-8"}
          />
        }
      />
      <Route
        path="/ver/ao-no-exorcist:-kyoto-fujouou-hen-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/k2q23sypqxu5.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Ao no Exorcist Kyoto Fujouou Hen Capitulo 10"}
            tituloPag={"Animekun Gratis"}
            anime={"Ao no Exorcist Kyoto Fujouou Hen "}
            numero={"10"}
            siguienteVideo={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-11"}
            capitulosVideo={"/ao-no-exorcist:-kyoto-fujouou-hen"}
            anteriorVideo={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-9"}
          />
        }
      />
      <Route
        path="/ver/ao-no-exorcist:-kyoto-fujouou-hen-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/dwssnwhumfgu.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Ao no Exorcist Kyoto Fujouou Hen Capitulo 11"}
            tituloPag={"Animekun Gratis"}
            anime={"Ao no Exorcist Kyoto Fujouou Hen "}
            numero={"11"}
            siguienteVideo={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-12"}
            capitulosVideo={"/ao-no-exorcist:-kyoto-fujouou-hen"}
            anteriorVideo={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-10"}
          />
        }
      />
      <Route
        path="/ver/ao-no-exorcist:-kyoto-fujouou-hen-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/vfgn0ntvr2a6.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Ao no Exorcist Kyoto Fujouou Hen Capitulo 12"}
            tituloPag={"Animekun Gratis"}
            anime={"Ao no Exorcist Kyoto Fujouou Hen "}
            numero={"12"}
            siguienteVideo={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-13"}
            capitulosVideo={"/ao-no-exorcist:-kyoto-fujouou-hen"}
            anteriorVideo={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-11"}
          />
        }
      />
      <Route
        path="/ver/ao-no-exorcist:-kyoto-fujouou-hen-13"
        element={
          <Video
            frame1={"https://sbthe.com/e/x0qgch2nzi2l.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Ao no Exorcist Kyoto Fujouou Hen Capitulo 13"}
            tituloPag={"Animekun Gratis"}
            anime={"Ao no Exorcist Kyoto Fujouou Hen "}
            numero={"13"}
            capitulosVideo={"/ao-no-exorcist:-kyoto-fujouou-hen"}
            anteriorVideo={"/ver/ao-no-exorcist:-kyoto-fujouou-hen-12"}
          />
        }
      />
      -----------------
      <Route
        path="/ver/fairy-gone-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/lqoeguu6lv30.html"}
            contAnteriorClass="disable"
            tituloAnime={"Fairy Gone Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Fairy Gone "}
            numero={"1"}
            siguienteVideo={"/ver/fairy-gone-2"}
            capitulosVideo={"/fairy-gone"}
          />
        }
      />
      <Route
        path="/ver/fairy-gone-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/vb1aja33cesh.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fairy Gone Capitulo 2"}
            tituloPag={"Animekun Gratis"}
            anime={"Fairy Gone "}
            numero={"2"}
            classOpcionSiguiente=""
            siguienteVideo={"/ver/fairy-gone-3"}
            capitulosVideo={"/fairy-gone"}
            anteriorVideo={"/ver/fairy-gone-1"}
          />
        }
      />
      <Route
        path="/ver/fairy-gone-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/lt5fzj92dryh.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fairy Gone Capitulo 3"}
            tituloPag={"Animekun Gratis"}
            anime={"Fairy Gone "}
            numero={"3"}
            siguienteVideo={"/ver/fairy-gone-4"}
            capitulosVideo={"/fairy-gone"}
            anteriorVideo={"/ver/fairy-gone-2"}
          />
        }
      />
      <Route
        path="/ver/fairy-gone-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/8iw49hejzlos.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fairy Gone Capitulo 4"}
            tituloPag={"Animekun Gratis"}
            anime={"Fairy Gone "}
            numero={"4"}
            siguienteVideo={"/ver/fairy-gone-5"}
            capitulosVideo={"/fairy-gone"}
            anteriorVideo={"/ver/fairy-gone-3"}
          />
        }
      />
      <Route
        path="/ver/fairy-gone-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/9chu9v7tbka1.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fairy Gone Capitulo 5"}
            tituloPag={"Animekun Gratis"}
            anime={"Fairy Gone "}
            numero={"5"}
            siguienteVideo={"/ver/fairy-gone-6"}
            capitulosVideo={"/fairy-gone"}
            anteriorVideo={"/ver/fairy-gone-4"}
          />
        }
      />
      <Route
        path="/ver/fairy-gone-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/u5ffx2vw8n9c.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fairy Gone Capitulo 6"}
            tituloPag={"Animekun Gratis"}
            anime={"Fairy Gone "}
            numero={"6"}
            siguienteVideo={"/ver/fairy-gone-7"}
            capitulosVideo={"/fairy-gone"}
            anteriorVideo={"/ver/fairy-gone-5"}
          />
        }
      />
      <Route
        path="/ver/fairy-gone-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/gf11el6wa1o5.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fairy Gone Capitulo 7"}
            tituloPag={"Animekun Gratis"}
            anime={"Fairy Gone "}
            numero={"7"}
            siguienteVideo={"/ver/fairy-gone-8"}
            capitulosVideo={"/fairy-gone"}
            anteriorVideo={"/ver/fairy-gone-6"}
          />
        }
      />
      <Route
        path="/ver/fairy-gone-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/s8box7bceotz.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fairy Gone Capitulo 8"}
            tituloPag={"Animekun Gratis"}
            anime={"Fairy Gone "}
            numero={"8"}
            siguienteVideo={"/ver/fairy-gone-9"}
            capitulosVideo={"/fairy-gone"}
            anteriorVideo={"/ver/fairy-gone-7"}
          />
        }
      />
      <Route
        path="/ver/fairy-gone-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/wc2ls9v6p0e1.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fairy Gone Capitulo 9"}
            tituloPag={"Animekun Gratis"}
            anime={"Fairy Gone "}
            numero={"9"}
            siguienteVideo={"/ver/fairy-gone-10"}
            capitulosVideo={"/fairy-gone"}
            anteriorVideo={"/ver/fairy-gone-8"}
          />
        }
      />
      <Route
        path="/ver/fairy-gone-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/5fmctrc6kflr.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fairy Gone Capitulo 10"}
            tituloPag={"Animekun Gratis"}
            anime={"Fairy Gone "}
            numero={"10"}
            siguienteVideo={"/ver/fairy-gone-11"}
            capitulosVideo={"/fairy-gone"}
            anteriorVideo={"/ver/fairy-gone-9"}
          />
        }
      />
      <Route
        path="/ver/fairy-gone-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/rgfw11nqvhav.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fairy Gone Capitulo 11"}
            tituloPag={"Animekun Gratis"}
            anime={"Fairy Gone "}
            numero={"11"}
            siguienteVideo={"/ver/fairy-gone-12"}
            capitulosVideo={"/fairy-gone"}
            anteriorVideo={"/ver/fairy-gone-10"}
          />
        }
      />
      <Route
        path="/ver/fairy-gone-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/0tknl8stst17.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Fairy Gone Capitulo 12"}
            tituloPag={"Animekun Gratis"}
            anime={"Fairy Gone "}
            numero={"12"}
            capitulosVideo={"/fairy-gone"}
            anteriorVideo={"/ver/fairy-gone-11"}
          />
        }
      />
      -----------------
      <Route
        path="/ver/dr-stone-ryusui-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/gt13zsrpo4if.html"}
            contAnteriorClass="disable"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo Especial Dr Stone Ryusui"}
            tituloPag={"Animekun Gratis"}
            anime={"Dr Stone Ryusui "}
            numero={"1"}
            classOpcionSiguiente="disable"
            capitulosVideo={"/dr-stone-ryusui"}
          />
        }
      />
      <Route path="/ver/isekai-yakkyoku-1" element={<Video />} />
      <Route
        path="/ver/isekai-yakkyoku-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/s0ddzbyf5t6w.html"}
            contAnteriorClass="disable"
            tituloAnime={" Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Isekai Yakkyoku "}
            numero={"1"}
            siguienteVideo={"/ver/isekai-yakkyoku-2"}
            capitulosVideo={"/isekai-yakkyoku"}
          />
        }
      />
      <Route
        path="/ver/isekai-yakkyoku-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/63qeybqky0zt.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Isekai Yakkyoku Capitulo 2"}
            tituloPag={"Animekun Gratis"}
            anime={"Isekai Yakkyoku "}
            numero={"2"}
            siguienteVideo={"/ver/isekai-yakkyoku-3"}
            capitulosVideo={"/isekai-yakkyoku"}
            anteriorVideo={"/ver/isekai-yakkyoku1"}
          />
        }
      />
      <Route
        path="/ver/isekai-yakkyoku-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/z7kfnkwt606s.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Isekai Yakkyoku Capitulo 3"}
            tituloPag={"Animekun Gratis"}
            anime={"Isekai Yakkyoku "}
            numero={"3"}
            siguienteVideo={"/ver/isekai-yakkyoku-4"}
            capitulosVideo={"/isekai-yakkyoku"}
            anteriorVideo={"/ver/isekai-yakkyoku-2"}
          />
        }
      />
      <Route
        path="/ver/isekai-yakkyoku-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/k14iztwtd1d0.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Isekai Yakkyoku Capitulo 4"}
            tituloPag={"Animekun Gratis"}
            anime={"Isekai Yakkyoku "}
            numero={"4"}
            siguienteVideo={"/ver/isekai-yakkyoku-5"}
            capitulosVideo={"/isekai-yakkyoku"}
            anteriorVideo={"/ver/isekai-yakkyoku-3"}
          />
        }
      />
      <Route
        path="/ver/isekai-yakkyoku-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/8883s4pj0yni.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Isekai Yakkyoku Capitulo 5"}
            tituloPag={"Animekun Gratis"}
            anime={"Isekai Yakkyoku "}
            numero={"5"}
            siguienteVideo={"/ver/isekai-yakkyoku-6"}
            capitulosVideo={"/isekai-yakkyoku"}
            anteriorVideo={"/ver/isekai-yakkyoku-4"}
          />
        }
      />
      <Route
        path="/ver/isekai-yakkyoku-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Isekai Yakkyoku Capitulo 6"}
            tituloPag={"Animekun Gratis"}
            anime={"Isekai Yakkyoku "}
            numero={"6"}
            siguienteVideo={"/ver/isekai-yakkyoku-7"}
            capitulosVideo={"/isekai-yakkyoku"}
            anteriorVideo={"/ver/isekai-yakkyoku-5"}
          />
        }
      />
      <Route
        path="/ver/isekai-yakkyoku-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Isekai Yakkyoku Capitulo 7"}
            tituloPag={"Animekun Gratis"}
            anime={"Isekai Yakkyoku "}
            numero={"7"}
            siguienteVideo={"/ver/isekai-yakkyoku-8"}
            capitulosVideo={"/isekai-yakkyoku"}
            anteriorVideo={"/ver/isekai-yakkyoku-6"}
          />
        }
      />
      <Route
        path="/ver/isekai-yakkyoku-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Isekai Yakkyoku Capitulo 8"}
            tituloPag={"Animekun Gratis"}
            anime={"Isekai Yakkyoku "}
            numero={"8"}
            siguienteVideo={"/ver/isekai-yakkyoku-9"}
            capitulosVideo={"/isekai-yakkyoku"}
            anteriorVideo={"/ver/isekai-yakkyoku-7"}
          />
        }
      />
      <Route
        path="/ver/isekai-yakkyoku-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Isekai Yakkyoku Capitulo 9"}
            tituloPag={"Animekun Gratis"}
            anime={"Isekai Yakkyoku "}
            numero={"9"}
            siguienteVideo={"/ver/isekai-yakkyoku-10"}
            capitulosVideo={"/isekai-yakkyoku"}
            anteriorVideo={"/ver/isekai-yakkyoku-8"}
          />
        }
      />
      <Route
        path="/ver/isekai-yakkyoku-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Isekai Yakkyoku Capitulo 10"}
            tituloPag={"Animekun Gratis"}
            anime={"Isekai Yakkyoku "}
            numero={"10"}
            siguienteVideo={"/ver/isekai-yakkyoku-11"}
            capitulosVideo={"/isekai-yakkyoku"}
            anteriorVideo={"/ver/isekai-yakkyoku-9"}
          />
        }
      />
      <Route
        path="/ver/isekai-yakkyoku-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Isekai Yakkyoku Capitulo 11"}
            tituloPag={"Animekun Gratis"}
            anime={"Isekai Yakkyoku "}
            numero={"11"}
            siguienteVideo={"/ver/isekai-yakkyoku-12"}
            capitulosVideo={"/isekai-yakkyokuisekai-yakkyoku"}
            anteriorVideo={"/ver/isekai-yakkyoku-10"}
          />
        }
      />
      <Route
        path="/ver/isekai-yakkyoku-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Isekai Yakkyoku Capitulo 12"}
            tituloPag={"Animekun Gratis"}
            anime={"Isekai Yakkyoku "}
            numero={"12"}
            capitulosVideo={"/isekai-yakkyoku"}
            anteriorVideo={"/ver/isekai-yakkyoku-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/kuro-no-shoukanshi-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/ydx4i29ucbv4.html"}
            contAnteriorClass="disable"
            tituloAnime={"Kuro no Shoukanshi Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Kuro no Shoukanshi "}
            numero={"1"}
            siguienteVideo={"/ver/kuro-no-shoukanshi-2"}
            capitulosVideo={"/kuro-no-shoukanshi"}
          />
        }
      />
      <Route
        path="/ver/kuro-no-shoukanshi-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/ec02ew1avmu4.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Kuro no Shoukanshi Capitulo 2"}
            tituloPag={"Animekun Gratis"}
            anime={"Kuro no Shoukanshi "}
            numero={"2"}
            classOpcionSiguiente=""
            siguienteVideo={"/ver/kuro-no-shoukanshi-3"}
            capitulosVideo={"/kuro-no-shoukanshi"}
            anteriorVideo={"/ver/kuro-no-shoukanshi-1"}
          />
        }
      />
      <Route
        path="/ver/kuro-no-shoukanshi-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/x8z63ykmg1ta.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Kuro no Shoukanshi Capitulo 3"}
            tituloPag={"Animekun Gratis"}
            anime={"Kuro no Shoukanshi "}
            numero={"3"}
            siguienteVideo={"/ver/kuro-no-shoukanshi-4"}
            capitulosVideo={"/kuro-no-shoukanshi"}
            anteriorVideo={"/ver/kuro-no-shoukanshi-2"}
          />
        }
      />
      <Route
        path="/ver/kuro-no-shoukanshi-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/3hp4tu8dohor.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Kuro no Shoukanshi Capitulo 4"}
            tituloPag={"Animekun Gratis"}
            anime={"Kuro no Shoukanshi "}
            numero={"4"}
            siguienteVideo={"/ver/kuro-no-shoukanshi-5"}
            capitulosVideo={"/kuro-no-shoukanshi"}
            anteriorVideo={"/ver/kuro-no-shoukanshi-3"}
          />
        }
      />
      <Route
        path="/ver/kuro-no-shoukanshi-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/w48yjk0ecmdu.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Kuro no Shoukanshi Capitulo 5"}
            tituloPag={"Animekun Gratis"}
            anime={"Kuro no Shoukanshi "}
            numero={"5"}
            siguienteVideo={"/ver/kuro-no-shoukanshi-6"}
            capitulosVideo={"/kuro-no-shoukanshi"}
            anteriorVideo={"/ver/kuro-no-shoukanshi-4"}
          />
        }
      />
      <Route
        path="/ver/kuro-no-shoukanshi-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Kuro no Shoukanshi Capitulo 6"}
            tituloPag={"Animekun Gratis"}
            anime={"Kuro no Shoukanshi "}
            numero={"6"}
            siguienteVideo={"/ver/kuro-no-shoukanshi-7"}
            capitulosVideo={"/kuro-no-shoukanshi"}
            anteriorVideo={"/ver/kuro-no-shoukanshi-5"}
          />
        }
      />
      <Route
        path="/ver/kuro-no-shoukanshi-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Kuro no Shoukanshi Capitulo 7"}
            tituloPag={"Animekun Gratis"}
            anime={"Kuro no Shoukanshi "}
            numero={"7"}
            siguienteVideo={"/ver/kuro-no-shoukanshi-8"}
            capitulosVideo={"/kuro-no-shoukanshi"}
            anteriorVideo={"/ver/kuro-no-shoukanshi-6"}
          />
        }
      />
      <Route
        path="/ver/kuro-no-shoukanshi-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Kuro no Shoukanshi Capitulo 8"}
            tituloPag={"Animekun Gratis"}
            anime={"Kuro no Shoukanshi "}
            numero={"8"}
            siguienteVideo={"/ver/kuro-no-shoukanshi-9"}
            capitulosVideo={"/kuro-no-shoukanshi"}
            anteriorVideo={"/ver/kuro-no-shoukanshi-7"}
          />
        }
      />
      <Route
        path="/ver/kuro-no-shoukanshi-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Kuro no Shoukanshi Capitulo 9"}
            tituloPag={"Animekun Gratis"}
            anime={"Kuro no Shoukanshi "}
            numero={"9"}
            siguienteVideo={"/ver/kuro-no-shoukanshi-10"}
            capitulosVideo={"/kuro-no-shoukanshi"}
            anteriorVideo={"/ver/kuro-no-shoukanshi-8"}
          />
        }
      />
      <Route
        path="/ver/kuro-no-shoukanshi-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Kuro no Shoukanshi Capitulo 10"}
            tituloPag={"Animekun Gratis"}
            anime={"Kuro no Shoukanshi "}
            numero={"10"}
            siguienteVideo={"/ver/kuro-no-shoukanshi-11"}
            capitulosVideo={"/kuro-no-shoukanshi"}
            anteriorVideo={"/ver/kuro-no-shoukanshi-9"}
          />
        }
      />
      <Route
        path="/ver/kuro-no-shoukanshi-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Kuro no Shoukanshi Capitulo 11"}
            tituloPag={"Animekun Gratis"}
            anime={"Kuro no Shoukanshi "}
            numero={"11"}
            siguienteVideo={"/ver/kuro-no-shoukanshi-12"}
            capitulosVideo={"/kuro-no-shoukanshi"}
            anteriorVideo={"/ver/kuro-no-shoukanshi-10"}
          />
        }
      />
      <Route
        path="/ver/kuro-no-shoukanshi-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Kuro no Shoukanshi Capitulo 12"}
            tituloPag={"Animekun Gratis"}
            anime={"Kuro no Shoukanshi "}
            numero={"12"}
            capitulosVideo={"/kuro-no-shoukanshi"}
            anteriorVideo={"/ver/kuro-no-shoukanshi-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/fairy-gone-segunda-temporada-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/m8xdrpde2tc6.html"}
            contAnteriorClass="disable"
            tituloAnime={"Fairy Gone Segunda Temporada Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Fairy Gone Segunda Temporada"}
            numero={"1"}
            siguienteVideo={"/ver/fairy-gone-segunda-temporada-2"}
            capitulosVideo={"/fairy-gone-segunda-temporada"}
          />
        }
      />
      <Route
        path="/ver/fairy-gone-segunda-temporada-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/cwwn7nowda69.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fairy Gone Segunda Temporada Capitulo 2"}
            tituloPag={"Animekun Gratis"}
            anime={"Fairy Gone Segunda Temporada "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/fairy-gone-segunda-temporada-1"}
          />
        }
      />
      <Route
        path="/ver/fairy-gone-segunda-temporada-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/dt58qnm2gyz2.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fairy Gone Segunda Temporada Capitulo 3"}
            tituloPag={"Animekun Gratis"}
            anime={"Fairy Gone Segunda Temporada "}
            numero={"3"}
            siguienteVideo={"/ver/fairy-gone-segunda-temporada-4"}
            capitulosVideo={"/fairy-gone-segunda-temporada"}
            anteriorVideo={"/ver/fairy-gone-segunda-temporada-2"}
          />
        }
      />
      <Route
        path="/ver/fairy-gone-segunda-temporada-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/j6frx29psxs3.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fairy Gone Segunda Temporada Capitulo 4"}
            tituloPag={"Animekun Gratis"}
            anime={"Fairy Gone Segunda Temporada "}
            numero={"4"}
            siguienteVideo={"/ver/fairy-gone-segunda-temporada-5"}
            capitulosVideo={"/fairy-gone-segunda-temporada"}
            anteriorVideo={"/ver/fairy-gone-segunda-temporada-3"}
          />
        }
      />
      <Route
        path="/ver/fairy-gone-segunda-temporada-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/hombkpxn1cjc.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fairy Gone Segunda Temporada Capitulo 5"}
            tituloPag={"Animekun Gratis"}
            anime={"Fairy Gone Segunda Temporada "}
            numero={"5"}
            siguienteVideo={"/ver/fairy-gone-segunda-temporada-6"}
            capitulosVideo={"/fairy-gone-segunda-temporada"}
            anteriorVideo={"/ver/fairy-gone-segunda-temporada-4"}
          />
        }
      />
      <Route
        path="/ver/fairy-gone-segunda-temporada-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/0tmri5g3uply.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fairy Gone Segunda Temporada Capitulo 6"}
            tituloPag={"Animekun Gratis"}
            anime={"Fairy Gone Segunda Temporada "}
            numero={"6"}
            siguienteVideo={"/ver/fairy-gone-segunda-temporada-7"}
            capitulosVideo={"/fairy-gone-segunda-temporada"}
            anteriorVideo={"/ver/fairy-gone-segunda-temporada-5"}
          />
        }
      />
      <Route
        path="/ver/fairy-gone-segunda-temporada-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/zfqxrq7f94ol.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fairy Gone Segunda Temporada Capitulo 7"}
            tituloPag={"Animekun Gratis"}
            anime={"Fairy Gone Segunda Temporada "}
            numero={"7"}
            siguienteVideo={"/ver/fairy-gone-segunda-temporada-8"}
            capitulosVideo={"/fairy-gone-segunda-temporada"}
            anteriorVideo={"/ver/fairy-gone-segunda-temporada-6"}
          />
        }
      />
      <Route
        path="/ver/fairy-gone-segunda-temporada-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/rqpi3046zcyk.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fairy Gone Segunda Temporada Capitulo 8"}
            tituloPag={"Animekun Gratis"}
            anime={"Fairy Gone Segunda Temporada "}
            numero={"8"}
            siguienteVideo={"/ver/fairy-gone-segunda-temporada-9"}
            capitulosVideo={"/fairy-gone-segunda-temporada"}
            anteriorVideo={"/ver/fairy-gone-segunda-temporada-7"}
          />
        }
      />
      <Route
        path="/ver/fairy-gone-segunda-temporada-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/me5li8i67eit.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fairy Gone Segunda Temporada Capitulo 9"}
            tituloPag={"Animekun Gratis"}
            anime={"Fairy Gone Segunda Temporada "}
            numero={"9"}
            siguienteVideo={"/ver/fairy-gone-segunda-temporada-10"}
            capitulosVideo={"/fairy-gone-segunda-temporada"}
            anteriorVideo={"/ver/fairy-gone-segunda-temporada-8"}
          />
        }
      />
      <Route
        path="/ver/fairy-gone-segunda-temporada-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/pzbcjxu2p7nx.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fairy Gone Segunda Temporada Capitulo 10"}
            tituloPag={"Animekun Gratis"}
            anime={"Fairy Gone Segunda Temporada "}
            numero={"10"}
            siguienteVideo={"/ver/fairy-gone-segunda-temporada-11"}
            capitulosVideo={"/fairy-gone-segunda-temporada"}
            anteriorVideo={"/ver/fairy-gone-segunda-temporada-9"}
          />
        }
      />
      <Route
        path="/ver/fairy-gone-segunda-temporada-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/b9kjzvp81e5v.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fairy Gone Segunda Temporada Capitulo 11"}
            tituloPag={"Animekun Gratis"}
            anime={"Fairy Gone Segunda Temporada "}
            numero={"11"}
            siguienteVideo={"/ver/fairy-gone-segunda-temporada-12"}
            capitulosVideo={"/fairy-gone-segunda-temporada"}
            anteriorVideo={"/ver/fairy-gone-segunda-temporada-10"}
          />
        }
      />
      <Route
        path="/ver/fairy-gone-segunda-temporada-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/q3uzh0rryizo.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Fairy Gone Segunda Temporada Capitulo 12"}
            tituloPag={"Animekun Gratis"}
            anime={"Fairy Gone Segunda Temporada "}
            numero={"12"}
            capitulosVideo={"/fairy-gone-segunda-temporada"}
            anteriorVideo={"/ver/fairy-gone-segunda-temporada-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/isekai-meiryuu-de-harem-wo-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/ol02fy8w3ovs.html"}
            contAnteriorClass="disable"
            tituloAnime={" Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Isekai Meiryuu de Harem wo "}
            numero={"1"}
            siguienteVideo={"/ver/isekai-meiryuu-de-harem-wo-2"}
            capitulosVideo={"/isekai-meiryuu-de-harem-wo"}
          />
        }
      />
      <Route
        path="/ver/isekai-meiryuu-de-harem-wo-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/t5okmktfo72p.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Isekai Meiryuu de Harem wo Capitulo 2"}
            tituloPag={"Animekun Gratis"}
            anime={"Isekai Meiryuu de Harem wo "}
            numero={"2"}
            classOpcionSiguiente=""
            siguienteVideo={"/ver/isekai-meiryuu-de-harem-wo-3"}
            capitulosVideo={"/isekai-meiryuu-de-harem-wo"}
            anteriorVideo={"/ver/isekai-meiryuu-de-harem-wo-1"}
          />
        }
      />
      <Route
        path="/ver/isekai-meiryuu-de-harem-wo-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/0xhs5pj62gwp.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Isekai Meiryuu de Harem wo Capitulo 3"}
            tituloPag={"Animekun Gratis"}
            anime={"Isekai Meiryuu de Harem wo "}
            numero={"3"}
            siguienteVideo={"/ver/isekai-meiryuu-de-harem-wo-4"}
            capitulosVideo={"/isekai-meiryuu-de-harem-wo"}
            anteriorVideo={"/ver/isekai-meiryuu-de-harem-wo-2"}
          />
        }
      />
      <Route
        path="/ver/isekai-meiryuu-de-harem-wo-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/alyh8fewlzis.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Isekai Meiryuu de Harem wo Capitulo 4"}
            tituloPag={"Animekun Gratis"}
            anime={"Isekai Meiryuu de Harem wo "}
            numero={"4"}
            siguienteVideo={"/ver/isekai-meiryuu-de-harem-wo-5"}
            capitulosVideo={"/isekai-meiryuu-de-harem-wo"}
            anteriorVideo={"/ver/isekai-meiryuu-de-harem-wo-3"}
          />
        }
      />
      <Route
        path="/ver/isekai-meiryuu-de-harem-wo-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/ti4akk6als8g.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Isekai Meiryuu de Harem wo Capitulo 5"}
            tituloPag={"Animekun Gratis"}
            anime={"Isekai Meiryuu de Harem wo "}
            numero={"5"}
            siguienteVideo={"/ver/isekai-meiryuu-de-harem-wo-6"}
            capitulosVideo={"/isekai-meiryuu-de-harem-wo"}
            anteriorVideo={"/ver/isekai-meiryuu-de-harem-wo-4"}
          />
        }
      />
      <Route
        path="/ver/isekai-meiryuu-de-harem-wo-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Isekai Meiryuu de Harem wo Capitulo 6"}
            tituloPag={"Animekun Gratis"}
            anime={"Isekai Meiryuu de Harem wo "}
            numero={"6"}
            siguienteVideo={"/ver/isekai-meiryuu-de-harem-wo-7"}
            capitulosVideo={"/isekai-meiryuu-de-harem-wo"}
            anteriorVideo={"/ver/isekai-meiryuu-de-harem-wo-5"}
          />
        }
      />
      <Route
        path="/ver/isekai-meiryuu-de-harem-wo-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Isekai Meiryuu de Harem wo Capitulo 7"}
            tituloPag={"Animekun Gratis"}
            anime={"Isekai Meiryuu de Harem wo "}
            numero={"7"}
            siguienteVideo={"/ver/isekai-meiryuu-de-harem-wo-8"}
            capitulosVideo={"/isekai-meiryuu-de-harem-wo"}
            anteriorVideo={"/ver/isekai-meiryuu-de-harem-wo-6"}
          />
        }
      />
      <Route
        path="/ver/isekai-meiryuu-de-harem-wo-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Isekai Meiryuu de Harem wo Capitulo 8"}
            tituloPag={"Animekun Gratis"}
            anime={"Isekai Meiryuu de Harem wo "}
            numero={"8"}
            siguienteVideo={"/ver/isekai-meiryuu-de-harem-wo-9"}
            capitulosVideo={"/isekai-meiryuu-de-harem-wo"}
            anteriorVideo={"/ver/isekai-meiryuu-de-harem-wo-7"}
          />
        }
      />
      <Route
        path="/ver/isekai-meiryuu-de-harem-wo-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Isekai Meiryuu de Harem wo Capitulo 9"}
            tituloPag={"Animekun Gratis"}
            anime={"Isekai Meiryuu de Harem wo "}
            numero={"9"}
            siguienteVideo={"/ver/isekai-meiryuu-de-harem-wo-10"}
            capitulosVideo={"/isekai-meiryuu-de-harem-wo"}
            anteriorVideo={"/ver/isekai-meiryuu-de-harem-wo-8"}
          />
        }
      />
      <Route
        path="/ver/isekai-meiryuu-de-harem-wo-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Isekai Meiryuu de Harem wo Capitulo 10"}
            tituloPag={"Animekun Gratis"}
            anime={"Isekai Meiryuu de Harem wo "}
            numero={"10"}
            siguienteVideo={"/ver/isekai-meiryuu-de-harem-wo-11"}
            capitulosVideo={"/isekai-meiryuu-de-harem-wo"}
            anteriorVideo={"/ver/isekai-meiryuu-de-harem-wo-9"}
          />
        }
      />
      <Route
        path="/ver/isekai-meiryuu-de-harem-wo-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Isekai Meiryuu de Harem wo Capitulo 11"}
            tituloPag={"Animekun Gratis"}
            anime={"Isekai Meiryuu de Harem wo "}
            numero={"11"}
            siguienteVideo={"/ver/isekai-meiryuu-de-harem-wo-12"}
            capitulosVideo={"/isekai-meiryuu-de-harem-wo"}
            anteriorVideo={"/ver/isekai-meiryuu-de-harem-wo-10"}
          />
        }
      />
      <Route
        path="/ver/isekai-meiryuu-de-harem-wo-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Isekai Meiryuu de Harem wo Capitulo 12"}
            tituloPag={"Animekun Gratis"}
            anime={"Isekai Meiryuu de Harem wo "}
            numero={"12"}
            capitulosVideo={"/isekai-meiryuu-de-harem-wo"}
            anteriorVideo={"/ver/isekai-meiryuu-de-harem-wo-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/7l7x92jwalc6.html"}
            contAnteriorClass="disable"
            tituloAnime={" Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun Gratis"}
            anime={
              "Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e Segunda Temporada"
            }
            numero={"1"}
            siguienteVideo={
              "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-2"
            }
            capitulosVideo={
              "/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada"
            }
          />
        }
      />
      <Route
        path="/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/khdx86k3x1o5.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e Segunda Temporada Capitulo 2"
            }
            tituloPag={"Animekun Gratis"}
            anime={
              "Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e Segunda Temporada "
            }
            numero={"2"}
            classOpcionSiguiente=""
            siguienteVideo={
              "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-3"
            }
            capitulosVideo={
              "/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada"
            }
            anteriorVideo={
              "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-1"
            }
          />
        }
      />
      <Route
        path="/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/w8yr0h844pug.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e Segunda Temporada Capitulo 3"
            }
            tituloPag={"Animekun Gratis"}
            anime={
              "Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e Segunda Temporada "
            }
            numero={"3"}
            siguienteVideo={
              "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-4"
            }
            capitulosVideo={
              "/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada"
            }
            anteriorVideo={
              "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-2"
            }
          />
        }
      />
      <Route
        path="/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/txntkltcx0ug.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e Segunda Temporada Capitulo 4"
            }
            tituloPag={"Animekun Gratis"}
            anime={
              "Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e Segunda Temporada "
            }
            numero={"4"}
            siguienteVideo={
              "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-5"
            }
            capitulosVideo={
              "/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada"
            }
            anteriorVideo={
              "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-3"
            }
          />
        }
      />
      <Route
        path="/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/qy3u5wurtyuc.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e Segunda Temporada Capitulo 5"
            }
            tituloPag={"Animekun Gratis"}
            anime={
              "Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e Segunda Temporada "
            }
            numero={"5"}
            siguienteVideo={
              "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-6"
            }
            capitulosVideo={
              "/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada"
            }
            anteriorVideo={
              "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-4"
            }
          />
        }
      />
      <Route
        path="/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/855ufbgzszr8.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e Segunda Temporada Capitulo 6"
            }
            tituloPag={"Animekun Gratis"}
            anime={
              "Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e Segunda Temporada "
            }
            numero={"6"}
            siguienteVideo={
              "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-7"
            }
            capitulosVideo={
              "/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada"
            }
            anteriorVideo={
              "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-5"
            }
          />
        }
      />
      <Route
        path="/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e Segunda Temporada Capitulo 7"
            }
            tituloPag={"Animekun Gratis"}
            anime={
              "Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e Segunda Temporada "
            }
            numero={"7"}
            siguienteVideo={
              "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-8"
            }
            capitulosVideo={
              "/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada"
            }
            anteriorVideo={
              "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-6"
            }
          />
        }
      />
      <Route
        path="/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e Segunda Temporada Capitulo 8"
            }
            tituloPag={"Animekun Gratis"}
            anime={
              "Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e Segunda Temporada "
            }
            numero={"8"}
            siguienteVideo={
              "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-9"
            }
            capitulosVideo={
              "/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada"
            }
            anteriorVideo={
              "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-7"
            }
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e Segunda Temporada Capitulo 9"
            }
            tituloPag={"Animekun Gratis"}
            anime={
              "Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e Segunda Temporada "
            }
            numero={"9"}
            siguienteVideo={
              "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-10"
            }
            capitulosVideo={
              "/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada"
            }
            anteriorVideo={
              "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-8"
            }
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e Segunda Temporada Capitulo 10"
            }
            tituloPag={"Animekun Gratis"}
            anime={
              "Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e Segunda Temporada "
            }
            numero={"10"}
            siguienteVideo={
              "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-11"
            }
            capitulosVideo={
              "/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada"
            }
            anteriorVideo={
              "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-9"
            }
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e Segunda Temporada Capitulo 11"
            }
            tituloPag={"Animekun Gratis"}
            anime={
              "Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e Segunda Temporada "
            }
            numero={"11"}
            siguienteVideo={
              "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-12"
            }
            capitulosVideo={
              "/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada"
            }
            anteriorVideo={
              "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-10"
            }
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={
              "Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e Segunda Temporada Capitulo 12"
            }
            tituloPag={"Animekun Gratis"}
            anime={
              "Youkoso Jitsuryoku Shijuo Shugi no Kyoushitsu e Segunda Temporada "
            }
            numero={"12"}
            capitulosVideo={
              "/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada"
            }
            anteriorVideo={
              "/ver/youkoso-jitsuryoku-shijuo-shugi-no-kyoushitsu-e-segunda-temporada-11"
            }
          />
        }
      />
      ----------------
      <Route
        path="/ver/spy-x-family-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/0kfqvqbokons.html"}
            contAnteriorClass="disable"
            tituloAnime={"Spy x Family Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Spy x Family"}
            numero={"1"}
            siguienteVideo={"/ver/spy-x-family-2"}
            capitulosVideo={"/spy-x-family"}
          />
        }
      />
      <Route
        path="/ver/spy-x-family-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/zzsqvthpdo53.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Spy x Family Capitulo 2"}
            tituloPag={"Animekun Gratis"}
            anime={"Spy x Family "}
            numero={"2"}
            siguienteVideo={"/ver/spy-x-family-3"}
            capitulosVideo={"/spy-x-family"}
            anteriorVideo={"/ver/spy-x-family-1"}
          />
        }
      />
      <Route
        path="/ver/spy-x-family-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/awajqa2jj4w7.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Spy x Family Capitulo 3"}
            tituloPag={"Animekun Gratis"}
            anime={"Spy x Family "}
            numero={"3"}
            siguienteVideo={"/ver/spy-x-family-4"}
            capitulosVideo={"/spy-x-family"}
            anteriorVideo={"/ver/spy-x-family-2"}
          />
        }
      />
      <Route
        path="/ver/spy-x-family-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/w0sewr92f9ju.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Spy x Family Capitulo 4"}
            tituloPag={"Animekun Gratis"}
            anime={"Spy x Family "}
            numero={"4"}
            siguienteVideo={"/ver/spy-x-family-5"}
            capitulosVideo={"/spy-x-family"}
            anteriorVideo={"/ver/spy-x-family-3"}
          />
        }
      />
      <Route
        path="/ver/spy-x-family-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/2i7cketmtjs1.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Spy x Family Capitulo 5"}
            tituloPag={"Animekun Gratis"}
            anime={"Spy x Family "}
            numero={"5"}
            siguienteVideo={"/ver/spy-x-family-6"}
            capitulosVideo={"/spy-x-family"}
            anteriorVideo={"/ver/spy-x-family-4"}
          />
        }
      />
      <Route
        path="/ver/spy-x-family-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/rrkz8sbzkqky.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Spy x Family Capitulo 6"}
            tituloPag={"Animekun Gratis"}
            anime={"Spy x Family "}
            numero={"6"}
            siguienteVideo={"/ver/spy-x-family-7"}
            capitulosVideo={"/spy-x-family"}
            anteriorVideo={"/ver/spy-x-family-5"}
          />
        }
      />
      <Route
        path="/ver/spy-x-family-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/tc2su9me4dxa.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Spy x Family Capitulo 7"}
            tituloPag={"Animekun Gratis"}
            anime={"Spy x Family "}
            numero={"7"}
            siguienteVideo={"/ver/spy-x-family-8"}
            capitulosVideo={"/spy-x-family"}
            anteriorVideo={"/ver/spy-x-family-6"}
          />
        }
      />
      <Route
        path="/ver/spy-x-family-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/vzshfa082g24.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Spy x Family Capitulo 8"}
            tituloPag={"Animekun Gratis"}
            anime={"Spy x Family "}
            numero={"8"}
            siguienteVideo={"/ver/spy-x-family-9"}
            capitulosVideo={"/spy-x-family"}
            anteriorVideo={"/ver/spy-x-family-7"}
          />
        }
      />
      <Route
        path="/ver/spy-x-family-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/1gn8l2o3y2af.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Spy x Family Capitulo 9"}
            tituloPag={"Animekun Gratis"}
            anime={"Spy x Family "}
            numero={"9"}
            siguienteVideo={"/ver/spy-x-family-10"}
            capitulosVideo={"/spy-x-family"}
            anteriorVideo={"/ver/spy-x-family-8"}
          />
        }
      />
      <Route
        path="/ver/spy-x-family-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/agx8f1kwho4z.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Spy x Family Capitulo 10"}
            tituloPag={"Animekun Gratis"}
            anime={"Spy x Family "}
            numero={"10"}
            siguienteVideo={"/ver/spy-x-family-11"}
            capitulosVideo={"/spy-x-family"}
            anteriorVideo={"/ver/spy-x-family-9"}
          />
        }
      />
      <Route
        path="/ver/spy-x-family-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/cadm96fvauw7.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Spy x Family Capitulo 11"}
            tituloPag={"Animekun Gratis"}
            anime={"Spy x Family "}
            numero={"11"}
            siguienteVideo={"/ver/spy-x-family-12"}
            capitulosVideo={"/spy-x-family"}
            anteriorVideo={"/ver/spy-x-family-10"}
          />
        }
      />
      <Route
        path="/ver/spy-x-family-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/71trlw0hlpcv.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Spy x Family Capitulo 12"}
            tituloPag={"Animekun Gratis"}
            anime={"Spy x Family "}
            numero={"12"}
            capitulosVideo={"/spy-x-family"}
            anteriorVideo={"/ver/spy-x-family-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/date-a-live-IV-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/khuqp41twd42.html"}
            contAnteriorClass="disable"
            tituloAnime={"Date a Live IV Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Date a Live IV "}
            numero={"1"}
            siguienteVideo={"/ver/date-a-live-IV-2"}
            capitulosVideo={"/date-a-live-IV"}
          />
        }
      />
      <Route
        path="/ver/date-a-live-IV-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/qa6hmv4n9jin.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Date a Live IV Capitulo 2"}
            tituloPag={"Animekun Gratis"}
            anime={"Date a Live IV "}
            numero={"2"}
            classOpcionSiguiente=""
            siguienteVideo={"/ver/date-a-live-IV-3"}
            capitulosVideo={"/date-a-live-IV"}
            anteriorVideo={"/ver/date-a-live-IV-1"}
          />
        }
      />
      <Route
        path="/ver/date-a-live-IV-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/rrnr6on4nn9c.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Date a Live IV Capitulo 3"}
            tituloPag={"Animekun Gratis"}
            anime={"Date a Live IV "}
            numero={"3"}
            siguienteVideo={"/ver/date-a-live-IV-4"}
            capitulosVideo={"/date-a-live-IV"}
            anteriorVideo={"/ver/date-a-live-IV-2"}
          />
        }
      />
      <Route
        path="/ver/date-a-live-IV-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/6nqv75p7215p.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Date a Live IV Capitulo 4"}
            tituloPag={"Animekun Gratis"}
            anime={"Date a Live IV "}
            numero={"4"}
            siguienteVideo={"/ver/date-a-live-IV-5"}
            capitulosVideo={"/date-a-live-IV"}
            anteriorVideo={"/ver/date-a-live-IV-3"}
          />
        }
      />
      <Route
        path="/ver/date-a-live-IV-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/s958meb5zvwj.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Date a Live IV Capitulo 5"}
            tituloPag={"Animekun Gratis"}
            anime={"Date a Live IV "}
            numero={"5"}
            siguienteVideo={"/ver/date-a-live-IV-6"}
            capitulosVideo={"/date-a-live-IV"}
            anteriorVideo={"/ver/date-a-live-IV-4"}
          />
        }
      />
      <Route
        path="/ver/date-a-live-IV-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/7f6i9l4dztzy.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Date a Live IV Capitulo 6"}
            tituloPag={"Animekun Gratis"}
            anime={"Date a Live IV "}
            numero={"6"}
            siguienteVideo={"/ver/date-a-live-IV-7"}
            capitulosVideo={"/date-a-live-IV"}
            anteriorVideo={"/ver/date-a-live-IV-5"}
          />
        }
      />
      <Route
        path="/ver/date-a-live-IV-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/qlks3kmtxm3c.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Date a Live IV Capitulo 7"}
            tituloPag={"Animekun Gratis"}
            anime={"Date a Live IV "}
            numero={"7"}
            siguienteVideo={"/ver/date-a-live-IV-8"}
            capitulosVideo={"/date-a-live-IV"}
            anteriorVideo={"/ver/date-a-live-IV-6"}
          />
        }
      />
      <Route
        path="/ver/date-a-live-IV-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/ykk92tiszl4t.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Date a Live IV Capitulo 8"}
            tituloPag={"Animekun Gratis"}
            anime={"Date a Live IV "}
            numero={"8"}
            siguienteVideo={"/ver/date-a-live-IV-9"}
            capitulosVideo={"/date-a-live-IV"}
            anteriorVideo={"/ver/date-a-live-IV-7"}
          />
        }
      />
      <Route
        path="/ver/date-a-live-IV-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/ul6s5b2axofs.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Date a Live IV Capitulo 9"}
            tituloPag={"Animekun Gratis"}
            anime={"Date a Live IV "}
            numero={"9"}
            siguienteVideo={"/ver/date-a-live-IV-10"}
            capitulosVideo={"/date-a-live-IV"}
            anteriorVideo={"/ver/date-a-live-IV-8"}
          />
        }
      />
      <Route
        path="/ver/date-a-live-IV-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/efbbkrhbt24a.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Date a Live IV Capitulo 10"}
            tituloPag={"Animekun Gratis"}
            anime={"Date a Live IV "}
            numero={"10"}
            siguienteVideo={"/ver/date-a-live-IV-11"}
            capitulosVideo={"/date-a-live-IV"}
            anteriorVideo={"/ver/date-a-live-IV-9"}
          />
        }
      />
      <Route
        path="/ver/date-a-live-IV-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/25govrnpro2i.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Date a Live IV Capitulo 11"}
            tituloPag={"Animekun Gratis"}
            anime={"Date a Live IV "}
            numero={"11"}
            siguienteVideo={"/ver/date-a-live-IV-12"}
            capitulosVideo={"/date-a-live-IV"}
            anteriorVideo={"/ver/date-a-live-IV-10"}
          />
        }
      />
      <Route
        path="/ver/date-a-live-IV-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/8jwulstwxvf5.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Date a Live IV Capitulo 12"}
            tituloPag={"Animekun Gratis"}
            anime={"Date a Live IV "}
            numero={"12"}
            capitulosVideo={"/date-a-live-IV"}
            anteriorVideo={"/ver/date-a-live-IV-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/tate-no-yuusha-no-naraigari-segunda-temporada-1"
        exact
        element={
          <Video
            frame1={"https://sbthe.com/e/iua5pjl09wr8.html"}
            contAnteriorClass="disable"
            tituloAnime={
              "Tate no Yuusha no Naraigari Segunda Temporada Capitulo 1"
            }
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Tate no Yuusha no Naraigari Segunda Temporada"}
            numero={"1"}
            siguienteVideo={
              "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-2"
            }
            capitulosVideo={"/tate-no-yuusha-no-naraigari-segunda-temporada"}
          />
        }
      />
      <Route
        path="/ver/tate-no-yuusha-no-naraigari-segunda-temporada-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/m3yqx7hhktv1.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Tate no Yuusha no Naraigari Segunda Temporada Capitulo 2"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Tate no Yuusha no Naraigari Segunda Temporada "}
            numero={"2"}
            classOpcionSiguiente=""
            siguienteVideo={
              "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-3"
            }
            capitulosVideo={"/tate-no-yuusha-no-naraigari-segunda-temporada"}
            anteriorVideo={
              "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-1"
            }
          />
        }
      />
      <Route
        path="/ver/tate-no-yuusha-no-naraigari-segunda-temporada-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/2eik3dc76yef.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Tate no Yuusha no Naraigari Segunda Temporada Capitulo 3"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Tate no Yuusha no Naraigari Segunda Temporada "}
            numero={"3"}
            siguienteVideo={
              "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-4"
            }
            capitulosVideo={"/tate-no-yuusha-no-naraigari-segunda-temporada"}
            anteriorVideo={
              "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-2"
            }
          />
        }
      />
      <Route
        path="/ver/tate-no-yuusha-no-naraigari-segunda-temporada-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/y3hee43zsp68.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Tate no Yuusha no Naraigari Segunda Temporada Capitulo 4"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Tate no Yuusha no Naraigari Segunda Temporada "}
            numero={"4"}
            siguienteVideo={
              "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-5"
            }
            capitulosVideo={"/tate-no-yuusha-no-naraigari-segunda-temporada"}
            anteriorVideo={
              "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-3"
            }
          />
        }
      />
      <Route
        path="/ver/tate-no-yuusha-no-naraigari-segunda-temporada-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/7gvjwas8wdwk.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Tate no Yuusha no Naraigari Segunda Temporada Capitulo 5"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Tate no Yuusha no Naraigari Segunda Temporada "}
            numero={"5"}
            siguienteVideo={
              "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-6"
            }
            capitulosVideo={"/tate-no-yuusha-no-naraigari-segunda-temporada"}
            anteriorVideo={
              "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-4"
            }
          />
        }
      />
      <Route
        path="/ver/tate-no-yuusha-no-naraigari-segunda-temporada-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/v1yqrus2dera.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Tate no Yuusha no Naraigari Segunda Temporada Capitulo 6"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Tate no Yuusha no Naraigari Segunda Temporada "}
            numero={"6"}
            siguienteVideo={
              "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-7"
            }
            capitulosVideo={"/tate-no-yuusha-no-naraigari-segunda-temporada"}
            anteriorVideo={
              "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-5"
            }
          />
        }
      />
      <Route
        path="/ver/tate-no-yuusha-no-naraigari-segunda-temporada-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/jf30f0akscad.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Tate no Yuusha no Naraigari Segunda Temporada Capitulo 7"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Tate no Yuusha no Naraigari Segunda Temporada "}
            numero={"7"}
            siguienteVideo={
              "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-8"
            }
            capitulosVideo={"/tate-no-yuusha-no-naraigari-segunda-temporada"}
            anteriorVideo={
              "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-6"
            }
          />
        }
      />
      <Route
        path="/ver/tate-no-yuusha-no-naraigari-segunda-temporada-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/wgubkrcsnovz.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Tate no Yuusha no Naraigari Segunda Temporada Capitulo 8"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Tate no Yuusha no Naraigari Segunda Temporada "}
            numero={"8"}
            siguienteVideo={
              "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-9"
            }
            capitulosVideo={"/tate-no-yuusha-no-naraigari-segunda-temporada"}
            anteriorVideo={
              "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-7"
            }
          />
        }
      />
      <Route
        path="/ver/tate-no-yuusha-no-naraigari-segunda-temporada-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/r7dkatqioin7.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Tate no Yuusha no Naraigari Segunda Temporada Capitulo 9"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Tate no Yuusha no Naraigari Segunda Temporada "}
            numero={"9"}
            siguienteVideo={
              "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-10"
            }
            capitulosVideo={"/tate-no-yuusha-no-naraigari-segunda-temporada"}
            anteriorVideo={
              "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-8"
            }
          />
        }
      />
      <Route
        path="/ver/tate-no-yuusha-no-naraigari-segunda-temporada-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/k06dkl92t3ay.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Tate no Yuusha no Naraigari Segunda Temporada Capitulo 10"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Tate no Yuusha no Naraigari Segunda Temporada "}
            numero={"10"}
            siguienteVideo={
              "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-11"
            }
            capitulosVideo={"/tate-no-yuusha-no-naraigari-segunda-temporada"}
            anteriorVideo={
              "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-9"
            }
          />
        }
      />
      <Route
        path="/ver/tate-no-yuusha-no-naraigari-segunda-temporada-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/p3b4oe5cnviz.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Tate no Yuusha no Naraigari Segunda Temporada Capitulo 11"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Tate no Yuusha no Naraigari Segunda Temporada "}
            numero={"11"}
            siguienteVideo={
              "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-12"
            }
            capitulosVideo={"/tate-no-yuusha-no-naraigari-segunda-temporada"}
            anteriorVideo={
              "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-10"
            }
          />
        }
      />
      <Route
        path="/ver/tate-no-yuusha-no-naraigari-segunda-temporada-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/r8s0733eolyw.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Tate no Yuusha no Naraigari Segunda Temporada Capitulo 12"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Tate no Yuusha no Naraigari Segunda Temporada "}
            numero={"12"}
            siguienteVideo={
              "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-13"
            }
            capitulosVideo={"/tate-no-yuusha-no-naraigari-segunda-temporada"}
            anteriorVideo={
              "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-11"
            }
          />
        }
      />
      <Route
        path="/ver/tate-no-yuusha-no-naraigari-segunda-temporada-13"
        element={
          <Video
            frame1={"https://sbthe.com/e/0v6217fyz7z9.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={
              "Tate no Yuusha no Naraigari Segunda Temporada Capitulo 13"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Tate no Yuusha no Naraigari Segunda Temporada "}
            numero={"13"}
            capitulosVideo={"/tate-no-yuusha-no-naraigari-segunda-temporada"}
            anteriorVideo={
              "/ver/tate-no-yuusha-no-naraigari-segunda-temporada-12"
            }
          />
        }
      />
      ----------------
      <Route
        path="/ver/tomodachi-game-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/xw4crh9sl276.html"}
            contAnteriorClass="disable"
            tituloAnime={"Tomodachi Game Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Tomodachi Game"}
            numero={"1"}
            siguienteVideo={"/ver/tomodachi-game-2"}
            capitulosVideo={"/tomodachi-game"}
          />
        }
      />
      <Route
        path="/ver/tomodachi-game-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/g3aexb75dluo.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Tomodachi Game Capitulo 2"}
            tituloPag={"Animekun Gratis"}
            anime={"Tomodachi Game "}
            numero={"2"}
            classOpcionSiguiente=""
            siguienteVideo={"/ver/tomodachi-game-3"}
            capitulosVideo={"/tomodachi-game"}
            anteriorVideo={"/ver/tomodachi-game-1"}
          />
        }
      />
      <Route
        path="/ver/tomodachi-game-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/x8jxfjtmxxc2.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Tomodachi Game Capitulo 3"}
            tituloPag={"Animekun Gratis"}
            anime={"Tomodachi Game "}
            numero={"3"}
            siguienteVideo={"/ver/tomodachi-game-4"}
            capitulosVideo={"/tomodachi-game"}
            anteriorVideo={"/ver/tomodachi-game-2"}
          />
        }
      />
      <Route
        path="/ver/tomodachi-game-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/3yudj5qph1sv.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Tomodachi Game Capitulo 4"}
            tituloPag={"Animekun Gratis"}
            anime={"Tomodachi Game "}
            numero={"4"}
            siguienteVideo={"/ver/tomodachi-game-5"}
            capitulosVideo={"/tomodachi-game"}
            anteriorVideo={"/ver/tomodachi-game-3"}
          />
        }
      />
      <Route
        path="/ver/tomodachi-game-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/h4nfyksueeq7.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Tomodachi Game Capitulo 5"}
            tituloPag={"Animekun Gratis"}
            anime={"Tomodachi Game "}
            numero={"5"}
            siguienteVideo={"/ver/tomodachi-game-6"}
            capitulosVideo={"/tomodachi-game"}
            anteriorVideo={"/ver/tomodachi-game-4"}
          />
        }
      />
      <Route
        path="/ver/tomodachi-game-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/4wwrjeglv3xn.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Tomodachi Game Capitulo 6"}
            tituloPag={"Animekun Gratis"}
            anime={"Tomodachi Game "}
            numero={"6"}
            siguienteVideo={"/ver/tomodachi-game-7"}
            capitulosVideo={"/tomodachi-game"}
            anteriorVideo={"/ver/tomodachi-game-5"}
          />
        }
      />
      <Route
        path="/ver/tomodachi-game-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/pz2x4129xuy1.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Tomodachi Game Capitulo 7"}
            tituloPag={"Animekun Gratis"}
            anime={"Tomodachi Game "}
            numero={"7"}
            siguienteVideo={"/ver/tomodachi-game-8"}
            capitulosVideo={"/tomodachi-game"}
            anteriorVideo={"/ver/tomodachi-game-6"}
          />
        }
      />
      <Route
        path="/ver/tomodachi-game-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/pmkat7b2fhnm.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Tomodachi Game Capitulo 8"}
            tituloPag={"Animekun Gratis"}
            anime={"Tomodachi Game "}
            numero={"8"}
            siguienteVideo={"/ver/tomodachi-game-9"}
            capitulosVideo={"/tomodachi-game"}
            anteriorVideo={"/ver/tomodachi-game-7"}
          />
        }
      />
      <Route
        path="/ver/tomodachi-game-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/m7eb16rrtwis.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Tomodachi Game Capitulo 9"}
            tituloPag={"Animekun Gratis"}
            anime={"Tomodachi Game "}
            numero={"9"}
            siguienteVideo={"/ver/tomodachi-game-10"}
            capitulosVideo={"/tomodachi-game"}
            anteriorVideo={"/ver/tomodachi-game-8"}
          />
        }
      />
      <Route
        path="/ver/tomodachi-game-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/3xpqg0gp9qru.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Tomodachi Game Capitulo 10"}
            tituloPag={"Animekun Gratis"}
            anime={"Tomodachi Game "}
            numero={"10"}
            siguienteVideo={"/ver/tomodachi-game-11"}
            capitulosVideo={"/tomodachi-game"}
            anteriorVideo={"/ver/tomodachi-game-9"}
          />
        }
      />
      <Route
        path="/ver/tomodachi-game-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/omiwjek9j9zl.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Tomodachi Game Capitulo 11"}
            tituloPag={"Animekun Gratis"}
            anime={"Tomodachi Game "}
            numero={"11"}
            siguienteVideo={"/ver/tomodachi-game-12"}
            capitulosVideo={"/tomodachi-game"}
            anteriorVideo={"/ver/tomodachi-game-10"}
          />
        }
      />
      <Route
        path="/ver/tomodachi-game-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/3k4mpop05jm1.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Tomodachi Game Capitulo 12"}
            tituloPag={"Animekun Gratis"}
            anime={"Tomodachi Game "}
            numero={"12"}
            capitulosVideo={"/tomodachi-game"}
            anteriorVideo={"/ver/tomodachi-game-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/baraou-no-souretsu-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/achrsafvaswy.html"}
            contAnteriorClass="disable"
            tituloAnime={"Baraou no Souretsu Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun Gratis"}
            anime={"Baraou no Souretsu"}
            numero={"1"}
            siguienteVideo={"/ver/baraou-no-souretsu-2"}
            capitulosVideo={"/baraou-no-souretsu"}
          />
        }
      />
      <Route
        path="/ver/baraou-no-souretsu-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/1d38dps4mxfe.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Baraou no Souretsu Capitulo 2"}
            tituloPag={"Animekun Gratis"}
            anime={"Baraou no Souretsu "}
            numero={"2"}
            siguienteVideo={"/ver/baraou-no-souretsu-3"}
            capitulosVideo={"/baraou-no-souretsu"}
            anteriorVideo={"/ver/baraou-no-souretsu-1"}
          />
        }
      />
      <Route
        path="/ver/baraou-no-souretsu-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/g7gl2gnh5gaf.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Baraou no Souretsu Capitulo 3"}
            tituloPag={"Animekun Gratis"}
            anime={"Baraou no Souretsu "}
            numero={"3"}
            siguienteVideo={"/ver/baraou-no-souretsu-4"}
            capitulosVideo={"/baraou-no-souretsu"}
            anteriorVideo={"/ver/baraou-no-souretsu-2"}
          />
        }
      />
      <Route
        path="/ver/baraou-no-souretsu-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/r8rwi27jx27e.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Baraou no Souretsu Capitulo 4"}
            tituloPag={"Animekun Gratis"}
            anime={"Baraou no Souretsu "}
            numero={"4"}
            siguienteVideo={"/ver/baraou-no-souretsu-5"}
            capitulosVideo={"/baraou-no-souretsu"}
            anteriorVideo={"/ver/baraou-no-souretsu-3"}
          />
        }
      />
      <Route
        path="/ver/baraou-no-souretsu-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/bcf7zadtzmwt.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Baraou no Souretsu Capitulo 5"}
            tituloPag={"Animekun Gratis"}
            anime={"Baraou no Souretsu "}
            numero={"5"}
            siguienteVideo={"/ver/baraou-no-souretsu-6"}
            capitulosVideo={"/baraou-no-souretsu"}
            anteriorVideo={"/ver/baraou-no-souretsu-4"}
          />
        }
      />
      <Route
        path="/ver/baraou-no-souretsu-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/tidjueq81t4l.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Baraou no Souretsu Capitulo 6"}
            tituloPag={"Animekun Gratis"}
            anime={"Baraou no Souretsu "}
            numero={"6"}
            siguienteVideo={"/ver/baraou-no-souretsu-7"}
            capitulosVideo={"/baraou-no-souretsu"}
            anteriorVideo={"/ver/baraou-no-souretsu-5"}
          />
        }
      />
      <Route
        path="/ver/baraou-no-souretsu-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/64017poxg97y.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Baraou no Souretsu Capitulo 7"}
            tituloPag={"Animekun Gratis"}
            anime={"Baraou no Souretsu "}
            numero={"7"}
            siguienteVideo={"/ver/baraou-no-souretsu-8"}
            capitulosVideo={"/baraou-no-souretsu"}
            anteriorVideo={"/ver/baraou-no-souretsu-6"}
          />
        }
      />
      <Route
        path="/ver/baraou-no-souretsu-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/k6w1jtbm7ym5.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Baraou no Souretsu Capitulo 8"}
            tituloPag={"Animekun Gratis"}
            anime={"Baraou no Souretsu "}
            numero={"8"}
            siguienteVideo={"/ver/baraou-no-souretsu-9"}
            capitulosVideo={"/baraou-no-souretsu"}
            anteriorVideo={"/ver/baraou-no-souretsu-7"}
          />
        }
      />
      <Route
        path="/ver/baraou-no-souretsu-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/ztfrj77yh6ue.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Baraou no Souretsu Capitulo 9"}
            tituloPag={"Animekun Gratis"}
            anime={"Baraou no Souretsu "}
            numero={"9"}
            siguienteVideo={"/ver/baraou-no-souretsu-10"}
            capitulosVideo={"/baraou-no-souretsu"}
            anteriorVideo={"/ver/baraou-no-souretsu-8"}
          />
        }
      />
      <Route
        path="/ver/baraou-no-souretsu-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/hfoy04x23c96.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Baraou no Souretsu Capitulo 10"}
            tituloPag={"Animekun Gratis"}
            anime={"Baraou no Souretsu "}
            numero={"10"}
            siguienteVideo={"/ver/baraou-no-souretsu-11"}
            capitulosVideo={"/baraou-no-souretsu"}
            anteriorVideo={"/ver/baraou-no-souretsu-9"}
          />
        }
      />
      <Route
        path="/ver/baraou-no-souretsu-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/uabksjac3zdn.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Baraou no Souretsu Capitulo 11"}
            tituloPag={"Animekun Gratis"}
            anime={"Baraou no Souretsu "}
            numero={"11"}
            siguienteVideo={"/ver/baraou-no-souretsu-12"}
            capitulosVideo={"/baraou-no-souretsu"}
            anteriorVideo={"/ver/baraou-no-souretsu-10"}
          />
        }
      />
      <Route
        path="/ver/baraou-no-souretsu-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/nzkspkrlyg0y.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Baraou no Souretsu Capitulo 12"}
            tituloPag={"Animekun Gratis"}
            anime={"Baraou no Souretsu "}
            numero={"12"}
            siguienteVideo={"/ver/baraou-no-souretsu-13"}
            capitulosVideo={"/baraou-no-souretsu"}
            anteriorVideo={"/ver/baraou-no-souretsu-11"}
          />
        }
      />
      <Route
        path="/ver/baraou-no-souretsu-13"
        element={
          <Video
            frame1={"https://sbthe.com/e/g5w14rpykmiz.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Baraou no Souretsu Capitulo 13"}
            tituloPag={"Animekun Gratis"}
            anime={"Baraou no Souretsu "}
            numero={"13"}
            siguienteVideo={"/ver/baraou-no-souretsu-14"}
            capitulosVideo={"/baraou-no-souretsu"}
            anteriorVideo={"/ver/baraou-no-souretsu-12"}
          />
        }
      />
      <Route
        path="/ver/baraou-no-souretsu-14"
        element={
          <Video
            frame1={"https://sbthe.com/e/yk5ddsvy6w2a.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Baraou no Souretsu Capitulo 14"}
            tituloPag={"Animekun Gratis"}
            anime={"Baraou no Souretsu "}
            numero={"14"}
            siguienteVideo={"/ver/baraou-no-souretsu-15"}
            capitulosVideo={"/baraou-no-souretsu"}
            anteriorVideo={"/ver/baraou-no-souretsu-13"}
          />
        }
      />
      <Route
        path="/ver/baraou-no-souretsu-15"
        element={
          <Video
            frame1={"https://sbthe.com/e/506uz31mohxq.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Baraou no Souretsu Capitulo 15"}
            tituloPag={"Animekun Gratis"}
            anime={"Baraou no Souretsu "}
            numero={"15"}
            siguienteVideo={"/ver/baraou-no-souretsu-16"}
            capitulosVideo={"/baraou-no-souretsu"}
            anteriorVideo={"/ver/baraou-no-souretsu-14"}
          />
        }
      />
      <Route
        path="/ver/baraou-no-souretsu-16"
        element={
          <Video
            frame1={"https://sbthe.com/e/r7pmiyylq1rh.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Baraou no Souretsu Capitulo 16"}
            tituloPag={"Animekun Gratis"}
            anime={"Baraou no Souretsu "}
            numero={"16"}
            siguienteVideo={"/ver/baraou-no-souretsu-17"}
            capitulosVideo={"/baraou-no-souretsu"}
            anteriorVideo={"/ver/baraou-no-souretsu-15"}
          />
        }
      />
      <Route
        path="/ver/baraou-no-souretsu-17"
        element={
          <Video
            frame1={"https://sbthe.com/e/m0crmawn7nfw.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Baraou no Souretsu Capitulo 17"}
            tituloPag={"Animekun Gratis"}
            anime={"Baraou no Souretsu "}
            numero={"17"}
            siguienteVideo={"/ver/baraou-no-souretsu-18"}
            capitulosVideo={"/baraou-no-souretsu"}
            anteriorVideo={"/ver/baraou-no-souretsu-16"}
          />
        }
      />
      <Route
        path="/ver/baraou-no-souretsu-18"
        element={
          <Video
            frame1={"https://sbthe.com/e/76zisatg1g33.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Baraou no Souretsu Capitulo 18"}
            tituloPag={"Animekun Gratis"}
            anime={"Baraou no Souretsu "}
            numero={"18"}
            siguienteVideo={"/ver/baraou-no-souretsu-19"}
            capitulosVideo={"/baraou-no-souretsu"}
            anteriorVideo={"/ver/baraou-no-souretsu-17"}
          />
        }
      />
      <Route
        path="/ver/baraou-no-souretsu-19"
        element={
          <Video
            frame1={"https://sbthe.com/e/a25gpnhg5m2y.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Baraou no Souretsu Capitulo 19"}
            tituloPag={"Animekun Gratis"}
            anime={"Baraou no Souretsu "}
            numero={"19"}
            siguienteVideo={"/ver/baraou-no-souretsu-20"}
            capitulosVideo={"/baraou-no-souretsu"}
            anteriorVideo={"/ver/baraou-no-souretsu-18"}
          />
        }
      />
      <Route
        path="/ver/baraou-no-souretsu-20"
        element={
          <Video
            frame1={"https://sbthe.com/e/lz1fjmrinmlf.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Baraou no Souretsu Capitulo 20"}
            tituloPag={"Animekun Gratis"}
            anime={"Baraou no Souretsu "}
            numero={"20"}
            siguienteVideo={"/ver/baraou-no-souretsu-21"}
            capitulosVideo={"/baraou-no-souretsu"}
            anteriorVideo={"/ver/baraou-no-souretsu-19"}
          />
        }
      />
      <Route
        path="/ver/baraou-no-souretsu-21"
        element={
          <Video
            frame1={"https://sbthe.com/e/5r1yzx3c0wt6.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Baraou no Souretsu Capitulo 21"}
            tituloPag={"Animekun Gratis"}
            anime={"Baraou no Souretsu "}
            numero={"21"}
            siguienteVideo={"/ver/baraou-no-souretsu-22"}
            capitulosVideo={"/baraou-no-souretsu"}
            anteriorVideo={"/ver/baraou-no-souretsu-20"}
          />
        }
      />
      <Route
        path="/ver/baraou-no-souretsu-22"
        element={
          <Video
            frame1={"https://sbthe.com/e/ylqks9y65ibr.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Baraou no Souretsu Capitulo 22"}
            tituloPag={"Animekun Gratis"}
            anime={"Baraou no Souretsu "}
            numero={"22"}
            siguienteVideo={"/ver/baraou-no-souretsu-23"}
            capitulosVideo={"/baraou-no-souretsu"}
            anteriorVideo={"/ver/baraou-no-souretsu-21"}
          />
        }
      />
      <Route
        path="/ver/baraou-no-souretsu-23"
        element={
          <Video
            frame1={"https://sbthe.com/e/dbc479i3phlv.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Baraou no Souretsu Capitulo 23"}
            tituloPag={"Animekun Gratis"}
            anime={"Baraou no Souretsu "}
            numero={"22"}
            siguienteVideo={"/ver/baraou-no-souretsu-24"}
            capitulosVideo={"/baraou-no-souretsu"}
            anteriorVideo={"/ver/baraou-no-souretsu-22"}
          />
        }
      />
      <Route
        path="/ver/baraou-no-souretsu-24"
        element={
          <Video
            frame1={"https://sbthe.com/e/hq9600g9ir6z.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Baraou no Souretsu Capitulo 24"}
            tituloPag={"Animekun Gratis"}
            anime={"Baraou no Souretsu "}
            numero={"23"}
            capitulosVideo={"/baraou-no-souretsu"}
            anteriorVideo={"/ver/baraou-no-souretsu-23"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/karakuri-circus-1"
        element={<Video tituloAnime={"Karakuri Circus Capitulo 1"} />}
      />
      <Route
        path="/ver/karakuri-circus-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/u9x04cimut2j.html"}
            contAnteriorClass="disable"
            tituloAnime={"Karakuri Circus Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Karakuri Circus"}
            numero={"1"}
            siguienteVideo={"/ver/karakuri-circus-2"}
            capitulosVideo={"/karakuri-circus"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/5ket8q9eukei.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 2"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"2"}
            classOpcionSiguiente=""
            siguienteVideo={"/ver/karakuri-circus-3"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-1"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/pgoeu85fe5l8.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 3"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"3"}
            siguienteVideo={"/ver/karakuri-circus-4"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-2"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/o8pwsqygzwb4.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 4"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"4"}
            siguienteVideo={"/ver/karakuri-circus-5"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-3"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/0xqgwg86mplp.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 5"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"5"}
            siguienteVideo={"/ver/karakuri-circus-6"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-4"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/hrcqd033euua.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 6"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"6"}
            siguienteVideo={"/ver/karakuri-circus-7"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-5"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/fdwvdpzsd3pl.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 7"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"7"}
            siguienteVideo={"/ver/karakuri-circus-8"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-6"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/34pi5tu0aq76.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 8"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"8"}
            siguienteVideo={"/ver/karakuri-circus-9"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-7"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/2ekwlel86k5o	.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 9"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"9"}
            siguienteVideo={"/ver/karakuri-circus-10"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-8"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/04k2ts8q8q3y.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 10"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"10"}
            siguienteVideo={"/ver/karakuri-circus-11"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-9"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/79n4nhdd08v2.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 11"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"11"}
            siguienteVideo={"/ver/karakuri-circus-12"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-10"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/4147gox0bh23.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 12"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"12"}
            siguienteVideo={"/ver/karakuri-circus-13"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-11"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-13"
        element={
          <Video
            frame1={"https://sbthe.com/e/j1o1te7a5quj.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 13"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"13"}
            siguienteVideo={"/ver/karakuri-circus-14"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-12"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-14"
        element={
          <Video
            frame1={"https://sbthe.com/e/mhzikfy9jjfk.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 14"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"14"}
            siguienteVideo={"/ver/karakuri-circus-15"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-13"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-15"
        element={
          <Video
            frame1={"https://sbthe.com/e/sy9ncctax111.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 15"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"15"}
            siguienteVideo={"/ver/karakuri-circus-16"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-14"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-16"
        element={
          <Video
            frame1={"https://sbthe.com/e/tfqfdz8intuc.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 16"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"16"}
            siguienteVideo={"/ver/karakuri-circus-17"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-15"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-17"
        element={
          <Video
            frame1={"https://sbthe.com/e/aitb2gatz9l2.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 17"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"17"}
            siguienteVideo={"/ver/karakuri-circus-18"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-16"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-18"
        element={
          <Video
            frame1={"https://sbthe.com/e/6ucz9nya70qf.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 18"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"18"}
            siguienteVideo={"/ver/karakuri-circus-19"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-17"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-19"
        element={
          <Video
            frame1={"https://sbthe.com/e/lalnosa0icwm.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 19"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"19"}
            siguienteVideo={"/ver/karakuri-circus-20"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-18"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-20"
        element={
          <Video
            frame1={"https://sbthe.com/e/d76e0yurmqgn.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 20"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"20"}
            siguienteVideo={"/ver/karakuri-circus-21"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-19"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-21"
        element={
          <Video
            frame1={"https://sbthe.com/e/rcvf3ggfakit.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 21"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"21"}
            siguienteVideo={"/ver/karakuri-circus-22"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-20"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-22"
        element={
          <Video
            frame1={"https://sbthe.com/e/lpwh9yftwih6.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 22"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"22"}
            siguienteVideo={"/ver/karakuri-circus-23"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-21"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-23"
        element={
          <Video
            frame1={"https://sbthe.com/e/90oabk5csckp.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 23"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"23"}
            siguienteVideo={"/ver/karakuri-circus-24"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-22"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-24"
        element={
          <Video
            frame1={"https://sbthe.com/e/2naj6wc33y9j.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 24"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"24"}
            siguienteVideo={"/ver/karakuri-circus-25"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-23"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-25"
        element={
          <Video
            frame1={"https://sbthe.com/e/iwz5teenhf2w.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 25"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"25"}
            siguienteVideo={"/ver/karakuri-circus-26"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-24"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-26"
        element={
          <Video
            frame1={"https://sbthe.com/e/aae27dvebnzl.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 26"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"26"}
            siguienteVideo={"/ver/karakuri-circus-27"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-25"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-27"
        element={
          <Video
            frame1={"https://sbthe.com/e/qkzb5exn9mw9.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 27"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"27"}
            siguienteVideo={"/ver/karakuri-circus-28"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-26"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-28"
        element={
          <Video
            frame1={"https://sbthe.com/e/h6j9dc26bn5l.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 28"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"28"}
            siguienteVideo={"/ver/karakuri-circus-29"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-27"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-29"
        element={
          <Video
            frame1={"https://sbthe.com/e/3btjmt3xr80m.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 29"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"29"}
            siguienteVideo={"/ver/karakuri-circus-30"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-28"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-30"
        element={
          <Video
            frame1={"https://sbthe.com/e/2wqsl4i0tqji.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 30"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"30"}
            siguienteVideo={"/ver/karakuri-circus-31"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-29"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-31"
        element={
          <Video
            frame1={"https://sbthe.com/e/0lje6uxcjcad.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 31"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"31"}
            siguienteVideo={"/ver/karakuri-circus-32"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-30"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-32"
        element={
          <Video
            frame1={"https://sbthe.com/e/jnem5sa7hodf.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 32"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"32"}
            siguienteVideo={"/ver/karakuri-circus-33"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-31"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-33"
        element={
          <Video
            frame1={"https://sbthe.com/e/e28bl46fj2es.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 33"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"33"}
            siguienteVideo={"/ver/karakuri-circus-34"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-32"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-34"
        element={
          <Video
            frame1={"https://sbthe.com/e/hb8785re4ea4.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 34"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"34"}
            siguienteVideo={"/ver/karakuri-circus-35"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-33"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-35"
        element={
          <Video
            frame1={"https://sbthe.com/e/ip2fap6rivlr.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Karakuri Circus Capitulo 35"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"35"}
            siguienteVideo={"/ver/karakuri-circus-36"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-34"}
          />
        }
      />
      <Route
        path="/ver/karakuri-circus-36"
        element={
          <Video
            frame1={"https://sbthe.com/e/1lmcrau8saib.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Karakuri Circus Capitulo 36"}
            tituloPag={"Animekun Gratis"}
            anime={"Karakuri Circus "}
            numero={"36"}
            capitulosVideo={"/karakuri-circus"}
            anteriorVideo={"/ver/karakuri-circus-35"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/extreme-hearts-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/es3puvrsy8zq.html"}
            contAnteriorClass="disable"
            tituloAnime={"Extreme Heart Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Extreme Heart"}
            numero={"1"}
            siguienteVideo={"/ver/extreme-hearts-2"}
            capitulosVideo={"/extreme-hearts"}
          />
        }
      />
      <Route
        path="/ver/extreme-hearts-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/wtn86nqtjc3t.htm"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Extreme Heart Capitulo 2"}
            tituloPag={"Animekun"}
            anime={"Extreme Heart "}
            numero={"2"}
            siguienteVideo={"/ver/extreme-hearts-3"}
            capitulosVideo={"/extreme-hearts"}
            anteriorVideo={"/ver/extreme-hearts-1"}
          />
        }
      />
      <Route
        path="/ver/extreme-hearts-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/jp2l0fpvzjre.htm"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Extreme Heart Capitulo 3"}
            tituloPag={"Animekun"}
            anime={"Extreme Heart "}
            numero={"3"}
            siguienteVideo={"/ver/extreme-hearts-4"}
            capitulosVideo={"/extreme-hearts"}
            anteriorVideo={"/ver/extreme-hearts-2"}
          />
        }
      />
      <Route
        path="/ver/extreme-hearts-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/0isigg8bjbgi.htm"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Extreme Heart Capitulo 4"}
            tituloPag={"Animekun"}
            anime={"Extreme Heart "}
            numero={"4"}
            siguienteVideo={"/ver/extreme-hearts-5"}
            capitulosVideo={"/extreme-hearts"}
            anteriorVideo={"/ver/extreme-hearts-3"}
          />
        }
      />
      <Route
        path="/ver/extreme-hearts-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/d7mvf8ntx8uc.htm"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Extreme Heart Capitulo 5"}
            tituloPag={"Animekun"}
            anime={"Extreme Heart "}
            numero={"5"}
            siguienteVideo={"/ver/extreme-hearts-6"}
            capitulosVideo={"/extreme-hearts"}
            anteriorVideo={"/ver/extreme-hearts-4"}
          />
        }
      />
      <Route
        path="/ver/extreme-hearts-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/zqy9hu2qk7vb.htm"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Extreme Heart Capitulo 6"}
            tituloPag={"Animekun"}
            anime={"Extreme Heart "}
            numero={"6"}
            siguienteVideo={"/ver/extreme-hearts-7"}
            capitulosVideo={"/extreme-hearts"}
            anteriorVideo={"/ver/extreme-hearts-5"}
          />
        }
      />
      <Route
        path="/ver/extreme-hearts-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/391eupnkeb0t.htm"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Extreme Heart Capitulo 7"}
            tituloPag={"Animekun"}
            anime={"Extreme Heart "}
            numero={"7"}
            siguienteVideo={"/ver/extreme-hearts-8"}
            capitulosVideo={"/extreme-hearts"}
            anteriorVideo={"/ver/extreme-hearts-6"}
          />
        }
      />
      <Route
        path="/ver/extreme-hearts-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/e12wefci2yhm.htm"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={""}
            tituloAnime={"Extreme Heart Capitulo 8"}
            tituloPag={"Animekun"}
            anime={"Extreme Heart "}
            numero={"8"}
            siguienteVideo={"/ver/extreme-hearts-9"}
            capitulosVideo={"/extreme-hearts"}
            anteriorVideo={"/ver/extreme-hearts-7"}
          />
        }
      />
      <Route
        path="/ver/extreme-hearts-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/23uol8qh4zeu.htm"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={""}
            tituloAnime={"Extreme Heart Capitulo 9"}
            tituloPag={"Animekun"}
            anime={"Extreme Heart "}
            numero={"9"}
            siguienteVideo={"/ver/extreme-hearts-10"}
            capitulosVideo={"/extreme-hearts"}
            anteriorVideo={"/ver/extreme-hearts-8"}
          />
        }
      />
      <Route
        path="/ver/extreme-hearts-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/rpmmao61kahg.htm"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={""}
            tituloAnime={"Extreme Heart Capitulo 10"}
            tituloPag={"Animekun"}
            anime={"Extreme Heart "}
            numero={"10"}
            siguienteVideo={"/ver/extreme-hearts-11"}
            capitulosVideo={"/extreme-hearts"}
            anteriorVideo={"/ver/extreme-hearts-9"}
          />
        }
      />
      <Route
        path="/ver/extreme-hearts-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/q4qg1vcun2oe.htm"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={""}
            tituloAnime={"Extreme Heart Capitulo 11"}
            tituloPag={"Animekun"}
            anime={"Extreme Heart "}
            numero={"11"}
            siguienteVideo={"/ver/extreme-hearts-12"}
            capitulosVideo={"/extreme-hearts"}
            anteriorVideo={"/ver/extreme-hearts-10"}
          />
        }
      />
      <Route
        path="/ver/extreme-hearts-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/9jucieseh2rb.htm"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Extreme Heart Capitulo 12"}
            tituloPag={"Animekun"}
            anime={"Extreme Heart "}
            numero={"12"}
            capitulosVideo={"/extreme-hearts"}
            anteriorVideo={"/ver/extreme-hearts-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/golden-time-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/xyt861drkkmh.html"}
            contAnteriorClass="disable"
            tituloAnime={"Golden Time Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Golden Time"}
            numero={"1"}
            siguienteVideo={"/ver/golden-time-2"}
            capitulosVideo={"/golden-time"}
          />
        }
      />
      <Route
        path="/ver/golden-time-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/4iy5bq05x7r1.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Golden Time Capitulo 2"}
            tituloPag={"Animekun"}
            anime={"Golden Time "}
            numero={"2"}
            siguienteVideo={"/ver/golden-time-3"}
            capitulosVideo={"/golden-time"}
            anteriorVideo={"/ver/golden-time-1"}
          />
        }
      />
      <Route
        path="/ver/golden-time-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/8hgqwn5l1qdn.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Golden Time Capitulo 3"}
            tituloPag={"Animekun"}
            anime={"Golden Time "}
            numero={"3"}
            siguienteVideo={"/ver/golden-time-4"}
            capitulosVideo={"/golden-time"}
            anteriorVideo={"/ver/golden-time-2"}
          />
        }
      />
      <Route
        path="/ver/golden-time-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/k3x6hle3jp7l.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Golden Time Capitulo 4"}
            tituloPag={"Animekun"}
            anime={"Golden Time "}
            numero={"4"}
            siguienteVideo={"/ver/golden-time-5"}
            capitulosVideo={"/golden-time"}
            anteriorVideo={"/ver/golden-time-3"}
          />
        }
      />
      <Route
        path="/ver/golden-time-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/3cil1rg01vfm.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Golden Time Capitulo 5"}
            tituloPag={"Animekun"}
            anime={"Golden Time "}
            numero={"5"}
            siguienteVideo={"/ver/golden-time-6"}
            capitulosVideo={"/golden-time"}
            anteriorVideo={"/ver/golden-time-4"}
          />
        }
      />
      <Route
        path="/ver/golden-time-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/ngfzf7a46ofu.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Golden Time Capitulo 6"}
            tituloPag={"Animekun"}
            anime={"Golden Time "}
            numero={"6"}
            siguienteVideo={"/ver/golden-time-7"}
            capitulosVideo={"/golden-time"}
            anteriorVideo={"/ver/golden-time-5"}
          />
        }
      />
      <Route
        path="/ver/golden-time-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/zjd4w5byczd3.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Golden Time Capitulo 7"}
            tituloPag={"Animekun"}
            anime={"Golden Time "}
            numero={"7"}
            siguienteVideo={"/ver/golden-time-8"}
            capitulosVideo={"/golden-time"}
            anteriorVideo={"/ver/golden-time-6"}
          />
        }
      />
      <Route
        path="/ver/golden-time-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/l7w7f59t2apm.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Golden TimeCapitulo 8"}
            tituloPag={"Animekun"}
            anime={"Golden Time "}
            numero={"8"}
            siguienteVideo={"/ver/golden-time-9"}
            capitulosVideo={"/golden-time"}
            anteriorVideo={"/ver/golden-time-7"}
          />
        }
      />
      <Route
        path="/ver/golden-time-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/1e9kzias2pd1.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Golden TimeCapitulo 9"}
            tituloPag={"Animekun"}
            anime={"Golden Time "}
            numero={"9"}
            siguienteVideo={"/ver/golden-time-10"}
            capitulosVideo={"/golden-time"}
            anteriorVideo={"/ver/golden-time-8"}
          />
        }
      />
      <Route
        path="/ver/golden-time-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/szp7k6me3ue7.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Golden Time Capitulo 10"}
            tituloPag={"Animekun"}
            anime={"Golden Time "}
            numero={"10"}
            siguienteVideo={"/ver/golden-time-11"}
            capitulosVideo={"/golden-time"}
            anteriorVideo={"/ver/golden-time-9"}
          />
        }
      />
      <Route
        path="/ver/golden-time-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/zuqzdpl8cu95.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Golden Time Capitulo 11"}
            tituloPag={"Animekun"}
            anime={"Golden Time "}
            numero={"11"}
            siguienteVideo={"/ver/golden-time-12"}
            capitulosVideo={"/golden-time"}
            anteriorVideo={"/ver/golden-time-10"}
          />
        }
      />
      <Route
        path="/ver/golden-time-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/ajmpyatdopwe.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Golden Time Capitulo 12"}
            tituloPag={"Animekun"}
            anime={"Golden Time "}
            numero={"12"}
            siguienteVideo={"/ver/golden-time-13"}
            capitulosVideo={"/golden-time"}
            anteriorVideo={"/ver/golden-time-1"}
          />
        }
      />
      <Route
        path="/ver/golden-time-13"
        element={
          <Video
            frame1={"https://sbthe.com/e/7xd7atwwfnkh.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Golden Time Capitulo 13"}
            tituloPag={"Animekun"}
            anime={"Golden Time "}
            numero={"13"}
            siguienteVideo={"/ver/golden-time-14"}
            capitulosVideo={"/golden-time"}
            anteriorVideo={"/ver/golden-time-2"}
          />
        }
      />
      <Route
        path="/ver/golden-time-14"
        element={
          <Video
            frame1={"https://sbthe.com/e/gzai30sxymv9.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Golden Time Capitulo 14"}
            tituloPag={"Animekun"}
            anime={"Golden Time "}
            numero={"14"}
            siguienteVideo={"/ver/golden-time-15"}
            capitulosVideo={"/golden-time"}
            anteriorVideo={"/ver/golden-time-3"}
          />
        }
      />
      <Route
        path="/ver/golden-time-15"
        element={
          <Video
            frame1={"https://sbthe.com/e/wgyei29ce8fe.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Golden Time Capitulo 15"}
            tituloPag={"Animekun"}
            anime={"Golden Time "}
            numero={"15"}
            siguienteVideo={"/ver/golden-time-16"}
            capitulosVideo={"/golden-time"}
            anteriorVideo={"/ver/golden-time-4"}
          />
        }
      />
      <Route
        path="/ver/golden-time-16"
        element={
          <Video
            frame1={"https://sbthe.com/e/9g4fjokqoda2.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Golden Time Capitulo 16"}
            tituloPag={"Animekun"}
            anime={"Golden Time "}
            numero={"16"}
            siguienteVideo={"/ver/golden-time-17"}
            capitulosVideo={"/golden-time"}
            anteriorVideo={"/ver/golden-time-5"}
          />
        }
      />
      <Route
        path="/ver/golden-time-17"
        element={
          <Video
            frame1={"https://sbthe.com/e/g35piflwovgt.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Golden Time Capitulo 17"}
            tituloPag={"Animekun"}
            anime={"Golden Time "}
            numero={"17"}
            siguienteVideo={"/ver/golden-time-18"}
            capitulosVideo={"/golden-time"}
            anteriorVideo={"/ver/golden-time-6"}
          />
        }
      />
      <Route
        path="/ver/golden-time-18"
        element={
          <Video
            frame1={"https://sbthe.com/e/20y5v2mh17h1.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Golden Time Capitulo 18"}
            tituloPag={"Animekun"}
            anime={"Golden Time "}
            numero={"18"}
            siguienteVideo={"/ver/golden-time-19"}
            capitulosVideo={"/golden-time"}
            anteriorVideo={"/ver/golden-time-7"}
          />
        }
      />
      <Route
        path="/ver/golden-time-19"
        element={
          <Video
            frame1={"https://sbthe.com/e/q962ylrysdie.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Golden Time Capitulo 19"}
            tituloPag={"Animekun"}
            anime={"Golden Time "}
            numero={"19"}
            siguienteVideo={"/ver/golden-time-20"}
            capitulosVideo={"/golden-time"}
            anteriorVideo={"/ver/golden-time-8"}
          />
        }
      />
      <Route
        path="/ver/golden-time-20"
        element={
          <Video
            frame1={"https://sbthe.com/e/gh8b26x0byb7.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Golden Time Capitulo 20"}
            tituloPag={"Animekun"}
            anime={"Golden Time "}
            numero={"20"}
            siguienteVideo={"/ver/golden-time-21"}
            capitulosVideo={"/golden-time"}
            anteriorVideo={"/ver/golden-time-9"}
          />
        }
      />
      <Route
        path="/ver/golden-time-21"
        element={
          <Video
            frame1={"https://sbthe.com/e/q8rv3u5cji4i.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Golden Time Capitulo 21"}
            tituloPag={"Animekun"}
            anime={"Golden Time "}
            numero={"21"}
            siguienteVideo={"/ver/golden-time-22"}
            capitulosVideo={"/golden-time"}
            anteriorVideo={"/ver/golden-time-9"}
          />
        }
      />
      <Route
        path="/ver/golden-time-22"
        element={
          <Video
            frame1={"https://sbthe.com/e/38t5r762mk6e.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Golden Time Capitulo 22"}
            tituloPag={"Animekun"}
            anime={"Golden Time "}
            numero={"22"}
            siguienteVideo={"/ver/golden-time-23"}
            capitulosVideo={"/golden-time"}
            anteriorVideo={"/ver/golden-time-10"}
          />
        }
      />
      <Route
        path="/ver/golden-time-23"
        element={
          <Video
            frame1={"https://sbthe.com/e/o93p77h5bgt9.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Golden Time Capitulo 23"}
            tituloPag={"Animekun"}
            anime={"Golden Time "}
            numero={"23"}
            siguienteVideo={"/ver/golden-time-24"}
            capitulosVideo={"/golden-time"}
            anteriorVideo={"/ver/golden-time-10"}
          />
        }
      />
      <Route
        path="/ver/golden-time-24"
        element={
          <Video
            frame1={"https://sbthe.com/e/5g7qqhvll2yx.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Golden Time Capitulo 24"}
            tituloPag={"Animekun"}
            anime={"Golden Time "}
            numero={"24"}
            capitulosVideo={"/golden-time"}
            anteriorVideo={"/ver/golden-time-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/8voksjn8id1o.html"}
            contAnteriorClass="disable"
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Fullmetal Alchemist Brotherhood"}
            numero={"1"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-2"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/ou0cehpvk3hy.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"2"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-3"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-1"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/0j7ez2hu8n95.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"3"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-4"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-2"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/j9g4j0jzemhn.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"4"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-5"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-3"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/68jnczygheey.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"5"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-6"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-4"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/9g05t52b2ras.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"6"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-7"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-5"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/5ivzfbjduvs6.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"7"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-8"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-6"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/xia2080ejho5.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"8"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-9"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-7"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/vwhcdwucilxe.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"9"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-10"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-8"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/oyy1u1i9oev4.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 10"}
            tituloPag={"Animekun"}
            anime={"Fullmetal Alchemist Brotherhood "}
            numero={"10"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-11"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-9"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/mxmkseefpmk7.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 11"}
            tituloPag={"Animekun"}
            anime={"Fullmetal Alchemist Brotherhood "}
            numero={"11"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-12"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-10"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/1nifp8vonoba.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"12"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-13"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-11"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-13"
        element={
          <Video
            frame1={"https://sbthe.com/e/vvplzrewcqfc.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 13"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"13"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-14"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-12"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-14"
        element={
          <Video
            frame1={"https://sbthe.com/e/7opk3ziroqu8.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 14"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"14"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-15"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-13"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-15"
        element={
          <Video
            frame1={"https://sbthe.com/e/n40qla0qe8l6.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 15"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"15"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-16"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-14"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-16"
        element={
          <Video
            frame1={"https://sbthe.com/e/vrxkv8ayhdq7.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 16"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"16"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-17"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-15"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-17"
        element={
          <Video
            frame1={"https://sbthe.com/e/5yt5ie9xf59j.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 17"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"17"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-18"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-16"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-18"
        element={
          <Video
            frame1={"https://sbthe.com/e/badscwk4in2j.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 18"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"18"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-19"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-17"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-19"
        element={
          <Video
            frame1={"https://sbthe.com/e/7qryfh206yt7.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 19"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"19"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-20"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-18"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-20"
        element={
          <Video
            frame1={"https://sbthe.com/e/ybaeomccswzh.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 20"}
            tituloPag={"Animekun"}
            anime={"Fullmetal Alchemist Brotherhood "}
            numero={"20"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-21"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-19"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-21"
        element={
          <Video
            frame1={"https://sbthe.com/e/xd7au1rt1c24.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 21"}
            tituloPag={"Animekun"}
            anime={"Fullmetal Alchemist Brotherhood "}
            numero={"21"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-22"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-20"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-22"
        element={
          <Video
            frame1={"https://sbthe.com/e/2neremox0bmj.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 22"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"22"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-23"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-21"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-23"
        element={
          <Video
            frame1={"https://sbthe.com/e/fdvj470byczq.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 23"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"23"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-24"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-22"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-24"
        element={
          <Video
            frame1={"https://sbthe.com/e/r90yc9kglkq2.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 24"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"24"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-25"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-23"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-25"
        element={
          <Video
            frame1={"https://sbthe.com/e/7lder2sholcd.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 25"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"25"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-26"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-24"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-26"
        element={
          <Video
            frame1={"https://sbthe.com/e/0cz1x448uj4l.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 26"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"26"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-27"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-25"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-27"
        element={
          <Video
            frame1={"https://sbthe.com/e/wmphpb35tcvg.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 27"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"27"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-28"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-26"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-28"
        element={
          <Video
            frame1={"https://sbthe.com/e/irxxv21n5r1k.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 28"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"28"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-29"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-27"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-29"
        element={
          <Video
            frame1={"https://sbthe.com/e/rjbxf7bs3qmj.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 29"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"29"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-30"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-28"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-30"
        element={
          <Video
            frame1={"https://sbthe.com/e/wxlem0sesrip.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 30"}
            tituloPag={"Animekun"}
            anime={"Fullmetal Alchemist Brotherhood "}
            numero={"30"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-31"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-29"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-31"
        element={
          <Video
            frame1={"https://sbthe.com/e/8euyuihfohnq.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 31"}
            tituloPag={"Animekun"}
            anime={"Fullmetal Alchemist Brotherhood "}
            numero={"31"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-32"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-30"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-32"
        element={
          <Video
            frame1={"https://sbthe.com/e/7pit38u3f9nw.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 32"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"32"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-33"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-31"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-33"
        element={
          <Video
            frame1={"https://sbthe.com/e/flfkcu33bmle.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 33"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"33"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-34"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-32"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-34"
        element={
          <Video
            frame1={"https://sbthe.com/e/dm0z2a765vty.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 34"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"34"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-35"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-33"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-35"
        element={
          <Video
            frame1={"https://sbthe.com/e/ovvoe5ucw98s.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 35"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"35"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-36"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-34"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-36"
        element={
          <Video
            frame1={"https://sbthe.com/e/bq0fxo7aibny.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 36"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"36"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-37"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-35"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-37"
        element={
          <Video
            frame1={"https://sbthe.com/e/pyuw5x2r3v99.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 37"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"37"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-38"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-36"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-38"
        element={
          <Video
            frame1={"https://sbthe.com/e/mq3a87fw62ja.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 38"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"38"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-39"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-37"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-39"
        element={
          <Video
            frame1={"https://sbthe.com/e/zc855c0v7ne7.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 39"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"39"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-40"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-38"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-40"
        element={
          <Video
            frame1={"https://sbthe.com/e/iesv5d5tucw5.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 40"}
            tituloPag={"Animekun"}
            anime={"Fullmetal Alchemist Brotherhood "}
            numero={"40"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-41"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-39"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-41"
        element={
          <Video
            frame1={"https://sbthe.com/e/kektj4jbbdl8.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 41"}
            tituloPag={"Animekun"}
            anime={"Fullmetal Alchemist Brotherhood "}
            numero={"41"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-42"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-40"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-42"
        element={
          <Video
            frame1={"https://sbthe.com/e/76z3jhxd5kpd.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 42"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"42"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-43"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-41"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-43"
        element={
          <Video
            frame1={"https://sbthe.com/e/mwo0ichzqtbo.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 43"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"43"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-44"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-42"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-44"
        element={
          <Video
            frame1={"https://sbthe.com/e/3fth4y3egj7b.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 44"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"44"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-45"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-43"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-45"
        element={
          <Video
            frame1={"https://sbthe.com/e/ngeun0idkzac.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 45"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"45"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-46"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-44"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-46"
        element={
          <Video
            frame1={"https://sbthe.com/e/dbpwne8fp1ku.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 46"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"46"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-47"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-45"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-47"
        element={
          <Video
            frame1={"https://sbthe.com/e/co7bi51l6k8c.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 47"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"47"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-48"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-46"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-48"
        element={
          <Video
            frame1={"https://sbthe.com/e/co7bi51l6k8c.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 48"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"48"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-49"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-47"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-49"
        element={
          <Video
            frame1={"https://sbthe.com/e/ujszmhxyv595.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 49"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"49"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-50"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-48"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-50"
        element={
          <Video
            frame1={"https://sbthe.com/e/xebl1leeojnx.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 50"}
            tituloPag={"Animekun"}
            anime={"Fullmetal Alchemist Brotherhood "}
            numero={"50"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-51"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-49"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-51"
        element={
          <Video
            frame1={"https://sbthe.com/e/g02caj2bvo78.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 51"}
            tituloPag={"Animekun"}
            anime={"Fullmetal Alchemist Brotherhood "}
            numero={"51"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-52"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-50"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-52"
        element={
          <Video
            frame1={"https://sbthe.com/e/94nhxxfiltys.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 52"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"52"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-53"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-51"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-53"
        element={
          <Video
            frame1={"https://sbthe.com/e/wt0gg8vbw4u3.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 53"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"53"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-54"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-52"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-54"
        element={
          <Video
            frame1={"https://sbthe.com/e/7elljty9dbcl.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 54"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"54"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-55"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-53"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-55"
        element={
          <Video
            frame1={"https://sbthe.com/e/phjl8yqavh20.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 55"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"55"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-56"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-54"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-56"
        element={
          <Video
            frame1={"https://sbthe.com/e/i44xjsr18gg6.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 56"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"56"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-57"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-55"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-57"
        element={
          <Video
            frame1={"https://sbthe.com/e/0veqxk4z6t50.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 57"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"57"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-58"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-56"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-58"
        element={
          <Video
            frame1={"https://sbthe.com/e/ik6z8b4ljwj4.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 58"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"58"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-59"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-57"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-59"
        element={
          <Video
            frame1={"https://sbthe.com/e/ebmhw461zwz4.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 59"}
            tituloPag={"Animekun"}
            anime={" Fullmetal Alchemist Brotherhood"}
            numero={"59"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-60"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-58"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-60"
        element={
          <Video
            frame1={"https://sbthe.com/e/lincbampo0ue.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 60"}
            tituloPag={"Animekun"}
            anime={"Fullmetal Alchemist Brotherhood "}
            numero={"60"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-61"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-59"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-61"
        element={
          <Video
            frame1={"https://sbthe.com/e/h6t0gera5qpb.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 61"}
            tituloPag={"Animekun"}
            anime={"Fullmetal Alchemist Brotherhood "}
            numero={"61"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-62"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-60"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-62"
        element={
          <Video
            frame1={"https://sbthe.com/e/mdcv1nv467y8.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 62"}
            tituloPag={"Animekun"}
            anime={"Fullmetal Alchemist Brotherhood "}
            numero={"62"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-63"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-61"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-63"
        element={
          <Video
            frame1={"https://sbthe.com/e/o0wp8dt5w58b.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 63"}
            tituloPag={"Animekun"}
            anime={"Fullmetal Alchemist Brotherhood "}
            numero={"63"}
            siguienteVideo={"/ver/fullmetal-alchemist-brotherhood-64"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-62"}
          />
        }
      />
      <Route
        path="/ver/fullmetal-alchemist-brotherhood-64"
        element={
          <Video
            frame1={"https://sbthe.com/e/mpci32sa3gg0.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Fullmetal Alchemist Brotherhood Capitulo 64"}
            tituloPag={"Animekun"}
            anime={"Fullmetal Alchemist Brotherhood "}
            numero={"64"}
            capitulosVideo={"/fullmetal-alchemist-brotherhood"}
            anteriorVideo={"/ver/fullmetal-alchemist-brotherhood-63"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/d6xups0i6vm6.html"}
            contAnteriorClass="disable"
            tituloAnime={
              "Muhyo to Rouji no Mahouritsu Soudan Jumusho Capitulo 1"
            }
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Muhyo to Rouji no Mahouritsu Soudan Jumusho"}
            numero={"1"}
            siguienteVideo={
              "/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-2"
            }
            capitulosVideo={"/muhyo-to-rouji-no-mahouritsu-soudan-jimusho"}
          />
        }
      />
      <Route
        path="/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/i5ayt77utywu.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Muhyo to Rouji no Mahouritsu Soudan Jumusho Capitulo 2"
            }
            tituloPag={"Animekun"}
            anime={"Muhyo to Rouji no Mahouritsu Soudan Jumusho "}
            numero={"2"}
            siguienteVideo={
              "/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-3"
            }
            capitulosVideo={"/muhyo-to-rouji-no-mahouritsu-soudan-jimusho"}
            anteriorVideo={"/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-1"}
          />
        }
      />
      <Route
        path="/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/imdq78378g9m.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Muhyo to Rouji no Mahouritsu Soudan Jumusho Capitulo 3"
            }
            tituloPag={"Animekun"}
            anime={"Muhyo to Rouji no Mahouritsu Soudan Jumusho "}
            numero={"3"}
            siguienteVideo={
              "/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-4"
            }
            capitulosVideo={"/muhyo-to-rouji-no-mahouritsu-soudan-jimusho"}
            anteriorVideo={"/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-2"}
          />
        }
      />
      <Route
        path="/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/7zc5npbii40w.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Muhyo to Rouji no Mahouritsu Soudan Jumusho Capitulo 4"
            }
            tituloPag={"Animekun"}
            anime={"Muhyo to Rouji no Mahouritsu Soudan Jumusho "}
            numero={"4"}
            siguienteVideo={
              "/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-5"
            }
            capitulosVideo={"/muhyo-to-rouji-no-mahouritsu-soudan-jimusho"}
            anteriorVideo={"/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-3"}
          />
        }
      />
      <Route
        path="/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/ebv1bbozz39j.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Muhyo to Rouji no Mahouritsu Soudan Jumusho Capitulo 5"
            }
            tituloPag={"Animekun"}
            anime={"Muhyo to Rouji no Mahouritsu Soudan Jumusho "}
            numero={"5"}
            siguienteVideo={
              "/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-6"
            }
            capitulosVideo={"/muhyo-to-rouji-no-mahouritsu-soudan-jimusho"}
            anteriorVideo={"/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-4"}
          />
        }
      />
      <Route
        path="/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/52jhe1b8q07b.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Muhyo to Rouji no Mahouritsu Soudan Jumusho Capitulo 6"
            }
            tituloPag={"Animekun"}
            anime={"Muhyo to Rouji no Mahouritsu Soudan Jumusho "}
            numero={"6"}
            siguienteVideo={
              "/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-7"
            }
            capitulosVideo={"/muhyo-to-rouji-no-mahouritsu-soudan-jimusho"}
            anteriorVideo={"/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-5"}
          />
        }
      />
      <Route
        path="/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/h0kdrlwubkn7.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Muhyo to Rouji no Mahouritsu Soudan Jumusho Capitulo 7"
            }
            tituloPag={"Animekun"}
            anime={"Muhyo to Rouji no Mahouritsu Soudan Jumusho "}
            numero={"7"}
            siguienteVideo={
              "/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-8"
            }
            capitulosVideo={"/muhyo-to-rouji-no-mahouritsu-soudan-jimusho"}
            anteriorVideo={"/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-6"}
          />
        }
      />
      <Route
        path="/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/8js1oi9hnbnq.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Muhyo to Rouji no Mahouritsu Soudan Jumusho Capitulo 8"
            }
            tituloPag={"Animekun"}
            anime={"Muhyo to Rouji no Mahouritsu Soudan Jumusho "}
            numero={"8"}
            siguienteVideo={
              "/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-9"
            }
            capitulosVideo={"/muhyo-to-rouji-no-mahouritsu-soudan-jimusho"}
            anteriorVideo={"/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-7"}
          />
        }
      />
      <Route
        path="/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/ki54o8gfgydz.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Muhyo to Rouji no Mahouritsu Soudan Jumusho Capitulo 9"
            }
            tituloPag={"Animekun"}
            anime={"Muhyo to Rouji no Mahouritsu Soudan Jumusho "}
            numero={"9"}
            siguienteVideo={
              "/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-10"
            }
            capitulosVideo={"/muhyo-to-rouji-no-mahouritsu-soudan-jimusho"}
            anteriorVideo={"/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-8"}
          />
        }
      />
      <Route
        path="/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/qnwn4tesjnta.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Muhyo to Rouji no Mahouritsu Soudan Jumusho Capitulo 10"
            }
            tituloPag={"Animekun"}
            anime={"Muhyo to Rouji no Mahouritsu Soudan Jumusho "}
            numero={"10"}
            siguienteVideo={
              "/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-11"
            }
            capitulosVideo={"/muhyo-to-rouji-no-mahouritsu-soudan-jimusho"}
            anteriorVideo={"/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-9"}
          />
        }
      />
      <Route
        path="/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/v9qrcbbttppw.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={
              "Muhyo to Rouji no Mahouritsu Soudan Jumusho Capitulo 11"
            }
            tituloPag={"Animekun"}
            anime={"Muhyo to Rouji no Mahouritsu Soudan Jumusho "}
            numero={"11"}
            siguienteVideo={
              "/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-12"
            }
            capitulosVideo={"/muhyo-to-rouji-no-mahouritsu-soudan-jimusho"}
            anteriorVideo={
              "/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-10"
            }
          />
        }
      />
      <Route
        path="/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/uff97al6di6v.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={
              "Muhyo to Rouji no Mahouritsu Soudan Jumusho Capitulo 12"
            }
            tituloPag={"Animekun"}
            anime={"Muhyo to Rouji no Mahouritsu Soudan Jumusho "}
            numero={"12"}
            capitulosVideo={"/muhyo-to-rouji-no-mahouritsu-soudan-jimusho"}
            anteriorVideo={
              "/ver/muhyo-to-rouji-no-mahouritsu-soudan-jimusho-11"
            }
          />
        }
      />
      ----------------
      <Route
        path="/ver/sabikui-bisco-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/6t7xanow5wak.html"}
            contAnteriorClass="disable"
            tituloAnime={"Sabikui Bisco Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Sabikui Bisco"}
            numero={"1"}
            siguienteVideo={"/ver/sabikui-bisco-2"}
            capitulosVideo={"/sabikui-bisco"}
          />
        }
      />
      <Route
        path="/ver/sabikui-bisco-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/wfxjhtlwozar.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Sabikui Bisco Capitulo 2"}
            tituloPag={"Animekun"}
            anime={"Sabikui Bisco "}
            numero={"2"}
            siguienteVideo={"/ver/sabikui-bisco-3"}
            capitulosVideo={"/sabikui-bisco"}
            anteriorVideo={"/ver/sabikui-bisco-1"}
          />
        }
      />
      <Route
        path="/ver/sabikui-bisco-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/e8wjtj3s8b10.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Sabikui Bisco Capitulo 3"}
            tituloPag={"Animekun"}
            anime={"Sabikui Bisco "}
            numero={"3"}
            siguienteVideo={"/ver/sabikui-bisco-4"}
            capitulosVideo={"/sabikui-bisco"}
            anteriorVideo={"/ver/sabikui-bisco-2"}
          />
        }
      />
      <Route
        path="/ver/sabikui-bisco-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/zlplom06gvpc.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/sabikui-bisco-5"}
            capitulosVideo={"/sabikui-bisco"}
            anteriorVideo={"/ver/sabikui-bisco-3"}
          />
        }
      />
      <Route
        path="/ver/sabikui-bisco-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/wtcrig6tpexu.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Sabikui Bisco Capitulo 5"}
            tituloPag={"Animekun"}
            anime={"Sabikui Bisco "}
            numero={"5"}
            siguienteVideo={"/ver/sabikui-bisco-6"}
            capitulosVideo={"/sabikui-bisco"}
            anteriorVideo={"/ver/sabikui-bisco-4"}
          />
        }
      />
      <Route
        path="/ver/sabikui-bisco-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/yavtbbqx1kro.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Sabikui Bisco Capitulo 6"}
            tituloPag={"Animekun"}
            anime={"Sabikui Bisco "}
            numero={"6"}
            siguienteVideo={"/ver/sabikui-bisco-7"}
            capitulosVideo={"/sabikui-bisco"}
            anteriorVideo={"/ver/sabikui-bisco-5"}
          />
        }
      />
      <Route
        path="/ver/sabikui-bisco-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/an9dh3qehycc.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Sabikui Bisco Capitulo 7"}
            tituloPag={"Animekun"}
            anime={"Sabikui Bisco "}
            numero={"7"}
            siguienteVideo={"/ver/sabikui-bisco-8"}
            capitulosVideo={"/sabikui-bisco"}
            anteriorVideo={"/ver/sabikui-bisco-6"}
          />
        }
      />
      <Route
        path="/ver/sabikui-bisco-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/6hwja9y1cqb7.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Sabikui Bisco Capitulo 8"}
            tituloPag={"Animekun"}
            anime={"Sabikui Bisco "}
            numero={"8"}
            siguienteVideo={"/ver/sabikui-bisco-9"}
            capitulosVideo={"/sabikui-bisco"}
            anteriorVideo={"/ver/sabikui-bisco-7"}
          />
        }
      />
      <Route
        path="/ver/sabikui-bisco-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/xjfan6jsabll.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Sabikui Bisco Capitulo 9"}
            tituloPag={"Animekun"}
            anime={"Sabikui Bisco "}
            numero={"9"}
            siguienteVideo={"/ver/sabikui-bisco-10"}
            capitulosVideo={"/sabikui-bisco"}
            anteriorVideo={"/ver/sabikui-bisco-8"}
          />
        }
      />
      <Route
        path="/ver/sabikui-bisco-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/3qgvn0rna344.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Sabikui Bisco Capitulo 10"}
            tituloPag={"Animekun"}
            anime={"Sabikui Bisco "}
            numero={"10"}
            siguienteVideo={"/ver/sabikui-bisco-11"}
            capitulosVideo={"/sabikui-bisco"}
            anteriorVideo={"/ver/sabikui-bisco-9"}
          />
        }
      />
      <Route
        path="/ver/sabikui-bisco-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/b4miwagj2klz.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Sabikui Bisco Capitulo 11"}
            tituloPag={"Animekun"}
            anime={"Sabikui Bisco "}
            numero={"11"}
            siguienteVideo={"/ver/sabikui-bisco-12"}
            capitulosVideo={"/sabikui-bisco"}
            anteriorVideo={"/ver/sabikui-bisco-10"}
          />
        }
      />
      <Route
        path="/ver/sabikui-bisco-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/dqeqyf9phvxw.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Sabikui Bisco Capitulo 12"}
            tituloPag={"Animekun"}
            anime={"Sabikui Bisco "}
            numero={"12"}
            capitulosVideo={"/sabikui-bisco"}
            anteriorVideo={"/ver/sabikui-bisco-11"}
          />
        }
      />
      ---------------- ----------------
      <Route
        path="/ver/kuroshi-ai-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={"Koroshi Ai Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Koroshi Ai"}
            numero={"1"}
            siguienteVideo={"/ver/kuroshi-ai-2"}
            capitulosVideo={"/kuroshi-ai"}
          />
        }
      />
      <Route
        path="/ver/kuroshi-ai-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Koroshi Ai Capitulo 2"}
            tituloPag={"Animekun"}
            anime={"Koroshi Ai "}
            numero={"2"}
            siguienteVideo={"/ver/kuroshi-ai-3"}
            capitulosVideo={"/kuroshi-ai"}
            anteriorVideo={"/ver/kuroshi-ai-1"}
          />
        }
      />
      <Route
        path="/ver/kuroshi-ai-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Koroshi Ai Capitulo 3"}
            tituloPag={"Animekun"}
            anime={"Koroshi Ai "}
            numero={"3"}
            siguienteVideo={"/ver/kuroshi-ai-4"}
            capitulosVideo={"/kuroshi-ai"}
            anteriorVideo={"/ver/kuroshi-ai-2"}
          />
        }
      />
      <Route
        path="/ver/kuroshi-ai-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Koroshi Ai Capitulo 4"}
            tituloPag={"Animekun"}
            anime={"Koroshi Ai "}
            numero={"4"}
            siguienteVideo={"/ver/kuroshi-ai-5"}
            capitulosVideo={"/kuroshi-ai"}
            anteriorVideo={"/ver/kuroshi-ai-3"}
          />
        }
      />
      <Route
        path="/ver/kuroshi-ai-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Koroshi Ai Capitulo 5"}
            tituloPag={"Animekun"}
            anime={"Koroshi Ai "}
            numero={"5"}
            siguienteVideo={"/ver/kuroshi-ai-6"}
            capitulosVideo={"/kuroshi-ai"}
            anteriorVideo={"/ver/kuroshi-ai-4"}
          />
        }
      />
      <Route
        path="/ver/kuroshi-ai-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Koroshi Ai Capitulo 6"}
            tituloPag={"Animekun"}
            anime={"Koroshi Ai "}
            numero={"6"}
            siguienteVideo={"/ver/kuroshi-ai-7"}
            capitulosVideo={"/kuroshi-ai"}
            anteriorVideo={"/ver/kuroshi-ai-5"}
          />
        }
      />
      <Route
        path="/ver/kuroshi-ai-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Koroshi Ai Capitulo 7"}
            tituloPag={"Animekun"}
            anime={"Koroshi Ai "}
            numero={"7"}
            siguienteVideo={"/ver/kuroshi-ai-8"}
            capitulosVideo={"/kuroshi-ai"}
            anteriorVideo={"/ver/kuroshi-ai-6"}
          />
        }
      />
      <Route
        path="/ver/kuroshi-ai-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Koroshi Ai Capitulo 8"}
            tituloPag={"Animekun"}
            anime={"Koroshi Ai "}
            numero={"8"}
            siguienteVideo={"/ver/kuroshi-ai-9"}
            capitulosVideo={"/kuroshi-ai"}
            anteriorVideo={"/ver/kuroshi-ai-7"}
          />
        }
      />
      <Route
        path="/ver/kuroshi-ai-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Koroshi Ai Capitulo 9"}
            tituloPag={"Animekun"}
            anime={"Koroshi Ai "}
            numero={"9"}
            siguienteVideo={"/ver/kuroshi-ai-10"}
            capitulosVideo={"/kuroshi-ai"}
            anteriorVideo={"/ver/kuroshi-ai-8"}
          />
        }
      />
      <Route
        path="/ver/kuroshi-ai-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Koroshi Ai Capitulo 10"}
            tituloPag={"Animekun"}
            anime={"Koroshi Ai "}
            numero={"10"}
            siguienteVideo={"/ver/kuroshi-ai-11"}
            capitulosVideo={"/kuroshi-ai"}
            anteriorVideo={"/ver/kuroshi-ai-9"}
          />
        }
      />
      <Route
        path="/ver/kuroshi-ai-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Koroshi Ai Capitulo 11"}
            tituloPag={"Animekun"}
            anime={"Koroshi Ai "}
            numero={"11"}
            siguienteVideo={"/ver/kuroshi-ai-12"}
            capitulosVideo={"/kuroshi-ai"}
            anteriorVideo={"/ver/kuroshi-ai-10"}
          />
        }
      />
      <Route
        path="/ver/kuroshi-ai-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Koroshi Ai Capitulo 12"}
            tituloPag={"Animekun"}
            anime={"Koroshi Ai "}
            numero={"12"}
            capitulosVideo={"/kuroshi-ai"}
            anteriorVideo={"/ver/kuroshi-ai-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/tribe-nine-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/mv8uyfa88934.html"}
            contAnteriorClass="disable"
            tituloAnime={"Tribe Nine Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Tribe Nine"}
            numero={"1"}
            siguienteVideo={"/ver/tribe-nine-2"}
            capitulosVideo={"/tribe-nine"}
          />
        }
      />
      <Route
        path="/ver/tribe-nine-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/jprq3gtysv64.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Tribe Nine Capitulo 2"}
            tituloPag={"Animekun"}
            anime={"Tribe Nine "}
            numero={"2"}
            siguienteVideo={"/ver/tribe-nine-3"}
            capitulosVideo={"/tribe-nine"}
            anteriorVideo={"/ver/tribe-nine-1"}
          />
        }
      />
      <Route
        path="/ver/tribe-nine-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/3f1p5isr2bld.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Tribe Nine Capitulo 3"}
            tituloPag={"Animekun"}
            anime={"Tribe Nine "}
            numero={"3"}
            siguienteVideo={"/ver/tribe-nine-4"}
            capitulosVideo={"/tribe-nine"}
            anteriorVideo={"/ver/tribe-nine-2"}
          />
        }
      />
      <Route
        path="/ver/tribe-nine-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/76lwnib7jx1.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Tribe Nine Capitulo 4"}
            tituloPag={"Animekun"}
            anime={"Tribe Nine "}
            numero={"4"}
            siguienteVideo={"/ver/tribe-nine-5"}
            capitulosVideo={"/tribe-nine"}
            anteriorVideo={"/ver/tribe-nine-3"}
          />
        }
      />
      <Route
        path="/ver/tribe-nine-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/vqsk5dox9uau.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Tribe Nine Capitulo 5"}
            tituloPag={"Animekun"}
            anime={"Tribe Nine "}
            numero={"5"}
            siguienteVideo={"/ver/tribe-nine-6"}
            capitulosVideo={"/tribe-nine"}
            anteriorVideo={"/ver/tribe-nine-4"}
          />
        }
      />
      <Route
        path="/ver/tribe-nine-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/9lgkmhulrfbr.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Tribe Nine Capitulo 6"}
            tituloPag={"Animekun"}
            anime={"Tribe Nine "}
            numero={"6"}
            siguienteVideo={"/ver/tribe-nine-7"}
            capitulosVideo={"/tribe-nine"}
            anteriorVideo={"/ver/tribe-nine-5"}
          />
        }
      />
      <Route
        path="/ver/tribe-nine-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/007maj37e2h0.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Tribe Nine Capitulo 7"}
            tituloPag={"Animekun"}
            anime={"Tribe Nine "}
            numero={"7"}
            siguienteVideo={"/ver/tribe-nine-8"}
            capitulosVideo={"/tribe-nine"}
            anteriorVideo={"/ver/tribe-nine-6"}
          />
        }
      />
      <Route
        path="/ver/tribe-nine-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/7j22qa8xpktn.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Tribe Nine Capitulo 8"}
            tituloPag={"Animekun"}
            anime={"Tribe Nine "}
            numero={"8"}
            siguienteVideo={"/ver/tribe-nine-9"}
            capitulosVideo={"/tribe-nine"}
            anteriorVideo={"/ver/tribe-nine-7"}
          />
        }
      />
      <Route
        path="/ver/tribe-nine-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/8drooc7tgwle.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Tribe Nine Capitulo 9"}
            tituloPag={"Animekun"}
            anime={"Tribe Nine "}
            numero={"9"}
            siguienteVideo={"/ver/tribe-nine-10"}
            capitulosVideo={"/tribe-nine"}
            anteriorVideo={"/ver/tribe-nine-8"}
          />
        }
      />
      <Route
        path="/ver/tribe-nine-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/upoqmhxnc152.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Tribe Nine Capitulo 10"}
            tituloPag={"Animekun"}
            anime={"Tribe Nine "}
            numero={"10"}
            siguienteVideo={"/ver/tribe-nine-11"}
            capitulosVideo={"/tribe-nine"}
            anteriorVideo={"/ver/tribe-nine-9"}
          />
        }
      />
      <Route
        path="/ver/tribe-nine-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/sap20wubvy53.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Tribe Nine Capitulo 11"}
            tituloPag={"Animekun"}
            anime={"Tribe Nine "}
            numero={"11"}
            siguienteVideo={"/ver/tribe-nine-12"}
            capitulosVideo={"/tribe-nine"}
            anteriorVideo={"/ver/tribe-nine-10"}
          />
        }
      />
      <Route
        path="/ver/tribe-nine-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/ui1vmsjlz346.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Tribe Nine Capitulo 12"}
            tituloPag={"Animekun"}
            anime={"Tribe Nine "}
            numero={"12"}
            capitulosVideo={"/tribe-nine"}
            anteriorVideo={"/ver/tribe-nine-11"}
          />
        }
      />
      ---------------- ----------------
      <Route
        path="/ver/gensou-sangokushi-tengen-reishink-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/288o4oewqa5q.html"}
            contAnteriorClass="disable"
            tituloAnime={"Gensou Sangokushi Tengen Reishink Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Gensou Sangokushi Tengen Reishink"}
            numero={"1"}
            siguienteVideo={"/ver/gensou-sangokushi-tengen-reishink-2"}
            capitulosVideo={"/gensou-sangokushi-tengen-reishink"}
          />
        }
      />
      <Route
        path="/ver/gensou-sangokushi-tengen-reishink-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/yjppmkx7jgpk.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Gensou Sangokushi Tengen Reishink Capitulo 2"}
            tituloPag={"Animekun"}
            anime={"Gensou Sangokushi Tengen Reishink "}
            numero={"2"}
            siguienteVideo={"/ver/gensou-sangokushi-tengen-reishink-3"}
            capitulosVideo={"/gensou-sangokushi-tengen-reishink"}
            anteriorVideo={"/ver/gensou-sangokushi-tengen-reishink-1"}
          />
        }
      />
      <Route
        path="/ver/gensou-sangokushi-tengen-reishink-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/icvg4elkeuhp.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Gensou Sangokushi Tengen Reishink Capitulo 3"}
            tituloPag={"Animekun"}
            anime={"Gensou Sangokushi Tengen Reishink "}
            numero={"3"}
            siguienteVideo={"/ver/gensou-sangokushi-tengen-reishink-4"}
            capitulosVideo={"/gensou-sangokushi-tengen-reishink"}
            anteriorVideo={"/ver/gensou-sangokushi-tengen-reishink-2"}
          />
        }
      />
      <Route
        path="/ver/gensou-sangokushi-tengen-reishink-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/un2o6o7njjn8.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Gensou Sangokushi Tengen Reishink Capitulo 4"}
            tituloPag={"Animekun"}
            anime={"Gensou Sangokushi Tengen Reishink "}
            numero={"4"}
            siguienteVideo={"/ver/gensou-sangokushi-tengen-reishink-5"}
            capitulosVideo={"/gensou-sangokushi-tengen-reishink"}
            anteriorVideo={"/ver/gensou-sangokushi-tengen-reishink-3"}
          />
        }
      />
      <Route
        path="/ver/gensou-sangokushi-tengen-reishink-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/54o0384gjcm0.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Gensou Sangokushi Tengen Reishink Capitulo 5"}
            tituloPag={"Animekun"}
            anime={"Gensou Sangokushi Tengen Reishink "}
            numero={"5"}
            siguienteVideo={"/ver/gensou-sangokushi-tengen-reishink-6"}
            capitulosVideo={"/gensou-sangokushi-tengen-reishink"}
            anteriorVideo={"/ver/gensou-sangokushi-tengen-reishink-4"}
          />
        }
      />
      <Route
        path="/ver/gensou-sangokushi-tengen-reishink-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/nqg8iz72ohwt.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Gensou Sangokushi Tengen Reishink Capitulo 6"}
            tituloPag={"Animekun"}
            anime={"Gensou Sangokushi Tengen Reishink "}
            numero={"6"}
            siguienteVideo={"/ver/gensou-sangokushi-tengen-reishink-7"}
            capitulosVideo={"/gensou-sangokushi-tengen-reishink"}
            anteriorVideo={"/ver/gensou-sangokushi-tengen-reishink-5"}
          />
        }
      />
      <Route
        path="/ver/gensou-sangokushi-tengen-reishink-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/vol89ymv96ut.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Gensou Sangokushi Tengen Reishink Capitulo 7"}
            tituloPag={"Animekun"}
            anime={"Gensou Sangokushi Tengen Reishink "}
            numero={"7"}
            siguienteVideo={"/ver/gensou-sangokushi-tengen-reishink-8"}
            capitulosVideo={"/gensou-sangokushi-tengen-reishink"}
            anteriorVideo={"/ver/gensou-sangokushi-tengen-reishink-6"}
          />
        }
      />
      <Route
        path="/ver/gensou-sangokushi-tengen-reishink-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/vn8jhllw67i5.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Gensou Sangokushi Tengen Reishink Capitulo 8"}
            tituloPag={"Animekun"}
            anime={"Gensou Sangokushi Tengen Reishink "}
            numero={"8"}
            siguienteVideo={"/ver/gensou-sangokushi-tengen-reishink-9"}
            capitulosVideo={"/gensou-sangokushi-tengen-reishink"}
            anteriorVideo={"/ver/gensou-sangokushi-tengen-reishink-7"}
          />
        }
      />
      <Route
        path="/ver/gensou-sangokushi-tengen-reishink-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/5q5623rjklk0.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Gensou Sangokushi Tengen Reishink Capitulo 9"}
            tituloPag={"Animekun"}
            anime={"Gensou Sangokushi Tengen Reishink "}
            numero={"9"}
            siguienteVideo={"/ver/gensou-sangokushi-tengen-reishink-10"}
            capitulosVideo={"/gensou-sangokushi-tengen-reishink"}
            anteriorVideo={"/ver/gensou-sangokushi-tengen-reishink-8"}
          />
        }
      />
      <Route
        path="/ver/gensou-sangokushi-tengen-reishink-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/g8ar3a1crj7s.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Gensou Sangokushi Tengen Reishink Capitulo 10"}
            tituloPag={"Animekun"}
            anime={"Gensou Sangokushi Tengen Reishink "}
            numero={"10"}
            siguienteVideo={"/ver/gensou-sangokushi-tengen-reishink-11"}
            capitulosVideo={"/gensou-sangokushi-tengen-reishink"}
            anteriorVideo={"/ver/gensou-sangokushi-tengen-reishink-9"}
          />
        }
      />
      <Route
        path="/ver/gensou-sangokushi-tengen-reishink-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/inq38pbdr3sh.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Gensou Sangokushi Tengen Reishink Capitulo 11"}
            tituloPag={"Animekun"}
            anime={"Gensou Sangokushi Tengen Reishink"}
            numero={"11"}
            siguienteVideo={"/ver/gensou-sangokushi-tengen-reishink-12"}
            capitulosVideo={"/gensou-sangokushi-tengen-reishink"}
            anteriorVideo={"/ver/gensou-sangokushi-tengen-reishink-10"}
          />
        }
      />
      <Route
        path="/ver/gensou-sangokushi-tengen-reishink-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/va5adqnokk5i.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Gensou Sangokushi Tengen Reishink Capitulo 12"}
            tituloPag={"Animekun"}
            anime={"Gensou Sangokushi Tengen Reishink "}
            numero={"12"}
            capitulosVideo={"/gensou-sangokushi-tengen-reishink"}
            anteriorVideo={"/ver/gensou-sangokushi-tengen-reishink-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/spy-x-family-2nd-temporada-1"
        element={
          <Video
            frame1={"https://sblanh.com/e/m4kppghr5mpf.html"}
            contAnteriorClass="disable"
            tituloAnime={"Spy x Family 2nd temporada Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            }
            tituloPag={"Animekun"}
            anime={"Spy x Family 2nd Temporada"}
            numero={"1"}
            siguienteVideo={"/ver/spy-x-family-2nd-temporada-2"}
            capitulosVideo={"/spy-x-family-2nd-temporada"}
          />
        }
      />
      <Route
        path="/ver/spy-x-family-2nd-temporada-2"
        element={
          <Video
            frame1={"https://sbanh.com/e/iax1kh5jmlw2.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            }
            tituloAnime={"Spy x Family 2nd Temporada Capitulo 2"}
            anime={"Spy x Family 2nd Temporada "}
            numero={"2"}
            siguienteVideo={"/ver/spy-x-family-2nd-temporada-3"}
            capitulosVideo={"/spy-x-family-2nd-temporada"}
            anteriorVideo={"/ver/spy-x-family-2nd-temporada-1"}
          />
        }
      />
      <Route
        path="/ver/spy-x-family-2nd-temporada-3"
        element={
          <Video
            frame1={"https://sbanh.com/e/duqs5x463y25.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            }
            tituloAnime={"Spy x Family 2nd Temporada Capitulo 3"}
            anime={"Spy x Family 2nd Temporada "}
            numero={"3"}
            siguienteVideo={"/ver/spy-x-family-2nd-temporada-4"}
            capitulosVideo={"/spy-x-family-2nd-temporada"}
            anteriorVideo={"/ver/spy-x-family-2nd-temporada-2"}
          />
        }
      />
      <Route
        path="/ver/spy-x-family-2nd-temporada-4"
        element={
          <Video
            frame1={"https://sbanh.com/e/rnk00xkiayzx.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            }
            tituloAnime={"Spy x Family 2nd Temporada Capitulo 4"}
            tituloPag={"Animekun"}
            anime={"Spy x Family 2nd Temporada "}
            numero={"4"}
            siguienteVideo={"/ver/spy-x-family-2nd-temporada-5"}
            capitulosVideo={"/spy-x-family-2nd-temporada"}
            anteriorVideo={"/ver/spy-x-family-2nd-temporada-3"}
          />
        }
      />
      <Route
        path="/ver/spy-x-family-2nd-temporada-5"
        element={
          <Video
            frame1={"https://sblongvu.com/e/2si4dqjyi17f.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            }
            tituloAnime={"Spy x Family 2nd Temporada Capitulo 5"}
            tituloPag={"Animekun"}
            anime={"Spy x Family 2nd Temporada "}
            numero={"5"}
            siguienteVideo={"/ver/spy-x-family-2nd-temporada-6"}
            capitulosVideo={"/spy-x-family-2nd-temporada"}
            anteriorVideo={"/ver/spy-x-family-2nd-temporada-4"}
          />
        }
      />
      <Route
        path="/ver/spy-x-family-2nd-temporada-6"
        element={
          <Video
            frame1={"https://sblongvu.com/e/4s3txnlub5ir.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            }
            tituloAnime={"Spy x Family 2nd Temporada Capitulo 6"}
            tituloPag={"Animekun"}
            anime={"Spy x Family 2nd Temporada "}
            numero={"6"}
            siguienteVideo={"/ver/spy-x-family-2nd-temporada-7"}
            capitulosVideo={"/spy-x-family-2nd-temporada"}
            anteriorVideo={"/ver/spy-x-family-2nd-temporada-5"}
          />
        }
      />
      <Route
        path="/ver/spy-x-family-2nd-temporada-7"
        element={
          <Video
            frame1={"https://sblongvu.com/e/c8655zli44rf.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Spy x Family 2nd Temporada Capitulo 7"}
            anime={"Spy x Family 2nd Temporada "}
            numero={"7"}
            siguienteVideo={"/ver/spy-x-family-2nd-temporada-8"}
            capitulosVideo={"/spy-x-family-2nd-temporada"}
            anteriorVideo={"/ver/spy-x-family-2nd-temporada-6"}
          />
        }
      />
      <Route
        path="/ver/spy-x-family-2nd-temporada-8"
        element={
          <Video
            frame1={"https://sblongvu.com/e/z4m7wb3adp0v.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Spy x Family 2nd Temporada Capitulo 8"}
            anime={"Spy x Family 2nd Temporada "}
            numero={"8"}
            siguienteVideo={"/ver/spy-x-family-2nd-temporada-9"}
            capitulosVideo={"/spy-x-family-2nd-temporada"}
            anteriorVideo={"/ver/spy-x-family-2nd-temporada-7"}
          />
        }
      />
      <Route
        path="/ver/spy-x-family-2nd-temporada-9"
        element={
          <Video
            frame1={"https://sblongvu.com/e/4c6cd2pdewik.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Spy x Family 2nd Temporada Capitulo 9"}
            anime={"Spy x Family 2nd Temporada "}
            numero={"9"}
            siguienteVideo={"/ver/spy-x-family-2nd-temporada-10"}
            capitulosVideo={"/spy-x-family-2nd-temporada"}
            anteriorVideo={"/ver/spy-x-family-2nd-temporada-8"}
          />
        }
      />
      <Route
        path="/ver/spy-x-family-2nd-temporada-10"
        element={
          <Video
            frame1={"https://sblongvu.com/e/pk1nah92r61y.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Spy x Family 2nd Temporada Capitulo 10"}
            anime={"Spy x Family 2nd Temporada "}
            numero={"10"}
            siguienteVideo={"/ver/spy-x-family-2nd-temporada-11"}
            capitulosVideo={"/spy-x-family-2nd-temporada"}
            anteriorVideo={"/ver/spy-x-family-2nd-temporada-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Spy x Family 2nd Temporada Capitulo 11"}
            anime={"Spy x Family 2nd Temporada "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ---------------- ----------------
      <Route
        path="/ver/mob-psycho-100-III-1"
        element={
          <Video
            frame1={"https://sbanh.com/e/ytbhr4qicr5y.html"}
            contAnteriorClass="disable"
            tituloAnime={"Mob Pyscho 100 III Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            }
            anime={"Mob Psycho 100 III"}
            numero={"1"}
            siguienteVideo={"/ver/mob-psycho-100-III-2"}
            capitulosVideo={"/mob-psycho-100-III"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-III-2"
        element={
          <Video
            frame1={"https://sbanh.com/e/qs4jajqkebhq.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            }
            tituloAnime={"Mob Psycho 100 III Capitulo 2"}
            anime={"Mob Psycho 100 III "}
            numero={"2"}
            siguienteVideo={"/ver/mob-psycho-100-III-3"}
            capitulosVideo={"/mob-psycho-100-III"}
            anteriorVideo={"/ver/mob-psycho-100-III-1"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-III-3"
        element={
          <Video
            frame1={"https://sbanh.com/e/ug0tktbfudel.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            }
            tituloAnime={"Mob Psycho 100 III Capitulo 3"}
            anime={"Mob Psycho 100 III "}
            numero={"3"}
            siguienteVideo={"/ver/mob-psycho-100-III-4"}
            capitulosVideo={"/mob-psycho-100-III"}
            anteriorVideo={"/ver/mob-psycho-100-III-2"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-III-4"
        element={
          <Video
            frame1={"https://sbanh.com/e/urzwcad0ioxm.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Psycho 100 III Capitulo 4"}
            tituloPag={"Animekun"}
            anime={"Mob Psycho 100 III "}
            numero={"4"}
            siguienteVideo={"/ver/mob-psycho-100-III-5"}
            capitulosVideo={"/mob-psycho-100-III"}
            anteriorVideo={"/ver/mob-psycho-100-III-3"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-III-5"
        element={
          <Video
            frame1={"https://sbanh.com/e/j8h77qwzcwwk.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Psycho 100 III Capitulo 5"}
            tituloPag={"Animekun"}
            anime={"Mob Psycho 100 III "}
            numero={"5"}
            siguienteVideo={"/ver/mob-psycho-100-III-6"}
            capitulosVideo={"/mob-psycho-100-III"}
            anteriorVideo={"/ver/mob-psycho-100-III-4"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-III-6"
        element={
          <Video
            frame1={"https://sbanh.com/e/9n7l2f2v1e6r.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Psycho 100 III Capitulo 6"}
            tituloPag={"Animekun"}
            anime={"Mob Psycho 100 III"}
            numero={"6"}
            siguienteVideo={"/ver/mob-psycho-100-III-7"}
            capitulosVideo={"/mob-psycho-100-III"}
            anteriorVideo={"/ver/mob-psycho-100-III-5"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-III-7"
        element={
          <Video
            frame1={"https://sblongvu.com/e/rnkzfsraqu7a.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Psycho 100 III Capitulo 7"}
            anime={"Mob Psycho 100 III "}
            numero={"7"}
            siguienteVideo={"/ver/mob-psycho-100-III-8"}
            capitulosVideo={"/mob-psycho-100-III"}
            anteriorVideo={"/ver/mob-psycho-100-III-6"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-III-8"
        element={
          <Video
            frame1={"https://sblongvu.com/e/x0ycpy8wplsm.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Psycho 100 III Capitulo 8"}
            anime={"Mob Psycho 100 III "}
            numero={"8"}
            siguienteVideo={"/ver/mob-psycho-100-III-9"}
            capitulosVideo={"/mob-psycho-100-III"}
            anteriorVideo={"/ver/mob-psycho-100-III-7"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-III-9"
        element={
          <Video
            frame1={"https://sblongvu.com/e/42tqztsmxk60.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Mob Psycho 100 III Capitulo 9"}
            anime={"Mob Psycho 100 III "}
            numero={"9"}
            siguienteVideo={"/ver/mob-psycho-100-III-10"}
            capitulosVideo={"/mob-psycho-100-III"}
            anteriorVideo={"/ver/mob-psycho-100-III-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Psycho 100 III Capitulo 10"}
            anime={"Mob Psycho 100 III "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Psycho 100 III Capitulo 11"}
            anime={"Mob Psycho 100 III "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Mob Psycho 100 III Capitulo 12"}
            anime={"Mob Psycho 100 III "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/mob-psycho-100-1"
        element={
          <Video
            frame1={"https://sblanh.com/e/0f1z1eipuw37.html"}
            contAnteriorClass="disable"
            tituloAnime={"Mob Psycho 100 Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Mob Psycho 100"}
            numero={"1"}
            siguienteVideo={"/ver/mob-psycho-100-2"}
            capitulosVideo={"/mob-psycho-100"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-2"
        element={
          <Video
            frame1={"https://sblanh.com/e/ya29nv0eu855.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Psycho 100 Capitulo 2"}
            tituloPag={"Animekun"}
            anime={"Mob Psycho 100 "}
            numero={"2"}
            siguienteVideo={"/ver/mob-psycho-100-3"}
            capitulosVideo={"/mob-psycho-100"}
            anteriorVideo={"/ver/mob-psycho-100-1"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-3"
        element={
          <Video
            frame1={"https://sblanh.com/e/4msglpf3ul82.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Psycho 100 Capitulo 3"}
            tituloPag={"Animekun"}
            anime={"Mob Psycho 100 "}
            numero={"3"}
            siguienteVideo={"/ver/mob-psycho-100-4"}
            capitulosVideo={"/mob-psycho-100"}
            anteriorVideo={"/ver/mob-psycho-100-2"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-4"
        element={
          <Video
            frame1={"https://sblanh.com/e/0s0r9lyh2h91.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Psycho 100 Capitulo 4"}
            tituloPag={"Animekun"}
            anime={"Mob Psycho 100 "}
            numero={"4"}
            siguienteVideo={"/ver/mob-psycho-100-5"}
            capitulosVideo={"/mob-psycho-100"}
            anteriorVideo={"/ver/mob-psycho-100-3"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-5"
        element={
          <Video
            frame1={"https://sblanh.com/e/dbh6yj35qxjc.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Psycho 100 Capitulo 5"}
            tituloPag={"Animekun"}
            anime={"Mob Psycho 100 "}
            numero={"5"}
            siguienteVideo={"/ver/mob-psycho-100-6"}
            capitulosVideo={"/mob-psycho-100"}
            anteriorVideo={"/ver/mob-psycho-100-4"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-6"
        element={
          <Video
            frame1={"https://sblanh.com/e/366lcbwomzi2.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Psycho 100 Capitulo 6"}
            tituloPag={"Animekun"}
            anime={"Mob Psycho 100 "}
            numero={"6"}
            siguienteVideo={"/ver/mob-psycho-100-7"}
            capitulosVideo={"/mob-psycho-100"}
            anteriorVideo={"/ver/mob-psycho-100-5"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-7"
        element={
          <Video
            frame1={"https://sblanh.com/e/gre06u72cm1u.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Psycho 100 Capitulo 7"}
            tituloPag={"Animekun"}
            anime={"Mob Psycho 100"}
            numero={"7"}
            siguienteVideo={"/ver/mob-psycho-100-8"}
            capitulosVideo={"/mob-psycho-100"}
            anteriorVideo={"/ver/mob-psycho-100-6"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-8"
        element={
          <Video
            frame1={"https://sblanh.com/e/bsvctp86as75.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Pyscho 100 Capitulo 8"}
            tituloPag={"Animekun"}
            anime={"Mob Pyscho 100 "}
            numero={"8"}
            siguienteVideo={"/ver/mob-psycho-100-9"}
            capitulosVideo={"/mob-psycho-100"}
            anteriorVideo={"/ver/mob-psycho-100-7"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-9"
        element={
          <Video
            frame1={"https://sblanh.com/e/9qp8zygcmlab.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Pyscho 100 Capitulo 9"}
            tituloPag={"Animekun"}
            anime={"Mob Pyscho 100 "}
            numero={"9"}
            siguienteVideo={"/ver/mob-psycho-100-10"}
            capitulosVideo={"/mob-psycho-100"}
            anteriorVideo={"/ver/mob-psycho-100-8"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-10"
        element={
          <Video
            frame1={"https://sblanh.com/e/e3tsti367j0c.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Pyscho 100 Capitulo 10"}
            tituloPag={"Animekun"}
            anime={"Mob Pyscho 100 "}
            numero={"10"}
            siguienteVideo={"/ver/mob-psycho-100-11"}
            capitulosVideo={"/mob-psycho-100"}
            anteriorVideo={"/ver/mob-psycho-100-9"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-11"
        element={
          <Video
            frame1={"https://sblanh.com/e/m5zaws4q62kq.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Pyscho 100 Capitulo 11"}
            tituloPag={"Animekun"}
            anime={"Mob Pyscho 100 "}
            numero={"11"}
            siguienteVideo={"/ver/mob-psycho-100-12"}
            capitulosVideo={"/mob-psycho-100"}
            anteriorVideo={"/ver/mob-psycho-100-10"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-12"
        element={
          <Video
            frame1={"https://sblanh.com/e/jo3ox1tgg4dd.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile con-siguiente"
            }
            tituloAnime={"Mob Pyscho 100 Capitulo 12"}
            tituloPag={"Animekun"}
            anime={"Mob Pyscho 100 "}
            numero={"12"}
            capitulosVideo={"/mob-psycho-100"}
            anteriorVideo={"/ver/mob-psycho-100-11"}
            siguienteVideo={"/mob-psycho-100-13-ova"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-13-ova"
        element={
          <Video
            frame1={"https://sblanh.com/e/xgr3n5wovop2.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            tituloAnime={"Mob Pyscho 100"}
            tituloPag={"Animekun"}
            anime={"Mob Pyscho 100 "}
            numero={"OVA"}
            capitulosVideo={"/mob-psycho-100"}
            anteriorVideo={"/ver/mob-psycho-100-12"}
          />
        }
      />
      ---------------- ----------------
      <Route
        path="/ver/mob-psycho-100-II-1"
        element={
          <Video
            frame1={"https://sblanh.com/e/207cerrmetul.html"}
            contAnteriorClass="disable"
            tituloAnime={"Mob Pyscho 100 II Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Mob Pyscho 100 II"}
            numero={"1"}
            siguienteVideo={"/ver/mob-psycho-100-II-2"}
            capitulosVideo={"/mob-psycho-100-II"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-II-2"
        element={
          <Video
            frame1={"https://sblanh.com/e/q45r0i8hdqp7.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Pyscho 100 II Capitulo 2"}
            tituloPag={"Animekun"}
            anime={"Mob Pyscho 100 II "}
            numero={"2"}
            siguienteVideo={"/ver/mob-psycho-100-II-3"}
            capitulosVideo={"/mob-psycho-100-II"}
            anteriorVideo={"/ver/mob-psycho-100-II-1"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-II-3"
        element={
          <Video
            frame1={"https://sblanh.com/e/ib35xdtnp5ya.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Pyscho 100 II Capitulo 3"}
            tituloPag={"Animekun"}
            anime={"Mob Pyscho 100 II "}
            numero={"3"}
            siguienteVideo={"/ver/mob-psycho-100-II-4"}
            capitulosVideo={"/mob-psycho-100-II"}
            anteriorVideo={"/ver/mob-psycho-100-II-2"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-II-4"
        element={
          <Video
            frame1={"https://sblanh.com/e/15t1v22uvxt6.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Pyscho 100 II Capitulo 4"}
            tituloPag={"Animekun"}
            anime={"Mob Pyscho 100 II "}
            numero={"4"}
            siguienteVideo={"/ver/mob-psycho-100-II-5"}
            capitulosVideo={"/mob-psycho-100-II"}
            anteriorVideo={"/ver/mob-psycho-100-II-3"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-II-5"
        element={
          <Video
            frame1={"https://sblanh.com/e/ejj70at2xkan.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Pyscho 100 II Capitulo 5"}
            tituloPag={"Animekun"}
            anime={"Mob Pyscho 100 II "}
            numero={"5"}
            siguienteVideo={"/ver/mob-psycho-100-II-6"}
            capitulosVideo={"/mob-psycho-100-II"}
            anteriorVideo={"/ver/mob-psycho-100-II-4"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-II-6"
        element={
          <Video
            frame1={"https://sblanh.com/e/3gvuyurbpho8.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Pyscho 100 II Capitulo 6"}
            tituloPag={"Animekun"}
            anime={"Mob Pyscho 100 II "}
            numero={"6"}
            siguienteVideo={"/ver/mob-psycho-100-II-7"}
            capitulosVideo={"/mob-psycho-100-II"}
            anteriorVideo={"/ver/mob-psycho-100-II-5"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-II-7"
        element={
          <Video
            frame1={"https://sbspeed.com/e/bf110bmh4pdb.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Pyscho 100 II Capitulo 7"}
            tituloPag={"Animekun"}
            anime={"Mob Pyscho 100 II "}
            numero={"7"}
            siguienteVideo={"/ver/mob-psycho-100-II-8"}
            capitulosVideo={"/mob-psycho-100-II"}
            anteriorVideo={"/ver/mob-psycho-100-II-6"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-II-8"
        element={
          <Video
            frame1={"https://sbspeed.com/e/xwbhcg1mq7rv.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Pyscho 100 II Capitulo 8"}
            tituloPag={"Animekun"}
            anime={"Mob Pyscho 100 II "}
            numero={"8"}
            siguienteVideo={"/ver/mob-psycho-100-II-9"}
            capitulosVideo={"/mob-psycho-100-II"}
            anteriorVideo={"/ver/mob-psycho-100-II-7"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-II-9"
        element={
          <Video
            frame1={"https://sbspeed.com/e/uymusukxy02b.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Pyscho 100 II Capitulo 9"}
            tituloPag={"Animekun"}
            anime={"Mob Pyscho 100 II "}
            numero={"9"}
            siguienteVideo={"/ver/mob-psycho-100-II-10"}
            capitulosVideo={"/mob-psycho-100-II"}
            anteriorVideo={"/ver/mob-psycho-100-II-8"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-II-10"
        element={
          <Video
            frame1={"https://sbspeed.com/e/xicezama4954.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Pyscho 100 II Capitulo 10"}
            tituloPag={"Animekun"}
            anime={"Mob Pyscho 100 II "}
            numero={"10"}
            siguienteVideo={"/ver/mob-psycho-100-II-11"}
            capitulosVideo={"/mob-psycho-100-II"}
            anteriorVideo={"/ver/mob-psycho-100-II-9"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-II-11"
        element={
          <Video
            frame1={"https://sbspeed.com/e/sxttvs4ipsfl.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Pyscho 100 II Capitulo 11"}
            tituloPag={"Animekun"}
            anime={"Mob Pyscho 100 II "}
            numero={"11"}
            siguienteVideo={"/ver/mob-psycho-100-II-12"}
            capitulosVideo={"/mob-psycho-100-II"}
            anteriorVideo={"/ver/mob-psycho-100-II-10"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-II-12"
        element={
          <Video
            frame1={"https://sbspeed.com/e/q9md24d99efr.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Mob Pyscho 100 II Capitulo 12"}
            tituloPag={"Animekun"}
            anime={"Mob Pyscho 100 II "}
            numero={"12"}
            siguienteVideo={"/ver/mob-psycho-100-II-13"}
            capitulosVideo={"/mob-psycho-100-II"}
            anteriorVideo={"/ver/mob-psycho-100-II-11"}
          />
        }
      />
      <Route
        path="/ver/mob-psycho-100-II-13"
        element={
          <Video
            frame1={"https://sbspeed.com/e/rugg39r8frwn.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Mob Pyscho 100 II Capitulo 13"}
            tituloPag={"Animekun"}
            anime={"Mob Pyscho 100 II "}
            numero={"13"}
            capitulosVideo={"/mob-psycho-100-II"}
            anteriorVideo={"/ver/mob-psycho-100-II-12"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/overlord-II-1"
        element={
          <Video
            frame1={"https://sbspeed.com/e/c6a2jtbnmbao.html"}
            contAnteriorClass="disable"
            tituloAnime={"Overlord II Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Overlord II"}
            numero={"1"}
            siguienteVideo={"/ver/overlord-II-2"}
            capitulosVideo={"/overlord-II"}
          />
        }
      />
      <Route
        path="/ver/overlord-II-2"
        element={
          <Video
            frame1={"https://sbspeed.com/e/52ju9gf68vax.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={"Overlord II "}
            numero={"2"}
            siguienteVideo={"/ver/overlord-II-3"}
            capitulosVideo={"/overlord-II"}
            anteriorVideo={"/ver/overlord-II-1"}
          />
        }
      />
      <Route
        path="/ver/overlord-II-3"
        element={
          <Video
            frame1={"https://sbspeed.com/e/2ecg7zybomni.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord II Capitulo 3"}
            tituloPag={"Animekun"}
            anime={"Overlord II "}
            numero={"3"}
            siguienteVideo={"/ver/overlord-II-4"}
            capitulosVideo={"/overlord-II"}
            anteriorVideo={"/ver/overlord-II-2"}
          />
        }
      />
      <Route
        path="/ver/overlord-II-4"
        element={
          <Video
            frame1={"https://sbanh.com/e/v3lcv3dro82r.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord II Capitulo 4"}
            tituloPag={"Animekun"}
            anime={"Overlord II "}
            numero={"4"}
            siguienteVideo={"/ver/overlord-II-5"}
            capitulosVideo={"/overlord-II"}
            anteriorVideo={"/ver/overlord-II-3"}
          />
        }
      />
      <Route
        path="/ver/overlord-II-5"
        element={
          <Video
            frame1={"https://sbanh.com/e/rz1odiz2latu.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord II Capitulo 5"}
            tituloPag={"Animekun"}
            anime={"Overlord II "}
            numero={"5"}
            siguienteVideo={"/ver/overlord-II-6"}
            capitulosVideo={"/overlord-II"}
            anteriorVideo={"/ver/overlord-II-4"}
          />
        }
      />
      <Route
        path="/ver/overlord-II-6"
        element={
          <Video
            frame1={"https://sbanh.com/e/bgj7l3rgn44l.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord II Capitulo 6"}
            tituloPag={"Animekun"}
            anime={"Overlord II "}
            numero={"6"}
            siguienteVideo={"/ver/overlord-II-7"}
            capitulosVideo={"/overlord-II"}
            anteriorVideo={"/ver/overlord-II-5"}
          />
        }
      />
      <Route
        path="/ver/overlord-II-7"
        element={
          <Video
            frame1={"https://sbanh.com/e/05ukawbykc32.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord II Capitulo 7"}
            tituloPag={"Animekun"}
            anime={"Overlord II "}
            numero={"7"}
            siguienteVideo={"/ver/overlord-II-8"}
            capitulosVideo={"/overlord-II"}
            anteriorVideo={"/ver/overlord-II-6"}
          />
        }
      />
      <Route
        path="/ver/overlord-II-8"
        element={
          <Video
            frame1={"https://sbanh.com/e/9yas7rhwv1cl.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord II Capitulo 8"}
            tituloPag={"Animekun"}
            anime={"Overlord II "}
            numero={"8"}
            siguienteVideo={"/ver/overlord-II-9"}
            capitulosVideo={"/overlord-II"}
            anteriorVideo={"/ver/overlord-II-7"}
          />
        }
      />
      <Route
        path="/ver/overlord-II-9"
        element={
          <Video
            frame1={"https://sbanh.com/e/0e45nyy9as0n.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord II Capitulo 9"}
            tituloPag={"Animekun"}
            anime={"Overlord II "}
            numero={"9"}
            siguienteVideo={"/ver/overlord-II-10"}
            capitulosVideo={"/overlord-II"}
            anteriorVideo={"/ver/overlord-II-8"}
          />
        }
      />
      <Route
        path="/ver/overlord-II-10"
        element={
          <Video
            frame1={"https://sbanh.com/e/yujz5khp6fmf.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord II Capitulo 10"}
            tituloPag={"Animekun"}
            anime={"Overlord II "}
            numero={"10"}
            siguienteVideo={"/ver/overlord-II-11"}
            capitulosVideo={"/overlord-II"}
            anteriorVideo={"/ver/overlord-II-9"}
          />
        }
      />
      <Route
        path="/ver/overlord-II-11"
        element={
          <Video
            frame1={"https://sbanh.com/e/mofsh0kb5by6.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord II Capitulo 11"}
            tituloPag={"Animekun"}
            anime={"Overlord II "}
            numero={"11"}
            siguienteVideo={"/ver/overlord-II-12"}
            capitulosVideo={"/overlord-II"}
            anteriorVideo={"/ver/overlord-II-10"}
          />
        }
      />
      <Route
        path="/ver/overlord-II-12"
        element={
          <Video
            frame1={"https://sbanh.com/e/jhy1eph08gba.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord II Capitulo 12"}
            tituloPag={"Animekun"}
            anime={"Overlord II "}
            numero={"12"}
            siguienteVideo={"/ver/overlord-II-13"}
            capitulosVideo={"/overlord-II"}
            anteriorVideo={"/ver/overlord-II-11"}
          />
        }
      />
      <Route
        path="/ver/overlord-II-13"
        element={
          <Video
            frame1={"https://sbanh.com/e/yfvfteoz3n3f.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Overlord II Capitulo 13"}
            tituloPag={"Animekun"}
            anime={"Overlord II "}
            numero={"13"}
            capitulosVideo={"/overlord-II"}
            anteriorVideo={"/ver/overlord-II-12"}
          />
        }
      />
      ---------------- ----------------
      <Route
        path="/ver/overlord-III-1"
        element={
          <Video
            frame1={"https://sbanh.com/e/milah99c58yn.html"}
            contAnteriorClass="disable"
            tituloAnime={"Overlord III Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Overlord III"}
            numero={"1"}
            siguienteVideo={"/ver/overlord-III-2"}
            capitulosVideo={"/overlord-III"}
          />
        }
      />
      <Route
        path="/ver/overlord-III-2"
        element={
          <Video
            frame1={"https://sbanh.com/e/gb9jceld9ucg.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord III Capitulo 2"}
            tituloPag={"Animekun"}
            anime={"Overlord III "}
            numero={"2"}
            siguienteVideo={"/ver/overlord-III-3"}
            capitulosVideo={"/overlord-III"}
            anteriorVideo={"/ver/overlord-III-1"}
          />
        }
      />
      <Route
        path="/ver/overlord-III-3"
        element={
          <Video
            frame1={"https://sbanh.com/e/4o1goh7dgo59.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord III Capitulo 3"}
            tituloPag={"Animekun"}
            anime={"Overlord III "}
            numero={"3"}
            siguienteVideo={"/ver/overlord-III-4"}
            capitulosVideo={"/overlord-III"}
            anteriorVideo={"/ver/overlord-III-2"}
          />
        }
      />
      <Route
        path="/ver/overlord-III-4"
        element={
          <Video
            frame1={"https://sbanh.com/e/tigc12t8cx6c.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord III Capitulo 4"}
            tituloPag={"Animekun"}
            anime={"Overlord III "}
            numero={"4"}
            siguienteVideo={"/ver/overlord-III-5"}
            capitulosVideo={"/overlord-III"}
            anteriorVideo={"/ver/overlord-III-3"}
          />
        }
      />
      <Route
        path="/ver/overlord-III-5"
        element={
          <Video
            frame1={"https://sbanh.com/e/tvwzo54iww2v.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord III Capitulo 5"}
            tituloPag={"Animekun"}
            anime={"Overlord III "}
            numero={"5"}
            siguienteVideo={"/ver/overlord-III-6"}
            capitulosVideo={"/overlord-III"}
            anteriorVideo={"/ver/overlord-III-4"}
          />
        }
      />
      <Route
        path="/ver/overlord-III-6"
        element={
          <Video
            frame1={"https://sbanh.com/e/092qhwk3e2bq.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord III Capitulo 6"}
            tituloPag={"Animekun"}
            anime={"Overlord III "}
            numero={"6"}
            siguienteVideo={"/ver/overlord-III-7"}
            capitulosVideo={"/overlord-III"}
            anteriorVideo={"/ver/overlord-III-5"}
          />
        }
      />
      <Route
        path="/ver/overlord-III-7"
        element={
          <Video
            frame1={"https://sbanh.com/e/06yq0xjhi4tl.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord III Capitulo 7"}
            tituloPag={"Animekun"}
            anime={"Overlord III "}
            numero={"7"}
            siguienteVideo={"/ver/overlord-III-8"}
            capitulosVideo={"/overlord-III"}
            anteriorVideo={"/ver/overlord-III-6"}
          />
        }
      />
      <Route
        path="/ver/overlord-III-8"
        element={
          <Video
            frame1={"https://sbanh.com/e/3sim4dsb2ex6.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord III Capitulo 8"}
            tituloPag={"Animekun"}
            anime={"Overlord III "}
            numero={"8"}
            siguienteVideo={"/ver/overlord-III-9"}
            capitulosVideo={"/overlord-III"}
            anteriorVideo={"/ver/overlord-III-7"}
          />
        }
      />
      <Route
        path="/ver/overlord-III-9"
        element={
          <Video
            frame1={"https://sbanh.com/e/x2xljarg1ju3.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord III Capitulo 9"}
            tituloPag={"Animekun"}
            anime={"Overlord III "}
            numero={"9"}
            siguienteVideo={"/ver/overlord-III-10"}
            capitulosVideo={"/overlord-III"}
            anteriorVideo={"/ver/overlord-III-8"}
          />
        }
      />
      <Route
        path="/ver/overlord-III-10"
        element={
          <Video
            frame1={"https://sbanh.com/e/s1hvhzt8a4fk.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord III Capitulo 10"}
            tituloPag={"Animekun"}
            anime={"Overlord III "}
            numero={"10"}
            siguienteVideo={"/ver/overlord-III-11"}
            capitulosVideo={"/overlord-III"}
            anteriorVideo={"/ver/overlord-III-9"}
          />
        }
      />
      <Route
        path="/ver/overlord-III-11"
        element={
          <Video
            frame1={"https://sbanh.com/e/paksecf6fj95.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord III Capitulo 11"}
            tituloPag={"Animekun"}
            anime={"Overlord III "}
            numero={"11"}
            siguienteVideo={"/ver/overlord-III-12"}
            capitulosVideo={"/overlord-III"}
            anteriorVideo={"/ver/overlord-III-10"}
          />
        }
      />
      <Route
        path="/ver/overlord-III-12"
        element={
          <Video
            frame1={"https://sbanh.com/e/tx6lw3bcfbpi.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord III Capitulo 12"}
            tituloPag={"Animekun"}
            anime={"Overlord III "}
            numero={"12"}
            siguienteVideo={"/ver/overlord-III-13"}
            capitulosVideo={"/overlord-III"}
            anteriorVideo={"/ver/overlord-III-11"}
          />
        }
      />
      <Route
        path="/ver/overlord-III-13"
        element={
          <Video
            frame1={"https://sbanh.com/e/lsfvz8vigx1t.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Overlord III Capitulo 13"}
            tituloPag={"Animekun"}
            anime={"Overlord III "}
            numero={"13"}
            capitulosVideo={"/overlord-III"}
            anteriorVideo={"/ver/overlord-III-12"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/overlord-IV-1"
        element={
          <Video
            frame1={"https://sbanh.com/e/858dew3ko0ks.html"}
            contAnteriorClass="disable"
            tituloAnime={"Overlord IV Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Overlord IV"}
            numero={"1"}
            siguienteVideo={"/ver/overlord-IV-2"}
            capitulosVideo={"/overlord-IV"}
          />
        }
      />
      <Route
        path="/ver/overlord-IV-2"
        element={
          <Video
            frame1={"https://sbanh.com/e/djki7sivh8q2.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord IV Capitulo 2"}
            tituloPag={"Animekun"}
            anime={"Overlord IV "}
            numero={"2"}
            siguienteVideo={"/ver/overlord-IV-3"}
            capitulosVideo={"/overlord-IV"}
            anteriorVideo={"/ver/overlord-IV-1"}
          />
        }
      />
      <Route
        path="/ver/overlord-IV-3"
        element={
          <Video
            frame1={"https://sbanh.com/e/zc0571u9zgzn.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord IV Capitulo 3"}
            tituloPag={"Animekun"}
            anime={"Overlord IV "}
            numero={"3"}
            siguienteVideo={"/ver/overlord-IV-4"}
            capitulosVideo={"/overlord-IV"}
            anteriorVideo={"/ver/overlord-IV-2"}
          />
        }
      />
      <Route
        path="/ver/overlord-IV-4"
        element={
          <Video
            frame1={"https://sbanh.com/e/1br51b9qs69m.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord IV Capitulo 4"}
            tituloPag={"Animekun"}
            anime={"Overlord IV "}
            numero={"4"}
            siguienteVideo={"/ver/overlord-IV-5"}
            capitulosVideo={"/overlord-IV"}
            anteriorVideo={"/ver/overlord-IV-3"}
          />
        }
      />
      <Route
        path="/ver/overlord-IV-5"
        element={
          <Video
            frame1={"https://sbanh.com/e/li9tiyp9b8w6.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord IV Capitulo 5"}
            tituloPag={"Animekun"}
            anime={"Overlord IV "}
            numero={"5"}
            siguienteVideo={"/ver/overlord-IV-6"}
            capitulosVideo={"/overlord-IV"}
            anteriorVideo={"/ver/overlord-IV-4"}
          />
        }
      />
      <Route
        path="/ver/overlord-IV-6"
        element={
          <Video
            frame1={"https://sbanh.com/e/fxnilzhsaq52.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord IV Capitulo 6"}
            tituloPag={"Animekun"}
            anime={"Overlord IV "}
            numero={"6"}
            siguienteVideo={"/ver/overlord-IV-7"}
            capitulosVideo={"/overlord-IV"}
            anteriorVideo={"/ver/overlord-IV-5"}
          />
        }
      />
      <Route
        path="/ver/overlord-IV-7"
        element={
          <Video
            frame1={"https://sbanh.com/e/h7fo6zy4wwb4.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord IV Capitulo 7"}
            tituloPag={"Animekun"}
            anime={"Overlord IV "}
            numero={"7"}
            siguienteVideo={"/ver/overlord-IV-8"}
            capitulosVideo={"/overlord-IV"}
            anteriorVideo={"/ver/overlord-IV-6"}
          />
        }
      />
      <Route
        path="/ver/overlord-IV-8"
        element={
          <Video
            frame1={"https://sbanh.com/e/htxzsszc6eo3.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord IV Capitulo 8"}
            tituloPag={"Animekun"}
            anime={"Overlord IV "}
            numero={"8"}
            siguienteVideo={"/ver/overlord-IV-9"}
            capitulosVideo={"/overlord-IV"}
            anteriorVideo={"/ver/overlord-IV-7"}
          />
        }
      />
      <Route
        path="/ver/overlord-IV-9"
        element={
          <Video
            frame1={"https://sbanh.com/e/e40di5a7yc9a.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord IV Capitulo 9"}
            tituloPag={"Animekun"}
            anime={"Overlord IV "}
            numero={"9"}
            siguienteVideo={"/ver/overlord-IV-10"}
            capitulosVideo={"/overlord-IV"}
            anteriorVideo={"/ver/overlord-IV-8"}
          />
        }
      />
      <Route
        path="/ver/overlord-IV-10"
        element={
          <Video
            frame1={"https://sbanh.com/e/b651v7dihw25.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord IV Capitulo 10"}
            tituloPag={"Animekun"}
            anime={"Overlord IV "}
            numero={"10"}
            siguienteVideo={"/ver/overlord-IV-11"}
            capitulosVideo={"/overlord-IV"}
            anteriorVideo={"/ver/overlord-IV-9"}
          />
        }
      />
      <Route
        path="/ver/overlord-IV-11"
        element={
          <Video
            frame1={"https://sbanh.com/e/zk3qozwl9hvh.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord IV Capitulo 11"}
            tituloPag={"Animekun"}
            anime={"Overlord IV "}
            numero={"11"}
            siguienteVideo={"/ver/overlord-IV-12"}
            capitulosVideo={"/overlord-IV"}
            anteriorVideo={"/ver/overlord-IV-10"}
          />
        }
      />
      <Route
        path="/ver/overlord-IV-12"
        element={
          <Video
            frame1={"https://sbanh.com/e/tbpucviitlob.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord IV Capitulo 12"}
            tituloPag={"Animekun"}
            anime={"Overlord IV "}
            numero={"12"}
            siguienteVideo={"/ver/overlord-IV-13"}
            capitulosVideo={"/overlord-IV"}
            anteriorVideo={"/ver/overlord-IV-11"}
          />
        }
      />
      <Route
        path="/ver/overlord-IV-13"
        element={
          <Video
            frame1={"https://sbanh.com/e/kqh9lrsz0zkq.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Overlord IV Capitulo 13"}
            tituloPag={"Animekun"}
            anime={"Overlord IV "}
            numero={"13"}
            capitulosVideo={"/overlord-IV"}
            anteriorVideo={"/ver/overlord-IV-12"}
          />
        }
      />
      ---------------- ----------------
      <Route
        path="/ver/violet-evergarden-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/d6b1tjplyuqa.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/violet-evergarden-2"}
            capitulosVideo={"/violet-evergarden"}
          />
        }
      />
      <Route
        path="/ver/violet-evergarden-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/ap2jr0cvk9jk.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/violet-evergarden-3"}
            capitulosVideo={"/violet-evergarden"}
            anteriorVideo={"/ver/violet-evergarden-1"}
          />
        }
      />
      <Route
        path="/ver/violet-evergarden-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/rv3w74enukee.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/violet-evergarden-4"}
            capitulosVideo={"/violet-evergarden"}
            anteriorVideo={"/ver/violet-evergarden-2"}
          />
        }
      />
      <Route
        path="/ver/violet-evergarden-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/5xtc65knjo28.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/violet-evergarden-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/violet-evergarden-3"}
          />
        }
      />
      <Route
        path="/ver/violet-evergarden-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/q9r59y9fc4nk.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/violet-evergarden-6"}
            capitulosVideo={"/violet-evergarden"}
            anteriorVideo={"/ver/violet-evergarden-4"}
          />
        }
      />
      <Route
        path="/ver/violet-evergarden-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/i4yei2crufow.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/violet-evergarden-7"}
            capitulosVideo={"/violet-evergarden"}
            anteriorVideo={"/ver/violet-evergarden-5"}
          />
        }
      />
      <Route
        path="/ver/violet-evergarden-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/0z6y9ey2u5kw.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/violet-evergarden-8"}
            capitulosVideo={"/violet-evergarden"}
            anteriorVideo={"/ver/violet-evergarden-6"}
          />
        }
      />
      <Route
        path="/ver/violet-evergarden-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/sx3rb7sig751.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/violet-evergarden-9"}
            capitulosVideo={"/violet-evergarden"}
            anteriorVideo={"/ver/violet-evergarden-7"}
          />
        }
      />
      <Route
        path="/ver/violet-evergarden-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/g8je7xbj2kmm.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/violet-evergarden-10"}
            capitulosVideo={"/violet-evergarden"}
            anteriorVideo={"/ver/violet-evergarden-8"}
          />
        }
      />
      <Route
        path="/ver/violet-evergarden-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/bv3w93uv9gaz.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/violet-evergarden-11"}
            capitulosVideo={"/violet-evergarden"}
            anteriorVideo={"/ver/violet-evergarden-9"}
          />
        }
      />
      <Route
        path="/ver/violet-evergarden-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/ml3614s9q6zy.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/violet-evergarden-12"}
            capitulosVideo={"/violet-evergarden"}
            anteriorVideo={"/ver/violet-evergarden-10"}
          />
        }
      />
      <Route
        path="/ver/violet-evergarden-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/iz6t1acykur8.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Violet Evergarden Capitulo 12"}
            tituloPag={"Animekun"}
            anime={"Violet Evergarden "}
            numero={"12"}
            siguienteVideo={"/ver/violet-evergarden-13"}
            capitulosVideo={"/violet-evergarden"}
            anteriorVideo={"/ver/violet-evergarden-11"}
          />
        }
      />
      <Route
        path="/ver/violet-evergarden-13"
        element={
          <Video
            frame1={"https://sbthe.com/e/fyp2zjrfqqdx.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Violet Evergarden Capitulo 13"}
            tituloPag={"Animekun"}
            anime={"Violet Evergarden "}
            numero={"13"}
            siguienteVideo={"/ver/violet-evergarden-14"}
            capitulosVideo={"/violet-evergarden"}
            anteriorVideo={"/ver/violet-evergarden-12"}
          />
        }
      />
      <Route
        path="/ver/violet-evergarden-14"
        element={
          <Video
            frame1={"https://sbthe.com/e/7vbvf95ypnp9.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Violet Evergarden Capitulo 14"}
            tituloPag={"Animekun"}
            anime={"Violet Evergarden "}
            numero={"14"}
            capitulosVideo={"/violet-evergarden"}
            anteriorVideo={"/ver/violet-evergarden-13"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ---------------- ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ---------------- ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/bleach-sennen-kessen-hen-1"
        element={
          <Video
            frame1={"https://sblongvu.com/e/zs0ljhjkn107.html"}
            contAnteriorClass="disable"
            tituloAnime={"BLEACH: Sennen Kessen-hen Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"BLEACH: Sennen Kessen-hen"}
            numero={"1"}
            siguienteVideo={"/ver/bleach-sennen-kessen-hen-2"}
            capitulosVideo={"/bleach-sennen-kessen-hen"}
          />
        }
      />
      <Route
        path="/ver/bleach-sennen-kessen-hen-2"
        element={
          <Video
            frame1={"https://sblongvu.com/e/jmjyd8ymtbh2.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"BLEACH: Sennen Kessen-hen Capitulo 2"}
            tituloPag={"Animekun"}
            anime={"BLEACH: Sennen Kessen-hen "}
            numero={"2"}
            siguienteVideo={"/ver/bleach-sennen-kessen-hen-3"}
            capitulosVideo={"/bleach-sennen-kessen-hen"}
            anteriorVideo={"/ver/bleach-sennen-kessen-hen-1"}
          />
        }
      />
      <Route
        path="/ver/bleach-sennen-kessen-hen-3"
        element={
          <Video
            frame1={"https://sblongvu.com/e/907qt393wt82.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"BLEACH: Sennen Kessen-hen Capitulo 3"}
            tituloPag={"Animekun"}
            anime={"BLEACH: Sennen Kessen-hen "}
            numero={"3"}
            siguienteVideo={"/ver/bleach-sennen-kessen-hen-4"}
            capitulosVideo={"/bleach-sennen-kessen-hen"}
            anteriorVideo={"/ver/bleach-sennen-kessen-hen-2"}
          />
        }
      />
      <Route
        path="/ver/bleach-sennen-kessen-hen-4"
        element={
          <Video
            frame1={"https://sblongvu.com/e/esmpokc92bjl.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"BLEACH: Sennen Kessen-hen Capitulo 4"}
            tituloPag={"Animekun"}
            anime={"BLEACH: Sennen Kessen-hen "}
            numero={"4"}
            siguienteVideo={"/ver/bleach-sennen-kessen-hen-5"}
            capitulosVideo={"/bleach-sennen-kessen-hen"}
            anteriorVideo={"/ver/bleach-sennen-kessen-hen-3"}
          />
        }
      />
      <Route
        path="/ver/bleach-sennen-kessen-hen-5"
        element={
          <Video
            frame1={"https://sblongvu.com/e/vsnnk7k6qmjx.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"BLEACH: Sennen Kessen-hen Capitulo 5"}
            tituloPag={"Animekun"}
            anime={"BLEACH: Sennen Kessen-hen "}
            numero={"5"}
            siguienteVideo={"/ver/bleach-sennen-kessen-hen-6"}
            capitulosVideo={"/bleach-sennen-kessen-hen"}
            anteriorVideo={"/ver/bleach-sennen-kessen-hen-4"}
          />
        }
      />
      <Route
        path="/ver/bleach-sennen-kessen-hen-6"
        element={
          <Video
            frame1={"https://sblongvu.com/e/rtpxhp7q331o.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"BLEACH: Sennen Kessen-hen Capitulo 6"}
            tituloPag={"Animekun"}
            anime={"BLEACH: Sennen Kessen-hen "}
            numero={"6"}
            siguienteVideo={"/ver/bleach-sennen-kessen-hen-7"}
            capitulosVideo={"/bleach-sennen-kessen-hen"}
            anteriorVideo={"/ver/bleach-sennen-kessen-hen-5"}
          />
        }
      />
      <Route
        path="/ver/bleach-sennen-kessen-hen-7"
        element={
          <Video
            frame1={"https://sblongvu.com/e/z61mpk1lczqk.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"BLEACH: Sennen Kessen-hen Capitulo 7"}
            tituloPag={"Animekun"}
            anime={"BLEACH: Sennen Kessen-hen "}
            numero={"7"}
            siguienteVideo={"/ver/bleach-sennen-kessen-hen-8"}
            capitulosVideo={"/bleach-sennen-kessen-hen"}
            anteriorVideo={"/ver/bleach-sennen-kessen-hen-6"}
          />
        }
      />
      <Route
        path="/ver/bleach-sennen-kessen-hen-8"
        element={
          <Video
            frame1={"https://sblongvu.com/e/mwn4fe0co92q.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"BLEACH: Sennen Kessen-hen Capitulo 8"}
            tituloPag={"Animekun"}
            anime={"BLEACH: Sennen Kessen-hen "}
            numero={"8"}
            siguienteVideo={"/ver/bleach-sennen-kessen-hen-9"}
            capitulosVideo={"/bleach-sennen-kessen-hen"}
            anteriorVideo={"/ver/bleach-sennen-kessen-hen-7"}
          />
        }
      />
      <Route
        path="/ver/bleach-sennen-kessen-hen-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/u0veijxozcwd.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"BLEACH: Sennen Kessen-hen Capitulo 9"}
            tituloPag={"Animekun"}
            anime={"BLEACH: Sennen Kessen-hen "}
            numero={"9"}
            siguienteVideo={"/ver/bleach-sennen-kessen-hen-10"}
            capitulosVideo={"/bleach-sennen-kessen-hen"}
            anteriorVideo={"/ver/bleach-sennen-kessen-hen-8"}
          />
        }
      />
      <Route
        path="/ver/bleach-sennen-kessen-hen-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/7k25q7yl2utj.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"BLEACH: Sennen Kessen-hen Capitulo 10"}
            tituloPag={"Animekun"}
            anime={"BLEACH: Sennen Kessen-hen "}
            numero={"10"}
            siguienteVideo={"/ver/bleach-sennen-kessen-hen-11"}
            capitulosVideo={"/bleach-sennen-kessen-hen"}
            anteriorVideo={"/ver/bleach-sennen-kessen-hen-9"}
          />
        }
      />
      <Route
        path="/ver/bleach-sennen-kessen-hen-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ---------------- ----------------
      <Route
        path="/ver/id-invaded-1"
        element={
          <Video
            frame1={"https://sblongvu.com/e/5i2h0gg1j6ee.html"}
            contAnteriorClass="disable"
            tituloAnime={"ID: invaded Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"ID: invaded"}
            numero={"1"}
            siguienteVideo={"/ver/id-invaded-2"}
            capitulosVideo={"/id-invaded"}
          />
        }
      />
      <Route
        path="/ver/id-invaded-2"
        element={
          <Video
            frame1={"https://sblongvu.com/e/0k36tdowkim7.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"ID: invaded Capitulo 2"}
            tituloPag={"Animekun"}
            anime={"ID: invaded "}
            numero={"2"}
            siguienteVideo={"/ver/id-invaded-3"}
            capitulosVideo={"/id-invaded"}
            anteriorVideo={"/ver/id-invaded-1"}
          />
        }
      />
      <Route
        path="/ver/id-invaded-3"
        element={
          <Video
            frame1={"https://sblongvu.com/e/zk75f1x1ei7w.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"ID: invaded Capitulo 3"}
            tituloPag={"Animekun"}
            anime={"ID: invaded "}
            numero={"3"}
            siguienteVideo={"/ver/id-invaded-4"}
            capitulosVideo={"/id-invaded"}
            anteriorVideo={"/ver/id-invaded-2"}
          />
        }
      />
      <Route
        path="/ver/id-invaded-4"
        element={
          <Video
            frame1={"https://sblongvu.com/e/gx1xa079l92w.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"ID: invaded Capitulo 4"}
            tituloPag={"Animekun"}
            anime={"ID: invaded "}
            numero={"4"}
            siguienteVideo={"/ver/id-invaded-5"}
            capitulosVideo={"/id-invaded"}
            anteriorVideo={"/ver/id-invaded-3"}
          />
        }
      />
      <Route
        path="/ver/id-invaded-5"
        element={
          <Video
            frame1={"https://sblongvu.com/e/wagxryn9zqx6.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"ID: invaded Capitulo 5"}
            tituloPag={"Animekun"}
            anime={"ID: invaded "}
            numero={"5"}
            siguienteVideo={"/ver/id-invaded-6"}
            capitulosVideo={"/id-invaded"}
            anteriorVideo={"/ver/id-invaded-4"}
          />
        }
      />
      <Route
        path="/ver/id-invaded-6"
        element={
          <Video
            frame1={"https://sblongvu.com/e/4aqrjz6zltoy.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"ID: invaded Capitulo 6"}
            tituloPag={"Animekun"}
            anime={"ID: invaded "}
            numero={"6"}
            siguienteVideo={"/ver/id-invaded-7"}
            capitulosVideo={"/id-invaded"}
            anteriorVideo={"/ver/id-invaded-5"}
          />
        }
      />
      <Route
        path="/ver/id-invaded-7"
        element={
          <Video
            frame1={"https://sblongvu.com/e/vu1lk0xne4ty.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"ID: invaded Capitulo 7"}
            tituloPag={"Animekun"}
            anime={"ID: invaded "}
            numero={"7"}
            siguienteVideo={"/ver/id-invaded-8"}
            capitulosVideo={"/id-invaded"}
            anteriorVideo={"/ver/id-invaded-6"}
          />
        }
      />
      <Route
        path="/ver/id-invaded-8"
        element={
          <Video
            frame1={"https://sblongvu.com/e/pz9si7pe2rnd.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"ID: invaded Capitulo 8"}
            tituloPag={"Animekun"}
            anime={"ID: invaded "}
            numero={"8"}
            siguienteVideo={"/ver/id-invaded-9"}
            capitulosVideo={"/id-invaded"}
            anteriorVideo={"/ver/id-invaded-7"}
          />
        }
      />
      <Route
        path="/ver/id-invaded-9"
        element={
          <Video
            frame1={"https://sblongvu.com/e/8wxfhzz5rlaz.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"ID: invaded Capitulo 9"}
            tituloPag={"Animekun"}
            anime={"ID: invaded "}
            numero={"9"}
            siguienteVideo={"/ver/id-invaded-10"}
            capitulosVideo={"/id-invaded"}
            anteriorVideo={"/ver/id-invaded-8"}
          />
        }
      />
      <Route
        path="/ver/id-invaded-10"
        element={
          <Video
            frame1={"https://sblongvu.com/e/s4v1jb4k2uko.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"ID: invaded Capitulo 10"}
            tituloPag={"Animekun"}
            anime={"ID: invaded "}
            numero={"10"}
            siguienteVideo={"/ver/id-invaded-11"}
            capitulosVideo={"/id-invaded"}
            anteriorVideo={"/ver/id-invaded-9"}
          />
        }
      />
      <Route
        path="/ver/id-invaded-11"
        element={
          <Video
            frame1={"https://sblongvu.com/e/5j2blm5p9u5q.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"ID: invaded Capitulo 11"}
            tituloPag={"Animekun"}
            anime={"ID: invaded "}
            numero={"11"}
            siguienteVideo={"/ver/id-invaded-12"}
            capitulosVideo={"/id-invaded"}
            anteriorVideo={"/ver/id-invaded-10"}
          />
        }
      />
      <Route
        path="/ver/id-invaded-12"
        element={
          <Video
            frame1={"https://sblongvu.com/e/jvdb8pcasz35.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            }
            tituloAnime={"ID: invaded Capitulo 12"}
            tituloPag={"Animekun"}
            anime={"ID: invaded "}
            numero={"12"}
            capitulosVideo={"/id-invaded"}
            anteriorVideo={"/ver/id-invaded-11"}
            siguienteVideo={"/ver/id-invaded-13"}
          />
        }
      />
      <Route
        path="/ver/id-invaded-13"
        element={
          <Video
            frame1={"https://sblongvu.com/e/0eaanig61e9h.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"ID: invaded Capitulo 13"}
            tituloPag={"Animekun"}
            anime={"ID: invaded "}
            numero={"13"}
            capitulosVideo={"/id-invaded"}
            anteriorVideo={"/ver/id-invaded-12"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ---------------- ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ---------------- ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ---------------- ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ---------------- ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ---------------- ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ---------------- ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ---------------- ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ---------------- ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ---------------- ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ---------------- ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ---------------- ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/overlord-1"
        element={
          <Video
            frame1={"https://vanfem.com/v/265jdt2j4pmdl50"}
            contAnteriorClass="disable"
            tituloAnime={"Overlord Capitulo 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Overlord"}
            numero={"1"}
            siguienteVideo={"/ver/overlord-2"}
            capitulosVideo={"/overlord"}
          />
        }
      />
      <Route
        path="/ver/overlord-2"
        element={
          <Video
            frame1={"https://vanfem.com/v/njwxdb2x5-n2jln"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord Capitulo 2"}
            tituloPag={"Animekun"}
            anime={"Overlord "}
            numero={"2"}
            siguienteVideo={"/ver/overlord-3"}
            capitulosVideo={"/overlord"}
            anteriorVideo={"/ver/overlord-1"}
          />
        }
      />
      <Route
        path="/ver/overlord-3"
        element={
          <Video
            frame1={"https://vanfem.com/v/w125wunre-ymp6r"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord Capitulo 3"}
            tituloPag={"Animekun"}
            anime={"Overlord "}
            numero={"3"}
            siguienteVideo={"/ver/overlord-4"}
            capitulosVideo={"/overlord"}
            anteriorVideo={"/ver/overlord-2"}
          />
        }
      />
      <Route
        path="/ver/overlord-4"
        element={
          <Video
            frame1={"https://vanfem.com/v/50ejztdx3wl4rnl"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord Capitulo 4"}
            tituloPag={"Animekun"}
            anime={"Overlord "}
            numero={"4"}
            siguienteVideo={"/ver/overlord-5"}
            capitulosVideo={"/overlord"}
            anteriorVideo={"/ver/overlord-3"}
          />
        }
      />
      <Route
        path="/ver/overlord-5"
        element={
          <Video
            frame1={"https://vanfem.com/v/ejxnzb-4j1m1374"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord Capitulo 5"}
            tituloPag={"Animekun"}
            anime={"Overlord "}
            numero={"5"}
            siguienteVideo={"/ver/overlord-6"}
            capitulosVideo={"/overlord"}
            anteriorVideo={"/ver/overlord-4"}
          />
        }
      />
      <Route
        path="/ver/overlord-6"
        element={
          <Video
            frame1={"https://vanfem.com/v/yz-56fe1yz8p1p0"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord Capitulo 6"}
            tituloPag={"Animekun"}
            anime={"Overlord "}
            numero={"6"}
            siguienteVideo={"/ver/overlord-7"}
            capitulosVideo={"/overlord"}
            anteriorVideo={"/ver/overlord-5"}
          />
        }
      />
      <Route
        path="/ver/overlord-7"
        element={
          <Video
            frame1={"https://vanfem.com/v/njwxdb2x5-njqq1"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord Capitulo 7"}
            tituloPag={"Animekun"}
            anime={"Overlord "}
            numero={"7"}
            siguienteVideo={"/ver/overlord-8"}
            capitulosVideo={"/overlord"}
            anteriorVideo={"/ver/overlord-6"}
          />
        }
      />
      <Route
        path="/ver/overlord-8"
        element={
          <Video
            frame1={"https://vanfem.com/v/8123yu87dr4k6q2"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord Capitulo 8"}
            tituloPag={"Animekun"}
            anime={"Overlord "}
            numero={"8"}
            siguienteVideo={"/ver/overlord-9"}
            capitulosVideo={"/overlord"}
            anteriorVideo={"/ver/overlord-7"}
          />
        }
      />
      <Route
        path="/ver/overlord-9"
        element={
          <Video
            frame1={"https://vanfem.com/v/50ejztdx3wll-rj"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord Capitulo 9"}
            tituloPag={"Animekun"}
            anime={"Overlord "}
            numero={"9"}
            siguienteVideo={"/ver/overlord-10"}
            capitulosVideo={"/overlord"}
            anteriorVideo={"/ver/overlord-8"}
          />
        }
      />
      <Route
        path="/ver/overlord-10"
        element={
          <Video
            frame1={"https://vanfem.com/v/r7exqce4qmnnw4j"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord Capitulo 10"}
            tituloPag={"Animekun"}
            anime={"Overlord "}
            numero={"10"}
            siguienteVideo={"/ver/overlord-11"}
            capitulosVideo={"/overlord"}
            anteriorVideo={"/ver/overlord-9"}
          />
        }
      />
      <Route
        path="/ver/overlord-11"
        element={
          <Video
            frame1={"https://vanfem.com/v/8123yu87dr4d4x8"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord Capitulo 11"}
            tituloPag={"Animekun"}
            anime={"Overlord "}
            numero={"11"}
            siguienteVideo={"/ver/overlord-12"}
            capitulosVideo={"/overlord"}
            anteriorVideo={"/ver/overlord-10"}
          />
        }
      />
      <Route
        path="/ver/overlord-12"
        element={
          <Video
            frame1={"https://vanfem.com/v/jjrxnbd5rkrn777"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={"Overlord Capitulo 12"}
            tituloPag={"Animekun"}
            anime={"Overlord "}
            numero={"12"}
            siguienteVideo={"/ver/overlord-13"}
            capitulosVideo={"/overlord"}
            anteriorVideo={"/ver/overlord-11"}
          />
        }
      />
      <Route
        path="/ver/overlord-13"
        element={
          <Video
            frame1={"https://vanfem.com/v/265jdt2j4p4nemj"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={"Overlord Capitulo 13"}
            tituloPag={"Animekun"}
            anime={"Overlord "}
            numero={"13"}
            capitulosVideo={"/overlord"}
            anteriorVideo={"/ver/-overlord-12"}
          />
        }
      />
      ---------------- ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ---------------- ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ---------------- ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ----------------
      <Route
        path="/ver/-1"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="disable"
            tituloAnime={" 1"}
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloPag={"Animekun"}
            anime={"Akudama Drive"}
            numero={"1"}
            siguienteVideo={"/ver/-2"}
            capitulosVideo={"/"}
          />
        }
      />
      <Route
        path="/ver/-2"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 2"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"2"}
            siguienteVideo={"/ver/-3"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/1"}
          />
        }
      />
      <Route
        path="/ver/-3"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 3"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"3"}
            siguienteVideo={"/ver/-4"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-2"}
          />
        }
      />
      <Route
        path="/ver/-4"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 4"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"4"}
            siguienteVideo={"/ver/-5"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-3"}
          />
        }
      />
      <Route
        path="/ver/-5"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 5"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"5"}
            siguienteVideo={"/ver/-6"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-4"}
          />
        }
      />
      <Route
        path="/ver/-6"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 6"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"6"}
            siguienteVideo={"/ver/-7"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-5"}
          />
        }
      />
      <Route
        path="/ver/-7"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 7"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"7"}
            siguienteVideo={"/ver/-8"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-6"}
          />
        }
      />
      <Route
        path="/ver/-8"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 8"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"8"}
            siguienteVideo={"/ver/-9"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-7"}
          />
        }
      />
      <Route
        path="/ver/-9"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 9"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"9"}
            siguienteVideo={"/ver/-10"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-8"}
          />
        }
      />
      <Route
        path="/ver/-10"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 10"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"10"}
            siguienteVideo={"/ver/-11"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-9"}
          />
        }
      />
      <Route
        path="/ver/-11"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={
              "column is-3-desktop is-2-tablet is-2-mobile cont-siguiente"
            }
            tituloAnime={" Capitulo 11"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"11"}
            siguienteVideo={"/ver/-12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-10"}
          />
        }
      />
      <Route
        path="/ver/-12"
        element={
          <Video
            frame1={"https://sbthe.com/e/.html"}
            contAnteriorClass="column is-3-desktop is-2-tablet is-2-mobile cont-anterior"
            contSiguienteClass={"disable"}
            tituloAnime={" Capitulo 12"}
            tituloPag={"Animekun"}
            anime={" "}
            numero={"12"}
            capitulosVideo={"/"}
            anteriorVideo={"/ver/-11"}
          />
        }
      />
      ----------------
    </Routes>
  );
}
export default Videos;
