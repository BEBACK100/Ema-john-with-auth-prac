import React, { createContext, useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../Firabase/Firebase.config';


export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    

    const auth = getAuth(app);

    const googleProvider=new GoogleAuthProvider()
    const googleSignin=()=>{
        return signInWithPopup(auth,googleProvider)
    }


    const authinfo={
        user,
        googleSignin
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;