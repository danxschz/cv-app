import { Component } from 'react';
import Input from './Input';

class EducationInputs extends Component {
  render() {
    const { dataIndex, handleChange, removeArrayItem } = this.props

    return (
      <form className="form__inputs">
        <Input id={`degree-${dataIndex + 1}`} labelText="Degree / Qualification" dataIndex={dataIndex} dataKey="degree" handleChange={handleChange}/>
        <Input id={`schoolName-${dataIndex + 1}`} labelText="Institution" dataIndex={dataIndex} dataKey="schoolName" handleChange={handleChange}/>
        <Input id={`schoolLocation-${dataIndex + 1}`} labelText="Location" dataIndex={dataIndex} dataKey="schoolLocation" handleChange={handleChange}/>
        <Input id={`eduStartDate-${dataIndex + 1}`} labelText="Start Date" dataIndex={dataIndex} dataKey="eduStartDate" handleChange={handleChange}/>
        <Input id={`eduEndDate-${dataIndex + 1}`} labelText="End Date" dataIndex={dataIndex} dataKey="eduEndDate" handleChange={handleChange}/>
        <Input id={`gpa-${dataIndex + 1}`} labelText="GPA (if applicable)" dataIndex={dataIndex} dataKey="gpa" handleChange={handleChange}/>
        <button type="button" className="form__remove-btn" onClick={() => removeArrayItem('education', dataIndex)}>Remove</button>
      </form>
    );
  }
}

export default EducationInputs;