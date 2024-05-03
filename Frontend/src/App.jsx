import {useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import LoginForm from './LoginForm.jsx'
import Display from './Display.jsx'
import Car from './Car.jsx'


function App() {

  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   console.log("Hey........")
  // }, [count]); // <- add empty brackets here

  // const array = [34,56,78]






  
  

  return (
    <>
      {/* <h1>Coffee With Sachin :)</h1> */}
      {/* <button onClick={() => setCount((count)=> count+1)}></button>
      <h1>I've rendered {count} times!</h1>; */}

     <LoginForm/>
      <Display/>  
      {/* <Car/> */}
    </>
  )
}

export default App
