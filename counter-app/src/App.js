import React, { createContext, useContext, useState } from "react";
import Number from "./Number";
import Minus from "./Minus";
import Add from "./Add";
import "./style.css";

const Num = createContext();

export default function App() {
  const [number, setNumber] = useState(0);

  function minus() {
    setNumber(number - 1);
  }
  function plus() {
    setNumber(number + 1);
  }
  const values = { value: number, minus: minus, plus: plus };

  return (
    <div className="App">
      <Num.Provider value={values}>
        <Number />
        <Minus />
        <Add />
      </Num.Provider>
    </div>
  );
}
export { Num };
