import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Section from './components/Section';

function App() {
  return (
    <div className="bg-bg min-h-screen">
      <Navbar />
      <main>
        <Section number={1} />
        <Section number={2} />
        <Section number={3} />
        <Section number={4} />
      </main>
    </div>
  );
}

export default App;
