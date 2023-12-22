import React from "react";
import { ChatBoxInterface } from "../../Types";
import NavbarLabel from "./NavbarLabel";
import closeIcon from "../../assets/close-icon.svg"


const NavbarCloseButton = ({socketId}:ChatBoxInterface) => {
    return(
      <p className="text-lg p-2 font-primary font-bold h-7 flex flex-col justify-center items-center shadow-[3px_3px_0px_0px_#0B2447] border-2 border-black">X</p>
    )

}

export default function NavbarChatBox({
  userName,
  socketId,
}: ChatBoxInterface) {
  return (
    <div className="w-full bg-primary h-[40px] flex flex-row justify-between items-center p-4">
      
      <NavbarLabel userName={userName} />
      <NavbarCloseButton socketId={socketId}/>
    </div>
  );
}
