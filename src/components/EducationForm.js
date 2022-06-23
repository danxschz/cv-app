import React, {Component} from "react";
import Input from "./Input";

class EducationForm extends Component {
  render() {
    return (
      <div>
        <h2>Education</h2>
        <form>
          <Input id="degree" labelText="Degree / Qualification"/>
          <Input id="institution-name" labelText="Institution"/>
          <Input id="institution-location" labelText="Location"/>
          <Input id="edu-start-date" labelText="Start Date"/>
          <Input id="edu-end-date" labelText="End Date"/>
          <Input id="gpa" labelText="GPA (if applicable)"/>
          <button type="submit">Save Info</button>
        </form>
      </div>
    );
  }
}

export default EducationForm;