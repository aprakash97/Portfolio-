'use client'

import React from 'react'
import SideBar from './sidebar'
import Header from './header'

const Main = () => {
  return (
    <div className='flex'>
        <SideBar />
        <Header />
    </div>
  )
}

export default Main