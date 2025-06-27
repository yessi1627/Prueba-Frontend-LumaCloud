import React from 'react';
import CounterCard from './CounterCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Mi Contador en React</h1>
      <CounterCard title="Contador LumaCloud" initialValue={0} />
    </div>
  );
}

export default App;
