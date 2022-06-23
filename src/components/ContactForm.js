import React, { Component } from "react";
import Input from "./Input";

class ContactForm extends Component {
  render() {
    return (
      <div>
        <h2>Contact</h2>
        <form>
          <Input id="full-name" labelText="Full name" autocomplete="name"/>
          <Input type="email" id="email" labelText="Email address" autocomplete="email"/>
          <Input type="tel" id="phone" labelText="Phone number" autocomplete="tel"/>
          <Input type="url" id="linkedin" labelText="LinkedIn URL"/>
          <Input type="url" id="personal-website" labelText="Personal website"/>
          <Input id="country" labelText="Country" autocomplete="country-name"/>
          <Input id="state" labelText="State" autocomplete="address-level1"/>
          <Input id="city" labelText="City" autocomplete="address-level2"/>
          <button type="submit">Save Info</button>
        </form>
      </div>
    );
  }
}

export default ContactForm;