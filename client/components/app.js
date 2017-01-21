import React from 'react';
import { Component } from 'react';

export default class App extends Component {
  render () {
    return ( 
      <div style={{backgroundColor: "#D1C4E9", top: 0, right: 0, bottom: 0, left: 0}}>
        {this.props.children || 'NO Components'}
      </div>
    );
  }
}