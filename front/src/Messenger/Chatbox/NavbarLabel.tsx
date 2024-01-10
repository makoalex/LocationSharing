import React from 'react'
import { ChatBoxInterface } from '../../Types'


export default function NavbarLabel({username}:ChatBoxInterface) {
  return (
    <p className='font-primary text-base text-black'>{username}</p>
  )
}
