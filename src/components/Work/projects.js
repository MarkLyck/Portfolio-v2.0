import Thomas from './images/Thomas.jpg'
import FSMockup from './images/FS_Mockup.png'

import Carey from './images/Carey.jpg'
import TetherMockup from './images/Tether_Mockup.png'

import Katy from './images/Katy.jpg'
import BtBMockup from './images/BtB_Mockup.png'

import Ben from './images/BenGillin.jpg'
import OpenBMCMockup from './images/OpenBMC_Mockup.png'


export default [
  {
    title: 'Formula Stocks',
    task: 'Fullstack web application.',
    description: `Formula Stocks is a game changing investment firm, based out of Denmark.
                  They utilize their proprietary investment technology,
                  to beat the stock market >90% of the time for long term growth and profitability.`,
    image: FSMockup,
    website: 'https://formulastocks.com',
    // caseStudy: '/formulastocks',
    github: 'https://github.com/MarkLyck/Formula-Stocks',
    review: {
      name: 'Thomas L. CEO of Formula Stocks',
      image: Thomas,
      text: `“Mark’s designs are beautiful, not average and has character.
              I’m proud of the website he put together.”`
    }
  },
  {
    title: 'Tether',
    task: 'Fullstack web application.',
    description: `Tether is a group discovery and management platform.
                  Connecting students to organizations on their campus,
                  and clears the way for organizations to easily manage their events,
                  transactions and members.`,
    image: TetherMockup,
    website: 'http://tethersocial.com',
    caseStudy: '',
    github: '',
    review: {
      name: 'Carey Janecka, CEO of Tether',
      image: Carey,
      text: `“I appreciate your work more than I could ever express.”`
    }
  },
  {
    title: 'Bring the Band',
    task: 'Fullstack web application.',
    description: `Bring the Band, allows users to vote on their favorite bands to attend a festival.
                  They can purchase tickets to the festival, through secure credit card transactions.
                  Listen to music and more.`,
    image: BtBMockup,
    website: 'https://marklyck.github.io/Bring-the-Band/',
    caseStudy: '',
    github: 'https://github.com/MarkLyck/Bring-the-Band',
    review: {
      name: 'Katy Cassidy',
      image: Katy,
      text: `“Mark Lyck has a natural gift when it comes to building with code.
              He has a fine eye for what makes an app aesthetically pleasing and his strong JavaScript skills are supported by beautiful UI.

              My idea of a dream dev team would include Mark Lyck.”`
    }
  },
  {
    title: 'OpenBMC - IBM',
    task: 'Native Electron Application.',
    description: `A collaborative project for IBM, built with Electron.
                  OpenBMC makes it easy for their server administrators to discover endpoints,
                  run methods, see what software versions they are on,
                  even update and restart their systems`,
    image: OpenBMCMockup,
    website: '',
    caseStudy: '',
    github: '',
    review: {
      name: 'Ben Gillin',
      image: Ben,
      text: `“Mark’s work is exceptional and he's a joy to work with.
              I can tell he'll go far in his career. You'd be lucky to have him on your team.”`
    }
  }
]
