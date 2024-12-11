import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Slider = () => {
  const slides = [
    {
      image: "https://c4.wallpaperflare.com/wallpaper/1023/684/981/fitness-sportswear-gym-motivation-wallpaper-preview.jpg",
      text: "Welcome to our website!",
    },
    {
      image: "https://img.freepik.com/free-photo/view-assortment-nourishing-food_23-2148484683.jpg",
      text: "Get your customised meal plans.",
    },
    {
      image: "https://blog.infs.com/wp-content/uploads/2024/05/how-to-start-a-healthy-lifestyle-scaled-1.jpg",
      text: "Scheduled your workout plans",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
 useEffect(()=>{
    Aos.init({duration:2000});
 },[]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div style={{ marginTop:"100px", textAlign: "center", position: "relative", width:"95%",
    height:'', margin:" 40px auto " }}>
      <div style={{ position: "relative" }}>
        
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].text}
          style={{ width: "100%", height: "580px", borderRadius: "15px", objectFit:"cover" }}
        />

        
        <div
        data-aos='fade-up'
          style={{

            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#fff",
            backgroundColor: "#44bae4",
            padding: "20px 30px",
            borderRadius: "10px",
            textAlign: "center",
            fontSize: "30px",
            fontWeight:"500"
          }}
        >
          {slides[currentIndex].text}
        </div>
      </div>

      
      <button
        onClick={() => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          padding: "10px",
          cursor: "pointer",
          borderRadius: "50%",
        }}
      >
        &#8592;
      </button>
      <button
        onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          background: "rgba(0,0,0,0.5)",
          color: "#fff",
          border: "none",
          padding: "10px",
          cursor: "pointer",
          borderRadius: "50%",
        }}
      >
        &#8594;
      </button>
    </div>
  );
};

export default Slider;
