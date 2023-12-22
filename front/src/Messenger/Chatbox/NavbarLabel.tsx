import React from 'react'
import { ChatBoxInterface } from '../../Types'


export default function NavbarLabel({userName}:ChatBoxInterface) {
  return (
    <p>{userName}</p>
  )
}
