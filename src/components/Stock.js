import React from 'react'


const Stock = (props) => (
  <div>

    <div className="card" onClick={props.clickHandler}>
      <div className="card-body">
        <h5 className="card-title">{
            //Company Name
            props.s.name

          }</h5>
        <p className="card-text">{
            //ticker: stock price
            props.s.price
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
