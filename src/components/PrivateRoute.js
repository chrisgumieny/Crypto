import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

// create a wrapper for our current route
// this will make sure that people cant get to index page without loggin 
export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()

  return (
    <Route
      // rest of the props
      {...rest}
      // check to make sure we have a current user, if not redirect to login 
      render={props => {
        return currentUser ? <Component {...props} /> : <Redirect to="/login" />
      }}
    ></Route>
  )
}
