import React from 'react';
import ReactToPrint from 'react-to-print';
import Resume from './Resume';

class PrintableResume extends React.PureComponent {
  render() {
    const { resume } = this.props

    return (
      <div className="resume-section">
        <div className="resume-border"><Resume resume={resume} ref={el => (this.componentRef = el)}/></div>
        <ReactToPrint
          trigger={() => {
            return <button>Download PDF</button>;
          }}
          content={() => this.componentRef}
          pageStyle="@page { size: 22cm 28cm }"
          documentTitle={`${resume.name.replaceAll(' ', '-')}-Resume`}
        />
      </div>
    );
 }
}

export default PrintableResume;