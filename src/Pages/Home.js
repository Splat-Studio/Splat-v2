import React from 'react'
import './Home.css'
import Video from '../Assets/bg2.mp4'

const Home = () => {
  return (
    <div className='container home'>
      <video autoPlay muted loop id='myVideo'>
        <source src={Video} type='video/mp4' />
      </video>
      <div className='gradient'></div>
      <div className='container-center home-center'>
        <h1 className='hero-title'>Home</h1>
      </div>
    </div>
  )
}

export default Home
