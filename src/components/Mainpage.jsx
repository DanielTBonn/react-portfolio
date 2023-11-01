import Navigation from './Navigation';

export default function Mainpage() {
    return (
        <div> 
            <Navigation currentPage={'Mainpage'} handlePageChange={null} />
            <p>Hello World!</p>
        </div>
    );
}
