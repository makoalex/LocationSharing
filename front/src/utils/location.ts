import { distanceCoords } from "../Types";

export const calculateDistanceBetweenCords = ({
  coord1,
  coord2,
}: distanceCoords) => {
  return getDistanceFromLatLonInKm(
    coord1.lat,
    coord1.lng,
    coord2.lat,
    coord2.lng
  );
};

// Sources: https://stackoverflow.com/questions/27928/calculate-distance-between-two-latitude-longitude-points-haversine-formula
const getDistanceFromLatLonInKm = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return roundToTwoDecimals(d);
};

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

const roundToTwoDecimals = (num: number): number => {
  return +(Math.round(num * 100) / 100);
};
