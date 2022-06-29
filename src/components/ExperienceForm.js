import { Component } from 'react';
import ExperienceInputs from './ExperienceInputs.js';

class ExperienceForm extends Component {
  render() {
    const { addArrayItem, experience, handleArrayChange, removeArrayItem } = this.props

    return (
      <div className="form">
        <div class="form__heading">
          <h2>Experience</h2>
          <button className="form__add-btn" onClick={() => addArrayItem('experience')}>Add</button>
        </div>
        <div class="form__input-groups">
          {experience.map((item) => {
              return (
                <ExperienceInputs key={experience.indexOf(item)} dataIndex={experience.indexOf(item)} handleChange={(e) => handleArrayChange(e, 'experience')} removeArrayItem={removeArrayItem}/>
              )
          })}
        </div>
      </div>
    );
  }
}

export default ExperienceForm;
