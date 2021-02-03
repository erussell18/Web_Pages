import React from "react"
import "./Style.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./Home"
import Portfolio from "./Portfolio"
import About from "./About"

function App(){
  return(
    <Router>
      <Switch>
        <Route path="/" exact component={() => <Home />} />
        <Route path="/Portfolio" exact component={() => <Portfolio />} />
        <Route path="/About" exact component={() => <About />} />
      </Switch>
    </Router>
  )
};

export default App;