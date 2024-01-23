import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "../MapPage/mapSlice";
import messengerReducer from "../Messenger/messengerSlice"
import videoRoomReducer from "../realTimeCommunication/videoRoomSlice";


  const store = configureStore({
  reducer: {
    map:mapReducer,
    messenger:messengerReducer,
    videoRoom:videoRoomReducer,
  },
});
export default store;