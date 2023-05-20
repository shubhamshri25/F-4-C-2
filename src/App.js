import "./App.css";
import { useState, useEffect } from "react";
import { Tablerow } from "./component/Tablerow";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      const jsonData = await response.json();
      console.log(jsonData);
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="app">
      <h1>Cryptocurrency Tracker</h1>
      <div className="table-div">
        <table>
          <thead>
            <tr>
              <td>Image</td>
              <td>Name</td>
              <td>Symbol</td>
              <td>Current Price</td>
              <td>Total Volume</td>
            </tr>
          </thead>
          <tbody>
            {data.map((coin) => (
              <Tablerow key={coin.id} coin={coin} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
