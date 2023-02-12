import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export function Overview({ werehouses }) {
  function itemname(items) {
    return items.map((item) => {
      return (
        <div className="test">
          <h6 className="item">{item.name}</h6>
          <h6 className="item">{item.balance}</h6>
        </div>
      );
    });
  }

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
              <div>
                <h4 className="werehousename">{werehouse.name}</h4>
                {itemname(werehouse.items)}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
