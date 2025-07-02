import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaDatabase, FaPython, FaCuttlefish, FaJsSquare } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiTypescript, SiCplusplus } from 'react-icons/si';
import { MdDesignServices } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';

const skills = [
    { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-[#000000]" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-[#E34F26]" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: 'GitHub', icon: <FaGithub className="text-[#181717]" /> },
];

// Each extra skill is now individual with its own icon
const extraSkills = [
    { label: 'DSA', icon: <FaDatabase className="text-3xl text-[#6366F1] mb-2" /> },
    { label: 'OOP Concepts', icon: <FaDatabase className="text-3xl text-[#6366F1] mb-2" /> },
    { label: 'CN', icon: <FaDatabase className="text-3xl text-[#6366F1] mb-2" /> },
    { label: 'DBMS (SQL)', icon: <FaDatabase className="text-3xl text-[#6366F1] mb-2" /> },
    { label: 'Python', icon: <FaPython className="text-3xl text-[#3776AB] mb-2" /> },
    { label: 'C', icon: <FaCuttlefish className="text-3xl text-[#00599C] mb-2" /> },
    { label: 'C++', icon: <SiCplusplus className="text-3xl text-[#00599C] mb-2" /> },
    { label: 'HTML', icon: <FaHtml5 className="text-3xl text-[#E34F26] mb-2" /> },
    { label: 'CSS', icon: <FaCss3Alt className="text-3xl text-[#1572B6] mb-2" /> },
    { label: 'JavaScript', icon: <FaJsSquare className="text-3xl text-[#F7DF1E] mb-2" /> },
    { label: 'React', icon: <FaReact className="text-3xl text-[#61DAFB] mb-2" /> }
];

const softSkills = [
    { label: 'UI/UX Design', icon: <MdDesignServices className="text-3xl text-[#8B5CF6] mb-2" /> },
    { label: 'Communication, Leadership', icon: <BsFillPeopleFill className="text-3xl text-[#8B5CF6] mb-2" /> }
];

const Skills = () => (
    <section id="skills" className="my-24 max-w-5xl mx-auto animate-fadeInUp">
        <h2 className="text-3xl font-bold text-purple-800 dark:text-black mb-8 text-center">
            Skills
        </h2>
        {/* Parallel grid for skills and extraSkills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Main Skills */}
            <div>
                <h3 className="text-xl font-semibold text-purple-700 dark:text-black mb-4 text-center">Core Skills</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 justify-items-center">
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className="flex flex-col items-center group transition-transform duration-300 hover:scale-105"
                        >
                            <div className="text-5xl mb-2 group-hover:animate-bounce">
                                {skill.icon}
                            </div>
                            <span className="text-lg font-medium text-gray-700 dark:text-black text-center">
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            {/* Extra Skills */}
            <div>
                <h3 className="text-xl font-semibold text-purple-700 dark:text-black mb-4 text-center">Extra Skills</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 justify-items-center">
                    {extraSkills.map((item) => (
                        <div
                            key={item.label}
                            className="flex flex-col items-center group transition-transform duration-300 hover:scale-105"
                        >
                            <div className="mb-2 text-5xl group-hover:animate-bounce">{item.icon}</div>
                            <span className="text-lg font-medium text-gray-700 dark:text-black text-center">{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        {/* Soft Skills */}
        <div>
            <h3 className="text-xl font-semibold text-purple-700 dark:text-black mb-4 text-center">
                Soft Skills
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 justify-items-center">
                {softSkills.map((item) => (
                    <div
                        key={item.label}
                        className="flex flex-col items-center group transition-transform duration-300 hover:scale-105"
                    >
                        <div className="mb-2 text-5xl group-hover:animate-bounce">{item.icon}</div>
                        <span className="text-lg font-medium text-gray-700 dark:text-black text-center">{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;