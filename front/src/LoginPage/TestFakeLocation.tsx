const fakeLocations = [
  {
    coords: {
      latitude: 40.416775,
      longitude: -3.70379,
    },
  },
  {
    coords: {
      latitude: -27.6068,
      longitude: 14.55563,
    },
  },
  {
    coords: {
      latitude: -33.87379,
      longitude: 158.13075,
    },
  },
  {
    coords: {
      latitude: 51.509865,
      longitude: -0.118092,
    },
  },
  {
    coords:{
        latitude: 0.76126,
        longitude: 31.33584,
    },
  },
  {
    coords:{
        latitude: 122.4194155,
        longitude: 37.7749295,
    }
  }
];
  export const getFakeLocations = ()=>{
  return  fakeLocations[Math.floor(Math.random()* fakeLocations.length)]
  
 }