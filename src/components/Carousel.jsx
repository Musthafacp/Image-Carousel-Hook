import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
  const [state, setState] = useState(0);

  const handlePrevClick = () => {
    setState((prevState) => (prevState === 0 ? images.length - 1 : prevState - 1));
};

const handleNextClick = () => {
    setState((prevState) => (prevState === images.length - 1 ? 0 : prevState + 1));
};

  return (
    <>
      <div className="main">
        <ArrowBackIosIcon className="arrow" onClick={handlePrevClick} style={{ fontSize: 70 }}/>
        <div className="images_texts">
          <img src={images[state].img} alt="" />
          <div className="texts">
            <h1>{images[state].title}</h1>
            <h3>{images[state].subtitle}</h3>
          </div>
        </div>
        <ArrowForwardIosIcon className="arrow" onClick={handleNextClick} style={{ fontSize: 70 }}/>
      </div>
    </>
  );
}

export default Carousel;
