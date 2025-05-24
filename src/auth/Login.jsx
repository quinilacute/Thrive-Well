import React from "react";
import Button from "./Button";





const Login = () => {
    return(
        <div>
            <div>
        
        <label htmlFor="">Email</label>    
        <input type="text"   />



        <label htmlFor="">Password</label>    
        <input type="text"   /> 
        </div>


             <div>
             <h3>or login with</h3>
             
             <Button>Login</Button>
             </div>

            <div>
              <a href="google"><img src="" alt="" /> Google</a>
              <a href="facebook"><img src="" alt="" /> Facebook</a>
            </div>


            <a href="signup link">Dont have an account? Signup</a>
        </div>
    )
}


export default Login;