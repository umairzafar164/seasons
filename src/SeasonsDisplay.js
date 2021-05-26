import React from "react";

const geSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonsDisplay = (props) => {
  const season = geSeason(props.lat, new Date().getMonth());
  const text =
    season === "winter" ? "Yeauppy winters are here !" : "Oh damn summers";
  const icon = season === "winter" ? "snowflake icon" : "sun icon";
  return (
    <div>
      <i className={icon}></i>
      <h1>{text}</h1>
      <i className={icon}></i>
    </div>
  );
};
export default SeasonsDisplay;
