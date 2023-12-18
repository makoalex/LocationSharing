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
  cardChosenOption: dataUserProps | null;
}

export interface distanceCoords{
  coord1:mapState["myLocation"],
  coord2:mapState["myLocation"]

}
 export type markerProps={
  coords:mapState["myLocation"],
  lat:number,
  lng:number,
  socketId:string,
  username:string
  myself?:boolean
}
export type userInfoCardProps = {
  username:string,
  socketId:string,
  userLocation:mapState['myLocation']
}

export type labelProps = {
  text: string;
  className: string;
};

export type ChatButtonProps = {
  socketId: string;
  userName: string;
}
export interface ChatBoxInterface extends ChatButtonProps{
  messages: string[]
}
export interface chatState{
  chatBoxes:ChatBoxInterface[]
  chatHistory:string[]
}
