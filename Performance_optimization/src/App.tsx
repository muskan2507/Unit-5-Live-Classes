
import { useMemo, useState } from 'react';
import './App.css';
import Fib from './Components/Fib';
import Todos from './Components/Todos';

function App() {
  
  return (
    <div className="App">
    <Fib/>
    <Todos/>
    </div>
  );
}

export default App;
