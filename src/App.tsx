import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import PrivacyPage from './pages/PrivacyPage';

function App() {
  return (
    <div className="min-vh-100 bg-light">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </main>
      
      <footer className="bg-dark text-light py-3 mt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <small>© 2025 - Movie App - Privacy</small>
            </div>
            <div className="col-md-6 text-md-end">
              <small>Built with React & Bootstrap</small>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;