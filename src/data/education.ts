export interface EduModule {
  name: string
  grade?: string
}

export interface EduYear {
  id: string
  label: string
  modules: EduModule[]
}

export interface EduCourse {
  name: string
  provider: string
  date: string
}

export const bachelorsYears: EduYear[] = [
  {
    id: 'year1',
    label: 'Year 1',
    modules: [
      { name: 'Operating Systems 1', grade: 'B2' },
      { name: 'Algorithm and Design 1', grade: 'B3'  },
      { name: 'Computer Architecture', grade: 'A3'  },
      { name: 'Module D', grade: 'A1'  },
      { name: 'Software for Global Market 1', grade: 'B3'  },
      { name: 'German 1', grade: 'A3'  },
      { name: 'Program Design', grade: 'B2'  },
      { name: 'Mathematics 1', grade: 'B1'  },
      { name: 'Web Development 1', grade: 'B1'  },
      { name: 'Global Citizenship', grade: 'A3'  },
      { name: 'Programming (C)', grade: 'A2'  },
    ],
  },
  {
    id: 'year2',
    label: 'Year 2',
    modules: [
      { name: 'Legal and Professional Issue' , grade: 'B3' },
      { name: 'Software for Global Markets 2', grade: 'B2'  },
      { name: 'Data Communications', grade: 'C1'  },
      { name: 'German Langauge and Culture' , grade: 'B2' },
      { name: 'Object Oriented Programming', grade: 'B2'  },
      { name: 'Algorithms and Data Structures', grade: 'C1'  },
      { name: 'Mathematics 2', grade: 'B1'  },
      { name: 'Databases 1', grade: 'A1'  },
      { name: 'Software Engineering 1', grade: 'C2'  },
      { name: 'Operating Systems 2', grade: 'C2'  },
    ],
  },
  {
    id: 'year3',
    label: 'Year 3',
    modules: [
      { name: 'Global Classroom', grade: 'A3'  },
      { name: 'Mobile Software Development', grade: 'B1'  },
      { name: 'Client Serving Programming', grade: 'C2' },
      { name: 'Software Engineering', grade: 'C2' },
      { name: 'Web Development and deployment', grade: 'A2' },
      { name: 'Database 2', grade: 'C1' },
      { name: 'German Langauge 3', grade: 'B2' },
    ],
  },
  {
    id: 'erasmus',
    label: 'Erasmus (Darmstadt)',
    modules: [
      { name: 'IT Security (in German)', grade: '2.7' },
      { name: 'German Langauge for life in Germany ', grade: '2.7'  },
      { name: 'Construction of Multi-Touch and Multi-User Interface ', grade: '2.3' },
      { name: 'Introduction to artificial intelligence  ', grade: '3' },
      { name: 'Information Technology and Society ', grade: '1 (German 100%)' },
    ],
  },
  {
    id: 'year4',
    label: 'Final Year',
    modules: [
      { name: 'Systems Software' , grade: 'A3' },
      { name: 'Advanced Security 1' , grade: 'B3' },
      { name: 'Advanced Security 2' , grade: 'A3' },
      { name: 'Artificial Intelligence', grade: 'A2'  },
      { name: 'Forensics', grade: 'A3'  },
      { name: 'Machine Learning for predictive Analysis' , grade: 'B1' },
      { name: 'Rich Web Applications', grade: 'B1'  },
      { name: 'Final Year Project', grade: 'B1'   },
      
    ],
  },
]

export const mastersModules: EduModule[] = [
  { name: 'Secure Systems Development', grade: 'A1' },
  { name: 'Systems Architectures', grade: 'A1'   },
  { name: 'Data Management', grade: 'A1' },
  { name: 'Research design / Proposal 1', grade: 'A1' },
  { name: 'Research design / Proposal 2', grade: 'A1' },
  { name: 'Software Design', grade: 'B2' },
  { name: 'Web Applications Architectures', grade: 'B1' },
  { name: 'Problem Solving Communications and Innovation', grade: 'A3' },
  { name: 'Programming Paradigms', grade: 'B1' },
  { name: 'Advanced Databases', grade: 'B1' },
]

export const courses: EduCourse[] = [
  { name: 'Security  Guarding lvl 4', provider: 'Quality and Qualifications Ireland', date: '14 Feb 2025' },
  { name: 'AWS Certified Solutions Architect Associate - In Progress', provider: 'AWS', date: '2026' },
]