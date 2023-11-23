import React from 'react'
import Logo from '../components/Logo'
import Input from '../components/Input'

export default function Login() {
  return (
    <div className='section flex flex-row justify-center items-center w-full h-screen '>
      <div className='container relative border-2 border-black border-b-4 flex flex-col justify-center items-center w-3/4 md:w-3/5 lg:w-2/5 h-[350px] bg-primary mx-auto'> 
      <Logo />
      <Input/>
      </div>
    </div>
  )
}
