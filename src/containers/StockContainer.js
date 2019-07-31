import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          this.props.sort.map(stock => <Stock key={stock.id} clickHandler={() => this.props.buyStock(stock)} s={stock}/>)
        }
      </div>
    );
  }

}

export default StockContainer;
