import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stocks: [],
    boughtStocks: [],
    sort: false,
    filter: ""
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(res => res.json())
    .then(stocks => this.setState({stocks}))
  }

  buyStock = (stock) => {
    if (this.state.boughtStocks.includes(stock)) return
    this.setState({
      boughtStocks: [...this.state.boughtStocks, stock]
    })
  }

  sellStock = (boughtStock) => {
    this.setState({
      boughtStocks: this.state.boughtStocks.filter(stock => stock.id !== boughtStock.id)
    })
  }

  toggleFilter = () => {
    this.setState({
      sort: !this.state.sort
    })
  }

  filterByName = () => {
    this.toggleFilter()
    let stocks = this.state.stocks
    return stocks.sort((a, b) => a.name.localeCompare(b.name))
  }
  
  filterByPrice = () => {
    this.toggleFilter()
    let stocks = this.state.stocks
    return stocks.sort((a, b) => a.price - b.price)
  }

  filterById = () => {
    this.setState({sort: false})
    let stocks = this.state.stocks
    return stocks.sort((a, b) => a.id - b.id)
  }

  handleFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
    this.filter()
  }

  filter = () => {
    if (this.state.filter === "All") return this.state.stocks
    let filtered = this.state.stocks.filter(stock => this.state.filter === stock.type)
    return filtered
  }

  render() {
    let stocks = this.filter()
    return (
      <div>
        <SearchBar toggleFilter={this.toggleFilter} filterByName={this.filterByName} filterByPrice={this.filterByPrice} filterById={this.filterById} handleFilter={this.handleFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={stocks} clickHandler={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer boughtStocks={this.state.boughtStocks} clickHandler={this.sellStock} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
