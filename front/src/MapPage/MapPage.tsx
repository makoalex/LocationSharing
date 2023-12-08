import React from "react";
import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { mapState } from "./mapSlice";

export default function MapPage() {
  const myLocation = useSelector(
    (state: { map: mapState }) => state.map.myLocation
  );

  const defaultMapProps = {
    center: {
      lat: myLocation?.lat || 0,
      lng: myLocation?.lng || 0,
    },
    zoom: 11,
  };
  const googleMap = process.env.REACT_APP_GOOGLE_MAPS_API_KEY ? (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
      defaultCenter={defaultMapProps.center}
      defaultZoom={defaultMapProps.zoom}
    >
    </GoogleMapReact>
  ) : null;
  return (
    <div className="W-[100wv] h-[100vh] ">
      {googleMap}
    </div>
  );
}
