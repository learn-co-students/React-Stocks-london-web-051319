import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import API from '../adapters/API'

class MainContainer extends Component {

  state = {
    stocks: [],
    boughtStocks: [],
    sortOption: 'Default',
    stockFilterOptions: [],
  }

  changeSort = (sortOption) => this.setState({ sortOption: sortOption })

  sortStocks = (sortOption, stocks) => {
    if (sortOption === 'Default') return stocks

    return stocks.sort((stockA, stockB) => {
      if (sortOption === 'Alphabetical')
        return stockA.name.localeCompare(stockB.name)
      if (sortOption === 'Price')
        return stockB.price - stockA.price
    })
  }

  changeFilter = (stockFilter) => this.setState({ stockFilter: stockFilter})

  filterStocks = (stock) => {
    
    if(stock === 'Tech') {
      this.setState({
        stockFilterOptions: this.state.stocks.filter(stock => stock.type === 'Tech')
      })
    } else if (stock === 'Sportswear') {
      this.setState({
        stockFilterOptions: this.state.stocks.filter(stock => stock.type === 'Sportswear')
      })
    } else if (stock === 'Finance') {
      this.setState({
        stockFilterOptions: this.state.stocks.filter(stock => stock.type === 'Finance')
      })
  } else if (stock === 'All'){
    this.setState({ stockFilterOptions: this.state.stocks})
  }
}

  componentDidMount() {
    API.getStocks()
      .then(stocks => this.setState({ stocks }))

    API.getStocks()
      .then(filteredStocks => this.setState({ stockFilterOptions: filteredStocks}))
  }

  buyStock = stock => {
    if (this.state.boughtStocks.includes(stock.id)) return;

    this.setState({
      boughtStocks: [...this.state.boughtStocks, stock.id]
    })
  }

  sellStock = stock => this.setState({
    boughtStocks: this.state.boughtStocks.filter(stockId => stockId !== stock.id)
  })

  findStock = stockId => this.state.stocks.find(stock => stock.id === stockId)

  getBoughtStocks = () => this.state.boughtStocks.map(this.findStock)


  render() {
    const stocks = this.sortStocks(this.state.sortOption, this.state.stockFilterOptions)
    return (
      <div>
        <SearchBar changeSort={this.changeSort} changeFilter={this.filterStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={stocks} stockClickHandler={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.getBoughtStocks()} stockClickHandler={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
