import Axios from "axios";

// class Werehouse {
//   constructor(name) {
//     this.name = name;
//     this.items = new Map();
//     this.id = uuid();
//   }
// }

// class Item {
//   constructor(name) {
//     this.name = name;
//     this.price = null;
//     this.id = uuid();
//   }
// }

export function getInitLists(setListItems, setListWerehouses, setListBalance) {
  Axios.get("http://localhost:3001/api/items/get").then((response) => {
    setListItems(response.data);
  });
  Axios.get("http://localhost:3001/api/werehouses/get").then((response) => {
    setListWerehouses(response.data);
  });
  Axios.get("http://localhost:3001/api/balance/get").then((response) => {
    setListBalance(response.data);
  });
}

export function postItem() {}
export function deleteItem() {}
export function updateItem() {}

export function postWerehouse() {}
export function deleteWerehouse() {}
export function updateWerehouse() {}

export function getHistory() {}

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
