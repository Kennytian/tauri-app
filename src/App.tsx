import React from 'react';
import './App.css';
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter counterId={1} />
        <Counter counterId={1} />
        <Counter counterId={2} />
      </header>
    </div>
  );
}

export default App;
