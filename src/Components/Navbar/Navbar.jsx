import React, { useEffect, useState } from 'react';

import "./Navbar.css"
const Navbar = () => {
  const [shouldJump, setShouldJump]=useState(false);
  useEffect(()=>{
    setShouldJump(true);
    const timer=setTimeout(()=>setShouldJump(false),600);
    return ()=>clearTimeout(timer);
  },[]);
  return (
    <div className='container '>
      
        <div className= "logo-container ">
        <img className={ shouldJump? "jump-on-load":""} src="https://cdn-icons-png.flaticon.com/256/6935/6935795.png" alt="" />
          <h2 className='logo-tag'>  Gym Fluencer</h2>
      </div>
      
      <div className="navbar">
      <div className="navbar-ele">
        
        <a className="ele">Home</a>
        
        <a className="ele" href="#">Features</a>
        <a className="ele" href="#">Diet Plan</a>
        <a className="ele" href="#">Workout Plans</a>
        <a className="ele" href="#">Blogs</a>
        <a className="ele" href="#">FAQs</a>
        <a className="ele"href="#">Contact Us</a>
        <span></span>
        <button className='btn px-4 py-2 bg-green-500 text-white'>Get Started</button>
        <button className='btn  px-4 py-2 bg-green-500 text-white'>Login</button>
      
    </div>
      </div>
        
    </div>
  );
}

export default Navbar;
