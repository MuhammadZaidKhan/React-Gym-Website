import React from 'react';
import Navbar from './Navbar';
import Main from "./Main";
import Rectangle from "./Rectangle"
import backgroundImage from '../Assets/image 6.png';
// import Image from '../Assets/Div.png';
import Section from './Section';
import Section2 from './Section2';
import Section3 from './Section3';

const Home = () => {
    return (
        <div className="relative" style={{ overflowX: 'hidden' }}>
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
            <Section2 />
            <Section3 />
        </div>
    );
};

export default Home;
