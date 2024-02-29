import React from "react";
import { useSelector } from "react-redux";
import store from "../store/store";
import CreateRoomButton from "./CreateRoomButton";
import RoomJoinedButton from "./RoomJoinedButton";
import { IParticipants, IRoomInfo } from "../Types";
import ParticipantsVideos from "./ParticipantsVideos";



export interface IRoomToDisplay {
  creatorUsername: string;
  id: string;
  amountOfParticipants: number;
  participants?: IParticipants[];

}

const convertRoomsToArray = (VideRooms: IRoomInfo[]) => {
  const rooms: IRoomToDisplay[] = [];
  Object.entries(VideRooms).forEach(([key, value]) =>{
    rooms.push({
      id: key,
      creatorUsername: value.participants[0].username,
      amountOfParticipants: value.participants.length,
    })
  }

  )
  return rooms
}

export const RoomList = () => {
  const rooms = useSelector(
    (store: { videoRooms: { rooms: IRoomInfo[] } }) => store.videoRooms.rooms
  );
  console.log("rooms", rooms);

  return (
    <div className="flex flex-row-reverse w-screen absolute bottom-7 mr-11 right-11 gap-3 ">
      <CreateRoomButton />
      {convertRoomsToArray(rooms).map((room) => (
        <RoomJoinedButton
          key={room.id}
          creatorUsername={room.creatorUsername}
          roomId={room.id}
          amountOfParticipants={room.amountOfParticipants}
        />
      ))}
    </div>
  );
};

export default function VideoRoom() {
  return (
    <div>
      <RoomList />
      {/* participants component   */}
      <ParticipantsVideos/>

    </div>
  );
}
