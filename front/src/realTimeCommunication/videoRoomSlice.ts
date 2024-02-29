import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RoomState } from "../Types";

const initialState = {
  inRoom: null, // on joining a room, will store the user's socketId
  rooms: [],
  localStream: null,
  remoteStream: null,
  isMicOn: true,
  isCameraOn: true,
};

export const videoRoomSlice = createSlice({
  name: "videoRooms",
  initialState,
  reducers: {
    setInRoom: (state, action) => {
      state.inRoom = action.payload;
    },
    setRooms: (state, action) => {
      state.rooms = action.payload;
    },
    setLocalStream: (state, action) => {
      state.localStream = action.payload;
    },
    setRemoteStream: (state, action) => {
      state.remoteStream = action.payload;
    },
    setIsMicOn: (state, action: PayloadAction<boolean>) => {
      state.isMicOn = action.payload;
    },
    setIsCameraOn: (state, action: PayloadAction<boolean>) => {
      state.isCameraOn = action.payload;
    },
  },
});

export const {
  setInRoom,
  setRooms,
  setLocalStream,
  setRemoteStream,
  setIsMicOn,
  setIsCameraOn,
} = videoRoomSlice.actions;
export default videoRoomSlice.reducer;
