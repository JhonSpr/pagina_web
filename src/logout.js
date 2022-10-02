/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <a onClick={() => logout({ returnTo: window.location.origin })}>
      Cerrar Session
    </a>
  );
};

export default LogoutButton;
