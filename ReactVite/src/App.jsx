import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
//import ICard from './components/ICard'
//import ICardGallery from './components/ICardGallery'
import MyState from './components/MyState'
import ColorChange from './components/ColorChange'
import NameChange from './components/NameChange'
import ImageManipulation from './components/ImageManipulation'

function App() {
  

  return (
    
    <div style={{border:'2px solid red',width:'1000px',height:'1000px'}}>
      <h2 style={{color:'red'}}>Welcome to React App Development</h2>
    {/*  <h2 style={{color:'red'}}>ABES Engineering College</h2>
      <h2 style={{color:'blue'}}>Roll No:2400320100933</h2>
      <h2 style={{color:'cyan'}}>Name:Roshni Singh</h2>
      <h2 style={{color:'brown'}}>Branch:CSE</h2>
      <h2 style={{color:'greenyellow'}}>Section:CSE-24</h2>
      <h2 style={{color:'plum'}}>Skills:HTML,CSS,JS,React</h2>}
      <ICardGallery/>*/}
      <ImageManipulation/>
      </div>
      
    
  )
}

export default App
