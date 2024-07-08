import React from "react";
import { points } from "../data";
const Gallery = ({ src, index, columnOffset, text }) => {
  console.log(src);
  const values = points[index];
  if (!values) return null;
  const [row, column, spanRow, spanColumn] = values;
  const scrollIndex = () => {
    if (index === 1) return -1;
    if (index === 4) return -1;
    if (index === 0) return 0;
    if (index === 3) return 0;
    if (index === 5) return 0;

    return 1;
  };
  return (
    <div
      className="gallery-item"
      data-scroll
      data-scroll-speed={scrollIndex()}
      style={{
        gridArea: `${row} / ${
          column + columnOffset
        } / span ${spanRow} / span ${spanColumn}`,
      }}>
      <div className="gallery-item-image">
        <div className="gallery__item-imginner">
          <img className="" src={src}></img>
        </div>
        {/* <div className="galery-text">
          <br />
          {text}
        </div> */}
      </div>
    </div>
  );
};

export default Gallery;
