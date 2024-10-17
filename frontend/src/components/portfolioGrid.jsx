import React from 'react';
// import './portfolioGrid.css';

const PortfolioGrid = ({ projects }) => {
  return (
    <section style={styles.portfolioGrid}>
      {projects.map((project) => (
        <div key={project.id} style={styles.portfolioItem}>
          <img src={project.image} alt={project.name} style={styles.image} />
          <h3 style={styles.projectName}>{project.name}</h3>
        </div>
      ))}
    </section>
  );
};

// Inline CSS styles for PortfolioGrid component
const styles = {
  portfolioGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', // Responsive grid
    gap: '20px', // Space between items
    padding: '20px', // Padding around the grid
  },
  portfolioItem: {
    backgroundColor: '#fff', // White background for items
    border: '1px solid #ddd', // Light border for separation
    borderRadius: '8px', // Rounded corners
    overflow: 'hidden', // Ensure content doesn't overflow
    textAlign: 'center', // Center align text
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    transition: 'transform 0.2s', // Animation on hover
  },
  image: {
    width: '100%', // Make images responsive
    height: 'auto', // Maintain aspect ratio
    display: 'block', // Remove bottom space in images
  },
  projectName: {
    padding: '10px', // Padding around project name
    fontSize: '1.2rem', // Font size for project name
    color: '#333', // Dark color for text
  },
};

// Hover effect for portfolio items
const hoverEffect = `
.portfolio-item:hover {
  transform: scale(1.05); // Scale up on hover
}
`;

// Add hover effect to styles
const styleSheet = document.createElement("style");
//styleSheet.type = "text/css";
styleSheet.innerText = hoverEffect;
document.head.appendChild(styleSheet);

export default PortfolioGrid;
