import React, { Component } from 'react';


export default class Key extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    const { id, display, value } = this.props.keyboards;
    const styleConditional = value !== null || id === "decimal" ? "keys btn btn-sm btn-dark border rounded-circle d-flex justify-content-center align-items-center" : id === "equals" ? "keys btn btn-sm btn-warning border rounded-circle d-flex justify-content-center align-items-center" : "keys btn btn-sm btn-secondary border rounded-circle d-flex justify-content-center align-items-center"
    return (
      <React.Fragment>

        <div className="col-3">

          <span className={styleConditional} id={id} >{display}</span>
        </div>
      </React.Fragment>
    )

  }
}