import React from 'react';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Technologies from '../Components/Technologies';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import BackToTop from '../Components/BackToTop';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Technologies></Technologies>
            <Projects></Projects>
            <Contact></Contact>
            <BackToTop></BackToTop>
        </div>
    );
};

export default Home;