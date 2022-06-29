//import '../styles/Input.css';
import { Component } from 'react';

class Input extends Component {
  render () {
    const { id, labelText, type, autoComplete, dataIndex, dataKey, handleChange } = this.props;

    return (
      <div className="input">
        <label htmlFor={id}>{labelText}</label>
        <input type={type} id={id} autoComplete={autoComplete} data-index={dataIndex} data-key={dataKey} onChange={handleChange}/>
      </div>
    )
  }
}

export default Input;