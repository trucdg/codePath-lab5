import { useState } from "react";
const API_KEY = import.meta.env.VITE_APP_API_KEY;
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1> Hello world</h1>
    </div>
  );
}

export default App;
