import React, { Component } from "react";

class Resume extends Component {
  render() {
    const { fullName, email, phone, linkedIn, personalWebsite, country, state, city } = this.props.resume

    return (
      <div className="resume">
        <div className="name">{fullName}</div>
        <div className="contact">
          <div className="location">{`${city}, ${state}, ${country}`}</div>
          <div className="email">{email}</div>
          <div className="phone">{phone}</div>
          <div className="linkedin">{linkedIn}</div>
          <div className="website">{personalWebsite}</div>
        </div>
      </div>
    );
  }
}

export default Resume;