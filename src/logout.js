import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <li className="navbar-item item-nav">
        <button onClick={() => logout({ returnTo: window.location.origin })} className="button is-orange">Cerrar Session</button>
    </li>
  );
};

export default LogoutButton;