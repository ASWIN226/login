import React from "react";
import '../index.css';
import {Link} from 'react-router-dom'

export default function Login() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="sub">

                    <h1 style={{textAlign:"center",position:"relative",top:"30px",fontSize:"30px",fontWeight:"bold"}}>Login</h1>

                    <form action="#" style={{position:"relative",top:"50px"}}>

                        <label htmlFor=""><i class="fa-solid fa-user"></i></label> <br /> <br />
                        <input type="text" style={{borderTop:"0px",borderLeft:"0px",borderRight:"0px",
                        width:"320px",
                        borderBottom:"3px solid grey",
                        opacity:"0.8",
                        fontWeight:"bold"
                        }}placeholder="enter username"/> <br /> <br /> 

                         <label htmlFor=""><i class="fa-solid fa-lock"></i></label> <br />  <br />
                        <input type="text" style={{borderTop:"0px",borderLeft:"0px",borderRight:"0px",
                        width:"320px",
                        borderBottom:"3px solid grey",
                        opacity:"0.8",
                        fontWeight:"bold"
                        }}placeholder="enter your password"/>

                    <p style={{position:"relative",top:"30px",left:"120px",fontSize:"14px",fontWeight:"bold"}}><Link to={"/register"} style={{textDecoration:"none",color:"black"}}>don't have an account? Register</Link></p>

                    <input type="submit" value={"Login"} className="but" style={{fontWeight:"bold"}}/>


                    </form>

                  

                  



                </div>
            </div>
        </>
    );
}
