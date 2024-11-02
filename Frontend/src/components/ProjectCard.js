import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="border p-4 m-2 rounded shadow">
            <h2 className="text-xl">{project.title}</h2>
            <p>{project.description}</p>
        </div>
    );
};

export default ProjectCard;
