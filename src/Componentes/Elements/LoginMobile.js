/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButtonMobile = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <li className="navbar-item item-nav btn-mobile">
      <button onClick={() => loginWithRedirect()} className="button is-orange">
        Iniciar Sesion
      </button>
    </li>
  );
};
