import React from "react";
import '../App.css'


// defining function
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
export default function SeasonDisplay(props) {
  console.log(props);
  // calling funtion in functional component
  const season = getSeason(props.latitude, new Date().getMonth());
  const text =
    season === 'winter' ? "Winter : burrry , its chilly" : "its summer,Lets hit the beach";
  const icon = season === 'winter' ? 'snowflake' : 'sun';
  return (
    <div className={`${season}`}>
      <i className={`${icon} massive left icon`} />
          <div className="content-display"><h2>{text}</h2></div>
      <br/>
      <i className={`${icon} massive down icon`} />
    </div>
  );
}
