import '../styles/Resume.css';
import React, { Component } from "react";

class Resume extends Component {
  render() {
    const { fullName, email, phone, linkedIn, personalWebsite, country, state, city, experience, education } = this.props.resume;
    const location = [city, state, country];
    const locationFiltered = location.filter((item) => item);
    const locationString = locationFiltered.join(', '); 

    return (
      <div className="resume">
        <div className="name">{fullName}</div>
        <div className="contact">
          <div className="contact__info"><i class="fa-solid fa-location-dot"></i><span>{locationString}</span></div>
          <div className="contact__info"><i class="fa-solid fa-envelope"></i><span>{email}</span></div>
          <div className="contact__info"><i class="fa-solid fa-mobile-screen"></i><span>{phone}</span></div>
          <div className="contact__info"><i class="fa-brands fa-linkedin"></i><span>{linkedIn}</span></div>
          <div className="contact__info"><i class="fa-solid fa-link"></i><span>{personalWebsite}</span></div>
        </div>
        <hr/>
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