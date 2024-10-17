import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing social media icons
import photo2 from '../assets/images/ceo.jpg';
import photo1 from '../assets/images/fonder.jpg';

import { Helmet } from 'react-helmet-async';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Gagan Singh',
      photo: photo1, // Use the imported photo1
      education: '',
      vision: 'To create spaces that inspire and uplift the human spirit.',
      socialLinks: {
        facebook: 'https://facebook.com/johndoe',
        twitter: 'https://twitter.com/johndoe',
        instagram: 'https://instagram.com/johndoe',
        linkedin: 'https://linkedin.com/in/johndoe',
      },
    },
    {
      id: 2,
      name: 'Kumar Harsh',
      photo: photo2, // Use the imported photo2
      education: 'Bachelor of Technology from Heritage Institute of Technology Kolkata in Computer Science and Engineering',
      vision: 'Designing environments that foster creativity and collaboration.',
      socialLinks: {
        facebook: 'https://facebook.com/janesmith',
        twitter: 'https://twitter.com/janesmith',
        instagram: 'https://instagram.com/janesmith',
        linkedin: 'https://linkedin.com/in/janesmith',
      },
    },
    // Add more team members as needed
  ];

  return (
    <section style={styles.teamSection}>

    <Helmet>
        <title>Interior Design Services | 9D Vastu Decore</title>
        <meta name="description" content="Discover a wide range of interior design services, from residential to commercial spaces, using Vastu principles." />
        <meta name="keywords" content="interior design services, vastu-based design, residential design, commercial design, affordable interior design, design consultancy" />
      </Helmet>


      <h1 style={styles.title}>Meet Our Founder and CEO</h1>
      <div style={styles.teamGrid}>
        {teamMembers.map(member => (
          <div key={member.id} style={styles.memberCard}>
            <img src={member.photo} alt={member.name} style={styles.photo} />
            <h2 style={styles.memberName}>{member.name}</h2>
            <p style={styles.education}>{member.education}</p>
            <p style={styles.vision}>{member.vision}</p>
            <div style={styles.socialIcons}>
              <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook style={styles.icon} />
              </a>
              <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter style={styles.icon} />
              </a>
              <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram style={styles.icon} />
              </a>
              <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin style={styles.icon} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Inline CSS styles
const styles = {
  teamSection: {
    padding: '50px 20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    color: '#333',
    marginBottom: '40px',
  },
  teamGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Responsive grid layout
    gap: '30px',
    margin: '0 auto',
    maxWidth: '1200px',
  },
  memberCard: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
  },
  photo: {
    width: '100%',
    height: 'auto',
    borderRadius: '50%', // Circular profile photo
    marginBottom: '15px',
  },
  memberName: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#333',
  },
  education: {
    fontSize: '1rem',
    color: '#555',
  },
  vision: {
    fontSize: '1rem',
    color: '#777',
    margin: '10px 0',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  },
  icon: {
    fontSize: '1.5rem',
    color: '#555',
    margin: '0 10px',
    transition: 'color 0.3s',
  },
};

export default Team;
