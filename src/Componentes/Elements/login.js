/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <a
      onClick={() => loginWithRedirect()}
      style={{
        color: "#d1d1d1",
        border: "1px solid #363636",
        padding: "5px",
        borderRadius: "7px",
      }}
      className="session-desktop"
    >
      Iniciar Sesión
    </a>
  );
};
