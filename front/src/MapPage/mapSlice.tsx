import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { dataUserProps } from "../Types";
import {mapState} from '../Types'

const initialState = {
  myLocation: null as { lat: number; lng: number } | unknown,
  onlineUsers: [],
  cardChosenOption: null,
};


export const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setMyLocation: (state, action: PayloadAction<mapState["myLocation"]>) => {
      state.myLocation = action.payload;
    },
    setOnlineUsers: (state, action) => {
      state.onlineUsers = action.payload;
    },
    removeDisconnectedUser: (state, action: PayloadAction<string>) => {
      state.onlineUsers = state.onlineUsers.filter(
        (onlineUser: dataUserProps) => onlineUser.socketId !== action.payload
      );
    },
  },
});

export const { setMyLocation, setOnlineUsers, removeDisconnectedUser } =
  mapSlice.actions;
export default mapSlice.reducer;
