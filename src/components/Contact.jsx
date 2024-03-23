import React from 'react'


// display: 'flex', justifyContent: 'space-around'
export default function Contact() {
  return (
<div>
  <div className='container my-4 mx-4' style={{display:'flex', flexDirection:'column',gap:'2rem',width:'40vw' }}>
    <div className="headingtwo" style={{margin:'3rem 1rem'}}>
    <h1>Reach Out to Us</h1>   
    </div>
    <div className="form-floating mb-3">
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating mb-3" >
      <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ height: '8rem'}} ></textarea>
      <label htmlFor="floatingTextarea">Comments</label>
    </div>
    <div className="form-floating mb-3" >
    <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
        <option selected>Rate Out of 5</option>
        <option value="5">★★★★★</option>
        <option value="4">★★★★☆</option>
        <option value="3">★★★☆☆</option>
        <option value="2">★★☆☆☆</option>
        <option value="1">★☆☆☆☆</option> 
</select>
      <label htmlFor="floatingSelect">Rate Our Services</label>
    </div>
    <div className="my-3">
      <input className="btn btn-primary" type="submit" value="Submit" />
    </div>
  </div>
</div>

  )
}
