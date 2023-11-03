import './App.css'
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/about';
import Portfolio from './components/pages/portfolio';
import Contact from './components/pages/contact';
import Resume from './components/pages/resume';

// Main App that will handle page changes and other app logic
function App() {
    // use state for currentPage
    const [currentPage, setCurrentPage] = useState('About');

    // allows us to render a page depending on what the currentPage is set as
    const renderPage = () => {
        if (currentPage === 'About'){
            return <About />
        }
        if (currentPage === 'Portfolio'){
            return <Portfolio />
        }
        if (currentPage === 'Contact'){
            return <Contact />
        }
        return <Resume />

    };

    // accesses currentPage useState to change it to the current desired page
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            <main className="main-page">{renderPage()}</main>
            <Footer />
        </div>
    );
}

export default App;