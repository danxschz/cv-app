import React, {Component} from "react";
import Input from "./Input";

class EducationForm extends Component {
  render() {
    return (
      <div>
        <h2>Education</h2>
        <form>
          <Input type="text" id="school-name" labelText="School Name"/>
          <Input type="text" id="major" labelText="Major"/>
          <Input type="text" id="study-date" labelText="Study date range"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default EducationForm;