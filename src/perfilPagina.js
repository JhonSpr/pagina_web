import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "./login";
import LogoutButton from "./logout";

var axios = require("axios").default;

var options = {
  method: 'PATCH',
  url: 'https://YOUR_DOMAIN/api/v2/users/USER_ID',
  headers: {authorization: 'Bearer ABCD', 'content-type': 'application/json'},
  data: {user_metadata: {picture: 'https://example.com/some-image.png'}}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});


const PerfilPag = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div class="spinner-border spinner-border-sm spinner-container" role="status">
    <span class="visually-hidden">Loading...</span>
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
       <div className="container">
       {isAuthenticated ? <> 
                             
                             <LogoutButton/>
                             </>
                             : <LoginButton/>
                            
                             }
       </div>
    
    
       </div>
        
      
        
      </div>
       
      
    )
  );
};

export default PerfilPag;