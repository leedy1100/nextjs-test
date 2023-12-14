type Menu = {
  name: string;
  url: string;
  visible: boolean;
}[];

export const menu: Menu = [
  { name: "Flex", url: "/flex", visible: false },
  { name: "Grid", url: "/grid", visible: false },
  { name: "Zustand", url: "/state/zustand", visible: false },
  { name: "Subscribe", url: "/subscribe", visible: true },
  { name: "My", url: "/subscribe/my", visible: true },
  { name: "Etc", url: "/etc", visible: true },
];

export const subscribe = [
  {
    name: "Netflix",
    image: "/assets/images/subscribe/netflix.svg",
    color: "red1",
    visible: true,
  },
  {
    name: "Youtube Premium",
    image: "/assets/images/subscribe/youtube.svg",
    color: "red2",
    visible: true,
  },
  {
    name: "Wavve",
    image: "/assets/images/subscribe/wavve.svg",
    color: "blue1",
    visible: true,
  },
];
