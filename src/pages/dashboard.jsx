import React from "react";

import { useNavigate } from "react-router-dom";
import ImageSlider from "./splide";
import Header from "./header";

export default function Dash(){
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token"); // Clear authentication
        navigate("/"); // Redirect to login
    };
    return(
        <>
        <Header/>

        <ImageSlider/>
       
        <button onClick={handleLogout} style={{ padding: "10px", backgroundColor: "red", color: "white", border: "none", cursor: "pointer" }}>
                Logout
            </button>
       
       
       

        
        
    
        
        </>
    )
}

