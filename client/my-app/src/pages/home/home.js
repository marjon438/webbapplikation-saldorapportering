import { useState, useEffect } from "react";
import { Transfer } from "./components/transfer";
import { AddBalance } from "./components/addbalance";
import { Overview } from "./components/overview";
import { getInitLists } from "../../apifunctions";
import "../../App.css";

export function Home() {
  useEffect(() => {
    getInitLists(setListItems, setListWerehouses, setListBalance);
  }, []);
  const [listItems, setListItems] = useState([]);
  const [listWerehouses, setListWerehouses] = useState([]);
  const [listBalance, setListBalance] = useState([]);
  return (
    <div className="page">
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
