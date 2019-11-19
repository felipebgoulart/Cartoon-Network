import React from 'react';

import './styles.css';

import Header from '../../components/Header';
import Schedule from '../../components/Schedule';
import Slider from '../../components/Slider';
import Footer from '../../components/Footer';

export default function Programacao() {
    
    return(
        <div>
            
            <Header />

            <div className="container">
                <Schedule />

                <div className="slider-container mt-5">
                        <Slider />
                </div>
                <div className="blueDiv"></div>
                <div className="yellowDiv"></div>

            </div>

            <Footer />

        </div>
    )
};