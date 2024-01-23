import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { dataUserProps } from "../Types";
import { mapState } from "../Types";

const initialState = {
  myLocation: null as { lat: number; lng: number } | unknown,
  onlineUsers: [] as dataUserProps[],
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
      localStorage.setItem("onlineUsers", JSON.stringify(action.payload));
    },
    removeDisconnectedUser: (state, action: PayloadAction<string>) => {
      state.onlineUsers = state.onlineUsers.filter(
        (onlineUser: dataUserProps) => onlineUser.socketId !== action.payload
      );
      localStorage.setItem("onlineUsers", JSON.stringify(state.onlineUsers));
    },
    setCardChoseOption: (state, action) => {
      state.cardChosenOption = action.payload;
    },
  },
});

export const {
  setMyLocation,
  setOnlineUsers,
  removeDisconnectedUser,
  setCardChoseOption,
} = mapSlice.actions;
export default mapSlice.reducer;
