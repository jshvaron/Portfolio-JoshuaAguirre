import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main'
import About from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/About' element={<About />}/>

      </Routes>;
    </Router>

  ) 

  
}

export default App;
