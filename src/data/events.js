import celebration from '../assets/celebration.jpg';
import protest from '../assets/protest.jpg';
import tech from '../assets/tech.jpg';

const events = [
  {
    id: '1',
    image: celebration,
    title: 'Birthday Party',
    tagline: 'Lets celebrate',
    desc: 'Come one come all for the party of the decade',
    location: 'Stockholm, Sweden',
    time: 'May 2nd, 2021, 17:00',
  },
  {
    id: '2',
    image: tech,
    title: 'Tech Conference',
    tagline: 'Discussing all things tech',
    desc: 'A space for tech entrepreneurs to share ideas and resources',
    location: 'Stockholm, Sweden',
    time: 'June 22nd, 2021, 18:00',
  },
  {
    id: '3',
    image: protest,
    title: 'Stand Up Justice ',
    tagline: 'Demanding justice for ...',
    desc: 'Make your voice heard by standing up for ...',
    location: 'Humlegården, Stockholm',
    time: 'May 31st, 2021, 12:00pm',
  },
];

export default events;
