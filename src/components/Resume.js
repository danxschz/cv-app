import '../styles/Resume.css';
import { Component } from 'react';

class Resume extends Component {
  render() {
    const { name, email, phone, linkedIn, website, country, state, city, experience, education } = this.props.resume;

    const location = [city, state, country];
    const locationAvailable = location.filter((item) => item);
    const locationString = locationAvailable.join(', ');

    return (
      <div className="resume">
        <div className="name">{name}</div>
        <div className="contact">
          <div className="contact__info"><i class="fa-solid fa-location-dot"></i><span>{locationString}</span></div>
          <div className="contact__info"><i class="fa-solid fa-envelope"></i><span>{email}</span></div>
          <div className="contact__info"><i class="fa-solid fa-mobile-screen"></i><span>{phone}</span></div>
          {linkedIn ? <div className="contact__info"><i class="fa-brands fa-linkedin"></i><span>{linkedIn}</span></div> : null}
          {website ? <div className="contact__info"><i class="fa-solid fa-link"></i><span>{website}</span></div> : null}
        </div>
        <hr/>

        <div className="section">
          <div className="section__header">Experience</div>
          {experience.map((item) => {
            const description = (item.description) ? item.description.split('\n') : [];
            const descriptionItems = description.map((item) => {
              if (description.length > 1) return item = `• ${item.trim()}`
              else return item
            })

            const timeFrame = [item.startDate, item.endDate];
            const timeFrameAvailable = timeFrame.filter((item) => item);
            const timeFrameString = timeFrameAvailable.join(' - ');

            return (
              <div key={experience.indexOf(item)} className="item">
                <div className='item__header'>{item.role} | {item.companyName} | {item.companyLocation} | {timeFrameString}</div>
                <div className='item__description'>
                  {descriptionItems.map((item) => {
                    return <span>{item}<br/></span>
                  })}
                </div>
              </div>
            )
          })}
          <hr/>
        </div>

        <div className="section">
          <div className="section__header">Education</div>
          {education.map((item) => {
            const timeFrame = [item.startDate, item.endDate];
            const timeFrameAvailable = timeFrame.filter((item) => item);
            const timeFrameString = timeFrameAvailable.join(' - ');
            return (
              <div key={education.indexOf(item)} className="item">
                <div className="item__header">{item.degree} | {item.schoolName} | {item.schoolLocation} | {timeFrameString} {item.gpa ? ` | ${item.gpa}`: null}</div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Resume;