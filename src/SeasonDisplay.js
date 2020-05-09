import React from "react";
import "./SeasonDisplay.css";

const seasonconfig = {
  Summer: {
    text: "Let's hit the beach!",
    iconName: "sun"
  },
  Winter: {
    text: "Burr it's chill",
    iconName: "snowflake"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeaonDiplay = props => {
  const season = getSeason(props.Latitude, new Date().getMonth);
  //const icon= season==='Summer'? 'sun' : 'snowflake'
  const { text, iconName } = seasonconfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`top-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`bottom-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeaonDiplay;
