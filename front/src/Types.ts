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

export interface mapState {
  myLocation: { lat: number; lng: number };
  onlineUsers: dataUserProps[];
  cardChosenOption: string | null;
}
 export type markerProps={
  coords:mapState["myLocation"],
  lat:number,
  lng:number,
  socketId:string,
  username:string
  myself?:boolean
}
