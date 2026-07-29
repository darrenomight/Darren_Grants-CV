import gymTrack from '../assets/projects/images/GymTrack.png'
import gg2 from '../assets/projects/images/gg2.png'
import mon from '../assets/projects/images/mon.png'
import moby from '../assets/projects/images/mobyduck.png'
import dl from '../assets/projects/images/dl.png'
import mt from '../assets/projects/images/mt.png'

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
    headline: 'Gym Excercise Tracker - React, Next.js and Express',
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
    headline: 'Using Gamifaction to Fight Procrasination - React, Firebaase, MUI ',
    paragraphs: [
      'Momentum is a Habit training / task manager I built as my Final Year Project in TU Dublin. The goal was to take common and proven systems like experience points, leaderboards, daily logins and achievements to create a system that rewarded you for doing your tasks and daily habits.',
      'I had many itterations and ideas but focused on creating the basisc of those small but rewarding systems into an overarching goal. I learned how to design a product for people, making changes as requested and focsuing on accesablity and usablity. ',
      'Momentum was created with React and JavaScript mainly. MUI and bootstrap where used with Tailwind to create a mix of visauls to stand out. The database was a NO-sql Solution of Firebases and hosting and authentication Throught that with Github for version Control and CI/CD.',
      'This Project and the thesis is offically in the TUD Library for achieving a 2:1 or higher.'
    ],
    media: { type: 'image', src: mon },
    techStack: ['React', 'Firebase', 'Js', 'Tailwind'],
    link: 'https://fyp-2025-3637b.firebaseapp.com/',
  },

  {
    id: 'project3',
    name: 'Picker.gg',
    headline: 'Mood Tailored Game Recommendations - Vue',
    paragraphs: [
      'Pickr.gg is a personal web app that solves the "what should I play tonight" problem by recommending a game from your own Steam library based on your current mood. Users connect their Steam library, and the app pulls their owned games via the Steam Web API alongside community tags from the Steam Store API, then scores every game against a mood profile (Epic Adventure, Dark & Gritty, Chill, and more) using weighted tag matching, a playtime penalty so overplayed games dont dominate, a review-score floor, and a variance factor that avoids repeating recent suggestions: similar to how a music app avoids playing the same genre back-to-back. I designed it as a genuine 1-to-1 experience with no hardcoded data, so it works for any users library, not just my own',
      'I built the frontend with Vue 3 and Vite, backed by Vercel serverless functions, with Supabase caching game tag data so lookups are shared and instant across all users after the first fetch. The trickiest engineering problem was Vercels 10-second function timeout: fetching tags for a full library one game at a time would blow well past that, so I redesigned the flow to return already-cached games instantly on the first call, then fetch the remaining uncached games in small concurrent batches of up to eight.',
      
    ],
    media: { type: 'image', src: gg2 },
    techStack: ['Vue', 'Js', 'TypeScript', 'Supabase', 'Vercel'],
    link: 'https://gamerec-woad.vercel.app/',
  },

  {
    id: 'project4',
    name: 'Multitouch Screen ',
    headline: 'Favourite Project in Germany OpenCv & Python',
    paragraphs: [
      'For the Multi Touch Screens module, I built a Python computer-vision system that turns a plain webcam feed into a multi-touch input device. Using OpenCV background subtraction, I isolate moving blobs — fingers or objects touching a surface — by diffing each frame against a baseline, blurring and thresholding it into a binary mask, then fitting ellipses to the resulting contours to find each blobs center. To keep touch points consistent across frames rather than flickering between new IDs, I match each detected blob to its nearest neighbour from the previous frame within a distance threshold, only assigning a new ID when no close match exists. The tracked positions are normalized and streamed out as standard TUIO cursor events, so the tracker can plug straight into any TUIO-compatible multi-touch application. ',
      '',
    ],
    media: { type: 'image', src: mt },
    techStack: ['Python', 'OpenCv', ],
    link: 'https://youtu.be/QysPAbKd5v4',
  },

  {
    id: 'project5',
    name: 'Audi Spectrum',
    headline: 'Music Visulatization with java and my own  with raylib ',
    paragraphs: [
      'Back in Second in Java I and a team had to create a piece in a co-op project, I did "Growing Bubbles," which was built in Java Processing using a Bubble class and a Bubbles array to manage multiple instances via PVector-based position and movement. Bubbles spawn from random points along the screen edges and bounce off the borders, losing a life with each bounce until, rather than the explodomg like I originally planned, they instead grow a tail an effect I ended up liking more. Alongside the bubbles, I built a 3D wave by lerping a row of rectangles against the tracks audio buffer, colour-mapped in HSB, which creates an oblique, music-reactive wave running through the scene. The project was a good hands-on introduction to subclassing, using arrays to manage multiple object instances, and experimenting with vector-based movement. ',
      'Based on this Experience I am now working woth Raylib and C to create my own redintion of this idea with an adaptive tunnel with algorithms that make it a wild ride and not just shader code visuals.',
    ],
    media: { type: 'image', src: moby },
    techStack: ['C', 'Raylib', 'Cmake','Java' ],
    link: 'https://www.youtube.com/watch?v=COJVn6kwEO0',
  },

  {
    id: 'project6',
    name: 'Automated Daemons in Linux',
    headline: 'Using Linux and Daemons to manage a manfucatoring and distribution upload of Documents',
    paragraphs: [
      'You can check out the video for a full description',
      ' ',
    ],
    media: { type: 'image', src: dl },
    techStack: ['Linux - Ubuntu', 'C', 'MakeList',],
    link: 'https://www.youtube.com/watch?v=XlV_LHBJpj8',
  },
]

