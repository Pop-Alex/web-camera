import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["Home", "About us"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: ["text"],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["text"],
    video: highlightSecondVideo,
    videoDuration: 2,
  },
  {
    id: 3,
    textLists: ["text"],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["text"],
    video: highlightFourthVideo,
    videoDuration: 3,
  },
];

export const models = [
  {
    id: 1,
    info: "text1",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
    slug: 1,
  },
  {
    id: 2,
    info: "text2",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
    slug: 2,
  },
  {
    id: 3,
    info: "text3",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
    slug: 3,
  },
  {
    id: 4,
    info: "text4",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
    slug: 4,
  },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];
