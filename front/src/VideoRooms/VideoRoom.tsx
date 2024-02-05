import React from "react";
import { useSelector } from "react-redux";
import store from "../store/store";
import CreateRoomButton from "./CreateRoomButton";
import RoomJoinedButton from "./RoomJoinedButton";

interface RoomState {
  inRoom: string;
  rooms: string[];
}
interface IParticipants {
  socketId: string;
  peerId: number;
  username: string;
}
interface IRoom {
  id: number;
  participants: IParticipants[];
}

const DummyRooms: IRoom[] = [
  {
    id: 1,
    participants: [
      {
        socketId: "1",
        peerId: 1,
        username: "Mako",
      },
    ],
  },
  {
    id: 2,
    participants: [
      {
        socketId: "2",
        peerId: 2,
        username: "John",
      },
    ],
  },
];

export const RoomList = () => {
  // const rooms = useSelector((state:{room:RoomState})=>state.room.rooms)
  return (
    <div className="flex flex-row-reverse w-screen absolute bottom-7 mr-11 right-11 gap-3 ">
      <CreateRoomButton />
      {DummyRooms.map((room) => (
        <RoomJoinedButton
          key={room.id}
          creatorUsername={room.participants[0].username}
          roomId={room.id}
          amountOfParticipants={room.participants.length}
        />
      ))}
    </div>
  );
};

export default function VideoRoom() {
  return (
    <div>
      <RoomList />
    </div>
  );
}
