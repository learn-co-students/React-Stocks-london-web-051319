import React from 'react'

const Stock = ({name, ticker, handleClick}) => (
  <div>

    <div className="card">
      <div className="card-body" onClick={handleClick}>
        <h5 className="card-title">{
            name
          }</h5>
        <p className="card-text">{
            ticker
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
