function Skills() {
    return (
        <div className="flex flex-col md:flex-row">
            <div id='skills' className="md:w-1/2 p-5 id='skills'">
                <h2 className="font-extrabold text-5xl mb-4">Professional Skills</h2>
                <p>
                    I specialize in developing and customizing websites and applications using Odoo, a powerful open-source platform. 
                    With expertise in HTML5, CSS3, JavaScript, and UX/UI, I create responsive, user-friendly solutions that are 
                    seamlessly integrated into Odoo's ecosystem. 
                    My attention to detail and focus on functionality ensure that each project meets high standards of performance and design,
                    providing businesses with efficient and scalable solutions.
                </p>
                <div className="py-5">
                    <div className="flex flex-col">
                        {[
                            { skill: "HTML5", percentage: 80 },
                            { skill: "CSS3", percentage: 85 },
                            { skill: "JavaScript", percentage: 80 },
                            { skill: "UX/UI", percentage: 85 },
                        ].map(({ skill, percentage }) => (
                            <div key={skill} className="mb-4">
                                <div className="flex justify-between">
                                    <span className="font-bold">{skill}</span>
                                    <span className="font-bold">{percentage}%</span>
                                </div>
                                <div className="bg-gray-200 h-4 rounded-full">
                                    <div
                                        className="bg-blue-500 h-full rounded-full"
                                        style={{ width: `${percentage}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 p-5 flex justify-center items-center">
                <img 
                    className="max-w-full h-auto"
                    src="https://files.oaiusercontent.com/file-CzWLycvf4YwDEBBZIHP1u6gY?se=2024-10-17T13%3A12%3A10Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D286539dc-9571-4678-a8c1-1bd1d62b1386.webp&sig=%2Bl8e/6ir4W0uV8h5pq2MptKkZITMXYypQ0J/9b%2Bg%2BeI%3D"
                    alt="Web Development"
                />
            </div>
        </div>
    );
}

export default Skills;
