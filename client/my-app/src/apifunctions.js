import { v1 as uuid } from "uuid";
import Axios from "axios";

class Werehouse {
  constructor(name) {
    this.name = name;
    this.items = new Map();
    this.id = uuid();
  }
}

class Item {
  constructor(name) {
    this.name = name;
    this.price = null;
    this.id = uuid();
  }
}

let werehouses = [];
werehouses.push(new Werehouse("Cupertino"));
werehouses.push(new Werehouse("Norrköping"));
werehouses.push(new Werehouse("Frankfurt"));

let items = [new Item("Laptop"), new Item("Surfplatta"), new Item("Telefon")];

items.forEach((product) =>
  werehouses.forEach((werehouse) => werehouse.items.set(product.id, 0))
);

export function getItems() {
  return items;
}

export function getWerehouses() {
  return werehouses;
}

export function addWerehouse(name) {
  werehouses.push(new Werehouse(name));
}

export function updateBalanceWerehouse(
  werehouseId,
  itemId,
  balance,
  setListBalance,
  listBalance
) {
  const oldBalance = listBalance.find(
    (row) => row.itemId === itemId && row.werehouseId === werehouseId
  ).balance;
  const newBalance = parseInt(oldBalance) + parseInt(balance);
  Axios.put("http://localhost:3001/api/balance/put", {
    itemId: itemId,
    werehouseId: werehouseId,
    balance: newBalance,
  }).then((response) => {
    setListBalance(response.data);
  });
}
