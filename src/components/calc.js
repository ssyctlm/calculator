import React, { Component } from 'react';
import Button from './button';
import OutputPrevious from './outputprevious';
import OutputCurrent from './outputcurrent';

class Calc extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayPre: '123',
      displayCur: '0',
      number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      operator: ['+', "-", "x", "÷"]
    }
  }
  handleClick = val => {
    // if (val === '0' || val === '1' || val === '2' || val === '3' || val === '4' || val === '5' || val === '6' || val === '7' || val === '8' || val === '9' || val === '.') { this.setState({ displayCur: this.state.displayCur + val }) }
    if (this.state.number.indexOf(parseInt(val)) !== -1) {
      this.setState({ displayCur: this.state.displayCur + val })
    } else if (val === '0' && this.state.displayCur !== '0') {
      this.setState({ displayCur: this.state.displayCur + val })
    } else if (val === '.' && this.state.displayCur.indexOf(val) === -1) {
      this.setState({ displayCur: this.state.displayCur + val })
    } else {
      this.setState({ displayPre: this.state.displayCur })
    }

  }
  render() {
    return (
      <React.Fragment>
        <div className="row display">
          <OutputPrevious output={this.state.displayPre} />
          <OutputCurrent output={this.state.displayCur} />
        </div>
        <div className="row">
          <Button id="clear" name="AC" />
          <Button id="delete" name="Del" />
          <Button id="divide" name="÷" />
        </div>
        <div className="row">
          <Button click={this.handleClick} id="seven" name="7" />
          <Button click={this.handleClick} id="eight" name="8" />
          <Button click={this.handleClick} id="nine" name="9" />
          <Button id="multiply" name="x" />
        </div>
        <div className="row">
          <Button click={this.handleClick} id="four" name="4" />
          <Button click={this.handleClick} id="five" name="5" />
          <Button click={this.handleClick} id="six" name="6" />
          <Button id="substract" name="-" />
        </div>
        <div className="row">
          <Button click={this.handleClick} id="one" name="1" />
          <Button click={this.handleClick} id="two" name="2" />
          <Button click={this.handleClick} id="three" name="3" />
          <Button id="add" name="+" />
        </div>
        <div className="row">
          <Button click={this.handleClick} id="zero" name="0" />
          <Button click={this.handleClick} id="decimal" name="." />
          <Button id="equals" name="=" />
        </div>


      </React.Fragment>
    )
  }

}

export default Calc;