import React from 'react'
import "./Cards.css"
import Aos from 'aos';
import 'aos/dist/aos.css'
const Cards = () => {
    const data=[
        {
           
        }
    ]
  return (
    
    <div >
        <div className="heading-container">
         <h1 data-aos='fade-right'>Discover Our Website's Key Features</h1>
         </div>
      <div   className="card-container">
        <div data-aos='fade-up'   className="cards">
            <div  data-aos='fade-right' className="img-div">
            <img src="https://www.shutterstock.com/image-vector/woman-running-on-electric-treadmill-260nw-1074908819.jpg" alt="" />
            </div>
            <div  data-aos='fade-left' className="content">
            <div className="cont-div">
            <h3>hello</h3>
            <p>see mww</p>
            
            </div>
            <div className="b">
            <button>know more</button>
            </div>
            </div>

        </div>
        <div data-aos='fade-up' className="cards">
            <div data-aos='fade-right' className="img-div">
            <img src="https://m.media-amazon.com/images/I/41pZ-M7z2ZL._AC_UF1000,1000_QL80_.jpg" alt="" />
            </div>
            <div data-aos='fade-left' className="content">
            <div className="cont-div">
            <h3>hello</h3>
            <p>see mww</p>
            
            </div>
            <div className="b">
            <button>know more</button>
            </div>
            </div>

        </div>
        
        
        
        
        <div data-aos='fade-up' className="cards">
            <div data-aos='fade-right' className="img-div">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRthorLYBpcSRyCPm1Eoe-SmNM-5ZYF9kOCV7kmGPzRFxGYO-m-sueKYm530T6qcZd0DZY&usqp=CAU" alt="" />
            </div>
            <div data-aos='fade-left' className="content">
            <div className="cont-div">
            <h3>hello</h3>
            <p>see mww</p>
            
            </div>
            <div className="b">
            <button>know more</button>
            </div>
            </div>

        </div>
        <div data-aos='fade-up' className="cards">
            <div data-aos='fade-right' className="img-div">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7t1_hCIfPAMxtuLzjJK5c-G9QgINR758O3w&s" alt="" />
            </div>
            <div data-aos='fade-left' className="content">
            <div className="cont-div">
            <h3>hello</h3>
            <p>see mww</p>
            
            </div>
            <div className="b">
            <button>know more</button>
            </div>
            </div>
           
        </div>
        
        
      </div>

    </div>
  )
}

export default Cards
