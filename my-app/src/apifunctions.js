import { v1 as uuid } from "uuid";

class Werehouse {
  constructor(name) {
    this.name = name;
    this.items = [];
    this.id = uuid();
  }
}

class Item {
  constructor(name) {
    this.name = name;
    this.balance = 0;
    this.id = uuid();
  }
}

let werehouses = [];
werehouses.push(new Werehouse("Cupertino"));
werehouses.push(new Werehouse("Norrköping"));
werehouses.push(new Werehouse("Frankfurt"));

let items = ["Laptop", "Surfplatta", "Telefon"];

items.forEach((product) =>
  werehouses.forEach((werehouse) => werehouse.items.push(new Item(product)))
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
  item,
  balance,
  setListWerehouses
) {
  let newList = [...werehouses];
  newList
    .find((element) => element.id === werehouseId)
    .items.find((element) => (element.name = item)).balance +=
    parseInt(balance);
  setListWerehouses(newList);
}
