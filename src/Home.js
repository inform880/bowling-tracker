import React, { Component } from 'react';
import './home.css';
import logo from './logo.svg';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-header">
          <img src={logo} className="home-logo" alt="logo" />
          <h2>Bowling Tracker V1.0</h2>
        </div>
        <p className="home-intro">
          Bowlers Overview
        </p>
      </div>
    );
  }
}
