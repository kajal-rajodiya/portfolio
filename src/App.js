import React from 'react';
import Intro from "./components/Intro/intro"; // Ensure the file name matches exactly
import NavBar from "./components/NavBar/navbar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Intro />
    </div>
  );
}

export default App;