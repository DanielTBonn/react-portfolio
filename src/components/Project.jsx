export default function Project() {
    const projects = [
    {   
        name: 'techstop',
        image: '/assets/images/techstop-website.png',
        link: 'https://github.com/DanielTBonn/techstop-ecommerce'
    }, 
    {
        name: 'techblog',
        image: '/assets/images/MVC-tech-blog.png',
        link: 'https://github.com/DanielTBonn/tech-blog'
    },
    {
        name: 'jate',
        image: '/assets/images/jate.png',
        link: 'https://github.com/DanielTBonn/pwa-text-editor'
    },  
    { 
        name: 'employee-tracker',
        image: '/assets/images/employee-tracker-pic.png',
        link: 'https://github.com/DanielTBonn/employee-tracker'
    }, 
    { 
        name: 'weather-app',
        image: '/assets/images/weather-application-pic.png',
        link: 'https://github.com/DanielTBonn/weather-application'
    }, 
    { 
        name: 'joke-gen',
        image: '/assets/images/joke-gen-webpage.png',
        link: 'https://github.com/DanielTBonn/joke-generator'
    }
]

    return ( 
        <div className="project-item mx-auto max-w-5xl">
            <div className="project-container grid grid-cols-2 grid-rows-3 gap-5">
                {projects.map((project) => (
                <div className="project-image" key={project.name}>
                    <a href={project.link} target="_blank" className="object-cover" key={project.name}><img src={project.image} className="rounded-lg object-cover"></img></a>
                </div>
                ))}    
            </div>
        </div>
    );
}