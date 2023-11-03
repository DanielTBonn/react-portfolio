import Navigation from './Navigation';

export default function Header({currentPage, handlePageChange}) {
    return (
        <header>
            <h1 className="fullname">Daniel Bonn</h1>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    );
}