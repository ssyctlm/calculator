import React, { Component } from 'react';
import './outputprevious.css'

export default class OutputPrevious extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="pre col-12">
        {this.props.output}
      </div>
    )

  }
}