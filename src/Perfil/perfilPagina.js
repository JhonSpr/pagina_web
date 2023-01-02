import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const PerfilPag = () => {
  const { logout } = useAuth0();

  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="spinner-border text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    isAuthenticated && (
      <>
        <div className="banner_perfil" />
        <div className="contenedor-informacion container">
          <div className="container-imagen">
            <img src={user.picture} alt={user.name} className="imagen-perfil" />
          </div>
          <div className="container-informacion">
            <ul>
              <hr />
              <li>
                <p className="nickname">Usuario: {user.nickname}</p>
              </li>
              <hr />
              <li>
                <p className="nickname">Correo Electronico: {user.email}</p>
              </li>
              <hr />

              <li>
                <p className="nickname">
                  Correo Electronico Verificado: {String(user.email_verified)}
                </p>
              </li>
              <hr />

              <li>
                <p className="nickname">ID: {Math.random() * 10000}</p>
              </li>
            </ul>

            <button
              onClick={() => logout({ returnTo: window.location.origin })}
              className="session-desktop"
            >
              Cerrar Session
            </button>
          </div>

          <div id="disqus_thread" style={{ display: "none" }}></div>
        </div>
      </>
    )
  );
};

export default PerfilPag;
