import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            this.props.bought_stocks.map(stock =><Stock key={stock.id} s={stock} clickHandler={() => {this.props.sellStock(stock)}}></Stock>)
          }
      </div>
    );
  }

}

export default PortfolioContainer;
