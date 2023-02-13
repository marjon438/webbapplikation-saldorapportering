import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { updateBalanceWerehouse } from "./apifunctions";

export function Transfer({ werehouses, items, setListBalance, listBalance }) {
  const [selectedItem, setSelectedItem] = useState({
    itemName: "Välj produkt",
  });
  const [selectedWerehouseFrom, setSelectedWerehouseFrom] = useState({
    werehouseName: "Välj varuhus",
  });
  const [selectedWerehouseTo, setSelectedWerehouseTo] = useState({
    werehouseName: "Välj varuhus",
  });
  const [balance, setBalance] = useState(0);
  function changeBalance(event) {
    setBalance(event.target.value);
  }
  return (
    <div>
      <h2 className="title">Lageröverföring</h2>
      <h5>Produkt:</h5>
      <Dropdown className="dropdown">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedItem.itemName}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {items.map((item) => {
            return (
              <Dropdown.Item
                key={item.itemId}
                onClick={() => {
                  setSelectedItem(item);
                }}
              >
                {item.itemName}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      <h5>Från:</h5>
      <Dropdown className="dropdown">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedWerehouseFrom.werehouseName}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {werehouses.map((werehouse) => {
            return (
              <Dropdown.Item
                key={werehouse.werehouseId}
                onClick={() => {
                  setSelectedWerehouseFrom(werehouse);
                }}
              >
                {werehouse.werehouseName}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      <h5>Till:</h5>
      <Dropdown className="dropdown">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedWerehouseTo.werehouseName}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {werehouses.map((werehouse) => {
            return (
              <Dropdown.Item
                key={werehouse.werehouseId}
                onClick={() => {
                  setSelectedWerehouseTo(werehouse);
                }}
              >
                {werehouse.werehouseName}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      <input
        className="balanceinput"
        value={balance}
        onChange={changeBalance}
      />
      <div></div>
      <Button
        variant="success"
        onClick={() => {
          updateBalanceWerehouse(
            selectedWerehouseFrom.werehouseId,
            selectedItem.itemId,
            -balance,
            setListBalance,
            listBalance
          );
          updateBalanceWerehouse(
            selectedWerehouseTo.werehouseId,
            selectedItem.itemId,
            balance,
            setListBalance,
            listBalance
          );
          setSelectedItem({ itemName: "Välj produkt" });
          setSelectedWerehouseFrom({ werehouseName: "Välj varuhus" });
          setSelectedWerehouseTo({ werehouseName: "Välj varuhus" });
          setBalance(0);
        }}
      >
        Fortsätt
      </Button>
    </div>
  );
}
