import "./styles.css";
import bgimg from "/src/building.jpeg";
import dryrain from "/src/dryrain.gif";
import confetti from "/src/laptop_confetti.gif";
import React, { useState } from "react";

var cpOfStock = "";
var qtyOfStock = "";
var currentPrice = "";
export default function App() {
  var [cpOfStock, setCPOfStock] = useState({ count: 1 });
  var [qtyStock, setQtyOfStock] = useState({ count: 1 });
  var [spOfStock, setSPOfStock] = useState({ count: 1 });
  var [imageEffect, setImageEffect] = useState("");
  var [result, setResult] = useState("");
  return (
    <div className="App">
      <div class="container" id="container">
        <div className="stockDetails" id="stockDetails">
          <label for="CPofStock">
            <h4>Cost price of stock</h4>
            <input
              placeholder="Enter Cost Price"
              type="text"
              id="CPofStock"
              onChange={(event) => {
                setCPOfStock(event.target.value);
              }}
            />
          </label>
          <label for="qtyStock">
            <h4>Stock Quantity</h4>
            <input
              placeholder="Enter Stock Quantity"
              type="text"
              id="qtyStock"
              onChange={(event) => {
                setQtyOfStock(event.target.value);
              }}
            />
          </label>
          <label for="currentPrice">
            <h4>Current Price</h4>
            <input
              type="text"
              placeholder="Enter Current Price"
              id="SPofStock"
              onChange={(event) => {
                setSPOfStock(event.target.value);
              }}
            />
          </label>
          <button type="button" value="check" onClick={checkForStock}>
            Check
          </button>
          <div class="result" id="result">
            {result}
          </div>
        </div>
        <div
          className="building"
          style={{ backgroundImage: `url('${bgimg}')` }}
        ></div>
      </div>
    </div>
  );

  function checkForStock() {
    spOfStock = parseInt(spOfStock);
    cpOfStock = parseInt(cpOfStock);

    if (spOfStock < cpOfStock) {
      const loss = ((cpOfStock - spOfStock) * qtyStock).toFixed(2);
      const lossPer = (((cpOfStock - spOfStock) * 100) / spOfStock).toFixed(2);
      setResult("You lost " + lossPer + "%." + " Your total loss " + loss);
      console.log(loss + "," + lossPer);
      setImageEffect(dryrain);
      document.getElementById("stockDetails").style.backgroundImage = "none";
      document.getElementById("stockDetails").style.backgroundColor =
        "transparent";

      document.getElementById(
        "container"
      ).style.backgroundImage = `url('${dryrain}')`;

      document.getElementById("container").style.backgroundSize = "100% 100%";
      var x = document.getElementsByTagName("label");
      console.log(x);
      x[0].style.color = "black";
      x[1].style.color = "black";
      x[2].style.color = "black";
      document.getElementById("result").style.color="black";
    } else {
      const profit = ((spOfStock - cpOfStock) * qtyStock).toFixed(2);
      const profitPer = (((spOfStock - cpOfStock) * 100) / cpOfStock).toFixed(
        2
      );

      document.getElementById("stockDetails").style.backgroundImage = "none";
      document.getElementById("stockDetails").style.backgroundColor =
        "transparent";
      document.getElementById("result").style.color = "white";
      document.getElementById(
        "container"
      ).style.backgroundImage = `url('${confetti}')`;
      var x = document.getElementsByTagName("label");
      console.log(x);
      x[0].style.color = "white";
      x[1].style.color = "white";
      x[2].style.color = "white";
      setResult(
        "You profit " + profitPer + "%." + " Your total profit " + profit
      );
    }
  }
}
