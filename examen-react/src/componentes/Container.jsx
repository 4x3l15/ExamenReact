// src/components/Container.js
import React from 'react';
import './Container.css';

const Container = ({ poster, type }) => {
  return (
    <div className="container">
      {poster ? (
        <div>
          <img src={poster} alt="Movie Poster" className="movie-poster" />
          <p>Type: {type}</p>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Container;
