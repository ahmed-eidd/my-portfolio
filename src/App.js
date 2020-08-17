import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Projects from './components/Projects/Projects';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Projects/>
      <About/>
    </div>
  );
}

export default App;
