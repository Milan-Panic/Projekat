import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Register from './auth/public/components/Register'
import Login from './auth/public/components/Login'
import Home from './auth/private/Home'
import Navigation from './auth/public/components/Navigation'
// import Header from './auth/public/components/Header'
import Profile from './auth/private/components/Profile'
import Odds from './auth/private/components/Sports'
import TeamsDesc from './teams/TeamsDes'
import SportGames from './teams/SportGames'
import Container from './stats/Container'
import './App.css';
import Logout from './auth/private/components/Logout';

// import Container from './stats/Container';
// import Wrapper from './teams/Wrapper';

function App() {

  return (
    <>
      <Router>
        {/* <Header /> */}
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
          <Route path="/sports">
            <Odds />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/compare">
            <Container />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/team/:id">
            <TeamsDesc />
          </Route>
          <Route path="/sport/:key">
            <SportGames />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
