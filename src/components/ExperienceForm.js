import React, { Component } from "react";
import Input from "./Input";

class ExperienceForm extends Component {
  render() {
    return (
      <div>
        <h2>Experience</h2>
        <form>
          <Input type="text" id="company" labelText="Company"/>
          <Input id="title" labelText="Position title"/>
          <Input id="job-date" labelText="Job date range"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ExperienceForm;