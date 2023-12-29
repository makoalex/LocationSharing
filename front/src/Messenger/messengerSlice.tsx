import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {ChatBoxInterface, chatState} from '../Types'

const initialState = {
  chatBoxes: [],
  chatHistory: [],
};

export const messengerSlice = createSlice({
  name: "messenger",
  initialState,
  reducers: {
    addCheckBoxes: (state:any, action:PayloadAction<ChatBoxInterface>) => {
      if (
        !state.chatBoxes.find((checkBox: ChatBoxInterface) => {
          return checkBox.socketId === action.payload.socketId;
        })
      ) {
        state.chatBoxes.push(action.payload);
      }
    },
    removeChatBox: (state: any, action) => {
      return {
        ...state,
        chatBoxes: state.chatBoxes.filter(
          (chatBox: ChatBoxInterface) => chatBox.socketId !== action.payload
        ),
      };
    },
  },
});
export const { addCheckBoxes, removeChatBox } = messengerSlice.actions;
export default messengerSlice.reducer;
