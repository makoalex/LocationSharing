import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ChatBoxInterface, chatState, ISingleMessage } from "../Types";

const initialState: chatState = {
  chatBoxes: [],
  chatHistory: {},
};

export const messengerSlice = createSlice({
  name: "messenger",
  initialState,
  reducers: {
    addCheckBoxes: (state, action: PayloadAction<ChatBoxInterface>) => {
      if (
        !state.chatBoxes.find((checkBox: ChatBoxInterface) => {
          return checkBox.socketId === action.payload.socketId;
        })
      ) {
        state.chatBoxes.push(action.payload);
      }
    },
    removeChatBox: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        chatBoxes: state.chatBoxes.filter(
          (chatBox: ChatBoxInterface) => chatBox.socketId !== action.payload
        ),
      };
    },
    addChatMessage: (state, action: PayloadAction<ISingleMessage>) => {
      if (state.chatHistory[action.payload.socketId!]) {
        // append message to chat history
        state.chatHistory[action.payload.socketId!].push({
          content: action.payload.content,
          myMessage: action.payload.myMessage,
          id: action.payload.id,
        });
      } else {
        // create a new one
        state.chatHistory[action.payload.socketId!] = [
          {
            content: action.payload.content,
            myMessage: action.payload.myMessage,
            id: action.payload.id,
          },
        ];
      }
    },
  },
});
export const { addCheckBoxes, removeChatBox, addChatMessage } = messengerSlice.actions;
export default messengerSlice.reducer;
