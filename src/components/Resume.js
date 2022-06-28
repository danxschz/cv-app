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
          <div className="section__header">Experience</div>
          {experience.map((exp) => {
            const descriptionItems = exp.roleDescription.split(';');
            const descriptionParsed = descriptionItems.map((item) => {
              if (descriptionItems.length > 1) return item = `• ${item.trim()}`
              else return item
            })
            return (
              <div key={experience.indexOf(exp)} className="item">
                <div className='item__header'>{exp.role} | {exp.companyName} | {exp.companyLocation} | {`${exp.roleStartDate} - ${exp.roleEndDate}`}</div>
                <div className='item__description'>
                  {descriptionParsed.map((item) => {
                    return <span>{item}<br/></span>
                  })}
                </div>
              </div>
            )
          })}
          <hr/>
        </div>
        <div className="education">
          <div className="section__header">Education</div>
          {education.map((item) => {
            return (
              <div key={education.indexOf(item)} className="item">
                <div className="item__header">{item.degree} | {item.schoolName} | {item.schoolLocation} | {`${item.eduStartDate} - ${item.eduEndDate}`} | {item.gpa}</div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Resume;