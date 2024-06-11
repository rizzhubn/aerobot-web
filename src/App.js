import React from 'react';

import BatterySection from './pages/BatterySection';
import Propeller from './pages/propeller';
import Drone from './pages/Drone';
import Navbar from './pages/navbar';
import './App.css';

function App() {
    return (
        <div className="App">
            <Drone/>
            <BatterySection />
            <Propeller />
        </div>
    );
}

export default App;
