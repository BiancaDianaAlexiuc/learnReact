import React from "react";

import LocationOnIcon from "@mui/icons-material/LocationOn";

const LocationList = ({ el, location }) => {
  return (
    <li onClick={location} data-city={el.city} data-country={el.country}>
      <LocationOnIcon sx={{ color: "#4F4F4F", paddingRight: "10px" }} />
      {`${el.city}, ${el.country}`}
    </li>
  );
};

export default LocationList;
