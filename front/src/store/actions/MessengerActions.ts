import { v4 as uuid } from "uuid";
import { IMessage } from "../../Types";
import store from "../store";
import { addChatMessage, addCheckBoxes } from "../../Messenger/messengerSlice";
import * as socketConnect from "../../SocketConnect/SocketConnect";

export const sendChatMessage = (content: string, receiverSocketId: string) => {
  const message: IMessage = {
    receiverSocketId,
    content,
    id: uuid(),
  };

  //create here socket connection to emit message to another user
  socketConnect.sendChatMessage(message);

  store.dispatch(
    addChatMessage({
      socketId: message.receiverSocketId,
      content: message.content,
      myMessage: true,
      id: message.id,
    })
  );
};

export const chatMessageHandler = (messageData: IMessage) => {
  store.dispatch(
    addChatMessage({
      socketId: messageData.senderSocketId,
      content: messageData.content,
      myMessage: false,
      id: messageData.id,
    })
  );
  if (messageData.senderSocketId) {
    openChatBoxIfClosed(messageData.senderSocketId);
  }
};

const openChatBoxIfClosed = (socketId: string) => {
  const chatBox = store
    .getState()
    .messenger.chatBoxes.find((c) => c.socketId === socketId);

  const username = store
    .getState()
    .map.onlineUsers.find((u) => u.socketId === socketId)?.username;
  if (!chatBox) {
    store.dispatch(addCheckBoxes({ socketId, username }));
  }
};
