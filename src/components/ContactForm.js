import React, { Component } from "react";
import Input from "./Input";

class ContactForm extends Component {
  render() {
    return (
      <div>
        <h2>Contact</h2>
        <form>
          <Input type="text" id="full-name" labelText="Full Name" autocomplete="name"/>
          <Input type="email" id="email" labelText="Email Address" autocomplete="email"/>
          <Input type="tel" id="phone" labelText="Phone Number"/>
          <Input type="url" id="linkedin" labelText="LinkedIn URL"/>
          <Input type="url" id="personal-website" labelText="Personal Website"/>
          <Input type="text" id="country" labelText="Country" autocomplete="country-name"/>
          <Input type="text" id="state" labelText="State" autocomplete="address-level1"/>
          <Input type="text" id="city" labelText="City" autocomplete="address-level2"/>
          <button type="submit">Save Info</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;