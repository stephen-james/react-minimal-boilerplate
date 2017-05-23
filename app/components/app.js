import React, { Component, PropTypes } from 'react';
import 'normalize.css';
import './app.scss';

export default class App extends Component {
  render() {
    const view =
      <div id="app">
        <h1 class="hero">Minimal React Boilerplate!</h1>
      </div>

    return view;
  }
}
