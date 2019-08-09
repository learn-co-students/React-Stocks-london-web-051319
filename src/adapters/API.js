const stocksURL = 'http://localhost:3000/stocks'

const getStocks = () => fetch(stocksURL).then(res => res.json())

export default {
    getStocks
}