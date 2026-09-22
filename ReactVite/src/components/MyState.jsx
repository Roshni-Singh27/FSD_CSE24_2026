import React from 'react'
import { useState } from 'react'


 function MyState() {
    const[counter,setCounter]=useState(10);
    function increament(){
        setCounter(counter+10);
    }
    function decreament(){
        setCounter(counter-5);
    }
  return (
    <div>
        <h2>Counter={counter}</h2>
        <div>
        <button onClick={increament}>Increament Counter</button>
        <button onClick={decreament}>Decreament Counter</button>
    </div>
    </div>
  )
}
export default MyState