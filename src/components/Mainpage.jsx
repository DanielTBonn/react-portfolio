import Navigation from './Navigation.jsx';

function Mainpage() {
    return (
        <div> 
            <Navigation currentPage={'Mainpage'} handlePageChange={null} />
            <p>Hello World!</p>
        </div>
    );
}

export default Mainpage;