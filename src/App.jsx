import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import About from './about/About';
import Support from './support/Supports';
import Service from './services/Service';
import Expert from './expert/Expert';
import Policy from './policy/Policy';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/services" element={<Service />} />
        <Route path="/expert" element={<Expert />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

