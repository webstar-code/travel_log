import React,{useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import GlobalStyles from './styles/GlobalStyles'
import {Footer, H4 } from './styles/HomeStyles'

import Nav from './Nav';
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import Posts from './Posts'
import Map from './Map'
import city from './images/city1920x1080.jpg'





function App() {
const [bimg, setbimg] = useState(city);
const Setbimg = (x) => setbimg(x);

const Image = styled.div`
  background-image: url(${bimg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  
  @media(max-width: 620px) {
    background-image: none;
  background-color: #333333;

  }

`;

  return(
  <Router>

    <Image>

    <Switch>
      <Route exact path="/">
    <Nav Setbimg={Setbimg}></Nav>
        <Home />
      </Route>
      
      <Route path="/login">
    <Nav Setbimg={Setbimg}></Nav>
        
        <Login />
      </Route>

     <Route path="/signup">
    <Nav Setbimg={Setbimg}></Nav>
      
       <Signup />
     </Route>

      <Route path="/posts">
        <Posts />
      </Route>

      <Route path="/map">
        <Map />
      </Route>
    </Switch>
    <Footer>
        <H4>By webstar</H4>
</Footer>
    </Image>

  </Router>    
  )
}


export default App;