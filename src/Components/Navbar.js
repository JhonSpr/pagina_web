/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { AlertError } from "../Alertas/AlertError";
import Search from "./Search";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg ">
        <div>
          <a className="navbar-brand container-logo logo-cont" href="/">
            <h3 className="letraA">A</h3>
            <h3 className="letraM"> NIMEKUN</h3>
            <h3 className="letraA">S</h3>
          </a>
        </div>
        <a
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa-solid fa-bars"></i>
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item first-opcion">
              <a className="nav-link" href="/">
                Inicio
              </a>
            </li>
            <li class="nav-item">
              <a className="nav-link" href="/animes">
                Animes
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                estados
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/en-emision">
                  En Emision
                </a>
                <a className="dropdown-item" href="/finalizados">
                  Finalizado
                </a>
                <AlertError mensaje={"¡Proximamente!"} />
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                tipos
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/animes/tv">
                  TV
                </a>
                <a className="dropdown-item" href="/animes/ova">
                  OVA
                </a>
                <a className="dropdown-item" href="/animes/peliculas">
                  PELICULA
                </a>
              </div>
            </li>
          </ul>
          <Search />
        </div>
      </nav>
    </>
  );
}
