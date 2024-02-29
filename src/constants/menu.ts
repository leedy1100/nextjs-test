type Menu = {
  name: string;
  url: string;
  visible: boolean;
}[];

export const menu: Menu = [
  { name: 'Flex', url: '/flex', visible: true },
  { name: 'Grid', url: '/grid', visible: true },
  { name: 'Zustand', url: '/state/zustand', visible: true },
  { name: 'Subscribe', url: '/subscribe', visible: false },
  { name: 'My', url: '/subscribe/my', visible: false },
  { name: 'Etc', url: '/etc', visible: false },
  { name: 'Notification', url: '/noti', visible: true },
];

export const subscribe = [
  {
    name: 'Netflix',
    image: '/assets/images/subscribe/netflix.svg',
    color: 'red1',
    visible: true,
  },
  {
    name: 'Youtube Premium',
    image: '/assets/images/subscribe/youtube.svg',
    color: 'red2',
    visible: true,
  },
  {
    name: 'Wavve',
    image: '/assets/images/subscribe/wavve.svg',
    color: 'blue1',
    visible: true,
  },
  {
    name: 'Coupang',
    image: '/assets/images/subscribe/coupang.svg',
    color: 'gray1',
    visible: true,
  },
  {
    name: 'Disney+',
    image: '/assets/images/subscribe/disney.svg',
    color: 'blue2',
    visible: true,
  },
  {
    name: 'Spotify',
    image: '/assets/images/subscribe/spotify.svg',
    color: 'green1',
    visible: true,
  },
  {
    name: 'Millie',
    image: '/assets/images/subscribe/millie.jpg',
    color: 'yellow1',
    visible: true,
  },
];
