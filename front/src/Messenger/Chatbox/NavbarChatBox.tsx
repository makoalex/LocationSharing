import React from "react";
import { ChatBoxInterface } from "../../Types";
import NavbarLabel from "./NavbarLabel";
import closeIcon from "../../assets/close-icon.svg"


const NavbarCloseButton = ({socketId}:ChatBoxInterface) => {
    return(
        <img src={closeIcon} alt="close Button" />
    )

}

export default function NavbarChatBox({
  userName,
  socketId,
}: ChatBoxInterface) {
  return (
    <div>
      NavbarChatBox
      <NavbarLabel userName={userName} />
      <NavbarCloseButton socketId={socketId}/>
    </div>
  );
}
