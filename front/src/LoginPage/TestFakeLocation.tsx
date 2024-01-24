const fakeLocations = [
  {
    coords: {
      longitude: -3.70379,
      latitude: 40.416775,
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
      longitude: 26.096306,
      latitude: 44.439663,
    },
  },
  {
    coords: {
      longitude: 10.757933,
      latitude: 59.911491,
    },
  },
  {
    coords: {
      longitude: 10.8025856,
      latitude: 59.9195123,
    },
  },
];
export const getFakeLocations = () => {
  return fakeLocations[Math.floor(Math.random() * fakeLocations.length)];
};
