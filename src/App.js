import React, { Component } from 'react';

import EmailForm from './modules/Email/EmailForm';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <EmailForm />
      </div>
    );
  }
}

export default App;
