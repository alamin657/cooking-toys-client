import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const googleProviderSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    const updateProfileUser = (name, photoURL, user) => {
        setLoading(true)
        return updateProfile(user, {
            displayName: name,
            photoURL: photoURL
        })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('Observer', loggedUser)
            setLoading(false);
            setUser(loggedUser)
        })
        return unsubscribe();
    }, [])
    const authInfo = {
        user,
        error,
        setError,
        loading,
        createUser,
        signIn,
        logOut,
        updateProfileUser,
        googleProviderSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;