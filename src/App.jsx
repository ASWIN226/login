import React from "react";
import Login from "./pages/Login";
import Register from "./pages/register";
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
export default function App(){
  return(
    <>

    {/* <Login/> */}
    {/* <Register/> */}

    <Router>

      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>

        <Route path="*" element={<h1>not found</h1>}></Route>
      </Routes>


    </Router>

  

  
   
    
    
    </>
  )
}