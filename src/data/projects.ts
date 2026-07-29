import gymTrack from '../assets/projects/images/GymTrack.png'
import gg from '../assets/projects/images/gg.png'

export interface Project {
  id: string
  name: string
  headline: string
  paragraphs: string[]
  media?: { type: 'image' | 'video'; src: string }
  techStack: string[]
  link?: string
}

export const projects: Project[] = [
  {
    id: 'project1',
    name: 'Gym Track',
    headline: 'Gym Excercise Tracker',
    paragraphs: [
      'GymTrack is a full-stack gym and fitness tracking web application. It lets users browse a searchable, filterable exercise library, build custom workout plans, log training sessions set-by-set, and automatically track personal records as they are achieved. I designed it following the client-server approach as it was the best fit for a content heavy app that still needed rich interactivity for logging workouts.',
      'I built the frontend with Next.js, React, TypeScript, and Tailwind CSS, using Next.js hybrid rendering to server-render SEO-critical pages like the exercise library while keeping features like workout logging fully interactive on the client. The backend is a modular Express-based REST API with PostgreSQL and Prisma for type-safe data access, secured with JWT authentication using access/refresh token rotation and reuse detection. I designed the API around clear separation of concerns (routes, middleware, business logic, data access), consistent error handling and HTTP status codes, and RESTful conventions throughout.',
    ],
    media: { type: 'image', src: gymTrack },
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Express', 'JWT'],
    link: '',
  },
  
  {
    id: 'project2',
    name: 'Final Year Project - Momentum',
    headline: 'Using Gamifaction to Fight Procrasination ',
    paragraphs: [
      'Momentum is a Habit training / task manager I built as my Final Year Project in TU Dublin. The goal was to take common and proven systems like experience points, leaderboards, daily logins and achievements to create a system that rewarded you for doing your tasks and daily habits.',
      'I had many itterations and ideas but focused on creating the basisc of those small but rewarding systems into an overarching goal. I learned how to design a product for people, making changes as requested and focsuing on accesablity and usablity. ',
      'Momentum was created with React and JavaScript mainly. MUI and bootstrap where used with Tailwind to create a mix of visauls to stand out. The database was a NO-sql Solution of Firebases and hosting and authentication Throught that with Github for version Control and CI/CD.',
      'This Project and the thesis is offically in the TUD Library for achieving a 2:1 or higher.'
    ],
    media: { type: 'image', src: '' },
    techStack: ['React', 'Firebase', 'Js', 'Tailwind'],
    link: '',
  },

  {
    id: 'project3',
    name: 'Picker.gg',
    headline: 'Mood Tailored Game Recommendations',
    paragraphs: [
      'Pickr.gg is a personal web app that solves the "what should I play tonight" problem by recommending a game from your own Steam library based on your current mood. Users connect their Steam library, and the app pulls their owned games via the Steam Web API alongside community tags from the Steam Store API, then scores every game against a mood profile (Epic Adventure, Dark & Gritty, Chill, and more) using weighted tag matching, a playtime penalty so overplayed games dont dominate, a review-score floor, and a variance factor that avoids repeating recent suggestions — similar to how a music app avoids playing the same genre back-to-back. I designed it as a genuine 1-to-1 experience with no hardcoded data, so it works for any users library, not just my own',
      'I built the frontend with Vue 3 and Vite, backed by Vercel serverless functions, with Supabase caching game tag data so lookups are shared and instant across all users after the first fetch. The trickiest engineering problem was Vercels 10-second function timeout: fetching tags for a full library one game at a time would blow well past that, so I redesigned the flow to return already-cached games instantly on the first call, then fetch the remaining uncached games in small concurrent batches of up to eight.',
      
    ],
    media: { type: 'image', src: gg },
    techStack: ['Vue', 'Js', 'TypeScript', 'Supabase', 'Vercel'],
    link: 'https://gamerec-woad.vercel.app/',
  },

  {
    id: 'project4',
    name: 'Multitouch Screen ',
    headline: 'Favourite Project in Germany',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
    media: { type: 'image', src: '' },
    techStack: ['Python', 'OpenCv', ],
    link: '',
  },

  {
    id: 'project5',
    name: 'Audi Spectrum',
    headline: 'Music Visulatization ',
    paragraphs: [
      'Audio-reactive visualizer in C with Raylib, Also done in java in second year. Audio Visual Project was a team project I contributed to as a developer in October 2024, built in Java Processing. It was an abstract animated visualizer that turns audio input into motion, bubbles collide and drift using real physics-based vector movement, while wave animations pulse and shift in response to the sound, creating a reactive, generative visual piece rather than a static animation. ',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
    media: { type: 'image', src: '' },
    techStack: ['C', 'Raylib', 'Cmake', ],
    link: '',
  },

  {
    id: 'project6',
    name: 'Automated Daemons in Linux',
    headline: 'Using Linux and Daemons to manage a manfucatoring and distribution upload of Documents',
    paragraphs: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    ],
    media: { type: 'image', src: '' },
    techStack: ['Linux - Ubuntu', 'C', 'MakeList',],
    link: '',
  },
]

export const overallTech: string[] = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'C / Raylib',
  'AWS',
]