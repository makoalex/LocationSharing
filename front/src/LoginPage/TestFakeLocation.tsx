const fakeLocations = [
  {
    coords: {
      longitude: -3.70379,
      latitude: 40.416775,
    },
  },
  {
    coords: {
      longitude: 14.55563,
      latitude: -27.6068,
    },
  },
  {
    coords: {
      longitude: 158.13075,
      latitude: -33.87379,
    },
  },
  {
    coords: {
      longitude: -0.118092,
      latitude: 51.509865,
    },
  },
  {
    coords: {
      longitude: 59.919531, 
      latitude: 10.802672,
    },
  },
  {
    coords: {
      longitude: 59.739913,
      latitude:10.203424,
    },
  },
];
export const getFakeLocations = () => {
  return fakeLocations[Math.floor(Math.random() * fakeLocations.length)];
};
