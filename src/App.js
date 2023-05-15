import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main'
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/contact';
import Resume from './components/Resume';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Portfolio' element={<Portfolio />}/>
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Resume' element={<Resume />}/>

      </Routes>;
    </Router>

  ) 

  
}

export default App;
