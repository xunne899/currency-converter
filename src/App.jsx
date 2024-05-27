import { useState } from "react";
import "./App.css";
import CurrencyDropdown from "./components/CurrencyDropdown";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <div>
      <h1>Currency Converter</h1>
      <CurrencyDropdown />
      </div>
    </>
  );
}

export default App;
