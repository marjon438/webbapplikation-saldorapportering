import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { setBalanceWerehouse } from "./apifunctions";
import { getItems } from "./apifunctions";

export function AddBalance({ werehouses, setListWerehouses }) {
  const [selectedItem, setSelectedItem] = useState("Välj produkt");
  const [selected, setSelected] = useState({ name: "Välj varuhus" });
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
          {selectedItem}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {getItems().map((item) => {
            return (
              <Dropdown.Item
                key={item}
                onClick={() => {
                  setSelectedItem(item);
                }}
              >
                {item}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      <h5>Varuhus:</h5>
      <Dropdown className="dropdown">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selected.name}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {werehouses.map((werehouse) => {
            return (
              <Dropdown.Item
                key={werehouse.id}
                onClick={() => {
                  setSelected(werehouse);
                }}
              >
                {werehouse.name}
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
          setBalanceWerehouse(
            selected.id,
            selectedItem,
            balance,
            setListWerehouses
          );
          setSelected({ name: "Välj varuhus" });
          setSelectedItem("Välj produkt");
          setBalance(0);
        }}
      >
        Fortsätt
      </Button>
    </div>
  );
}
