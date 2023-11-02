import Navigation from './Navigation';

export default function Header() {
    return (
        <header>
            <h1 class="fullname">Daniel Bonn</h1>
            <Navigation currentPage={'About'} handlePageChange={null} />
        </header>
    );
}