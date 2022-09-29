import React from 'react';
import Header from './Components/Header'
import HowItWork from './Components/HowItWork';
import About from './Components/About';
import Agent from './Components/Agent';
import Properties from './Components/Properties';
function App() {
  return (
    <div className="App">
      <Header />
      <HowItWork />
      <About/>
      <Agent /> 
      <Properties />
    </div>
  );
}

export default App;
