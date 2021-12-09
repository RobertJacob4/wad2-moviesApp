import React from "react"
import Signup from "../components/userAuth/signUp"
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from "./homePage"
import Login from "../components/userAuth/login"
import PrivateRoute from "../components/userAuth/privateRoute"
import "bootstrap/dist/css/bootstrap.min.css"


const signIn = (props) => {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/signup" component={Signup} />
              <PrivateRoute path="/home" component={HomePage} />
            </Switch>
        </Router>
      </div>
    </Container>
  )
}

export default signIn;