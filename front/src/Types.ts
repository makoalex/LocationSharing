export interface RootState {
  map: {
    myLocation: {
      lng: number;
      lat: number;
    };
  };
}
export type dataProps = {
  username: string;
  coords: {
    lat: number;
    lng: number;
  };
};
 export type onlineUsersProps = {
  [id: string]: {
    username: string;
    coords: {
      lng: number;
      lat: number;
    };
  };
};
