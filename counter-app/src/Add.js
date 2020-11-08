import React, { useContext } from "react";
import {Num} from"./App.js";

function Add() {
  const addfun = useContext(Num);
  return (
    <>
      <button
        onClick={() => {
          addfun.plus();
        }}
      >
          +
      </button>
    </>
  );
}
export default Add;
