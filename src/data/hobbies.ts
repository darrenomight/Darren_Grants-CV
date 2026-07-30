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
  { id: 'gym', name: 'Gym', description: 'Started in 2021 my weight loss journey and strength training. It\'s definitely a journey that somehow works very similar to coding — the mental attitudes from gym can translate pretty well to coding: practice, pushing yourself, creating a schedule. Generally shoulders and triceps are my favourite muscle groups to train.', image: gym },
  { id: 'running', name: 'Running', description: 'While in Germany, to keep my mental health and strength, I picked up actually running and when I tell you this — I hated it. The positive is I kept at it and find it a great addition. You won\'t see me running in the rain though. Hopefully going to get a strong 10km soon!', image: running },
  { id: 'chess', name: 'Chess', description: 'I have been playing Chess since 6 years old, only picking up the game at a competitive level in college. I have played FIDE level chess tournaments for my college and the Irish Chess Federation. The tournaments I\'ve played vary from Sligo, Kilkenny, Dublin in the RCS and then in Brussels. I was the Chess Treasurer for 3 years in TU Dublin managing funding, trips and weekly expenditure. (Photo of me versus a Chess Hustler in New Orleans)', image: chess  },
  { id: 'gaming', name: 'Gaming', description: 'Been gaming a longgg timeee. From the PS2 to PC gaming now, with my last console being the PS5. I enjoy many genres from story-intense JRPGs, shooters, and intense strategy to simple city builders. There\'s always a game for every mood and games have always had a special place in my heart.', image: gaming1 },
  { id: 'warhammer', name: 'Warhammer / Miniature Painting', description: 'Age of Sigmar: Slann Priest miniature I painted. A hobby I sort of stumbled into. Great for artistic expression and creative processes. Can\'t really say much besides don\'t hate it till you try it yourself — it\'s oddly very therapeutic.', image: warhammer  },
  { id: 'music', name: 'Ukulele', description: 'Learned to play an instrument! A goal I never expected to ever achieve. Riptide can be played at any sort of party now. The picture is my ukulele but can\'t fit her in with this setup.', image: ukulele },
  { id: 'home-server', name: 'Home Server / Linux', description: 'The newest interest I\'m getting dragged into. With my old PC repurposed into a server it was the perfect opportunity to start self-hosting. Currently have set up and managed Jellyfin, Minecraft servers and Tailscale — learning how to manage server networking, usage, patching etc. It\'s pretty engaging. Really want to get into some crazy setups and projects once I can dedicate more storage to it.', image: hs },
]