import "./App.css";
import Functionality from "./conponents/Functionality";

function App() {
  setInterval(() => {
    Functionality();
  }, 50);
  return (
    <div className="container">
      <div className="cloud"></div>
    </div>
  );
}

export default App;
