import React from 'react';
import Navbar from './Navbar';
import Main from "./Main";
import Rectangle from "./Rectangle"
import backgroundImage from '../Assets/image 6.png';
import Section from './Section';
import Section2 from './Section2';
import Footer from './Footer';

// import Footer from './Footer';

const Home = () => {
    return (
        <div className="relative" style={{ overflowX: 'hidden' }}>
            <img
                src={backgroundImage}
                alt="Background"
                style={{ width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0, zIndex: -1 }}
            />
            <Navbar />
            <Main />
            <Rectangle />
            <Section />
            <Section2 />
            <Footer />
        </div>
    );
};

export default Home;
