import React, {useState} from "react";

function SearchBar({alphebatiseStocks, deAlphebatiseStocks, orderStocksByPrice, handleSelectChange}) {

  const [alphChecked, setAlphChecked]= useState(false)

  const [priceChecked, setPriceChecked]= useState(false)

  function handleChange(e){
    
    if(alphChecked === false){
      alphebatiseStocks(e)
    }
    
    if (alphChecked === true){
      deAlphebatiseStocks()
    }


    setAlphChecked(!alphChecked)
    

  }

  function onSelectChange(e){

    handleSelectChange(e)

  }

  function handlePriceChange(e){

    if (priceChecked === false){
      orderStocksByPrice()

    }
    if (priceChecked=== true){
      deAlphebatiseStocks()

    }

    setPriceChecked(!priceChecked)
  }
  
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={alphChecked}
          onClick={handleChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={priceChecked}
          onClick={handlePriceChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={onSelectChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
