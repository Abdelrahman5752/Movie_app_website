import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Movie, MovieFormData } from '../types/Movie';
import { movieService } from '../services/movieService';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';
import { Plus, RefreshCw } from 'lucide-react';

const MoviesPage: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState<'add' | 'edit' | 'view'>('add');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    loadMovies();
    
    // Check if we should open add modal from URL params
    if (searchParams.get('action') === 'add') {
      handleAddMovie();
    }
  }, [searchParams]);

  const loadMovies = async () => {
    try {
      setLoading(true);
      const data = await movieService.getAllMovies();
      setMovies(data);
    } catch (error) {
      console.error('Error loading movies:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddMovie = () => {
    setModalMode('add');
    setSelectedMovie(null);
    setShowModal(true);
  };

  const handleEditMovie = (movie: Movie) => {
    setModalMode('edit');
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleViewDetails = (movie: Movie) => {
    setModalMode('view');
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleDeleteMovie = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      try {
        await movieService.deleteMovie(id);
        setMovies(movies.filter(movie => movie.id !== id));
      } catch (error) {
        console.error('Error deleting movie:', error);
        alert('Error deleting movie');
      }
    }
  };

  const handleSaveMovie = async (movieData: MovieFormData) => {
    try {
      const moviePayload: Omit<Movie, 'id'> = {
        ...movieData,
        price: parseFloat(movieData.price)
      };

      if (modalMode === 'add') {
        const newMovie = await movieService.addMovie(moviePayload);
        setMovies([...movies, newMovie]);
      } else if (modalMode === 'edit' && selectedMovie?.id) {
        const updatedMovie = await movieService.updateMovie(selectedMovie.id, moviePayload);
        if (updatedMovie) {
          setMovies(movies.map(movie => 
            movie.id === selectedMovie.id ? updatedMovie : movie
          ));
        }
      }
      
      setShowModal(false);
      setSelectedMovie(null);
    } catch (error) {
      console.error('Error saving movie:', error);
      alert('Error saving movie');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedMovie(null);
  };

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <RefreshCw className="spin" size={48} />
        <p className="mt-3">Loading movies...</p>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Movie Collection</h2>
        <button 
          className="btn btn-success d-flex align-items-center"
          onClick={handleAddMovie}
        >
          <Plus size={20} className="me-2" />
          Add New Movie
        </button>
      </div>

      {movies.length === 0 ? (
        <div className="text-center py-5">
          <p className="text-muted">No movies in your collection yet.</p>
          <button 
            className="btn btn-success"
            onClick={handleAddMovie}
          >
            Add Your First Movie
          </button>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>Title</th>
                <th>Release Date</th>
                <th>Genre</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {movies.map(movie => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onEdit={handleEditMovie}
                  onDelete={handleDeleteMovie}
                  onViewDetails={handleViewDetails}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}

      <MovieModal
        show={showModal}
        onHide={handleCloseModal}
        onSave={handleSaveMovie}
        movie={selectedMovie}
        mode={modalMode}
      />
    </div>
  );
};

export default MoviesPage;