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
        return  signInWithEmailAndPassword(auth, email, password)
        setLoading(true);
    }

    // signOut user form
    const signOutForm = () =>{
        setLoading(true);
       return signOut(auth);    
    }

    // direct google login
    const GoogleSignIn = () =>{
        return signInWithPopup(auth, googleProvider);
        setLoading(true);
    }

    // direct github login
    const githubSignIn = () =>{
        return signInWithPopup(auth, githubProvider)
        setLoading(true);
    }

    // onAuthStateChanged state change
    useEffect(() =>{
       const unSubscribe = onAuthStateChanged(auth, loggedUser =>{
        //    console.log("Logged in user inside auth state", loggedUser)
           setUser(loggedUser);
           setLoading(false);
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