import React from 'react';
//import './portfolio.css';
import PortfolioGrid from '../components/PortfolioGrid';

const Portfolio = () => {
  const projects = [
    { id: 1, name: 'Luxury Villa', image: '/images/villa.jpg' },
    { id: 2, name: 'Modern Office', image: '/images/office.jpg' },
    // Add more projects
  ];

  return (
    <section className="portfolio">
      <h1>Our Portfolio</h1>
      <PortfolioGrid projects={projects} />
    </section>
  );
};

export default Portfolio;