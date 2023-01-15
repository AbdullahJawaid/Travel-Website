import React from 'react'
import { Button } from './Button';
// import Video from "../assets/videos/video-2.mp4"

//style
import './SectionOne.css'
// import '../App.css'

// const src="assets/videos/video-2.mp4"


function SectionOne() {
  return (
    <div className='section-one'>
      {/* <video controls width="100%">
      <source src={Video} />
      </video> */}
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="section-one-btns" >
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
        GET STARTED
        </Button>

        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
        WATCH TRAILER <i className="far fa-play-circle"/>
        </Button>
      </div>
    </div>
  )
}

export default SectionOne