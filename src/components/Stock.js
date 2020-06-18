import React from 'react'

const Stock = ({name, price, type, clickHandler}) => (
  <div>

    <div className="card">
      <div className="card-body" onClick={clickHandler} style={{ cursor: 'pointer'}}>
        <h5 className="card-title">{
            name
          }</h5>
        <p className="card-text">Price: {
            price
          }</p>
        <p className="card-text">Industry: {
            type
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
