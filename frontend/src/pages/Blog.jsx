import React from 'react';

const Blog = () => {
  return (
    <section style={styles.blog}>
      <h1 style={styles.title}>Our Blog</h1>
      <p style={styles.description}>
        Check out the latest trends and tips in interior design.
      </p>
      {/* Add blog posts here */}
    </section>
  );
};

// Inline CSS styles
const styles = {
  blog: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '50px 20px',
    backgroundColor: '#f4f4f4', // Light gray background for the blog section
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1.5rem',
    fontWeight: '300',
    color: '#555',
    maxWidth: '800px',
    lineHeight: '1.6',
    marginBottom: '40px', // Space between the description and the blog posts
  },
  '@media (max-width: 768px)': {
    title: {
      fontSize: '2.5rem',
    },
    description: {
      fontSize: '1.3rem',
      padding: '0 15px', // Adjust padding for smaller screens
    },
  },
  '@media (max-width: 480px)': {
    title: {
      fontSize: '2rem',
    },
    description: {
      fontSize: '1.1rem',
    },
  },
};

export default Blog;
