import React, { Component } from "react";
import Input from "./Input";

class EducationForm extends Component {
  render() {
    const { dataIndex, handleChange, removeItem } = this.props

    return (
      <div>
        <form>
          <Input id={`degree-${dataIndex + 1}`} labelText="Degree / Qualification" dataIndex={dataIndex} dataKey="degree" handleChange={handleChange}/>
          <Input id={`schoolName-${dataIndex + 1}`} labelText="Institution" dataIndex={dataIndex} dataKey="schoolName" handleChange={handleChange}/>
          <Input id={`schoolLocation-${dataIndex + 1}`} labelText="Location" dataIndex={dataIndex} dataKey="schoolLocation" handleChange={handleChange}/>
          <Input id={`eduStartDate-${dataIndex + 1}`} labelText="Start Date" dataIndex={dataIndex} dataKey="eduStartDate" handleChange={handleChange}/>
          <Input id={`eduEndDate-${dataIndex + 1}`} labelText="End Date" dataIndex={dataIndex} dataKey="eduEndDate" handleChange={handleChange}/>
          <Input id={`gpa-${dataIndex + 1}`} labelText="GPA (if applicable)" dataIndex={dataIndex} dataKey="gpa" handleChange={handleChange}/>
        </form>
        <button type="button" onClick={() => removeItem('education', dataIndex)}>Remove</button>
      </div>
    );
  }
}

export default EducationForm;