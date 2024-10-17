import React from 'react';
import r1 from '../assets/images/paint.jpg'




const ColorConsultation = () => {
  const designs = [
    { id: 1, name: '', image: r1 },
  
   
    // Add more designs here
  ];

  return (
    <section style={styles.container}>
      <h1 style={styles.title}>Color Design </h1>
      <div style={styles.grid}>
        {designs.map((design) => (
          <div key={design.id} style={styles.card}>
            <img src={design.image} alt={design.name} style={styles.image} />
            <h2 style={styles.name}>{design.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: '50px 20px',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#333',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    overflow: 'hidden',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  name: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: '10px 0',
  },
};

export default ColorConsultation;
