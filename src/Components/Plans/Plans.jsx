import React from 'react'
import "./Plan.css"
import Aos from "aos";
import "aos/dist/aos.css";
const Plans = () => {
  return (
    <div className='plan'>
        <div data-aos='fade-right' className="plan-heading">
            <h1>How to start our app</h1>
        </div>
      <div className="plan-container">
        
        <div  data-aos='fade-up' className="plan-content">
            <div data-aos='fade-right'  className="image">
            <img src="https://img.freepik.com/free-vector/goals-habits-tracking-app_23-2148623159.jpg" alt="" />
            </div>
            <div  className="text-box ">
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum dolor  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique deserunt minima vitae! sit amet consectetur.nkjdcnkjsnkjandc</p>
            </div>
            
        </div>
        <div data-aos='fade-up' className="plan-content">
        <div className=" box-two">
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum dolor  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique deserunt minima vitae! sit amet consectetur.nkjdcnkjsnkjandc</p>
            </div>
            <div  data-aos='fade-left' className="image">
            <img src="https://cdn.flames.design/project-media/c23957bb-3f5a-4cfd-a88f-db5475ec7bce/original-132b4306-bfca-4bfd-b4f4-d974e3cceb0b.png?aspect_ratio=4:3&width=900&height=600&quality=60" alt="" />
            </div>
            
            
        </div>

        <div data-aos='fade-up' className="plan-content third">
            <div data-aos='fade-right' className="image">
            <img src="https://i.pinimg.com/736x/7a/ac/f5/7aacf54eaef4f086fad918ff8c532961.jpg" alt="" />
            </div>
            <div className="text-box">
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum dolor  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique deserunt minima vitae! sit amet consectetur.nkjdcnkjsnkjandc</p>
            </div>
            
        </div>
          
      </div>
    </div>
  )
}

export default Plans
