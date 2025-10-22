import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import page components
import HomePage from './pages/Home/Index.jsx';
// import AboutPage from './pages/About/Index.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;