import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuerry } from "@mui/material";
import LocactionOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/lab";

import useStyles from "./styles.js";

const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuerry("(main-width:600px)");

  const coordinates = { lat: 0, lng: 0 };
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
