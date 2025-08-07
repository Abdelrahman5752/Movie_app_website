import React from 'react';
import { Movie } from '../types/Movie';
import { Edit, Eye, Trash2 } from 'lucide-react';

interface MovieCardProps {
  movie: Movie;
  onEdit: (movie: Movie) => void;
  onDelete: (id: number) => void;
  onViewDetails: (movie: Movie) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onEdit, onDelete, onViewDetails }) => {
  return (
    <tr>
      <td>{movie.title}</td>
      <td>{movie.release_date}</td>
      <td>{movie.genre}</td>
      <td>${movie.price.toFixed(2)}</td>
      <td>
        <div className="d-flex gap-2">
          <button
            className="btn btn-sm btn-outline-primary"
            onClick={() => onEdit(movie)}
            title="Edit"
          >
            <Edit size={16} />
          </button>
          <button
            className="btn btn-sm btn-outline-info"
            onClick={() => onViewDetails(movie)}
            title="View Details"
          >
            <Eye size={16} />
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => movie.id && onDelete(movie.id)}
            title="Delete"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MovieCard;