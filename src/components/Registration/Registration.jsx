import React, { useContext, useState } from 'react';
import './Registration.css'
import { AuthContext } from '../Providers/AuthProvider';


const Registration = () => {
    const {googleSignin,createUser}=useContext(AuthContext)
    const [error,setError]=useState('')
    const handleGooglelogin=()=>{
        googleSignin()
    }
    const handleRegister=(event)=>{
        event.preventDefault()
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const conform=form.conform.value;
        console.log(email,password);
        setError('')
         if(password!==conform){
                setError('please match your password')
                return
            }
        createUser(email,password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
        })
        .catch(error=>{
            console.log(error);
           
        })

    }
    return (
        <div>
            <h1>This is Registration page</h1>
            <div className='form-container'>
           
           <form onSubmit={handleRegister}>
               <div className='form-control'>
                   <label htmlFor="">Email</label>
                   <input type="email" name="email" placeholder='Email' id="" />
               </div>
               <div className='form-control'>
                   <label htmlFor="">Password</label>
                   <input type="password" name="password" placeholder='Password' id="" />
               </div>
               <div className='form-control'>
                   <label htmlFor="">Conform Password</label>
                   <input type="password" name="conform" placeholder='Conform Password' id="" />
               </div>
               <input className='register' type="submit" value="Registration" />
           </form>
           <button className='google-btn' onClick={handleGooglelogin}>Google Login</button>
       </div>
        </div>
    );
};

export default Registration;