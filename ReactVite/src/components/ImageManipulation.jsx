import React, { useState } from 'react'
import cat from '../images/cat.png'

function ImageManipulation() {
    const[catHeight,setCatHeight]=useState(200);
    const[catWidth,setCatWidth]=useState(200);
    const[red,setRed]=useState();
    const[green,setGreen]=useState(0);
    const[blue,setBlue]=useState(0);

function increaseHeight(){
    setCatHeight(catHeight+10);
}

function increaseWidth(){
    setCatWidth(catWidth+10);
}

function changeBGColor(){
    setRed(Math.random()*255);
    setGreen(Math.random()*255);
    setBlue(Math.random()*255);
}


  return (
    <div>
        <h2>ImageManipulation</h2>

        <div style={{backgroundColor:`rgb(${red},${green},${blue})`,height:'400px',width:'300px',border:'4px solid red',marginLeft:'350px'}}>
        <img src={cat} height={catHeight} width={catWidth} />
        </div>
        <div>
            <button onClick={increaseHeight}>increaseHeight</button>
            <button onClick={increaseWidth}>increaseWidth</button>
            <button onClick={changeBGColor}>Change Background Color</button>
            
        </div>
    </div>

  )
}

export default ImageManipulation