import { v4 as uuid } from 'uuid';
import store from '../store';
import { setInRoom } from '../../realTimeCommunication/videoRoomSlice';
import * as socketConnect from '../../SocketConnect/SocketConnect';

export const createVideoRoom =  async()=>{
    // get access to local stream and create a new room

    const newRoomId = uuid()
    store.dispatch(setInRoom(newRoomId))
    socketConnect.createVideoRoom({
        peerId:1, // change this later with real peerId
        newRoomId
    })
}