import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {
  state= {
    stocks: [],
    bought_stocks: [],
    value: "",
    filter: "Tech"
  }

  sortStocks = () =>{
    if(this.state.value === "Alphabetically"){
      return this.state.stocks.sort((stockA, stockB) => stockA.name > stockB.name ? 1 : -1)
    }else{
      return this.state.stocks.sort((stockA, stockB) => stockA.price > stockB.price ? 1 : -1)
    }
  }

  filterStocks = () =>{
    let stocks = this.sortStocks()
      return stocks.filter(stock => stock.type.toLocaleLowerCase() === this.state.filter.toLocaleLowerCase())
  }

  handleChange = (e) =>{
    this.setState({value: e.target.value})
  }
  
  handleDrop = (e) =>{
    this.setState({filter: e.target.value})
  }

  buyStock = (stock) =>
  {
    if(this.state.bought_stocks.find(s => s.id === stock.id)) return;
    this.setState({
      bought_stocks: [...this.state.bought_stocks, stock]
    })
  }

  sellStock = (stock) =>{
    let filtered_array = this.state.bought_stocks.filter(s => s.id !== stock.id)
    this.setState({bought_stocks: filtered_array})
  }

  componentDidMount(){
    fetch('http://localhost:3000/stocks')
    .then(response => response.json())
    .then(stocks => this.setState({stocks, value: "Alphabetically"}))
  }



  render()
  {
    return (
      <div>
        <Header/>
        <MainContainer filter={this.state.filter} handleDrop={this.handleDrop} value={this.state.value} handleChange={this.handleChange} bought_stocks={this.state.bought_stocks} sort={this.filterStocks()} buyStock={this.buyStock} sellStock={this.sellStock}/>
      </div>
    );
  }
}

export default App;
