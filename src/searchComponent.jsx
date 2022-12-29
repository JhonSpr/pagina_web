/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import Loading from "./Colletion/Loading";
function SearchBar({ placeholder }) {
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState([]);
  const [search, setSearch] = useState("");
  const [hideData, setHideData] = useState(true);

  const searcher = (e) => {
    setSearch(e.target.value);
    if (search == "") {
      setHideData(true);
    } else {
      setHideData(false);
    }
    if (info.length == 1) {
      setHideData(false);
    } else {
      setHideData(true);
    }
  };
  console.log(search);
  // eslint-disable-next-line react-hooks/exhaustive-deps

  // eslint-disable-next-line react-hooks/rules-of-hooks, react-hooks/exhaustive-deps
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch(`https://api-rest.up.railway.app/api/v1/animes?name=` + search)
        // Exito
        .then((response) => response.json())
        // convertir a json
        .then((json) => setInfo(json))
        //imprimir los datos en la consola
        .catch((err) => console.log("Solicitud fallida", err));

      // eslint-disable-next-line react-hooks/exhaustive-deps

      // eslint-disable-next-line react-hooks/exhaustive-deps
      // eslint-disable-next-line react-hooks/exhaustive-deps
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  console.log(search);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <>
      <form action={`/` + search.replace(/ /g, "-").toLocaleLowerCase()}>
        <div className="search">
          <div className="searchInputs">
            <li className="navbar-item">
              <input
                type="text"
                value={search}
                onChange={searcher}
                placeholder={placeholder}
                className="input"
                autoCorrect="on"
                autoSave="off"
              />
              <i className="fa-solid fa-search"></i>
            </li>
          </div>
        </div>

        <div className="dataResult">
          {hideData ? (
            <></>
          ) : (
            <>
              {loading ? (
                <>
                  <Loading />
                </>
              ) : (
                <>
                  {info.slice(0, 4).map((data, index) => (
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
      </form>{" "}
    </>
  );
}

export default SearchBar;
