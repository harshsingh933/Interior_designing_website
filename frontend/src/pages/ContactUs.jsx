import React, { useState } from 'react';
import contactService from '../services/contactService';
import { Helmet } from 'react-helmet-async';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear error message when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number length
    if (formData.phone.length !== 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    try {
      await contactService.sendMessage(formData);
      alert('Message sent successfully!');
      setFormData({ name: '', phone: '', message: '' }); // Clear form fields
    } catch (error) {
      alert('Failed to send message. Please try again.'); // Handle error message
    }
  };

  return (
    <section style={styles.contactUs}>
      <h1 style={styles.title}>Contact Us</h1>


      <Helmet>
        <title>9D Vastu Decore | Best Interior Design in Bihar</title>
        <meta name="description" content="9D Vastu Decore offers the best interior design services with a focus on Vastu principles and modern design aesthetics." />
        <meta name="keywords" content="interior design, vastu design, residential interior, commercial interior, modern design, affordable interior design,sabse sasta sabse aaccha, Bihar,patna ,purnia,madhepura,saharsa,supaual,Araria,Arwal,Aurangabad,Banka,Begusarai,Bhagalpur,Bhojpur,Buxar,Darbhanga,East champaran,west champaran,jamui,jehanabad,katihar,gaya,madhubani,nalanda,nawada,Rohtas,samastipur,saran,siwan,supaul,vaishali,lakhisarai,munger,kaimur" />
        {/* Local Business Schema Markup */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://9dvastudecor.in",
            "@type": "LocalBusiness",
            "name": "9D Vastu Decore",
            "image": "https://9dvastudecor.in/logo.png",  // Link to your logo
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main Street",
              "addressLocality": "Patna",
              "addressRegion": "BR",
              "postalCode": "800001",
              "addressCountry": "IN"
            },
            "telephone": "6204921694",
            "email": "info@9dvastudecore.com",
            "openingHours": "Mo,Tu,We,Th,Fr,Sa 09:00-18:00",
            "url": "https://9dvastudecor",
            "priceRange": "$$",
            "description": "9D Vastu Decore offers interior design services focused on Vastu principles for residential and commercial spaces.",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "25.594095",
              "longitude": "85.137566"
            }
          }
          `}
        </script>
      </Helmet>





      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          style={styles.input}
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Phone Number"
          required
          style={styles.input}
        />
        {error && <p style={styles.error}>{error}</p>} {/* Display error message if present */}
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message (optional)"
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>Send</button>
      </form>
    </section>
  );
};

// Inline CSS styles
const styles = {
  contactUs: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '50px 20px',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '600px',
  },
  input: {
    width: '100%',
    padding: '15px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1rem',
    outline: 'none',
  },
  textarea: {
    width: '100%',
    padding: '15px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '1rem',
    outline: 'none',
    resize: 'vertical',
  },
  button: {
    padding: '15px 25px',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
  error: {
    color: 'red',
    fontSize: '0.9rem',
    marginBottom: '10px',
  },
  '@media (max-width: 768px)': {
    title: {
      fontSize: '2.5rem',
    },
    input: {
      fontSize: '0.9rem',
    },
    textarea: {
      fontSize: '0.9rem',
    },
    button: {
      fontSize: '0.9rem',
    },
  },
  '@media (max-width: 480px)': {
    title: {
      fontSize: '2rem',
    },
    input: {
      fontSize: '0.8rem',
    },
    textarea: {
      fontSize: '0.8rem',
    },
    button: {
      fontSize: '0.8rem',
    },
  },
};

export default ContactUs;
