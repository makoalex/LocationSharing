import React from 'react'
import Call from '../assets/Call.png'

export default function CreateRoomButton() {
  return (
    <div >
        <img src={Call} alt=" call button" className='absolute right-14 bottom-4 rounded-sm  w-[60px] h-[50px]  bg-black  active:shadow-none active:transition-all active:duration-300 cursor-pointer' />
    </div>
  )
}
