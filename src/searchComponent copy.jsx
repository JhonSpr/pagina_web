/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable eqeqeq */
import React, { useState } from "react";
import Datas from "./Json/Data.json";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [figura, setFigura] = useState(false);

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
    if (searchWord === "") {
      setFigura(false);
    } else {
      setFigura(true);
    }
  };

  return (
    <form action={`/` + wordEntered.replace(/ /g, "-").toLocaleLowerCase()}>
      <div className="search">
        <div className="searchInputs">
          <li className="navbar-item">
            <input
              type="text"
              placeholder={placeholder}
              value={wordEntered}
              onChange={handleFilter}
              className="input"
              autoCorrect="on"
              autoSave="off"
            />
            <i className="fa-solid fa-search"></i>
          </li>
        </div>
        {figura ? <div className="figura_search"></div> : <></>}

        {filteredData.length != 0 &&
          Datas.map(() => {
            return (
              <div className="dataResult">
                {filteredData.length == 0}
                {filteredData.slice(0, 2).map((value, index) => {
                  return (
                    <a
                      className="dataItem"
                      href={value.link}
                      title={value.title.toLowerCase()}
                      key={index}
                    >
                      <img
                        src={value.img}
                        alt={value.title}
                        className="icono-search"
                      />
                      <span className="span-search">
                        {value.title.toLowerCase()}
                      </span>
                    </a>
                  );
                })}
              </div>
            );
          })}
      </div>
    </form>
  );
}

export default SearchBar;