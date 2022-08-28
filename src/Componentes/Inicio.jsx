/* eslint-disable jsx-a11y/anchor-is-valid */

import img from "../Data.json";
import BookData from "../Data.json";
import '../css/alertify.min.css'
import '../css/themes/default.min.css'
import { Alertas} from '../index'
import SearchBar from '../searchComponent';
import { Noticia } from "./Noticias";
import { LoginButton } from '../login'
import LogoutButton from "../logout";
import Profile from "../perfil";
import { useAuth0 } from '@auth0/auth0-react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Disqus } from "./disqus";


/* eslint-disable jsx-a11y/no-distracting-elements */
export function Inicio({href1,href2,href3,href4,href5,href6,href7,href8,href9,href10,anime1,anime2,anime3,anime4,anime5,anime6,anime7,anime8,anime9,anime10,img1,img2,img3,
                        img4,img5,img6,img7,img8,img9,img10,alt1,alt2,alt3,alt4,alt5,alt6,alt7,alt8,alt9,alt10,year1,year2,year3,year4,year5,year6,year7,year8,year9,year10,
                        emision,tv}){
               
                           
    const { isAuthenticated } = useAuth0();


    return(

    <section>
   
            <title>Animekun</title>

            <nav class="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                    <a className='navbar-brand item-nav logo-cont' href="/"><h1 className="letraA">A</h1> <h2 className="letraN">n</h2> <h2 className="letraI">i</h2> <h2 className="letraM">m</h2> <h2 className="letraE">e</h2> <h2 className="letraK">k</h2> <h2 className="letraU">u</h2> <h2 className="letraN">n</h2></a>

    <div className=" bg-dark" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" >
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarText">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
               
               
                    </a>
                    
                </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 cont-ul">
      
                           <li className='navbar-item mobile item-nav'>
                               <a className='nav-link item-nav' href='/'>Inicio </a>
                           </li>
                           <li className='navbar-item item-nav'>
                               <a className='nav-link item-nav' href='/animes'>Animes </a>
                           </li>
                           <li className='navbar-item item-nav' >
                               <a className='nav-link item-nav' href='/en-emision'>En Emision</a>
                           </li>
                         
                           <Alertas/>
                           <li className='navbar-item item-nav' >
                               <a className='nav-link item-nav' href='/ovas'>Ovas</a>
                           </li>
                           <Profile/>
           
           {isAuthenticated ? <> 
                                            
                                            <LogoutButton/>
                                            </>
                                            : <LoginButton/> 
                                             
                                            }
                         
      </ul>
    
      <form class="d-flex" role="search">
      <SearchBar placeholder={"Buscar animes..."} data={BookData} imagenSearch={img}/>
      </form>
    </div>
  </div>
</nav>

    

           

            <div className="hero is-lightx is-fullheight">
            <div>
               

                <section className="section page-home__latest-series" >
                <div className="container rounded-container">
                <h1 className="titulo title is-size-4 has-text-centered has-text-weight-semibold has-text-light is-uppercase">Ultimos Animes Agregados</h1>
                <hr />
                    <div className="list-series">
                    

                <article className="serie-card" title={anime1}>
                    <figure className="image">
                        <a href={href1}>
                            <img src={img1} alt={alt1} />
                        </a>
                        <span className="tag year is-dark">{year1}</span>
                        <span className="tag is-danger type">{tv}</span>
                        <div className="title">
                            <h3><a href={href1} className="has-text-orange has-text-weight-semibold has-text-centered is-size-6">{anime1}</a></h3>
                        </div>
                    </figure>
                </article>

                <article className="serie-card" title={anime2}>
                    <figure className="image">
                        <a href={href2}>
                            <img src={img2} alt={alt2} />
                        </a>
                        <span className="tag year is-dark">{year2}</span>
                        <span className="tag is-danger type">{tv}</span>
                        <div className="title">
                            <h3><a href={href2} className="has-text-orange has-text-weight-semibold has-text-centered is-size-6">{anime2}</a></h3>
                        </div>
                    </figure>
                </article>
                <article className="serie-card" title={anime3}>
                    <figure className="image">
                        <a href={href3}>
                            <img src={img3} alt={alt3} />
                        </a>
                        <span className="tag year is-dark">{year3}</span>
                        <span className="tag is-danger type">{tv}</span>
                        <div className="title">
                            <h3><a href={href3} className="has-text-orange has-text-weight-semibold has-text-centered is-size-6">{anime3}</a></h3>
                        </div>
                    </figure>
                </article>
                <article className="serie-card" title={anime4}>
                    <figure className="image">
                        <a href={href4}>
                            <img src={img4} alt={alt4} />
                        </a>
                        <span className="tag year is-dark">{year4}</span>
                        <span className="tag is-danger type">{tv}</span>
                        <div className="title">
                            <h3><a href={href4} className="has-text-orange has-text-weight-semibold has-text-centered is-size-6">{anime4}</a></h3>
                        </div>
                    </figure>
                </article>
                <article className="serie-card" title={anime5}>
                    <figure className="image">
                        <a href={href5}>
                            <img src={img1} alt={alt5} />
                        </a>
                        <span className="tag year is-dark">{year5}</span>
                        <span className="tag is-danger type">{tv}</span>
                        <div className="title">
                            <h3><a href={href5} className="has-text-orange has-text-weight-semibold has-text-centered is-size-6">{anime5}</a></h3>
                        </div>
                    </figure>
                </article>
                <article className="serie-card" title={anime6}>
                    <figure className="image">
                        <a href={href6}>
                            <img src={img6} alt={alt6} />
                        </a>
                        <span className="tag year is-dark">{year6}</span>
                        <span className="tag is-danger type">{tv}</span>
                        <div className="title">
                            <h3><a href={href6} className="has-text-orange has-text-weight-semibold has-text-centered is-size-6">{anime6}</a></h3>
                        </div>
                    </figure>
                </article>
                <article className="serie-card" title={anime7}>
                    <figure className="image">
                        <a href={href7}>
                            <img src={img1} alt={alt7} />
                        </a>
                        <span className="tag year is-dark">{year7}</span>
                        <span className="tag is-danger type">{tv}</span>
                        <div className="title">
                            <h3><a href={href7} className="has-text-orange has-text-weight-semibold has-text-centered is-size-6">{anime7}</a></h3>
                        </div>
                    </figure>
                </article>
                <article className="serie-card" title={anime8}>
                    <figure className="image">
                        <a href={href8}>
                            <img src={img8} alt={alt8} />
                        </a>
                        <span className="tag year is-dark">{year8}</span>
                        <span className="tag is-danger type">{tv}</span>
                        <div className="title">
                            <h3><a href={href8} className="has-text-orange has-text-weight-semibold has-text-centered is-size-6">{anime8}</a></h3>
                        </div>
                    </figure>
                </article>
                <article className="serie-card" title={anime9}>
                    <figure className="image">
                        <a href={href9}>
                            <img src={img9} alt={alt9} />
                        </a>
                        <span className="tag year is-dark">{year9}</span>
                        <span className="tag is-danger type">{tv}</span>
                        <div className="title">
                            <h3><a href={href9} className="has-text-orange has-text-weight-semibold has-text-centered is-size-6">{anime9}</a></h3>
                        </div>
                    </figure>
                </article>
                <article className="serie-card" title={anime10}>
                    <figure className="image">
                        <a href={href10}>
                            <img src={img10} alt={alt10} />
                        </a>
                        <span className="tag year is-dark">{year10}</span>
                        <span className="tag is-danger type">{tv}</span>
                        <div className="title">
                            <h3><a href={href10} className="has-text-orange has-text-weight-semibold has-text-centered is-size-6">{anime10}</a></h3>
                        </div>
                    </figure>
                </article>


                    </div>
                </div>
                </section>

                <section className="section page-home__latest-series" >
                <div className="container rounded-container div-noticias">
                <h1 className="titulo title is-size-4 has-text-centered has-text-weight-semibold has-text-light is-uppercase">NOTICIAS SOBRE ANIME</h1>
                <hr />
                    <div className="list-series">
                    

              
                <Noticia/>
                    </div>
                </div>
                </section>
                
                

            </div>
            
            </div>

            <Disqus/>                      
    </section>
    
    );
}

