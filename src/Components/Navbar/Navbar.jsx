import React, { useEffect, useState } from 'react';
import { TbGridDots } from "react-icons/tb";
import { IoMdCloseCircle } from "react-icons/io";

import "./Navbar.css"
const Navbar = () => {
  const [active, setActive] = useState('navBar');
  const [shouldJump, setShouldJump]=useState(false);

  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  const removeNav = () => {
    setActive('navBar');
  };

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
      
      <div className={`${active} navbar`} >
      <div className="navbar-ele">
        
        <a onClick={removeNav} className="ele">Home</a>
        
        <a onClick={removeNav} className="ele" href="#">Features</a>
        <a onClick={removeNav} className="ele" href="#">Diet Plan</a>
        <a onClick={removeNav} className="ele" href="#">Workout Plans</a>
        <a onClick={removeNav} className="ele" href="#">Blogs</a>
        <a onClick={removeNav} className="ele" href="#">FAQs</a>
        <a onClick={removeNav} className="ele"href="#">Contact Us</a>
        <span></span>
        <button className='btn px-4 py-2 bg-green-500 text-white'>Get Started</button>
        <button className='btn  px-4 py-2 bg-green-500 text-white'>Login</button>
        
        
    </div>
    <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className='icon' />
        </div>
      </div>
        
    </div>
  );
}

export default Navbar;
