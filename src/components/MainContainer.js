import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [allStocks, setAllStocks]= useState([])
  const [stocks, setStocks]= useState([])

  const [portfolioStocks, setPortfolioStocks]= useState([])


  useEffect(()=>{
    fetch ("http://localhost:3001/stocks")
    .then(res=>res.json())
    .then(fetchedStocks=> {
      setStocks(fetchedStocks)
      setAllStocks(fetchedStocks)})
  }, [])

  function handleClick(e){
  let clickedStockName = e.target.parentNode.querySelector(".card-title").textContent
  let clickedStock = [...stocks].find((stock)=> stock.name === clickedStockName)
    setPortfolioStocks([...portfolioStocks, clickedStock])
  }

  function handlePortfolioClick(e){
    let clickedStockName = e.target.parentNode.querySelector(".card-title").textContent
    let newArr = [...portfolioStocks.filter((stock)=> stock.name !== clickedStockName)]
    setPortfolioStocks(newArr)

  }
  function compareNames(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
  
    let comparison = 0;
    if (nameA > nameB) {
      comparison = 1;
    } else if (nameA < nameB) {
      comparison = -1;
    }
    return comparison;
  }

  function comparePrices(a, b) {
    const priceA = a.price
    const priceB = b.price
  
    let comparison = 0;
    if (priceA > priceB) {
      comparison = 1;
    } else if (priceA < priceB) {
      comparison = -1;
    }
    return comparison;
  }


  function alphebatiseStocks(e){
    let newArr = [...stocks].sort(compareNames)
    setStocks(newArr)
  }

  function deAlphebatiseStocks(e){
    let newArr = [...allStocks]
    setStocks(newArr)
  }

  function orderStocksByPrice(){
    let newArr = [...stocks].sort(comparePrices)
    setStocks(newArr)
  }

  function handleSelectChange(e){
    let stockType = e.target.value 
    let newArr = [...allStocks].filter((stock)=> stock.type === stockType)
    setStocks(newArr)
  }
  

  return (
    <div>
      <SearchBar alphebatiseStocks={alphebatiseStocks} deAlphebatiseStocks= {deAlphebatiseStocks} orderStocksByPrice= {orderStocksByPrice}  handleSelectChange= {handleSelectChange}/>
      <div className="row">
        <div className="col-8">
          <StockContainer handleClick = {handleClick} stocks= {stocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer handlePortfolioClick = {handlePortfolioClick} portfolioStocks = {portfolioStocks} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
