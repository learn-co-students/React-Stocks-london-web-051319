import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar value={this.props.value} handleDrop={this.props.handleDrop} filterStocks={this.filterStocks} sortStocks={this.sortStocks} handleChange={this.props.handleChange}/>

          <div className="row">
            <div className="col-8">

              <StockContainer sort={this.props.sort} buyStock={this.props.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer sort={this.props.sort} bought_stocks={this.props.bought_stocks} sellStock={this.props.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
