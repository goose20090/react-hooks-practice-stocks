import React from "react";
import Stock from "./Stock";

function PortfolioContainer({handlePortfolioClick, portfolioStocks}) {


  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolioStocks.map((stock)=> <Stock handleClick={handlePortfolioClick} key = {stock.id} stock = {stock}/>)
      }
    </div>
  );
}

export default PortfolioContainer;
