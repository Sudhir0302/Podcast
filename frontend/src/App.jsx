import React, { useState } from 'react'
import './App.css'
import Homepage from './assets/components/Homepage'
import Podcasts from './assets/components/Podcasts'
import PlaySong from './assets/components/PlaySong'
import Login from './assets/components/login'
import About from './assets/components/About'
// import Sample from './assets/components/sample'

const App = () => {

  return (
    // <div> <PlaySong /></div>
    <div className='text-2xl text-center bg-slate-950'>
      <Homepage />
      {/* <About /> */}
      {/* <Login /> */}
      {/* <Podcasts/> */}
    </div>
    // <Sample id={133} name={'sandy'}/>
  )
}

export default App