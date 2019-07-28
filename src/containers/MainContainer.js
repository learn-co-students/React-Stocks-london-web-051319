import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    portfolio: [],
    sort: "",
    filter: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/stocks").then(resp => resp.json()).then(stocks => this.setState({stocks}))
  }

  addToPortfolio = (stock) => {
    if (this.state.portfolio.includes(stock.id)) return
    this.setState({
      portfolio: [stock.id, ...this.state.portfolio]
    })
  }

  removeFromPortfolio = (filterStock) => {
    this.setState({
      portfolio: this.state.portfolio.filter(stock => stock !== filterStock.id)
    })
  }

  findStock = (id) => {
    debugger
    return this.state.stocks.find(stock => stock.id === id)
  }

  mapStocks = () => {
    return this.state.portfolio.map(this.findStock) // .filter(stock => (this.state.filter !== "") ? stock.type === this.state.filter : true)
  }

  handleFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  filterStocks = () => {
    const filtered = this.state.stocks.filter(stock => (this.state.filter !== "") ? stock.type === this.state.filter : true)
    if (this.state.sort === '') return filtered
    if (this.state.sort === 'Price') {
      return filtered.sort(function(a, b){return a.price - b.price})
    } else {
      debugger
      return filtered.sort((stockA, stockB) => {
          return stockA.name.localeCompare(stockB.name)
    })
  }
}

  handleSort = (e) => {
    this.setState({
      sort: e.target.value
    })
  }

  render() {
    const stocks = this.filterStocks()
    const portfolioStocks = this.mapStocks()
    return (
      <div>
        <SearchBar handleFilter={this.handleFilter} handleSort={this.handleSort}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={stocks} addToPortfolio={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={portfolioStocks} removeFromPortfolio={this.removeFromPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
