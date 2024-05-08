import {useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import LoginForm from './LoginForm.jsx'
import {Route, Routes} from 'react-router-dom'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element= {<LoginForm></LoginForm>}></Route>
      </Routes>

    </>
  )
}

export default App
