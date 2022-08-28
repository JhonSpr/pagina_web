/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
import img from "../Data.json";
import BookData from "../Data.json";
import { Alertas } from "../index";
import SearchBar from '../searchComponent';
import { LoginButton } from '../login'
import LogoutButton from "../logout";
import Profile from "../perfil";
import { useAuth0 } from '@auth0/auth0-react'
import { DiscussionEmbed } from "disqus-react";
import { Component } from "react";


/* eslint-disable jsx-a11y/iframe-has-title */
export function Video({tituloAnime, anime , capitulosVideo, siguienteVideo , numero , contAnteriorClass,contSiguienteClass, iconoAnterior , tituloPag,  iconoSiguiente , frame1 , frame2 , frame3 ,anteriorVideo, classOpcionAnterior, classOpcionCapitulos , classOpcionSiguiente , botonAnterior , botonCapitulos , botonSiguiente , classOpciones}){
    const {isAuthenticated} = useAuth0();
    
    return(
        <div>
                <title>{tituloAnime}</title>
                <link rel="icon" href="./favicon-32x32.png" type="image/x-icon"/>
                <link rel="shortcut icon" href="./favicon-32x32.png" type="image/x-icon" class="imagen-pagina"/>

                <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <a className='navbar-brand item-nav logo-cont' href="/"><h1 className="letraA">A</h1> <h2 className="letraN">n</h2> <h2 className="letraI">i</h2> <h2 className="letraM">m</h2> <h2 className="letraE">e</h2> <h2 className="letraK">k</h2> <h2 className="letraU">u</h2> <h2 className="letraN">n</h2></a>
             
                <div className=" bg-dark" data-bs-toggle="collapse" data-bs-target="#navbarText" >
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarText">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
               
               
                    </a>
                    
                </div>
    <div className="collapse navbar-collapse contenedor-ul" id="navbarText">
    <ul className='navbar-nav'>
    
    
    <Profile/>
           
    {isAuthenticated ? <> 
                                     
                                     <LogoutButton/>
                                     </>
                                     : <LoginButton/>
                                    
                                     }
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
                  
                   
                    <SearchBar placeholder={"Buscar animes..."} data={BookData} imagenSearch={img}/>

                   

                </ul>
               

                
    </div>

  </div>
   
            </nav>

<div className="hero is-fullheightX">
    <section className="section">
        <div className="container">
            <div className="columns is-multiline">

                <div className="column is-12-mobile is-8-tablet is-9-desktop">

                    <h1 className="title is-size-4 has-text-centeredX has-text-weight-semibold is-uppercaseX has-text-light">
                      {anime} {numero} Sub Español
                    </h1>


                </div>

             


                <div className="column is-12-mobile is-9-tablet is-9-desktop">
            
                    <div className="player-container">

                    
                                                 

                        <div className="iframe-container" id="video_player">

                       
                        
                        
                        <iframe src={frame1} id="div1" scrolling='no' allowFullScreen></iframe>
                                                                                                           

                        </div>

                      
                        <div className="column is-12-mobile is-4-tablet is-3-desktop">
                            <div className="columns is-variable is-1 cont-opciones">
        
                                <div className={contAnteriorClass}>
                                    <a href={anteriorVideo} className="button is-orange is-fullwidth">
                                        <i className="fa fa-arrow-left"></i>&nbsp;
                                    </a>
                                </div>
                                
                                <div className="column is-6-desktop is-8-tablet is-8-mobile cont-capitulos">
                                    <a href={capitulosVideo} className="button is-dark">
                                        &nbsp;Episodios
                                    </a>
                                </div>
        
                                <div className={contSiguienteClass}>
                                    <a href={siguienteVideo} className="button is-orange is-fullwidth">
                                        <i className="fa fa-arrow-right"></i>&nbsp;
                                    </a>
                                </div>
                                
        
                            </div>
                        </div>
                    </div>

        
                    <h1 className="title is-size-5 has-text-weight-light has-text-light">
                        {tituloPag} Online HD  </h1>
                    <div id="commentsContainer">
                        <div id="showComments" className="button is-fullwidth is-dark">{anime}</div>
                    </div>
                </div>
                                     <Component/>
               <DiscussionEmbed/>
                                    
            </div>
        </div>
    </section>

</div>
        </div>
    );
}
