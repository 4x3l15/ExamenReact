// src/components/Container.js
import React from 'react';
import './Container.css';

const Container = ({ poster, type , title , setTitle }) => {
  return (
    <div className="container">
     <div className="cards">
     {setTitle ? (
        <div className="card">
          <img src={poster} alt="Movie Poster" className="card-image" />
              <h3>{setTitle.title}</h3>
        </div>
      ) : (
        <p>No data available</p>
      )}
     </div>
    </div>
  );
};

export default Container;

