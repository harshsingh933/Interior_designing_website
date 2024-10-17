import { Link } from 'react-router-dom';

const ServiceCards = ({ services }) => {
  return (
    <div style={styles.grid}>
      {services.map((service) => (
        <div key={service.id} style={styles.card}>
          <h2 style={styles.name}>{service.name}</h2>
          <p>{service.description}</p>
          {service.name === 'Residential Design' && (
            <Link to="/residential-design" style={styles.link}>
              View More
            </Link>
       )}
          {service.name === 'Commercial Design' && (
            <Link to="/commercial-design" style={styles.link}>
              View More
            </Link>
          )}


  {service.name === 'Space Planning' && (
            <Link to="/space-plaining" style={styles.link}>
              View More
            </Link>
          )}


{service.name === 'Furniture Selection' && (
            <Link to="/furniture-Selection" style={styles.link}>
              View More
            </Link>
          )}


{service.name === 'Lighting Design' && (
            <Link to="/lighting-design" style={styles.link}>
              View More
            </Link>
          )}


{service.name === 'Color Consultation' && (
            <Link to="/color-consultation" style={styles.link}>
              View More
            </Link>
          )}


{service.name === 'Custom Furniture Design' && (
            <Link to="custom-furniture" style={styles.link}>
              View More
            </Link>
          )}


{service.name === 'Renovation Management' && (
            <Link to="/renovation-management" style={styles.link}>
              View More
            </Link>
          )}

         
        </div>
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    textAlign: 'center',
  },
  name: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  link: {
    marginTop: '10px',
    display: 'inline-block',
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    borderRadius: '5px',
    textDecoration: 'none',
  },
};

export default ServiceCards;
