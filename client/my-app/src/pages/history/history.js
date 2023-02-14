import { useState, useEffect } from "react";
import { getHistory } from "../../apifunctions";
import "../../App.css";

export function History() {
  const [listHistory, setListHistory] = useState([]);
  useEffect(() => {
    getHistory(setListHistory);
  }, []);
  return (
    <div>
      <div>
        <h1>History</h1>
        <div className="test">
          <h4 className="item">Varuhus</h4>
          <h4 className="item">Produkt</h4>
          <h4 className="item">Transaktion</h4>
        </div>
      </div>
      {listHistory.map((row) => {
        return (
          <div className="test">
            <h5 className="item">{row.werehouseName}</h5>
            <h5 className="item">{row.itemName}</h5>
            <h5 className={row.balance >= 0 ? "itemgreen" : "itemred"}>
              {row.balance}
            </h5>
          </div>
        );
      })}
    </div>
  );
}
