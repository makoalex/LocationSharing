import {v4 as uuid} from 'uuid';
import { ISingleMessage } from '../../Types';
import store from '../store';
import { addChatMessage } from '../../Messenger/messengerSlice';

export const sendChatMessage =(content:string, receiverSocketId:string, )=>{
    const message = {
        receiverSocketId,
        content,
        id:uuid(),
    }

    store.dispatch(
        addChatMessage({
          socketId: message.receiverSocketId,
          content:message.content, 
          myMessage: true,
          id: message.id,
        })
     
      );
}