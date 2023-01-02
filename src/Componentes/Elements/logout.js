/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <a
      onClick={() => logout({ returnTo: window.location.origin })}
      style={{
        marginLeft: "10px",
        borderTop: "1px solid #00f4f8",
        color: "#d1d1d1",
      }}
    >
      Cerrar Session
    </a>
  );
};

export default LogoutButton;
