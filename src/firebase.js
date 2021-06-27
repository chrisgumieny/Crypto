// npm i firebase (install firebase)
import firebase from "firebase/app"
import "firebase/auth"

// create an app 
const app = firebase.initializeApp({
  // all the config values (in .env.local)
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
})

// export a var for auth
// app.auth() is a function 
export const auth = app.auth()
// we can use this app anywhere else
export default app