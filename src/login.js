import React from "react";
import useAuth0 from "@auth0/auth0-react/dist/use-auth0";

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <li className="navbar-nav navbar-item">
            <button onClick={() => loginWithRedirect()} className="button is-orange" >Iniciar Sesion</button>
        </li>
    );
}