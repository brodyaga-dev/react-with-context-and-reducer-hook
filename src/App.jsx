import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import ContextProvider from './ContextProvider';
import Navbar from './Navbar';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <ContextProvider>
        <Navbar />
        <Home />
      </ContextProvider>
    );
  }
}

export default hot(App);
