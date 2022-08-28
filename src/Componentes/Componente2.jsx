/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/anchor-is-valid */
import img from "../Data.json";
import BookData from "../Data.json";
import { Alertas } from "../index";
import SearchBar from '../searchComponent';
import { LoginButton } from '../login'
import LogoutButton from "../logout";
import Profile from "../perfil";
import { useAuth0 } from '@auth0/auth0-react'
import { Disqus } from "./disqus";


/* eslint-disable jsx-a11y/iframe-has-title */
export function Capitulos12({hrefGenre1,hrefGenre2,hrefGenre3,hrefGenre4,hrefGenre5,genre1,genre2,genre3,genre4,genre5,genero1,genero2,genero3,genero4,genero5,sec1,sec2,sec3,hrefSecuela2,hrefSecuela3,nombreSecuela2,nombreSecuela3,textoSecuela2,textoSecuela3,hrefSecuela,textoSecuela,nombreSecuela,tituloAnime,videoTrailer,imagenAnime,descripcion,anime,numeroEpisodios,tipo,estado,li1,li2,li3,li4,li5,li6,li7,li8,li9,li10,li11,li12,li13,li14,li15,li16,li17,li18,li19,li20,li21,li22,li23,li24,li25,li26,li27,li28,li29,li30,li31,li32,li33,li34,li35,li36,li37,li38,li39,li40,capituloAnime1,capituloAnime2,capituloAnime3,capituloAnime4,capituloAnime5,capituloAnime6,capituloAnime7,capituloAnime8,capituloAnime9,capituloAnime10,capituloAnime11,capituloAnime12,capituloAnime13,capituloAnime14,capituloAnime15,capituloAnime16,capituloAnime17,capituloAnime18,capituloAnime19,capituloAnime20,capituloAnime21,capituloAnime22,capituloAnime23,capituloAnime24,capituloAnime25,capituloAnime26,capituloAnime27,capituloAnime28,capituloAnime29,capituloAnime30,capituloAnime31,capituloAnime32,capituloAnime33,capituloAnime34,capituloAnime35,capituloAnime36,capituloAnime37,capituloAnime38,capituloAnime39,capituloAnime40,numeroCapitulo1,numeroCapitulo2,numeroCapitulo3,numeroCapitulo4,numeroCapitulo5,numeroCapitulo6,numeroCapitulo7,numeroCapitulo8,numeroCapitulo9,numeroCapitulo10,numeroCapitulo11,numeroCapitulo12,numeroCapitulo13,numeroCapitulo14,numeroCapitulo15,numeroCapitulo16,numeroCapitulo17,numeroCapitulo18,numeroCapitulo19,numeroCapitulo20,numeroCapitulo21,numeroCapitulo22,numeroCapitulo23,numeroCapitulo24,numeroCapitulo25,numeroCapitulo26,numeroCapitulo27,numeroCapitulo28,numeroCapitulo29,numeroCapitulo30,numeroCapitulo31,numeroCapitulo32,numeroCapitulo33,numeroCapitulo34,numeroCapitulo35,numeroCapitulo36,numeroCapitulo37,numeroCapitulo38,numeroCapitulo39,numeroCapitulo40}){
    const {isAuthenticated} = useAuth0();
    return (
        <section>
                
    <title>{tituloAnime}</title>
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
                           <li className='navbar-item item-nav ml-2'>
                               <a className='nav-link item-nav' href='/animes'>Animes </a>
                           </li>
                           <li className='navbar-item item-nav' >
                               <a className='nav-link item-nav' href='/en-emision'>En Emision</a>
                           </li>
                         
                           <Alertas/>
                           <li className='navbar-item item-nav' >
                               <a className='nav-link item-nav' href='/ovas'>Ovas</a>
                           </li>
             
                         
      </ul>
      <Profile/>
           
           <div className="contenedor-botones">
           {isAuthenticated ? <> 
                                             
                                             <LogoutButton/>
                                             </>
                                             : <LoginButton/> 
                                              
                                             }
           </div>
      <form class="d-flex" role="search">
      <SearchBar placeholder={"Buscar animes..."} data={BookData} imagenSearch={img}/>
      </form>
    </div>
  </div>
            </nav>

<section className="section">
        <div className="container">
            <div className="columns is-mobile is-multiline">
                <div className="column is-12-mobile xis-3-tablet xis-3-desktop xhas-background-danger is-narrow-tablet is-narrow-desktop">
                    <figure className="image is-2by4 image_2">
                        <img src={imagenAnime} alt={anime} />
                    </figure>
                    <br/>
                                                                
                         
                </div>
                
                <div className="column">
                    <div className="columns is-multiline is-narrow">
                        <div className="column is-12-mobile is-8-tablet is-10-desktop">
                            <h1 className="title has-text-orange">{anime}</h1>
                        </div>
                        <div className="column is-12-mobile is-4-tablet is-2-desktop">
                          
                        </div>
                    </div>

                    <h6 className="has-text-weight-semibold is-uppercase has-text-grey has-border-bottom">Descripcion</h6>
                    <div className="has-text-light sinopsis">  
                    {descripcion}                      
                    </div>
                    
                    
                   <br/>

                   <p class="genres buttons contenedor-generos">
                                                    <a className={genre1} href={hrefGenre1}>{genero1}</a>
                                                    <a className={genre2} href={hrefGenre2}>{genero2}</a>
                                                    <a className={genre3} href={hrefGenre3}>{genero3}</a>
                                                    <a className={genre4} href={hrefGenre4}>{genero4}</a>
                                                    <a className={genre5} href={hrefGenre5}>{genero5}</a>
                                                </p>

                    <p className="has-text-weight-semibold is-uppercase has-text-grey has-border-bottom">Información general</p>

                    <ul className="has-text-light">
                        <li><span className="has-text-weight-semibold has-text-grey is-uppercase">Tipo:</span> {tipo}</li>
                        <li><span className="has-text-weight-semibold has-text-grey is-uppercase">Estado:</span> {estado}</li>
                        <li><span className="has-text-weight-semibold has-text-grey is-uppercase">Episodios:</span> {numeroEpisodios}</li>
                        <li className={sec1}><span className="has-text-weight-semibold has-text-grey is-uppercase">{textoSecuela}:</span><a href={hrefSecuela}>{nombreSecuela}</a></li>
                        <li className={sec2}><span className="has-text-weight-semibold has-text-grey is-uppercase">{textoSecuela2}:</span><a href={hrefSecuela2}>{nombreSecuela2}</a></li>
                        <li className={sec3}><span className="has-text-weight-semibold has-text-grey is-uppercase">{textoSecuela3}:</span><a href={hrefSecuela3}>{nombreSecuela3}</a></li>

                    </ul>
                     
                </div>

                </div>
            
            </div>

        
    </section>
                            
    <section className="section">
        <div className="container">

            <div className="columns">

                <div className="column is-12">

                    <h1 className="title is-size-5 has-text-weight-light has-text-light has-text-weight-semibold ">
                        <i className="fa fa-list-ul has-text-orange Icono-list"></i>  <b> Lista de episodios </b>
                    </h1>

                    
                    <ul className="anime-page__episode-list is-size-6">
                   

                            <li id={li1}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime1}>{anime} <span> Episodio {numeroCapitulo1}</span></a>
                            </li>
                            <li className={li2}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime2}>{anime} <span> Episodio {numeroCapitulo2}</span></a>
                            </li>
                            <li className={li3}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime3}>{anime} <span> Episodio {numeroCapitulo3}</span></a>
                            </li>
                            <li className={li4}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime4}>{anime} <span> Episodio {numeroCapitulo4}</span></a>
                            </li>
                            <li className={li5}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime5}>{anime} <span> Episodio {numeroCapitulo5}</span></a>
                            </li>
                            <li className={li6}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime6}>{anime} <span> Episodio {numeroCapitulo6}</span></a>
                            </li>
                            <li className={li7}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime7}>{anime} <span> Episodio {numeroCapitulo7}</span></a>
                            </li>
                            <li className={li8}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime8}>{anime} <span> Episodio {numeroCapitulo8}</span></a>
                            </li>
                            <li className={li9}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime9}>{anime} <span> Episodio {numeroCapitulo9}</span></a>
                            </li>
                            <li className={li10}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime10}>{anime} <span> Episodio {numeroCapitulo10}</span></a>
                            </li>
                            <li className={li11}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime11}>{anime} <span> Episodio {numeroCapitulo11}</span></a>
                            </li>
                            <li className={li12}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime12}>{anime} <span> Episodio {numeroCapitulo12}</span></a>
                            </li>
                            <li className={li13}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime13}>{anime} <span>Episodio {numeroCapitulo13}</span></a>
                            </li>
                            <li className={li14}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime14}>{anime} <span>Episodio {numeroCapitulo14}</span></a>
                            </li>
                            <li className={li15}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime15}>{anime} <span>Episodio {numeroCapitulo15}</span></a>
                            </li>
                            <li className={li16}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime16}>{anime} <span>Episodio {numeroCapitulo16}</span></a>
                            </li>
                            <li className={li17}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime17}>{anime} <span>Episodio {numeroCapitulo17}</span></a>
                            </li>
                            <li className={li18}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime18}>{anime} <span>Episodio {numeroCapitulo18}</span></a>
                            </li>
                            <li className={li19}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime19}>{anime} <span>Episodio {numeroCapitulo19}</span></a>
                            </li>
                            <li className={li20}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime20}>{anime} <span>Episodio {numeroCapitulo20}</span></a>
                            </li>
                            <li className={li21}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime21}>{anime} <span>Episodio {numeroCapitulo21}</span></a>
                            </li>
                            <li className={li22}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime22}>{anime} <span>Episodio {numeroCapitulo22}</span></a>
                            </li>
                            <li className={li23}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime23}>{anime} <span>Episodio {numeroCapitulo23}</span></a>
                            </li>
                            <li className={li24}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime24}>{anime} <span>Episodio {numeroCapitulo24}</span></a>
                            </li>
                            <li className={li25}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime25}>{anime} <span>Episodio {numeroCapitulo25}</span></a>
                            </li>
                            <li className={li26}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime26}>{anime} <span>Episodio {numeroCapitulo26}</span></a>
                            </li>
                            <li className={li27}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime27}>{anime} <span>Episodio {numeroCapitulo27}</span></a>
                            </li>
                            <li className={li28}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime28}>{anime} <span>Episodio {numeroCapitulo28}</span></a>
                            </li>
                            <li className={li29}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime29}>{anime} <span>Episodio {numeroCapitulo29}</span></a>
                            </li>
                            <li className={li30}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime30}>{anime} <span>Episodio {numeroCapitulo30}</span></a>
                            </li>
                            <li className={li31}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime31}>{anime} <span>Episodio {numeroCapitulo31}</span></a>
                            </li>
                            <li className={li32}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime32}>{anime} <span>Episodio {numeroCapitulo32}</span></a>
                            </li>
                            <li className={li33}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime33}>{anime} <span>Episodio {numeroCapitulo33}</span></a>
                            </li>
                            <li className={li34}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime34}>{anime} <span>Episodio {numeroCapitulo34}</span></a>
                            </li>
                            <li className={li35}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime35}>{anime} <span>Episodio {numeroCapitulo35}</span></a>
                            </li>
                            <li className={li36}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime36}>{anime} <span>Episodio {numeroCapitulo36}</span></a>
                            </li>
                            <li className={li37}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime37}>{anime} <span>Episodio {numeroCapitulo37}</span></a>
                            </li>
                            <li className={li38}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime38}>{anime} <span>Episodio {numeroCapitulo38}</span></a>
                            </li>
                            <li className={li39}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime39}>{anime} <span>Episodio {numeroCapitulo39}</span></a>
                            </li>
                            <li className={li40}>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime40}>{anime} <span>Episodio {numeroCapitulo40}</span></a>
                            </li>
                            
                                                    
                                            
                    </ul>


           

           </div>
           </div>
           </div>
      
    </section>






<Disqus/>

        </section>
    );
}