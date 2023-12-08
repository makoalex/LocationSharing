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
    lng: number;
    lat: number;
  };
};
export type dataUserProps = {
  socketId: string;
  username: string;
  coords: {
    lng: number;
    lat: number;
  };
  myself?: boolean;
};
export type onlineUsersProps = {
  [socketId: string]: {
    username: string;
    coords: {
      lng: number;
      lat: number;
    };
    myself?: boolean;
  };
};
