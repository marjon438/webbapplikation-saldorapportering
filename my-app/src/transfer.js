import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { setBalanceWerehouse } from "./apifunctions";
import { getItems } from "./apifunctions";

export function Transfer({ werehouses, setListWerehouses }) {
  const [selectedItem, setSelectedItem] = useState("Välj produkt");
  const [selectedFrom, setSelectedFrom] = useState({ name: "Välj varuhus" });
  const [selectedTo, setSelectedTo] = useState({ name: "Välj varuhus" });
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
          {selectedItem}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {getItems().map((item) => {
            return (
              <Dropdown.Item
                key={item.id}
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
      <h5>Från:</h5>
      <Dropdown className="dropdown">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedFrom.name}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {werehouses.map((werehouse) => {
            return (
              <Dropdown.Item
                key={werehouse.id}
                onClick={() => {
                  setSelectedFrom(werehouse);
                }}
              >
                {werehouse.name}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      <h5>Till:</h5>
      <Dropdown className="dropdown">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          {selectedTo.name}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {werehouses.map((werehouse) => {
            return (
              <Dropdown.Item
                key={werehouse.id}
                onClick={() => {
                  setSelectedTo(werehouse);
                }}
              >
                {werehouse.name}
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
          setBalanceWerehouse(
            selectedFrom.id,
            selectedItem,
            -balance,
            setListWerehouses
          );
          setBalanceWerehouse(
            selectedTo.id,
            selectedItem,
            balance,
            setListWerehouses
          );
          setSelectedItem("Välj produkt");
          setSelectedFrom({ name: "Välj varuhus" });
          setSelectedTo({ name: "Välj varuhus" });
          setBalance(0);
        }}
      >
        Fortsätt
      </Button>
    </div>
  );
}
