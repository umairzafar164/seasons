import React from "react";
import './styles.css';


const seasonConfig = {
  summer: {
    text: "Oh no! Summers",
    icon: "massive sun icon",
  },
  winter: {
    text: "Yeaaaaaah! It's winters",
    icon: "massive snowflake icon",
  },
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const SeasonsDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, icon } = seasonConfig[season];
  return (
    <div className={`SeasonDisplay ${season}`}>
      <i className={`i1 ${icon}`}></i>
      <h1>{text}</h1>
      <i className={`i2 ${icon}`}></i>
    </div>
  );
};
export default SeasonsDisplay;
