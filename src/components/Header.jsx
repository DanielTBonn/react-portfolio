import Navigation from './Navigation';

export default function Header({currentPage, handlePageChange}) {
    return (
        <header>
            <p className="text-3xl font-bold underline fullname">Daniel Bonn</p>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    );
}