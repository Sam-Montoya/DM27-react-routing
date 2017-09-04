import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import router from './router.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>This is the landing area room.</h1>
        <h3>I'm being hit!</h3>

          <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/about/faq'>FAQ</Link>
            <Link to='/people'>People</Link>
            { router }
          </div>

      </div>
    );
  }
}

export default App;
