/* eslint-disable jsx-a11y/anchor-is-valid */
import PerfilPag from "../perfilPagina";
import img from "../Data.json";
import BookData from "../Data.json";
import { Alertas} from '../index'
import SearchBar from '../searchComponent';

export function PerfilPaginaMenu(){

    return(

    <div>
        <title>Perfil</title>
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
    <section className="section-perfil">
        <PerfilPag/>
     
    </section>
    </div>
    );
}