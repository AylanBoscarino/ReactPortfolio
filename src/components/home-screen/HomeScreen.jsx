import React from 'react';
import { Element } from 'react-scroll';

import Navbar from '../header/navbar/Navbar';
import Home from '../body/home/Home';
import About from '../body/about/About';
import Services from '../body/services/Services';
import Portfolio from '../body/portfolio/Portfolio';
import FooterScreen from '../footer/footer-screen/FooterScreen';

export default function HomeScreen() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <div className="body">
                <Element name="home">
                    <Home />
                </Element>
                <Element name="about">
                    <About />
                </Element>
                <Element name="services">
                    <Services />
                </Element>
                <Element name="portfolio">
                    <Portfolio />
                </Element>
            </div>
            <footer className="footer">
                <Element name="comments">
                <FooterScreen isLoged={false} />
                </Element>
            </footer>
        </div>
    );
}
