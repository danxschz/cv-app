import React, { Component } from "react";
import Input from "./Input";

class ContactForm extends Component {
  render() {
    const { handleChange } = this.props

    return (
      <div>
        <h2>Contact</h2>
        <form>
          <Input labelText="Full name" id="fullName" autocomplete="name" handleChange={handleChange}/>
          <Input type="email" labelText="Email address" id="email" autocomplete="email" handleChange={handleChange}/>
          <Input type="tel" labelText="Phone number" id="phone" autocomplete="tel" handleChange={handleChange}/>
          <Input type="url" labelText="LinkedIn URL" id="linkedIn" handleChange={handleChange}/>
          <Input type="url" labelText="Personal website" id="personalWebsite" handleChange={handleChange}/>
          <Input labelText="Country" id="country" autocomplete="country-name" handleChange={handleChange}/>
          <Input labelText="State" id="state" autocomplete="address-level1" handleChange={handleChange}/>
          <Input labelText="City" id="city" autocomplete="address-level2" handleChange={handleChange}/>
          <button type="submit">Save Info</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;