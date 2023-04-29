import React, { useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../../FIrebase.config';
import { createContext } from 'react';

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [ user , setUser ] = useState(null);
    const [loading, setLoading] = useState(true);

    // createUser with email
    const createUsersWithEmail = (email , password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email , password)
    }

    // signIn user form
    const signIn = (email, password) =>{
        setLoading(true);
        return  signInWithEmailAndPassword(auth, email, password)
    }

    // signOut user form
    const signOutForm = () =>{
        setLoading(true);
       return signOut(auth);    
    }

    // direct google login
    const GoogleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // direct github login
    const githubSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    // onAuthStateChanged state change
    useEffect(() =>{
       const unSubscribe = onAuthStateChanged(auth, loggedUser =>{
           setLoading(false);
        //    console.log("Logged in user inside auth state", loggedUser)
           setUser(loggedUser);
        })

        return () =>{
            return unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUsersWithEmail,
        signIn,
        signOutForm,
        GoogleSignIn,
        githubSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;