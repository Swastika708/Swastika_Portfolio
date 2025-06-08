import React from 'react';
import './Project.css';

const projects = [
  {
    image: '/images/project1.png',
    title: 'ToDo List',
    link: 'https://github.com/Swastika708/To-do-list'
  },
  {
    image: '/images/project2.png',
    title: 'Stack Game',
    link: 'https://github.com/Swastika708/stack_game'
  },
  {
    image: '/images/project3.png',
    title: 'Brain Tumour Detection',
    link: 'https://github.com/Swastika708/Brain-Tumour'
  }
];

const Project = () => {
  return (
    <div id='mywork' className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
      </div>

      <div className="mywork-container">
        {projects.map((project, index) => (
          <a
            href={project.link}
            className="mywork-card"
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="card-image-wrapper">
              <img src={project.image} alt={project.title} />
              <div className="overlay">View on GitHub</div>
            </div>
            <div className="card-title">{project.title}</div>
          </a>
        ))}
      </div>

      <div className="mywork-action"><a href="https://github.com/Swastika708" target="_blank" rel="noopener noreferrer">
        <div className="mywork-more">Show More</div>
  </a>
</div>

    </div>
  );
};

export default Project;
