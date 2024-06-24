import React, {useEffect ,useState} from 'react';
import Navbar from './componentes/Navbar';
import Container from './componentes/Container';
import Footer from './componentes/Footer';
import './App.css';

function App() {
const [produts ,setProducts] = useState(produts);
const [category,setCategory]= useState(category);

useEffect (() => { 
  fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
}, [category]);
  return (
    <div className="App">
      <Navbar produts ={produts} />
      <Container  produts={produts} category={category} />
      <Footer category={category} />
    </div>
  );
}

export default App;
