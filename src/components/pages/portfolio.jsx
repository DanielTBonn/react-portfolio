import Project from '../Project';

export default function Portfolio() {

    return (
        <div className="portfolio-section px-6 py-24 sm:py-32 lg:px-8">
            <h1 className="portfolio-header text-3xl font-bold mx-auto max-w-6xl">Portfolio</h1>
            <div className="portfolio-body">
                    <Project />
            </div>    
        </div>
    );
}