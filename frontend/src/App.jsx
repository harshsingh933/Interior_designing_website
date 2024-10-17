import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import ContactUs from './pages/ContactUs';
import Team from './pages/Team'; // Import Team component
import ResidentialDesign from './pages/ResidentialDesign'
import SpacePlaining from './pages/SpacePlaining';
import FurnitureSelection from './pages/FurnitureSelection';
import LightingDesign from './pages/LightingDesign';
import ColorConsultation from './pages/ColorConsultation';
import CustomFurniture from './pages/CustomFurniture';
import RenovationManagement from './pages/RenovationManagement';



import Blog from './pages/Blog';
import SingleProject from './pages/SingleProject';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />

        <Route path="/team" element={<Team />} /> 
        <Route path="/residential-design" element={<ResidentialDesign />} />
        <Route path= "/space-plaining" element={<SpacePlaining />} />
        <Route path= "/furniture-selection" element={<FurnitureSelection />} />
        <Route path= "/lighting-design" element={<LightingDesign />} />
        <Route path="/color-consultation" element={<ColorConsultation />} />
        <Route path="/services/custom-furniture" element= {<CustomFurniture/>} />
        <Route path= "/renovation-management" element={<RenovationManagement/>} />



        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/project/:id" element={<SingleProject />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
