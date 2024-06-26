'use client'

import NavbarComponent from '@/Components/NavBarComponent'
import ChatComponent from '@/Components/ChatComponent'
import React, { useState } from 'react'
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { useAppContext } from '@/Context/Context';
import { Button } from 'flowbite-react';
import './styles.css'

const Page = () => {

  return (
    <>
    <div className='h-screen DashBG'>
      <NavbarComponent/>
      <div className="background w-auto  flex">
         <div className="w-[800px] mx-auto mt-[69px] lg:mt-[74px]">
         <ChatComponent/>
          </div>
      </div>
    </div>
    </>
    
  )
}

export default Page