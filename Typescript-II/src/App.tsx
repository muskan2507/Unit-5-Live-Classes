
import './App.css';
import Counter from './Components/Counter';
import Todos from './Components/Todos';

function App() {
  
  return (
    <div className="App">
    
     <Counter init={5}>
       <button>Child</button>
       <button>Child</button>
     </Counter>
     <br/>
     <br/>
     <hr/>
     <br/>
     <br/>
     <Todos/>
     <br/>
    </div>
  );
}

export default App;
