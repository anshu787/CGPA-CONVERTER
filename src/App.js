import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Componenets/Home/Home';
import About from './Componenets/About/About'
import './App.css'
import Contact from './Componenets/Contact/Contact';

function App() {
  return (
    <Router>
    <Routes>
      
<Route exact path='/' element={<Home/>}></Route>


  
  
        
    </Routes>
  </Router>
  );
}

export default App;
