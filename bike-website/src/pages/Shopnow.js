import React from 'react'
import video from '../Media/vasu.mp4';


const Booknow = () => {
  return (
    <div>
        <div>
        <video autoPlay loop muted className="video-bg">
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.      
      </video>
    </div>
    </div>
  )
}

export default Booknow;
