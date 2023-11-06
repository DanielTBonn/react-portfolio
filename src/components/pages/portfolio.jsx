import Project from '../Project';

export default function Portfolio() {

    return (
        <div className="portfolio-section">
            <h1 className="portfolio-header text-3xl font-bold mx-auto max-w-6xl my-10">Portfolio</h1>
            <div className="portfolio-body">
                    <Project />
            </div>    
        </div>
    );
}