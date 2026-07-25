export interface Job {
  company: string
  role: string
  dates: string
  location?: string
  description: string[]
}

export const experience: Job[] = [
  {
    company: 'McKeever and Associates',
    role: 'Software Developer - Team Leader',
    dates: 'March 2024 — June 2024',
    location: 'Dublin, Ireland, Germany, Switerland, South Korea',
    description: [
      'Joined a distributed team of 5 developers spanning Ireland, Germany, Switzerland, and South Korea, tasked with building an application for a client within a 3-month window under an Agile framework. As team leader, I was responsible for planning, designing, and delivering the application on schedule while coordinating contributors across three time zones and keeping the client informed of progress.',
      'I set up and managed our workflow using Git for version control and merging, a ticketing system for task tracking, and Slack for daily communication. I ran weekly team meetings to review progress, redistribute work, and resolve blockers, and adapted our schedule to account for the timezone spread so no region was consistently left waiting on decisions.',
      'The team delivered the application within the 3-month deadline, and I came away with hands-on experience leading a genuinely global team, applying Agile practices in a real client setting, and managing the operational challenges of asynchronous, cross-timezone collaboration.',
    ],
  },
  {
    company: 'Citywest Hotel',
    role: 'Linen Porter',
    dates: 'September 2022 — March 2024',
    location: 'Dublin, Ireland',
    description: [
      'Worked within a large, multicultural hotel operation where linen porters supported multiple departments and interacted directly with hotel residents. I was responsible for managing linen supply and stock transport across the hotel, coordinating with various teams to ensure departments had what they needed, and assisting residents when required.',
      'I worked daily alongside colleagues from Russian- and Ukrainian-speaking backgrounds, communicating in English, Russian, and Ukrainian to keep operations running smoothly, and collaborated across multiple hotel teams to keep stock and logistics on track.',
      'I built strong teamwork and cross-cultural communication skills, learning to operate effectively in a diverse, fast-paced environment — skills that translate directly to working on multicultural development teams.',
    ],
  },
  {
    company: 'Baxter Stories',
    role: 'Sales Assistant',
    dates: 'July 2021 — August 2022',
    location: 'Dublin Zoo, Ireland',
    description: [
      'Employed at Dublin Zoo\'s retail operation, which included both regular daytime trading and a separate seasonal event, Wild Lights, that ran on a different operational structure to accommodate night-time visitors.',
      'I was responsible for independently managing three separate storefronts, covering stock control, cash handling, and customer service, while also adapting to the distinct logistics of Wild Lights. I worked independently to keep stock levels and cash processes accurate across all three locations, liaised with supervisors to plan efficient sales operations, and adjusted my approach to fit Wild Lights\' different structure and visitor flow.',
      'I developed strong independent ownership of multiple responsibilities at once, along with adaptability — managing three storefronts solo and adjusting to a distinctly different operating model for a major seasonal event.',
    ],
  },
  // up to 4 total
]