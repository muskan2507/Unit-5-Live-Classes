import { useMemo, useState } from 'react';
import './App.css';
import Fib from './Components/Fib';
import Todos from './Components/Todos';
import { Counter } from './Components/useReducer';

function App() {
  
  return (
    <div className="App">
    <Fib/>
    <br /><hr /><br />
    <Todos/>
    <br /><hr /><br />
   <Counter/>
   
    </div>
  );
}

export default App;
