import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Search, Settings, Film } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="container py-5">
      {/* Hero Section */}
      <div className="text-center mb-5">
        <div className="d-flex justify-content-center align-items-center mb-3">
          <Film size={48} className="text-primary me-3" />
          <h1 className="display-4 mb-0 text-primary">Movie App</h1>
        </div>
        <p className="lead text-muted">
          Manage your favorite movies with ease. Add, edit, and explore!
        </p>
      </div>

      {/* Feature Cards */}
      <div className="row g-4">
        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body text-center p-4">
              <div className="text-success mb-3">
                <Plus size={48} />
              </div>
              <h5 className="card-title">Add Movies</h5>
              <p className="card-text text-muted">
                Create a new movie entry and save it to your collection.
              </p>
              <Link to="/movies?action=add" className="btn btn-success">
                Add Movie
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body text-center p-4">
              <div className="text-info mb-3">
                <Search size={48} />
              </div>
              <h5 className="card-title">Browse Collection</h5>
              <p className="card-text text-muted">
                View all movies you've added and their details.
              </p>
              <Link to="/movies" className="btn btn-info">
                View All
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100 shadow-sm border-0">
            <div className="card-body text-center p-4">
              <div className="text-danger mb-3">
                <Settings size={48} />
              </div>
              <h5 className="card-title">Update / Delete</h5>
              <p className="card-text text-muted">
                Edit or remove movies any time you want.
              </p>
              <Link to="/movies" className="btn btn-danger">
                Manage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;