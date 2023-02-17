import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages/home/home";
import { History } from "./pages/history/history";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="column"><Link to="/" className="nav">
          Hem
        </Link>
        <Link to="/history" className="nav">
          Historik
        </Link></div>
        

        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
