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
      {listHistory.map((row) => {
        return (
          <div className="test">
            <h5 className="item">{row.werehouseId}</h5>
            <h5 className="item">{row.itemId}</h5>
            <h5 className="item">{row.balance}</h5>
          </div>
        );
      })}
    </div>
  );
}
