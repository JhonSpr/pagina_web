/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
export function Capitulos24({genre1,genre2,genre3,genre4,genre5,genero1,genero2,genero3,genero4,genero5,tituloAnime,videoTrailer,imagenAnime,descripcion,anime,numeroEpisodios,tipo,estado3,estado,capituloAnime1,capituloAnime2,capituloAnime3,capituloAnime4,capituloAnime5,capituloAnime6,capituloAnime7,capituloAnime8,capituloAnime9,capituloAnime10,capituloAnime11,capituloAnime12,capituloAnime13,capituloAnime14,capituloAnime15,capituloAnime16,capituloAnime17,capituloAnime18,capituloAnime19,capituloAnime20,capituloAnime21,capituloAnime22,capituloAnime23,capituloAnime24,capituloAnime25,capituloAnime26,capituloAnime27,capituloAnime28,capituloAnime29,capituloAnime30,capituloAnime31,capituloAnime32,capituloAnime33,capituloAnime34,capituloAnime35,capituloAnime36,capituloAnime37,capituloAnime38,capituloAnime39,capituloAnime40,numeroCapitulo1,numeroCapitulo2,numeroCapitulo3,numeroCapitulo4,numeroCapitulo5,numeroCapitulo6,numeroCapitulo7,numeroCapitulo8,numeroCapitulo9,numeroCapitulo10,numeroCapitulo11,numeroCapitulo12,numeroCapitulo13,numeroCapitulo14,numeroCapitulo15,numeroCapitulo16,numeroCapitulo17,numeroCapitulo18,numeroCapitulo19,numeroCapitulo20,numeroCapitulo21,numeroCapitulo22,numeroCapitulo23,numeroCapitulo24,numeroCapitulo25,numeroCapitulo26,numeroCapitulo27,numeroCapitulo28,numeroCapitulo29,numeroCapitulo30,numeroCapitulo31,numeroCapitulo32,numeroCapitulo33,numeroCapitulo34,numeroCapitulo35,numeroCapitulo36,numeroCapitulo37,numeroCapitulo38,numeroCapitulo39,numeroCapitulo40}){
    return (
        <div id="root">
                
    <title>{tituloAnime}</title>
    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
  <a className='navbar-brand item-nav' href="/"><img src="" alt="Logo" /></a>
  <div className="navbar-toggler bg-dark" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" >
  <span className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
    </span>
    </div>
    <div className="collapse navbar-collapse" id="navbarText">
    <ul className='navbar-nav'>
                    <li className='navbar-item item-nav'>
                        <a className='nav-link item-nav' href='animes'>Animes </a>
                    </li>
                    <li className='navbar-item item-nav' >
                        <a className='nav-link item-nav' href='en-emision'>En Emision</a>
                    </li>
                    <li className='navbar-item item-nav'>
                        <a className='nav-link item-nav' href='ovas'>Ovas</a>
                    </li>
                </ul>

                
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

                   <p class="genres buttons">
                                                    <a className={genre1}>{genero1}</a>
                                                    <a className={genre2}>{genero2}</a>
                                                    <a className={genre3}>{genero3}</a>
                                                    <a className={genre4}>{genero4}</a>
                                                    <a className={genre5}>{genero5}</a>
                                                </p>

                    <p className="has-text-weight-semibold is-uppercase has-text-grey has-border-bottom">Información general</p>

                    <ul className="has-text-light">
                        <li><span className="has-text-weight-semibold has-text-grey is-uppercase">Tipo:</span> {tipo}</li>
                        <li><span className="has-text-weight-semibold has-text-grey is-uppercase">Estado:</span> {estado}</li>
                        <li><span className="has-text-weight-semibold has-text-grey is-uppercase">Episodios:</span> {numeroEpisodios}</li>
                        
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
                        <i className="fa fa-list-ul has-text-orange "></i> Lista de episodios
                    </h1>

                    
                    <ul className="anime-page__episode-list is-size-6">
                   

                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime1}>{anime} <span> Episodio {numeroCapitulo1}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime2}>{anime} <span> Episodio {numeroCapitulo2}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime3}>{anime} <span> Episodio {numeroCapitulo3}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime4}>{anime} <span> Episodio {numeroCapitulo4}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime5}>{anime} <span> Episodio {numeroCapitulo5}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime6}>{anime} <span> Episodio {numeroCapitulo6}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime7}>{anime} <span> Episodio {numeroCapitulo7}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime8}>{anime} <span> Episodio {numeroCapitulo8}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime9}>{anime} <span> Episodio {numeroCapitulo9}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime10}>{anime} <span> Episodio {numeroCapitulo10}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime11}>{anime} <span> Episodio {numeroCapitulo11}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime12}>{anime} <span> Episodio {numeroCapitulo12}</span></a>
                            </li>
                             <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime13}>{anime} <span>Episodio{numeroCapitulo13}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime14}>{anime} <span>Episodio{numeroCapitulo14}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime15}>{anime} <span>Episodio{numeroCapitulo15}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime16}>{anime} <span>Episodio{numeroCapitulo16}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime17}>{anime} <span>Episodio{numeroCapitulo17}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime18}>{anime} <span>Episodio{numeroCapitulo18}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime19}>{anime} <span>Episodio{numeroCapitulo19}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime20}>{anime} <span>Episodio{numeroCapitulo20}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime21}>{anime} <span>Episodio{numeroCapitulo21}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime22}>{anime} <span>Episodio{numeroCapitulo22}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime23}>{anime} <span>Episodio{numeroCapitulo23}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime24}>{anime} <span>Episodio{numeroCapitulo24}</span></a>
                            </li>
                            {/*
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime25}>{anime} <span>Episodio{numeroCapitulo25}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime26}>{anime} <span>Episodio{numeroCapitulo26}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime27}>{anime} <span>Episodio{numeroCapitulo27}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime28}>{anime} <span>Episodio{numeroCapitulo28}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime29}>{anime} <span>Episodio{numeroCapitulo29}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime30}>{anime} <span>Episodio{numeroCapitulo30}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime31}>{anime} <span>Episodio{numeroCapitulo31}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime32}>{anime} <span>Episodio{numeroCapitulo32}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime33}>{anime} <span>Episodio{numeroCapitulo33}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime34}>{anime} <span>Episodio{numeroCapitulo34}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime35}>{anime} <span>Episodio{numeroCapitulo35}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime36}>{anime} <span>Episodio{numeroCapitulo36}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime37}>{anime} <span>Episodio{numeroCapitulo37}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime38}>{anime} <span>Episodio{numeroCapitulo38}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime39}>{anime} <span>Episodio{numeroCapitulo39}</span></a>
                            </li>
                            <li>
                                <a className="fa-play-circle d-inline-flex align-items-center is-rounded " href={capituloAnime40}>{anime} <span>Episodio{numeroCapitulo40}</span></a>
                            </li> */}
                            
                                                    
                                            
                    </ul>


           

           </div>
           </div>
           </div>
      
    </section>








        </div>
    );
}