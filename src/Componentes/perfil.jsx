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
  
    <section className="section-perfil">
        <PerfilPag/>
     
    </section>
    </div>
    );
}