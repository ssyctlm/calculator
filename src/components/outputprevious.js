import React, { Component } from 'react';
import './outputprevious.css'

export default class OutputPrevious extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let style = this.props.operator? ["pre col-11","pre col-1"]:["pre col-12","hide"]
    return (
      <React.Fragment>
        <div className={style[0]}>
          {this.props.output}
        </div>
        <div className={style[1]}>
          {this.props.operator}
        </div>
      </React.Fragment>
    )

  }
}