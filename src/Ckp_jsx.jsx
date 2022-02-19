import React from 'react'
import img from './test.jpg'

const Ckp = () => {
  return (
    <div>
        <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

    <h1 class="title red">Your name here</h1>
   
    <br />
   
    <img src="logo192.png" />
   
    <br />
   
    <img src={img} />
        
   </div>
   
   <video width="320" height="240" controls>
   
    <source src="myVideo.mp4" type="video/mp4" />
   
   </video>

    </div>
  )
}

export default Ckp