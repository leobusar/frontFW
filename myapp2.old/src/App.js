import React, { Component } from 'react';
import './App.css';
import Tasks from './Tasks/Tasks'; 

class App extends Component {
  render() {
    return (
      <div className="App">
        <Tasks person="LeonardoB" />
      </div>
    );
  }
}

export default App;
