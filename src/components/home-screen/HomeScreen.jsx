import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from '../header/navbar/Navbar';
import Home from '../body/home/Home';
import About from '../body/about/About';
import Services from '../body/services/Services';
import Portfolio from '../body/portfolio/Portfolio';
import CommentList from '../footer/comment-list/CommentList';
import FormAuth from '../footer/form/FormAuth'

export default function HomeScreen() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <div>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/about" exact component={About} />
                    {/* <Route path="/signup" exact component={TelaCadastro} /> */}
                    <Route path="/services" exact component={Services} />
                    <Route path="/portfolio" exact component={Portfolio} />
                </Switch>
            </div>
            <footer className="footer">
                <CommentList />
                <br />
                <FormAuth />
            </footer>
        </div>
    );
}
