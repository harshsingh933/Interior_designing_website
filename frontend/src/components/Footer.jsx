import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.linksContainer}>
          <div style={styles.linkSection}>
            <h4 style={styles.sectionTitle}>About Us</h4>
            <p style={styles.footerText}>
              We are committed to providing the best interior design services. <a href="/about-us" style={styles.link}>Learn more</a>.
            </p>
          </div>
          <div style={styles.linkSection}>
            <h4 style={styles.sectionTitle}>Our Policy</h4>
            <p style={styles.footerText}>
              Privacy is important to us. Review our <a href="/privacy-policy" style={styles.link}>Privacy Policy</a> and <a href="/terms" style={styles.link}>Terms of Service</a>.
            </p>
          </div>
          <div style={styles.linkSection}>
            <h4 style={styles.sectionTitle}>Cookies</h4>
            <p style={styles.footerText}>
              We use cookies to improve your experience. <a href="/cookie-policy" style={styles.link}>Learn how</a>.
            </p>
          </div>
          <div style={styles.socialMedia}>
            <h4 style={styles.sectionTitle}>Follow Us</h4>
            <div style={styles.iconContainer}>
              <a href="https://facebook.com" style={styles.iconLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} style={styles.icon} />
              </a>
              <a href="https://instagram.com" style={styles.iconLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} style={styles.icon} />
              </a>
              <a href="https://twitter.com" style={styles.iconLink} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} style={styles.icon} />
              </a>
            </div>
          </div>
        </div>
        <div style={styles.bottomFooter}>
          <p style={styles.footerText}>&copy; 2024 9D Vastu Decor. All rights reserved.</p>
          <p style={styles.footerText}><a href="/contact" style={styles.link}>Contact Us</a> | <a href="/faq" style={styles.link}>FAQs</a></p>
        </div>
      </div>
    </footer>
  );
};

// Inline CSS styles for Footer component
const styles = {
  footer: {
    backgroundColor: '#5e17eb',  // Darker background for a professional look
    color: '#fff',               // White text for readability
    padding: '40px 20px',
    textAlign: 'center',
    fontSize: '14px',
  },
  footerContent: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: '30px',  // More space below the links
  },
  linkSection: {
    flex: '1 1 300px',
    margin: '10px 20px',
    textAlign: 'left',     // Align section text to left for professionalism
  },
  sectionTitle: {
    fontSize: '1.2rem',
    marginBottom: '15px',  // More space below section titles
    color: '#ffcc00',      // Highlighted section title for emphasis
  },
  footerText: {
    margin: '0 0 10px 0',
    fontSize: '0.95rem',
    lineHeight: '1.6',     // Increase line spacing for better readability
  },
  link: {
    color: '#ffcc00',      // Accent color for links
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
  },
  linkHover: {
    color: '#fff',         // Hover effect color
  },
  socialMedia: {
    flex: '1 1 300px',
    margin: '10px 20px',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',           // Space between icons
  },
  iconLink: {
    transition: 'color 0.3s ease',
  },
  icon: {
    fontSize: '24px',
    color: '#ffcc00',      // Accent color for icons
  },
  bottomFooter: {
    borderTop: '1px solid #555',  // Add top border for separation
    paddingTop: '20px',
  }
};

export default Footer;
