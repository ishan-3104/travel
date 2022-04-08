import React from "react";
import Navbar from "./Navbar";
import './Signin.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';


const Signin = (props) =>{
    const [name,setname] = React.useState("")
    const [user_id,setuser_id] = React.useState("")
    const [password,setpassword] = React.useState("")
    
    const onSignin =(e)=>{
        e.preventDefault();

        Axios.post('http://localhost:5000/auth',{
            signname : name,
            signid : user_id,
            signpass: password,
        })
        setname("")
        setuser_id("")
        setpassword("")
    }

    return (
        <div className ="pop-box">
            <Navbar />
            
            <div className = "signin">
                <div className = "containeer">
                    <img src = "https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg"></img>
                    <p className="login_link"><Link to = "/Login" className="login_link" id="login_pg">Already have an account</Link></p>
                </div>
                
                <div className = "containeer">
                    <form className = "form">
                        
                        <div className="heading">
                            <h1>Sign up</h1>
                        </div>
                        <div className="form-input">
                            <input type = 'text' placeholder = 'Name' id="sigin_name" onChange={(e)=>setname(e.target.value)}></input><br /><br />
                            <input type = 'text' placeholder = 'User Id' id="sigin_username" onChange={(e)=>setuser_id(e.target.value)}></input><br /><br />
                            <input type = 'password' placeholder = 'Password' id="sigin_pass" onChange={(e)=>setpassword(e.target.value)}></input><br /><br />
                            

                        </div>
                        <div>
                            <button className = "signin-submit" type = 'submit' id="sigin_btn" onClick={onSignin}>Sign Up</button>
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

export default Signin;
