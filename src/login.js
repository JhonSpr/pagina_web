import React from "react";
import useAuth0 from "@auth0/auth0-react/dist/use-auth0";

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return <button onClick={() => loginWithRedirect()} className="Boton_Login">Iniciar Sesion</button>
}