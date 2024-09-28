// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = ({ onAddMovie }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">Movie App</h1>
      <button className="add-movie-btn" onClick={onAddMovie}>Add New</button>
    </nav>
  );
};

export default Navbar;
