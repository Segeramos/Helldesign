import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import ProjectsPage from './components/Projects';
import ClientProjects from './components/ClientProjects';
import Services from './components/Services';

export default function App() {
  return (
    <div className="min-h-screen bg-white-700">
      <Header />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        
        <Route path="/about" element={<AboutMe />} />
        <Route path="/clientProjects" element={<ClientProjects />} />
      </Routes>

    </div>
  );
}

