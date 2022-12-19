/* eslint-disable jsx-a11y/anchor-is-valid */

import img from "../Json/Data.json";
import BookData from "../Json/Data.json";
import { Alertas } from "../index";
import SearchBar from "../searchComponent";
import { LoginButton } from "./Elements/login";
import LogoutButton from "./Elements/logout";
import Profile from "../Perfil/perfil";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButtonMobile } from "./Elements/LoginMobile";
import LogoutButtonMobile from "./Elements/LogoutMobile";
import ProfileMobile from "../Perfil/perfilMobile";

export default function Menubar() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand item-nav logo-cont" href={"/"}>
            <h1 className="letraA">A</h1> <h2 className="letraN">n</h2>{" "}
            <h2 className="letraI">i</h2> <h2 className="letraM">m</h2>{" "}
            <h2 className="letraE">e</h2> <h2 className="letraK">k</h2>{" "}
            <h2 className="letraU">u</h2> <h2 className="letraN">n</h2>
            <h2 className="letraN">S</h2>
          </a>

          <div
            className=" bg-dark"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <a
              role="button"
              className="navbar-burger burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarText"
            >
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </a>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 cont-ul">
              <li className="navbar-item mobile item-nav">
                <a href={"/"} className="nav-link item-nav">
                  Inicio
                </a>
              </li>
              <li className="navbar-item item-nav first-item_desktop">
                <a href={"/animes"} className="nav-link item-nav">
                  Animes
                </a>
              </li>
              <li className="navbar-item item-nav">
                <a href={"/emisiones"} className="nav-link item-nav">
                  Emisiones
                </a>
              </li>

              <Alertas />
              <ProfileMobile />
            </ul>

            <div className="dropdown filter-item">
              <div
                className="dropdown-toggle navbar-item-menu-drop navbar-item perfil"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Perfil
              </div>
              <ul className="dropdown-menu dropdown-menu-dark menu-drop">
                <Profile />
                <li>
                  {isAuthenticated ? (
                    <>
                      <LogoutButton />
                    </>
                  ) : (
                    <LoginButton />
                  )}
                </li>
              </ul>
            </div>

            {isAuthenticated ? (
              <>
                <LogoutButtonMobile />
              </>
            ) : (
              <LoginButtonMobile />
            )}

            <SearchBar
              placeholder={"Buscar animes..."}
              data={BookData}
              imagenSearch={img}
              type="text"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
