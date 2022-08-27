import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const PerfilPag = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div class="spinner-border spinner-border-sm spinner-container" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>;
  }

  return (
    isAuthenticated && (
      <div className="contenedor-informacion">
       
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
       </div>
        
      
        
      </div>
       
      
    )
  );
};

export default PerfilPag;