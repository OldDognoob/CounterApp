import React,{createContext, useContext} from 'react'
import Number from "./Number";
import Minus from "./Minus";
import Add from "./Add";
import "./style.css";


const Num= createContext();


export default function App(){
  return(
    <div className="App">
      <Num.Provider value="1">
      <Number/>
      <Minus/>
      <Add/>
      </Num.Provider>
    </div>
  )
};
export {Num};
