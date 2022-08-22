import React from "react";
import {auth,provider} from "./firebase";
import { signInWithPopup } from "firebase/auth";
import Button from '@mui/material/Button';
import "./Login.css";
import GoogleIcon from '@mui/icons-material/Google';
function Login({setUser})
{
    const signIn = ()=>{
     signInWithPopup(auth,provider).then((result)=>{
          console.log(result.user);
           setUser(result.user);
     })
     .catch((error)=>alert(error.message));
}  
   return(
        <div className="login">
            <img alt="noimg"src="https://i.pinimg.com/550x/17/78/72/177872c5ee3c47faad9b33d92bf90d29.jpg"/>
            <h1>Login to twitter</h1>
            <Button  className="button" onClick={signIn} >
                <GoogleIcon/> Sign in with Google
            </Button>
        </div>
   )
}
export default Login;
