import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Adjust the logo path as needed

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <Link to="/" style={styles.logoLink}>
          <img src={logo} alt="InteriorDesignCo Logo" style={styles.logoImage} />
        </Link>
      </div>
      <div style={styles.hamburger} onClick={toggleMobileMenu}>
        <div style={styles.bar}></div>
        <div style={styles.bar}></div>
        <div style={styles.bar}></div>
      </div>
      <ul style={isMobileMenuOpen ? styles.mobileLinks : styles.links}>
        <li style={styles.navItem}><Link to="/" style={styles.navLink}>Home</Link></li>
        <li style={styles.navItem}><Link to="/about" style={styles.navLink}>About Us</Link></li>
        <li style={styles.navItem}><Link to="/services" style={styles.navLink}>Services</Link></li>
        <li style={styles.navItem}><Link to="/portfolio" style={styles.navLink}>Portfolio</Link></li>
        <li style={styles.navItem}><Link to="/contact" style={styles.navLink}>Contact Us</Link></li> {/* Ensure "Contact Us" is visible */}
      </ul>
    </nav>
  );
};

// Inline CSS styles
const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#5e17eb',
    color: '#fff',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  logoLink: {
    textDecoration: 'none',
    color: '#fff',
  },
  logoImage: {
    height: '50px',
    width: 'auto',
    maxWidth: '100%',
  },
  links: {
    display: 'flex',
    listStyleType: 'none',
    gap: '20px',
    margin: 0,
  },
  mobileLinks: {
    display: 'block',
    position: 'absolute',
    top: '60px',
    right: 0,
    backgroundColor: '#333',
    width: '100%',
    listStyleType: 'none',
    padding: '10px 0',
    margin: 0,
    zIndex: 2000, // new added
    minHeight: '100vh',
  },
  navItem: {
    margin: '10px 0', // Spacing between mobile items
  },
  navLink: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '18px',
  },
  hamburger: {
    display: 'none',
    flexDirection: 'column',
    cursor: 'pointer',
  },
  bar: {
    width: '25px',
    height: '3px',
    backgroundColor: '#fff',
    margin: '4px 0',
  },
  '@media (max-width: 768px)': {
    links: {
      display: 'none', // Hide links on mobile, show hamburger
    },
    hamburger: {
      display: 'flex', // Show hamburger on mobile
    },
  },
  '@media (max-width: 480px)': {
    navbar: {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
    mobileLinks: {
      padding: '20px',
    },
    navLink: {
      fontSize: '16px',
    },
    logoImage: {
      height: '40px', // Adjust logo size for mobile
    },
  },
};

export default Navbar;
