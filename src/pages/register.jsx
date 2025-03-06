import React,{useState} from "react";
import '../index.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { Riple } from "react-loading-indicators";


export default function Register() {
    const [formData,setformData]=useState({
        username:"",
        password:""

    });

    const [loading, setLoading] = useState(false);

    const [message,setMessage]=useState("");
    const [success,setSuccess]=useState("")

   

    const handleChange=(e)=>{
        setformData({
            ...formData,[e.target.name]:e.target.value
        });

    };

    

   


    const handleSubmit=async (e) => {
        e.preventDefault();
        if (!formData.username || !formData.password) {
            setMessage("fill all fields");
            setSuccess("")
            return;
        }
        setLoading(true);

        setTimeout(async () => {
            try {
                const response = await axios.post("http://localhost:5000/register", formData);

           
                setLoading(false);
                setSuccess(response.data.message);
                setMessage("")
                
             
                
            } catch (error) {

                setLoading(false); 
    
                setMessage("Error: " + error.response?.data?.message || "Something went wrong");
                setSuccess("")
                
                
            }
            
        },2000);

        

       
        
    }


    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="sub">

                    <h1 style={{textAlign:"center",position:"relative",top:"30px",fontSize:"30px",fontWeight:"bold"}}>Signup</h1>

                    <form action="#" style={{position:"relative",top:"50px"}} onSubmit={handleSubmit}>

                        <label htmlFor=""><i class="fa-solid fa-user"></i></label> <br /> <br />
                        <input type="text" style={{borderTop:"0px",borderLeft:"0px",borderRight:"0px",
                        width:"270px",
                        borderBottom:"3px solid grey",
                        opacity:"0.8",
                        fontWeight:"bold"
                        }}placeholder="set username" name="username" value={formData.username} onChange={handleChange}/> <br /> <br /> 

                         <label htmlFor=""><i class="fa-solid fa-lock"></i></label> <br />  <br />
                        <input type="password" style={{borderTop:"0px",borderLeft:"0px",borderRight:"0px",
                        width:"270px",
                        borderBottom:"3px solid grey",
                        opacity:"0.8",
                        fontWeight:"bold"
                        }}placeholder="set password" name="password" value={formData.password} onChange={handleChange}/>

                    <p style={{position:"relative",top:"30px",left:"60px",fontSize:"14px",fontWeight:"bold"}}><Link to={"/"} style={{textDecoration:"none",color:"black"}}>Already have an account? Login</Link></p>

                    <input type="submit" value={"Register"} className="but" style={{fontWeight:"bold"}}/>


                    </form>

                    {message && <p style={{position:"relative",top:"90px",textAlign:"center",color:"red",fontWeight:"bold"}}>{message}</p>}
                    {success && <p style={{position:"relative",top:"90px",textAlign:"center",color:"green",fontWeight:"bold"}}>{success}</p>}

                  

                   
                   <div style={{position:"relative",top:"90px",left:"120px"}}>

                   {loading &&  <Riple  size="small" text="creating" color={"green"} speedPlus="1"/> }

                   </div>

               
                  



                  

                  



                </div>
            </div>
        </>
    );
}
