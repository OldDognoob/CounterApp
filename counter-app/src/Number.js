import React, {useContext}from "react";
import {Num} from "./App.js";

function Number(){
    const number = useContext(Num)
return <h1>{number}</h1>
}
export default Number;