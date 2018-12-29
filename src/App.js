import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// import logo from './logo.svg';
import { TelaCadastro } from './components/tela-cadastro/TelaCadastro';
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import CommentList from './components/comment-list/CommentList'

class App extends Component {
    render() {
        return (
            <div className="homePage">
                <header>
                    <Navbar />
                </header>
                <div>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        <Route path="/signup" exact component={TelaCadastro} />
                        <Route path="/services" exact component={Services} />
                        <Route path="/portfolio" exact component={Portfolio} />
                    </Switch>
                </div>
                <footer className="footer">
                <CommentList />
                </footer>
            </div>
        );
    }
}

export default App;
