// src/components/MovieCard.jsx
import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie, onSelect, onEdit }) => {
  return (
    <div className="movie-card" onClick={() => onSelect(movie)}>
      <img src={movie.imageUrl} alt={movie.name} className="movie-image" />
      <div className="card-content">
        <h3>{movie.name}</h3>
        <p>Language: {movie.language}</p>
        <p>Certificate: {movie.certificate}</p>
      </div>
      <button className="edit-btn" onClick={(e) => { e.stopPropagation(); onEdit(movie); }}>
        Edit
      </button>
    </div>
  );
};

export default MovieCard;
