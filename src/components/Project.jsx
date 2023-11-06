export default function Project() {
    const projects = [
    { 
        image: '/public/assets/images/techstop-website.png',
        link: 'https://github.com/DanielTBonn/techstop-ecommerce'
    }, 
    {
        image: '/public/assets/images/MVC-tech-blog.png',
        link: 'https://github.com/DanielTBonn/tech-blog'
    }, 
    { 
        image: '/public/assets/images/employee-tracker-pic.png',
        link: 'https://github.com/DanielTBonn/employee-tracker'
    }, 
    { 
        image: '/public/assets/images/weather-application-pic.png',
        link: 'https://github.com/DanielTBonn/weather-application'
    }, 
    { 
        image: '/public/assets/images/joke-gen-webpage.png',
        link: 'https://github.com/DanielTBonn/joke-generator'
    }
]

    return ( 
        <div className="project-item mx-auto max-w-5xl">
            <div className="project-container grid grid-cols-2 grid-rows-3 gap-5">
                {projects.map((project) => (
                <div className="project-image">
                    <a href={project.link} target="_blank"><img src={project.image}></img></a>
                </div>
                ))}    
            </div>
        </div>
    );
}