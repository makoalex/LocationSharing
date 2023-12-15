import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatBoxes: [],
  chatHistory: [],
};

export const messengerSlice = createSlice({
  name: "messeger",
  initialState,
  reducers: {
    addChatBoxes: (state, action) => (state.chatBoxes = action.payload),
  },
});
