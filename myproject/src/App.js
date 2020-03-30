import React from 'react';
import './App.css';
import Container from './stats/Container';
import Wrapper from './teams/Wrapper';
import Register from './auth/register';

function App() {
  
  return (
    <div className="App">
      <Container/> 
      <Wrapper />
      <Register />
    </div>
  );
}

export default App;
