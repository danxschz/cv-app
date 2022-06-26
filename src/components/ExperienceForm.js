import React, { Component } from "react";
import Input from "./Input";

class ExperienceForm extends Component {
  render() {
    const { dataIndex, handleChange, removeItem } = this.props

    return (
      <div>
        <h2>Experience</h2>
        <form>
          <Input id={`role-${dataIndex + 1}`} labelText="Role" dataIndex={dataIndex} dataKey="role" handleChange={handleChange}/>
          <Input id={`companyName-${dataIndex + 1}`} labelText="Company" dataIndex={dataIndex} dataKey="companyName" handleChange={handleChange}/>
          <Input id={`companyLocation-${dataIndex + 1}`} labelText="Location" dataIndex={dataIndex} dataKey="companyLocation" handleChange={handleChange}/>
          <Input id={`roleStartDate-${dataIndex + 1}`} labelText="Start Date" dataIndex={dataIndex} dataKey="roleStartDate" handleChange={handleChange}/>
          <Input id={`roleEndDate-${dataIndex + 1}`} labelText="End Date" dataIndex={dataIndex} dataKey="roleEndDate" handleChange={handleChange}/>
          <div className="input">
            <label htmlFor={`roleDescription-${dataIndex + 1}`}>Description</label>
            <textarea id={`roleDescription-${dataIndex + 1}`} rows="5" data-index={dataIndex} data-key="roleDescription" onChange={handleChange}></textarea>
          </div>
        </form>
        <button type="button" onClick={() => removeItem('experience', dataIndex)}>Remove</button>
      </div>
    );
  }
}

export default ExperienceForm;