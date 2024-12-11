import React from 'react';
import TestimonialCard from './Testimonialcard'
import './Testimonials.css';

const testimonialsData = [
    {
        id: 1,
        name: 'Emily Jules',
        profession: 'Doctor',
        image: 'https://img.freepik.com/premium-photo/portrait-beautiful-woman-red-dress_63239-2481.jpg',
        socials: {
            facebook: 'https://facebook.com',
            instagram: 'https://instagram.com',
            twitter: 'https://twitter.com',
        },
    },
    {
        id: 2,
        name: 'John Doe',
        profession: 'Engineer',
        image: 'https://www.shutterstock.com/image-photo/portrait-positive-young-bearded-man-260nw-2463329591.jpg',
        socials: {
            facebook: 'https://facebook.com/johndoe',
            instagram: 'https://instagram.com/johndoe',
            twitter: 'https://twitter.com/johndoe',
        },
    },
    {
        id: 2,
        name: 'John Doe',
        profession: 'Engineer',
        image: 'https://img.freepik.com/premium-photo/happy-young-man-sitting-chair_23-2149320754.jpg',
        socials: {
            facebook: 'https://facebook.com/johndoe',
            instagram: 'https://instagram.com/johndoe',
            twitter: 'https://twitter.com/johndoe',
        },
    },
    {
        id: 2,
        name: 'John Doe',
        profession: 'Engineer',
        image: 'https://img.freepik.com/premium-photo/happy-young-man-sitting-chair_23-2149320754.jpg',
        socials: {
            facebook: 'https://facebook.com/johndoe',
            instagram: 'https://instagram.com/johndoe',
            twitter: 'https://twitter.com/johndoe',
        },
    },
    // Add more testimonials as needed
];

const Testimonials = () => {
    return (
        <div  className="testi-container">
            <div  data-aos='fade-right' className="testi-head">
                <h2>What our users say</h2>
            </div>
            <div  data-aos='fade-up' className="testi-cards">
                {testimonialsData.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} {...testimonial} />
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
