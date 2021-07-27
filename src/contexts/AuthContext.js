import React, { useContext, useState, useEffect, createContext } from "react"
import { auth } from "../firebase" // from firebase.js file 
import { getUser, postUser } from "../services/usersClient"

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
    const [cryptoUser, setCryptoUser] = useState({});

    // function for user registration
    // takes in email and password 
    // returns a new user it created  
    async function register(userEmail, password, userphonenumber) {
        const { email, uid } = (await auth.createUserWithEmailAndPassword(userEmail, password)).user
        const id = await postUser({
            userid: uid,
            useremail: email,
            userphonenumber
        })

        setCryptoUser({
            id,
            data: {
                currency: {},
                useremail: email,
                userid: uid,
                userphonenumber
            }
        })
    }

    // useEffect so it only runs once  
    useEffect(() => {
        // this function will call a method that will unsub 
        const unsubscribe = auth.onAuthStateChanged( user => {
            setCurrentUser(user)
            setLoading(false)
        })
        // unsub from onAuthStateChanged whenever we unmount this component 
        return unsubscribe
    }, [])

    useEffect(async () => {
        if(currentUser){
            const {uid} = currentUser;
            if(!cryptoUser.hasOwnProperty(`userid`) || cryptoUser.userid !== uid) {
                const userData = await getUser(uid)
                console.log(userData)
                setCryptoUser(userData)
            }
        }
    }, [currentUser])

    // function for user login, sings in to account
    async function login(email, password) {
        const {uid} = await auth.signInWithEmailAndPassword(email, password)
        const userData = await getUser(uid)
        setCryptoUser(userData)
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

    // function to change email
    // updates to new email
    function changeEmail(email) {
        return currentUser.updateEmail(email)
    }

    // function to change password
    // updates to new password
    function changePassword(password) {
        return currentUser.updatePassword(password)
    }

    //  user info
    const value = {
        currentUser,
        register,
        login,
        logout,
        passwordReset,
        changeEmail,
        changePassword,
        cryptoUser
    }

    // do not render any of the application until
    return (
        // if not loading then render out the children
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
