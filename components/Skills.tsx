import React from 'react';

const Skills = () => {
    const skills = [
        'JavaScript',
        'TypeScript',
        'React',
        'Node.js',
        'CSS',
        'Tailwind CSS',
        'Git',
        'GraphQL',
    ];

    return (
        <section className="skills">
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
            <ul className="list-disc list-inside">
                {skills.map((skill, index) => (
                    <li key={index} className="text-lg">{skill}</li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;