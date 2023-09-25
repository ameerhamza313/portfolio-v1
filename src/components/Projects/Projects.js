import React from "react"
import "./Projects.css"
import Card from "./Card"
import Portfolio_data from "./Projects_data"

const Projects = () => {
  return (
    <section className='Portfolio top' id='projects'>
      <div className='container'>
        <div className='heading text-center'>
          <h4>SOME OF MY WORK</h4>
          <h1>My Projects</h1>
        </div>

        <div className='content grid'>
          {Portfolio_data.map((project, index) => (
            <Card key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects
