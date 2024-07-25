import React, { useEffect, useState } from 'react';
import Navbar from './componentes/Navbar';
import Container from './componentes/Container';
import Footer from './componentes/Footer';
import './App.css';

function App() {
  const [type, setType] = useState('');
  const [poster, setPoster] = useState('');
  const [title, setTitle] = useState('Inception');

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=5d1b649d&t=${title}`)
      .then(res => res.json())
      .then(data => {
        if (data.Response === "True") {
          setType(data.Type);
          setPoster(data.Poster);
        } else {
          setType('');
          setPoster('');
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [title]);

  return (
    <div className="App">
      <Navbar setTitle={setTitle} />
      <Container poster={poster} type={type} />
      <Footer />
    </div>
  );
}

export default App;
