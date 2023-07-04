

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'


import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import Main from './Pages/Main'
import LandingPage from './components/LandingPage'


export default function App() {
  return (
      <Router>
          <div>
          <Route exact path="/" component={ LandingPage} />
                  <Route path="/login" component={ LoginPage } />
                  <Route path="/register" component={ RegisterPage } />
                 <Route path="/main" component={Main}/>
              <Footer />
          </div>
      </Router>
  )
}

const Footer = () => {
  return (
      <p className="text-center" style={ FooterStyle }>Designed & coded by Naghma </p>
  )
}

const FooterStyle = {
  background: "grey",
  fontSize: ".8rem",
  color: "black",
  position: "sticky",
  bottom: 0,
  padding: "1rem",
  margin: 0,
  width: "100%",
  opacity: ".5"
}
