import './styles/App.css'
import { Component } from 'react';
import resumeExample from './resumeExample';
import ContactForm from './components/ContactForm';
import ExperienceForm from './components/ExperienceForm';
import EducationForm from "./components/EducationForm";
import Resume from "./components/Resume";

class App extends Component {
  constructor() {
    super();

    this.state = {
      resume: resumeExample
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

  addArrayItem = (arrayName) => {
    this.setState({
      resume: {
        ...this.state.resume,
        [arrayName]: [
          ...this.state.resume[arrayName],
          {}
        ]
      }
    })
  }

  removeArrayItem = (arrayName, index) => {
    this.setState({
      resume: {
        ...this.state.resume,
        [arrayName]: this.state.resume[arrayName].filter((item) => {
          return this.state.resume[arrayName].indexOf(item) !== index
        }),
      }
    })
  }

  render() {
    const { experience, education} = this.state.resume;
    return (
      <div className="app">
        <main>
          <div className="forms">
            <ContactForm handleChange={this.handleChange}/>
            <ExperienceForm addArrayItem={this.addArrayItem} experience={experience} handleArrayChange={this.handleArrayChange} removeArrayItem={this.removeArrayItem}/>
            <EducationForm addArrayItem={this.addArrayItem} education={education} handleArrayChange={this.handleArrayChange} removeArrayItem={this.removeArrayItem}/>
          </div>
          <Resume resume={this.state.resume}/>
        </main>
      </div>
    );
  }
}

export default App;
