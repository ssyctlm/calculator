import React, { Component } from 'react';
import Key from './key'

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: [
        { order: 0, id: "one", display: "1", value: 1 },
        { order: 1, id: "two", display: "2", value: 2 },
        { order: 2, id: "three", display: "3", value: 3 },
        { order: 3, id: "add", display: "+", value: null },
        { order: 4, id: "four", display: "4", value: 4 },
        { order: 5, id: "five", display: "5", value: 5 },
        { order: 6, id: "six", display: "6", value: 6 },
        { order: 7, id: "substract", display: "-", value: null },
        { order: 8, id: "seven", display: "7", value: 7 },
        { order: 9, id: "eight", display: "8", value: 8 },
        { order: 10, id: "nine", display: "9", value: 9 },
        { order: 11, id: "multiply", display: "×", value: null },
        { order: 12, id: "decimal", display: ".", value: null },
        { order: 13, id: "zero", display: "0", value: 0 },
        { order: 14, id: "equals", display: "=", value: null },
        { order: 15, id: "divide", display: "÷", value: null },
        { order: 16, id: "clear", display: "CLR", value: null },
      ],
      screen: '',
    }
  }
  render() {
    return (
      <div className="container calculator-body">
        <h1 className="text-center m-5">My Calculator</h1>
        {/* this is the displayer */}
        <div className="row justify-content-center">
          <div className="col-10 bg-light border text-right pl-5 pr-5 pt-2 pb-2 mb-5" id="display">
            {this.state.screen}
          </div>
        </div>
        {/* this is keyboards */}
        <div className="row justify-content-end">
          {/* numbers */}
          {this.state.keys.map(key => (
            <Key key={key.id} keyboards={key} />
          ))}


          {/* operator */}
        </div>


      </div >



    )
  }
}

export default Calculator;