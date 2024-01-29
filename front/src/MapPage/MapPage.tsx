import React from "react";
import { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { useSelector, useDispatch } from "react-redux";
import { setOnlineUsers } from "./mapSlice";
import { mapState } from "../Types";
import Marker from "./Marker";
import UserInfoCard from "./UserInfoCard/UserInfoCard";
import Messenger from "../Messenger/Messenger";
import VideoRoom from "../VideoRooms/VideoRoom";

type Location = {
  lat: number;
  lng: number;
};

export default function MapPage() {
  const dispatch = useDispatch();
  const myLocation = useSelector(
    (state: { map: mapState }) => state.map.myLocation
  );
  const onlineUsers = useSelector(
    (state: { map: mapState }) => state.map.onlineUsers
  );
  const cardChosenOption = useSelector(
    (state: { map: mapState }) => state.map.cardChosenOption
  );

  const isValidWaypoint = async (location: Location) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
      );
      if (!response.ok) {
        throw new Error(`Geocoding failed with status ${response.status}`);
      }
      const data = await response.json();
      const isOverLand = data.results.some(
        (result: any) =>
          result.types.includes("natural_feature") ||
          result.types.includes("locality")
      );
      return isOverLand;
    } catch (error) {
      console.log("Error in isValidWaypoint:", error);
      return false;
    }
  };

  // route
  const apiIsLoaded = (map: any, maps: any) => {
    const waypoints = onlineUsers.map((onlineUser) => {
      return {
        location: onlineUser.coords,
        stopover: true,
      };
    });
    if (waypoints.length >= 2) {
      const origin = waypoints.shift()?.location;
      const destination = waypoints.pop()?.location;
      const validWaypoints = waypoints.filter(async (waypoint) => {
        return await isValidWaypoint(waypoint.location);
      });
      const directionsRenderer = new maps.DirectionsRenderer();

      directionsRenderer.setMap(map);
      const directionsService = new maps.DirectionsService();
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: maps.TravelMode.DRIVING && maps.TravelMode.WALKING,
          waypoints: validWaypoints,
          // avoidFerries: true,
        },
        (result: any, status: any) => {
          if (status === maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
          } else {
            console.log(" this is result ", JSON.stringify(result));
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  };
  // route

  const defaultMapProps = {
    center: {
      lat: myLocation?.lat || 0,
      lng: myLocation?.lng || 0,
    },
    zoom: 4,
  };
  let storedOnlineUsers = [];

  useEffect(() => {
    storedOnlineUsers = JSON.parse(localStorage.getItem("onlineUsers") || "[]");
    console.log("Stored Online Users:", storedOnlineUsers);
    dispatch(setOnlineUsers(storedOnlineUsers));
  }, [dispatch]);

  const googleMap = process.env.REACT_APP_GOOGLE_MAPS_API_KEY ? (
    <GoogleMapReact
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
      defaultCenter={defaultMapProps.center}
      defaultZoom={defaultMapProps.zoom}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps)}
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
    <section className="relative ">
      <Messenger />
      <div className="W-[100wv] h-screen ">
        {googleMap}
        <VideoRoom/>
        {cardChosenOption ? (
          <UserInfoCard
            username={cardChosenOption.username}
            socketId={cardChosenOption.socketId}
            userLocation={cardChosenOption.coords}
          />
        ) : null}
      </div>
    </section>
  );
}
