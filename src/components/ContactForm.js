import { Component } from 'react';
import ContactInputs from './ContactInputs.js';

class ContactForm extends Component {
  render() {
    const { handleChange } = this.props;

    return (
      <div className="form">
        <div class="form__heading">
          <h2>Contact</h2>
        </div>
        <ContactInputs handleChange={handleChange}/>
      </div>
    );
  }
}

export default ContactForm;
