import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inRoom:null, // on joining a room, will store the user's socketId
    rooms:[]
}

export const videoRoomSlice = createSlice({
    name: "videoRoom",
    initialState,
    reducers:{
        setInRoom:(state, action) =>{
            state.inRoom= action.payload
        },
        setRooms:(state, action)=>{
            state.rooms= action.payload
        }
    }
})

export const {setInRoom, setRooms} = videoRoomSlice.actions
export default videoRoomSlice.reducer