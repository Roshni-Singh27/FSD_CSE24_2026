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
import MyUseEffect from './components/MyUseEffect'
import FetchProducts from './components/FetchProducts'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Login from './components/Login'
import Registration from './components/Registration'
import Dashboard from './components/Dashboard'
import Home from './components/Home'

function App() {
  

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Registration/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
    
    
  )
}

export default App




























/*<div style={{border:'2px solid red',width:'1000px',height:'6500px'}}>
  <h2 style={{color:'red'}}>Welcome to React App Development</h2>
  <h2 style={{color:'red'}}>ABES Engineering College</h2>
  <h2 style={{color:'blue'}}>Roll No:2400320100933</h2>
  <h2 style={{color:'cyan'}}>Name:Roshni Singh</h2>
  <h2 style={{color:'brown'}}>Branch:CSE</h2>
  <h2 style={{color:'greenyellow'}}>Section:CSE-24</h2>
  <h2 style={{color:'plum'}}>Skills:HTML,CSS,JS,React</h2>}
  <ICardGallery/>
  <ImageManipulation/>
  <MyUseEffect/>
  <FetchProducts/>
  </div>*/