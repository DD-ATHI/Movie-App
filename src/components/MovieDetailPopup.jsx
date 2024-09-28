// src/components/MovieDetailPopup.jsx
import React from 'react';
import './MovieDetailPopup.css';

const MovieDetailPopup = ({ movie, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{movie.name}</h2>
        <img src={movie.imageUrl} alt={movie.name} />
        <p>Language: {movie.language}</p>
        <p>Certificate: {movie.certificate}</p>
        <p>{movie.content}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default MovieDetailPopup;
