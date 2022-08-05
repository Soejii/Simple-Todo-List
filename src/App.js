import './App.css';
import React, {useState, UseState} from 'react';

function App() {
  const [Todo, setTodo] = useState({})
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
      </header>
    </div>
  );
}

export default App;
