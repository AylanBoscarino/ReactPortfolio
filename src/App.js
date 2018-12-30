import React, { Component } from 'react';

import './App.css';
import HomeScreen from './components/home-screen/HomeScreen';

class App extends Component {
    render() {
        return (
            <div className="homePage">
                <HomeScreen />
            </div>
        );
    }
}

export default App;
