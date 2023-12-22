import React from 'react'
import { ChatBoxInterface } from '../../Types'


export default function NavbarLabel({userName}:ChatBoxInterface) {
  return (
    <p className='font-primary text-base text-black p-2'>{userName}</p>
  )
}
