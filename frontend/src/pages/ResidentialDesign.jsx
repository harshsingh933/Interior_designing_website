import React from 'react';
import r1 from '../assets/images/r1.jpeg'
import r2 from '../assets/images/r2.png'
import r3 from '../assets/images/r3.png'
import r4 from '../assets/images/r4.webp'
import r5 from '../assets/images/r5.jpg'
import r6 from '../assets/images/r6.jpg'
import r7 from '../assets/images/r7.jpeg'
import r8 from '../assets/images/r8.jpg'
import r9 from '../assets/images/r9.jpg'
import r10 from '../assets/images/r10.jpeg'



const ResidentialDesign = () => {
  const designs = [
    { id: 1, name: '', image: r1 },
    { id: 2, name: '', image: r2 },
    { id: 3, name: '', image: r3 },
    { id: 4, name: '', image: r4 },
    { id: 5, name: '', image: r5 },
    { id: 6, name: '', image: r6 },
    { id: 7, name: '', image: r7 },
    { id: 8, name: '', image: r8},
    { id: 9, name: '', image: r9 },
    { id: 10, name: '', image: r10 },
    // Add more designs here
  ];

  return (
    <section style={styles.container}>
      <h1 style={styles.title}>Residential Design </h1>
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

export default ResidentialDesign;
