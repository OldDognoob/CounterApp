import React, { useContext } from "react";
import {Num} from "./App.js";

function Minus() {
  const minfun = useContext(Num);
  return (
    <>
      <button
        onClick={() => {
          minfun.minus();
        }}
      >
          -
      </button>
    </>
  );
}
export default Minus;
