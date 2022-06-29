import { Component } from 'react';
import Input from './Input';

class ContactInputs extends Component {
  render() {
    const { handleChange } = this.props

    return (
      <form className="form__inputs">
        <Input labelText="Full name" id="fullName" autoComplete="name" handleChange={handleChange}/>
        <Input type="email" labelText="Email address" id="email" autoComplete="email" handleChange={handleChange}/>
        <Input type="tel" labelText="Phone number" id="phone" autoComplete="tel" handleChange={handleChange}/>
        <Input type="url" labelText="LinkedIn URL" id="linkedIn" handleChange={handleChange}/>
        <Input type="url" labelText="Personal website" id="personalWebsite" handleChange={handleChange}/>
        <Input labelText="Country" id="country" autoComplete="country-name" handleChange={handleChange}/>
        <Input labelText="State" id="state" autoComplete="address-level1" handleChange={handleChange}/>
        <Input labelText="City" id="city" autoComplete="address-level2" handleChange={handleChange}/>
      </form>
    );
  }
}

export default ContactInputs;