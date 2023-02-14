import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { updateBalanceWerehouse } from "../../../apifunctions";

export function AddBalance({ werehouses, items, setListBalance, listBalance }) {
  const [selectedItem, setSelectedItem] = useState({
    itemName: "Välj produkt",
  });
  const [selectedWerehouse, setSelectedWerehouse] = useState({
    werehouseName: "Välj varuhus",
  });
  const [balance, setBalance] = useState(0);
  function changeBalance(event) {
    setBalance(event.target.value);
  }
  return (
    <div>
      <h2>Fyll på lager</h2>
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
      <h5>Varuhus:</h5>
      <Dropdown className="dropdown">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedWerehouse.werehouseName}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {werehouses.map((werehouse) => {
            return (
              <Dropdown.Item
                key={werehouse.werehouseId}
                onClick={() => {
                  setSelectedWerehouse(werehouse);
                }}
              >
                {werehouse.werehouseName}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>

      <input
        title="test"
        className="balanceinput"
        value={balance}
        onChange={changeBalance}
      />
      <div></div>
      <Button
        variant="success"
        onClick={() => {
          updateBalanceWerehouse(
            selectedWerehouse.werehouseId,
            selectedItem.itemId,
            balance,
            setListBalance,
            listBalance,
            selectedWerehouse.werehouseName,
            selectedItem.itemName
          );
          setSelectedWerehouse({ werehouseName: "Välj varuhus" });
          setSelectedItem({ itemName: "Välj produkt" });
          setBalance(0);
        }}
      >
        Fortsätt
      </Button>
    </div>
  );
}
