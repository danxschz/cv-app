import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
  
    this.state = {value: ''};
  }

  render () {
    return (
      <div className="input">
        <label htmlFor={this.props.id}>{this.props.labelText}</label>
        <input type={this.props.type} id={this.props.id} autocomplete={this.props.autocomplete}/>
      </div>
    )
  }
}

export default Input;