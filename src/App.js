import React from 'react';
import Intro from "./components/Intro/intro"; // Ensure the file name matches exactly
import NavBar from "./components/NavBar/navbar";
import Skills from './components/Skills/skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <Skills />
    </div>
  );
}

export default App;