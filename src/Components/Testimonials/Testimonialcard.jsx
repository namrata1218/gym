import React, { useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import Aos from "aos";
import "aos/dist/aos.css";
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const TestimonialCard = ({ name, profession, image, socials }) => {
    const [isSocialVisible, setIsSocialVisible] = useState(false);

    const toggleSocial = () => {
        setIsSocialVisible((prev) => !prev);
    };

    return (
        
        <div   className="testicard">
            <div className="card-border">
                <img className="card__img" src={image} alt={name} />
            </div>
            <h3 className="card-name">{name}</h3>
            <span className="card-prof">{profession}</span>
            <div className={`card-social ${isSocialVisible ? 'animation' : ''}`}>
                <div className="card-so-control">
                    <div className="card-toggle" onClick={toggleSocial}>
                        < IoAdd />
                    </div>
                    <span className="social-text">My social network</span>
                    <ul className="card-list">
                        <a href={socials.facebook} target="_blank" rel="noreferrer" className="card-link">
                            <FaFacebookF />
                        </a>
                        <a href={socials.instagram} target="_blank" rel="noreferrer" className="card-link">
                            <FaInstagram />
                        </a>
                        <a href={socials.twitter} target="_blank" rel="noreferrer" className="card-link">
                            <FaXTwitter />
                        </a>
                    </ul>
                </div>
            </div>
        </div>
     
    );
};

export default TestimonialCard;
