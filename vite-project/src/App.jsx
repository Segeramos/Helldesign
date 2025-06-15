import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';
import ProjectsPage from './components/Projects';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-700">
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

