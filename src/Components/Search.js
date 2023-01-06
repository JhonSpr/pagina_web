/* eslint-disable no-redeclare */
/* eslint-disable no-self-compare */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import LoadingSearch from "./elements/LoadingSearch";

function Search() {
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState("");
  const [hideData, setHideData] = useState(true);
  const searcher = (e) => {
    setSearch(e.target.value);
    if (search === "") {
      setHideData(null);
    } else {
      setHideData(false);
    }
    if (
      info.length === 1 ||
      info.length === 2 ||
      info.length === 3 ||
      info.length === 4 ||
      info.length === 5
    ) {
      setHideData(false);
    } else {
      setHideData(true);
    }
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(
        `https://api-rest.up.railway.app/api/v1/animes?name=` +
          search.toLowerCase()
      )
        .then((response) => response.json())

        .then((json) => setInfo(json))
        .catch((err) => console.log("Solicitud fallida", err));
    });
  }, [search]);
  setTimeout(() => {
    setLoading(false);
  }, 4000);
  return (
    <>
      {/* </>action={`/` + search.replace(/ /g, "-").toLocaleLowerCase()} */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="search">
          <div className="searchInputs">
            <li className="navbar-item">
              <input
                type="text"
                value={search}
                onChange={searcher}
                placeholder={"Buscar anime..."}
                id="search-navbar"
                autoCorrect="off"
                autoComplete="off"
                autoSave="off"
              />

              <a href={`/` + search.toLowerCase().replace(/ /, "-")}>
                <i className="fa-solid fa-search" id="icon-search-navbar"></i>
              </a>
            </li>
          </div>
        </div>
        {hideData ? <></> : <div className="figura_search"></div>}
        <div className="dataResult">
          {hideData ? <></> : <h1 className="resultados_h1">resultados</h1>}
          {hideData ? (
            <></>
          ) : (
            <>
              {loading ? (
                <>
                  <LoadingSearch />
                </>
              ) : (
                <>
                  {info.slice(0, 3).map((data, index) => (
                    <a
                      className="dataItem"
                      href={data.link}
                      title={data.name.toLowerCase()}
                      key={index}
                    >
                      <img
                        src={data.image}
                        alt={data.name}
                        className="icono-search"
                      />
                      <span className="span-search">
                        {data.name.toLowerCase()}
                      </span>
                    </a>
                  ))}
                </>
              )}
            </>
          )}
        </div>
      </form>
    </>
  );
}

export default Search;
