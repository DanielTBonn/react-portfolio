import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/pages/about';

function App() {
    return (
        <div>
            <Header />
            <About />
        </div>
    );
}

export default App;