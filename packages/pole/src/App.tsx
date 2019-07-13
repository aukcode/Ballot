import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const fetchHey = async (setState: (state: string) => void) => {
  const result = await fetch("http://localhost:8080/hey").then(res =>
    res.json()
  );
  console.log(result);
  setState(result.hey);
};

const App: React.FC = () => {
  const [state, setstate] = useState<string>("Loading...");

  useEffect(() => {
    fetchHey(setstate);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>{state}</h1>
      </header>
    </div>
  );
};

export default App;
