import { useState } from "react";
import '../index.css';
import { Riple } from "react-loading-indicators";

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize navigation
    const [err,setErr]=useState('');
    const [loading, setLoading] = useState(false);
    const [tog,setTog]=useState(true);

    const Toggle=(e)=>{
        e.preventDefault();
        setTog(!tog);

    }

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading animation
    
        setTimeout(async () => {
            try {
                const response = await axios.post("http://localhost:5000/login", { username, password });
                setLoading(false); // Stop loading animation
    
                if (response.data.success) {
                    localStorage.setItem
                    ("token",response.data.token);
                    navigate("/dashboard");
                } else {
                    alert("Invalid credentials");
                }
            } catch (error) {
                console.error("Error:", error);
                setErr(error.message);
                setLoading(false); // Stop loading animation
            }
        }, 2000); // Wait for 2 seconds before making the API call
    };
    

    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="sub">
                    <h1 style={{ textAlign: "center", position: "relative", top: "30px", fontSize: "30px", fontWeight: "bold" }}>Login</h1>

                    <form style={{ position: "relative", top: "50px" }} onSubmit={handleLogin}>
                        <label><i className="fa-solid fa-user"></i></label> <br /><br />
                        <input type="text" style={{
                            borderTop: "0px", borderLeft: "0px", borderRight: "0px",
                            width: "270px", borderBottom: "3px solid grey",
                            opacity: "0.8", fontWeight: "bold"
                        }} placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} /> <br /><br />

                        <label><i className="fa-solid fa-lock"></i></label> <br /><br />
                        <input type={tog?"password":"text"} style={{
                            borderTop: "0px", borderLeft: "0px", borderRight: "0px",
                            width: "270px", borderBottom: "3px solid grey",
                            opacity: "0.8", fontWeight: "bold"
                        }} placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} /> 
                        
                        <button  style={{border:"none",backgroundColor:"transparent",float:"right",position:"relative",left:"-20px",top:"-30px"}}onClick={Toggle}>{tog?<i class="fa-solid fa-eye"></i>:<i class="fa-solid fa-eye-slash"></i>}</button>

                        <p style={{ position: "relative", top: "30px", left: "60px", fontSize: "14px", fontWeight: "bold" }}>
                            <Link to="/register" style={{ textDecoration: "none", color: "black" }}>Don't have an account? Register</Link>
                        </p>

                        <input type="submit" value="Login" className="but" style={{ fontWeight: "bold" }} />
                        {err&&<p style={{position:"relative",top:"50px",left:"90px",color:"red"}}>{err} <i class="fa-solid fa-wifi"></i></p>}

                        <div style={{position:"relative",top:"60px",left:"120px"}}>
                            
                        {loading &&  <Riple  size="small" text="loading" color={["#ff32dd"]} speedPlus="1"/> }

                        </div>

                       
                    </form>
                </div>

                
           
            </div>
        </>
    );
}
