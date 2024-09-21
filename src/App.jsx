import { useState } from 'react'
import Home from "../src/Pages/Home"
import Login from "../src/Pages/Login/Login"
import SignUp from './Pages/Sign_UP/Signup'
import Header from "../src/Components/HomeUI/Header"
import Upload from './Pages/Upload-Doucuments/Upload'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import "./App.css"
function App() {
  return (
    <div>
      
       <BrowserRouter>
         <Routes>
           <Route  path='/' element={<Home/>}/>
           <Route  path='/Login' element={<Login/> }/>
           <Route  path='/SignUp' element={<SignUp/> }/>
           <Route  path='/Upload' element={< Upload/> }/>
         </Routes>
       </BrowserRouter>
   
    </ div>
  )
}

export default App
