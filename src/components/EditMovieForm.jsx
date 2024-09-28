// src/components/EditMovieForm.jsx
import React, { useState } from 'react';
import './AddMovieForm.css';
import './EditMovieForm.css';

const EditMovieForm = ({ movie, onUpdate, onClose }) => {
  const [updatedMovie, setUpdatedMovie] = useState(movie);

  const handleChange = (e) => {
    setUpdatedMovie({ ...updatedMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(updatedMovie);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Edit Movie</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Movie Name <span className="required">*</span>
            <input type="text" name="name" value={updatedMovie.name} required onChange={handleChange} />
          </label>
          <label>
            Image URL <span className="required">*</span>
            <input type="url" name="imageUrl" value={updatedMovie.imageUrl} required onChange={handleChange} />
          </label>
          <label>
            Language <span className="required">*</span>
            <input type="text" name="language" value={updatedMovie.language} required onChange={handleChange} />
          </label>
          <label>
            Certificate <span className="required">*</span>
            <input type="text" name="certificate" value={updatedMovie.certificate} required onChange={handleChange} />
          </label>
          <label>
            Content <span className="required">*</span>
            <textarea name="content" value={updatedMovie.content} required onChange={handleChange}></textarea>
          </label>
          <div className="form-actions">
            <button type="submit" className="create-btn">Update Movie</button>
            <button type="button" className="close-btn" onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMovieForm;
