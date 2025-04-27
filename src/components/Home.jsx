import React from 'react'
import videoSrc from '../assets/18069232-uhd_3840_2160_24fps.mp4';

const Home = () => {
  return (
    <div className="video-background-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={videoSrc} type="video/mp4" />
      </video>
      <div className="video-overlay">
        <h1>India's First <span>Creatorverse</span></h1>
        <a href="https://habitat-two.vercel.app/"><button className="explore-button" >Explore Now</button></a>
      </div>
    </div>
  )
}

export default Home
