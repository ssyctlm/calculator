import React, { Component } from 'react';
import './button.css'

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // isOperator = val => {
  //   return !isNaN(val) || val === 
  // }
  render() {
    let { name, id } = this.props
    let style = val => {
      switch (val) {
        case "0":
          return "col-3 white "
        case "1":
          return "col-3 white "
        case "2":
          return "col-3 white "
        case "3":
          return "col-3 white "
        case "4":
          return "col-3 white "
        case "5":
          return "col-3 white "
        case "6":
          return "col-3 white "
        case "7":
          return "col-3 white "
        case "8":
          return "col-3 white "
        case "9":
          return "col-3 white "
        case ".":
          return "col-3 white "
        case "+":
          return "col-3 yellow "
        case "-":
          return "col-3 yellow "
        case "x":
          return "col-3 yellow "
        case "÷":
          return "col-3 yellow "
        case "=":
          return "col-3 yellow "
        case "-/+":
          return "col-3 white "
        case "AC":
          return "col-3 yellow "
        case "Del":
          return "col-6 yellow "
        default:
          return ''
      }
    }
    return (
      <div className={`mybtn border border-light ${style(name)}`} id={id} onClick={() => this.props.click(name)}>
        {this.props.name}
      </div>
    )
  }
}
