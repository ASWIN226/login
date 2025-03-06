import React from "react";
import './styles.css';
import '../assets/fonts/font.css'
import { useState } from "react";
import {Link} from 'react-router-dom'




function Header(){
    


        const [menuOpen, setMenuOpen] = useState(false);
        const toggleMenu = () => {
            setMenuOpen(!menuOpen);
};

    
    return(
        
        <>
        

        <div className="parent-div">
            <div className="child-div1">

                <div className="mp">
                <div className="mail">
                    
                    

                </div>
                <div className="mail">
                    
                     <p><i class="fa-solid  fa-envelope" style={{color:"red"}}></i> chocolicious@gmail.com</p>

                </div>

                
                <div className="ph">
                    <p> <i class="fa-solid fa-phone" style={{color:"red"}}></i> +91 87543 12837</p>

                </div>

                <div className="ph">
                   

                </div>


                <div className="social-media">
                    <ul style={{display:"flex",listStyle:"none",gap:"10px"}}>
                        <li className="lis"><a href="https://www.facebook.com/" target="blank"><i class="fa-brands fa-facebook" style={{color:"blue"}}></i></a></li>
                        <li className="lis">
                            <a href="https://in.pinterest.com/"><i class="fa-brands fa-pinterest"></i></a>
                            </li>

                        <li className="lis"><a href="https://x.com/i/flow/login" target="blank"><i class="fa-brands fa-x-twitter" style={{color:"black"}}></i></a></li>

                        <li className="lis"><a href="https://www.instagram.com/?hl=en"><i class="fa-brands fa-instagram" style={{color:"red"}}></i></a></li>

                        <li className="lis"><a href="https://www.blogger.com/about/"><i class="fa-solid fa-blog" style={{color:"orange"}}></i></a></li>

                        <li className="lis"></li>
                    </ul>

                </div>

                

                </div>

                

               


            </div>

            <div className="child-div2">
                <div className="heading">
                    <h1 className="custom-ft">ChocoLicious</h1>
                </div>

                <div className="nav-bar">

                    <ul style={{display:"flex",gap:"30px",flexWrap:"wrap",listStyle:"none"}}>
                        <li><a href="/dashboard">Home</a></li>
                        <li>Blogs</li>
                        <li>about us</li>
                        <li><Link to={"/"}><i class="fa-solid fa-user" style={{color:"black"}}></i></Link></li>
                        
                    </ul>



                </div>

                <div className="burger-menu" onClick={toggleMenu}>
                        <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
                    </div>

             

                

                <div className="cart-search"></div>
                
            </div>

            <div className={`side-menu ${menuOpen ? "open" : ""}`}>
                <ul>
                    <li><a href="ww.com">Home</a></li>
                    <li>Blogs</li>
                    <li>About Us</li>
                    <li><a><i className="fa-solid fa-cart-shopping"></i></a></li>
                    <li className="close-menu" onClick={toggleMenu}><i className="fa-solid fa-xmark"></i></li>
                </ul>
            </div>


        </div>

      

    
        
        
        </>
    )
}

export default Header


