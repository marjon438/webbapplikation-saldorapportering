import "./App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Transfer } from "./transfer";
import { AddBalance } from "./addbalance";
import { Overview } from "./overview";
import { getWerehouses } from "./apifunctions";
import Axios from "axios";

function App() {
  const [listItems, setListItems] = useState([]);
  const [listWerehouses, setListWerehouses] = useState([]);
  const [listBalance, setListBalance] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/items/get").then((response) => {
      setListItems(response.data);
    });
    Axios.get("http://localhost:3001/api/werehouses/get").then((response) => {
      setListWerehouses(response.data);
    });
    Axios.get("http://localhost:3001/api/balance/get").then((response) => {
      setListBalance(response.data);
    });
  }, []);

  return (
    <div className="header">
      <div className="column">
        <Transfer
          werehouses={listWerehouses}
          items={listItems}
          listBalance={listBalance}
          setListBalance={setListBalance}
        />
      </div>
      <div className="column">
        <AddBalance
          werehouses={listWerehouses}
          items={listItems}
          listBalance={listBalance}
          setListBalance={setListBalance}
        />
      </div>
      <div className="column">
        <Overview
          werehouses={listWerehouses}
          items={listItems}
          balance={listBalance}
        />
      </div>
    </div>
  );
}

export default App;
