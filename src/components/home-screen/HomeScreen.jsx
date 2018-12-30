import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from '../header/navbar/Navbar';
import Home from '../body/home/Home';
import About from '../body/about/About';
import Services from '../body/services/Services';
import Portfolio from '../body/portfolio/Portfolio';
import FooterScreen from '../footer/footer-screen/FooterScreen'

export default function HomeScreen() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <div className="body">
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    <Route path="/services" exact component={Services} />
                    <Route path="/portfolio" exact component={Portfolio} />
                </Switch>
            </div>
            <footer className="footer">
                <FooterScreen isLoged={false}/>
            </footer>
        </div>
    );
}
