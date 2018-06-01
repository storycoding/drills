import React, { Component } from 'react';
import Chatbox from './Chatbox';
import HistoryContainer from './contained/HistoryContainer.js';
import TypingContainer from './contained/TypingContainer.js';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="App">
        <Chatbox/>
        <HistoryContainer/>
        <TypingContainer/>
      </div>
    );
  }
}

export default App;