import React from 'react'
import image from '../images/call-center-removebg-preview.png'

export default function Pics2() {
  return (
    <div style={{
      display:'flex',
      flexDirection:'column',
      // position:'relative'
    }}>
        <img src={image} alt="" style={{width:'30rem',
         height:'25rem',
         position:'absolute',
         top:'20vh',
         right:'8vw'
      }} />
      <div className="email" style={{
        position:'absolute',
        top:'80vh',
        textAlign:'end',
        right:'8vw',
      }}>
        <h6>Contact us through Email</h6>
        <h6>textverse@gmail.com</h6>
      </div>
      <div className="email" style={{
        position:'absolute',
        top:'90vh',
        textAlign:'end',
        right:'8vw',
      }}>
        <h6>Customer Care</h6>
        <h6><a href="#">CustomerCare@textverse.com</a></h6>
      </div>
    </div>
  )
}
