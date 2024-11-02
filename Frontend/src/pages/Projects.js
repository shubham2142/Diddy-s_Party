import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch projects from your API
        const fetchProjects = async () => {
            const response = await fetch('/api/projects');
            const data = await response.json();
            setProjects(data);
        };
        fetchProjects();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl mb-4">Projects</h1>
            <div className="flex flex-wrap">
                {projects.map(project => (
                    <ProjectCard key={project._id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
