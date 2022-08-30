/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButtonMobile = () => {
  const { logout } = useAuth0();

  return (
    <li className="navbar-item item-nav btn-mobile">
      <button
        onClick={() => logout({ returnTo: window.location.origin })}
        className="button is-orange"
      >
        Cerrar Session
      </button>
    </li>
  );
};

export default LogoutButtonMobile;
