import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.boughtStocks.map(boughtStock => <Stock {...boughtStock} key={boughtStock.id} clickHandler={() => {this.props.clickHandler(boughtStock)}}/>)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
