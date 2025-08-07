import { Movie } from '../types/Movie';

// Mock data for development - replace with actual API calls
let movies: Movie[] = [
  {
    id: 1,
    title: "When Harry Met Sally",
    release_date: "2/12/1989",
    genre: "Romantic Comedy",
    price: 7.99,
    description: "A classic romantic comedy"
  },
  {
    id: 2,
    title: "Ghostbusters",
    release_date: "3/13/1984",
    genre: "Comedy",
    price: 8.99,
    description: "Who you gonna call?"
  },
  {
    id: 3,
    title: "Ghostbusters 2",
    release_date: "2/23/1986",
    genre: "Comedy",
    price: 9.99,
    description: "The sequel to Ghostbusters"
  },
  {
    id: 4,
    title: "Rio Bravo",
    release_date: "4/15/1959",
    genre: "Western",
    price: 3.99,
    description: "Classic Western film"
  }
];

let nextId = 5;

export const movieService = {
  getAllMovies: async (): Promise<Movie[]> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...movies];
  },

  getMovieById: async (id: number): Promise<Movie | null> => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return movies.find(movie => movie.id === id) || null;
  },

  addMovie: async (movieData: Omit<Movie, 'id'>): Promise<Movie> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const newMovie: Movie = {
      ...movieData,
      id: nextId++,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    movies.push(newMovie);
    return newMovie;
  },

  updateMovie: async (id: number, movieData: Partial<Movie>): Promise<Movie | null> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const movieIndex = movies.findIndex(movie => movie.id === id);
    if (movieIndex === -1) return null;
    
    movies[movieIndex] = {
      ...movies[movieIndex],
      ...movieData,
      updated_at: new Date().toISOString()
    };
    return movies[movieIndex];
  },

  deleteMovie: async (id: number): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const movieIndex = movies.findIndex(movie => movie.id === id);
    if (movieIndex === -1) return false;
    
    movies.splice(movieIndex, 1);
    return true;
  }
};