import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
