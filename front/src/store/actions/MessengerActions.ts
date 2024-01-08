import {v4 as uuid} from 'uuid';
import { IMessage } from '../../Types';
import store from '../store';
import { addChatMessage } from '../../Messenger/messengerSlice';
import * as socketConnect from '../../SocketConnect/SocketConnect'

export const sendChatMessage =(content:string, receiverSocketId:string, )=>{
    const message:IMessage = {
        receiverSocketId,
        content,
        id:uuid(),
    }

    //create here socket connection to emit message to another user
    socketConnect.sendChatMessage(message)

    store.dispatch(
        addChatMessage({
          socketId: message.receiverSocketId,
          content:message.content, 
          myMessage: true,
          id: message.id,
        })
     
      );
}