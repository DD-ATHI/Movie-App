// src/components/AddMovieForm.jsx
import React, { useState } from 'react';
import './AddMovieForm.css';

const AddMovieForm = ({ onCreate, onClose }) => {
  const [newMovie, setNewMovie] = useState({
    name: '',
    imageUrl: '',
    language: '',
    certificate: '',
    content: ''
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(newMovie);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Movie</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Movie Name <span className="required">*</span>
            <input type="text" name="name" required onChange={handleChange} />
          </label>
          <label>
            Image URL <span className="required">*</span>
            <input type="url" name="imageUrl" required onChange={handleChange} />
          </label>
          <label>
            Language <span className="required">*</span>
            <input type="text" name="language" required onChange={handleChange} />
          </label>
          <label>
            Certificate <span className="required">*</span>
            <input type="text" name="certificate" required onChange={handleChange} />
          </label>
          <label>
            Content <span className="required">*</span>
            <textarea name="content" required onChange={handleChange}></textarea>
          </label>
          <div className="form-actions">
            <button type="submit" className="create-btn">Create Movie</button>
            <button type="button" className="close-btn" onClick={onClose}>Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovieForm;
