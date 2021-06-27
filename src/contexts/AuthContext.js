import React, { useContext, useState, useEffect, createContext } from "react"
import { auth } from "../firebase" // from firebase.js file 

// create context (used inside of provider)
// global state store
const AuthContext = createContext()

// function allows us to use Auth context 
// This is a custom hook that we created so that we can access auth throughout
// the entire application
export function useAuth() {
    return useContext(AuthContext)
}

// take in childern 
export function AuthProvider({ children }) {

    // default is no user at all (useEffect will set user)
    const [currentUser, setCurrentUser] = useState()
    // default loading (useEffect will set to no loading)
    const [loading, setLoading] = useState(true)

    // function for user registration
    // takes in email and password 
    // returns a new user it created  
    function register(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    // useEffect so it only runs once  
    useEffect(() => {
        // this function will call a method that will unsub 
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        // unsub from onAuthStateChanged whenever we unmount this component 
        return unsubscribe
    }, [])

    // function for user login, sings in to account
    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password)
    }

    // function for user logout, sings out of account
    function logout() {
        return auth.signOut()
    }

    // function for resetting password if forgotten
    // sends a password reset
    function passwordReset(email) {
        return auth.sendPasswordResetEmail(email)
    }

    //  user info
    const value = {
        currentUser,
        register,
        login,
        logout,
        passwordReset
    }

    // do not render any of the application until
    return (
        // if not loading then render out the children
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
