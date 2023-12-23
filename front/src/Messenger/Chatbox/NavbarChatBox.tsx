import React from "react";
import { ChatBoxInterface } from "../../Types";
import NavbarLabel from "./NavbarLabel";
import closeIcon from "../../assets/close-icon.svg"


const NavbarCloseButton = ({socketId}:ChatBoxInterface) => {
    return(
        <div className="">
      <button className="text-lg rounded-sm w-[25px] h-[25px]  bg-callAction active:bg-accent cursor-pointer  p-2 font-primary font-extrabold flex flex-col justify-center items-center shadow-[2px_2px_0px_0px_#0B2447] border-2 border-black focus:bg-accent focus:transition-all focus:duration-300 focus:shadow-none  ">X</button>
      </div>
    )

}

export default function NavbarChatBox({
  userName,
  socketId,
}: ChatBoxInterface) {
  return (
    <div className="w-full h-[40px] flex flex-row justify-between items-center p-2 bg-primary  ">
      
      <NavbarLabel userName={userName} />
      <NavbarCloseButton socketId={socketId}/>
    </div>
  );
}
