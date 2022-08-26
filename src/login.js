import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  
    return (
        <li className="navbar-item item-nav">
            <button onClick={() => loginWithRedirect()} className="button is-orange">Iniciar Sesion</button>
        </li>
    );
  };
  
