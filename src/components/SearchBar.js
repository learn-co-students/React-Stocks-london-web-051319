import React from 'react';
import MainContainer from '../containers/MainContainer'

const SearchBar = ({filterByName, filterByPrice, filterById, handleFilter}) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="checkbox" value="Alphabetically" checked={null} onChange={(e) => filterByName(e)}/>
        Alphabetically
      </label>
      <label>
        <input type="checkbox" value="Price" checked={null} onChange={(e)=>filterByPrice(e)}/>
        Price
      </label>
      <label>
        <input type="checkbox" value="Default" checked={null} onChange={(e)=>filterById(e)}/>
        Default
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => handleFilter(e)}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
          
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
