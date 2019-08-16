import React from 'react';
import Head from './components/Head/Head'
import Container from './components/Container/Container'
import Window from './components/Window/Window'
import Demo from './components/Demo/Demo'
import './App.css';

function App() {
  return (
    <div className="App">
      <Head />
      <Container />
      <Window />
      <Demo />
    </div>
  );
}

export default App;
