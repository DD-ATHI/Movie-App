// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import MovieCard from './components/MovieCard';
import AddMovieForm from './components/AddMovieForm';
import EditMovieForm from './components/EditMovieForm';
import MovieDetailPopup from './components/MovieDetailPopup';
import './App.css';
const data = [
  { name: 'Inception', imageUrl: 'https://assetscdn1.paytm.com/images/cinema/Meiyazhagan-608x800-870a5280-4439-11ef-b2dc-a9298206546d.jpg?format=webp&imwidth=576', language: 'English', certificate: 'PG-13', content: 'A thief who steals corporate secrets.' },
  { name: 'Titanic', imageUrl: 'https://via.placeholder.com/150?text=Titanic', language: 'English', certificate: 'PG-13', content: 'A seventeen-year-old aristocrat falls in love.' },
  { name: 'Avatar', imageUrl: 'https://via.placeholder.com/150?text=Avatar', language: 'English', certificate: 'PG-13', content: 'A paraplegic Marine dispatched to the moon Pandora.' },
  { name: 'The Dark Knight', imageUrl: 'https://via.placeholder.com/150?text=The+Dark+Knight', language: 'English', certificate: 'PG-13', content: 'Batman faces the Joker in Gotham City.' },
  { name: 'Forrest Gump', imageUrl: 'https://via.placeholder.com/150?text=Forrest+Gump', language: 'English', certificate: 'PG-13', content: 'The presidencies of Kennedy and Johnson told through the lens of a man with a low IQ.' },
  { name: 'The Shawshank Redemption', imageUrl: 'https://via.placeholder.com/150?text=The+Shawshank+Redemption', language: 'English', certificate: 'R', content: 'Two imprisoned men bond over a number of years.' },
  { name: 'Pulp Fiction', imageUrl: 'https://via.placeholder.com/150?text=Pulp+Fiction', language: 'English', certificate: 'R', content: 'The lives of two mob hitmen, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine.' },
  { name: 'Fight Club', imageUrl: 'https://via.placeholder.com/150?text=Fight+Club', language: 'English', certificate: 'R', content: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club.' },
  { name: 'The Godfather', imageUrl: 'https://via.placeholder.com/150?text=The+Godfather', language: 'English', certificate: 'R', content: 'An organized crime dynasty\'s aging patriarch transfers control of his clandestine empire to his reluctant son.' },
  { name: 'The Matrix', imageUrl: 'https://via.placeholder.com/150?text=The+Matrix', language: 'English', certificate: 'R', content: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.' },
  { name: 'The Lord of the Rings: The Fellowship of the Ring', imageUrl: 'https://via.placeholder.com/150?text=The+Lord+of+the+Rings', language: 'English', certificate: 'PG-13', content: 'A meek Hobbit from the Shire and a rebellious Elf set out on an epic quest to destroy a powerful ring.' },
  { name: 'Gladiator', imageUrl: 'https://via.placeholder.com/150?text=Gladiator', language: 'English', certificate: 'R', content: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.' },
  { name: 'Interstellar', imageUrl: 'https://via.placeholder.com/150?text=Interstellar', language: 'English', certificate: 'PG-13', content: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.' },
]
const App = () => {
  const [movies, setMovies] = useState(data);

  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [editingMovie, setEditingMovie] = useState(null);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setIsAdding(false);
  };

  const handleEditMovie = (movie) => {
    setEditingMovie(movie);
    setIsEditing(true);
  };

  const handleUpdateMovie = (updatedMovie) => {
    setMovies(movies.map((movie) => (movie.name === updatedMovie.name ? updatedMovie : movie)));
    setIsEditing(false);
  };

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  const handleClosePopup = () => {
    setSelectedMovie(null);
    setIsEditing(false);
  };

  return (
    <div className="App">
      <Navbar onAddMovie={() => setIsAdding(true)} />
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} onSelect={handleSelectMovie} onEdit={handleEditMovie} />
        ))}
      </div>

      {isAdding && <AddMovieForm onCreate={handleAddMovie} onClose={() => setIsAdding(false)} />}
      {isEditing && <EditMovieForm movie={editingMovie} onUpdate={handleUpdateMovie} onClose={handleClosePopup} />}
      {selectedMovie && <MovieDetailPopup movie={selectedMovie} onClose={handleClosePopup} />}
    </div>
  );
};

export default App;
