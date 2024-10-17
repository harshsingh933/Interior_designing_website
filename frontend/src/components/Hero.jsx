import React from 'react';
import plaster from '../assets/images/plaster.jpg';
import putty from "../assets/images/putty.jpg";
import paint from "../assets/images/paint.jpg";

import tile from "../assets/images/tile.jpeg";
import electric from "../assets/images/electric.jpeg";
import carpenter from "../assets/images/carpenter.jpeg";
import fals from "../assets/images/false.jpeg";


const Hero = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.heroContent}>
        <h1 style={styles.heroTitle}>Transform Your Space</h1>
        <p style={styles.heroSubtitle}>We create beautiful, functional interiors.</p>

        <div style={styles.services}>
          {services.map((service, index) => (
            <div key={index} style={styles.serviceItem}>
              <img src={service.icon} alt={service.name} style={styles.serviceIcon} />
              <p>{service.name}</p>
            </div>
          ))}
        </div>

        <div style={styles.videoSection}>
          <h2 style={styles.videoTitle}>Completed Projects</h2>
          <div style={styles.videoWrapper}>
            <iframe
              src="https://www.youtube.com/embed/sDsmeqdcJmc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={styles.videoIframe}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

// Data for services
const services = [
  { name: 'Plaster Work', icon: plaster },
  { name: 'Putty Work', icon: putty },
  { name: 'Paint Work', icon: paint },
  { name: 'Tile Fitting', icon: tile },
  { name: 'Electrician Work', icon: electric },
  { name: 'Carpenter Work', icon: carpenter },
  { name: 'False Ceiling', icon: fals },
];

// Inline CSS styles
const styles = {
  hero: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: 'url("/path-to-your-image.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
  },
  heroContent: {
    backgroundColor: 'rgba(94, 23, 235, 0.8)', // Adding opacity to the background
    padding: '40px',
    borderRadius: '15px',
    maxWidth: '1000px',
    width: '100%',
    textAlign: 'center',
  },
  heroTitle: {
    fontSize: '3rem',
    margin: '0 0 20px 0',
    fontWeight: 'bold',
    letterSpacing: '2px',
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    marginBottom: '30px',
    fontWeight: '300',
  },
  services: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginTop: '30px',
    padding: '0 20px',
  },
  serviceItem: {
    textAlign: 'center',
    margin: '15px',
  },
  serviceIcon: {
    width: '200px',
    height: '150px',
    marginBottom: '10px',
  },
  videoSection: {
    marginTop: '50px',
  },
  videoTitle: {
    fontSize: '2rem',
    marginBottom: '20px',
  },
  videoWrapper: {
    position: 'relative',
    paddingBottom: '56.25%', // 16:9 aspect ratio
    height: 0,
    overflow: 'hidden',
    maxWidth: '100%',
  },
  videoIframe: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  '@media (max-width: 768px)': {
    heroTitle: {
      fontSize: '2.5rem',
    },
    heroSubtitle: {
      fontSize: '1.2rem',
    },
    heroContent: {
      padding: '20px',
    },
    serviceItem: {
      margin: '10px',
    },
    serviceIcon: {
      width: '50px',
      height: '50px',
    },
    videoTitle: {
      fontSize: '1.5rem',
    },
  },
  '@media (max-width: 480px)': {
    heroTitle: {
      fontSize: '2rem',
    },
    heroSubtitle: {
      fontSize: '1rem',
    },
    heroContent: {
      padding: '15px',
    },
    serviceIcon: {
      width: '40px',
      height: '40px',
    },
    videoTitle: {
      fontSize: '1.3rem',
    },
  },
};

export default Hero;
