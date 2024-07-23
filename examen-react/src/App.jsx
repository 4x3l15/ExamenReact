import React, {useEffect ,useState} from 'react';
import Navbar from './componentes/Navbar';
import Container from './componentes/Container';
import Footer from './componentes/Footer';
import './App.css';

function App() {
const [type,setType]= useState(type);
const [poster,setPoster]= useState(poster);
const [tiltle,setTiltle]= useState(tiltle);

useEffect (() => { 
  fetch('http://www.omdbapi.com/?apikey=[5d1b649d]&')
            .then(res=>res.json())
            .then(data=>setType(data))
}, [tiltle]);
  return (
    <div className="App">
      <Navbar/>
      <Container poster={poster} type={type} />
      <Footer />
    </div>
  );
}

export default App;
