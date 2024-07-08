import {
  lentila,
  focusd,
  diafragma,
  sensor,
  shutter,
  contact,
  lensMount,
} from "./utils";

/* const photos = [
  "https://images.unsplash.com/photo-1500081334385-7766153ae227?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=100",

  "https://images.unsplash.com/photo-1449182210692-60ced46ae304?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2491&q=100",

  "https://images.unsplash.com/photo-1537253500005-0945025bafe6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2700&q=100",
]; */
const photos = [
  {
    id: 1,
    img: lentila,
    text: "Obiectivul este una dintre cele mai esențiale părți ale unui aparat foto.",
  },
  {
    id: 2,
    img: focusd,
    text: "focusd",
  },
  {
    id: 3,
    img: diafragma,
    text: "diafragma",
  },
  {
    id: 4,
    img: sensor,
    text: "sensor",
  },
  {
    id: 5,
    img: shutter,
    text: "shutter",
  },
  {
    id: 6,
    img: contact,
    text: "contact",
  },
  {
    id: 7,
    img: lensMount,
    text: "lensMount",
  },
];
const imageData = [photos, photos, photos, photos];

const points = [
  [11, 2, 12, 2],
  [18, 6, 7, 1],
  [29, 5, 12, 3],
  [16, 10, 13, 3],
  [30, 14, 5, 2],
];
export { imageData, points };
