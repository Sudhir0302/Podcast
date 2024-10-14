import React, { useState } from 'react'
import './App.css'
import Homepage from './assets/components/Homepage'
import Podcasts from './assets/components/Podcasts'

const App = () => {

  return (
    <div className='text-2xl text-center bg-slate-950'>
      <Homepage />
      {/* <Podcasts/> */}
    </div>
  )
}

export default App