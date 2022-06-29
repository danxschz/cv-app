import { Component } from 'react';
import Input from './Input';

class ExperienceInputs extends Component {
  render() {
    const { dataIndex, handleChange, removeArrayItem } = this.props

    return (
      <form className="form__inputs">
        <Input id={`role-${dataIndex + 1}`} labelText="Role" dataIndex={dataIndex} dataKey="role" handleChange={handleChange}/>
        <Input id={`companyName-${dataIndex + 1}`} labelText="Company" dataIndex={dataIndex} dataKey="companyName" handleChange={handleChange}/>
        <Input id={`companyLocation-${dataIndex + 1}`} labelText="Location" dataIndex={dataIndex} dataKey="companyLocation" handleChange={handleChange}/>
        <Input id={`roleStartDate-${dataIndex + 1}`} labelText="Start Date" dataIndex={dataIndex} dataKey="roleStartDate" handleChange={handleChange}/>
        <Input id={`roleEndDate-${dataIndex + 1}`} labelText="End Date" dataIndex={dataIndex} dataKey="roleEndDate" handleChange={handleChange}/>
        <div className="input">
          <label htmlFor={`roleDescription-${dataIndex + 1}`}>Description</label>
          <textarea id={`roleDescription-${dataIndex + 1}`} rows="5" data-index={dataIndex} data-key="roleDescription" onChange={handleChange}></textarea>
        </div>
        <button type="button" className="form__remove-btn" onClick={() => removeArrayItem('experience', dataIndex)}>Remove</button>
      </form>
    );
  }
}

export default ExperienceInputs;