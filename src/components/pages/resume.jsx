const softwareSkills = ["Javascript", "Python", "React", "Express", "Node", "MongoDB", "SQL", "Progressive Web Apps", "Bootstrap", "Tailwinds", "HTML", "CSS", ]
const mathSkills = ['Probability and Statistics', 'Calculus', 'Linear Algebra', 'Matrixes and Matricies']
export default function Resume() {
    return (
        <div className="resume-section">
            <h1 className="resume-header text-3xl font-bold  mx-auto max-w-6xl my-10">Skills</h1>
            <div className="grid grid-cols-2 list-section mx-auto max-w-2xl">
                <ul className="list-ele">
                {softwareSkills.map((skill) => (
                    <li className="list-item">{skill}</li>
                    ))}
                </ul>
                <ul className="list-ele">
                {mathSkills.map((skill) => (
                    <li className="list-item">{skill}</li>
                    ))}
                </ul>
                </div>
            </div>
    );
}