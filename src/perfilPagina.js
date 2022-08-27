import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./login";
import LogoutButton from "./logout";


const PerfilPag = () => {
    const { loginWithRedirect } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className="spinner-grow" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>;
  }

  return (
    isAuthenticated && (
      <div className="contenedor-informacion container">
       
       <div className="container-imagen">
       <img src={user.picture} alt={user.name} />
       </div>
       <div className="container-informacion">
       <ul>
        <li>
        <p className="nickname">Nombre de Usuario: {user.nickname}</p>
        </li>
        <li>
        <p className="nickname">Correo Electronico: {user.email}</p>
        </li>
      
       </ul>
       
       {isAuthenticated ? <> 
                             
                             <LogoutButton/>
                             </>
                             : <LoginButton/>
                            
                             }
      <button className="button is-orange" type="button" disabled onClick={() => loginWithRedirect()}>
    Iniciar Sesion
</button>

    
    
       </div>
        
      
        
      </div>
       
      
    )
  );
};

export default PerfilPag;