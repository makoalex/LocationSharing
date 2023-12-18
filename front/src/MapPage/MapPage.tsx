import React from "react";
import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";
import { mapState } from "../Types";
import Marker from "./Marker";
import UserInfoCard from "./UserInfoCard/UserInfoCard";

export default function MapPage() {
  const myLocation = useSelector(
    (state: { map: mapState }) => state.map.myLocation
  );
  const onlineUsers = useSelector(
    (state: { map: mapState }) => state.map.onlineUsers
  );
  const cardChosenOption = useSelector(
    (state: { map: mapState }) => state.map.cardChosenOption
  );

  const defaultMapProps = {
    center: {
      lat: myLocation?.lat || 0,
      lng: myLocation?.lng || 0,
    },
    zoom: 5,
  };
  const googleMap = process.env.REACT_APP_GOOGLE_MAPS_API_KEY ? (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
      defaultCenter={defaultMapProps.center}
      defaultZoom={defaultMapProps.zoom}
    >
      {onlineUsers.map((onlineUser) => (
        <Marker
          key={onlineUser.socketId}
          username={onlineUser.username}
          lng={onlineUser.coords.lng || 0}
          lat={onlineUser.coords.lat || 0}
          socketId={onlineUser.socketId}
          myself={onlineUser.myself}
          coords={onlineUser.coords}
        />
      ))}
    </GoogleMapReact>
  ) : null;
  return (
    <div className="W-[100wv] h-[100vh] ">
      {googleMap}
      {cardChosenOption ? (
        <UserInfoCard
          username={cardChosenOption.username}
          socketId={cardChosenOption.socketId}
          userLocation={cardChosenOption.coords}
        />
      ) : null}
    </div>
  );
}
