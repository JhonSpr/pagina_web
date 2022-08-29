/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Datas from "./Data.json"

function SearchBar({ placeholder, data }) {


 

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    
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
    };
  
    return (
      <div className="search">
        <div className="searchInputs">
        <li className="navbar-item">
        <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
            className="input is-orange is-rounded"
            autoCorrect="off"
            autoSave="off"
          /> 
          <i className="fa-solid fa-search"></i>
        </li>
       
                        
                    
          

        </div>
        {filteredData.length != 0 && (
         Datas.map( data => {
            return(
                <div className="dataResult">
                   {
                    filteredData.length == 0 
                    
                   }
                { filteredData.slice(0,4).map( value => {

                  return (
                  
                      <NavLink className="dataItem" to={value.link} title={value.title.toLowerCase()} key={data.id}>
                        <img src={value.img} alt="**" className="icono-search"/>
                      <span className="span-search">{value.title.toLowerCase()} </span>
                      
                    </NavLink>
                    
                 
                  );
                })}
                
              </div>
            )
         })

        )}
        
      </div>

    );
  }

  
  export default SearchBar;
