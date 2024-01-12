import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
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
    const createUser=(email,passwrod)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,passwrod)
    }
    const signIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)

        })
        return ()=>{
            return unSubscribe()
        }
    },[])


    const authinfo={
        user,
        googleSignin,
        createUser,
        signIn,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;