import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Transfer } from "./transfer";
import { AddBalance } from "./addbalance";
import { Overview } from "./overview";
import { getWerehouses } from "./apifunctions";

function App() {
  const [listWerehouses, setListWerehouses] = useState(getWerehouses());

  return (
    <div className="header">
      <div className="column">
        <Transfer
          werehouses={listWerehouses}
          setListWerehouses={setListWerehouses}
        />
      </div>
      <div className="column">
        <AddBalance
          werehouses={listWerehouses}
          setListWerehouses={setListWerehouses}
        />
      </div>
      <div className="column">
        <Overview werehouses={listWerehouses} />
      </div>
    </div>
  );
}

export default App;
