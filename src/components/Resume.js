import React, { Component } from "react";

class Resume extends Component {
  render() {
    const { fullName, email, phone, linkedIn, personalWebsite, country, state, city, experience, education } = this.props.resume

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

        <div className="experience">
          {experience.map((exp) => {
            return (
              <div key={experience.indexOf(exp)} className="exp">
                <div>{exp.role}</div>
                <div>{exp.companyName}</div>
                <div>{exp.companyLocation}</div>
                <div>{`${exp.roleStartDate} - ${exp.roleEndDate}`}</div>
                <div>{exp.roleDescription}</div>
              </div>
            )
          })}
        </div>

        <div className="education">
          {education.map((item) => {
            return (
              <div key={education.indexOf(item)} className="edu">
                <div>{item.degree}</div>
                <div>{item.schoolName}</div>
                <div>{item.schoolLocation}</div>
                <div>{`${item.eduStartDate} - ${item.eduEndDate}`}</div>
                <div>{item.gpa}</div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Resume;