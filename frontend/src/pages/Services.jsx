import React from 'react';
// import './services.css';

import { Helmet } from 'react-helmet-async';

import ServiceCards from '../components/ServiceCards';

const Services = () => {
  const services = [
    { id: 1, name: 'Residential Design', description: 'Transform your home with personalized, stylish interior designs.' },
   // { id: 2, name: 'Commercial Design', description: 'Create functional and visually appealing office and retail spaces.' },
    { id: 3, name: 'Space Planning', description: 'Optimize the use of space for maximum functionality and flow.' },
    { id: 4, name: 'Furniture Selection', description: 'Curate furniture pieces that complement your space and style.' },
    { id: 5, name: 'Lighting Design', description: 'Design lighting plans that enhance the mood and functionality of each space.' },
    { id: 6, name: 'Color Consultation', description: 'Choose the perfect color schemes to reflect your style and vision.' },
    { id: 7, name: 'Custom Furniture Design', description: 'Tailor-made furniture solutions that fit perfectly into your interior design.' },
    { id: 8, name: 'Renovation Management', description: 'Comprehensive project management for interior renovations from start to finish.' },
  //  { id: 9, name: '3D Visualization', description: 'Visualize your space with realistic 3D models before implementation.' },
  //  { id: 10, name: 'Sustainable Design', description: 'Eco-friendly design solutions with sustainable materials and energy-efficient layouts.' },
    // Add more services
  ];

  return (
    <section style={styles.services}>

  <Helmet>
        <title>Interior Design Services | 9D Vastu Decore</title>
        <meta name="description" content="Discover a wide range of interior design services, from residential to commercial spaces, using Vastu principles." />
        <meta name="keywords" content="interior design services, vastu-based design, residential design, commercial design, affordable interior design, design consultancy" />
      </Helmet>

      <h1 style={styles.title}>Our Services</h1>
      <ServiceCards services={services} />
    </section>
  );
};

// Inline CSS styles for Services component
const styles = {
    services: {
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
};

export default Services;
