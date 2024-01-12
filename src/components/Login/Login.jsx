import React, { useContext, useState } from 'react';
import "./Login.css"
import { AuthContext } from '../Providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {googleSignin,signIn}=useContext(AuthContext)
    const [show,setShow]=useState(false)
    const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.from?.pathname || '/';


    const handleGooglelogin=()=>{
        googleSignin()
    }
    const handleSignin=event=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;

        signIn(email,password)
        .then(result=>{
            const loggin=result.user;
            console.log(loggin);
            form.reset()
            navigate(from,{replace:true})
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className='form-container'>
           <h1>Login From here</h1>
            <form onSubmit={handleSignin}>
                <div className='form-control'>
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" placeholder='Email' id="" />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type={show ? "text":"password"} name="password" placeholder='Password' id=""></input>
                    <p onClick={()=> setShow(!show)}>
                        <small>
                        {
                            show ? <span>Hide pawword</span>:<span>Show Password</span>
                        }
                        </small>
                        </p>
                </div>
                <input type="submit" value="Login" />
            </form>
            <button className='google-btn' onClick={handleGooglelogin}>Google Login</button>
        </div>
    );
};

export default Login;