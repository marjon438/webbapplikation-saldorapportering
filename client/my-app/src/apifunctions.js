import { v1 as uuid } from "uuid";

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

export function setBalanceWerehouse(
  werehouseId,
  itemId,
  balance,
  setListWerehouses
) {
  let newList = [...werehouses];
  let oldBalance = newList
    .find((element) => element.id === werehouseId)
    .items.get(itemId);
  newList
    .find((element) => element.id === werehouseId)
    .items.set(itemId, parseInt(oldBalance) + parseInt(balance));
  setListWerehouses(newList);
}
