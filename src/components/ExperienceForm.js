import React, { Component } from "react";
import Input from "./Input";

class ExperienceForm extends Component {
  render() {
    const { dataIndex, handleChange } = this.props

    return (
      <div>
        <h2>Experience</h2>
        <form>
          <Input id="role" labelText="Role" dataIndex={dataIndex} dataKey="role" handleChange={handleChange}/>
          <Input id="companyName" labelText="Company" dataIndex={dataIndex} dataKey="companyName" handleChange={handleChange}/>
          <Input id="companyLocation" labelText="Location" dataIndex={dataIndex} dataKey="companyLocation" handleChange={handleChange}/>
          <Input id="roleStartDate" labelText="Start Date" dataIndex={dataIndex} dataKey="roleStartDate" handleChange={handleChange}/>
          <Input id="roleEndDate" labelText="End Date" dataIndex={dataIndex} dataKey="roleEndDate" handleChange={handleChange}/>
          <div className="input">
            <label htmlFor="roleDescription">Description</label>
            <textarea id="roleDescription" rows="5" data-index={dataIndex} data-key="roleDescription" onChange={handleChange}></textarea>
          </div>
          <button type="submit">Save Info</button>
        </form>
      </div>
    );
  }
}

export default ExperienceForm;