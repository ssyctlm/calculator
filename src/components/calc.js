import React, { Component } from 'react';
import Button from './button';
import OutputPrevious from './outputprevious';
import OutputCurrent from './outputcurrent';

class Calc extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayPre: '',
      displayCur: '0',
      number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      operator: ''
    }
  }

  addNum = val => {
    if((this.state.displayCur[0] ==='0' && this.state.displayCur.length === 1) && val!=='.'){
      this.setState({displayCur:val})
    }
    else{
      this.setState({ displayCur: this.state.displayCur + val })
    }
    }
  addDecimal = val=>{
    if(val === '.' && this.state.displayCur.indexOf(val) === -1){
      this.setState({ displayCur: this.state.displayCur + val })
    }
  }
  addZero = val =>{
    if(this.state.displayCur[0] !== '0'){
      this.setState({displayCur:this.state.displayCur + val})
    }
  }

  operatorBtn = val =>{
    this.setState({displayPre:this.state.displayCur,displayCur:'',operator:val})
  }

  clearBtn = ()=>{
    this.setState({displayPre:' ',displayCur:'0'})
  }
  delBtn = () =>{
    if(this.state.displayCur.length === 1){
      this.setState({displayCur:'0'})
    }
    else{
      this.setState({displayCur:this.state.displayCur.slice(0,-1)})
    }
  }
  compute = ()=>{

    if(this.state.operator === "+"){
      this.setState({displayCur:parseInt(this.state.displayCur)+ parseInt(this.state.displayPre)})
      console.log(`${this.state.displayPre} + ${this.state.displayCur} = ${parseInt(this.state.displayCur)+ parseInt(this.state.displayPre)}`)
    }
    else if(this.state.operator === "-"){
      this.setState({displayCur:parseInt(this.state.displayPre)-parseInt(this.state.displayCur)})
      console.log(`${this.state.displayPre} - ${this.state.displayCur} = ${parseInt(this.state.displayPre)-parseInt(this.state.displayCur)}`)

    }
    else if(this.state.operator === "x"){
      this.setState({displayCur:parseInt(this.state.displayPre)*parseInt(this.state.displayCur)})
      console.log(`${this.state.displayPre} * ${this.state.displayCur} = ${parseInt(this.state.displayPre)*parseInt(this.state.displayCur)}`)

    }
    else if(this.state.operator === "÷"){
      this.setState({displayCur:parseInt(this.state.displayPre)/parseInt(this.state.displayCur)})
      console.log(`${this.state.displayPre} ÷ ${this.state.displayCur} = ${parseInt(this.state.displayPre)/parseInt(this.state.displayCur)}`)

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
          <Button click={this.clearBtn} id="clear" name="AC" />
          <Button click={this.delBtn} id="delete" name="Del" />
          <Button click={this.operatorBtn} id="divide" name="÷" />
        </div>
        <div className="row">
          <Button click={this.addNum} id="seven" name="7" />
          <Button click={this.addNum} id="eight" name="8" />
          <Button click={this.addNum} id="nine" name="9" />
          <Button click={this.operatorBtn} id="multiply" name="x" />
        </div>
        <div className="row">
          <Button click={this.addNum} id="four" name="4" />
          <Button click={this.addNum} id="five" name="5" />
          <Button click={this.addNum} id="six" name="6" />
          <Button click={this.operatorBtn} id="substract" name="-" />
        </div>
        <div className="row">
          <Button click={this.addNum} id="one" name="1" />
          <Button click={this.addNum} id="two" name="2" />
          <Button click={this.addNum} id="three" name="3" />
          <Button click={this.operatorBtn} id="add" name="+" />
        </div>
        <div className="row">
          <Button click={this.addZero} id="zero" name="0" />
          <Button click={this.addDecimal} id="decimal" name="." />
          <Button click={this.compute} id="equals" name="=" />
        </div>


      </React.Fragment>
    )
  }

}

export default Calc;