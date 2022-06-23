import React, { Component } from "react";
import Input from "./Input";

class ExperienceForm extends Component {
  render() {
    return (
      <div>
        <h2>Experience</h2>
        <form>
          <Input id="role" labelText="Role"/>
          <Input id="company-name" labelText="Company"/>
          <Input id="company-location" labelText="Location"/>
          <Input id="exp-start-date" labelText="Start Date"/>
          <Input id="exp-end-date" labelText="End Date"/>
          <div className="input">
            <label htmlFor="role-description">Description</label>
            <textarea id="role-description" rows="5"></textarea>
          </div>
          <button type="submit">Save Info</button>
        </form>
      </div>
    );
  }
}

export default ExperienceForm;