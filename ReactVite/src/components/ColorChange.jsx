import React, { useState } from 'react'

function ColorChange() {
    
        const[red,setRed]=useState(0);
        const[green,setGreen]=useState(0);
        const[blue,setBlue]=useState(0);

    
  return (
    <div>
        <div style={{backgroundColor:`rgb(${red},${green},${blue})`,height:'100px',width:'800px'}}>Color Change</div>
        <div>
            <button onClick={() => setRed(255)}>Red</button>
            <button onClick={() => setGreen(255)}>Green</button>
            <button onClick={() => setBlue(255)}>Blue</button>
        </div>
    </div>
    
  )
}

export default ColorChange