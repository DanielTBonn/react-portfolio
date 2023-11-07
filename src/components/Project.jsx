export default function Project() {
    const projects = [
    {   
        name: 'techstop',
        image: '/assets/images/techstop-website.png',
        link: 'https://github.com/DanielTBonn/techstop-ecommerce',
        deployed: 'https://pacific-fortress-50526-9193db3a3754.herokuapp.com/'
    }, 
    {
        name: 'techblog',
        image: '/assets/images/MVC-tech-blog.png',
        link: 'https://github.com/DanielTBonn/tech-blog',
        deployed: 'https://gentle-retreat-99596-ab9698174a1f.herokuapp.com/'
    },
    {
        name: 'jate',
        image: '/assets/images/jate.png',
        link: 'https://github.com/DanielTBonn/pwa-text-editor',
        deployed: 'https://damp-peak-19637-7250a967b51c.herokuapp.com/'
    },  
    { 
        name: 'employee-tracker',
        image: '/assets/images/employee-tracker-pic.png',
        link: 'https://github.com/DanielTBonn/employee-tracker',
        deployed: 'https://github.com/DanielTBonn/employee-tracker'
    }, 
    { 
        name: 'weather-app',
        image: '/assets/images/weather-application-pic.png',
        link: 'https://github.com/DanielTBonn/weather-application',
        deployed: 'https://danieltbonn.github.io/weather-application/'
    }, 
    { 
        name: 'joke-gen',
        image: '/assets/images/joke-gen-webpage.png',
        link: 'https://github.com/DanielTBonn/joke-generator',
        deployed: 'https://danieltbonn.github.io/joke-generator/'
    }
]

    return ( 
        <div className="project-item mx-auto max-w-5xl mt-10">
            <div className="project-container grid grid-cols-2 grid-rows-3 gap-5">
                {projects.map((project) => (
                    
                <div className="project-image" key={project.name}>
                    <label htmlFor={project.name} className="block text-sm font-semibold leading-6 text-gray-900">
                        <a href={project.link} target="_blank" className="focus:text-violet-900">Click here for the github link for {project.name}</a>.
                    </label>
                    <a href={project.deployed} target="_blank" className="object-cover" key={project.name} name={project.name}><img src={project.image} className="rounded-lg object-cover"></img></a>
                </div>
                ))}    
            </div>
        </div>
    );
}