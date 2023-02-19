import Button from "@mui/material/Button";
import React, { useState } from "react";
import "./Slider.css";
import { sliderData } from "../../Data";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
function Slider() {
  const length = sliderData.length;
  // console.log(length);
  const [state, setstate] = useState(0);
  return (
    <div className="slider-container">
      <div
        className="slider-left-arrow"
        onClick={() => {
          return setstate(state === 0 ? length - 1 : state - 1);
        }}
      >
        {console.log(state)}
        <NavigateBeforeIcon className="slider-lefticon" />
      </div>
      <div
        className="slider-right-arrow"
        onClick={() => {
          return setstate(state === length - 1 ? 0 : state + 1);
        }}
      >
        <NavigateNextIcon className="slider-righticon" />
      </div>
      {sliderData.map(
        (data, index) =>
          state === index && (
            <div className="slider-slide">
              <img className="slider-img" src={data.img} alt="Loading..." />
              <div className="slider-info">
                <h1>{data.title}</h1>
                <p>{data.desc}</p>
                <Link></Link>
                <Button
                  variant="contained"
                  color="primary"
                >
                  Check it out
                </Button>
              </div>
            </div>
          )
      )}
    </div>
  );
}
export default Slider;
{
  /* <div className={index === length - 1 ? 'slider-next' : 'slider-start' }> */
}
{
  /* </div> */
}
