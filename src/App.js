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
        city: ''
      }
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

  render() {
    return (
      <div className="App">
        <ContactForm handleChange={this.handleChange}/>
        <ExperienceForm/>
        <EducationForm/>
        <Resume resume={this.state.resume}/>
      </div>
    );
  }
}

export default App;
