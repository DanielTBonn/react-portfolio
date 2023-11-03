export default function Project() {
    const items = ['Item 1', 'Item 2', 'Item 3']

    return ( 
        <div className="project-item">
            <div className="project-container">
                <div className="project-image">
                {items.map((item) => (
                    <p>{item}</p>
                ))}    
                </div>
            </div>
        </div>
    );
}