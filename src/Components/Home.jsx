import React from 'react';
import Navbar from './Navbar';
import Main from "./Main";
import Rectangle from "./Rectangle"
import backgroundImage from '../Assets/image 6.png';
import Image from '../Assets/Div.png';
import Section from './Section';

const Home = () => {
    return (
        <div className="relative">
            <img
                src={backgroundImage}
                alt="Background"
                // Set the full viewport dimensions to ensure the image covers the entire area
                style={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: -1 }}
            />
            <Navbar />
            <Main />
            <Rectangle />
            <Section />
        </div>
    );
};

export default Home;
