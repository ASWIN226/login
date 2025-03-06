import React from "react";
import Login from "./pages/Login";
import Register from "./pages/register";
import Dash from "./pages/dashboard";
import Notfound from "./pages/notfound";
import ProtectRoute from "./pages/ProtectedRoute";
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

        <Route path="/dashboard" element={<ProtectRoute><Dash/></ProtectRoute>}></Route>

       

        <Route path="*" element={<Notfound/>}></Route>
      </Routes>


    </Router>

  

  
   
    
    
    </>
  )
}