/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <li className="navbar-item item-nav">
        <a onClick={() => logout({ returnTo: window.location.origin })} className="nav-link item-nav">Cerrar Session</a>
    </li>
  );
};

export default LogoutButton;