import React from 'react';

const SearchBar = ({changeSort, changeFilter}) => {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input type="radio" name="button" value="Alphabetical" checked={null} onChange={event => changeSort(event.target.value)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" name="button" value="Price" checked={null} onChange={event => changeSort(event.target.value)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={event => changeFilter(event.target.value)}>
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
