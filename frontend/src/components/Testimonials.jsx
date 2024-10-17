import React from 'react';
// import './testimonials.css';

const Testimonials = () => {
  return (
    <section style={styles.testimonials}>
      <h2 style={styles.title}>What Our Clients Say</h2>
      <div style={styles.testimonialCard}>
        <p style={styles.quote}> </p>
        <h4 style={styles.clientName}>Client Name</h4>
      </div>
    </section>
  );
};

// Inline CSS styles for Testimonials component
const styles = {
  testimonials: {
    padding: '40px', // Padding around the section
    backgroundColor: '#f9f9f9', // Light background for contrast
    textAlign: 'center', // Center align text
  },
  title: {
    fontSize: '2rem', // Font size for the title
    marginBottom: '20px', // Margin below the title
    color: '#333', // Dark color for text
  },
  testimonialCard: {
    backgroundColor: '#fff', // White background for the card
    border: '1px solid #ddd', // Light border for separation
    borderRadius: '8px', // Rounded corners
    padding: '20px', // Padding inside the card
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    margin: '0 auto', // Center the card horizontally
    maxWidth: '600px', // Max width for the card
  },
  quote: {
    fontSize: '1.25rem', // Font size for the quote
    color: '#666', // Lighter color for description
    marginBottom: '10px', // Margin below the quote
  },
  clientName: {
    fontSize: '1rem', // Font size for client name
    color: '#333', // Dark color for name
    fontStyle: 'italic', // Italic style for client name
  },
};

export default Testimonials;
