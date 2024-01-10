import React from 'react'
import ChatButton from './UserInfoCard/ChatButton'
import { ChatButtonProps } from '../Types'

export default function ActionButton(props:ChatButtonProps) {
  return (
    <div className='flex flex-row justify-end p-2'>
        <ChatButton socketId={props.socketId} username={props.username}/>
    </div>
  )
}
