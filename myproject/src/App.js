import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Register from './auth/public/components/Register'
import Login from './auth/public/components/Login'
import Home from './auth/private/Home'
import Navigation from './auth/public/components/Navigation'
import Header from './auth/public/components/Header'
import Profile from './auth/private/components/Profile'
import './App.css';

// import Container from './stats/Container';
// import Wrapper from './teams/Wrapper';

function App() {

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Navigation />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
