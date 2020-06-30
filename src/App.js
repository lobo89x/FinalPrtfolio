import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js';
import useNavi from './hooks/useSticky';

class App extends Component {
  render() {
    const { isFlow } = useNavi();

    return (
      <div className="App">
          <Navbar 
          pageNav={isFlow}/>
        <div className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2> */}
        </div>
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
