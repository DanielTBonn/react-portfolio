import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/pages/about';
import Resume from './components/pages/resume';

function App() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About'){
            return <About />
        }
        if (currentPage === 'Resume'){
            return <Resume />
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            <main className="main-page">{renderPage()}</main>
        </div>
    );
}

export default App;