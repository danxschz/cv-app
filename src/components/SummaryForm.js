import '../styles/form.css'
import { Component } from 'react';

class SummaryForm extends Component {
  render() {
    const { handleChange } = this.props;

    return (
      <div className="form">
        <div className="form__heading">
          <h2>Summary</h2>
        </div>
        <form>
          <div className="input">
            <label htmlFor="summary">Professional summary</label>
            <textarea id="summary" rows="5" onChange={handleChange}></textarea>
          </div>
        </form>
      </div>
    );
  }
}

export default SummaryForm;
