import React, { Component } from "react";
import Input from "./Input";

class PersonalForm extends Component {
  render() {
    return (
      <div>
        <h2>Personal Information</h2>
        <form>
          <Input type="text" id="name-input" labelText="Name" autocomplete="name"/>
          <Input type="email" id="email-input" labelText="Email" autocomplete="email"/>
          <Input type="tel" id="phone-input" labelText="Phone Number"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default PersonalForm;