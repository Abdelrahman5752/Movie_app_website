import React, { useState, useEffect } from 'react';
import { Movie, MovieFormData } from '../types/Movie';
import { X } from 'lucide-react';

interface MovieModalProps {
  show: boolean;
  onHide: () => void;
  onSave: (movieData: MovieFormData) => void;
  movie?: Movie | null;
  mode: 'add' | 'edit' | 'view';
}

const MovieModal: React.FC<MovieModalProps> = ({ show, onHide, onSave, movie, mode }) => {
  const [formData, setFormData] = useState<MovieFormData>({
    title: '',
    release_date: '',
    genre: '',
    price: '',
    description: ''
  });

  useEffect(() => {
    if (movie && (mode === 'edit' || mode === 'view')) {
      setFormData({
        title: movie.title,
        release_date: movie.release_date,
        genre: movie.genre,
        price: movie.price.toString(),
        description: movie.description || ''
      });
    } else if (mode === 'add') {
      setFormData({
        title: '',
        release_date: '',
        genre: '',
        price: '',
        description: ''
      });
    }
  }, [movie, mode, show]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode !== 'view') {
      onSave(formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!show) return null;

  const isReadOnly = mode === 'view';
  const title = mode === 'add' ? 'Add New Movie' : mode === 'edit' ? 'Edit Movie' : 'Movie Details';

  return (
    <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <button type="button" className="btn-close" onClick={onHide}>
              <X size={20} />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                    readOnly={isReadOnly}
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="release_date" className="form-label">Release Date</label>
                  <input
                    type="text"
                    className="form-control"
                    id="release_date"
                    name="release_date"
                    value={formData.release_date}
                    onChange={handleChange}
                    placeholder="MM/DD/YYYY"
                    required
                    readOnly={isReadOnly}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="genre" className="form-label">Genre</label>
                  <select
                    className="form-select"
                    id="genre"
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                    required
                    disabled={isReadOnly}
                  >
                    <option value="">Select Genre</option>
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Horror">Horror</option>
                    <option value="Romance">Romance</option>
                    <option value="Romantic Comedy">Romantic Comedy</option>
                    <option value="Sci-Fi">Sci-Fi</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Western">Western</option>
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="price" className="form-label">Price ($)</label>
                  <input
                    type="number"
                    step="0.01"
                    className="form-control"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    readOnly={isReadOnly}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  name="description"
                  rows={3}
                  value={formData.description}
                  onChange={handleChange}
                  readOnly={isReadOnly}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onHide}>
                {isReadOnly ? 'Close' : 'Cancel'}
              </button>
              {!isReadOnly && (
                <button type="submit" className="btn btn-primary">
                  {mode === 'add' ? 'Add Movie' : 'Save Changes'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;