import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const Login = () => {
    const {googleSignin}=useContext(AuthContext)
    const handleGooglelogin=()=>{
        googleSignin()
    }
    return (
        <div>
            <h2>Login coming sooon</h2>
            <button onClick={handleGooglelogin}>Google Login</button>
        </div>
    );
};

export default Login;