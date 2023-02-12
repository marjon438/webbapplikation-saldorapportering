import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getItems } from "./apifunctions";

export function Overview({ werehouses }) {
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
              <div key={werehouse.id}>
                <h4 className="werehousename">{werehouse.name}</h4>
                {getItems().map((item) => {
                  return (
                    <div className="test" key={item.id}>
                      <h6 className="item">{item.name}</h6>
                      <h6 className="item">{werehouse.items.get(item.id)}</h6>
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
