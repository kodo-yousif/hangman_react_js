import React from 'react'
import video from '../components/trim.mp4'
import ReactPlayer from 'react-player'
import './hangman.css'
import {Link} from 'react-router-dom'



const Background = () => {
    return (
        <div>
                    <ReactPlayer url={video} 
                    width="100%"
                    height="100%" 
                    id="video"
                    autoPlay
                    loop
                    controls={false}
                    playsinline 
                    playing
                    style={{
                        position:"absolute",
                        zIndex:"-1", 
                        left:"50%",
                        top:"50%",
                        objectFit:"cover",
                        transform:"translate(-50%,-50%)"
                    }}
                    />
                    <Link to="/play" className="btn btn-lg btn btn-warning button" >Play</Link> 


        </div>
       
    )
}

export default Background

