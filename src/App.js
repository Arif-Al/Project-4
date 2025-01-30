// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import HomePage from './components/pages/HomePage';
import WebDevFrontend from './components/pages/WebDevFrontend';
import English02 from './components/pages/English02';
import ProfessionalDevelopment from './components/pages/ProfessionalDevelopment';
import EnglishCommunication from './components/pages/EnglishCommunication';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setSidebarOpen(open);
  };

  return (
    <Router>
      <Header toggleDrawer={toggleDrawer} />
      <Sidebar open={sidebarOpen} toggleDrawer={toggleDrawer} />
      <div className="main-content">
        <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/english-02" element={<English02 />} />
        <Route path="/professional-development" element={<ProfessionalDevelopment />} />
          <Route path="/web-dev-frontend" element={<WebDevFrontend />} />
          <Route path="/EnlishComunication" element={<EnglishCommunication /> } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
