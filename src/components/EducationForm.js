import '../styles/form.css'
import { Component } from 'react';
import EducationInputs from './EducationInputs.js';

class EducationForm extends Component {
  render() {
    const { addArrayItem, education, handleArrayChange, removeArrayItem } = this.props

    return (
      <div className="form">
        <div className="form__heading">
          <h2>Education</h2>
          <button className="form__add-btn" onClick={() => addArrayItem('education')}>Add</button>
        </div>
        <div className="form__input-groups">
          {education.map((item) => {
              return (
                <EducationInputs key={education.indexOf(item)} dataIndex={education.indexOf(item)} handleChange={(e) => handleArrayChange(e, 'education')} removeArrayItem={removeArrayItem}/>
              )
          })}
        </div>
      </div>
    );
  }
}

export default EducationForm;
