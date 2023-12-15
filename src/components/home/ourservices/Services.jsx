import React from 'react';
import ImageCarousel from './Item';
import '../recent/recent.css';
import Heading from '../../common/Heading';
import { offer } from "../../data/Data"

const Services = () => {
    const images = [
        '../images/list/p-5.png',
        '../images/list/p-6.png',
        '../images/list/p-4.png',
        '../images/list/p-1.png',
        '../images/list/p-1.png',
        '../images/list/p-1.png',
        '../images/list/p-1.png',
        '../images/list/p-5.png',
        // '../images/list/p-6.png',
        // '../images/list/p-4.png',
        // '../images/list/p-1.png',
        // '../images/list/p-1.png',
        // '../images/list/p-1.png',
        // '../images/list/p-1.png',
        // Add more images as needed
    ];

    return (
        <div>
            <section className='recent padding'>
                <div className='container'>
                    <Heading title='Services We Offer'></Heading>
                    <div style={{marginTop:"16px"}}>
                    <ImageCarousel images={offer} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
