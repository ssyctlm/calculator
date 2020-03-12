import React, { Component } from 'react';
import './outputcurrent.css'

export default class OutputCurrent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="current col-12 ">
        {this.props.output}
      </div>
    );

  }
}