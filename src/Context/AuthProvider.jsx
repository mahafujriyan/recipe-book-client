import React, {  useEffect, useState } from 'react';
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword, updateProfile, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, } from "firebase/auth";

import { AuthContext } from './AuthContext';
import { auth } from '../../firebase.init';



const AuthProvider = ({children}) => {
    
    const[user,setUser]=useState()
    const [loading,setLoading]=useState(true)

      
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false); 
      });
  
      return () => unsubscribe();
    }, []);

  
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    
     const signIn = (email, password) => {
            return signInWithEmailAndPassword(auth, email, password);
          }
       
    const updateUser=updatedData=>{
        return updateProfile(auth.currentUser,updatedData)

     }
     const logOut=async()=>{
        await fetch('https://recipe-book-server-khaki.vercel.app/logout', { method: 'POST' });
          await signOut(auth);
    setUser(null);
     }
     const googleLogin = () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
          .then(result => {
            const logInGoogle = result.user;
            setUser(logInGoogle); 
            return logInGoogle;  
          })
          .finally(() => setLoading(false));
      };
      
   
    const authData={
        user,
        setUser,
        auth,
        createUser,
        updateUser,
        logOut,
        signIn,
        loading,
        setLoading,
        googleLogin


    }
    return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
};

export default AuthProvider;