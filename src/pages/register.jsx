import React from "react";
import '../index.css';
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="sub">

                    <h1 style={{textAlign:"center",position:"relative",top:"30px",fontSize:"30px",fontWeight:"bold"}}>Signup</h1>

                    <form action="#" style={{position:"relative",top:"50px"}}>

                        <label htmlFor=""><i class="fa-solid fa-user"></i></label> <br /> <br />
                        <input type="text" style={{borderTop:"0px",borderLeft:"0px",borderRight:"0px",
                        width:"320px",
                        borderBottom:"3px solid grey",
                        opacity:"0.8",
                        fontWeight:"bold"
                        }}placeholder="set username"/> <br /> <br /> 

                         <label htmlFor=""><i class="fa-solid fa-lock"></i></label> <br />  <br />
                        <input type="text" style={{borderTop:"0px",borderLeft:"0px",borderRight:"0px",
                        width:"320px",
                        borderBottom:"3px solid grey",
                        opacity:"0.8",
                        fontWeight:"bold"
                        }}placeholder="set password"/>

                    <p style={{position:"relative",top:"30px",left:"120px",fontSize:"14px",fontWeight:"bold"}}><Link to={"/"} style={{textDecoration:"none",color:"black"}}>Already have an account? Login</Link></p>

                    <input type="submit" value={"Register"} className="but" style={{fontWeight:"bold"}}/>


                    </form>

                  

                  



                </div>
            </div>
        </>
    );
}
