/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable eqeqeq */
import React, { useState } from "react";
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
        <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
            className="input is-orange is-rounded form-control me-2"
            autoCorrect="off"
            autoSave="off"
          /> 
          <i className="fas fa-search"></i>
       
                        
                    
          

        </div>
        {filteredData.length != 0 && (
         Datas.map( () => {
            return(
                <div className="dataResult"  >
                   
                {filteredData.map((value,id) => {

                  return (
                  
                      <a className="dataItem" href={value.link} title={value.title.toLowerCase()} key={id}>
                        <img src={value.img} alt="**" className="icono-search"/>
                      <span className="span-search">{value.title.toLowerCase()} </span>
                      
                    </a>
                    
                 
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
