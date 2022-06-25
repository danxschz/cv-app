import { Component } from "react";
import ContactForm from "./components/ContactForm";
import ExperienceForm from "./components/ExperienceForm";
import EducationForm from "./components/EducationForm";
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
          },
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

  handleArrayChange = (e, arrayName) => {
    const array = this.state.resume[arrayName];
    const index = +e.target.attributes['data-index'].value;
    const key = e.target.attributes['data-key'].value;

    this.setState({
      resume: {
        ...this.state.resume,
        [arrayName]:
          array.map((item) => {
            if (array.indexOf(item) === index) {
              item = {
                ...array[index],
                [key]: e.target.value,
              }
            }
            return item
          }),
      },
    });
  };

  render() {
    const { experience } = this.state.resume;

    return (
      <div className="App">
        <ContactForm handleChange={this.handleChange}/>

        {experience.map((exp) => {
            return (
              <ExperienceForm key={experience.indexOf(exp)} dataIndex={experience.indexOf(exp)} handleChange={(e) => this.handleArrayChange(e, 'experience')}/>
            )
        })}
        
        <EducationForm/>
        <Resume resume={this.state.resume}/>
      </div>
    );
  }
}

export default App;
