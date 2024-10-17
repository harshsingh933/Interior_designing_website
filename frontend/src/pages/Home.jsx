import React from 'react';
import Hero from '../components/Hero';
import ServiceCards from '../components/ServiceCards';
//import Testimonials from '../components/Testimonials';
//import PortfolioGrid from '../components/PortfolioGrid'; <PortfolioGrid projects={projects} />
import { Helmet } from 'react-helmet-async';
const Home = () => {
  const services = [
    { id: 1, name: 'Residential Design', description: 'Transform your home' },
    { id: 2, name: 'Space Planning', description: 'Office, Retail spaces' },
    // Add more services
  ];

  const projects = [
    { id: 1, name: 'Luxury Villa', image: '/images/villa.jpg' },
    { id: 2, name: 'Modern Office', image: '/images/office.jpg' },
    // Add more projects
  ];

  return (
    <>

    <Helmet>
        <title>9D Vastu Decore | Best Interior Design in Bihar</title>
        <meta name="description" content="Explore modern Vastu-based interior design services in Bihar. Get affordable designs for your home and commercial spaces,best interior designer in patna ,boring road , patliputra colony." />
        <meta name="keywords" content="interior design, vastu design, residential interior, commercial interior, modern design, affordable interior design,sabse sasta sabse aaccha, Bihar,patna ,purnia,madhepura,saharsa,supaual,Araria,Arwal,Aurangabad,Banka,Begusarai,Bhagalpur,Bhojpur,Buxar,Darbhanga,East champaran,west champaran,jamui,jehanabad,katihar,gaya,madhubani,nalanda,nawada,Rohtas,samastipur,saran,siwan,supaul,vaishali,lakhisarai,munger,kaimur" />

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
            "url": "https://9dvastudecor.in",
            "priceRange": "$$",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "25.594095",
              "longitude": "85.137566"
            }
          }
          `}
        </script>

        </Helmet>
      <Hero />
      <ServiceCards services={services} />
     
      
    </>
  );
};

export default Home;
