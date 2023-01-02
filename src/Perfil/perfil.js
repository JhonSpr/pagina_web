import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } =
    useAuth0();

  if (isLoading) {
    return (
      <div
        class="spinner-border spinner-border-sm spinner-container"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    isAuthenticated && (
      <li className="navbar-item perfil-container">
        <img src={user.picture} alt={user.nickname} />

        <a href={`/perfil/${user.nickname}`}>
          <h2 className="nickname">{user.nickname}</h2>
        </a>
        {isAuthenticated ? (
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="logout-sesion-mobile"
          >
            Cerrar Sesion
          </button>
        ) : (
          <button
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
          </button>
        )}
      </li>
    )
  );
};

export default Profile;
