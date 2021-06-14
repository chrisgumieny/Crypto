import React from "react"
import {Container} from "react-bootstrap"
import {AuthProvider} from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom" // npm i react-router-dom
import Home from "./Home"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import Register from "./Register"
import "./VionaStyles.css"

 
function App() {
  return (
    //container to format register page 
    <Container 
      className="container"
    >
      <div className="width100" >
      <Router>
          <AuthProvider>
            {/*switch determines which route we are currently on */}
            <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/forgotpassword" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  ) 
}

export default App;
