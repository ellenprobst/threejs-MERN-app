import React, { Component } from 'react';

import './App.css';
import Form from './components/Form/Form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>AppTitle</h1>
        <Form/>
      </div>
    );
  }
}

export default App;
