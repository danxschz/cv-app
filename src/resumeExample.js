const resumeExample = {
  name: 'John Doeman',
  email: 'doeman@gmail.com',
  phone: '+58 (123) 456-7890',
  linkedIn: 'in/doeman',
  website: 'johndoe.com',
  country: 'Venezuela',
  state: 'Zulia',
  city: 'Maracaibo',
  summary: 'Civil engineer with 3 years of experience in the construction and design of residential, commercial, and industrial buildings. Proven ability to manage large teams, budgets and multiple projects. Seeking a career advancement opportunity as a Project Manager at Company A.',

  experience: [
    {
      role: 'Civil Engineer',
      companyName: 'Company A',
      companyLocation: 'Maracaibo, VE',
      startDate: 'June 2020',
      endDate: 'Present',
      description: "Inspected a telecommunication tower prototype, modified the structural drawings using AutoCAD for safety requirements, proposed and implemented changes that reduced each tower's weight and cost by 5%.\nModeled structures of 3 multi-story buildings using ETABS based on architectural plans, verifying the feasibility.\nProposed column, beam, and slab specifications based on modeling and calculation results following Eurocode.\nCalculated and proposed helical pile specifications for a solar panel project based on the local soil types.\nCoordinated with contractors and ensured the construction of a warehouse building followed design plans.",
    },

    {
      role: 'Civil Engineering Intern',
      companyName: 'Company B',
      companyLocation: 'Maracaibo, VE',
      startDate: 'June 2019',
      endDate: 'June 2020',
      description: "Completed Revit information details of a 15-story building BIM project using COBie and other add-on programs.\nIdentified issues with a Revit add-on program developed by the company for determining component addresses using rooms, devised and applied a solution with the developer by changing the room association mechanism.",
    },
  ],

  education: [
    {
      degree: 'Master of Science in Civil Engineering',
      schoolName: 'Maracaibo University',
      schoolLocation: 'Maracaibo, ZU',
      startDate: '2017',
      endDate: '2019',
    },

    {
      degree: 'Bachelor of Science in Civil Engineering',
      schoolName: 'Maracaibo University',
      schoolLocation: 'Maracaibo, ZU',
      startDate: '2013',
      endDate: '2017',
      gpa: '4.1',
    },
  ],
}

export default resumeExample;