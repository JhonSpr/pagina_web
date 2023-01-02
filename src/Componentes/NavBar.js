/* eslint-disable jsx-a11y/anchor-is-valid */

import img from "../Json/Data.json";
import BookData from "../Json/Data.json";
import SearchBar from "../searchComponent";
import { LoginButton } from "./Elements/login";
import LogoutButton from "./Elements/logout";
import Profile from "../Perfil/perfil";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileMobile from "../Perfil/perfilMobile";
import { useState } from "react";
import { AlertNoLogged } from "./Elements/Alert";

export default function Menubar() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated } = useAuth0();
  const [X, setX] = useState(false);

  const IsOpen = () => {
    setOpen(true);
  };
  const NoIsOpen = () => {
    setOpen(false);
  };
  const changeX = () => {
    setX(true);
  };
  const changeBurger = () => {
    setX(false);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
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
            {X ? (
              <a
                onClick={changeBurger}
                role={"button"}
                aria-expanded="false"
                data-target="navbarText"
                className="cont-icon-x"
              >
                <span className="fa-regular fa-x icon-x"></span>
              </a>
            ) : (
              <a
                role="button"
                className="cont-icon-bars"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarText"
                onClick={changeX}
              >
                <span class="fa-solid fa-bars"></span>
              </a>
            )}
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 cont-ul">
              <li className="navbar-item mobile item-nav nav_item">
                <a href={"/"} className="nav-link item-nav">
                  Inicio
                </a>
              </li>
              <li className="navbar-item item-nav first-item_desktop nav_item">
                <a href={"/animes"} className="nav-link item-nav">
                  Animes
                </a>
              </li>
              <li className="navbar-item item-nav nav_item">
                <a href={"/en-emision"} className="nav-link item-nav">
                  Emisiones
                </a>
              </li>
              <AlertNoLogged mensaje={"Necesitas Estar Logeado!"} />
              {isAuthenticated ? <ProfileMobile /> : <></>}
            </ul>

            {isAuthenticated ? (
              <div className="dropdown filter-item">
                {open ? (
                  <a
                    className="menu-desktop "
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "#d1d1d1" }}
                    onClick={NoIsOpen}
                  >
                    Perfil
                    <i
                      className="fa-sharp fa-solid fa-caret-down"
                      style={{ marginLeft: "6px" }}
                    ></i>
                  </a>
                ) : (
                  <a
                    className="menu-desktop "
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "#d1d1d1" }}
                    onClick={IsOpen}
                  >
                    Perfil
                    <i
                      className="fa-sharp fa-solid fa-caret-up"
                      style={{ marginLeft: "6px" }}
                    ></i>
                  </a>
                )}
                <ul
                  className="dropdown-menu"
                  style={{ background: "rgba(0, 0, 0, 0.9", marginTop: "20px" }}
                >
                  <Profile />
                  <li>
                    {isAuthenticated ? (
                      <>
                        <LogoutButton />
                      </>
                    ) : (
                      <></>
                    )}
                  </li>
                </ul>
              </div>
            ) : (
              <LoginButton />
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
