import React, { Component } from 'react';
import Connection from './contained/Connection.js';
import Chatbox from './Chatbox.js';
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
        <Connection/>
        <HistoryContainer/>
        <Chatbox/>
      </div>
    );
  }
}

export default App;