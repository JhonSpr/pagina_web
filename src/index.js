import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bulma.min.css';
import { BrowserRouter } from 'react-router-dom';
import App from './home';
import Videos from './videos';
import { Auth0Provider } from '@auth0/auth0-react'
import AlertifyTest from "./alertifyTest";
// import { Animes20 } from './Componentes/Componente20';
// import { Animes19 } from './Componentes/Componente19';
// import { Animes18 } from './Componentes/Componente18';
// import { Animes17 } from './Componentes/Componente17';
// import { Animes16 } from './Componentes/Componente16';
// import { Animes15 } from './Componentes/Componente15';
// import { Animes14 } from './Componentes/Componente14';
// import { Animes13 } from './Componentes/Componente13';
// import { Animes12 } from './Componentes/Componente12';
// import { Animes11 } from './Componentes/componente11';
// import { Animes10 } from './Componentes/componente10';
// import { Animes9 } from './Componentes/Componente9';
// import { Animes8 } from './Componentes/Componente8';
// import { Animes7 } from './Componentes/Componente7';
// import { Animes6 } from './Componentes/componente6';
import { Animes5 } from './Componentes/Componente5';
// import Search from './searchComponent';


export function Alertas() {


  return (
    <div className="App">
    
      <AlertifyTest />
    </div>
  );
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
  <Auth0Provider>
  <App/>
  <Videos/>
  <Animes5/>
  </Auth0Provider>
  
  
  </BrowserRouter>
  
  
);



