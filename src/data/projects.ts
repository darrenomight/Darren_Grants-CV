export interface Project {
  id: string
  name: string
  summary: string
  description: string
  media?: {
    type: 'image' | 'video'
    src: string
  }
  link?: string
}

//Full project description goes here — what it does, tech used, your role, challenges solved
export const projects: Project[] = [
  {
    id: 'audispectrum',
    name: 'AudiSpectrum',
    summary: 'C/Raylib audio visualizer with FFT-reactive hexagonal tunnel',
    description: `Creating an Audio Visualier in c and raylib to be audio Reactive. Using factors such as pitch, or gains to adjust depending on style of song`,
    media: { type: 'image', src: '' },
    link: '',
  },
  {
    id: 'pickr',
    name: 'Pickr.gg',
    summary: 'Mood-based game recommendation web app',
    description: `A simple Game recommender built with vue to take a users steam Library and recommend them games based on a scoring system for moods. It was built for myself to have a way to find games in my own library that would suit my moods instead of scrolling around aimlessly.`,
    media: { type: 'image', src: '' },
    link: '',
  },
  // add more as you go — just copy this shape
]