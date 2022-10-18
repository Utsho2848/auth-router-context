import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.init'


export const AuthContext = createContext();

const auth = getAuth(app)

const UserContexts = ({ children }) => {
    const [user, setUser] = useState({})
    const [loader, setLoader] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const signInGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoader(false)
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = { user, loader, createUser, signIn, logOut, signInGoogle }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContexts;