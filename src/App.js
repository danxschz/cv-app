import EducationForm from "./components/EducationForm";
import ExperienceForm from "./components/ExperienceForm";
import ContactForm from "./components/ContactForm";
import { Component } from "react";
import Resume from "./components/Resume";

class App extends Component {
  constructor() {
    super();

    this.state = {
      resume: {
        fullName: 'John Doeman',
        email: 'doeman@gmail.com',
        phone: '+58 123 4567890',
        linkedIn: 'in/doeman',
        personalWebsite: 'johndoe.com',
        country: 'Venezuela',
        state: 'Zulia',
        city: 'Maracaibo',

        experience: [
          {
            role: 'Software Engineer',
            companyName: 'Company A',
            companyLocation: 'Maracaibo, VE',
            roleStartDate: 'January 2022',
            roleEndDate: 'Present',
            roleDescription: 'Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud.',
          }
        ],

        education: [
          {
            degree: 'CS50: Introduction to Computer Science',
            schoolName: 'Harvard University',
            schoolLocation: 'Cambridge, Massachusetts',
            eduStartDate: '2020',
            eduEndDate: 'Present',
            gpa: '4.1',
          }
        ],
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      resume: {
        ...this.state.resume,
        [e.target.id]: e.target.value
      },
    });
  };

  handleExp = (e) => {
    this.setState({
      resume: {
        ...this.state.resume,
        experience:
          this.state.resume.experience.map((a) => {
            if (this.state.resume.experience.indexOf(a) === this.state.resume.experience.length - 1) {
              a = {
                ...this.state.resume.experience[this.state.resume.experience.length - 1],
                [e.target.id]: e.target.value
              }
            }
            return a
          }),
      },
    });
  };

  render() {
    return (
      <div className="App">
        <ContactForm handleChange={this.handleChange}/>
        <ExperienceForm handleChange={this.handleExp}/>
        <EducationForm/>
        <Resume resume={this.state.resume}/>
      </div>
    );
  }
}

export default App;
