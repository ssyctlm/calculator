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
      operator: undefined,
    }
  }

  addNum = val => {
    // if(this.state.displayCur[0]==='-'){
    //   if((this.state.displayCur[1] ==='0' && this.state.displayCur.length === 2) && val!=='.'){
    //     this.setState({displayCur:'-'+val})
    //   }
    //   else{
    //     this.setState({ displayCur: this.state.displayCur + val })
    //   }
    // }
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
    if(this.state.displayCur && this.state.displayCur!=='0'){
      if(this.state.operator === undefined){
        this.setState({displayPre:this.state.displayCur,displayCur:'',operator:val})
      }else{
        this.compute();
        this.setState({operator:val})
      }
    }
    else{
      this.setState({operator:val})
    }
  }

  clearBtn = ()=>{
    this.setState({displayPre:'',displayCur:'0',operator:undefined})
  }
  delBtn = () =>{
    if(this.state.displayCur.length === 1){
      this.setState({displayCur:'0'})
    }
    else{
      this.setState({displayCur:this.state.displayCur.slice(0,-1)})
    }
  }
  negative =()=>{
    if(this.state.displayCur[0]!=='-' && parseFloat(this.state.displayCur)!==0){
      this.setState({displayCur:'-' + this.state.displayCur})
    }

  }
  compute = ()=>{
    if(this.state.displayPre && this.state.displayCur){
      if(this.state.operator === "+"){
        this.setState({displayPre:parseFloat(this.state.displayCur)+ parseFloat(this.state.displayPre),displayCur:'',operator:undefined})
        console.log(`${this.state.displayPre} + ${this.state.displayCur} = ${parseFloat(this.state.displayCur)+ parseFloat(this.state.displayPre)}`)
      }
      else if(this.state.operator === "-"){
        this.setState({displayPre:parseFloat(this.state.displayPre)-parseFloat(this.state.displayCur),displayCur:'',operator:undefined})
        console.log(`${this.state.displayPre} - ${this.state.displayCur} = ${parseFloat(this.state.displayPre)-parseFloat(this.state.displayCur)}`)
  
      }
      else if(this.state.operator === "x"){
        this.setState({displayPre:parseFloat(this.state.displayPre)*parseFloat(this.state.displayCur),displayCur:'',operator:undefined})
        console.log(`${this.state.displayPre} * ${this.state.displayCur} = ${parseFloat(this.state.displayPre)*parseFloat(this.state.displayCur)}`)
  
      }
      else if(this.state.operator === "÷"){
        this.setState({displayPre:parseFloat(this.state.displayPre)/parseFloat(this.state.displayCur),displayCur:'',operator:undefined})
        console.log(`${this.state.displayPre} ÷ ${this.state.displayCur} = ${parseFloat(this.state.displayPre)/parseFloat(this.state.displayCur)}`)

      }
      else{return}
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="row display">
          <OutputPrevious output={this.state.displayPre} operator={this.state.operator}/>
          <OutputCurrent output={this.state.displayCur} />
        </div>
        <div className="row">
          <Button key="AC" click={this.clearBtn} id="clear" name="AC" />
          <Button key="Del" click={this.delBtn} id="delete" name="Del" />
          <Button key="÷" click={this.operatorBtn} id="divide" name="÷" />
        </div>
        <div className="row">
          <Button key="7" click={this.addNum} id="seven" name="7" />
          <Button key="8" click={this.addNum} id="eight" name="8" />
          <Button key="9" click={this.addNum} id="nine" name="9" />
          <Button key="x" click={this.operatorBtn} id="multiply" name="x" />
        </div>
        <div className="row">
          <Button key="4" click={this.addNum} id="four" name="4" />
          <Button key="5" click={this.addNum} id="five" name="5" />
          <Button key="6" click={this.addNum} id="six" name="6" />
          <Button key="-" click={this.operatorBtn} id="substract" name="-" />
        </div>
        <div className="row">
          <Button key="1" click={this.addNum} id="one" name="1" />
          <Button key="2" click={this.addNum} id="two" name="2" />
          <Button key="3" click={this.addNum} id="three" name="3" />
          <Button key="+" click={this.operatorBtn} id="add" name="+" />
        </div>
        <div className="row">
          <Button key="0" click={this.addZero} id="zero" name="0" />
          <Button key="." click={this.addDecimal} id="decimal" name="." />
          <Button key="-/+" click={this.negative} name='-/+' />
          <Button key="=" click={this.compute} id="equals" name="=" />
        </div>


      </React.Fragment>
    )
  }

}

export default Calc;