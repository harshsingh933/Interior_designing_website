import React from 'react';
import { useParams } from 'react-router-dom';
//import './singleProject.css';

const SingleProject = () => {
  const { id } = useParams();

  // Fetch project details based on the id
  const project = {
    name: 'Luxury Villa',
    description: 'A modern luxury villa design with a focus on elegance and comfort.',
    image: '/images/villa.jpg',
  };

  return (
    <section className="single-project">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>{project.description}</p>
    </section>
  );
};

export default SingleProject;
