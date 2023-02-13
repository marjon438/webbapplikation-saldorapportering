import "./App.css";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Transfer } from "./components/transfer";
import { AddBalance } from "./components/addbalance";
import { Overview } from "./components/overview";
import { getInitLists } from "./apifunctions";

function App() {
  const [listItems, setListItems] = useState([]);
  const [listWerehouses, setListWerehouses] = useState([]);
  const [listBalance, setListBalance] = useState([]);

  useEffect(() => {
    getInitLists(setListItems, setListWerehouses, setListBalance);
  }, []);

  return (
    <div className="App">
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
