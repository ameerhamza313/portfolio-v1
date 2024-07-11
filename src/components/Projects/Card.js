import React from "react";

const Card = ({ project }) => {
  return (
    <div className='box btn_shadow'>
      <div className='img'>
        <img src={project.image} alt={project.name} />
      </div>
      <div className='title'>
        <h2 className='uppercase'>{project.name}</h2>
        <p className='description'>{project.description}</p>
        <div className='technologies'>
          <strong>Technologies:</strong>{" "}
          {project.technologies.join(", ")}
        </div>
        <div className='buttons'>
          <button
            className='btn btn-shadow'
            onClick={() => window.open(project.githubLink, "_blank")}
          >
            GitHub
          </button>
          <button
            className='btn btn-shadow'
            onClick={() => window.open(project.liveDemoLink, "_blank")}
          >
            Live Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
