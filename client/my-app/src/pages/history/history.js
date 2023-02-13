import { useState, useEffect } from "react";
import { getHistory } from "../../apifunctions";
import "../../App.css";
import { getNameItem, getNameWerehouse } from "../../apifunctions";

export function History() {
  const [listHistory, setListHistory] = useState([]);
  useEffect(() => {
    getHistory(setListHistory);
  }, []);
  return (
    <div>
      {listHistory.map((row) => {
        return (
          <div className="test">
            <h5 className="item">{getNameWerehouse(row.werehouseId)}</h5>
            <h5 className="item">{getNameItem(row.itemId)}</h5>
            <h5 className={row.balance >= 0 ? "itemgreen" : "itemred"}>
              {row.balance}
            </h5>
          </div>
        );
      })}
    </div>
  );
}
