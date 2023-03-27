import { useState, useEffect } from "react";
const API_KEY = import.meta.env.VITE_APP_API_KEY;
import "./App.css";

function App() {
  const [list, setList] = useState(null);

  useEffect(() => {
    const fetchAllCoinData = async () => {
      const response = await fetch(
        "https://min-api.cryptocompare.com/data/all/coinlist"
      );

      const json = await response.json();
      console.log(json);
      setList(json);
    };

    fetchAllCoinData().catch(console.error);
  }, []);

  return (
    <div className="whole-page">
      <h1> My Crypto List</h1>
      {console.log(list.Data)}
      <ul>
        {list &&
          Object.entries(list.Data).map(([coin]) =>
            list.Data[coin].PlatformType == "blockchain" ? (
              <li key={list.Data[coin].FullName}>{list.Data[coin].FullName}</li>
            ) : null
          )}
      </ul>
    </div>
  );
}

export default App;
