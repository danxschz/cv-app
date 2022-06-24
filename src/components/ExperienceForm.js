import React, { Component } from "react";
import Input from "./Input";

class ExperienceForm extends Component {
  render() {
    const { handleChange } = this.props

    return (
      <div>
        <h2>Experience</h2>
        <form>
          <Input id="role" labelText="Role" handleChange={handleChange}/>
          <Input id="companyName" labelText="Company" handleChange={handleChange}/>
          <Input id="companyLocation" labelText="Location" handleChange={handleChange}/>
          <Input id="roleStartDate" labelText="Start Date" handleChange={handleChange}/>
          <Input id="roleEndDate" labelText="End Date" handleChange={handleChange}/>
          <div className="input">
            <label htmlFor="roleDescription">Description</label>
            <textarea id="roleDescription" rows="5" onChange={handleChange}></textarea>
          </div>
          <button type="submit">Save Info</button>
        </form>
      </div>
    );
  }
}

export default ExperienceForm;