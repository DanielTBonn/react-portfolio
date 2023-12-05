export default function About() {
    return (
        <div className="px-6 py-24 sm:py-32 lg:px-8 about-section ">
            <h2 className="font-bold text-3xl about-header mx-auto max-w-6xl mb-10">About Me</h2>
            <div className="about-body grid grid-cols-3 gap-5 mx-auto max-w-5xl">
                <div className="col-span-1 max-w-lg">
                    <img src="/assets/images/mountainpfp.jpeg" className="rounded-xl"></img> 
                </div>
                <div className="text-lg col-span-2">
                    <p className="about-p grid-flow-row">
                        As both a University of Texas at Austin alumni of Physics and recent graduate of their full stack bootcamp I have built up a strong foundation in my ability to reason and a large skillset tailored to modern web development.
                        With 2 years of prior experience learning computer science on my own, the knowledge I acquired helped me to create robust and fully functional web applications. Curiousity drives me to seek answers while
                        tinkering with features and development, and my attention to detail compels me to organize my code to fit SOLID principles. My commitment to the full stack bootcamp not only allowed me to maintain perfect grades, but also grow as a 
                        leader and a team player during group projects.
                    </p>
                </div>
                <div className="text-lg col-span-3">
                    <p className="about-p">
                        My history with programming drew me to web development since its a great way to work on complex problems, express creativity, and get familiar with some of the most exciting cutting edge technology used in today's industry. 
                        A passion for computer science makes backend development seems like a great way to build that knowledge while learning the architecture that props up the server side. Frontend development is also incredibly rewarding, being able to design and
                        then see your vision come to life on the screen inspires motivation for the builder in me.
                        My journey to becoming a full fledge developer has been an exciting experience, filled with the newest tools and technologies, and
                        guided by some of the best mentors out there. I am eager to share my work, please take a look at some of my latest projects in the portfolio section. 
                    </p>
                </div>
                <div>
                    <p>

                    </p>
                </div>
            </div>
        </div>
    );
}

