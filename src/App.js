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
        fullName: '',
        email: '',
        phone: '',
        linkedIn: '',
        personalWebsite: '',
        country: '',
        state: '',
        city: '',
        experience: [
          {
            role: '',
            companyName: '',
            companyLocation: '',
            roleStartDate: '',
            roleEndDate: '',
            roleDescription: '',
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
