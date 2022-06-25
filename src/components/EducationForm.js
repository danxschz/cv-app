import React, {Component} from "react";
import Input from "./Input";

class EducationForm extends Component {
  render() {
    return (
      <div>
        <h2>Education</h2>
        <form>
          <Input id="degree" labelText="Degree / Qualification"/>
          <Input id="schoolName" labelText="Institution"/>
          <Input id="SchoolLocation" labelText="Location"/>
          <Input id="eduStartDate" labelText="Start Date"/>
          <Input id="eduEndDate" labelText="End Date"/>
          <Input id="gpa" labelText="GPA (if applicable)"/>
          <button type="submit">Save Info</button>
        </form>
      </div>
    );
  }
}

export default EducationForm;