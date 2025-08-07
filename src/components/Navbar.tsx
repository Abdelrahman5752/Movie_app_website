import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Film } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <Film className="me-2" size={24} />
          Movie App
        </Link>
        
        <div className="navbar-nav">
          <Link 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
            to="/"
          >
            Home
          </Link>
          <Link 
            className={`nav-link ${location.pathname === '/movies' ? 'active' : ''}`} 
            to="/movies"
          >
            Browse Collection
          </Link>
          <Link 
            className={`nav-link ${location.pathname === '/privacy' ? 'active' : ''}`} 
            to="/privacy"
          >
            Privacy
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;