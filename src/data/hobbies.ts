import gaming1 from '../assets/hobbies/steam.png'
import gym from '../assets/hobbies/gym.png'
import running from '../assets/hobbies/strava.jpg'
import warhammer from '../assets/hobbies/WH.png'
import chess from '../assets/hobbies/chess.png'
import ukulele from '../assets/hobbies/Uke.jpg'
import hs from '../assets/hobbies/hl.png'


export interface Hobby {
  id: string
  name: string
  description: string
  image?: string
}

export const hobbies: Hobby[] = [
  { id: 'gaming', name: 'Gaming', description: 'Been gaming a longgg timeee. From the PS2, to pc gaming now with my last console beeing the ps5', image: gaming1 },
  { id: 'gym', name: 'Gym', description: 'Started in 2021 my weightloss and strength training.', image: gym },
  { id: 'running', name: 'Running', description: 'In Germany picked up actaully running and cardio.', image: running },
  { id: 'warhammer', name: 'Warhammer / Miniature Painting', description: 'Age of Sigmar miniature painting.', image: warhammer  },
  { id: 'chess', name: 'Chess', description: 'I have played at Tournament level chess events for my College. Sligo, Kilkenny and then in Brussels. I was the Chess Treasurer for 3 years managing funding and trips and weekly expenditure .', image: chess  },
  { id: 'music', name: 'Ukulele', description: 'Learned to play an instrument! A goal I never expected ', image: ukulele },
  { id: 'home-server', name: 'Home Server / Linux', description: 'Self-hosted Jellyfin, Minecraft, Tailscale on old repurposed hardware.', image: hs },
]