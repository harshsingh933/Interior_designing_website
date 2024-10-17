import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons
import Team from '../pages/Team';

import { Helmet } from 'react-helmet-async';

const AboutUs = () => {
  return (
    <section style={styles.aboutUs}>
      <div style={styles.content}>

      <Helmet>
        <title>Interior Design Services | 9D Vastu Decore</title>
        <meta name="description" content="Discover a wide range of interior design services, from residential to commercial spaces, using Vastu principles." />
        <meta name="keywords" content="interior design services, vastu-based design, residential design, commercial design, affordable interior design, design consultancy" />
      </Helmet>


        <h1 style={styles.title}>About Us</h1>
        <p style={styles.description}>
          Welcome to <strong>9D Vastu Decore</strong> — where creativity meets functionality. Located in the heart of Bihar, we are a premier interior design company dedicated to transforming spaces into stunning reflections of our clients' dreams and lifestyles.
        </p>
        <p style={styles.description}>
          At 9D Vastu Decore, we believe that every space tells a story, and our mission is to craft environments that resonate with beauty and practicality. With a passion for design and an eye for detail, our team of experienced professionals works collaboratively with clients to understand their unique needs and preferences. Whether you’re looking to revamp your home, create a stylish office, or design an inviting commercial space, we offer a comprehensive range of services tailored to your specific requirements.
        </p>
        <h2 style={styles.servicesTitle}>Our Services Include:</h2>
        <ul style={styles.servicesList}>
          <li>Residential Design: From cozy apartments to luxurious villas, we design interiors that enhance comfort and style.</li>
          <li>Commercial Design: We create functional and inspiring spaces for businesses, ensuring a perfect balance between aesthetics and utility.</li>
          <li>Space Planning: Our expert planners optimize space utilization, ensuring every square foot serves a purpose.</li>
          <li>Furniture Design: Custom furniture solutions that blend seamlessly with your interior style.</li>
          <li>Project Management: We oversee every aspect of your project, ensuring timely delivery and exceptional quality.</li>
        </ul>
        <p style={styles.description}>
          With a commitment to excellence and a passion for innovation, we stay ahead of the latest trends and technologies in the design industry. Our goal is not just to meet your expectations but to exceed them, creating spaces that are not only visually stunning but also truly livable.
        </p>
        <p style={styles.description}>
          Join us on a journey of creativity and transformation. Let <strong>9D Vastu Decore</strong> bring your vision to life, crafting spaces that inspire, engage, and enrich your everyday experiences.
        </p>


        <Link to="/team" style={styles.teamLink}>Meet Company Fonders</Link>

      </div>
      <aside style={styles.sidebar}>
        <h3 style={styles.sidebarTitle}></h3>
        <div style={styles.socialIcons}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook style={styles.icon} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter style={styles.icon} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={styles.icon} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={styles.icon} />
          </a>
        </div>
      </aside>
    </section>
  );
};

// Inline CSS styles
const styles = {
  aboutUs: {
    display: 'flex',
    flexDirection: 'column', // Stack on mobile
    padding: '50px 20px',
    backgroundColor: '#f9f9f9',
  },
  content: {
    textAlign: 'center',
    margin: '0 auto',
    paddingBottom: '50px', // Added space for bottom margin on mobile
  },
  sidebar: {
    width: '70px',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    position: 'fixed',
    top: '200px', // Adjust based on your Navbar height
    right: '20px',
  },
  socialIcons: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  icon: {
    fontSize: '30px',
    color: '#555',
    marginBottom: '20px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
    borderBottom: '2px solid #007BFF',
    paddingBottom: '10px',
  },
  servicesTitle: {
    fontSize: '2rem',
    fontWeight: '600',
    color: '#007BFF',
    marginTop: '30px',
  },
  servicesList: {
    listStyleType: 'disc',
    marginLeft: '20px',
    marginBottom: '30px',
    fontSize: '1.2rem',
    color: '#555',
  },
  description: {
    fontSize: '1.2rem',
    color: '#555',
    lineHeight: '1.8',
    margin: '30px 0',
    maxWidth: '800px',
  },
  teamLink: {
    display: 'inline-block',
    marginTop: '20px',
    fontSize: '1.2rem',
    color: '#007BFF',
    textDecoration: 'none',
    borderBottom: '2px solid #007BFF',
  },
  sidebarTitle: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '15px',
  },
};

// Media Queries for Mobile Responsiveness
const mobileStyles = `
  @media (max-width: 768px) {
    section {
      flex-direction: column;
      padding: 20px 10px;
    }
    .content {
      padding-bottom: 20px; // Add padding for mobile
    }
    .title {
      font-size: 2rem; // Adjust title size for mobile
    }
    .servicesTitle {
      font-size: 1.5rem; // Adjust services title size for mobile
    }
    .description {
      font-size: 1rem; // Adjust description font size for mobile
    }
    .servicesList {
      font-size: 1rem; // Adjust services list font size for mobile
    }
    .sidebar {
      display: none; // Hide sidebar on mobile
    }
  }
`;

// Insert media queries into the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = mobileStyles;
document.head.appendChild(styleSheet);

export default AboutUs;
