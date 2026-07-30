import gaming1 from '../assets/hobbies/steam.png'
import gym from '../assets/hobbies/gym.png'
import running from '../assets/hobbies/strava.jpg'
import warhammer from '../assets/hobbies/wh1.png'
import chess from '../assets/hobbies/chess.png'
import ukulele from '../assets/hobbies/uke.jpg'
import hs from '../assets/hobbies/hl.png'


export interface Hobby {
  id: string
  name: string
  description: string
  image?: string
}

export const hobbies: Hobby[] = [
  { id: 'gym', name: 'Gym', description: 'Started in 2021 my weight loss journey and strength training. Its defiently a Journey that somehow works very similiar to coding, the mental attitudes from gym can transalte pretty well to coding, practise, pushing yourself creating a schedule. Generally shoulders and triceps are my favourite muscle groups to train.', image: gym },
  { id: 'running', name: 'Running', description: 'While in Germany to keep my mental and strength i picked up actaully running and when I tell you this i hated it. The postives is i kept at it and find it a great addition, you wont see me running in the rain though. Hopefully going to get a strong 10km soon!', image: running },
  { id: 'chess', name: 'Chess', description: 'I have been playing Chess since 6 years old. Only picking up the game at a competitive level in college. I have played Fide level chess Tournament  for my College and the Irish Chess federation. The Tournaments ive played vary from Sligo, Kilkenny, Dublin in the RCS and then in Brussels. I was the Chess Treasurer for 3 years in TU Dublin managing funding and trips and weekly expenditure. (Photo of me versus a Chess Hustler in New Orleans)', image: chess  },
  { id: 'gaming', name: 'Gaming', description: 'Been gaming a longgg timeee. From the PS2, to pc gaming now with my last console being the PS5. I enjoy many genres from story intense JRPGS, shooters to intense strategy to simple city builders. Theres always a game for every mood and games have always had a special place in my heart. ', image: gaming1 },
  { id: 'warhammer', name: 'Warhammer / Miniature Painting', description: 'Age of Sigmar: Slann Priest miniature i painted. A Hobby i sort of stumbled into. Great for artisitc expression and creative processes. Cant really say much besides dont hate it till you try it yourself its oddly very therapeutic. ', image: warhammer  },
  { id: 'music', name: 'Ukulele', description: 'Learned to play an instrument! A goal I never expected to ever achieve. Riptide can be played at any sort of party now. The picture is my ukulele but cant fit her in with this setup. ', image: ukulele },
  { id: 'home-server', name: 'Home Server / Linux', description: ' The newest interest im getting dragged into. With my old pc repurpsed into a server it was the perfect opportunity to start with Self-hosting. Currently have set up and managed Jellyfin, Minecraft servers and  Tailscale - learning how to manage a server networking, usage, patching etc. Is pretty engaging. Really want to get into some crazy setups / projects once I can dedicate more more storage to it.', image: hs },
]