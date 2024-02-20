import { configureStore } from "@reduxjs/toolkit";
import mapReducer from "../MapPage/mapSlice";
import messengerReducer from "../Messenger/messengerSlice";
import videoRoomReducer from "../realTimeCommunication/videoRoomSlice";

const store = configureStore({
  reducer: {
    map: mapReducer,
    messenger: messengerReducer,
    videoRooms: videoRoomReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "videoRooms/setLocalStream",
          "videoRooms/setRemoteStream",
        ],
        ignoredPaths: ["videoRooms.localStream", "videoRooms.remoteStream"],
      },
    }),
});
export default store;
