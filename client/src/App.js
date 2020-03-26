import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Nav from './Nav';
import Signup from './Signup'
import Login from './Login'
import Posts from './Posts'
import Map from './Map'

function App() {
  return(
  <Router>
    <Nav></Nav>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      
      <Route path="/login">
        <Login />
      </Route>

     <Route path="/signup">
       <Signup />
     </Route>

      <Route path="/posts">
        <Posts />
      </Route>

      <Route path="/map">
        <Map />
      </Route>
    </Switch>


  </Router>    

  )
}

function Home() {
  return(
    <h1>Home Page</h1>

  );
}

export default App;