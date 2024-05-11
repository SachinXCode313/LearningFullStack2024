import {useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import {Route, Routes} from 'react-router-dom'
import CreateUser from './components/CreateUser.jsx'
import User from './components/User.jsx'



function App() {

  return (
    <>
      {/* <Routes>
        <Route path='/' element= {<CreateUser></CreateUser>}></Route>
        <Route path='/' element= {<User></User>}></Route>
        <Route path='/' element= {<CreateUser></CreateUser>}></Route>
      </Routes> */}

      <CreateUser/>
      <User/>      
      
      </>
  )
}

export default App
