/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  
    return (
        <li className="navbar-item item-nav">
            <button onClick={() => loginWithRedirect()} className="button is-orange">Iniciar Sesion</button>
            <a href="https://dev-xb-8m80m.us.auth0.com/u/signup?state=hKFo2SAteXRJVURiNVZMQXVnZ3pJOG5Eb25mNktWUEUySnlLa6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIFdONDVWWjZCQlhTc1pYZG80ZTB2MmkxZTA3U1lkbmN5o2NpZNkgM2JhZUdveG55NzE5MHVGbDZDUWZuN2I0NnRraVdhWHk" className="button is-orange boton-registrarse">Registrarse</a>
        </li>
        

        
    );
  };
  
