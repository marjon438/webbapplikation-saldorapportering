import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getItems } from "./apifunctions";

export function Overview({ werehouses, items, balance }) {
  return (
    <div>
      <h2>Översikt</h2>
      <div className="overview">
        <div>
          <div className="test">
            <h5 className="item">Varuhus:</h5>
            <h5 className="item">Saldo:</h5>
          </div>
          {werehouses.map((werehouse) => {
            return (
              <div key={werehouse.werehouseId}>
                <h4 className="werehousename">{werehouse.werehouseName}</h4>
                {items.map((item) => {
                  return (
                    <div className="test" key={item.itemId}>
                      <h6 className="item">{item.itemName}</h6>
                      <h6 className="item">
                        {
                          balance.find(
                            (row) =>
                              row.itemId === item.itemId &&
                              row.werehoseId === werehouse.werehoseId
                          ).balance
                        }
                      </h6>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
