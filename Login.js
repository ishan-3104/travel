import React from "react";
import Navbar from "./Navbar";
import './Login.css';
import { Link } from 'react-router-dom';
import Axios from 'axios';



export default function Login(){

    
    const [user_id,setuser_id] = React.useState("")
    const [password,setpassword] = React.useState("")
    
    const onlogin =(e)=>{
        e.preventDefault();

        Axios.post('http://localhost:5000/login',{
            
            loginuser : user_id,
            loginPass: password,
        })
        
        setuser_id("")
        setpassword("")
    }

    return (
        <div className ="pop-box">
            <Navbar />
            
            <div className = "signin">
                <div className = "containeer">
                    <img src = "https://colorlib.com/etc/regform/colorlib-regform-7/images/signup-image.jpg"></img>
                    <p className = "login_link"><Link to = "/Signin">Creat your account</Link></p>
                </div>
                
                <div className = "containeer">
                    <form className = "form">
                        
                        <div className="heading">
                            <h1>Log In</h1>
                        </div>
                        <div className="form-input">
                            
                            <input type = 'text' placeholder = 'User Id' id="login_user" onChange={(e)=>setuser_id(e.target.value)}></input><br /><br />
                            <input type = 'password' placeholder = 'Password' id="login_pss" onChange={(e)=>setpassword(e.target.value)}></input><br /><br />
                        </div>
                        <div>
                            <button className = "signin-submit"type = 'submit' id="login_btn" onClick={onlogin}>Login</button>
                        </div>
                        
                    </form>
                    <div className = "or-login">
                        <div><p>or login with</p></div>
                        <div className = "facebook">f</div>
                        <div className= "google">G</div>
                    </div>
                    
                    
                </div>   
            </div>
        </div>
        )
}




